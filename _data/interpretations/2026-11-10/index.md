# 2026-11-10 · 逐项解读目录

本期共 24 个项目，独立解读 24 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **AI 方向贡献三分之二日增，但五项没有一个在做新模型**：本期 18 个有历史基线的项目合计日增 1,911，AI 方向独占 1,292（67.6%）；全榜前三 DIYgod/pinky +603、KKKKhazix/AIHOT +291、superplanehq/superplane +228 也都在 AI。但这五项分别是手机操作网关、热点日报引擎、agent 编排流水线、视频拆解 Skill 与视频生成编辑器，没有一个在推模型或推理框架。增量集中在「代理能力之外，怎么被接进真实工作流」这一层，与上一期观察到的结构延续。
- **13 年老库与 2 天新仓同台，年龄跨度超过十三年**：本期同时出现 4 个 ≥1,000 天的老项目（raylib 4,764 天、woodpecker 2,777 天、sing-box 1,594 天、google-maps-scraper 1,297 天）与 6 个 ≤15 天的新仓（S2Arm 2 天、pinky 3 天、finallyshell 3 天、rea-video 11 天、misterdownloadmanager 12 天、openjutsu 15 天）。老项目日增温和（最高 google-maps-scraper +205），新仓则包揽日增前列；榜单不是单纯的「新项目榜」，而是两条时间尺度并置。
- **「给代理划边界」压过「让代理多干活」，成为本期共同命题**：四个不同方向的项目不约而同把约束做成机制而非提示词：pinky 把支付、删除、安装等审批放在网关强制执行，明确不依赖给代理的指令；superplane 只派「高置信度」的 backlog，把歧义任务留在人手里；fastapi-react-admin 用 50+ 份目录级 CLAUDE.md / AGENTS.md 加 OpenAPI 生成类型，让代理改代码时不容易改坏；google-maps-scraper 则把三年半的抓取器接成 Agent Skill，并要求代理先跑小样本验证再启动全量。约束的位置从文档层下沉到了架构层。
- **把别处的能力搬进 Apple 设备，本期同时出现三条不同路径**：S2Arm 走静态重编译（游戏代码重写为原生 ARM64 + 图形直连 Metal），sill 走流化（Mac 窗口 HEVC 编码 + TLS 1.3 直送 iPad 并回传输入），hongguo-desktop-releases 走客户端多端重做（Windows 正式版、Mac 测试版、Android TV 按架构分发）。再算上 pinky 用 MCP 网关让代理操作手机，移动与跨端方向四条路线互不重叠，是本期技术路径最分散的一组。
- **Go 与 Rust 合计九项，单二进制、原生界面的取向明显**：24 项中 Go 6 项（superplane、pinky、google-maps-scraper、sing-box、woodpecker、finallyshell），Rust 3 项（misterdownloadmanager、OpenCADStudio、datarig），两者合计 37.5%。值得注意的是 pinky 与 finallyshell 都用 MyGo 绘制界面并明确排除 Electron / webview，datarig 强调单个原生二进制，raylib 更是把「无外部依赖」写在特性第一条。在低资源占用与可分发性上，这条路线与重型框架形成清晰对照。
- **数据方向五项合计日增仅 5，但内容从占位转向真实工程层**：data 方向本期五项合计 +5（单项最高仅 +2，quack-on-demand +0），是六方向里最弱。不过内容结构与此前不同：quack-on-demand 补的是 DuckDB 缺失的多租户服务层与行列级权限，chile-hub 用 1,505 个测试与 25 份 ADR 做数据契约，datarig 把「改数据前先读 SQL」做成终端客户端默认行为；另两项是课程与阅读清单。低热度与较高工程含量并存，是本期该方向的实际状态。
- **README 写法两极分化：极简外置派与超长排障派**：一端是 sing-box（约 1 KB，只有一句定位、一个文档站链接和 GPL 全文）与 woodpecker（约 4 KB，功能细节全部外置），把可版本化的文档站当唯一事实来源；另一端是 misterdownloadmanager（约 40 KB）与 hongguo-desktop-releases（近万字节），后者把按设备的下载矩阵、安装包体积、WebView2 补装、升级前退出旧程序、进度条卡住的原因逐条写清。前者对应配置面庞大的基础设施，后者对应安装环境碎片化的终端分发——README 长度其实由支持成本决定，而非项目规模。

