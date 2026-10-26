#!/usr/bin/env node
/**
 * 上游 → 站点的单向搬运工具。
 *
 * 约束（重要）：
 *   1. 只读上游目录，绝不写入。上游项目对本站点完全无感知。
 *   2. 幂等：同一日期重复执行结果一致；漏跑一天可在次日用 --all 补齐。
 *   3. 不做渲染，不联网。渲染交给 astro build。
 *
 * 用法：
 *   node tools/ingest.mjs --source E:/WorkBuddy/Github-Push-EveryDay --date 2026-10-26
 *   node tools/ingest.mjs --source E:/WorkBuddy/Github-Push-EveryDay --all
 *   追加 --push 可在搬运后自动 commit 并推送
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, '_data');

const argv = process.argv.slice(2);
const flag = (name, fallback = null) => {
  const i = argv.indexOf(name);
  return i > -1 ? argv[i + 1] : fallback;
};
const has = (name) => argv.includes(name);

const SOURCE = path.resolve(flag('--source', ''));
if (!flag('--source')) {
  console.error('缺少 --source <上游项目目录>');
  process.exit(1);
}

const SRC_REPORTS = path.join(SOURCE, 'data/reports');
const SRC_SUMMARIES = path.join(SOURCE, 'data/summaries');
const SRC_SNAPSHOTS = path.join(SOURCE, 'data/snapshots');

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
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, next, 'utf8');
  return true;
}

function listJson(dir) {
  try {
    return fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort();
  } catch {
    return [];
  }
}

/** 读取上游快照，用于给首次出现的项目回填更早的星标点 */
function loadSnapshots() {
  return listJson(SRC_SNAPSHOTS)
    .map((f) => readJson(path.join(SRC_SNAPSHOTS, f)))
    .filter((s) => s && s.date && s.stars);
}

const slugOf = (fullName) => fullName.replace('/', '__');

function ingestDate(date, snapshots) {
  const reportFile = path.join(SRC_REPORTS, `${date}.json`);
  const report = readJson(reportFile);
  if (!report) {
    console.warn(`   ! 跳过 ${date}：上游不存在 data/reports/${date}.json`);
    return { date, skipped: true };
  }

  const changedReport = writeIfChanged(path.join(DATA, 'reports', `${date}.json`), report);

  let changedSummary = false;
  const summary = readJson(path.join(SRC_SUMMARIES, `${date}.json`));
  if (summary) {
    changedSummary = writeIfChanged(path.join(DATA, 'summaries', `${date}.json`), summary);
  }

  let seriesTouched = 0;
  for (const cat of report.categories || []) {
    for (const item of cat.items || []) {
      const slug = slugOf(item.full_name);
      const file = path.join(DATA, 'series', `${slug}.json`);
      const existing = readJson(file, []);
      const map = new Map(existing.map((p) => [p.date, p]));

      // 回填：快照里早于本期的历史点
      for (const snap of snapshots) {
        if (snap.date > date) continue;
        const stars = snap.stars[item.full_name];
        if (typeof stars === 'number' && !map.has(snap.date)) {
          map.set(snap.date, { date: snap.date, stars });
        }
      }

      map.set(date, {
        date,
        stars: item.stars,
        forks: item.forks,
        rating: item.rating,
        rank: item.rank,
      });

      const points = [...map.values()].sort((a, b) => a.date.localeCompare(b.date));
      if (writeIfChanged(file, points)) seriesTouched++;
    }
  }

  const n = (report.categories || []).reduce((sum, c) => sum + (c.items || []).length, 0);
  console.log(
    `   ${date}  入选 ${String(n).padStart(2)}  报告${changedReport ? '更新' : '未变'}  摘要${summary ? (changedSummary ? '更新' : '未变') : '缺失'}  序列${seriesTouched}条`
  );
  return { date, count: n };
}

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, stdio: 'pipe', encoding: 'utf8' }).trim();
}

function pushToRemote(dateLabel) {
  try {
    git(['rev-parse', '--is-inside-work-tree']);
  } catch {
    console.warn('   ! 当前目录不是 git 仓库，跳过推送');
    return;
  }
  try {
    git(['add', '-A']);
    const staged = git(['diff', '--cached', '--name-only']);
    if (!staged) {
      console.log('   没有需要提交的变更');
      return;
    }
    git(['commit', '-m', `data: ingest ${dateLabel}`]);
    git(['push']);
    console.log(`   已推送：${staged.split('\n').length} 个文件`);
  } catch (e) {
    // 推送失败不影响主流程：站点幂等，下次运行会补上
    console.warn(`   ! 推送失败（不影响上游日报）：${String(e.message).slice(0, 160)}`);
  }
}

function main() {
  if (!fs.existsSync(SRC_REPORTS)) {
    console.error(`上游报告目录不存在：${SRC_REPORTS}`);
    process.exit(1);
  }

  const snapshots = loadSnapshots();
  const all = has('--all');
  const single = flag('--date', null);

  let dates;
  if (all) {
    dates = listJson(SRC_REPORTS).map((f) => f.replace(/\.json$/, ''));
  } else if (single) {
    dates = [single];
  } else {
    dates = listJson(SRC_REPORTS).map((f) => f.replace(/\.json$/, '')).slice(-1);
  }

  console.log(`上游：${SOURCE}`);
  console.log(`快照：${snapshots.length} 份 · 待搬运：${dates.length} 期\n`);

  const done = [];
  for (const date of dates) {
    const r = ingestDate(date, snapshots);
    if (!r.skipped) done.push(r);
  }

  const total = done.reduce((s, d) => s + d.count, 0);
  console.log(`\n完成：${done.length} 期 / ${total} 条记录 → _data/`);

  if (has('--push')) {
    console.log('\n推送到远端：');
    pushToRemote(done.at(-1)?.date ?? 'update');
  }
}

main();
