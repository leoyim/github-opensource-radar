/**
 * 上游数据契约。
 * 这里不是"类型声明"那么轻：每个字段都在构建期校验，
 * 上游 JSON 结构一旦变动，构建会直接失败并指出路径，而不是渲染出空白卡片。
 */

export type Breakdown = {
  heat: number;
  community: number;
  activity: number;
  maturity: number;
};

export type ReadmeDigest = {
  path?: string;
  excerpt?: string;
  features?: string[];
  sections?: string[];
  hasInstall?: boolean;
  hasDemo?: boolean;
  length?: number;
};

export type IssueItem = {
  rank: number;
  full_name: string;
  owner: string;
  name: string;
  url: string;
  homepage?: string;
  description?: string;
  language?: string;
  topics?: string[];
  stars: number;
  forks: number;
  open_issues?: number;
  starGain?: number | null;
  heat: number;
  heatBasis: string;
  heatPercentile?: number;
  ageDays?: number;
  created_at?: string;
  pushed_at?: string;
  license?: string;
  rating: number;
  composite?: number;
  breakdown?: Breakdown;
  roleScores?: Record<string, number>;
  summary_zh?: string;
  highlight_zh?: string;
  readme?: ReadmeDigest;
};

export type IssueCategory = {
  id: string;
  label: string;
  short?: string;
  emoji?: string;
  accent?: string;
  desc?: string;
  items: IssueItem[];
};

export type Issue = {
  date: string;
  generatedAt: string;
  baseline: { prevSnapshotDate?: string | null; heatBasis?: string };
  stats: {
    candidates: number;
    unclassified?: number;
    selected: number;
    suppressedByHistory: number;
  };
  categories: IssueCategory[];
  suppressed?: Array<{ full_name: string; category: string; lastPushed?: string }>;
};

export type SeriesPoint = {
  date: string;
  stars: number;
  forks?: number;
  rating?: number;
  rank?: number;
};

const fail = (path: string, expected: string, got: unknown): never => {
  throw new Error(
    `[数据契约] ${path} 期望 ${expected}，实际为 ${JSON.stringify(got)?.slice(0, 80)}`
  );
};

const isObj = (v: unknown): v is Record<string, any> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

/** 只校验渲染真正依赖的字段，其余字段允许自由扩展 */
export function assertIssue(value: unknown, ctx: string): Issue {
  if (!isObj(value)) fail(ctx, 'object', value);
  const issue = value as Record<string, any>;

  if (typeof issue.date !== 'string') fail(`${ctx}.date`, 'string', issue.date);
  if (!isObj(issue.stats)) fail(`${ctx}.stats`, 'object', issue.stats);
  if (typeof issue.stats.selected !== 'number') fail(`${ctx}.stats.selected`, 'number', issue.stats.selected);
  if (!Array.isArray(issue.categories) || issue.categories.length === 0) {
    fail(`${ctx}.categories`, 'non-empty array', issue.categories);
  }

  issue.categories.forEach((cat: any, ci: number) => {
    const at = `${ctx}.categories[${ci}]`;
    if (!isObj(cat)) fail(at, 'object', cat);
    if (typeof cat.id !== 'string') fail(`${at}.id`, 'string', cat.id);
    if (typeof cat.label !== 'string') fail(`${at}.label`, 'string', cat.label);
    if (!Array.isArray(cat.items)) fail(`${at}.items`, 'array', cat.items);

    cat.items.forEach((item: any, ii: number) => {
      const ip = `${at}.items[${ii}]`;
      if (!isObj(item)) fail(ip, 'object', item);
      if (typeof item.full_name !== 'string') fail(`${ip}.full_name`, 'string', item.full_name);
      if (typeof item.url !== 'string') fail(`${ip}.url`, 'string', item.url);
      if (typeof item.rating !== 'number') fail(`${ip}.rating`, 'number', item.rating);
      if (typeof item.stars !== 'number') fail(`${ip}.stars`, 'number', item.stars);
    });
  });

  return issue as Issue;
}

export function assertSeries(value: unknown, ctx: string): SeriesPoint[] {
  if (!Array.isArray(value)) fail(ctx, 'array', value);
  return value as SeriesPoint[];
}