## AI / 大模型

- **JuneYaooo/rea-video** · 🌟🌟🌟🌟🌗 4.5 — 把任意视频拆成逐镜头取证报告，判断是拍的、AI 生成的还是代码做的，再给出复刻配方。（[Markdown](JuneYaooo__rea-video.md) / [HTML](JuneYaooo__rea-video.html)）
- **superplanehq/superplane** · 🌟🌟🌟🌟🌗 4.5 — 把高置信度的积压 issue 变成经验证、可评审的 PR，让工程师只处理需要判断力的工作。（[Markdown](superplanehq__superplane.md) / [HTML](superplanehq__superplane.html)）
- **DIYgod/pinky** · 🌟🌟🌟🌟 4.0 — 让任意编码代理通过 MCP 操作真实手机，高危动作由网关强制拦截、审批权留在人手里。（[Markdown](DIYgod__pinky.md) / [HTML](DIYgod__pinky.html)）
- **KKKKhazix/AIHOT** · 🌟🌟🌟🌟 4.0 — 把「自己找热点、自己写日报」的整套引擎开源，连提示词原文和入选门槛都一并给出。（[Markdown](KKKKhazix__AIHOT.md) / [HTML](KKKKhazix__AIHOT.html)）
- **openfilm/openfilm** · 🌟🌟🌟🌟 4.0 — 把影片写成一个 HTML 文件，让编码代理直接产出视频，再用本地编辑器逐帧改回去。（[Markdown](openfilm__openfilm.md) / [HTML](openfilm__openfilm.html)）

## 前端 / Web

- **raysan5/raylib** · 🌟🌟🌟🌟 4.0 — 零外部依赖的纯 C99 游戏编程库，用最朴素的方式把图形、输入、音频与窗口都包进一个库。（[Markdown](raysan5__raylib.md) / [HTML](raysan5__raylib.html)）
- **D3voz/openjutsu** · 🌟🌟🌟🌗 3.5 — 把视频里的人换掉而保留镜头、动作与音轨，全流程跑在自有 GPU 与开放权重模型上。（[Markdown](D3voz__openjutsu.md) / [HTML](D3voz__openjutsu.html)）
- **yilecoding/fastapi-react-admin** · 🌟🌟🌟🌗 3.5 — FastAPI + React 19 的全功能后台底座，把行级权限、审批流与「给 AI 看的规则」一起交付。（[Markdown](yilecoding__fastapi-react-admin.md) / [HTML](yilecoding__fastapi-react-admin.html)）
- **opencoredev/social-sdk** · 🌟🌟🌟 3.0 — 用一套带类型的接口接入七个社交平台，把各平台的能力差异与失败方式显式建模。（[Markdown](opencoredev__social-sdk.md) / [HTML](opencoredev__social-sdk.html)）

## 后端 / 云原生

- **anefzaoui/misterdownloadmanager** · 🌟🌟🌟🌟🌗 4.5 — 用纯 Rust 洁净室重写的全平台下载管理器，分段加速、断点续传与调度队列一体。（[Markdown](anefzaoui__misterdownloadmanager.md) / [HTML](anefzaoui__misterdownloadmanager.html)）
- **gosom/google-maps-scraper** · 🌟🌟🌟🌟 4.0 — 把地点信息抽取做成 CLI / Web UI / REST API 三形态，并让编码代理来规划搜索与验证。（[Markdown](gosom__google-maps-scraper.md) / [HTML](gosom__google-maps-scraper.html)）
- **SagerNet/sing-box** · 🌟🌟🌟🌟 4.0 — Go 编写的通用网络代理平台，仓库只留一句定位和许可证，技术细节全部交给外部文档站。（[Markdown](SagerNet__sing-box.md) / [HTML](SagerNet__sing-box.html)）
- **HakanSeven12/OpenCADStudio** · 🌟🌟🌟🌗 3.5 — 用 Rust 实现原生 DWG/DXF 读写、内核级 3D 建模与 wgpu 渲染，桌面与 Web 同一套能力。（[Markdown](HakanSeven12__OpenCADStudio.md) / [HTML](HakanSeven12__OpenCADStudio.html)）
- **woodpecker-ci/woodpecker** · 🌟🌟🌟🌗 3.5 — 空闲约 100 MB 内存即可运行的轻量 CI/CD 引擎，默认 SQLite、插件可扩展。（[Markdown](woodpecker-ci__woodpecker.md) / [HTML](woodpecker-ci__woodpecker.html)）

