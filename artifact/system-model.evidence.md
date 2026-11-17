# 系统模型 · 证据索引

> 本文档为 [01-system-context.md](01-system-context.md)、[02-containers.md](02-containers.md)、[03-components.md](03-components.md) 中节点与关系的证据索引。
> 证据模型遵循 `architecture-evidence-model`：节点有稳定 ID、类型、状态、置信度与 `sourceRefs`；关系有类型、同步方式、协议与置信度。

## 证据覆盖

| 证据类型 | 已使用 | 来源 |
| --- | --- | --- |
| code | 是 | `src/**`、`tools/**` |
| config | 是 | `astro.config.mjs`、`package.json`、`tsconfig.json`、`public/CNAME` |
| contract | 是 | `src/lib/schema.ts` 的数据形状与断言 |
| data | 是 | `_data/` 快照、`overrides/observations/` |
| runtime | 部分 | 本地 `preview.log`；线上运行状态未采集 |
| document | 是 | `README.md`、`.github/workflows/pages.yml` |
| human-assumption | 是 | 上游流水线内部实现、Pages/CDN/DNS 线上状态 |

## 节点

| ID | 标签 | 类型 | 状态 | 置信度 | 说明 | sourceRefs |
| --- | --- | --- | --- | --- | --- | --- |
| `actor.reader` | 站点读者 | actor | current | high | 匿名访问公开静态页面 | `README.md:48-57` |
| `actor.maintainer` | 维护者 | actor | current | high | 本地运行 ingest/build 并推送 | `README.md:25-46` |
| `system.radar` | 开源雷达 | software-system | current | high | 静态日报站点与数据流水线边界 | `README.md:1-7` |
| `ext.upstream` | 上游日报流水线 | external-system | current | high | 仓库外采集与分析，产出数据快照 | `README.md:9-18`, `tools/ingest.mjs:41-49` |
| `ext.githubData` | GitHub 数据源 | external-system | current | high | Trending / Search API / 仓库元数据 | `README.md:71-72` |
| `ext.githubRepo` | GitHub 仓库 | external-system | current | high | 代码、`_data` 与工作流托管 | `.github/workflows/pages.yml:3-5` |
| `ext.githubActions` | GitHub Actions | external-system | current | high | 构建与 Pages 部署 | `.github/workflows/pages.yml:18-56` |
| `ext.githubPages` | GitHub Pages + CDN | external-system | current | high | 托管 `dist/` 与自定义域名 | `README.md:194-208` |
| `ext.dns` | DNS | external-system | current | medium | `osradar` CNAME 到 `leoyim.github.io` | `README.md:204-206` |
| `ext.avatarCdn` | GitHub 头像 CDN | external-system | current | high | 运行期头像图片 | `README.md:90-97`, `src/components/RepoRow.astro:93-113` |
| `ext.githubIssues` | GitHub Issues | external-system | current | high | 建议与勘误入口 | `src/layouts/Base.astro:17-18` |
| `ext.outbound` | 站外目标站点 | external-system | current | high | 用户主动点击；先弹提示 | `src/layouts/Base.astro:177-259` |
| `container.astroApp` | Astro 站点应用 | container | current | high | 构建期路由、渲染、数据读取 | `package.json:15-19`, `astro.config.mjs:6-10` |
| `container.dist` | 静态产物 `dist/` | container | current | high | 可托管的 HTML/CSS/JS | `.github/workflows/pages.yml:39-46` |
| `container.dataStore` | `_data/` 快照 | container | current | high | 文件即数据库，构建期只读 | `src/lib/load.ts:6-15`, `README.md:20-23` |
| `container.overrides` | `overrides/observations/` | container | current | high | 本期观察人工覆盖 | `src/lib/interpretations.ts:107-129` |
| `container.ingestCli` | Ingest CLI | container | current | high | 只读搬运、序列拼装、台账/头像同步 | `tools/ingest.mjs:1-17`, `tools/ingest.mjs:235-296` |
| `container.removalSync` | Removal Sync | container | current | high | 台账回写与漂移检测 | `tools/sync-removals.mjs:1-19` |
| `container.fanBuilder` | Fan Model Builder | container | current | high | 生成折扇 GLB | `tools/build-fan-glb.mjs:1-9` |
| `container.buildPipeline` | GitHub Actions 工作流 | container | current | high | 安装、构建、上传、部署 | `.github/workflows/pages.yml:18-56` |
| `container.browserRuntime` | 浏览器运行时 | container | current | high | 原生 JS、dialog、按需 Three.js | `src/layouts/Base.astro:110-260`, `src/scripts/fan3d.ts:204-221` |
| `comp.schema` | `schema.ts` | component | current | high | 数据契约与构建期断言 | `src/lib/schema.ts:1-5`, `src/lib/schema.ts:146-190` |
| `comp.load` | `load.ts` | component | current | high | 期次/摘要/序列/台账/头像读取 | `src/lib/load.ts:6-15`, `src/lib/load.ts:27-159` |
| `comp.projects` | `projects.ts` | component | current | high | 跨期项目目录、语言、分页 | `src/lib/projects.ts:1-7` |
| `comp.interp` | `interpretations.ts` | component | current | high | 解读剥壳、渲染、本期观察 | `src/lib/interpretations.ts:7-129` |
| `comp.almanac` | `almanac.ts` | component | current | high | 农历/节气离线推算 | `src/lib/almanac.ts:3-52` |
| `comp.format` | `format.ts` | component | current | high | 格式化、锚点、sparkline 点列 | `src/lib/format.ts:1-54` |
| `comp.palettes` | `palettes.ts` | component | current | high | 六套配色展示元数据 | `src/lib/palettes.ts:1-31` |
| `comp.routes` | `src/pages` 路由层 | component | current | high | 9 个路由文件，静态路径生成 | `src/pages/index.astro`, `src/pages/posts/[date].astro`, `src/pages/projects/**` |
| `comp.views` | 展示组件层 | component | current | high | Base/IssueView/ProjectsView/RepoRow 等 | `src/layouts/Base.astro`, `src/components/**` |
| `comp.siteNav` | `SiteNav` | component | current | high | 书眉、折扇、主题、配色 | `src/components/SiteNav.astro:1-19`, `src/components/SiteNav.astro:238-260` |
| `comp.clientRuntime` | 客户端交互 | component | current | high | 主题、筛选、浮层、外链提示、3D | `src/layouts/Base.astro:43-58`, `src/components/IssueView.astro:294-400` |
| `comp.designTokens` | Design Tokens | component | current | high | `global.css` 语义 token 与配色 | `src/styles/global.css`（文件头 token 区）、`README.md:175-192` |
| `comp.staticAssets` | 静态资源 | component | current | high | `seal.svg`、`fan.glb`、`CNAME`、favicon | `public/` |

