# 开源雷达 · OpenSource Radar

每日 GitHub 热点项目日报的独立站点。数据来自上游日报项目产出的 JSON；本站不写上游，只维护本地快照（搬运后按台账做一次回写，见「台账回写」），渲染与排版完全独立。

![开源雷达工作流：WorkBuddy 定时采集 → Astro 渲染 → GitHub Actions 构建 → GitHub Pages 发布](docs/architecture.jpg)

*整条流水线：本地定时任务抓取与分析 → 报告进仓库 → Astro 生成站点 → Actions 构建并发布。*

## 与其他项目的关系

```
上游日报项目（产出方）                      本站（消费方）
  data/reports/<date>.json          ──只读──►  _data/reports/<date>.json
  data/summaries/<date>.json        ──只读──►  _data/summaries/<date>.json
  data/snapshots/<date>.json        ──只读──►  _data/series/*.json（星标序列）
  data/interpretations/<date>/*.md  ──只读──►  _data/interpretations/<date>/*.md
  data/blacklist.json               ──只读──►  _data/blacklist.json（移除台账）
```

- 本站**从不写入上游目录**，也不 import 上游任何代码。
- 上游结构变化时，本站构建会失败并指出具体字段（见 `src/lib/schema.ts`），而不是静默渲染空白。
- `_data/` 是数据快照，随仓库提交：拿到它就能重建全部历史页面。
- 台账是移除判定的唯一来源，站点只展示、不判定；搬运后由 `tools/sync-removals.mjs` 按它回写各期报告，见下文「台账回写」。

## 命令

```bash
npm install

# 搬运一期数据（只读上游）
node tools/ingest.mjs --source <上游路径> --date 2026-10-26

# 全量补齐（幂等，漏跑一天时用它）
node tools/ingest.mjs --source <上游路径> --all

# 搬运后自动提交并推送
node tools/ingest.mjs --source <上游路径> --date 2026-10-26 --push

npm run sync:removals   # 按台账回写各期报告（ingest 后已自动执行）
npm run check:removals  # 只检测不写，存在漂移时退出码 1

npm run dev        # 本地预览
npm run build      # 产出 dist/
```

`check:removals` 适合放进 CI：它不修改任何文件，只在「台账说已移除、报告里还留着」时失败。

## 页面

| 路径 | 内容 |
|---|---|
| `/` | 最新一期 |
| `/posts/<date>/` | 单期永久链接 |
| `/projects/` | 全部项目索引：分页 + 语言筛选 |
| `/archive/` | 全部期次 |
| `/stats/` | 跨期聚合：评分分布、语言分布、涨星榜、常驻榜、移除台账索引 |
| `/removed/` | 风险提示：判定标准、批次说明与被移除项目的证据链 |

## 字体

正文不指定字体族，完全交给浏览器默认字形，站点不分发任何 webfont：

- 没有 `@font-face`、没有 4MB 分片，首屏不存在字体闪烁（FOUT/FOIT），一个字体请求都不发。
- 各平台呈现的都是用户自己系统的默认中文字形（macOS 的苹方、Windows 的微软雅黑、Linux 视字体配置而定）。
- 数据、编号、页码仍走 `--mono`（系统等宽栈），保证数字纵向对齐。

排版适配：行高仍为 1.85、标题不加粗，层级由字号、字距与位置建立；这些设定与具体字形无关，换字体不会失效。

页脚印章是唯一用到篆书的地方，但仍不分发 webfont：把《说文》小篆的字形轮廓导出成一张静态 SVG
（`public/seal.svg`，右列「開源」、左列「靁達」，竖读自右向左），再用 CSS 遮罩上色，客户端不需要篆书字体。
字形轮廓取自开源字体 Shuowen Seal（开元小篆，SIL OFL 1.1；另含全字库说文，OGDL-Taiwan 1.0）：

> 數位發展部，CNS11643中文標準交換碼全字庫網站，https://www.cns11643.gov.tw

## 版式

整站按中文书籍版式搭建，不做卡片化仪表盘：

- 版面分三栏：左侧书口（条目序号、章次）、中间版心（约 39 字/行）、右侧边栏（评分、走势）。窄屏塌成单栏，序号回到标题上方。
- 章次用汉字数字（一 二 三），正文段落首行缩进两字，引文用「」包住并在左缩进对齐版心。
- 分隔一律用铅线（1px 实线 / 目录用点线引导），不用阴影与圆角；全书直角，唯一的圆是雷达标志里的圆。
- 双色印刷：墨色 + 一色墨绿专色。纸色为冷调纸白，叠加一层极淡的纸纹（挂在 `body::after` 的 fixed 伪元素上，不参与滚动重绘）。风险提示页另有一组低饱和警示色（朱红 / 赭 / 灰），只出现在判定标准的色标与条目标签这类小面积处，不铺底、不做装饰。
- 书眉常驻：滚动进入第几章，导航里就显示该章章名，与实体书展开时书眉印章名同理。
- 深浅色是同一套体系的两种纸：浅色为纸白墨字，深色为夜间墨纸。主题由 `data-theme` 切换，跟随系统偏好并记住手动选择。

