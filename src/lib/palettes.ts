/**
 * 六套中国风配色的展示元数据。
 * 真正的色值都在 src/styles/global.css 的 Design Tokens 里；
 * 这里的 swatch / surface 只给扇骨色标用，需与 CSS 中的
 * --color-primary / --color-bg 保持一致。
 */
export type Palette = {
  id: string;
  /** 全称：读屏与题签标题里用 */
  name: string;
  /** 一字：刻在折扇扇头的题签上 */
  short: string;
  /** 三词副题：不用句子，用于悬停与读屏 */
  desc: string;
  /** 扇骨色标的主色 */
  swatch: string;
  /** 扇骨色标的纸色 */
  surface: string;
};

export const PALETTES: Palette[] = [
  { id: 'celadon', name: '青瓷雅韵', short: '瓷', desc: '温润 · 清雅 · 克制', swatch: '#477F78', surface: '#F5F7F2' },
  { id: 'daiqing', name: '黛青云山', short: '黛', desc: '沉静 · 理性 · 云山', swatch: '#315C78', surface: '#F2F6F7' },
  { id: 'zhusha', name: '朱砂鎏金', short: '朱', desc: '典雅 · 印章 · 宣纸', swatch: '#A83D35', surface: '#F8F4EA' },
  { id: 'feicui', name: '翡翠竹影', short: '竹', desc: '自然 · 生长 · 竹影', swatch: '#39765B', surface: '#F3F7F0' },
  { id: 'ziqi', name: '紫气东方', short: '紫', desc: '创新 · 未来 · 东方', swatch: '#7061A8', surface: '#F6F4FA' },
  { id: 'moyun', name: '墨韵宣纸', short: '墨', desc: '经典 · 墨绿 · 冷纸白', swatch: '#14573F', surface: '#EEEFEA' },
];

export const DEFAULT_PALETTE = 'celadon';
export const PALETTE_IDS = PALETTES.map((p) => p.id);
