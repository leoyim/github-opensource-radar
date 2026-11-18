# 2026-11-18 · 逐项解读目录

本期共 19 个项目，独立解读 19 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **AI 与 agent 合计 8 席，但本期没有一项在做新模型**：19 项里 ai 4 席、agent 4 席，合计 42%。把这 8 项串起来的是「能力怎么被交付」而不是模型能力本身：ARTEX 把自主执行绑在证据链上，freebie-radar 用模型做语义定级，humanizer 是一份可加载的改写规范，new-api 做供应商解耦；agent 侧 video-shotcraft 交付可编辑成片、rust-anything 用行为录制做迁移验收、SoduWork 以签收结束请求、marketingskills 把领域经验做成技能目录。没有一项在提新架构、新训练方法或新推理技巧——竞争点稳定停留在编排层与交付层。
- **「技能包」成了本期最常见的能力载体**：humanizer、video-shotcraft、marketingskills、rust-anything 四项直接以 agent skill 形式分发，atuin 用内置 MCP server 把终端历史暴露给 agent，SoduWork 同时调度 Pi / OpenCode / Codex 等多个 harness，rikkahub 在 Android 上接 MCP 与 Skills，gpt6-Astra 提供 DeepSeek Harness 插件。规范、工具与流程被打包成可加载、可增删、可跨宿主复用的单元，而不是写进某一次对话的提示词；这比「又多了一个 agent 框架」更贴近日常工程。
- **跨了六个项目的一条暗线：结论要拿得出证据**：ARTEX 把每个发现绑定到录制的请求响应对，rust-anything 每步改写都对着原程序的行为录制做等价校验，SoduWork 要求请求自带验收标准并由另一个模型独立复核，hongguo-drama 公开签名公证、SHA256 与逐版本验收回执，gpt6-Astra 坚持用服务商目录返回的精确模型 ID 而非写死名称，lodash 则用治理公告与 TSC 名单回应「长期可维护」这件事。形式各异，指向同一件事：把「系统说它做到了」变成「可以自己核对」。
- **老牌基础设施占了七席，靠治理与稳定性而非新范式留在榜上**：本期有 7 项年龄超过 1,000 天：hibernate-orm 5,888 天、lodash 5,338 天、seaweedfs 4,509 天、pnpm 3,947 天、atuin 2,235 天、new-api 1,103 天、jiff 1,004 天。它们的看点都不在新特性：lodash 转入 Feature-Complete 并重组治理，new-api 把模型路由与成本归集做实，jiff 公开时区判定的设计理由，pnpm 在评估 Rust 移植，clice 用进程池隔离重做语言服务。与之对照，≤30 天的新仓只有 3 项（freebie-radar 6 天、rust-anything 2 天、SoduWork 20 天），年龄中位数约 306 天。
- **跨端四条技术路线同台，各自解决不同的约束**：mobile 方向 4 项走出四条互不相同的路径：Argus 用 Rust + GPUI 直接调 Windows 原生接口换流畅曲线，hongguo-drama 用 Electron 覆盖 Mac 双架构与 Windows 并把发行工程做透明，gpt6-Astra 以桌面工作台 + Android APK + iOS SwiftUI 源码覆盖五端，rikkahub 用 Kotlin + Jetpack Compose 做纯原生 Android 并塞进 proot 工作区。同一期里同时出现「原生性能」「发行可信」「配置可迁移」「工具链完整」四种诉求，说明跨端选型已经没有默认答案。
- **数据方向本期只有一席，且是成熟的持久层实现**：data 方向仅 hibernate-orm 一项入选，年龄 5,888 天，讲的是类型安全的持久层、ACID 事务与后置性能优化。这一结构与近期多期不同：过去常见的新存储引擎、查询层与数据管道本期都没有进入榜单，取而代之的是网关、存储系统、时间库这类更靠近基础设施的项目（new-api、seaweedfs、jiff）。对做数据平台的团队来说，本期的参考价值更多在「底座怎么稳」，而不是「又多了哪个引擎」。
- **有可比基线的 12 项里，增量集中在安全与内容交付两处**：19 项中 12 项有可比基线、7 项无基线（多为新仓或老项目的 velocity 口径），不宜把不同口径简单相加。单看可比部分，ARTEX 较上一快照 +2,069 居首，humanizer +457、video-shotcraft +408、marketingskills +237 紧随其后；其余多数在两位数区间（lodash +178、clice +84、jiff +81、new-api +79、rikkahub +55、seaweedfs +25、atuin +21、pnpm +12）。增量集中在「自主执行可被审计」与「agent 直接产出可编辑内容」两类，而底层基础设施仍以缓慢但稳定的方式累积关注。

## AI / 大模型