## 关系

| ID | From → To | 类型 | 同步性 | 协议 | 置信度 | 说明 | sourceRefs |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `edge.githubData-upstream` | `ext.githubData` → `ext.upstream` | calls | sync | HTTPS | high | 上游抓取候选与元数据 | `README.md:71-72` |
| `edge.upstream-ingest` | `ext.upstream` → `container.ingestCli` | reads | batch | file | high | 只读搬运上游产物 | `tools/ingest.mjs:41-49`, `tools/ingest.mjs:107-166` |
| `edge.maintainer-ingest` | `actor.maintainer` → `container.ingestCli` | calls | sync | CLI | high | 运行搬运/回写/构建 | `README.md:25-46` |
| `edge.ingest-data` | `container.ingestCli` → `container.dataStore` | writes | batch | file | high | 写报告、摘要、序列、解读、台账、头像 | `tools/ingest.mjs:115-185`, `tools/ingest.mjs:219-233` |
| `edge.ingest-sync` | `container.ingestCli` → `container.removalSync` | calls | sync | in-process | high | 搬运后立即 `applyRemovals()` | `tools/ingest.mjs:270-282` |
| `edge.sync-data` | `container.removalSync` → `container.dataStore` | reads/writes | batch | file | high | 读台账，回写各期报告 | `tools/sync-removals.mjs:51-123` |
| `edge.fanBuilder-assets` | `container.fanBuilder` → `comp.staticAssets` | writes | batch | file | high | 生成 `public/models/fan.glb` | `tools/build-fan-glb.mjs:12` |
| `edge.data-app` | `container.dataStore` → `container.astroApp` | reads | batch | file | high | 构建期读取快照 | `src/lib/load.ts:6-15` |
| `edge.overrides-app` | `container.overrides` → `container.astroApp` | reads | batch | file | high | 本期观察覆盖优先 | `src/lib/interpretations.ts:117-128` |
| `edge.assets-app` | `comp.staticAssets` → `container.astroApp` | depends-on | build | file | high | 静态资源进入构建产物 | `astro.config.mjs:6-10` |
| `edge.app-dist` | `container.astroApp` → `container.dist` | writes | build | file | high | `astro build` 生成 | `package.json:8`, `astro.config.mjs:6-7` |
| `edge.repo-actions` | `ext.githubRepo` → `container.buildPipeline` | triggers | async | GitHub event | high | push main / workflow_dispatch | `.github/workflows/pages.yml:3-5` |
| `edge.actions-pages` | `container.buildPipeline` → `ext.githubPages` | deploys-to | async | Pages API | high | 上传 artifact 并 deploy | `.github/workflows/pages.yml:44-56` |
| `edge.dist-actions` | `container.dist` → `container.buildPipeline` | reads | build | file | high | 构建产物上传 | `.github/workflows/pages.yml:44-46` |
| `edge.pages-reader` | `ext.githubPages` → `actor.reader` | serves | sync | HTTPS | high | 返回静态页面 | `README.md:194-208` |
| `edge.reader-avatar` | `actor.reader` → `ext.avatarCdn` | reads | async | HTTPS | high | 头像图片请求 | `README.md:90-97`, `src/components/RepoRow.astro:93-113` |
| `edge.reader-outbound` | `actor.reader` → `ext.outbound` | calls | sync | HTTPS | high | 用户主动点击外链 | `src/layouts/Base.astro:177-259` |
| `edge.reader-issues` | `actor.reader` → `ext.githubIssues` | calls | async | HTTPS | high | 建议与勘误 | `src/layouts/Base.astro:17-18` |
| `edge.dns-pages` | `ext.dns` → `ext.githubPages` | routes-to | sync | DNS | medium | CNAME 解析 | `README.md:204-206` |
| `edge.load-schema` | `comp.load` → `comp.schema` | validates | build | in-process | high | 读报告时断言 | `src/lib/load.ts:48-49` |
| `edge.projects-load` | `comp.projects` → `comp.load` | depends-on | build | in-process | high | 跨期摊平依赖期次读取 | `src/lib/projects.ts:8` |
| `edge.interp-load` | `comp.interp` → `comp.load` | depends-on | build | in-process | high | 复用 `DATA_DIR` | `src/lib/interpretations.ts:5` |
| `edge.routes-load` | `comp.routes` → `comp.load` | depends-on | build | in-process | high | 页面读取期次/序列/台账 | `src/pages/stats.astro:3`, `src/pages/removed.astro:3` |
| `edge.routes-projects` | `comp.routes` → `comp.projects` | depends-on | build | in-process | high | 项目目录页 | `src/pages/projects/index.astro:4` |
| `edge.routes-interp` | `comp.routes` → `comp.interp` | depends-on | build | in-process | high | 解读渲染 | `src/components/IssueView.astro:6` |
| `edge.routes-almanac` | `comp.routes` → `comp.almanac` | depends-on | build | in-process | high | 农历/节气 | `src/pages/archive.astro:4` |
| `edge.routes-views` | `comp.routes` → `comp.views` | depends-on | build | in-process | high | 页面组合展示组件 | `src/pages/index.astro:2-3` |
| `edge.views-nav` | `comp.views` → `comp.siteNav` | depends-on | build | in-process | high | Base 引入 SiteNav | `src/layouts/Base.astro:1-2` |
| `edge.nav-client` | `comp.siteNav` → `comp.clientRuntime` | depends-on | build | in-process | high | 折扇/主题脚本 | `src/components/SiteNav.astro:790-832` |
| `edge.views-tokens` | `comp.views` → `comp.designTokens` | depends-on | build | CSS | high | 组件使用 token | `src/layouts/Base.astro:2` |
| `edge.client-assets` | `comp.clientRuntime` → `comp.staticAssets` | reads | async | HTTPS | high | 按需加载 `fan.glb` | `src/scripts/fan3d.ts:12` |
| `edge.interp-marked` | `comp.interp` → Markdown 渲染器 | calls | build | library | high | `marked` 渲染 | `src/lib/interpretations.ts:4`, `src/lib/interpretations.ts:64` |
| `edge.almanac-lunar` | `comp.almanac` → `lunar-javascript` | calls | build | library | high | 离线农历推算 | `src/lib/almanac.ts:1`, `src/lib/almanac.ts:35-47` |
| `edge.client-three` | `comp.clientRuntime` → Three.js | calls | async | dynamic import | high | 展开折扇时加载 | `src/scripts/fan3d.ts:212-217` |

