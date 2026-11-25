# 2026-11-25 · 逐项解读目录

本期共 21 个项目，独立解读 21 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **21 项、7 个方向：主线是「兼容层下沉」与「agent 工作层」两件事**：本期 21 项分布在 ai 3 / agent 4 / frontend 3 / backend 3 / data 1 / tools 3 / mobile 4（AutoSwarm-Shadow-Adapter 因热度异常被移出，ai 由 4 变 3）。跨方向看最集中的两条线：一是兼容层下沉——XCL 放弃 CPU 模拟、工作量压到 RDNA2→DXIL 着色器重编译与主机系统库自研，其 fork 当天跟进修复渲染链路，git-ai 则把 Anthropic 对 agent 版本控制的设计复刻成开源实现；二是 agent 工作层——ECC 与 agent-skills 把 harness/技能从经验帖变成可版本管理的配置，agy-fast 在调用结构层省 token，codex-plugin-cc 把跨模型评审做成官方命令。两条线的共同判断是：模型能力已够用，竞争点在模型在哪里、以什么结构、被什么约束地工作。
- **日增分布：11 项有可比基线合计 +1,700，ECC 一项占近四成**：本期 11 项有可比日增基线，合计约 +1,700：ECC +675（占 40%）、rustdesk +269、agent-skills +212、localsend +205、textfold +126、pentagi +84、codex-plugin-cc +43、KubeAtlas +36、fagus +23、pgrust +20、shaders +7。头部集中度与 11-24 期（最高占 34%）接近，但本期头部是 harness 层工具而非单点应用——agent 工作层的注意力迁移仍在加速。老项目（rustdesk、localsend、pentagi、pgrust）合计贡献约 580，说明增长不只在新仓。
- **Xbox 兼容层一天冒出两个条目：同一架构方向的两种角色**：xcl（4 天、7,876 星、1,309 issue）与 victory-fork（1 天、2,038 星、497 issue）在本期同台，但角色不同：前者是完整的兼容层实现——不做 CPU 模拟、26,698 个着色器程序全量转译、370+ 自动化测试，给出「同架构主机可绕开模拟」的工程验证；后者是修复向 fork，把一条条渲染修复（视图类型、描述符生命周期、mip 偏移）写成可复用的错误模式案例，并声明由 Claude Code 协作完成。一个给架构验证，一个给调试案例，两份材料对做翻译管线的团队互补。
- **agent 四项不训模型：约束的是流程、结构与边界**：agent 方向四项的分工：ECC 与 agent-skills 竞争 harness 配置层——前者全（技能/记忆/安全四层独立），后者准（反合理化表 + 证据收尾）；agy-fast 从调用结构省 token（批量合并 + 单次快照）；codex-plugin-cc 把跨模型对抗评审做成官方命令。四项都不碰权重，全部注意力放在 agent 的流程约束、调用结构与权限边界上——与 11-24 期「agent 在哪里工作」的观察一致，且本轮更靠近工程实践而非框架抽象。
- **新仓四连发（1/4/6/11 天）与千天级老仓同台，量级差三个数量级**：新仓一侧是 victory-fork（1 天）、xcl（4 天）、agy-fast（6 天）、fagus（11 天），星标从 200 到 7,876；老仓一侧是 rustdesk（2,248 天）、localsend（1,440 天）、pentagi（687 天）、pgrust（219 天）。新仓靠单点突破上榜，老仓靠「至今没有替代者」留榜——rustdesk 与 localsend 的日增（+269、+205）说明老项目仍是流量主力。需要提醒的是：本期新仓里 4 天 1,309 个 issue 的 xcl 是热度真实性的正面样本，而此前一个 5,171 星、3 fork、0 watcher 的条目已被判定刷星移出——量级本身不说明问题，社区指标的匹配度才说明。
- **4 项强 copyleft，且都替换基础设施级产品**：本期 21 项里 4 项采用强 copyleft：xcl 为 GPL-2.0，victory-fork 与 veronica 为 GPL-3.0，pgrust 为 AGPL-3.0，占 19%。共同点是都在替代一个现有基础设施——主机游戏运行时、桌面控制中心、Postgres 本身——许可选择与「防止被闭源二次分发」的意图一致。对使用方而言 pgrust 的 AGPL 要特别对待：服务化部署直接触发开源义务，商用前必须先把许可成本算清；GPL 系当独立工具用没问题，当组件嵌入闭源产品前逐项确认分发方式。

## AI / 大模型

- **atuizz/posewear** · 🌟🌟🌟🌟 4.0 — 把生图素材库做成结构化资产：姿势、深度图与提示词绑定的浏览器参考图库。（[Markdown](atuizz__posewear.md) / [HTML](atuizz__posewear.html)）
- **chenxiachan/textfold** · 🌟🌟🌟🌗 3.5 — 把论文、网页、文件与 AI 回复折叠成五级细节层，逐级缩放阅读。（[Markdown](chenxiachan__textfold.md) / [HTML](chenxiachan__textfold.html)）
- **vxcontrol/pentagi** · 🌟🌟🌟🌗 3.5 — 自然语言下指令，一组专业分工的 agent 在沙箱里跑完渗透测试全流程。（[Markdown](vxcontrol__pentagi.md) / [HTML](vxcontrol__pentagi.html)）

