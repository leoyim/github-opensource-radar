# 2026-11-21 · 逐项解读目录

本期共 21 个项目，独立解读 21 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **21 项、7 个方向：主线是「把能力接到哪里」，不是再造模型**：本期 21 项分布在 ai 4 / agent 4 / frontend 2 / backend 4 / data 2 / tools 2 / mobile 3。AI 方向四项里，paper-orchestra 做研究与写作的流程编排，FreeVideo 与 splash 做本地推理，jan 做统一客户端，AISafetyHot 做安全情报——没有一项在训练新模型。Agent 方向四项则一致地把某类软件或设备变成 agent 的可操作对象：Blender、3D 渲染器、电视桌面、长视频剪辑。两个方向合起来 8 席，重心都在「能力如何被安装、调用与交付」。
- **Agent 的四条落地路径：3D、影音、客厅与真机**：blender-ai-mcp-addon 把 3D 软件的操作面抽象为工具，并用 Manager / Worker / Reviewer 三角色互相校验；vork 干脆让 agent 用代码写场景，渲染器只留 API；couch-tv 把电视桌面的安装写成 agent 可执行的分步计划，但保留确认闸门；autoclip 把长转短做成管线，同时开放 MCP。四个项目的共同点不是「更聪明的模型」，而是把原本依赖人手的界面操作，压缩成可复现、可验收的调用序列。
- **资源门槛持续下移，本地优先成为默认选项之一**：FreeVideo 把视频生成压到 8 GB 显存，splash 把 Mac 本地推理优化到 M3 起步，jan 坚持模型与数据落本机，liustack/sqlite 用 LLVM 直译换来无 cgo 的静态部署。它们分处不同方向，却在做同一件事：把「必须上云」的前提拆掉。对使用者而言，成本结构从按次付费转向一次性硬件投入，代价是运维与调优回到自己身上。
- **老将与新仓同台，成熟度分层比排名更值得看**：本期同时出现 nats-server（十四年）、deck.gl（十一年）、ruffle（七年）、arnis（四年），以及 datacat、mydb、电池监视器这三个四天新仓。星标数会把它们排在一起，但可用性完全不在一个量级：老项目的风险是路径依赖与升级成本，新项目的风险是尚未经受真实流量。选型时先看 ageDays 与 issue 结构，比看总星标更有信息量。
- **「收敛脏活」是本期最稳定的价值主张**：autoclip 收敛长转短的重复劳动，datacat 收敛可观测性的组件拼装，treg 收敛工具发现与凭据托管，phone-harness 收敛真机操作的改造成本，liustack/sqlite 收敛 cgo 与交叉编译的取舍。它们的共同结构是：把一个分散在多工具、多账号、多步骤里的流程，压成一条接口。这类项目的价值不体现在演示效果，而体现在接入后省掉的维护面。
- **数据方向在 AI 语境下重新定位**：本期 data 只有两项，却指向两个方向：mydb 把 AI GENERATE / AI EMBED 做成 SQL 函数，让检索与生成留在数据库内；liustack/sqlite 则从部署形态入手，解决 Go 单二进制与 SQLite 的兼容。一个往上加 AI 原语，一个往下减构建依赖，说明数据层的竞争已不只在吞吐，还在「能否成为 AI 应用的默认底座」。

## AI / 大模型

- **google-research/paper-orchestra** · 🌟🌟🌟🌟 4.0 — 把论文写作拆成五个专职角色，从原始材料一路编排到可投稿的 LaTeX。（[Markdown](google-research__paper-orchestra.md) / [HTML](google-research__paper-orchestra.html)）
- **FlashML-org/FreeVideo** · 🌟🌟🌟🌟 4.0 — 8 GB 显存就能在本地跑 MiniMax H3 出片，加速路径交给硬件自己选。（[Markdown](FlashML-org__FreeVideo.md) / [HTML](FlashML-org__FreeVideo.html)）
- **wuyoscar/AISafetyHot** · 🌟🌟🌟🌟 4.0 — 把 AI 安全的论文、事件与讨论汇成一处，并开一个 MCP 口子让 agent 自己读。（[Markdown](wuyoscar__AISafetyHot.md) / [HTML](wuyoscar__AISafetyHot.html)）
- **janhq/jan** · 🌟🌟🌟🌟 4.0 — 把本地模型与云端模型装进同一个桌面入口，数据默认不出本机。（[Markdown](janhq__jan.md) / [HTML](janhq__jan.html)）

## SKILL / MCP / Agent

