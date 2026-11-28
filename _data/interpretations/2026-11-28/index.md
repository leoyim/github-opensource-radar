# 2026-11-28 · 逐项解读目录

本期共 19 个项目，独立解读 19 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **19 项、7 个方向：主线是把执行层往下压一层**：本期 19 项分布在 ai 4 / agent 4 / frontend 1 / backend 3 / data 2 / tools 2 / mobile 3。最集中的一条线是「不再叠加中间层，直接改写下面那一层」：xnulinux 把 XNU 编成 Linux 内核模块，绕开虚拟化与用户态兼容层；VIctory-NVIDIA 在兼容层之上直接判定硬件能力再选帧生成路径；net-merge 在网络层做多链路聚合而不引入代理。另一条线是「用原生渲染替掉 Web 外壳」：openidea、locus、openvector、ArcMD 四项分别以 Rust 或 Go 直接绘制界面，指标口径都对着 Electron 与重型 IDE。两端合起来，是在把过去几年习惯的那一层抽象重新拆掉。
- **原生渲染成了一个小集群：四项都在同一件事上省资源**：openidea 用 Rust 核心加 Web 界面，在约 770 个文件的 Python 项目上给出开窗 0.9 s、内存 169 MB，对照 IDEA 的 3.1 s 与 2,011 MB，并附可复跑的测量脚本；locus 用 GPUI 做单 exe 数据库客户端，把结果集改成流式注入虚拟化网格，让慢查询不再冻结界面；openvector 让同一份 Rust 引擎供网页、桌面、CLI 与 Node 四端使用；ArcMD 更进一步，连 WebView 都不用，由 Go 直接驱动窗口绘制与字形排版。四者的共同点不是语言，而是「把运行时从交付物里去掉」，代价则是平台适配与输入法等底层问题要自己扛。
- **日增：10 项有可比基线合计约 +1,357，无单项断层**：本期 10 项有可比日增，合计约 +1,357：net-merge +434、ffmpeg-skill +377 合计占 59.8%，EGM +179、openidea +129、ArcMD +112 紧随，其后 modelsphere +83、pgvector +14、Axolotl +12、Mooncake +11、langchain4j +6。与前期动辄单项 +700 的结构不同，本期没有断层项目，热度分散在「网络、视频、设计评审、IDE、写作」五个互不相关的场景里，说明当日没有单一话题带动整榜。
- **agent 方向的重心从「能力」转到「契约」**：本期 agent 四项各自解决一段可控性问题：ffmpeg-skill 把 42 个 FFmpeg 操作包成带类型参数的脚本与机器可读契约，先 probe 再执行、写完回读校验，源文件被覆盖前直接拒绝；EGM 让评审者在不继承起草者上下文的前提下只读草稿，把「独立评审」做成流程结构；opengame 把生成结果落成可读的 index.html 加确定性 logic.js，使「改」可验证；cubepod 用持久可写 rootfs 与零信任出口，让 agent 装完的依赖留得住、拿不到真实凭据。四者都不再强调模型多强，而是在划定边界。
- **成熟度跨度：2 天到 5 年半，中位 32 天**：年龄跨度从 VIctory-NVIDIA 的 2 天、opengame 的 3 天，到 pgvector 的 2,047 天、langchain4j 的 1,256 天、Mooncake 的 886 天，中位数为 32 天。两端各自成立：老项目靠的是不可替代的生态位（Postgres 向量检索、JVM 上的 LLM 抽象、Kimi 的 KV 平台），新项目靠的是把某个具体约束做到底（自备游戏转储的兼容层、可写 rootfs 的沙箱、不用 WebView 的编辑器）。本期没有「既新又全」的项目，这是个好信号。
- **许可：Apache-2.0 占 7 项，copyleft 3 项，三项未标标准协议**：19 项中 Apache-2.0 七项（modelsphere、Mooncake、langchain4j、opengame、EGM、cubepod、openidea），MIT 六项（gputaskman、ffmpeg-skill、数据经纪商脚本、openvector、net-merge、ArcMD），GPL-3.0 两项（VIctory-NVIDIA、davish），AGPL-3.0 一项（locus）。另有 Axolotl、pgvector、xnulinux 三项未按 SPDX 标准标注：pgvector 实为 PostgreSQL 许可，Axolotl 基于上游改造需自行厘清，xnulinux 因组合 Apple 公开源码而边界复杂。做商用集成前，这三项都要单独核对。

## AI / 大模型

- **shanselman/gputaskman** · 🌟🌟🌟🌟 4.0 — 把 GPU 显存从「占了多少」拆到「被谁占了、占在哪一层」。（[Markdown](shanselman__gputaskman.md) / [HTML](shanselman__gputaskman.html)）
- **modelsphere/modelsphere** · 🌟🌟🌟🌗 3.5 — 把限流从「请求数」换成「服务质量」，并用在途迁移兜住长尾。（[Markdown](modelsphere__modelsphere.md) / [HTML](modelsphere__modelsphere.html)）
- **kvcache-ai/Mooncake** · 🌟🌟🌟🌗 3.5 — 把 KV 缓存从「每个实例各存一份」变成可寻址、可跨实例复用的公共层。（[Markdown](kvcache-ai__Mooncake.md) / [HTML](kvcache-ai__Mooncake.html)）
- **langchain4j/langchain4j** · 🌟🌟🌟🌗 3.5 — JVM 上那层「换模型、换向量库不改代码」的抽象。（[Markdown](langchain4j__langchain4j.md) / [HTML](langchain4j__langchain4j.html)）