- **BaaRai/ARTEX** · 🌟🌟🌟🌟 4.0 — 让自主渗透测试的每条结论，都能拿出对应的请求与响应。（[Markdown](BaaRai__ARTEX.md) / [HTML](BaaRai__ARTEX.html)）
- **ZiChuanLan/freebie-radar** · 🌟🌟🌟🌟 4.0 — 把「蹲福利」做成一条带二审与分流的内容流水线。（[Markdown](ZiChuanLan__freebie-radar.md) / [HTML](ZiChuanLan__freebie-radar.html)）
- **blader/humanizer** · 🌟🌟🌟🌟 4.0 — 把「AI 味」拆成一份可执行的模式清单，交给 agent 逐条清。（[Markdown](blader__humanizer.md) / [HTML](blader__humanizer.html)）
- **QuantumNous/new-api** · 🌟🌟🌟🌟 4.0 — 把供应商差异收敛在一个网关里，客户端永远只认同一个端点。（[Markdown](QuantumNous__new-api.md) / [HTML](QuantumNous__new-api.html)）

## SKILL / MCP / Agent

- **Vincentwei1021/video-shotcraft** · 🌟🌟🌟🌟🌗 4.5 — 成片不是生成出来的，是用代码从你的真实页面一帧帧画出来的。（[Markdown](Vincentwei1021__video-shotcraft.md) / [HTML](Vincentwei1021__video-shotcraft.html)）
- **coreyhaines31/marketingskills** · 🌟🌟🌟🌟🌗 4.5 — 把增长经验做成 agent 能直接调用的技能目录，而不是一摞提示词。（[Markdown](coreyhaines31__marketingskills.md) / [HTML](coreyhaines31__marketingskills.html)）
- **erkamyaman/rust-anything** · 🌟🌟🌟🌟 4.0 — 每一步重写都拿原程序的行为录制当验收标准，通过了才准往前走。（[Markdown](erkamyaman__rust-anything.md) / [HTML](erkamyaman__rust-anything.html)）
- **mdiri-ai/SoduWork** · 🌟🌟🌟🌟 4.0 — 「完成」不是 agent 说做完了，而是提出者签收、另一个模型复核通过。（[Markdown](mdiri-ai__SoduWork.md) / [HTML](mdiri-ai__SoduWork.html)）

## 前端 / Web

- **lodash/lodash** · 🌟🌟🌟🌟 4.0 — 不追新特性了——这个阶段的重点是让它长期稳定、安全、有人维护。（[Markdown](lodash__lodash.md) / [HTML](lodash__lodash.html)）
- **pnpm/pnpm** · 🌟🌟🌟🌟 4.0 — 100 个项目用同一个 lodash，磁盘上只存一份。（[Markdown](pnpm__pnpm.md) / [HTML](pnpm__pnpm.html)）

## 后端 / 云原生

- **BurntSushi/jiff** · 🌟🌟🌟🌟 4.0 — 把 Temporal 的「难以写错」带进 Rust，连时区怎么取数都写进设计文档。（[Markdown](BurntSushi__jiff.md) / [HTML](BurntSushi__jiff.html)）
- **seaweedfs/seaweedfs** · 🌟🌟🌟🌟 4.0 — 对象存储、文件系统、湖仓和向量桶，共用同一份 O(1) 读取的存储层。（[Markdown](seaweedfs__seaweedfs.md) / [HTML](seaweedfs__seaweedfs.html)）

## 数据 / 数据库

- **hibernate/hibernate-orm** · 🌟🌟🌟🌟🌗 4.5 — 把「先写对、再调优」写进框架约束，而不是靠团队纪律。（[Markdown](hibernate__hibernate-orm.md) / [HTML](hibernate__hibernate-orm.html)）

## 开发工具 / 效率

- **atuinsh/atuin** · 🌟🌟🌟🌟 4.0 — 终端历史第一次同时服务人和 agent，还能跨机器、跨 harness 续接会话。（[Markdown](atuinsh__atuin.md) / [HTML](atuinsh__atuin.html)）
- **clice-io/clice** · 🌟🌟🌟🌗 3.5 — 一次编译崩溃只损失一个 worker，导航与高亮照常工作。（[Markdown](clice-io__clice.md) / [HTML](clice-io__clice.html)）

## 移动 / 桌面 / 跨端

- **Ray-lea/Argus** · 🌟🌟🌟🌟 4.0 — 不只是实时看占用，还能回到 7 天内任一时刻查「当时是谁在吃 CPU」。（[Markdown](Ray-lea__Argus.md) / [HTML](Ray-lea__Argus.html)）
- **jackotom/hongguo-drama** · 🌟🌟🌟🌟 4.0 — 把桌面客户端的发行工程做到可核对：签名、公证、SHA256、精确源码、逐版本回执。（[Markdown](jackotom__hongguo-drama.md) / [HTML](jackotom__hongguo-drama.html)）
- **3641397194-wq/gpt6-Astra** · 🌟🌟🌟🌟 4.0 — 先读服务商模型目录、再用精确 ID 发送，把「连的是哪个模型」摆到明面上。（[Markdown](3641397194-wq__gpt6-Astra.md) / [HTML](3641397194-wq__gpt6-Astra.html)）
- **rikkahub/rikkahub** · 🌟🌟🌟🌟 4.0 — MCP、Skills、Phone Use 与文件记忆，都塞进了一个原生 Android 客户端。（[Markdown](rikkahub__rikkahub.md) / [HTML](rikkahub__rikkahub.html)）
