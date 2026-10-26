import { Solar } from 'lunar-javascript';

/**
 * 农历与节气：构建期本地推算，不请求任何外部接口。
 *
 * 站点对外的承诺是「静态生成、无追踪、无外部脚本」，所以这里不调公开黄历 API，
 * 而是用 lunar-javascript（MIT，6tail）在构建时离线算好，写死进 HTML。
 * 数据缺一天就重算一天，没有任何运行时依赖。
 */

export type Almanac = {
  /** 干支年，如 丙午 */
  ganzhiYear: string;
  /** 生肖，如 马 */
  zodiac: string;
  /** 农历月日，如 九月十七 / 闰六月初八 */
  lunarDate: string;
  /** 当日恰逢节气时的节气名，否则为 null */
  jieQi: string | null;
  /** 下一个节气名，如 立冬 */
  nextJieQi: string;
  /** 距下一个节气的天数 */
  daysToNextJieQi: number;
};

const DAY_MS = 86_400_000;

const cache = new Map<string, Almanac>();

export function almanacOf(date: string): Almanac {
  const hit = cache.get(date);
  if (hit) return hit;

  const [y, m, d] = date.split('-').map(Number);
  const lunar = Solar.fromYmd(y, m, d).getLunar();
  const next = lunar.getNextJieQi().getSolar();
  const days = Math.round(
    (Date.UTC(next.getYear(), next.getMonth() - 1, next.getDay()) - Date.UTC(y, m - 1, d)) / DAY_MS
  );

  const almanac: Almanac = {
    ganzhiYear: lunar.getYearInGanZhi(),
    zodiac: lunar.getYearShengXiao(),
    lunarDate: `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`,
    jieQi: lunar.getJieQi() || null,
    nextJieQi: lunar.getNextJieQi().getName(),
    daysToNextJieQi: days > 0 ? days : 1,
  };

  cache.set(date, almanac);
  return almanac;
}

/** 目录页用：只有当天正好是节气才给出名字，其余返回 null */
export const jieQiOf = (date: string): string | null => almanacOf(date).jieQi;

/** 节气一行的话术：当天是节气就报今天，否则报还有几天到下一个 */
export function jieQiLine(a: Almanac): string {
  return a.jieQi ? `今日 ${a.jieQi}` : `距 ${a.nextJieQi} ${a.daysToNextJieQi} 日`;
}
