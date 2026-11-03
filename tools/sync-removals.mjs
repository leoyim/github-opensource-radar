#!/usr/bin/env node
/**
 * 台账 → 期次报告的回写工具：把已经移除的项目从「原榜单」里撤下来。
 *
 * 为什么需要这一步：
 *   ingest.mjs 只是原样搬运上游报告。上游若在新增台账条目后没有重跑回溯，
 *   站点就会在往期页面上继续展示一个已经下架的仓库，且入选数与实际条目数对不上。
 *   这里以 _data/blacklist.json 为唯一准绳，把差值补齐。
 *
 * 约束：
 *   1. 单向：只读 blacklist，只写 _data/reports/*.json，绝不碰上游目录。
 *   2. 幂等：没有命中就不写盘，重复执行结果一致。
 *   3. 口径：stats.selected 恒等于该期实际展示的条目数；附录 removed[] 只保留
 *      尚未进台账的条目——进了台账的，展示面统一交给 /removed/，期次页不再重复列出。
 *
 * 用法：
 *   node tools/sync-removals.mjs           # 修正并落盘
 *   node tools/sync-removals.mjs --check   # 只检测不写，有漂移时退出码 1
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, '_data');
const REPORTS = path.join(DATA, 'reports');

const readJson = (p, fallback = null) => {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return fallback;
  }
};

function writeIfChanged(file, value) {
  const next = JSON.stringify(value, null, 2);
  try {
    if (fs.readFileSync(file, 'utf8') === next) return false;
  } catch {
    /* 新文件 */
  }
  fs.writeFileSync(file, next, 'utf8');
  return true;
}

/**
 * @param {{ write?: boolean }} options
 * @returns {{ touched: Array<{date: string, items: string[], appendix: number}>, drift: number, mismatched: string[] }}
 */
export function applyRemovals({ write = true } = {}) {
  const ledger = readJson(path.join(DATA, 'blacklist.json'));
  const entries = Array.isArray(ledger?.entries) ? ledger.entries : [];
  if (entries.length === 0) return { touched: [], drift: 0, mismatched: [] };

  const byName = new Map(entries.map((e) => [e.full_name, e]));
  let files = [];
  try {
    files = fs
      .readdirSync(REPORTS)
      .filter((f) => f.endsWith('.json'))
      .sort();
  } catch {
    return { touched: [], drift: 0, mismatched: [] };
  }

  const touched = [];
  const mismatched = [];
  let drift = 0;

  for (const f of files) {
    const file = path.join(REPORTS, f);
    const issue = readJson(file);
    if (!issue || !Array.isArray(issue.categories)) continue;

    const date = issue.date ?? f.replace(/\.json$/, '');
    const droppedItems = [];

    const categories = [];
    for (const cat of issue.categories) {
      const items = cat.items ?? [];
      const kept = [];
      for (const item of items) {
        const entry = byName.get(item.full_name);
        if (!entry) {
          kept.push(item);
          continue;
        }
        droppedItems.push(item.full_name);
        // 台账的 issues 应当记录过这一期；没记录说明两处数据已经不一致，值得报出来
        const issues = entry.issues ?? [];
        if (issues.length > 0 && !issues.includes(date)) {
          mismatched.push(`${item.full_name} 出现在 ${date}，台账 issues 未收录该期`);
        }
      }
      // 整类被清空就不必留一个空标题；全部清空时保留原结构，避免分类数组为空
      if (kept.length === 0 && items.length > 0) continue;
      categories.push({ ...cat, items: kept });
    }

    const hasAppendix = Array.isArray(issue.removed);
    const appendix = hasAppendix ? issue.removed.filter((e) => !byName.has(e.full_name)) : [];
    const droppedAppendix = hasAppendix ? issue.removed.length - appendix.length : 0;

    if (droppedItems.length === 0 && droppedAppendix === 0) continue;

    drift += droppedItems.length + droppedAppendix;

    const next = { ...issue };
    next.categories = categories.length > 0 ? categories : issue.categories;

    if (droppedItems.length > 0) {
      const total = next.categories.reduce((sum, c) => sum + (c.items?.length ?? 0), 0);
      next.stats = { ...issue.stats, selected: total };
    }
    if (droppedAppendix > 0) next.removed = appendix;

    if (write) writeIfChanged(file, next);
    touched.push({ date, items: droppedItems, appendix: droppedAppendix });
  }

  return { touched, drift, mismatched };
}

const invokedDirectly =
  process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (invokedDirectly) {
  const check = process.argv.includes('--check');
  const { touched, drift, mismatched } = applyRemovals({ write: !check });

  for (const t of touched) {
    const parts = [];
    if (t.items.length > 0) parts.push(`条目 -${t.items.length}`);
    if (t.appendix > 0) parts.push(`附录 -${t.appendix}`);
    console.log(`   ${t.date}  ${parts.join('  ')}${check ? '（待修正）' : ''}`);
  }

  for (const m of mismatched) console.warn(`   ! ${m}`);

  if (touched.length === 0) {
    console.log('台账与期次报告一致，无需修正。');
  } else if (check) {
    console.log(`\n共 ${drift} 处漂移，执行 npm run sync:removals 修正。`);
    process.exit(1);
  } else {
    console.log(`\n已写入 ${touched.length} 期，撤下 ${drift} 条。`);
  }
}
