# 2026-11-09 · 逐项解读目录

本期共 29 个项目，独立解读 29 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **AI 方向贡献全榜近六成日增，但前三名没有一个是新模型**：25 个有历史基线的项目合计日增 2,951，AI 五席占 1,717（58.2%）。全榜前三 meta/astryx +875、storytold/artcraft +335、microsoft/TokenEconomizer +328 都在 AI 方向，合计已占全榜 52.1%；但三者分别是开源设计系统、桌面创作 IDE 与编码代理成本控制工具，没有一个在做模型或推理框架。增量集中在「模型能力之外怎么被用起来」这一层，是本期最明显的结构特征。
- **两套界面方案同日上榜：一个把设计系统交给代理，一个把生成收进组件目录**：meta/astryx 把「人和编码代理用同一套 API、约定、文档与 CLI 构建」写进一句话定位，靠开放可组合的组件与 CSS 变量主题层让代理有稳定的构建面；vercel-labs/json-render 则反过来，规定模型只能输出符合 schema、且只引用登记组件的 JSON，再流式渲染到 Web、移动、文档与视频等多个目标。前者扩展代理能用的构件，后者收紧代理能产出的形状，两种约束方向恰好构成一组对照。
- **代理的验证、编排与接入是本期最密集的一条线索**：至少七项在处理同一件事的不同切面：reanimate 用逐帧录制与比对让动画复刻有可量化的收敛目标；TokenEconomizer 从既有会话里学出降本动作；Paradev 用一任务一 Git worktree 隔离并行代理；CompanyOS 把核验交给独立代理、把人工批准设为变更闸门；swipt 把设备控制做成 MCP 兼容的 JS REPL；datay 提供让代理操作平台对象的 MCP Harness；sqlsimtools 与 longbridge/nsh 则分别把 Workload Builder 技能和面向编码代理的 Skills 写进 README。共同点是都不改模型，而是补齐模型之外的执行与反馈环节。
- **数据方向热度继续走低，但五席都落在具体工程上**：数据五席合计日增仅 6（最高 +2），且其中一项本期没有历史基线。内容却相当具体：microsoft/sqlsimtools 把 SQL 负载压测拆成浏览器、原生引擎、Python 与代理技能四条入口；pug-sh/pug 用 NATS、ClickHouse 与 Connect RPC 搭事件分析闭环；yuyuejia/datay 把一个 JAR、2 核 4G 跑通全链路作为目标；samyfodil/musql 用列式段格式加 JIT 重做 SQLite 兼容查询；astrnox/TATAbox 虽是学习平台，但把 Supabase 迁移顺序、数据口径与提交前门禁写成了独立章节。热度和工程含量本期并不成正比。
- **后端五席全是在册多年的基础设施，最年长与最年轻同台**：TwiN/gatus（2,623 天）、google/gvisor（3,118 天）、VictoriaMetrics（2,962 天）、glanceapp/glance（925 天）、apple/container（527 天）全部是既有系统，日增最高仅 gatus +100，其余四席都在 +15 至 +29 之间。全榜有 8 个项目超过 1,000 天，最年长的 4ian/GDevelop 达 4,515 天；另一端是 reanimate 与 swipt 各 11 天、oinkvm/oink 20 天、longbridge/nsh 25 天、TokenEconomizer 27 天共 5 个一个月内新仓。老项目靠长期迭代留在榜上，新仓靠一个明确切口进入，两条路径同样清晰。
- **隔离边界同时被划在系统调用、虚拟机与网络三层**：google/gvisor 在用户态用 Go 实现一套类 Linux 接口，并特设章节说明它不是 seccomp 过滤器也不是常规虚拟机；apple/container 让每台容器对应一台轻量 VM、底层交给 Containerization Swift 包，同时保持 OCI 镜像兼容；oinkvm/oink 把 Mac 与 Windows 之间的键鼠、音频与剪贴板共享收进一条默认加密的局域网链路；GyulyVGC/sniffnet 则把网卡流量、地理位置与 ASN 变成可读面板。四项分别在系统调用面、虚拟化边界、设备间链路与流量可视层重新划线。
- **Go 与 TypeScript 各 7 项并列最多，Rust 集中落在跨端与桌面**：按仓库主语言统计，Go 7 项（gatus、glance、gvisor、VictoriaMetrics、pug、musql、swipt）、TypeScript 7 项（astryx、rakazo、CompanyOS、json-render、ardia、OpenStock、Paradev）、Rust 4 项（artcraft、nsh、oink、sniffnet），另有 Python 3 项、JavaScript 3 项、Swift 2 项，以及 Java、Kotlin、PowerShell 各 1 项。四项 Rust 中有三项属于移动与跨端方向，且都是本地桌面或原生渲染应用——对启动速度、单二进制分发与平台原生交互敏感的场景，仍在持续向 Rust 收敛。

