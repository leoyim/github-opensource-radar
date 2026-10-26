declare module 'lunar-javascript' {
  export class Solar {
    static fromYmd(year: number, month: number, day: number): Solar;
    getYear(): number;
    getMonth(): number;
    getDay(): number;
    toYmd(): string;
    getLunar(): Lunar;
  }

  export class JieQi {
    getName(): string;
    getSolar(): Solar;
  }

  export class Lunar {
    getYearInGanZhi(): string;
    getYearShengXiao(): string;
    getMonth(): number;
    getMonthInChinese(): string;
    getDayInChinese(): string;
    /** 当日恰为节气时返回节气名，否则返回空串 */
    getJieQi(): string;
    getPrevJieQi(): JieQi;
    getNextJieQi(): JieQi;
  }
}
