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
const OWNERS = path.join(DATA_DIR, 'owners.json');

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

/**
 * owner → 头像地址。缓存由上游日报流水线的 scripts/resolve-avatars.mjs 生成，
 * tools/ingest.mjs 原样搬运进 _data/owners.json；构建期不访问任何接口，
 * 缓存里没有的 owner 返回 null，由徽记兜底。
 */
let ownerAvatars: Record<string, string> | null = null;

export function avatarOf(owner: string): string | null {
  if (!ownerAvatars) {
    try {
      ownerAvatars = JSON.parse(fs.readFileSync(OWNERS, 'utf8')) as Record<string, string>;
    } catch {
      ownerAvatars = {};
    }
  }
  return ownerAvatars[owner] ?? null;
}

export const displayDate = (date: string): string => {
  const [, m, d] = date.split('-');
  return `${Number(m)} 月 ${Number(d)} 日`;
};

const WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

/**
 * 星期必须只由「年月日」本身决定，不能带时区。
 * 之前的写法 new Date(`${date}T00:00:00+08:00`).getDay() 取的是「构建机本地时区」的星期，
 * 而 GitHub Actions 跑在 UTC，东八区零点往前推 8 小时就落到了前一天，整站星期集体早一天。
 * 用 Date.UTC 构造再取 getUTCDay，等于纯粹按日历算，与机器时区无关。
 */
export const weekdayOf = (date: string): string => {
  const [y, m, d] = date.split('-').map(Number);
  return WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
};
