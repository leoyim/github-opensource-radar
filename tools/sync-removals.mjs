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
 *   1. 单向：只读 blacklist，只写 _data/ 下受治理影响的数据，绝不碰上游目录。
 *   2. 幂等：没有命中就不写盘，重复执行结果一致。
 *   3. 口径：stats.selected 恒等于该期实际展示的条目数；附录 removed[] 只保留
 *      尚未进台账的条目——进了台账的，展示面统一交给 /removed/，期次页不再重复列出。
 *   4. 回写范围不只 reports：黑名单项目在 summaries / interpretations / series 里的
 *      残留同样清掉——报告条目已撤下，这些文件虽不上页面，但口径必须闭环，
 *      否则 ingest --all 一跑又会被搬回来。
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
const SUMMARIES = path.join(DATA, 'summaries');
const INTERPRETATIONS = path.join(DATA, 'interpretations');
const SERIES = path.join(DATA, 'series');

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

/**
 * 摘要 / 解读 / 走势序列里的黑名单残留。
 * 文件名约定与 ingest 一致：full_name 的首个 '/' 换成 '__'。
 * @param {{ write?: boolean, names: Set<string> }} options
 * @returns {{ summaryDates: string[], interpretationFiles: string[], seriesFiles: string[] }}
 */
export function scrubDerivedFiles({ write = true, names }) {
  const result = { summaryDates: [], interpretationFiles: [], seriesFiles: [] };

  // summaries/<date>.json：对象键即 full_name，直接删键
  try {
    for (const f of fs.readdirSync(SUMMARIES).filter((f) => f.endsWith('.json')).sort()) {
      const file = path.join(SUMMARIES, f);
      const data = readJson(file);
      if (!data || typeof data !== 'object' || Array.isArray(data)) continue;
      const hit = Object.keys(data).filter((k) => names.has(k));
      if (hit.length === 0) continue;
      if (write) {
        const next = { ...data };
        for (const k of hit) delete next[k];
        writeIfChanged(file, next);
      }
      result.summaryDates.push(`${f.replace(/\.json$/, '')}（${hit.length} 条）`);
    }
  } catch {
    /* 目录不存在 */
  }

  // interpretations/<date>/<owner>__<name>.md：整文件移除
  try {
    for (const d of fs.readdirSync(INTERPRETATIONS).sort()) {
      const dir = path.join(INTERPRETATIONS, d);
      if (!fs.statSync(dir).isDirectory()) continue;
      for (const f of fs.readdirSync(dir)) {
        const base = f.replace(/\.(md|html)$/, '');
        const [owner, ...rest] = base.split('__');
        if (!rest.length) continue;
        if (names.has(`${owner}/${rest.join('__')}`)) {
          if (write) fs.rmSync(path.join(dir, f));
          result.interpretationFiles.push(`${d}/${f}`);
        }
      }
    }
  } catch {
    /* 目录不存在 */
  }

  // series/<owner>__<name>.json：整文件移除
  try {
    for (const f of fs.readdirSync(SERIES)) {
      if (!f.endsWith('.json')) continue;
      const base = f.replace(/\.json$/, '');
      const [owner, ...rest] = base.split('__');
      if (!rest.length) continue;
      if (names.has(`${owner}/${rest.join('__')}`)) {
        if (write) fs.rmSync(path.join(SERIES, f));
        result.seriesFiles.push(f);
      }
    }
  } catch {
    /* 目录不存在 */
  }

  return result;
}

const invokedDirectly =
  process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (invokedDirectly) {
  const check = process.argv.includes('--check');
  const write = !check;
  const { touched, drift, mismatched } = applyRemovals({ write });

  const ledger = readJson(path.join(DATA, 'blacklist.json'));
  const names = new Set((Array.isArray(ledger?.entries) ? ledger.entries : []).map((e) => e.full_name));
  const scrub = names.size > 0 ? scrubDerivedFiles({ write, names }) : { summaryDates: [], interpretationFiles: [], seriesFiles: [] };

  for (const t of touched) {
    const parts = [];
    if (t.items.length > 0) parts.push(`条目 -${t.items.length}`);
    if (t.appendix > 0) parts.push(`附录 -${t.appendix}`);
    console.log(`   ${t.date}  ${parts.join('  ')}${check ? '（待修正）' : ''}`);
  }

  for (const s of scrub.summaryDates) console.log(`   summaries  ${s}${check ? '（待清理）' : ' 已清理'}`);
  for (const f of scrub.interpretationFiles) console.log(`   interpretations  ${f}${check ? '（待清理）' : ' 已移除'}`);
  for (const f of scrub.seriesFiles) console.log(`   series  ${f}${check ? '（待清理）' : ' 已移除'}`);

  for (const m of mismatched) console.warn(`   ! ${m}`);

  const scrubbed =
    scrub.summaryDates.length + scrub.interpretationFiles.length + scrub.seriesFiles.length;

  if (touched.length === 0 && scrubbed === 0) {
    console.log('台账与期次报告、摘要、解读、序列一致，无需修正。');
  } else if (check) {
    console.log(`\n共 ${drift + scrubbed} 处漂移，执行 npm run sync:removals 修正。`);
    process.exit(1);
  } else {
    const parts = [`撤下 ${drift} 条`];
    if (scrubbed > 0) parts.push(`清理残留 ${scrubbed} 处`);
    console.log(`\n已写入 ${touched.length + scrubbed} 期，${parts.join('，')}。`);
  }
}