## AI / 大模型

- **meta/astryx** · 🌟🌟🌟🌟🌗 4.5 — 把 Meta 用了八年的设计系统开源，并让组件、文档与 CLI 同时服务人和编码代理。（[Markdown](meta__astryx.md) / [HTML](meta__astryx.html)）
- **storytold/artcraft** · 🌟🌟🌟🌟🌗 4.5 — 把 AI 图像与视频创作做成可搭场景、控机位、可复现的桌面 IDE，而不是一次性的提示词框。（[Markdown](storytold__artcraft.md) / [HTML](storytold__artcraft.html)）
- **microsoft/TokenEconomizer** · 🌟🌟🌟🌟 4.0 — 不改代理、不换模型，靠复用同一仓库的历史会话把编码代理的运行成本压下来。（[Markdown](microsoft__TokenEconomizer.md) / [HTML](microsoft__TokenEconomizer.html)）
- **elie222/rakazo** · 🌟🌟🌟🌟 4.0 — 自托管的常驻 AI 队友：每个机器人自带记忆、例程、应用和一台可用沙箱电脑。（[Markdown](elie222__rakazo.md) / [HTML](elie222__rakazo.html)）
- **kortix-ai/CompanyOS** · 🌟🌟🌟🌟 4.0 — 把公司流程写成 kortix.yaml 与常驻代理，让事件驱动的代理成组运行并共享一份公司记忆。（[Markdown](kortix-ai__CompanyOS.md) / [HTML](kortix-ai__CompanyOS.html)）

## 前端 / Web

- **vercel-labs/json-render** · 🌟🌟🌟🌟 4.0 — 让模型只输出受组件目录与 schema 约束的 JSON，再把这份 JSON 渲染成界面。（[Markdown](vercel-labs__json-render.md) / [HTML](vercel-labs__json-render.html)）
- **mantrakp04/ardia** · 🌟🌟🌟🌟 4.0 — 在真实 Chromium 上重做侧边栏与多 profile 交互，并用用户自己的 iCloud 完成同步。（[Markdown](mantrakp04__ardia.md) / [HTML](mantrakp04__ardia.html)）
- **Open-Dev-Society/OpenStock** · 🌟🌟🌟🌟 4.0 — 把行情查看、提醒与公司洞察做成可自托管的 Web 应用，并把数据时效单独交代清楚。（[Markdown](Open-Dev-Society__OpenStock.md) / [HTML](Open-Dev-Society__OpenStock.html)）
- **4ian/GDevelop** · 🌟🌟🌟🌟 4.0 — 用事件系统与模块化行为做无代码游戏开发，编辑器、引擎与扩展生态十多年持续演进。（[Markdown](4ian__GDevelop.md) / [HTML](4ian__GDevelop.html)）
- **XiaoYouChR/Ghost-Downloader-3** · 🌟🌟🌟🌟 4.0 — 把多协议下载、浏览器媒体嗅探与断点续传收进同一个跨平台客户端。（[Markdown](XiaoYouChR__Ghost-Downloader-3.md) / [HTML](XiaoYouChR__Ghost-Downloader-3.html)）

## 后端 / 云原生

- **TwiN/gatus** · 🌟🌟🌟🌟 4.0 — 把服务健康写成可对探测结果求值的条件，再挂上告警与状态页。（[Markdown](TwiN__gatus.md) / [HTML](TwiN__gatus.html)）
- **glanceapp/glance** · 🌟🌟🌟🌟 4.0 — 一个不到 20MB 的自托管仪表盘，把订阅源、容器状态与服务器指标收在同一页。（[Markdown](glanceapp__glance.md) / [HTML](glanceapp__glance.html)）
- **google/gvisor** · 🌟🌟🌟🌟 4.0 — 在用户态用 Go 实现一个类 Linux 应用内核，为容器提供与 seccomp、VM 都不同的隔离层。（[Markdown](google__gvisor.md) / [HTML](google__gvisor.html)）
- **apple/container** · 🌟🌟🌟🌗 3.5 — 在 Mac 上用轻量虚拟机跑 Linux 容器，底层用 Swift，对外保持 OCI 镜像兼容。（[Markdown](apple__container.md) / [HTML](apple__container.html)）
- **VictoriaMetrics/VictoriaMetrics** · 🌟🌟🌟🌗 3.5 — 单二进制的时序数据库与监控方案，兼顾 Prometheus 长期存储、全局查询与多协议摄入。（[Markdown](VictoriaMetrics__VictoriaMetrics.md) / [HTML](VictoriaMetrics__VictoriaMetrics.html)）