## 项目标记

条目右栏底部放 owner 的头像，也就是 GitHub 仓库页上仓库名旁边那个圆图。GitHub 没有单独的「仓库图标」：个人账号显示作者照片，组织账号显示的才是机构 logo。

取法上踩过两个坑，最终方案是「解析一次、离线缓存」：

- `https://github.com/<owner>.png` 要过 github.com 这个域，国内经常超时，页面直接破图；
- `https://avatars.githubusercontent.com/<owner>` 对 microsoft、apache、JetBrains 这类账号只返回默认灰图，看着像没加载出来。

所以由上游日报流水线的 `scripts/resolve-avatars.mjs` 查一次 `api.github.com/users/<owner>`，拿到 `/u/<id>` 形式的地址写进上游 `data/owners.json`；`tools/ingest.mjs` 再把它原样搬进 `_data/owners.json`。构建期只读这份缓存、不联网；缓存里没有的 owner 或图加载失败，回落到首字母徽记，不会出现破图。

缓存放在上游是有意的：配额只在每天那次流水线里消耗一次，站点侧只是文件搬运，既不持有 token 也不联网。可用 `node tools/ingest.mjs --avatars-only` 单独同步缓存，`--no-avatars` 则完全跳过。

## 详细解读

上游给每个项目单独产出一篇解读（`data/interpretations/<date>/<owner>__<name>.md`），`tools/ingest.mjs` 原样搬进 `_data/interpretations/`，构建期渲染成 HTML。

- **剥壳**：上游文件里与页面重复的部分（frontmatter、H1、「指标」表、结尾的 `<sub>` 署名）在 `src/lib/interpretations.ts` 里剥掉，避免同一页出现两套互相打架的数字。哪一段没匹配上就原样保留，不猜测。
- **渲染**：用 `marked`（MIT）在构建期转成 HTML，不注册任何客户端组件，产物里是静态 HTML。
- **交互**：条目尾部一个「详细解读 · 约 N 字」按钮，打开原生 `<dialog>` 浮层。焦点锁在层内，ESC 关闭，关闭后焦点回到按钮，点浮层外面也能关。
- **无 JS 兜底**：按钮本身是 `href="#read-<slug>"`，`.reader:target` 一条 CSS 就能把浮层打开。脚本没跑起来时 hash 就是开关，正文照样读得到；关闭链接回到该条目锚点。
- **本期观察**：同一目录下 `index.md` 里的「本期横向观察」一节，取出来放在正文末尾，用方框排成编者按。
- 没有解读的期次不渲染按钮，整节省略，不留空壳。

## 风险提示

`/removed/` 呈现上游台账里已经移除的项目。判定在上游完成，站点只负责呈现、排序与过滤。

- **三层结构**：判定标准（固定几条，带当期命中数）→ 同批投放的批次说明（`meta.campaigns`）→ 逐条证据链。证据按「仓库元数据 / README 文本 / 跨仓库关联」分类，折叠在 `<details>` 里，不默认展开。
- **次序**：撤回（上过榜又撤销）排在拦截（没来得及上榜）之前；同状态内按移除时间倒序，再按分数倒序。规则写在 `src/lib/load.ts` 的 `byLedgerPriority`，`/removed/` 与 `/stats/` 共用一份，两页不会排出不同顺序。
- **不公示**：`disclosure: internal` 的条目，以及约定不对外展示的类别，在 `publicBlacklist()` 里即被滤掉——不出现在任何页面，也不计入任何数字。
- **不给入口**：条目只记名，不做成链接。这类项目要的就是导流，站点不代它完成这一步。
- **风险色阶**：判定标准按类型分档，供应链风险、热度异常、证据不足各有低饱和色（朱红 / 赭 / 灰）；条目标签读 `category` 取同一枚 `--tone`，标准旁的色标与条目上的标签因此始终同色。
- **统计页索引**：`/stats/` 的表 6 复用同一份数据，按状态分组，条目链到 `/removed/#owner-repo`；锚点由 `removalSlug()` 生成（`owner/repo` 转 `owner-repo`），两页共用同一个函数，不会出现对不上的深链。

## 台账回写

`tools/ingest.mjs` 原样搬运上游报告。上游若在新增台账条目后没有重跑回溯，往期页面就会继续展示一个已经下架的项目，入选数也会与实际条目数对不上。

