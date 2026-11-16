# 2026-11-16 · 逐项解读目录

本期共 25 个项目，独立解读 25 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **增量高度集中在 AI 与前端，两项合计占 86%**：25 项里 21 项有前一日基线，合计日增 +2,028。AI 方向 +1,359（67.0%）、前端 +389（19.2%），两项合计 86.2%；后端 +167、跨端 +91、工具 +22、数据 0。日增前四（nod +438、LoopForge +423、ag-ui +355、bombadil +202）就占去 69.9%。这不是各方向同步升温，注意力主要落在「agent 的基础设施」与「界面的组织方式」两条线上，读总量时不宜理解为全栈普遍走强。
- **AI 五席有四席在补「宿主层」，而不是模型层**：ag-ui 定的是 agent 到界面的事件协议，LoopForge 定的是角色、沙箱与审批门组成的交付 SOP，assistant-ui 定的是可换后端的聊天界面原语，fastmcp 定的是工具暴露框架，nod 才是真正替用户执行事务的那一层；unsloth 则把本地模型接给这些 agent。五项里没有一项在提出新模型或新训练方法，说明这一轮的竞争点已经上移到「怎么把 agent 组织进现有软件与流程」。assistant-ui 同时列出 react-ag-ui 与 react-a2a 适配，正是这种分层思路的落地证据。
- **本地优先从口号变成一整套边界设计**：nod 把浏览器与记忆放本机、代发消息前先要批准；yogurt 明确音频、转写与摘要不出电脑，并把 MCP 通道做成默认关闭的只读接口；qod 与 vaultwarden 强调自有基础设施；quacklake 把控制面拆到边缘；unsloth 提供 OpenAI 兼容 API 让本地模型直接接进编码 agent。值得注意的是这些项目都主动写清了「边界在哪里」——哪些数据仍会外流、哪些通道默认不开、哪些权限需要人确认，比单纯标榜 offline 更可核对。
- **DuckLake 缺的服务层，本期出现两条不同解法**：starlake-ai/qod 走本地多租户网关路线：Arrow Flight SQL 供 BI 客户端直连，行列级安全在引擎内判定，每条语句路由到单节点并坦承不做 TB 级分布式 join。tobilg/quacklake 走边缘路线：Cloudflare Workers + 每目录一个 SQLite Durable Object，JWT/OIDC 解析主体，执行前做 SQL 分类与策略判定，同样明确列出尚未实现的完整 DuckDB 语义。两者都把「DuckLake 有意留白的认证、授权、路由」当成独立一层，也都在 README 里划清能力上限——这类诚实的边界声明比功能清单更有参考价值。
- **10 个千日老项目与 2 个不足十天的新仓同台**：tree-sitter 4,758 天、teleport 4,276 天、jaeger 3,866 天、vaultwarden 3,193 天、esphome 3,145 天、meshery 2,923 天、UTM 2,774 天、ratatui 1,372 天、assistant-ui 1,089 天、unsloth 1,082 天，共 10 项 ≥1,000 天；另一端是 yogurt 5 天、phonebox 8 天两个新仓，且都落在跨端桌面类。年龄分布的两极化说明榜单同时承担两种功能：记录基础设施的长期演进，以及捕捉刚出现的产品形态。评估时不宜用同一套成熟度标准去要求两端。
- **数据方向日增归零，但内容全是实工程**：数据四席中三席日增 +0、一席无基线，星标 53–146，是本期最安静的方向。但内容结构与以往不同：qod 与 quacklake 是湖仓服务层的两种实现，sqlex 是针对 sqlx 二十余个已知缺陷且附上游 issue 编号的兼容替代，assignment-data-pipeline 则把每步清洗的方法与理由写成对照表。它们都不是通用框架级别的热度，却各自给出了可复核的工程细节；对数据方向更适合按「能否替换或借鉴具体做法」来读，而不是按星标排序。
- **跨端桌面一次出现四条技术路径**：yogurt 用 Electron 承载本地转写与摘要，phonebox 用 .NET 10 桌面 agent 配 Android App 把旧手机变成副屏，MangoDisk 用 Tauri 2 + Rust 做三端磁盘清理，UTM 则以 QEMU 全系统仿真直接跨过指令集边界；compose-miuix-ui/miuix 又从 Compose Multiplatform 的 UI 组件层统一五端观感。同期出现的还有「本地模型文件占了多少磁盘」「agent 配额能不能放到副屏上看」这类新需求——跨端的驱动力正在从「一套代码多端跑」转向「把本机已有的算力和数据重新组织起来」。

