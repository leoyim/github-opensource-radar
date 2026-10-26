# 开源雷达 · OpenSource Radar

每日 GitHub 热点项目日报的独立站点。数据来自上游日报项目产出的 JSON，本站只读不写，渲染与排版完全独立。

## 与其他项目的关系

```
上游日报项目（产出方）                本站（消费方）
  data/reports/<date>.json      ──只读──►  _data/reports/<date>.json
  data/summaries/<date>.json    ──只读──►  _data/summaries/<date>.json
  data/snapshots/<date>.json    ──只读──►  _data/series/*.json（星标序列）
```

- 本站**从不写入上游目录**，也不 import 上游任何代码。
- 上游结构变化时，本站构建会失败并指出具体字段（见 `src/lib/schema.ts`），而不是静默渲染空白。
- `_data/` 是数据快照，随仓库提交：拿到它就能重建全部历史页面。

## 命令

```bash
npm install

# 搬运一期数据（只读上游）
node tools/ingest.mjs --source <上游路径> --date 2026-10-26

# 全量补齐（幂等，漏跑一天时用它）
node tools/ingest.mjs --source <上游路径> --all

# 搬运后自动提交并推送
node tools/ingest.mjs --source <上游路径> --date 2026-10-26 --push

npm run dev        # 本地预览
npm run build      # 产出 dist/
```

## 页面

| 路径 | 内容 |
|---|---|
| `/` | 最新一期 |
| `/posts/<date>/` | 单期永久链接 |
| `/archive/` | 全部期次 |
| `/stats/` | 跨期聚合：评分分布、语言分布、涨星榜、常驻榜 |

## 字体

正文使用「霞鹜文楷等宽」（LXGW WenKai Mono），通过 `lxgw-wenkai-webfont` 自托管，不依赖任何第三方 CDN：

- 字体按 `unicode-range` 切成 97 个 woff2 分片，浏览器只下载页面实际用到的分片（全量 4.4MB，单页通常 1–2MB）。
- `font-display: swap`，加载期间先用系统字体渲染，不阻塞首屏。
- 字体栈首位是 `"LXGW WenKai Mono"` / `"霞鹜文楷等宽"`：本机已安装则直接用本机字形，未安装才走 webfont。
- 分片加载失败时按 `--sans` 顺序回退到系统中文黑体。
- 许可 OFL-1.1，许可证随站点发布在 `/fonts/OFL.txt`，页脚有署名。

排版适配：楷体笔画细、视觉字号偏小，因此行高设为 1.82、标题取消粗体（避免合成加粗发糊）、层级改由字号与位置建立；`--mono` 栈末尾追加了文楷，防止等宽元素里的中文回落到黑体。

若只想让标题用文楷，把 `--sans` 拆成 `--sans`（系统字体）与 `--display`（文楷）两个变量，分别应用到对应元素即可。

## 可访问性

- 键盘：全局 :focus-visible 焦点环（2px 强调色、offset 3px）；main 例外，避免跳转后整块描边。
- 跳转链接：Tab 首站是可聚焦的「跳到主要内容」，指向 #main-content。
- 锚点：h1/h2/h3/.cat/.panel 设 scroll-margin-top: 148px，避开 64 + 64 的双层 sticky。
- 主题色：meta[theme-color] 跟随实际主题（含手动切换）更新，而非只读系统偏好。
- 动效：prefers-reduced-motion 下禁用过渡，「回到顶部」改为瞬时跳转。
- 状态：视角与方向筛选写入 URL（?role=frontend&cat=ai），支持分享、刷新保持与前进后退。

## 主题层

视觉决策集中在两处，换肤只需改这两处并重新构建：

- `src/styles/global.css` —— 颜色、字体、间距、组件外观（CSS 变量 + 原生样式，无 UI 框架）
- `src/layouts/` + `src/components/` —— 结构

页面交互（视角切换、方向筛选、深浅色）用内联原生脚本实现，不引入运行时框架，默认输出零 JS 也能完整阅读。

## 部署

仓库：`github-opensource-radar`（公开）。推送到 `main` 后由 GitHub Actions 构建并发布到 GitHub Pages。

站点地址：**https://osradar.leoyim.cn**（自定义域名，根路径部署，`base` 恒为 `/`）。

- `public/CNAME` 声明域名，随构建进入 `dist/` 根目录；
- 工作流注入 `SITE_URL=https://osradar.leoyim.cn` 与 `SITE_BASE=/`，用于生成 canonical 与 `og:url`；
- 首次部署需要一次性配置：

  1. DNS 添加记录：`osradar` → CNAME → `leoyim.github.io`
  2. 仓库 Settings → Pages → Source 选择 **GitHub Actions**
  3. 证书签发后勾选 **Enforce HTTPS**

本地构建不注入 `SITE_URL` 时不会输出 canonical，避免产物带出占位域名。

## 已知边界

- 星标走势依赖 `_data/series/` 的逐日累积，首期没有更早的历史点，曲线会较短。
- 站内不出现任何邮箱等联系信息，页面可直接公开。
