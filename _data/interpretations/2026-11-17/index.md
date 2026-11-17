# 2026-11-17 · 逐项解读目录

本期共 20 个项目，独立解读 20 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **AI 与 agent 两类占全榜四成，但共同点是「把 agent 装进流程」**：20 项里 ai 与 agent 各占 4 席，合计 8 项。真正把这 8 项串起来的不是模型能力，而是「agent 如何进入既有工作流」：opencodex 解耦工具与供应商，loop-engineering 定义循环与放权节奏，reef 把反馈变成版本，open-design 把设计流程挂到已有 agent 上，diagram-design 把图变成可交付文件。没有一项在提新模型或新训练方法——竞争点已经上移到编排层。
- **本期热度口径分化，跨期比较总量要谨慎**：20 项中 14 项的热度按星标速度估算，5 项取自 Trending 页的真实日增，1 项来自快照差值；只有 6 项具备可直接比较的日增数据（nest +29、imgui +18、arcane +46、GestaltEdit +125、xiaobai-kanban +95、shadPS4 +53）。这意味着本期的排序更多反映「增长速度与社区规模的综合」，而不是单一自然日的涨幅，与往期带完整基线的期次不宜直接比总量。
- **年龄跨度极大：十二年老库与四天新仓同台**：3 项超过 1,000 天（imgui 4,501、nest 3,572、shadPS4 1,485），1 项创建仅 4 天（abyssal-garden），全榜年龄中位数 151 天。老项目靠结构性需求维持存在感——后端分层、即时模式 GUI、主机模拟都不是新话题；新项目则集中在「用更少的交付物做更多的事」，两条时间线在同一天并列，说明榜单同时承载了「基础设施换血」与「新范式试水」。
- **「单文件 / 单二进制交付」成为一条隐性主线**：abyssal-garden 把整个世界压进约 96 KB 的单个 HTML，diagram-design 把图输出成自包含 HTML 加 SVG，ollaya 用一个二进制提供完整决策服务，flow 用一个进程承担 CDC 与表维护。四个方向、四种语言，指向同一个取舍：减少部署单元与外部依赖，把复杂度收进内部。对应代价也一致——可维护性与可扩展性被主动牺牲，换取分发与运行时的确定性。
- **本地优先从口号变成具体的边界声明**：andee 明确记忆与密码不出设备，career-ops 全程本机处理简历，ollaya 在本机跑决策模型，Insomnia 只改本机的休眠策略，flow 的数据落在自有对象存储。值得注意的是这些项目都在写「边界在哪里」——哪些数据仍会外流、哪些路径默认走第三方服务（如 andee 的默认构建通道）、哪些权限需要额外授予。可核对的边界声明，比单纯标榜离线更有参考价值。
- **语言分布分散，Rust 集中在数据与决策底层**：TypeScript 5 项、Python 3 项、Swift 2 项、Rust 2 项、C++ 2 项、JavaScript 2 项、HTML 2 项、Go 1 项、Kotlin 1 项。Rust 的两项（flow、ollaya）都在「需要长期驻留、延迟敏感」的底层：一个做变更捕获与表维护，一个做毫秒级决策推理。Swift 的两项则都在 macOS 端侧工具，说明端侧小工具仍是 Apple 生态的强项。
- **数据方向仍只有一席，但内容是实工程**：data 方向本期仅 flow 一项（89 星、8 fork、9 个 open issue），是近年常见的「数量少」格局；但它做的是 Postgres 到 Iceberg 的完整链路，含事务日志、行索引、发布账本与中断恢复，工程完备度明显高于同星标量级的新仓。这与近几期数据类的走势一致：候选池里泛化的「数据分析」「BI」标签已被准入规则过滤，留下的是真正的管道与存储工程。

## AI / 大模型

- **lidge-jun/opencodex** · 🌟🌟🌟🌟🌗 4.5 — 一个本地网关，让你的编码工具与模型供应商各自独立演进。（[Markdown](lidge-jun__opencodex.md) / [HTML](lidge-jun__opencodex.html)）
- **cobusgreyling/loop-engineering** · 🌟🌟🌟🌟🌗 4.5 — 别再逐条写 prompt，去设计那条会自己找活干的循环。（[Markdown](cobusgreyling__loop-engineering.md) / [HTML](cobusgreyling__loop-engineering.html)）
- **Human-Agent-Society/reef** · 🌟🌟🌟🌟🌗 4.5 — 让 agent 在服务的同时，把自己的提示词、技能甚至权重迭代掉。（[Markdown](Human-Agent-Society__reef.md) / [HTML](Human-Agent-Society__reef.html)）
- **kuafuai/andee** · 🌟🌟🌟🌟 4.0 — 不是帮你操作手机，而是住进手机里。（[Markdown](kuafuai__andee.md) / [HTML](kuafuai__andee.html)）

