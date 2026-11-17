# 06 · 关键决策、约束与质量属性

> 说明：仓库内没有正式的 ADR 文档；以下决策是从代码、配置与 README 反推的“已实施决策”，置信度为高，除非单独标注。

## 决策记录（逆向 ADR）

### ADR-01 · 静态生成，不做运行时后端

- **背景**：内容是每日一批、读多写少、无需登录与个性化。
- **决策**：`output: 'static'`；所有页面在构建期生成；运行期只有静态资源。
- **结果**：无服务器、无数据库、无 API；部署成本低，隐私面小；代价是无法提供实时搜索、实时数据、服务端个性化。
- **证据**：[astro.config.mjs:6](../astro.config.mjs#L6)、[package.json:15-19](../package.json#L15-L19)。

### ADR-02 · 用文件快照作为唯一数据源

- **背景**：需要可回溯、可审查、可在无数据库环境下重建全部历史。
- **决策**：`_data/` 随仓库提交；构建期只读；拿到仓库即可重建全部页面。
- **结果**：数据可 diff、可回滚、可离线构建；代价是仓库体积随期次增长（当前约 7.6MB），且没有查询能力。
- **证据**：[README.md:20-23](../README.md#L20-L23)、[src/lib/load.ts:6-15](../src/lib/load.ts#L6-L15)。

### ADR-03 · 上游只读、单向搬运

- **背景**：上游日报项目独立演进，本站是消费方。
- **决策**：`tools/ingest.mjs` 只读上游目录，只写本地 `_data/`；不 import 上游代码。
- **结果**：上游对本站无感知，站点可独立构建；代价是多一次搬运步骤，且上游结构变化需要显式适配。
- **证据**：[README.md:9-23](../README.md#L9-L23)、[tools/ingest.mjs:1-17](../tools/ingest.mjs#L1-L17)。

### ADR-04 · 数据契约失败快于空白渲染

- **背景**：上游 JSON 结构可能演进；静默渲染空白卡片会掩盖问题。
- **决策**：`schema.ts` 在构建期校验渲染真正依赖的字段；不符合就抛错并给出路径。
- **结果**：问题在构建阶段暴露；代价是上游轻微改名也可能导致构建失败，需要同步修改契约。
- **证据**：[src/lib/schema.ts:1-5](../src/lib/schema.ts#L1-L5)、[src/lib/schema.ts:146-190](../src/lib/schema.ts#L146-L190)。

### ADR-05 · 台账是移除判定的唯一准绳

- **背景**：上游可能新增台账条目但未重跑回溯，导致往期页面继续展示已下架项目。
- **决策**：`sync-removals.mjs` 以 `_data/blacklist.json` 为唯一准绳，回写所有期次；ingest 完成后自动调用。
- **结果**：往期页面、入选数与台账一致；代价是回写会修改历史快照，且每次遍历全部期次。
- **证据**：[README.md:121-132](../README.md#L121-L132)、[tools/sync-removals.mjs:1-19](../tools/sync-removals.mjs#L1-L19)。

### ADR-06 · 原生 JS + 渐进增强，不引入运行时框架

- **背景**：交互只有筛选、排序、主题、浮层、跳转提示，复杂度不足以引入框架。
- **决策**：内联原生脚本 + 少量 Astro 打包脚本；不使用 React/Vue/Svelte；关键功能提供无 JS 兜底。
- **结果**：客户端体积小、无 hydration；代价是 DOM 操作与状态同步需要手写，复杂交互的维护成本更高。
- **证据**：[README.md:190-192](../README.md#L190-L192)、[src/components/IssueView.astro:294-400](../src/components/IssueView.astro#L294-L400)、[src/components/ReaderDialog.astro:18-23](../src/components/ReaderDialog.astro#L18-L23)。

### ADR-07 · 不分发 webfont，正文交给系统字形

- **背景**：中文字体分片体积大，webfont 会带来 FOUT/FOIT 与额外请求。
- **决策**：正文不指定字体族；不使用 `@font-face`；仅把《说文》小篆轮廓导出为静态 `seal.svg`，用 CSS 遮罩上色。
- **结果**：零字体请求、无字体闪烁；代价是不同平台字形不同，视觉不完全一致。
- **证据**：[README.md:59-73](../README.md#L59-L73)、[public/seal.svg](../public/seal.svg)。

### ADR-08 · 主题用两层正交状态：明暗 × 配色

- **背景**：需要多套中国风配色，同时支持深浅色。
- **决策**：`data-theme` 管明暗，`data-palette` 管配色；颜色集中在 `global.css` 的 Design Tokens；组件只用语义别名。
- **结果**：新增配色主要改 token；代价是配色元数据与 CSS 双源同步，且首屏内联脚本硬编码了合法配色 ID 列表。
- **证据**：[README.md:175-192](../README.md#L175-L192)、[src/lib/palettes.ts:1-31](../src/lib/palettes.ts#L1-L31)、[src/layouts/Base.astro:52-55](../src/layouts/Base.astro#L52-L55)。

### ADR-09 · 3D 折扇按需加载，SVG 作为兜底

- **背景**：折扇是品牌交互，但不值得拖累首屏。
- **决策**：`<details>` 展开时才动态 `import('three')` 并加载 `/models/fan.glb`；WebGL/模型失败返回 `null`，页面继续使用 SVG 折扇。
- **结果**：首屏不加载 Three.js；代价是首次展开有加载延迟，且需要维护 SVG 与 GLB 两套几何一致性。
- **证据**：[src/scripts/fan3d.ts:1-7](../src/scripts/fan3d.ts#L1-L7)、[src/scripts/fan3d.ts:204-221](../src/scripts/fan3d.ts#L204-L221)、[src/components/SiteNav.astro:790-832](../src/components/SiteNav.astro#L790-L832)。

### ADR-10 · 头像在上游解析、本站离线缓存

- **背景**：`github.com/<owner>.png` 国内常超时；`avatars.githubusercontent.com/<owner>` 对组织账号会返回默认灰图。
- **决策**：上游查一次 GitHub API，把 `/u/<id>` 地址写入 `owners.json`；本站只搬运缓存，页面构建期不发起业务网络请求；缺失或加载失败回落首字母。
- **结果**：构建不消耗 API 配额、不持有 token；代价是缓存可能滞后，且运行期仍会向 GitHub CDN 请求图片。
- **证据**：[README.md:86-97](../README.md#L86-L97)、[tools/ingest.mjs:219-233](../tools/ingest.mjs#L219-L233)、[src/components/RepoRow.astro:93-113](../src/components/RepoRow.astro#L93-L113)。

### ADR-11 · 日期计算只按日历，不依赖构建机时区

- **背景**：GitHub Actions 运行在 UTC；用 `Date` 的本地时区取星期，会让东八区站点整体早一天。
- **决策**：用 `Date.UTC(y, m-1, d)` 构造并按 `getUTCDay()` 取星期。
- **结果**：星期与构建机时区无关；代价是需要显式处理所有日期计算，不能直接依赖 `new Date(string)` 的隐式行为。
- **证据**：[src/lib/load.ts:150-159](../src/lib/load.ts#L150-L159)。

## 硬约束

| 约束 | 含义 | 违反后果 | 证据 |
| --- | --- | --- | --- |
| 不写上游 | ingest/sync 只能写本地 | 上游被污染，职责边界破坏 | [tools/ingest.mjs:1-17](../tools/ingest.mjs#L1-L17) |
| 无运行时业务接口 | 页面不能依赖本站 API | 静态托管无法提供服务 | [astro.config.mjs:6](../astro.config.mjs#L6) |
| 页面构建不发起业务网络请求 | 构建不能调用外部 API（依赖安装除外） | 发版受外部可用性影响，违背隐私承诺 | [README.md:159-163](../README.md#L159-L163) |
| `stats.selected` 等于实际条目数 | 统计口径必须自洽 | 页面数字与列表不一致 | [tools/sync-removals.mjs:112-115](../tools/sync-removals.mjs#L112-L115) |
| `full_name` 是项目主键 | 摘要、序列、台账、解读都按它关联 | 改键会导致跨源关联断裂 | [src/lib/load.ts:48-67](../src/lib/load.ts#L48-L67) |
| slug/锚点规则稳定 | `owner__repo`、`owner-repo` 已进入 URL 与深链 | 旧链接失效 | [src/lib/format.ts:34-39](../src/lib/format.ts#L34-L39) |
| `/models/fan.glb` 绝对路径 | 折扇加载写死 `/models/fan.glb` | 部署到非根路径时 404 | [src/scripts/fan3d.ts:12](../src/scripts/fan3d.ts#L12) |
| `public/CNAME` 必须存在 | GitHub Pages 自定义域名 | 域名失效 | [public/CNAME](../public/CNAME) |
| 配色 ID 列表同步 | 首屏脚本白名单、`palettes.ts`、CSS token 三处 | 新配色被判非法并回退默认 | [src/layouts/Base.astro:52-55](../src/layouts/Base.astro#L52-L55) |

## 质量属性

| 属性 | 现状 | 支撑 | 代价 / 缺口 |
| --- | --- | --- | --- |
| 性能 | 静态 HTML；无 webfont；Three.js 按需；头像懒加载 | [src/components/RepoRow.astro:103-109](../src/components/RepoRow.astro#L103-L109)、[src/scripts/fan3d.ts:212-217](../src/scripts/fan3d.ts#L212-L217) | 单期解读全文内联，HTML 约 150KB；图片仍依赖第三方 |
| 可访问性 | 跳转链接、焦点环、原生 dialog、`prefers-reduced-motion`、URL 状态 | [README.md:165-173](../README.md#L165-L173)、[src/layouts/Base.astro:61-63](../src/layouts/Base.astro#L61-L63) | 3D 扇的键盘交互与色彩对比未在本文档验证 |
| 隐私 | 无分析、无追踪、无外部脚本；仅头像图片与用户主动外链 | [README.md:159-163](../README.md#L159-L163) | 头像请求会暴露读者 IP 给 GitHub CDN |
| 安全 | 静态站点、最小 CI 权限、`rel=noopener noreferrer`、外链提示 | [.github/workflows/pages.yml:8-11](../.github/workflows/pages.yml#L8-L11)、[src/components/RepoRow.astro:34](../src/components/RepoRow.astro#L34) | 上游 Markdown 未 sanitation；未观察到 CSP 配置 |
| 可维护性 | lib 分层清晰；排序/锚点规则共用；主题 token 集中 | [src/lib/load.ts:118-141](../src/lib/load.ts#L118-L141)、[src/lib/format.ts:34-39](../src/lib/format.ts#L34-L39) | 无单元测试/类型检查脚本；配色与证据标签存在双源同步 |
| 可运维性 | 幂等 ingest、`--check` 漂移检测、Actions 日志 | [tools/sync-removals.mjs:125-149](../tools/sync-removals.mjs#L125-L149) | 无监控/告警；CI 未跑漂移检测与 `astro check` |
| 数据完整性 | 契约校验、台账单一准绳、UTC 日历、写前比较 | [src/lib/schema.ts:146-190](../src/lib/schema.ts#L146-L190)、[tools/ingest.mjs:59-80](../tools/ingest.mjs#L59-L80) | 全量回写线性增长；无文件锁 |
| 可移植性 | 纯静态产物，可迁移到任意静态托管 | [astro.config.mjs:6-10](../astro.config.mjs#L6-L10) | 自定义域名、`base='/'`、绝对 `/models/` 路径构成迁移约束 |

## 变更影响速查

| 如果你改… | 还需要同步… | 原因 |
| --- | --- | --- |
| 新增一套配色 | `src/lib/palettes.ts`、`src/styles/global.css`、`src/layouts/Base.astro` 的白名单正则 | 三处分别负责展示元数据、色值、首屏合法性校验 |
| 新增页面/路由 | `SiteNav` 导航、`Base` 的 meta 策略、`module-dependencies.dot` | 导航与文档需要覆盖新入口 |
| 修改项目主键或 slug | 解读文件名、series 文件名、`#read-`/`#repo-` 锚点、移除锚点 | 多处按同一规则生成，改一处会断链 |
| 修改移除台账结构 | `schema.ts`、`load.ts` 的 `publicBlacklist`、`/removed/`、`/stats/` 表 6 | 展示与过滤共用台账 |
| 调整 `PAGE_SIZE` | 项目索引分页路由、页脚“第 x/y 页”、语言分页 | 页数由该常量推导 |
| 修改解读剥壳规则 | `interpretations.ts`、`ReaderDialog` 渲染、按钮字数估算 | 剥壳失败会原样保留，影响版面与字数 |
| 更换托管或部署路径 | `astro.config.mjs` 的 `base`、`fan3d.ts` 的模型路径、`public/CNAME` | 当前假设根路径部署 |
| 升级 Astro 主版本 | 构建配置、路由 API、Actions Node 版本 | 构建期 API 与静态路径生成可能变化 |

## 已知边界（来自 README）

- 星标走势依赖逐日累积，首期没有更早历史点，曲线较短。
- 站内不出现邮箱等联系信息，页面可直接公开。
- 详细解读从上游开始产出的那一期才有，早期期次没有按钮，也不补写。
- 一期 30 篇解读全文写进同一张页面（约 150KB HTML），换取无 JS 也能读全文。
- 风险提示页不提供条目外链，也不做搜索与筛选。
- 本期观察的覆盖文件是人工改写；新增期次若需修订必须手动添加。

证据：[README.md:210-217](../README.md#L210-L217)。

下一步：查看 [system-model.evidence.md](system-model.evidence.md) 与 [system-model.summary.md](system-model.summary.md)。