- **zhouxiaoka/autoclip** · 🌟🌟🌟🌟🌗 4.5 — 一个链接进去，短片、字幕、封面与文案一起出来，渲染留在本机。（[Markdown](zhouxiaoka__autoclip.md) / [HTML](zhouxiaoka__autoclip.html)）
- **bookwjitchieni1986/blender-ai-mcp-addon** · 🌟🌟🌟🌟 4.0 — 让 agent 在 Blender 里直接读场景、建物体、调材质，并用三角色互相校验。（[Markdown](bookwjitchieni1986__blender-ai-mcp-addon.md) / [HTML](bookwjitchieni1986__blender-ai-mcp-addon.html)）
- **voyager-so/vork** · 🌟🌟🌟🌟 4.0 — 让 agent 用代码写完整场景，渲染交给 GPU，而不是交给 GUI。（[Markdown](voyager-so__vork.md) / [HTML](voyager-so__vork.html)）
- **Seagey/couch-tv** · 🌟🌟🌟🌟 4.0 — 把电视桌面从厂商广告里换出来，并让 agent 帮你装。（[Markdown](Seagey__couch-tv.md) / [HTML](Seagey__couch-tv.html)）

## 前端 / Web

- **driceroland/Search** · 🌟🌟🌟🌟 4.0 — 一个 10 MB 的 macOS 浏览器，把「不打扰」做成了功能。（[Markdown](driceroland__Search.md) / [HTML](driceroland__Search.html)）
- **visgl/deck.gl** · 🌟🌟🌟🌟 4.0 — 用图层叠加与多视图，把大规模数据画在 GPU 上。（[Markdown](visgl__deck.gl.md) / [HTML](visgl__deck.gl.html)）

## 后端 / 云原生

- **louis-e/arnis** · 🌟🌟🌟🌟 4.0 — 用 OpenStreetMap 与高程数据，把真实地点生成成 Minecraft 世界。（[Markdown](louis-e__arnis.md) / [HTML](louis-e__arnis.html)）
- **nats-io/nats-server** · 🌟🌟🌟🌟 4.0 — 单二进制、低运维的消息系统，从云端一路铺到树莓派。（[Markdown](nats-io__nats-server.md) / [HTML](nats-io__nats-server.html)）
- **replit/datacat** · 🌟🌟🌟🌗 3.5 — 把指标、日志、追踪与告警自托管在一处，数据留在自己的库。（[Markdown](replit__datacat.md) / [HTML](replit__datacat.html)）
- **ruffle-rs/ruffle** · 🌟🌟🌟🌗 3.5 — 用 Rust 重写 Flash，让停服多年的 SWF 还能被打开。（[Markdown](ruffle-rs__ruffle.md) / [HTML](ruffle-rs__ruffle.html)）

## 数据 / 数据库

- **liustack/sqlite** · 🌟🌟🌟🌗 3.5 — 用 LLVM 把 SQLite 的 C 编译成 Go 汇编，换来无 cgo 也不慢。（[Markdown](liustack__sqlite.md) / [HTML](liustack__sqlite.html)）
- **yzsind/mydb** · 🌟🌟🌟🌗 3.5 — 把模型调用写进 SQL：生成文本、算向量，都在一条语句里完成。（[Markdown](yzsind__mydb.md) / [HTML](yzsind__mydb.html)）

## 开发工具 / 效率

- **phone-harness/phone-harness** · 🌟🌟🌟🌟 4.0 — 不越狱、不装 App，让 agent 直接操作你的真机。（[Markdown](phone-harness__phone-harness.md) / [HTML](phone-harness__phone-harness.html)）
- **superdesigndev/treg** · 🌟🌟🌟🌟 4.0 — 一个 token 调遍数千个第三方工具，凭据不下发到 agent。（[Markdown](superdesigndev__treg.md) / [HTML](superdesigndev__treg.html)）

## 移动 / 桌面 / 跨端

- **krisgfx9/Wireless-Device-Battery-Monitor** · 🌟🌟🌟🌟🌗 4.5 — 350 KB 的托盘小工具，直接读出无线外设的电量。（[Markdown](krisgfx9__Wireless-Device-Battery-Monitor.md) / [HTML](krisgfx9__Wireless-Device-Battery-Monitor.html)）
- **incoai/splash** · 🌟🌟🌟🌟 4.0 — 为 Apple silicon 定制的本地推理引擎，目标是让 coding agent 跑得顺。（[Markdown](incoai__splash.md) / [HTML](incoai__splash.html)）
- **nsgo-dev/nsgo** · 🌟🌟🌟🌗 3.5 — 用 Go 写逻辑、用各平台原生视图渲染，一套代码铺到手机与小程序。（[Markdown](nsgo-dev__nsgo.md) / [HTML](nsgo-dev__nsgo.html)）
