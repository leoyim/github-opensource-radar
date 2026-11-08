# 2026-11-07 · 逐项解读目录

本期共 30 个项目，独立解读 30 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **增量高度集中在工具方向，且由一个老项目主导**：本期 30 项中有 29 项具备 2026-11-06 的快照基线，合计日增 +5,902。工具方向 2,637（44.7%）居首，其中 sherlock-project/sherlock 单项 +1,761，约占全榜增量三成，是第二名 google/skills +534 的三倍有余。AI 1,358（23.0%）、前端 718（12.2%）、后端 632（10.7%）、跨端 510（8.6%）；数据方向仅 47（0.8%）。剔除头名后，各方向分布会明显趋于均衡，因此本期的「工具热」更接近单一事件而非方向性趋势。
- **榜单几乎是一张基础设施年表**：26 个项目已运行满一年，且其中 22 个超过 2,000 天，年龄最大的是 rust-lang/rust（5,987 天）。星标前五为 microsoft/vscode（195,045）、nodejs/node（123,390）、rust-lang/rust（121,482）、angular/angular（101,386）、sherlock-project/sherlock（98,577）。本期唯一没有快照基线的是 quarkusio/quarkus，热度按速度估算。全期只有 2 个仓库在 100 天以内：lemomo-ai/lemo-opuscar（42 天）与 InlitX/GymMane（94 天）。
- **AI 方向前四席都在处理「代理怎么被组织」**：google/skills 把云平台的领域知识拆成可安装的技能包，lemo-opuscar 把影片风格做成带示范短片的规格，lobehub 用入职—接任务—复核的叙事把代理放进团队聊天，multica 则把代理放进看板领 issue、报进度、交回复核；第五席 infiniflow/ragflow 从 RAG 引擎改称 agent 原生数据库与上下文基础设施。五席没有一个是新模型或新推理框架，覆盖的是能力分发、协作编排与上下文供给这三层。
- **数据方向热度继续走低，但入选内容转为真实工程**：数据五席合计仅 +47，最高 apache/airflow +21，最低 pingcap/tidb +2。与前几期出现过教学占位仓库不同，本期五项是 Airflow、Kestra、Airbyte、RocksDB、TiDB——编排控制面、连接器生态、嵌入式存储与分布式 SQL 各占一角，工程含量不低。值得注意的是其中三项已把 agent 写进定位：Kestra 把 AI 代理纳入统一编排、Airbyte 提供 MCP 出口、TiDB 描述改为面向 agentic 负载与代理记忆。
- **Rust 成为本期出现最多的实现语言**：按仓库主语言统计，Rust 6 项（rust-lang/rust、ruff、zed、bat、nushell，以及元数据标注为 Rust 的 bun），Go 5 项、TypeScript 5 项、Python 4 项、Java 3 项、JavaScript 3 项、Dart 2 项，另有 C++ 与 Kotlin 各 1 项。这六项分散在语言本身、静态检查、编辑器与终端工具四类场景，指向同一条工程判断：对延迟、启动速度与单二进制分发敏感的基础工具，正在持续向 Rust 收敛。
- **前端五席是一整套基础层，只有 Vite 在换底层**：Vite（2,391 天）、Svelte（3,638 天）、Tailwind CSS（3,319 天）、Angular（4,432 天）、Bun（2,033 天）分别对应构建、编译型框架、样式组织、应用平台与运行时/工具链，增量集中在 +119 至 +160 的窄区间。五者中仅 Vite 的 README 明确写出生产构建已改用 Rolldown；其余四项的 README 都以文档导航和治理说明为主，属于「不再需要解释自己」的阶段。
- **仅有的两个新仓都走「小而完整」路线**：42 天的 lemo-opuscar 把 66 种影片风格做成技能包，不带视频模型、产出是可读可改的逐帧代码；94 天的 GymMane 则明确 no account、no ads、no internet，数据完全留在设备本地。两者都没有平台化叙事，而是把一个具体场景做完整，并主动写清边界（前者提示仅针对特定模型调优，后者标注营养模块为 beta）。这与其余 26 个基础设施项目形成鲜明对照，也是本期唯一的两处冷启动。

## AI / 大模型

