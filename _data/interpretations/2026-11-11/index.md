# 2026-11-11 · 逐项解读目录

本期共 25 个项目，独立解读 25 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **老牌工具的集体回归**：yq（2015）、chinese-poetry（2016）、k0s（2020）、upscayl（2022）同台，四个项目合计年龄超过 9,000 天。它们没有新概念，却仍在被流水线与日常工作流调用——这一期的新增注意力更多落在「换掉一个不稳定依赖」，而不是「追一个新范式」。
- **AI 类从造模型转向管住 agent**：本期 AI 前五里，OpenSandbox 管隔离、gbrain 管记忆所有权、ha-mcp 管设备权限、academic-research-skills 管人工卡点，只有 daily_stock_analysis 属应用层。四个项目回答的是同一个问题：agent 有了能力之后，边界由谁来定。
- **跨端三条路线同日出现**：expo/exact 把 UI 编译成 plan 再原生渲染，无 WebView 无 JS 桥；bowel 桌面端用 Go 直绘、移动端 Flutter 复用同一套视觉；myspoti 用原生界面套官方 Web 播放器。三者对「一套代码多端运行」给出三种答案，共同点是都放弃了单纯的 WebView 套壳。
- **数据类体量塌陷，但内容转向实工程**：数据类五项里四项星标在 38–55 之间，最高者仍是 2016 年的诗词语料库。但四个低星新仓并非凑数：跨库线协议传输、时序库加回测引擎、多引擎数据库客户端、DuckDB 即服务，都是可落地的工程。症结在采样覆盖不到成熟项目，而不在项目质量。
- **财务工具双席，共同点都是数据主权**：sure 接手停更的 Maybe Finance 做社区维护，Aurum 以 source-available 许可做自托管。两者路径不同（fork 与重写）、许可证不同（AGPL-3.0 与 PolyForm Noncommercial），但都把「财务数据不离开自己的服务器」放在第一位。
- **工具类只剩一席，投放污染仍是主因**：采集层在工具类拦下 5 个同批投放仓库（同一时间窗创建、773 星零 fork、README 引导执行脚本），工具类最终仅 1 项入选。液态玻璃材质同日出现两款——glasswork 可调参并导出 CSS、hyalite 做 SDF 真折射——是本期前端方向唯一成组的信号。

## AI / 大模型

- **ZhuLinsen/daily_stock_analysis** · 🌟🌟🌟🌟🌗 4.5 — 把「每天盯自选股」做成一条 GitHub Actions 流水线：LLM 出决策看板，六个渠道自动推送。（[Markdown](ZhuLinsen__daily_stock_analysis.md) / [HTML](ZhuLinsen__daily_stock_analysis.html)）
- **garrytan/gbrain** · 🌟🌟🌟🌟🌗 4.5 — Garry Tan 给自己 agent 用的可移植记忆层：事实带出处、可更正可撤回、跨 agent 共享。（[Markdown](garrytan__gbrain.md) / [HTML](garrytan__gbrain.html)）
- **opensandbox-group/OpenSandbox** · 🌟🌟🌟🌟🌗 4.5 — 给 AI agent 用的沙箱运行时：Docker 起本地、K8s 上集群，一套 API 管代码执行、文件、浏览器与桌面。（[Markdown](opensandbox-group__OpenSandbox.md) / [HTML](opensandbox-group__OpenSandbox.html)）
- **homeassistant-ai/ha-mcp** · 🌟🌟🌟🌟 4.0 — 把 Home Assistant 的 87 个操作面做成 MCP 工具，让 Claude、ChatGPT 直接查设备、改自动化。（[Markdown](homeassistant-ai__ha-mcp.md) / [HTML](homeassistant-ai__ha-mcp.html)）
- **Imbad0202/academic-research-skills** · 🌟🌟🌟🌟 4.0 — 把「选题→文献→写作→审稿→修订→定稿」拆成带卡点的 Claude Code 技能流水线，每阶段停下等人确认。（[Markdown](Imbad0202__academic-research-skills.md) / [HTML](Imbad0202__academic-research-skills.html)）

## 前端 / Web

- **BareBrowser/bare-browser** · 🌟🌟🌟🌗 3.5 — 基于 Chromium 157 的 Android 浏览器分支：移除账号、遥测与内置 AI，保留桌面扩展与完整 uBlock Origin。（[Markdown](BareBrowser__bare-browser.md) / [HTML](BareBrowser__bare-browser.html)）
- **kubai087/glasswork** · 🌟🌟🌟 3.0 — 可拆解、可调参、可复制 CSS 的液态玻璃材质实验台：厚边折射、随壁纸自适应的墨色、内置动态壁纸。（[Markdown](kubai087__glasswork.md) / [HTML](kubai087__glasswork.html)）
- **VII-Cae/hyalite--liquid-glass** · 🌟🌟🌗 2.5 — 单文件实现的真实折射玻璃：SDF 透镜图 + SVG 位移 + backdrop-filter，不用 WebGL、不需构建。（[Markdown](VII-Cae__hyalite--liquid-glass.md) / [HTML](VII-Cae__hyalite--liquid-glass.html)）
- **Zproger/Aurum** · 🌟🌟🌗 2.5 — 自托管的个人财务操作系统：现金流、净值、预算、订阅与每一条收入来源放在同一张图上。（[Markdown](Zproger__Aurum.md) / [HTML](Zproger__Aurum.html)）

