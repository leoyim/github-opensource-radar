# 2026-10-27 · 逐项解读目录

本期共 30 个项目，独立解读 30 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **单日热度天花板明显下移，横比有效、跨日不可比**：本期最高日增为 AstrBot 的 +376 星，昨日同一口径的榜首是 +2292（VoiceStudio）。30 天内两次抓取的候选池规模相近（684/710/730），差异主要来自 Trending 的「stars today」是滚动窗口量。结论是：榜单内部排序可用，但不能拿今天的 +376 去判断「开源热度在退潮」。
- **voice-to-text 赛道同日挤入两个重量级项目**：Handy（34,794 星，+140，Tauri v2 + Rust，完全离线）与 OpenWhispr（10,062 星，+74，本地模型 + 自带 Key 走云）同日入选，卖点几乎重合：隐私优先、音频不出本机、快捷键即插即用。差别在于 Handy 只做听写、OpenWhispr 加了会议转写与笔记。这条赛道的竞争点已从「能不能转写」转到「本地模型质量 + 系统级集成」。
- **本期唯一主动披露供应链事件的仓库：SmartTube**：SmartTube README 置顶公告称作者开发环境被恶意软件感染、公钥可能被泄露，已全盘重装、构建产物交 VirusTotal 扫描，并说明一次性连接码权限有限但仍可吊销。在第三方客户端这一类项目里，构建与签名链路是主要风险面，这条公告的处理方式（披露范围、补救动作、用户需做什么）值得作为依赖审计的参考样本。
- **storytold 系列仍在榜，Rust 重写桌面创作工具成一条持续产品线**：EffectCraft（+43）与 FigCraft（+49）同属 storytold 组织，定位分别是 AE 类动态图形与 Figma 类界面设计，均为「纯 Rust 从零实现」并明确宣称「为 Agent 设计」——FigCraft 提供无头渲染导出与 MCP 驱动。10-26 期已出现过同系列三款（lightcraft/vectorcraft/cadcraft）。判断：这不是单点爆款，而是同一团队按品类逐个重写商业设计软件的路线，短期稳定性需打折观测。
- **成熟基础设施靠存量入选，评分体系对它们不友好**：llama.cpp（+125）、RetroArch（+22）、home-assistant（+21）、cockroach（+3）、keda（+3）、yugabyte-db（+4）本期均入选，日增从个位数到百位数不等。这类项目的价值不在当日增量，而在生态位置；若只看日增排序，会把它们排在早期项目之后。阅读本期榜单时建议把「基础设施类」与「新锐类」分开看。
- **星标规模异常项仍需按待核验处理**：gstack 报 137,835 星、由个人作者以 MIT 发布 Markdown 斜杠命令集合，与 AutoGPT（187,778 星，多年积累 + 公司运营）处于同一量级。GitHub 全站达到十万星通常需要数年，本期评分仅把它当热度信号使用，不据此下质量结论；建议读者用 issue 讨论质量、fork 活跃度与实际使用者反馈交叉验证。

## AI / 大模型

- **AstrBotDevs/AstrBot** · 🌟🌟🌟🌟🌗 4.5 — 把 QQ、飞书、钉钉、Telegram 接进同一套 Agent 运行时，IM 场景的自托管智能体底座。（[Markdown](AstrBotDevs__AstrBot.md) / [HTML](AstrBotDevs__AstrBot.html)）
- **ggml-org/llama.cpp** · 🌟🌟🌟🌟🌗 4.5 — C/C++ 写的本地推理引擎，GGUF 模型与自托管 API 的默认底座。（[Markdown](ggml-org__llama.cpp.md) / [HTML](ggml-org__llama.cpp.html)）
- **Significant-Gravitas/AutoGPT** · 🌟🌟🌟🌟🌗 4.5 — 从自主 Agent 实验转身为多专家编排平台，187k 星的项目仍在找产品形态。（[Markdown](Significant-Gravitas__AutoGPT.md) / [HTML](Significant-Gravitas__AutoGPT.html)）
- **thesysdev/openui** · 🌟🌟🌟🌟 4.0 — 让模型直接流式生成界面，而不是生成一段 JSON 再由前端解释。（[Markdown](thesysdev__openui.md) / [HTML](thesysdev__openui.html)）
- **garrytan/gstack** · 🌟🌟🌟🌟 4.0 — 把 Claude Code 改造成一支虚拟工程团队：23 个角色，全是斜杠命令与 Markdown。（[Markdown](garrytan__gstack.md) / [HTML](garrytan__gstack.html)）

## 前端 / Web

- **designfuchen/word-atlas** · 🌟🌟🌟🌟🌗 4.5 — 把 7,298 个雅思词做成一张可旋转的星图，配插画、双音与 FSRS 复习。（[Markdown](designfuchen__word-atlas.md) / [HTML](designfuchen__word-atlas.html)）
- **nightly-labs/openbot** · 🌟🌟🌟🌟 4.0 — 给每个编码 Agent 一间独立办公室：工作区、队列、文件互传、内嵌浏览器。（[Markdown](nightly-labs__openbot.md) / [HTML](nightly-labs__openbot.html)）
- **zephium-browser/Zephium** · 🌟🌟🌟🌟 4.0 — Rust 重写的浏览器，外加一块让 Agent 在明处干活的画布。（[Markdown](zephium-browser__Zephium.md) / [HTML](zephium-browser__Zephium.html)）
- **libretro/RetroArch** · 🌟🌟🌟🌟 4.0 — 模拟器世界的统一前端：一套界面，管所有 core。（[Markdown](libretro__RetroArch.md) / [HTML](libretro__RetroArch.html)）
- **Axolotl-Launcher/Axolotl** · 🌟🌟🌟🌗 3.5 — 基于 Modrinth App 的 Minecraft 启动器，砍掉商业化模块，保留纯净体验。（[Markdown](Axolotl-Launcher__Axolotl.md) / [HTML](Axolotl-Launcher__Axolotl.html)）

