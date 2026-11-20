# 2026-11-20 · 逐项解读目录

本期共 22 个项目，独立解读 22 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **22 项、7 个方向：AI 与 Agent 合计 8 席，但主线是「把能力接到哪里」而不是造新模型**：本期 22 项分布在 ai 4 / agent 4 / frontend 4 / backend 2 / data 3 / tools 1 / mobile 4。AI 方向里真正在做模型层的是 openvino（推理部署）与 linger（本地 125B MoE 推理）两项，firecrawl 做的是给 agent 供知识的抓取层，pi 做的是可定制的 agent 骨架；Agent 方向四项（Claude-BugHunter、xerj、FrontierAgent、markitdown）更是一件模型能力都没碰——分别是安全方法论技能包、可核验检索引擎、工作流分层框架与文档归一化工具。加上 pgboxdb、app-store-compliance 把能力以 skill / hook 形式装进宿主，本期至少 6 项在解决「能力如何被安装、供数、编排与验证」，而非模型本身。
- **「技能包 / 插件 / hook」成为本期最密集的分发形态**：Claude-BugHunter 是 82 个技能 + 15 个 slash command 的 drop-in bundle；pi 把 extensions、skills、prompt templates、themes 打成可经 npm/git 分享的 Pi packages；pgboxdb 提供 Claude Code plugin 与 `npx skills add` 让 coding agent 自己管数据库；app-store-compliance 把 117 条拒审规则做成可挂进多家 AI 编码工具的提交前 hook；麦田用「发布 skill → Chrome 插件 → hub」三段链路串起多平台发布；连 FrontierAgent 都把框架、工具、工作流与评测拆成可独立复用的层。规范、经验、规则与领域流程被打包成可安装、可裁剪、可跨宿主复用的文本资产，这比「又多一个 agent 框架」更贴近日常工程。
- **三个项目把「不做什么」写进第一屏，边界感比功能清单更值得看**：pi 明确跳过 sub-agents 与 plan mode，把编排留给扩展；xerj 让引擎在数据不支持时直接返回 UNKNOWN、事实冲突返回 CONFLICT，而不是让模型补一段通顺答案；pgboxdb 在徽章下方写「For disposable databases, not production data」。此外麦田写明不存平台密码、国内四家只填不发布，markitdown 说明输出面向文本分析而非高保真还原。这类主动划界的写法，恰恰是判断一个工具能否安全接入的重要依据——它替使用者把误用场景提前说清楚了。
- **老项目与十天新仓同台，且老项目仍贡献主要增量**：本期年龄跨度从 6 天（麦田）到 3,850 天（strimzi）。≥1,000 天的有 7 项：strimzi 3,850d、perspective 3,304d、openvino 2,958d、polars 2,381d、AFFiNE 1,572d、twenty 1,450d、markitdown 736d 略低于线但同属成熟项目；≤30 天的新仓有 linger 10d、Kernarium 12d、麦田 6d 三项。可比的日增里，Claude-BugHunter +1,349、firecrawl +825、markitdown +434、app-store-compliance +377、openvino +246 全部来自 167 天以上的项目。基础设施与工具链的长期积累，仍是榜单热度的压舱石。
- **数据方向三席都在压「成本」，而不是加功能**：data 方向本期 3 项：pgboxdb 让短生命周期 Postgres 从密封模板毫秒级创建、空闲仅数十 KB，主张「数据库应像对象一样分配」；olake-go 用单一 Go 引擎替代 Spark/Flink/Kafka/Debezium 做 CDC 到 Iceberg；polars 让 DataFrame 与 SQL 共用优化器，并支持 spill to disk 与 Arrow 零拷贝。三者分别压缩了分配成本、组件成本与执行成本，且都是能逐项核对的工程指标（219/231 回归一致、580K RPS、字节级计划对比），不是泛泛的性能宣称。相较此前多期 data 方向以教学占位仓为主的情形，本期三席均为实工程。
- **跨端四席走了四条完全不同的技术路线**：AFFiNE 用 CRDT 把文档、画布与表格统一为同一份数据模型并坚持 local-first；app-store-compliance 不碰运行时，只把上架规则做成扫描脚本与 hook；Kernarium 把 User-mode Linux 内核编译成原生 arm64 链入 iOS framework、仅用户态走解释器；ArchiveTune 则是 Kotlin + Compose 的成熟 Android 客户端。加上 Antigravity-Manager 用 Tauri v2 + Rust 做本地 AI 中继控制台，本期「跨端」不再等价于某个跨平台框架，而是各自针对数据所有权、合规、内核语义与体验整合选了不同落点。
- **本地优先与数据边界，从产品主张变成可核对的架构约束**：linger 把 125B 模型的热专家放 GPU、冷专家放 RAM/SSD，明确「没有云账单、没有 token 费」；麦田复用已登录的浏览器会话、不存任何平台密码；AFFiNE 写入先落本地磁盘；OpenSRE 自托管且可接自有模型；Kernarium 在设备本地跑内核；firecrawl 提供本机二进制与自托管 apps/api。这些项目没有停在「隐私友好」的口号上，而是给出了专家放置位置、凭据是否入库、推理在哪一侧执行等可复核的具体设计。选型时真正要核对的，也是这些架构细节而非宣传语。