## 后端 / 云原生

- **libracoder/kiri** · 🌟🌟🌟🌟🌗 4.5 — Rust 写的轻量容器运行时：一个 Linux 小虚拟机跑 Docker 镜像，兼容 docker、Compose 与 buildx。（[Markdown](libracoder__kiri.md) / [HTML](libracoder__kiri.html)）
- **fosrl/pangolin** · 🌟🌟🌟🌟🌗 4.5 — 基于 WireGuard 的开源 SASE：零信任 VPN、反代、特权访问管理与身份感知 AI 网关共用一套身份与策略。（[Markdown](fosrl__pangolin.md) / [HTML](fosrl__pangolin.html)）
- **HolyArrs/HolyArrs** · 🌟🌟🌟🌟 4.0 — 把 Sonarr、Radarr、Lidarr、Prowlarr、Bazarr、Seerr 六个媒体自动化应用合并成一个 15MB 的容器。（[Markdown](HolyArrs__HolyArrs.md) / [HTML](HolyArrs__HolyArrs.html)）
- **mikefarah/yq** · 🌟🌟🌟🌗 3.5 — jq 语法的 YAML/JSON/XML/CSV/TOML/HCL 处理器，单个无依赖二进制，适合塞进任何 CI 镜像。（[Markdown](mikefarah__yq.md) / [HTML](mikefarah__yq.html)）
- **k0sproject/k0s** · 🌟🌟🌟🌗 3.5 — 单二进制的 CNCF 认证 Kubernetes 发行版：除内核外零宿主依赖，云、裸机、边缘同一套安装方式。（[Markdown](k0sproject__k0s.md) / [HTML](k0sproject__k0s.html)）

## 数据 / 数据库

- **chinese-poetry/chinese-poetry** · 🌟🌟🌟🌟 4.0 — 以 JSON 分发的中华古典文集语料库：5.5 万首唐诗、26 万首宋诗、2.1 万首宋词，附采集与校验流程。（[Markdown](chinese-poetry__chinese-poetry.md) / [HTML](chinese-poetry__chinese-poetry.html)）
- **addlayer-io/dbine** · 🌟🌟🌟 3.0 — Rust + Tauri 的桌面多引擎数据库管理器：130+ 种数据库与服务，带笔记本、结构对比、跨引擎迁移与本地 AI 助手。（[Markdown](addlayer-io__dbine.md) / [HTML](addlayer-io__dbine.html)）
- **Koukyosyumei/h5i-db** · 🌟🌟🌗 2.5 — 嵌入式时序库 + 事件驱动回测引擎：回测跑在数据库 fork 里，用时间锚点从结构上排除未来函数。（[Markdown](Koukyosyumei__h5i-db.md) / [HTML](Koukyosyumei__h5i-db.html)）
- **apitap/apitap-lib** · 🌟🌗 1.5 — 用各数据库原生线协议搬整表：并行区间管道、原子切换、内存恒定，一行 Python 调用完成跨库传输。（[Markdown](apitap__apitap-lib.md) / [HTML](apitap__apitap-lib.html)）
- **autumoswitzerland/Webduck** · 🌟🌗 1.5 — 自托管的 DuckDB 即服务：REST API + Web UI，带项目隔离、写保护、回收站与压缩。（[Markdown](autumoswitzerland__Webduck.md) / [HTML](autumoswitzerland__Webduck.html)）

## 开发工具 / 效率

- **backnotprop/plannotator** · 🌟🌟🌟🌗 3.5 — 给编码 agent 做审阅的本地浏览器工作区：批注计划、标 HTML、评审 diff，反馈一键送回 agent。（[Markdown](backnotprop__plannotator.md) / [HTML](backnotprop__plannotator.html)）

## 移动 / 桌面 / 跨端

- **expo/exact** · 🌟🌟🌟🌟 4.0 — 一套声明式 UI 描述，同时编译到浏览器 DOM、AppKit、UIKit 与 Linux，全程无 WebView、无 JS 桥。（[Markdown](expo__exact.md) / [HTML](expo__exact.html)）
- **we-promise/sure** · 🌟🌟🌟🌟 4.0 — 接手已停更的 Maybe Finance：社区维护的自托管个人财务应用，浏览器、桌面端、移动端与 API 共用一套数据。（[Markdown](we-promise__sure.md) / [HTML](we-promise__sure.html)）
- **21stware/bowel** · 🌟🌟🌟🌟 4.0 — mihomo 内核的跨平台图形客户端：Go 直绘桌面界面不走 WebView，Android 端用 Flutter 保持同一套视觉。（[Markdown](21stware__bowel.md) / [HTML](21stware__bowel.html)）
- **upscayl/upscayl** · 🌟🌟🌟🌗 3.5 — 本地运行的 AI 图像放大工具：基于 Real-ESRGAN 系列模型，跨三平台、支持批量与自定义模型。（[Markdown](upscayl__upscayl.md) / [HTML](upscayl__upscayl.html)）
- **kota-zo/myspoti** · 🌟🌟🌟🌗 3.5 — Jetpack Compose 写的原生 Spotify 客户端：复用官方 Web Player 播放，界面自绘，支持扩展式离线下载。（[Markdown](kota-zo__myspoti.md) / [HTML](kota-zo__myspoti.html)）
