# 2026-11-14 · 逐项解读目录

本期共 29 个项目，独立解读 29 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **增量高度集中在 AI 与移动两个方向，两项就占全榜三成**：29 项里 25 项有前一日基线，合计日增 +2,413；AI 方向 1,144（47.4%）、移动方向 841（34.9%），两者合计 82.3%，前端 80、后端 163、工具 184、数据仅 1。日增前四为 QwenLM/qwen-code +462、tidain/YunX-Desktop +457、Renly1994/xiaotang-daozai +282、Gentleman-Programming/gentle-ai +242，四项合计占 59.8%。这不是全栈同步升温，而是注意力落在「agent 的工作规范」与「桌面端把内容变成原生窗口」两条线上；读榜单时不宜把总量理解成各方向普遍走强。
- **AI 五项全在做「agent 怎么被组织」，没有一项发布新模型**：qwen-code 把自动记忆、技能、子 agent 与 MCP 做成开源内核并允许运行时换模型，SkillSpector 在技能安装前补一道安全扫描，claude-plugins-official 把插件投稿与命名规则收束到官方目录，gentle-ai 给 17 种已有 agent 外挂记忆与流程证据，headroom 则在工具输出进入上下文前做可逆压缩。五项分别落在运行时、准入、分发、流程与成本五个切面，共同动作是定义 agent 该按什么规则、花多少预算工作，而非提升模型能力本身。
- **token 成本成了独立一层，本期出现命令边界与应用边界两条实现**：rtk 作为 CLI 代理在 shell 输出进入 agent 前过滤，宣称常见开发命令省 60–90%，并约定失败回退、退出码透传与可 bypass；headroom 则在应用层压缩消息、日志与 RAG 片段，给出 21–57% 的实测区间与「散文几乎无收益」的边界，原文缓存在本机可按需取回。一个管命令、一个管上下文，都把可验证性（rtk gain / headroom stats）写进产品，说明降本已从提示词技巧变成有度量、有回退路径的工程组件。
- **12 项千日以上老项目与 2 项新仓同台，Rust 占 7 席**：29 项中有 12 项年龄超过 1,000 天、7 项超过 2,000 天：ZooKeeper 6,441 天、tasks 4,867 天、gh 2,599 天、tabler-icons 2,452 天、CrowdSec 2,374 天、zellij 2,265 天、ruoyi-vue-pro 2,120 天；另一端是 apkstart 16 天与 xiaotang-daozai 11 天。语言分布为 Rust 7、Go 5、Python 4、TypeScript/JavaScript 各 3、C/Java/Kotlin 各 2、Ada 1。老项目日增多为两位数甚至个位数，但它们在协调、监控、存储、命令行与图标这些位置上的存在，决定了新工具必须对接的现实环境。
- **数据方向五席全是几十星的小工程，合计日增仅 +1**：data 类五项星标落在 45–99 之间，合计日增 +1，但内容并非占位：airflow-weather-pipeline 是可跑通的 Airflow+PostgreSQL+Metabase 教学闭环，opne-aureka 把表格问答做成 SQLite+DuckDB 本地链路，netra 用 XDP 与内嵌 DuckDB 做旁路流量观测，dbt-doctor 给 dbt 项目做 122 条规则的 CI 质检，narwhal 把六种数据库的 DBA 工具与 MCP server 收进单二进制。四项把自然语言查询或 MCP 写进定位，落点分散在分析、观测、质检与客户端，比泛化 BI 更接近工程现场。
- **移动端三条路径都在把既有内容变成原生窗口**：apkstart 用 QEMU/Android Emulator 把 APK 变成 Windows 独立窗口，Pake 用 Tauri 与系统 WebView 把网页打包成小于 10MB 的桌面应用，xiaotang-daozai 则用 Rust + egui 从零画一个屏幕边缘的信息岛；YunX-Desktop 与 libreget 分别把网盘/视频解析和 1,800+ 站点的下载收进本地客户端。共同取舍是绕开「每个应用自带一个 Chromium」的重量，让内容以轻量窗口形态常驻；代价分别是虚拟化依赖、目标站点条款约束与系统信号适配。
- **本期工具方向只剩四席，且三项是十年以上的命令行常驻件**：工具方向入选 4 项：rtk 是 296 天的新项目，tasks 4,867 天、zellij 2,265 天、gh 2,599 天均为长期维护的命令行组件，合计日增 184。四项里有三项是单一 Rust/Go 二进制、不引入外部运行时，且 gh 新增的 Agent skills 把官方 CLI 也变成 agent 可调用的能力源。方向席位与每方向数量的差异，反映的是当日候选池经历史去重与准入约束后的实际分布，而非刻意维持每类固定名额。