## AI / 大模型

- **ag-ui-protocol/ag-ui** · 🌟🌟🌟🌟🌗 4.5 — 把「agent 怎么和前端说话」定成一套开放事件协议，补上 MCP 与 A2A 之外的最后一环。（[Markdown](ag-ui-protocol__ag-ui.md) / [HTML](ag-ui-protocol__ag-ui.html)）
- **n8n-io/nod** · 🌟🌟🌟🌟 4.0 — 一个住在本机、有自己的浏览器、动手前先问一句的个人 agent。（[Markdown](n8n-io__nod.md) / [HTML](n8n-io__nod.html)）
- **Tencent/LoopForge** · 🌟🌟🌟🌟 4.0 — 给编码 agent 套上角色、沙箱和审批门，让一次跑通变成可复用的交付流程。（[Markdown](Tencent__LoopForge.md) / [HTML](Tencent__LoopForge.html)）
- **PrefectHQ/fastmcp** · 🌟🌟🌟🌟 4.0 — MCP 应用的事实标准框架，几行 Python 就能把函数变成合规工具。（[Markdown](PrefectHQ__fastmcp.md) / [HTML](PrefectHQ__fastmcp.html)）
- **unslothai/unsloth** · 🌟🌟🌟🌟 4.0 — 把本地跑模型与微调模型收进一个桌面应用，顺手把本地模型接给编码 agent。（[Markdown](unslothai__unsloth.md) / [HTML](unslothai__unsloth.html)）

## 前端 / Web

- **antithesishq/bombadil** · 🌟🌟🌟🌟 4.0 — 让属性测试自己去找 UI 的边界，而不是等人写够用例。（[Markdown](antithesishq__bombadil.md) / [HTML](antithesishq__bombadil.html)）
- **assistant-ui/assistant-ui** · 🌟🌟🌟🌟 4.0 — 把 ChatGPT 那套交互拆成可组合的 React 原语，后端随便换。（[Markdown](assistant-ui__assistant-ui.md) / [HTML](assistant-ui__assistant-ui.html)）
- **tree-sitter/tree-sitter** · 🌟🌟🌟🌟 4.0 — 编辑器里每一次按键都能重解析的那棵语法树，已成基础设施。（[Markdown](tree-sitter__tree-sitter.md) / [HTML](tree-sitter__tree-sitter.html)）
- **nolly-studio/cult-ui** · 🌟🌟🌟🌗 3.5 — 150+ 个直接复制进项目的动效组件，把 shadcn/ui 的边界往外推了一格。（[Markdown](nolly-studio__cult-ui.md) / [HTML](nolly-studio__cult-ui.html)）
- **compose-miuix-ui/miuix** · 🌟🌟🌟🌗 3.5 — 给 Compose Multiplatform 一套 MIUI 风格组件，一次写好铺到五端。（[Markdown](compose-miuix-ui__miuix.md) / [HTML](compose-miuix-ui__miuix.html)）

## 后端 / 云原生