## SKILL / MCP / Agent

- **nexu-io/open-design** · 🌟🌟🌟🌟🌗 4.5 — 不自带 agent 的设计工作空间，把你已有的 coding agent 变成设计搭档。（[Markdown](nexu-io__open-design.md) / [HTML](nexu-io__open-design.html)）
- **career-ops-hq/career-ops** · 🌟🌟🌟🌟🌗 4.5 — 求职这件事，先让 agent 帮你算一遍值不值得投。（[Markdown](career-ops-hq__career-ops.md) / [HTML](career-ops-hq__career-ops.html)）
- **sickn33/agentic-awesome-skills** · 🌟🌟🌟🌟🌗 4.5 — 三千条技能剧本，外加一层「应用前先给你看计划」的本地目录。（[Markdown](sickn33__agentic-awesome-skills.md) / [HTML](sickn33__agentic-awesome-skills.html)）
- **cathrynlavery/diagram-design** · 🌟🌟🌟🌟 4.0 — 让 agent 把图直接画成一个能双击打开的文件。（[Markdown](cathrynlavery__diagram-design.md) / [HTML](cathrynlavery__diagram-design.html)）

## 前端 / Web

- **img2threejs/img2threejs** · 🌟🌟🌟🌟🌗 4.5 — 不导出网格，直接把参考图重建成可读的 Three.js 代码。（[Markdown](img2threejs__img2threejs.md) / [HTML](img2threejs__img2threejs.html)）
- **Noniv/abyssal-garden** · 🌟🌟🌟🌟 4.0 — 96 KB 单文件跑出的水下世界，全程 WebGPU 手写。（[Markdown](Noniv__abyssal-garden.md) / [HTML](Noniv__abyssal-garden.html)）
- **nestjs/nest** · 🌟🌟🌟🌟 4.0 — 把后端的模块边界、依赖注入与横切关注点固定成一套结构。（[Markdown](nestjs__nest.md) / [HTML](nestjs__nest.html)）
- **ocornut/imgui** · 🌟🌟🌟🌟 4.0 — 即时模式 GUI 的标杆：少存状态，多写逻辑。（[Markdown](ocornut__imgui.md) / [HTML](ocornut__imgui.html)）

## 后端 / 云原生

- **getarcaneapp/arcane** · 🌟🌟🌟🌟 4.0 — 把 Docker 与 Compose 的日常运维收进一个自托管面板。（[Markdown](getarcaneapp__arcane.md) / [HTML](getarcaneapp__arcane.html)）
- **ollaya-dev/ollaya** · 🌟🌟🌟🌗 3.5 — 把路由、护栏、分诊从 LLM 调用里剥离成毫秒级的概率判断。（[Markdown](ollaya-dev__ollaya.md) / [HTML](ollaya-dev__ollaya.html)）

## 数据 / 数据库

- **contrastdata/flow** · 🌟🌟🌟🌗 3.5 — 一个 Rust 进程，把 Postgres 的变更持续搬进 Iceberg。（[Markdown](contrastdata__flow.md) / [HTML](contrastdata__flow.html)）

## 开发工具 / 效率

- **ccch1mneyyy/dsh-TUI** · 🌟🌟🌟🌟🌗 4.5 — 给终端里的编码 agent 装一块仪表盘。（[Markdown](ccch1mneyyy__dsh-TUI.md) / [HTML](ccch1mneyyy__dsh-TUI.html)）
- **frs0n/GestaltEdit** · 🌟🌟🌟🌗 3.5 — 把 iOS 的隐藏能力开关做成图形界面，能力与风险同样真实。（[Markdown](frs0n__GestaltEdit.md) / [HTML](frs0n__GestaltEdit.html)）
- **supercli-site/xiaobai-kanban** · 🌟🌟🌟🌗 3.5 — 把「怎么跟 agent 说话」拆成一条能照着走的路径。（[Markdown](supercli-site__xiaobai-kanban.md) / [HTML](supercli-site__xiaobai-kanban.html)）

## 移动 / 桌面 / 跨端

- **krishhgg/Insomnia** · 🌟🌟🌟🌟 4.0 — 给「合盖跑长任务」一个带结束时间与自动恢复的开关。（[Markdown](krishhgg__Insomnia.md) / [HTML](krishhgg__Insomnia.html)）
- **shadps4-emu/shadPS4** · 🌟🌟🌟🌟 4.0 — PS4 模拟进入「能跑起来」阶段，兼容性列表就是进度条。（[Markdown](shadps4-emu__shadPS4.md) / [HTML](shadps4-emu__shadPS4.html)）