- **google/skills** · 🌟🌟🌟🌟🌗 4.5 — 把 Google Cloud 的上手、鉴权与架构知识做成可安装的 Agent Skills，让编码代理照着官方路径干活。（[Markdown](google__skills.md) / [HTML](google__skills.html)）
- **lemomo-ai/lemo-opuscar** · 🌟🌟🌟🌟🌗 4.5 — 66 种影片风格做成风格提示词加示范短片，让编码代理用代码而不是视频模型拍片。（[Markdown](lemomo-ai__lemo-opuscar.md) / [HTML](lemomo-ai__lemo-opuscar.html)）
- **lobehub/lobehub** · 🌟🌟🌟🌟🌗 4.5 — 把 AI 代理当新同事加进团队现有聊天，用「入职—接任务—通过考核」的叙事组织协作。（[Markdown](lobehub__lobehub.md) / [HTML](lobehub__lobehub.html)）
- **multica-ai/multica** · 🌟🌟🌟🌟 4.0 — 把 AI 编码代理放进看板当队友：领 issue、报进度、提阻塞，代码留在自己的机器上。（[Markdown](multica-ai__multica.md) / [HTML](multica-ai__multica.html)）
- **infiniflow/ragflow** · 🌟🌟🌟🌟 4.0 — 从 RAG 引擎长成 agent 原生的上下文基础设施，把切分、检索与引用一起管起来。（[Markdown](infiniflow__ragflow.md) / [HTML](infiniflow__ragflow.html)）

## 前端 / Web

- **vitejs/vite** · 🌟🌟🌟🌟🌗 4.5 — 用原生 ES 模块把开发服务器做薄，再让构建链路可插拔，重新定义了前端工具的速度基线。（[Markdown](vitejs__vite.md) / [HTML](vitejs__vite.html)）
- **sveltejs/svelte** · 🌟🌟🌟🌟🌗 4.5 — 把框架的工作挪到编译期，运行时不背虚拟 DOM，直接生成精确更新 DOM 的代码。（[Markdown](sveltejs__svelte.md) / [HTML](sveltejs__svelte.html)）
- **tailwindlabs/tailwindcss** · 🌟🌟🌟🌟🌗 4.5 — 用原子类把样式写回标记里，换取一套不随项目规模膨胀的 CSS 组织方式。（[Markdown](tailwindlabs__tailwindcss.md) / [HTML](tailwindlabs__tailwindcss.html)）
- **angular/angular** · 🌟🌟🌟🌟🌗 4.5 — 把路由、表单、SSR 与工程化规范打包进一个平台，让大型 Web 应用有统一的做法。（[Markdown](angular__angular.md) / [HTML](angular__angular.html)）
- **oven-sh/bun** · 🌟🌟🌟🌟🌗 4.5 — 把运行时、打包器、测试与包管理器收进单个可执行文件，目标是替换掉整条 Node 工具链。（[Markdown](oven-sh__bun.md) / [HTML](oven-sh__bun.html)）

## 后端 / 云原生

- **quarkusio/quarkus** · 🌟🌟🌟🌟🌗 4.5 — 把尽可能多的工作挪到构建期，让 Java 在容器与 Kubernetes 里也能快速启动、少占内存。（[Markdown](quarkusio__quarkus.md) / [HTML](quarkusio__quarkus.html)）
- **rust-lang/rust** · 🌟🌟🌟🌟🌗 4.5 — 用所有权与类型系统把内存和并发安全交给编译器，换取无需垃圾回收的高性能。（[Markdown](rust-lang__rust.md) / [HTML](rust-lang__rust.html)）
- **astral-sh/ruff** · 🌟🌟🌟🌟🌗 4.5 — 用 Rust 把 linter 与 formatter 合成一个极快的二进制，并直接对齐既有的 Python 工具规则。（[Markdown](astral-sh__ruff.md) / [HTML](astral-sh__ruff.html)）
- **prometheus/prometheus** · 🌟🌟🌟🌟🌗 4.5 — 用多维数据模型加拉取式采集，把监控从「看图表」变成可查询、可告警的系统。（[Markdown](prometheus__prometheus.md) / [HTML](prometheus__prometheus.html)）
- **moby/moby** · 🌟🌟🌟🌟🌗 4.5 — 把容器系统拆成一组可替换的乐高组件，让 Docker 之外的系统也能复用这套底座。（[Markdown](moby__moby.md) / [HTML](moby__moby.html)）

## 数据 / 数据库