## SKILL / MCP / Agent

- **nexu-io/opengame** · 🌟🌟🌟🌟🌗 4.5 — 让本地编码 agent 直接产出可玩的游戏，并且产物是可读源码。（[Markdown](nexu-io__opengame.md) / [HTML](nexu-io__opengame.html)）
- **kajisho5/ffmpeg-skill** · 🌟🌟🌟🌟 4.0 — 把 FFmpeg 包成 agent 能读懂、能自检的工具契约，而不是一串 shell 命令。（[Markdown](kajisho5__ffmpeg-skill.md) / [HTML](kajisho5__ffmpeg-skill.html)）
- **gary23w/f-ck_data_brokers** · 🌟🌟🌟🌟 4.0 — 把「向 600 家数据经纪商要回自己的数据」做成可排期的批处理。（[Markdown](gary23w__f-ck_data_brokers.md) / [HTML](gary23w__f-ck_data_brokers.html)）
- **google/elephant-goldfish-model** · 🌟🌟🌟🌟 4.0 — 让评审者读不到起草者的上下文，用「失忆」换回独立判断。（[Markdown](google__elephant-goldfish-model.md) / [HTML](google__elephant-goldfish-model.html)）

## 前端 / Web

- **Axolotl-Launcher/Axolotl** · 🌟🌟🌟🌗 3.5 — 剥掉上游商业化模块的 Minecraft 启动器，赌的是「干净壳层」这件事本身。（[Markdown](Axolotl-Launcher__Axolotl.md) / [HTML](Axolotl-Launcher__Axolotl.html)）

## 后端 / 云原生

- **trustno1-coder/VIctory-NVIDIA** · 🌟🌟🌟🌟🌗 4.5 — 给 Xbox 兼容层补上 NVIDIA 这条路径：先测卡，再选帧生成方案。（[Markdown](trustno1-coder__VIctory-NVIDIA.md) / [HTML](trustno1-coder__VIctory-NVIDIA.html)）
- **2hjaito/davish** · 🌟🌟🌟🌟 4.0 — 服务器不需要装任何东西，客户端把它的能力排成一张桌面。（[Markdown](2hjaito__davish.md) / [HTML](2hjaito__davish.html)）
- **cubeplexai/cubepod** · 🌟🌟🌟🌗 3.5 — 给 agent 一个「装完东西还在」的沙箱：可写 rootfs 持久化，秒级休眠恢复。（[Markdown](cubeplexai__cubepod.md) / [HTML](cubeplexai__cubepod.html)）

## 数据 / 数据库

- **pgvector/pgvector** · 🌟🌟🌟🌟 4.0 — 向量检索不必再开一套数据库，事务与备份沿用原有那套。（[Markdown](pgvector__pgvector.md) / [HTML](pgvector__pgvector.html)）
- **sao-coding/locus** · 🌟🌟🌟🌗 3.5 — 把「生产库只读」做成默认值，而不是靠自觉。（[Markdown](sao-coding__locus.md) / [HTML](sao-coding__locus.html)）

## 开发工具 / 效率

- **l0ng-ai/openidea** · 🌟🌟🌟🌟 4.0 — 用 Rust 重写 IDEA 的手感，并把 benchmark 一起交付。（[Markdown](l0ng-ai__openidea.md) / [HTML](l0ng-ai__openidea.html)）
- **Microck/openvector** · 🌟🌟🌟🌗 3.5 — 一份 Rust 引擎，四端复用：网页、桌面、CLI、Node 库。（[Markdown](Microck__openvector.md) / [HTML](Microck__openvector.html)）

## 移动 / 桌面 / 跨端

- **AFK-surf/xnulinux** · 🌟🌟🌟🌟 4.0 — 不虚拟化，直接把 macOS 内核当成 Linux 的一个模块加载。（[Markdown](AFK-surf__xnulinux.md) / [HTML](AFK-surf__xnulinux.html)）
- **net-merge/net-merge** · 🌟🌟🌟🌟 4.0 — 多条链路同时用，但单条连接不会因此变快——这点它自己先说清楚。（[Markdown](net-merge__net-merge.md) / [HTML](net-merge__net-merge.html)）
- **Ciao1019/ArcMD** · 🌟🌟🌟🌗 3.5 — 不用 WebView 的富文本 Markdown 编辑器：Go 直接画窗口、排字形。（[Markdown](Ciao1019__ArcMD.md) / [HTML](Ciao1019__ArcMD.html)）