## 数据 / 数据库

- **microsoft/sqlsimtools** · 🌟🌟🌟 3.0 — 把 SQL 负载压测做成浏览器、原生引擎、Python 与代理技能共用的同一套接口。（[Markdown](microsoft__sqlsimtools.md) / [HTML](microsoft__sqlsimtools.html)）
- **pug-sh/pug** · 🌟🌟🌟 3.0 — 自托管的产品分析平台，把事件采集、实时画像与漏斗留存放在一套 Go 服务里。（[Markdown](pug-sh__pug.md) / [HTML](pug-sh__pug.html)）
- **yuyuejia/datay** · 🌟🌟🌟 3.0 — 一个 JAR、2 核 4G 跑通集成到应用的完整数据链路，并把 MCP 入口写进平台能力。（[Markdown](yuyuejia__datay.md) / [HTML](yuyuejia__datay.html)）
- **astrnox/TATAbox** · 🌟🌟🌟 3.0 — 面向高中生的生物刷题平台，把迁移顺序、数据口径与测试门禁写成了 README 的一章。（[Markdown](astrnox__TATAbox.md) / [HTML](astrnox__TATAbox.html)）
- **samyfodil/musql** · 🌟🌟🌟 3.0 — 用列式段格式加 JIT 编译重做 SQLite 兼容查询路径，同时保留导入导出与嵌入式用法。（[Markdown](samyfodil__musql.md) / [HTML](samyfodil__musql.html)）

## 开发工具 / 效率

- **NiazMorshed2007/reanimate** · 🌟🌟🌟🌗 3.5 — 把动画复刻变成「录制—出规格—比对—再录」的循环，让代理有可量化的收敛目标。（[Markdown](NiazMorshed2007__reanimate.md) / [HTML](NiazMorshed2007__reanimate.html)）
- **googlecolab/google-colab-cli** · 🌟🌟🌟 3.0 — 把 Colab 的 GPU／TPU 运行时变成终端里可编排、用完即拆的算力通道。（[Markdown](googlecolab__google-colab-cli.md) / [HTML](googlecolab__google-colab-cli.html)）
- **swipt-automation/swipt** · 🌟🌟🌟 3.0 — 用 MCP 兼容的 JS REPL 暴露 iOS 设备控制，让代理以写代码的方式操作真机。（[Markdown](swipt-automation__swipt.md) / [HTML](swipt-automation__swipt.html)）
- **ParadevAI/Paradev** · 🌟🌟🌟 3.0 — 用一任务一 Git worktree 的隔离方式，把多个 CLI 编码代理并行跑在同一个仓库上。（[Markdown](ParadevAI__Paradev.md) / [HTML](ParadevAI__Paradev.html)）

## 移动 / 桌面 / 跨端

- **longbridge/nsh** · 🌟🌟🌟🌟 4.0 — 共享组件、状态与逻辑，但把渲染和外观分别交还平台与应用的 Rust 跨端 UI 框架。（[Markdown](longbridge__nsh.md) / [HTML](longbridge__nsh.html)）
- **oinkvm/oink** · 🌟🌟🌟🌟 4.0 — 在 Mac 与 Windows 之间建一条默认加密的局域网共享链路，键鼠、音频、剪贴板与拖放一起走。（[Markdown](oinkvm__oink.md) / [HTML](oinkvm__oink.html)）
- **jithin-sabu/purge-app** · 🌟🌟🌟🌟 4.0 — 原生 Mac 清理工具，用「默认进废纸篓」与按类别的安全标签把清理动作变得可回退。（[Markdown](jithin-sabu__purge-app.md) / [HTML](jithin-sabu__purge-app.html)）
- **samolego/Canta** · 🌟🌟🌟🌟 4.0 — 借助 Shizuku 免 root 卸载 Android 预装应用，并用社区维护的清单给出删除建议。（[Markdown](samolego__Canta.md) / [HTML](samolego__Canta.html)）
- **GyulyVGC/sniffnet** · 🌟🌟🌟🌟 4.0 — 把网络抓包做成有实时图表、地理位置与 ASN 信息的可读桌面应用。（[Markdown](GyulyVGC__sniffnet.md) / [HTML](GyulyVGC__sniffnet.html)）