## 后端 / 云原生

- **storytold/effectcraft** · 🌟🌟🌟🌟🌗 4.5 — 纯 Rust 从零写的 AE 类工具：306 种特效、3D 相机、渲染队列，还带浏览器版。（[Markdown](storytold__effectcraft.md) / [HTML](storytold__effectcraft.html)）
- **storytold/figcraft** · 🌟🌟🌟🌟 4.0 — 纯 Rust 重写的 Figma 类设计工具，并明确把「给 Agent 用」做进接口。（[Markdown](storytold__figcraft.md) / [HTML](storytold__figcraft.html)）
- **evcc-io/evcc** · 🌟🌟🌟🌟 4.0 — 用光伏余电给车充电：本地化的充电控制器与家庭能源管理。（[Markdown](evcc-io__evcc.md) / [HTML](evcc-io__evcc.html)）
- **yugabyte/yugabyte-db** · 🌟🌟🌟🌟 4.0 — PostgreSQL 兼容的分布式 SQL：复用 PG 查询层，换掉单机存储。（[Markdown](yugabyte__yugabyte-db.md) / [HTML](yugabyte__yugabyte-db.html)）
- **kedacore/keda** · 🌟🌟🌟🌗 3.5 — 把队列深度变成 HPA 指标，顺带支持缩到零。（[Markdown](kedacore__keda.md) / [HTML](kedacore__keda.html)）

## 数据 / 数据库

- **benbjohnson/litestream** · 🌟🌟🌟🌟 4.0 — 给 SQLite 加一层流式复制：增量备份到 S3，不碰数据文件。（[Markdown](benbjohnson__litestream.md) / [HTML](benbjohnson__litestream.html)）
- **questdb/questdb** · 🌟🌟🌟🌟 4.0 — 为时序而生的低延迟数据库：零 GC 内核 + 列式分区 + 开放格式。（[Markdown](questdb__questdb.md) / [HTML](questdb__questdb.html)）
- **litmers-dev/litpage** · 🌟🌟🌟🌗 3.5 — 一个 Node 进程 + 一个 SQLite 文件，自托管的 Notion 类工作区。（[Markdown](litmers-dev__litpage.md) / [HTML](litmers-dev__litpage.html)）
- **salihcantekin/ruvio** · 🌟🌟🌟🌗 3.5 — Rust 写的 Redis 协议兼容内存库：多分片、287 条命令、六种客户端。（[Markdown](salihcantekin__ruvio.md) / [HTML](salihcantekin__ruvio.html)）
- **cockroachdb/cockroach** · 🌟🌟🌟🌗 3.5 — 强一致 KV 之上的分布式 SQL，主打「故障自动恢复、无需人工干预」。（[Markdown](cockroachdb__cockroach.md) / [HTML](cockroachdb__cockroach.html)）

## 开发工具 / 效率

- **alchaincyf/huashu-design** · 🌟🌟🌟🌟 4.0 — 用一句话让 Agent 交出能交付的设计：网页、App 原型、可编辑 PPTX、动画、信息图。（[Markdown](alchaincyf__huashu-design.md) / [HTML](alchaincyf__huashu-design.html)）
- **home-assistant/core** · 🌟🌟🌟🌟 4.0 — 把家里所有品牌的设备收回本地：开源家居自动化的默认答案。（[Markdown](home-assistant__core.md) / [HTML](home-assistant__core.html)）
- **radareorg/radare2** · 🌟🌟🌟🌟 4.0 — 命令行里的逆向工程框架：反汇编、调试、取证，一切可脚本化。（[Markdown](radareorg__radare2.md) / [HTML](radareorg__radare2.html)）
- **pch/rawmakase** · 🌟🌟🌟🌗 3.5 — Rust 写的非破坏性 RAW 编辑器，替 Linux 用户补上 Lightroom 的位置。（[Markdown](pch__rawmakase.md) / [HTML](pch__rawmakase.html)）
- **unstablebuild/rune** · 🌟🌟🌟🌗 3.5 — 把编辑器、终端与 Agent 编排放进九宫格，还要跨机互联。（[Markdown](unstablebuild__rune.md) / [HTML](unstablebuild__rune.html)）

## 移动 / 桌面 / 跨端

- **cjpais/Handy** · 🌟🌟🌟🌟🌗 4.5 — 按一下快捷键说话，字就出现在光标处，音频不出本机。（[Markdown](cjpais__Handy.md) / [HTML](cjpais__Handy.html)）
- **xtool-org/xtool** · 🌟🌟🌟🌟🌗 4.5 — 在 Linux 和 Windows 上用 SwiftPM 构建并部署 iOS 应用。（[Markdown](xtool-org__xtool.md) / [HTML](xtool-org__xtool.html)）
- **OpenWhispr/openwhispr** · 🌟🌟🌟🌟 4.0 — 本地或自带 Key 的语音听写，外加会议转写与 AI 笔记。（[Markdown](OpenWhispr__openwhispr.md) / [HTML](OpenWhispr__openwhispr.html)）
- **yuliskov/SmartTube** · 🌟🌟🌟🌟 4.0 — Android TV 上的第三方视频客户端，本期因一则可信度披露的安全公告入选。（[Markdown](yuliskov__SmartTube.md) / [HTML](yuliskov__SmartTube.html)）
- **AppFlowy-IO/AppFlowy** · 🌟🌟🌟🌟 4.0 — Notion 的开源替代：文档、数据库、看板合一，可自托管。（[Markdown](AppFlowy-IO__AppFlowy.md) / [HTML](AppFlowy-IO__AppFlowy.html)）