`tools/sync-removals.mjs` 以 `_data/blacklist.json` 为唯一准绳做回写，ingest 在黑名单搬运完成后自动调用：

- 从 `categories[].items` 删除命中条目，整类被清空时去掉空分类；
- 从该期的 `removed[]` 附录里撤下已进台账的条目，展示面统一交给 `/removed/`；
- 重算 `stats.selected`，使其恒等于该期实际展示的条目数；
- 台账 `issues` 未记录某期、但条目确实出现在该期时，输出不一致提示，不静默处理。

没有命中就不写盘，可重复执行；`--check` 只报告不修改，适合放进 CI。

## 本期观察的本地修订

「本期观察」取自 `_data/interpretations/<date>/index.md` 的「本期横向观察」一节。台账变动后，这一节里的具名与数字可能已和页面不符；直接改 `_data` 会被下一次 ingest 整份覆盖，所以另存一份：

- `overrides/observations/<date>.md` 存在时优先于上游原文，内容只放该节正文；
- 文件头的 HTML 注释在渲染前剥掉，用来记录这次修订改了什么、为什么改；
- 没有覆盖文件的期次走上游原文，不做猜测性改写。

这类修订需要人工判断——保留当天的判断与论证，去掉已不成立的细节——因此不随 ingest 自动生成。

## 外链跳转提示

点击任何指向站外的链接，先弹出 `<dialog>` 告知：目标页由第三方维护，内容与安全性不在本站核查范围内，也不构成背书或担保。GitHub 链接的标题会随域名切换为「即将前往 GitHub」。

- 一次会话内只提示一次（`sessionStorage`），避免逐条确认；按住 Ctrl/Cmd/Shift 的点击直接放行，那是明确的主动行为。
- 默认焦点落在「留在本站」，Esc 或点遮罩即取消，打印时隐藏。
- 风险提示页的条目本身没有外链，不受这段逻辑影响。
- 脚本先检测 `showModal` 是否存在，旧浏览器下退化为普通跳转，不会把链接点死。

## 农历与节气

封面右侧一栏给出农历与节气：`农历 丙午年 九月十七`、`节气 距立冬 12 日`（当天正好是节气则显示「今日霜降」）。目录里只在那一天恰逢节气时点一个专色标记。

阳历一律用阿拉伯数字，农历用汉字，两种历法各用各的记法。

实现方式是**构建期本地推算**，不调用任何开放接口：

- 依赖 `lunar-javascript`（MIT，6tail），纯离线算法，无网络、无 API key。
- `src/lib/almanac.ts` 负责换算并做缓存，`lunar-javascript` 只在构建时执行，不进客户端产物。
- 之所以不用公开黄历 API：站点对外的承诺是「静态生成、无追踪、无外部脚本」，运行时或构建时联网都会破坏这一点，且上游接口挂掉就会卡住发版。

## 可访问性

- 键盘：全局 :focus-visible 焦点环（2px 强调色、offset 3px）；main 例外，避免跳转后整块描边。
- 跳转链接：Tab 首站是可聚焦的「跳到主要内容」，指向 #main-content。
- 锚点：h1/h2/h3/.cat/.panel 设 scroll-margin-top，避开书眉与索引条的双层 sticky。
- 主题色：meta[theme-color] 跟随实际主题（含手动切换）更新，而非只读系统偏好。
- 动效：prefers-reduced-motion 下禁用过渡，「回到顶部」改为瞬时跳转。
- 状态：视角与方向筛选写入 URL（?role=frontend&cat=ai），支持分享、刷新保持与前进后退。
- 外链提示：原生 `<dialog>` + `showModal()`，焦点锁在层内，Esc 与遮罩均可取消，关闭后浏览器把焦点交回触发链接。

## 主题层

视觉决策集中在两处，换肤只需改这两处并重新构建：

- `src/styles/global.css` —— 颜色、字体、间距、组件外观（CSS 变量 + 原生样式，无 UI 框架）
- `src/layouts/` + `src/components/` —— 结构

页面交互（视角切换、方向筛选、深浅色、外链提示）用内联原生脚本实现，不引入运行时框架，默认输出零 JS 也能完整阅读。

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
- 详细解读从上游开始产出的那一期才有，早期期次没有按钮，也不补写。
- 一期 30 篇解读的全文都写进同一张页面（约 150KB HTML，gzip 后很小），换来的是无 JS 也能读到全文；页面上不额外请求任何接口。
- 风险提示页不提供条目外链，也不做搜索与筛选：条目量级小，按状态分组已够定位。
- 本期观察的覆盖文件是人工改写，新增期次若需修订必须手动添加，站点不会自动生成。
