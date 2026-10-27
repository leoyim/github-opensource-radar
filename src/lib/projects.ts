/**
 * 全部项目索引：把每一期的条目按仓库摊平，跨期只留一行。
 *
 * 与 archive / stats 的分工：
 *   archive 按「期」看时间线，stats 看跨期指标，这里按「仓库」看目录。
 * 数据全部来自构建期的 _data/，无额外抓取、无运行时请求。
 */
import { listDates, loadAllIssues, seriesFor } from './load';
import type { IssueItem, SeriesPoint } from './schema';

export type Project = IssueItem & {
  categoryId: string;
  categoryLabel: string;
  /** 最近一次出现的期次 */
  date: string;
  /** 最近一次出现时的期内排名 */
  rank: number;
  /** 累计上榜次数 */
  times: number;
  /** 出现过的期次，新→旧 */
  dates: string[];
  series: SeriesPoint[];
};

export type LangStat = { lang: string; slug: string; count: number };

/** 每页条数。24 = 6 类 × 4 行，也保证页码在两位数以内 */
export const PAGE_SIZE = 24;

export const UNKNOWN_LANG = '未标注';

/** 语言名 → URL 段。C++ → cpp、C# → csharp，其余小写并压平非字母数字 */
export function langSlug(lang: string): string {
  if (!lang || lang === UNKNOWN_LANG) return 'unknown';
  return lang
    .toLowerCase()
    .replace(/\+\+/g, 'pp')
    .replace(/#/g, 'sharp')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const langOf = (p: Project): string => p.language || UNKNOWN_LANG;

let cache: Project[] | null = null;

/** 全部项目，最近上榜优先；同一期按期内排名 */
export function allProjects(): Project[] {
  if (cache) return cache;

  const map = new Map<string, Project>();
  for (const issue of loadAllIssues()) {
    // loadAllIssues 已按日期倒序：首次遇到即最近一期，后续只累加次数
    for (const cat of issue.categories) {
      for (const item of cat.items) {
        const seen = map.get(item.full_name);
        if (seen) {
          seen.times += 1;
          seen.dates.push(issue.date);
          continue;
        }
        map.set(item.full_name, {
          ...item,
          categoryId: cat.id,
          categoryLabel: cat.short || cat.label,
          date: issue.date,
          rank: item.rank,
          times: 1,
          dates: [issue.date],
          series: seriesFor(item.full_name),
        });
      }
    }
  }

  cache = [...map.values()].sort((a, b) =>
    a.date === b.date ? a.rank - b.rank : b.date.localeCompare(a.date)
  );
  return cache;
}

/** 语言分布，按条目数倒序 */
export function langStats(): LangStat[] {
  const map = new Map<string, LangStat>();
  for (const p of allProjects()) {
    const lang = langOf(p);
    const slug = langSlug(lang);
    const hit = map.get(slug);
    if (hit) hit.count += 1;
    else map.set(slug, { lang, slug, count: 1 });
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.lang.localeCompare(b.lang));
}

/** 某个语言下的全部项目；slug 不存在时返回空数组 */
export function projectsOfLang(slug: string): Project[] {
  const hit = langStats().find((l) => l.slug === slug);
  if (!hit) return [];
  return allProjects().filter((p) => langOf(p) === hit.lang);
}

export const pageCount = (total: number): number => Math.max(1, Math.ceil(total / PAGE_SIZE));

export function pageSlice<T>(list: T[], page: number): T[] {
  const start = (page - 1) * PAGE_SIZE;
  return list.slice(start, start + PAGE_SIZE);
}

/** 页首统计：条目、语言、期次与区间 */
export function catalogTotals() {
  const projects = allProjects();
  const dates = listDates();
  return {
    projects: projects.length,
    langs: langStats().length,
    issues: dates.length,
    earliest: dates[dates.length - 1],
    latest: dates[0],
  };
}
