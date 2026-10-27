/** 展示用格式化，全部纯函数，无副作用 */

export const num = (n: number): string => n.toLocaleString('en-US');

export const pct = (n: number): string => `${Math.round(n)}%`;

export const clamp = (v: number, lo = 0, hi = 100): number => Math.min(hi, Math.max(lo, v));

/** 0.5 分制 → 5 格：full / half / empty */
export function ratingCells(rating: number): Array<'full' | 'half' | 'empty'> {
  const cells: Array<'full' | 'half' | 'empty'> = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) cells.push('full');
    else if (rating >= i - 0.5) cells.push('half');
    else cells.push('empty');
  }
  return cells;
}

export const heatLabel = (basis: string): string =>
  basis === 'snapshot' ? '真实日增' : basis === 'trending' ? 'Trending 日增' : '速度估算';

/** 角色 id → 展示名。站点自持，不依赖上游配置，未知 id 直接回退显示 */
export const ROLE_LABELS: Record<string, string> = {
  frontend: '前端',
  backend: '后端',
  devops: 'DevOps / SRE',
  ai: 'AI 应用',
  data: '数据',
};

export const roleLabel = (id: string): string => ROLE_LABELS[id] ?? id;

/** 书脊竖排分词：汉字一字一行、数字每两位一行、西文一词一行。
 *  「/」按分隔符处理（「AI / 大模型」→ AI、大、模、型），构建期与前端共用。 */
export function spineLines(text: string): string[] {
  const lines: string[] = [];
  for (const part of text.split('/')) {
    for (const token of part.match(/\d+|[A-Za-z][\w'’+.#-]*|\S/gu) ?? []) {
      if (/^\d+$/.test(token)) {
        for (let i = 0; i < token.length; i += 2) lines.push(token.slice(i, i + 2));
      } else {
        lines.push(token);
      }
    }
  }
  return lines;
}

/** 趋势折线：把点列映射成 svg polyline 的 points 串 */
export function sparkPoints(values: number[], w = 108, h = 24, pad = 2): string {
  if (values.length < 2) return '';
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  return values
    .map((v, i) => {
      const x = pad + (i / (values.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / span) * (h - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}