- **apache/airflow** · 🌟🌟🌟🌟🌗 4.5 — 用 Python 代码定义、调度与监控工作流，把数据管道当软件工程来管。（[Markdown](apache__airflow.md) / [HTML](apache__airflow.html)）
- **kestra-io/kestra** · 🌟🌟🌟🌟 4.0 — 用声明式 YAML 把数据、基础设施、业务流程与 AI 代理的工作流收进同一控制平面。（[Markdown](kestra-io__kestra.md) / [HTML](kestra-io__kestra.html)）
- **airbytehq/airbyte** · 🌟🌟🌟🌟 4.0 — 把「从任意源头到任意目的地」的数据搬运做成开源连接器生态，并给 AI 代理留了 MCP 出口。（[Markdown](airbytehq__airbyte.md) / [HTML](airbytehq__airbyte.html)）
- **meta/rocksdb** · 🌟🌟🌟🌟 4.0 — 用 LSM 树把可嵌入的持久化键值存储做到适合闪存，成为无数上层数据库的底座。（[Markdown](meta__rocksdb.md) / [HTML](meta__rocksdb.html)）
- **pingcap/tidb** · 🌟🌟🌟🌟 4.0 — 用分布式 SQL 把事务、分析与向量检索放在同一套库里，面向代理负载的不可预测增长。（[Markdown](pingcap__tidb.md) / [HTML](pingcap__tidb.html)）

## 开发工具 / 效率

- **sherlock-project/sherlock** · 🌟🌟🌟🌟🌗 4.5 — 用一个用户名在 400 多个社交网络上查出对应账号，把分散的公开足迹收敛成一次检索。（[Markdown](sherlock-project__sherlock.md) / [HTML](sherlock-project__sherlock.html)）
- **zed-industries/zed** · 🌟🌟🌟🌟🌗 4.5 — 用 Rust 与自研 GPU 渲染框架重写编辑器，把协作做成一等能力而不是插件。（[Markdown](zed-industries__zed.md) / [HTML](zed-industries__zed.html)）
- **microsoft/vscode** · 🌟🌟🌟🌟🌗 4.5 — 把一款主流编辑器以 MIT 许可开源，让产品、路线图与社区贡献在同一仓库里发生。（[Markdown](microsoft__vscode.md) / [HTML](microsoft__vscode.html)）
- **sharkdp/bat** · 🌟🌟🌟🌟 4.0 — 给 cat 加上语法高亮、Git 集成与自动分页，把「看文件」这件小事做完整。（[Markdown](sharkdp__bat.md) / [HTML](sharkdp__bat.html)）
- **nushell/nushell** · 🌟🌟🌟🌟 4.0 — 让管道里流动的是结构化数据而不是文本，把 shell 变成可查询的数据处理环境。（[Markdown](nushell__nushell.md) / [HTML](nushell__nushell.html)）

## 移动 / 桌面 / 跨端

- **nodejs/node** · 🌟🌟🌟🌟🌗 4.5 — 让 JavaScript 走出浏览器，成为有明确发布通道与治理模型的跨平台服务端运行时。（[Markdown](nodejs__node.md) / [HTML](nodejs__node.html)）
- **InlitX/GymMane** · 🌟🌟🌟🌟 4.0 — 把健身记录做成一个不需要账号、不联网、不看广告的纯本地 Android 应用。（[Markdown](InlitX__GymMane.md) / [HTML](InlitX__GymMane.html)）
- **GopeedLab/gopeed** · 🌟🌟🌟🌟 4.0 — 用 Go 加 Flutter 做一套跨桌面、移动与 Web 的下载管理器，把多协议和扩展能力收进同一个客户端。（[Markdown](GopeedLab__gopeed.md) / [HTML](GopeedLab__gopeed.html)）
- **tiann/KernelSU** · 🌟🌟🌟🌟 4.0 — 把 root 能力放进内核层实现，并用 App Profile 把权限关进每个应用自己的笼子。（[Markdown](tiann__KernelSU.md) / [HTML](tiann__KernelSU.html)）
- **TeamNewPipe/NewPipe** · 🌟🌟🌟🌟 4.0 — 用轻量自由软件前端直连多个流媒体服务，不依赖官方客户端与账号即可播放。（[Markdown](TeamNewPipe__NewPipe.md) / [HTML](TeamNewPipe__NewPipe.html)）