## AI / 大模型

- **QwenLM/qwen-code** · 🌟🌟🌟🌟🌗 4.5 — 把终端里的编码 agent 做成一套可换模型、可无头调用、可跨端接入的开源底座。（[Markdown](QwenLM__qwen-code.md) / [HTML](QwenLM__qwen-code.html)）
- **NVIDIA/SkillSpector** · 🌟🌟🌟🌟🌗 4.5 — 在把第三方 agent 技能装进环境之前，先扫一遍它会不会偷数据、越权或夹带提示注入。（[Markdown](NVIDIA__SkillSpector.md) / [HTML](NVIDIA__SkillSpector.html)）
- **anthropics/claude-plugins-official** · 🌟🌟🌟🌟🌗 4.5 — Anthropic 官方插件目录，同时记录第三方插件投稿入口迁移的过渡规则。（[Markdown](anthropics__claude-plugins-official.md) / [HTML](anthropics__claude-plugins-official.html)）
- **Gentleman-Programming/gentle-ai** · 🌟🌟🌟🌟 4.0 — 不换 agent，只给它补上记忆、流程证据与有边界的复核。（[Markdown](Gentleman-Programming__gentle-ai.md) / [HTML](Gentleman-Programming__gentle-ai.html)）
- **headroomlabs-ai/headroom** · 🌟🌟🌟🌟 4.0 — 在工具输出、日志与 RAG 片段进模型之前先压缩，且原文可随时取回。（[Markdown](headroomlabs-ai__headroom.md) / [HTML](headroomlabs-ai__headroom.html)）

## 前端 / Web

- **daijro/camoufox** · 🌟🌟🌟🌟 4.0 — 基于 Firefox 的开源反检测浏览器，把指纹伪装做进浏览器本体而非注入脚本。（[Markdown](daijro__camoufox.md) / [HTML](daijro__camoufox.html)）
- **YunaiV/ruoyi-vue-pro** · 🌟🌟🌟🌟 4.0 — 一套覆盖权限、工作流、支付到商城的国产后台管理全家桶，分支按 JDK 版本分线维护。（[Markdown](YunaiV__ruoyi-vue-pro.md) / [HTML](YunaiV__ruoyi-vue-pro.html)）
- **tabler/tabler-icons** · 🌟🌟🌟🌟 4.0 — 6,287 枚统一 24×24 / 2px 描边规范的开源 SVG 图标，按框架分别发 npm 包。（[Markdown](tabler__tabler-icons.md) / [HTML](tabler__tabler-icons.html)）
- **quickjs-ng/quickjs** · 🌟🌟🌟🌗 3.5 — 原版 QuickJS 停更后由社区接手的分支，继续跟进最新 ECMAScript 规范。（[Markdown](quickjs-ng__quickjs.md) / [HTML](quickjs-ng__quickjs.html)）
- **ovenpasta/adi2** · 🌟🌟🌗 2.5 — 给 Ada 补一套现代 GUI 工具箱：CSS 热重载、XML 布局、SVG/Lottie 与资源打进单文件。（[Markdown](ovenpasta__adi2.md) / [HTML](ovenpasta__adi2.html)）

## 后端 / 云原生

- **louislam/uptime-kuma** · 🌟🌟🌟🌟🌗 4.5 — 一条 Docker 命令就能跑起来的自托管监控，把状态页、告警与多协议探测收在一个界面里。（[Markdown](louislam__uptime-kuma.md) / [HTML](louislam__uptime-kuma.html)）
- **apache/zookeeper** · 🌟🌟🌟🌟 4.0 — 分布式系统里那套被长期验证的协调与共识底座，README 只做导航，正文在官方文档。（[Markdown](apache__zookeeper.md) / [HTML](apache__zookeeper.html)）
- **rustfs/rustfs** · 🌟🌟🌟🌟 4.0 — 用 Rust 重写的 S3 兼容分布式对象存储，把 Apache 2.0 许可作为明确差异点。（[Markdown](rustfs__rustfs.md) / [HTML](rustfs__rustfs.html)）
- **crowdsecurity/crowdsec** · 🌟🌟🌟🌟 4.0 — 把 IDS/IPS、WAF 与众人共享的恶意 IP 名单合成一个可自托管的防护引擎。（[Markdown](crowdsecurity__crowdsec.md) / [HTML](crowdsecurity__crowdsec.html)）
- **kubescape/kubescape** · 🌟🌟🌟🌟 4.0 — 把 Kubernetes 安全扫描从 IDE 与 CI 一路拉到集群运行时，用同一套规则看风险与合规。（[Markdown](kubescape__kubescape.md) / [HTML](kubescape__kubescape.html)）