## 数据 / 数据库

- **DokaDev/datarig** · 🌟🌟🌟🌗 3.5 — 终端里的数据库客户端：单二进制、显式分页、键盘优先，改动必须读过确切 SQL 才落库。（[Markdown](DokaDev__datarig.md) / [HTML](DokaDev__datarig.html)）
- **cortega26/chile-hub** · 🌟🌟🌟🌗 3.5 — 把智利公开数据整理、规范化并校验成可直接查询的数据集，用统一地域编码保证跨表可关联。（[Markdown](cortega26__chile-hub.md) / [HTML](cortega26__chile-hub.html)）
- **vivekpandey76/Mysql-course** · 🌟🌟🌟 3.0 — 配套 20 小时视频的 MySQL 课程仓库，所有示例跑在同一套样例库上、可直接复制执行。（[Markdown](vivekpandey76__Mysql-course.md) / [HTML](vivekpandey76__Mysql-course.html)）
- **GetCassis/analytics-agent-articles** · 🌟🌟🌗 2.5 — 按真实痛点归档各数据团队自建分析代理的工程文章，是一份问题导向的阅读清单。（[Markdown](GetCassis__analytics-agent-articles.md) / [HTML](GetCassis__analytics-agent-articles.html)）
- **starlake-ai/quack-on-demand** · 🌟🌗 1.5 — 用 Arrow Flight SQL 把 DuckDB / DuckLake 变成带行列权限的多租户服务，一条命令即可演示。（[Markdown](starlake-ai__quack-on-demand.md) / [HTML](starlake-ai__quack-on-demand.html)）

## 开发工具 / 效率

- **TooonyChen/finallyshell** · 🌟🌟🌟 3.0 — Go 原生重做 FinalShell 布局的 SSH 客户端，会话竖排、细节打磨到快捷键冲突会给出解释。（[Markdown](TooonyChen__finallyshell.md) / [HTML](TooonyChen__finallyshell.html)）

## 移动 / 桌面 / 跨端

- **jhaizhou-ops/S2Arm** · 🌟🌟🌟🌟🌗 4.5 — 把用户自有的游戏代码重写成 ARM64 原生程序，直接跑在 iPhone / iPad / Mac 上。（[Markdown](jhaizhou-ops__S2Arm.md) / [HTML](jhaizhou-ops__S2Arm.html)）
- **CYQawa/YunX** · 🌟🌟🌟🌗 3.5 — 把网盘与内容平台的链接解析、分片下载与在线预览收进一个 Android 客户端。（[Markdown](CYQawa__YunX.md) / [HTML](CYQawa__YunX.html)）
- **waligoraamodio288-rgb/hongguo-desktop-releases** · 🌟🌟🌟🌗 3.5 — 把第三方短剧客户端铺到 Windows、Mac 与 Android TV，并把安装排障写成可对照的清单。（[Markdown](waligoraamodio288-rgb__hongguo-desktop-releases.md) / [HTML](waligoraamodio288-rgb__hongguo-desktop-releases.html)）
- **Saffsanity/sill** · 🌟🌟🌟🌗 3.5 — 无账号、无中转服务器，把 Mac 窗口用 HEVC 实时送到 iPhone / iPad 并可反向操作。（[Markdown](Saffsanity__sill.md) / [HTML](Saffsanity__sill.html)）