## 未知与待验证项

| 项 | 当前状态 | 影响 | 建议验证方式 |
| --- | --- | --- | --- |
| 上游流水线调度器 | unknown | 无法判断数据延迟与重试语义 | 查看上游项目的定时任务配置与运行日志 |
| GitHub Pages CDN 缓存策略 | unknown | 发布后读者可能短时间看到旧页面 | 查看响应头 / 平台文档 |
| DNS 与 TLS 实际状态 | unknown（仅文档） | 域名/证书故障会直接导致不可达 | 线上 `dig`、证书链检查、Pages 设置核对 |
| 上游解读 HTML 是否可信 | assumption（视为可信） | `set:html` 注入未经 sanitation 的 Markdown 渲染结果 | 明确上游信任边界，或在构建期加入 HTML 白名单 |
| 回滚运行手册 | unknown | 发布错误时缺少标准回滚步骤 | 在仓库补充 runbook，或确认 Pages 历史部署可用 |
| 并发写 `_data/` | unknown（无锁） | 两个 ingest/sync 同时运行可能互相覆盖 | 约定单写者，或加入锁文件 |
| 本地 Node 24 与 CI Node 22 差异 | medium | 本地通过但 CI 失败（或反之） | 统一版本或在 CI 加 `astro check` |
| 3D 扇的键盘/对比度可访问性 | unknown | 键盘用户可能无法完成换色/收扇 | 浏览器 + 键盘 + 屏幕阅读器实测 |

## 验证命令

```bash
# 构建与契约校验（上游结构变化会在这里失败）
npm run build

# 台账漂移检测（只读，漂移时退出码 1）
npm run check:removals

# 本地预览
npm run preview

# 重新生成折扇模型（仅在修改几何时）
npm run build:fan
```

构建配置与脚本定义：[package.json:6-13](../package.json#L6-L13)、[astro.config.mjs:1-11](../astro.config.mjs#L1-L11)。