## AI / 大模型

- **firecrawl/firecrawl** · 🌟🌟🌟🌟🌗 4.5 — 把网页变成干净的 Markdown，一条 API 同时喂给 agent 的检索、抓取与 550+ 数据源。（[Markdown](firecrawl__firecrawl.md) / [HTML](firecrawl__firecrawl.html)）
- **openvinotoolkit/openvino** · 🌟🌟🌟🌟🌗 4.5 — 让训练好的模型在 CPU、GPU、NPU 上跑得动，不必把原框架一起搬过去。（[Markdown](openvinotoolkit__openvino.md) / [HTML](openvinotoolkit__openvino.html)）
- **simplexai-labs/linger** · 🌟🌟🌟🌟 4.0 — 让 125B 的本地个人 agent 跑在一张 12 GB 显卡上，不付 token 费、数据不出本机。（[Markdown](simplexai-labs__linger.md) / [HTML](simplexai-labs__linger.html)）
- **earendil-works/pi** · 🌟🌟🌟🌟 4.0 — 一个刻意留白的 agent 骨架：不带子 agent、不带 plan mode，要什么自己装。（[Markdown](earendil-works__pi.md) / [HTML](earendil-works__pi.html)）

## SKILL / MCP / Agent

- **elementalsouls/Claude-BugHunter** · 🌟🌟🌟🌟🌗 4.5 — 把 681 份已披露漏洞报告的方法论，压成一套可安装的 Claude Code 技能包。（[Markdown](elementalsouls__Claude-BugHunter.md) / [HTML](elementalsouls__Claude-BugHunter.html)）
- **xerj-org/xerj** · 🌟🌟🌟🌟🌗 4.5 — 让搜索引擎写一段小程序去核对事实，答不出就明确返回 UNKNOWN。（[Markdown](xerj-org__xerj.md) / [HTML](xerj-org__xerj.html)）
- **ApodexAI/FrontierAgent** · 🌟🌟🌟🌟 4.0 — 把长任务 agent、终端产品与评测套件拆成四层，各自都能单独拿去用。（[Markdown](ApodexAI__FrontierAgent.md) / [HTML](ApodexAI__FrontierAgent.html)）
- **microsoft/markitdown** · 🌟🌟🌟🌟 4.0 — 把 PDF、Office、图片、音频和压缩包统一转成 Markdown，专供模型消费。（[Markdown](microsoft__markitdown.md) / [HTML](microsoft__markitdown.html)）

## 前端 / Web

