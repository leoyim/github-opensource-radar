import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assertIssue, assertSeries, type Issue, type SeriesPoint } from './schema';

/**
 * 数据层：只读 _data/，不做任何网络请求。
 * _data 由 tools/ingest.mjs 从上游项目拷贝进来，站点从不反过来写上游。
 */
export const DATA_DIR = path.resolve(fileURLToPath(new URL('../../_data', import.meta.url)));
const REPORTS = path.join(DATA_DIR, 'reports');
const SUMMARIES = path.join(DATA_DIR, 'summaries');
const SERIES = path.join(DATA_DIR, 'series');

const readJson = (p: string): unknown => JSON.parse(fs.readFileSync(p, 'utf8'));

function readDirSafe(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }
}

/** 所有期次日期，倒序（最新在前） */
export function listDates(): string[] {
  if (!readDirSafe(REPORTS).length) {
    throw new Error(`[数据缺失] ${REPORTS} 为空。先执行：node tools/ingest.mjs --source <上游项目> --all`);
  }
  return readDirSafe(REPORTS)
    .map((f) => f.replace(/\.json$/, ''))
    .sort()
    .reverse();
}

export function neighborsOf(date: string): { prev: string | null; next: string | null } {
  const desc = listDates();
  const i = desc.indexOf(date);
  return {
    prev: i >= 0 && i + 1 < desc.length ? desc[i + 1] : null,
    next: i > 0 ? desc[i - 1] : null,
  };
}

type Summary = { summary_zh?: string; highlight_zh?: string };

export function loadIssue(date: string): Issue {
  const issue = assertIssue(readJson(path.join(REPORTS, `${date}.json`)), `_data/reports/${date}.json`);

  // 中文摘要不在报告 JSON 里，需按 full_name 合并 summaries
  let summaries: Record<string, Summary> = {};
  try {
    summaries = readJson(path.join(SUMMARIES, `${date}.json`)) as Record<string, Summary>;
  } catch {
    /* 未生成摘要时降级到原始描述 */
  }

  for (const cat of issue.categories) {
    for (const item of cat.items) {
      const patch = summaries[item.full_name];
      if (patch?.summary_zh) item.summary_zh = patch.summary_zh;
      if (patch?.highlight_zh) item.highlight_zh = patch.highlight_zh;
    }
  }
  return issue;
}

export function loadAllIssues(): Issue[] {
  return listDates().map(loadIssue);
}

export function loadSeries(slug: string): SeriesPoint[] {
  try {
    return assertSeries(readJson(path.join(SERIES, `${slug}.json`)), `_data/series/${slug}.json`);
  } catch {
    return [];
  }
}

export function seriesFor(fullName: string): SeriesPoint[] {
  return loadSeries(fullName.replace('/', '__'));
}

export const displayDate = (date: string): string => {
  const [, m, d] = date.split('-');
  return `${Number(m)} 月 ${Number(d)} 日`;
};

/** 汉字数字（1 - 31 足够覆盖月份与日期） */
const CN_DIGITS = '零一二三四五六七八九';

function cnNumber(n: number): string {
  if (n < 10) return CN_DIGITS[n];
  if (n === 10) return '十';
  if (n < 20) return `十${CN_DIGITS[n % 10]}`;
  const tens = Math.floor(n / 10);
  const rest = n % 10;
  return `${CN_DIGITS[tens]}十${rest ? CN_DIGITS[rest] : ''}`;
}

/** 版面用的汉字日期：十月二十六日。目录、封面标题用，<title> 仍用阿拉伯数字 */
export const displayDateCn = (date: string): string => {
  const [, m, d] = date.split('-');
  return `${cnNumber(Number(m))}月${cnNumber(Number(d))}日`;
};

export const weekdayOf = (date: string): string =>
  ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date(`${date}T00:00:00+08:00`).getDay()];