- **jaegertracing/jaeger** · 🌟🌟🌟🌟🌗 4.5 — 分布式追踪的老牌底座，v2 把自己收进 OpenTelemetry 的同一套骨架。（[Markdown](jaegertracing__jaeger.md) / [HTML](jaegertracing__jaeger.html)）
- **paimonsoror/telltaledns** · 🌟🌟🌟🌟 4.0 — 把每一条 DNS 查询都归因到设备、解释清楚，并按设备下规则。（[Markdown](paimonsoror__telltaledns.md) / [HTML](paimonsoror__telltaledns.html)）
- **dani-garcia/vaultwarden** · 🌟🌟🌟🌟 4.0 — 用 Rust 重写 Bitwarden 服务端，让自建密码库不再吃满一台机器。（[Markdown](dani-garcia__vaultwarden.md) / [HTML](dani-garcia__vaultwarden.html)）
- **meshery/meshery** · 🌟🌟🌟🌟 4.0 — 把 Kubernetes 多集群管理从手写 YAML 拉回可视化与 GitOps。（[Markdown](meshery__meshery.md) / [HTML](meshery__meshery.html)）
- **gravitational/teleport** · 🌟🌟🌟🌗 3.5 — 用短期证书统一人、机器与工作负载的基础设施访问入口。（[Markdown](gravitational__teleport.md) / [HTML](gravitational__teleport.html)）

## 数据 / 数据库

- **starlake-ai/qod** · 🌟🌟🌟🌗 3.5 — DuckDB / DuckLake 缺的那一层「服务」：认证、授权与连接路由，一条命令补齐。（[Markdown](starlake-ai__qod.md) / [HTML](starlake-ai__qod.html)）
- **go-sqlex/sqlex** · 🌟 1.0 — 改一行 import 就能换掉 sqlx，顺带修掉二十多个老 bug。（[Markdown](go-sqlex__sqlex.md) / [HTML](go-sqlex__sqlex.html)）
- **arielshakaramiro/assignment-data-pipeline** · 🌟 1.0 — 一份把「脏数据」每一步处理理由都写清楚的 ETL 教学作业。（[Markdown](arielshakaramiro__assignment-data-pipeline.md) / [HTML](arielshakaramiro__assignment-data-pipeline.html)）
- **tobilg/quacklake** · 🌟 1.0 — 把 DuckLake 的目录与授权搬进 Cloudflare Durable Objects。（[Markdown](tobilg__quacklake.md) / [HTML](tobilg__quacklake.html)）

## 开发工具 / 效率

- **ratatui/ratatui** · 🌟🌟🌟🌗 3.5 — Rust 写终端界面的默认答案，连 no_std 微控制器都能跑。（[Markdown](ratatui__ratatui.md) / [HTML](ratatui__ratatui.html)）
- **esphome/esphome** · 🌟🌟🌟🌗 3.5 — 把 ESP 设备变成可声明配置的本地智能家居节点。（[Markdown](esphome__esphome.md) / [HTML](esphome__esphome.html)）

## 移动 / 桌面 / 跨端

- **FrigadeHQ/yogurt** · 🌟🌟🌟🌟🌗 4.5 — 不拉机器人进会议的本地 AI 会议笔记，音频与模型都留在自己电脑。（[Markdown](FrigadeHQ__yogurt.md) / [HTML](FrigadeHQ__yogurt.html)）
- **ersinkoc/phonebox** · 🌟🌟🌟🌟 4.0 — 把吃灰的旧安卓手机变成电脑的桌面副屏与触控控制台。（[Markdown](ersinkoc__phonebox.md) / [HTML](ersinkoc__phonebox.html)）
- **harry0703/MangoDisk** · 🌟🌟🌟🌟 4.0 — 用 Tauri 2 + Rust 做跨平台磁盘清理，顺带把 AI 工具的缓存也纳入视野。（[Markdown](harry0703__MangoDisk.md) / [HTML](harry0703__MangoDisk.html)）
- **utmapp/UTM** · 🌟🌟🌟🌗 3.5 — 在 iPhone、iPad 与 Mac 上跑完整系统虚拟机，基于 QEMU。（[Markdown](utmapp__UTM.md) / [HTML](utmapp__UTM.html)）