- **lbjlaq/Antigravity-Manager** · 🌟🌟🌟🌟🌗 4.5 — 用 Tauri v2 桌面端把多个 AI 账号、协议转换与请求调度收进一个本地控制台。（[Markdown](lbjlaq__Antigravity-Manager.md) / [HTML](lbjlaq__Antigravity-Manager.html)）
- **twentyhq/twenty** · 🌟🌟🌟🌟🌗 4.5 — 一套能像业务代码一样 build、ship、version 的开源 CRM 底座。（[Markdown](twentyhq__twenty.md) / [HTML](twentyhq__twenty.html)）
- **mastra-ai/mastra** · 🌟🌟🌟🌟 4.0 — 给 TypeScript 团队的一整套 AI 应用框架：从原型到生产用同一套栈。（[Markdown](mastra-ai__mastra.md) / [HTML](mastra-ai__mastra.html)）
- **perspective-dev/perspective** · 🌟🌟🌟🌟 4.0 — 把流式查询引擎和交互式数据网格编译进浏览器，千万行也能实时透视。（[Markdown](perspective-dev__perspective.md) / [HTML](perspective-dev__perspective.html)）

## 后端 / 云原生

- **strimzi/strimzi-kafka-operator** · 🌟🌟🌟🌟 4.0 — 把 Kafka 集群的部署与运维交给 Kubernetes Operator，声明式地跑在 K8s / OpenShift 上。（[Markdown](strimzi__strimzi-kafka-operator.md) / [HTML](strimzi__strimzi-kafka-operator.html)）
- **Tracer-Cloud/opensre** · 🌟🌟🌟🌟 4.0 — CI 挂了不只告诉你失败，而是读日志、追根因、把修复推给你 review。（[Markdown](Tracer-Cloud__opensre.md) / [HTML](Tracer-Cloud__opensre.html)）

## 数据 / 数据库

- **pgrundev/pgboxdb** · 🌟🌟🌟🌟 4.0 — 让每个 agent、每个 PR 都能毫秒级拿到一个隔离的 Postgres，用完即弃。（[Markdown](pgrundev__pgboxdb.md) / [HTML](pgrundev__pgboxdb.html)）
- **datazip-inc/olake-go** · 🌟🌟🌟🌟 4.0 — 不用 Spark/Flink/Kafka/Debezium，把数据库、Kafka、S3 直接复制进 Iceberg。（[Markdown](datazip-inc__olake-go.md) / [HTML](datazip-inc__olake-go.html)）
- **pola-rs/polars** · 🌟🌟🌟🌟 4.0 — DataFrame API 与 SQL 走同一个优化器，用 Rust 把查询压到多核与磁盘之外。（[Markdown](pola-rs__polars.md) / [HTML](pola-rs__polars.html)）

## 开发工具 / 效率

- **CzzzzzzJ/mdldm-maitian** · 🌟🌟🌟🌟 4.0 — 给单人创作者的一套多平台发布中控：AI 写文案、插件填表、大屏看转化。（[Markdown](CzzzzzzJ__mdldm-maitian.md) / [HTML](CzzzzzzJ__mdldm-maitian.html)）

## 移动 / 桌面 / 跨端

- **toeverything/AFFiNE** · 🌟🌟🌟🌟🌗 4.5 — 文档、白板与表格融在同一块无边画布上，且数据始终先在本地。（[Markdown](toeverything__AFFiNE.md) / [HTML](toeverything__AFFiNE.html)）
- **mjmirza/app-store-compliance** · 🌟🌟🌟🌟 4.0 — 把 App Store / Google Play 的拒审模式做成可扫描的规则库与提交前 hook。（[Markdown](mjmirza__app-store-compliance.md) / [HTML](mjmirza__app-store-compliance.html)）
- **imxieyi/Kernarium** · 🌟🌟🌟🌟 4.0 — 用 User-mode Linux 在 iOS 上原生跑真实 Linux 内核，用户态才交给解释器。（[Markdown](imxieyi__Kernarium.md) / [HTML](imxieyi__Kernarium.html)）
- **rukamori/ArchiveTune** · 🌟🌟🌟🌟 4.0 — 一个把本地音乐与 YouTube Music 收进同一处的 Android 播放器。（[Markdown](rukamori__ArchiveTune.md) / [HTML](rukamori__ArchiveTune.html)）