## SKILL / MCP / Agent

- **affaan-m/ECC** · 🌟🌟🌟🌟🌗 4.5 — agent 编码工具的 harness 优化层：技能、直觉、记忆、安全边界一次装齐。（[Markdown](affaan-m__ECC.md) / [HTML](affaan-m__ECC.html)）
- **addyosmani/agent-skills** · 🌟🌟🌟🌟🌗 4.5 — 把资深工程师的工作流写成 agent 可执行、可堵漏的技能库。（[Markdown](addyosmani__agent-skills.md) / [HTML](addyosmani__agent-skills.html)）
- **kaomei/stickman-video-director** · 🌟🌟🌟🌟 4.0 — 一条消息把脚本变成带配音字幕的火柴人动画视频，面向无真人出镜频道。（[Markdown](kaomei__stickman-video-director.md) / [HTML](kaomei__stickman-video-director.html)）
- **INK-Q/agy-fast** · 🌟🌟🌟🌟 4.0 — 给 Google Antigravity 加速的 MCP 插件：把高频调用合并成批量本地操作。（[Markdown](INK-Q__agy-fast.md) / [HTML](INK-Q__agy-fast.html)）

## 前端 / Web

- **nforst/fagus** · 🌟🌟🌟🌗 3.5 — PHP/Laravel 的 HTML 转 PDF，不带浏览器：Rust 引擎按 Chrome 打印效果渲染。（[Markdown](nforst__fagus.md) / [HTML](nforst__fagus.html)）
- **shader-effects-inc/shaders** · 🌟🌟🌟🌗 3.5 — 200+ WebGPU 特效做成框架组件：设计器里调，导出就是可运行代码。（[Markdown](shader-effects-inc__shaders.md) / [HTML](shader-effects-inc__shaders.html)）
- **pacewisdomhq/TutorLoom** · 🌟🌟🌟 3.0 — 一套部署服务多家机构的多租户自托管 LMS，Django + React。（[Markdown](pacewisdomhq__TutorLoom.md) / [HTML](pacewisdomhq__TutorLoom.html)）

## 后端 / 云原生

- **namannn04/veronica** · 🌟🌟🌟🌟 4.0 — Ubuntu 桌面的本地控制中心：agent 用量、媒体、剪贴板、GNOME 集成一处收拢。（[Markdown](namannn04__veronica.md) / [HTML](namannn04__veronica.html)）
- **made-in-common/forges** · 🌟🌟🌟🌗 3.5 — 一个客户端统一 14 个代码托管平台：issues、PR、通知、checks、webhooks。（[Markdown](made-in-common__forges.md) / [HTML](made-in-common__forges.html)）
- **maomada/KubeAtlas** · 🌟🌟🌟 3.0 — 自托管 K8s 运维台：Hub/Agent 多集群视图，AI 走按集群授权的 MCP。（[Markdown](maomada__KubeAtlas.md) / [HTML](maomada__KubeAtlas.html)）

## 数据 / 数据库

- **malisper/pgrust** · 🌟🌟🌟🌗 3.5 — 用 Rust 重写的 Postgres：协议兼容，为分析负载重新设计引擎。（[Markdown](malisper__pgrust.md) / [HTML](malisper__pgrust.html)）

## 开发工具 / 效率

- **feder-cr/git-ai** · 🌟🌟🌟🌗 3.5 — 按 Anthropic Scion 设计复刻的开源版本控制：服务端中心式，为数百 agent 并发而建。（[Markdown](feder-cr__git-ai.md) / [HTML](feder-cr__git-ai.html)）
- **openai/codex-plugin-cc** · 🌟🌟🌟🌗 3.5 — 在 Claude Code 里直接调 Codex：评审委托与任务交接的官方插件。（[Markdown](openai__codex-plugin-cc.md) / [HTML](openai__codex-plugin-cc.html)）
- **qiz029/dscode** · 🌟🌟🌟 3.0 — DeepSeek 驱动的终端编码 harness：单会话运行时贯通 TUI、CLI 与脚本。（[Markdown](qiz029__dscode.md) / [HTML](qiz029__dscode.html)）

## 移动 / 桌面 / 跨端

- **xcl-dev/xcl** · 🌟🌟🌟🌟🌗 4.5 — Xbox Series 兼容层：CPU 原生跑、着色器重编译、系统库自研重实现。（[Markdown](xcl-dev__xcl.md) / [HTML](xcl-dev__xcl.html)）
- **fxceless/victory-fork** · 🌟🌟🌟🌟🌗 4.5 — 一个把 Xbox Series 游戏在 Windows 跑通的 fork：修复实录本身就是教科书。（[Markdown](fxceless__victory-fork.md) / [HTML](fxceless__victory-fork.html)）
- **rustdesk/rustdesk** · 🌟🌟🌟🌟🌗 4.5 — 开源自托管远程桌面：信令与中继全开源，TeamViewer 的完整替代。（[Markdown](rustdesk__rustdesk.md) / [HTML](rustdesk__rustdesk.html)）
- **localsend/localsend** · 🌟🌟🌟🌟🌗 4.5 — 局域网内的开源 AirDrop：全平台覆盖，协议开放，无需互联网。（[Markdown](localsend__localsend.md) / [HTML](localsend__localsend.html)）