## 数据 / 数据库

- **datasifaw/airflow-weather-pipeline** · 🌟🌟🌗 2.5 — 一份把 Airflow、PostgreSQL 与 Metabase 串成天气 ETL 的完整教学工程。（[Markdown](datasifaw__airflow-weather-pipeline.md) / [HTML](datasifaw__airflow-weather-pipeline.html)）
- **MrXujiang/opne-aureka** · 🌟 1.0 — 上传 Excel/CSV 后用中文提问，本地把问题翻成 SQL、图表与分析报告。（[Markdown](MrXujiang__opne-aureka.md) / [HTML](MrXujiang__opne-aureka.html)）
- **xxddpac/netra** · 🌟 1.0 — 一个二进制读镜像口流量，用 eBPF/XDP 在内核侧聚合，再用自然语言问这份真实流量。（[Markdown](xxddpac__netra.md) / [HTML](xxddpac__netra.html)）
- **northgraindata/dbt-doctor** · 🌟 1.0 — 给 dbt 项目做静态体检，把文档、测试与 DAG 可维护性问题变成 CI 里可卡住的规则。（[Markdown](northgraindata__dbt-doctor.md) / [HTML](northgraindata__dbt-doctor.html)）
- **Nonanti/narwhal** · 🌟 1.0 — 把 DBA 工具、vim 式 SQL 编辑器和 MCP server 塞进一个终端静态二进制。（[Markdown](Nonanti__narwhal.md) / [HTML](Nonanti__narwhal.html)）

## 开发工具 / 效率

- **rtk-ai/rtk** · 🌟🌟🌟🌟🌗 4.5 — 在命令输出进入 agent 上下文之前先过滤，用单个 Rust 二进制省下 60–90% 常见开发命令的 token。（[Markdown](rtk-ai__rtk.md) / [HTML](rtk-ai__rtk.html)）
- **tasks/tasks** · 🌟🌟🌟🌟 4.0 — 在 Astrid 被收购关停十多年后，让它的开源安卓代码继续作为待办应用活下去。（[Markdown](tasks__tasks.md) / [HTML](tasks__tasks.html)）
- **zellij-org/zellij** · 🌟🌟🌟🌟 4.0 — 开箱即用又不牺牲可配置性的终端工作区，把 pane、布局与插件收进一个 Rust 二进制。（[Markdown](zellij-org__zellij.md) / [HTML](zellij-org__zellij.html)）
- **cli/cli** · 🌟🌟🌟🌟 4.0 — 把 pull request、issue 与仓库操作搬进终端的 GitHub 官方命令行工具。（[Markdown](cli__cli.md) / [HTML](cli__cli.html)）

## 移动 / 桌面 / 跨端

- **RoutineMiku/apkstart** · 🌟🌟🌟🌟 4.0 — 在 Windows 上双击 APK 就装、每个安卓应用一个独立窗口，运行时自带且按需拉起。（[Markdown](RoutineMiku__apkstart.md) / [HTML](RoutineMiku__apkstart.html)）
- **tidain/YunX-Desktop** · 🌟🌟🌟🌟 4.0 — 把网盘分享、视频链接与 P2P 下载收进一个 Windows 桌面客户端，附浏览器接管扩展。（[Markdown](tidain__YunX-Desktop.md) / [HTML](tidain__YunX-Desktop.html)）
- **OpenSelena/libreget** · 🌟🌟🌟🌟 4.0 — Tauri 2 + Rust + Svelte 的跨平台下载与媒体工具箱，还能作为 MCP server 供 agent 调用。（[Markdown](OpenSelena__libreget.md) / [HTML](OpenSelena__libreget.html)）
- **Renly1994/xiaotang-daozai** · 🌟🌟🌟🌟 4.0 — 用 Rust + egui 做的 Windows 桌面「信息岛」，把通知、歌词、待办与 AI 额度收在屏幕边缘。（[Markdown](Renly1994__xiaotang-daozai.md) / [HTML](Renly1994__xiaotang-daozai.html)）
- **tw93/Pake** · 🌟🌟🌟🌟 4.0 — 一条命令把任意网页打包成小于 10MB 的桌面应用，用系统 WebView 代替捆绑 Chromium。（[Markdown](tw93__Pake.md) / [HTML](tw93__Pake.html)）
