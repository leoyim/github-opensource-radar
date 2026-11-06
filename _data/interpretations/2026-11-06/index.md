# 2026-11-06 · 逐项解读目录

本期共 30 个项目，独立解读 30 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **增量高度集中在 AI 与跨端**：本期 30 项中有 14 项具备当日快照基线，合计 +2,150；AI 类 1,445（67.2%）、移动与跨端 478（22.2%），两类合计占 89.4%。后端 139、工具 48、前端 40，数据类五项均缺少当日基线。scenario-labs/skills +667 与 Horizon +485 两项就贡献了全榜一半以上增量，头部集中度明显高于前几期。
- **六个千日老项目与五个三十天新仓同台**：创建满 1,000 天的项目有 6 个（Leaflet 5,888 天、caddy 4,314、JuiceFS 2,128、bbot 1,700、Open-Generative-AI 1,276、系统设计资源库 1,108），而 30 天内的新仓也有 5 个（java-mod-rust-port-tool 1 天、HGhub 3 天、uncensored-ai-api 4 天、TotK Recomp 8 天、idx 20 天）。老项目靠被依赖维持个位到两位数增量，新仓靠速度估算进入榜单，两种热度口径在同一页上并存。
- **数据方向体量走弱，但内容结构变实**：数据类本期没有实测日增，是唯一零基线的方向；但五项内容已从单纯的存储与查询，扩展到本地工作台（navop）、可版本化管道（duckle）、多模态质检（hflow）、浏览器内建模（sqltoerdiagram）与语义层同步（dex）。相较前几期常见的教学型仓库占位，本期的工程完整度更高，值得继续观察其后续增量能否跟上。
- **跨端出现三条互不相同的技术路径**：TotK Recomp 用静态重编译把原平台程序提前翻译成 x86-64 原生应用，GeoLibre 用 Tauri v2 加 WebAssembly 把分析放进浏览器，gpui-kit 则在 Rust 原生渲染之上补齐组件层；再算上只提供薄抽象、十六年未改定位的 Leaflet，本期把「一次开发多端可用」的几种主要取舍摆在了同一张榜单上。
- **agent 从写代码走向交付与数据链路**：本期六项分别落在流程的不同环节：OpenSpec 管规格、skills 分发能力、grip 把可解释性做成 push 门禁、gws 内置 40 余项 agent skills、dex 让代理维护语义层、e2e 让代理驱动测试而用断言收口。共同结构是「代理负责执行，确定性规则负责校验」，而不是把整条链路都交给模型判断。
- **本地优先正从卖点变成前提**：sqltoerdiagram 明确 schema 不上传、GeoLibre 把上千个处理工具放进浏览器、duckle 强调流水线跑在自有机器、navop 用无 WebView 的原生客户端、HGhub 把缓存与请求节制写进使用说明。数据留在本地、不依赖服务端，已不再是需要特别强调的差异化，而更接近这类工具默认要满足的条件。
- **看新仓时，fork 密度比星数更有信息量**：HGhub 上线 3 天获 1,153 星与 875 fork，fork/星比约 0.76，远高于同期其他新仓，说明大量使用者是在自行构建而非仅收藏；dex 仅 114 星却有 51 fork 与 172 个开放议题，同样呈现「少数人深度使用」的形态。相对地，grip 与 sqlmux 这类观点清晰但评分偏低的小工具仍处验证期。评估早期项目时，把 fork、议题与星标一起看，比单看热度更稳妥。

## AI / 大模型

- **scenario-labs/skills** · 🌟🌟🌟🌟 4.0 — 给编码代理装上两套管件：一套调云端生成模型，一套直接开本机专业软件。（[Markdown](scenario-labs__skills.md) / [HTML](scenario-labs__skills.html)）
- **monid-ai/monid** · 🌟🌟🌟🌟 4.0 — 一把 key、一个地址，把两千多个第三方工具变成代理可调用的统一接口。（[Markdown](monid-ai__monid.md) / [HTML](monid-ai__monid.html)）
- **Thysrael/Horizon** · 🌟🌟🌟🌟 4.0 — 把订阅源、论坛与时间线收成一份带上下文的中英双语简报。（[Markdown](Thysrael__Horizon.md) / [HTML](Thysrael__Horizon.html)）
- **Anil-matcha/Open-Generative-AI** · 🌟🌟🌟🌟 4.0 — 一个可自托管的生成工作台，聚合六百多个模型，并允许整体贴牌对外运营。（[Markdown](Anil-matcha__Open-Generative-AI.md) / [HTML](Anil-matcha__Open-Generative-AI.html)）
- **Fission-AI/OpenSpec** · 🌟🌟🌟🌟 4.0 — 让 AI 编码助手先探索存量代码、把范围谈清楚，再动手改。（[Markdown](Fission-AI__OpenSpec.md) / [HTML](Fission-AI__OpenSpec.html)）

## 前端 / Web

- **UncensoredLabs/uncensored-ai-api** · 🌟🌟🌟🌟 4.0 — 换一个 base URL 就能沿用既有客户端的模型接入层，交付的是示例与指南。（[Markdown](UncensoredLabs__uncensored-ai-api.md) / [HTML](UncensoredLabs__uncensored-ai-api.html)）
- **Leaflet/Leaflet** · 🌟🌟🌟🌟 4.0 — 十六年过去仍是 Web 地图的基础层，靠的是把抽象做得足够薄。（[Markdown](Leaflet__Leaflet.md) / [HTML](Leaflet__Leaflet.html)）
- **OpenLabs-so/openanalytics** · 🌟🌟🌟🌗 3.5 — 把「不收集」写进架构：无 cookie、无跨站画像、只读聚合结果。（[Markdown](OpenLabs-so__openanalytics.md) / [HTML](OpenLabs-so__openanalytics.html)）
- **ProxyShard/ShardBrowser** · 🌟🌟🌟🌗 3.5 — 指纹改造下沉到 Chromium 引擎内部，而不是在页面层注入脚本打补丁。（[Markdown](ProxyShard__ShardBrowser.md) / [HTML](ProxyShard__ShardBrowser.html)）
- **electkismet/AxData** · 🌟🌟🌟 3.0 — 把 A 股公开数据源做成插件化框架，并把授权边界写得比功能清单更细。（[Markdown](electkismet__AxData.md) / [HTML](electkismet__AxData.html)）

## 后端 / 云原生

- **caddyserver/caddy** · 🌟🌟🌟🌟🌗 4.5 — 把证书的申请、续期、回退与内部 CA 都收进默认行为，HTTPS 不再是部署步骤。（[Markdown](caddyserver__caddy.md) / [HTML](caddyserver__caddy.html)）
- **Wallbycontact/java-mod-rust-port-tool** · 🌟🌟🌟🌟 4.0 — 跨语言迁移的诚实做法：能转的自动转，转不了的写进报告。（[Markdown](Wallbycontact__java-mod-rust-port-tool.md) / [HTML](Wallbycontact__java-mod-rust-port-tool.html)）
- **openchoreo/openchoreo** · 🌟🌟🌟🌟 4.0 — 把 Kubernetes 的底层原语包成开发者能直接用的平台抽象，连 agent 工作负载一起管。（[Markdown](openchoreo__openchoreo.md) / [HTML](openchoreo__openchoreo.html)）
- **ashishps1/awesome-system-design-resources** · 🌟🌟🌟🌟 4.0 — 一份面向系统设计与面试准备的免费资料索引，价值在筛选与组织。（[Markdown](ashishps1__awesome-system-design-resources.md) / [HTML](ashishps1__awesome-system-design-resources.html)）
- **juicedata/juicefs** · 🌟🌟🌟🌟 4.0 — 把对象存储挂成 POSIX 文件系统，元数据单独交给数据库，兼顾容量与本地般的使用方式。（[Markdown](juicedata__juicefs.md) / [HTML](juicedata__juicefs.html)）

## 数据 / 数据库

- **feigeCode/navop** · 🌟🌟🌟🌟 4.0 — 用 Rust 与 GPUI 把数据库、SSH、终端、远程桌面和监控收进一个无 WebView 的原生客户端。（[Markdown](feigeCode__navop.md) / [HTML](feigeCode__navop.html)）
- **slothflowlabs/duckle** · 🌟🌟🌟🌟 4.0 — 把 ETL 流水线写成一个可进 git 的文件，跑在自己的机器上，按核数换吞吐。（[Markdown](slothflowlabs__duckle.md) / [HTML](slothflowlabs__duckle.html)）
- **Hebbian-Robotics/hflow** · 🌟🌟🌟🌟 4.0 — 给机器人训练数据做质检与溯源，把散落的清洗脚本收成可复现的管线。（[Markdown](Hebbian-Robotics__hflow.md) / [HTML](Hebbian-Robotics__hflow.html)）
- **royalbhati/sqltoerdiagram** · 🌟🌟🌟🌗 3.5 — 粘贴 CREATE TABLE 就得到可交互 ER 图，全程在浏览器里，schema 不上传。（[Markdown](royalbhati__sqltoerdiagram.md) / [HTML](royalbhati__sqltoerdiagram.html)）
- **exmergo/dex** · 🌟🌟🌟🌗 3.5 — 让编码代理帮你探查数据、建模型与语义层，并在表结构变化时保持同步。（[Markdown](exmergo__dex.md) / [HTML](exmergo__dex.html)）

## 开发工具 / 效率

- **blacklanternsecurity/bbot** · 🌟🌟🌟🌗 3.5 — 把攻击面测绘做成递归发现：从一个目标不断展开新的域名、IP 与资产。（[Markdown](blacklanternsecurity__bbot.md) / [HTML](blacklanternsecurity__bbot.html)）
- **fzn0x/idx** · 🌟🌟🌟 3.0 — 一个二进制同时给人用表格、给脚本用 JSON、给 agent 用 MCP。（[Markdown](fzn0x__idx.md) / [HTML](fzn0x__idx.html)）
- **googleworkspace/cli** · 🌟🌟🌟 3.0 — 不内置命令表，运行时读 Google 的 Discovery Service 自己长出完整命令面。（[Markdown](googleworkspace__cli.md) / [HTML](googleworkspace__cli.html)）
- **guilyx/grip** · 🌟🌟🌗 2.5 — 把评审对象从代码换成人：解释不清自己的 diff，就不让 push。（[Markdown](guilyx__grip.md) / [HTML](guilyx__grip.html)）
- **kackerx/sqlmux** · 🌟🌟🌗 2.5 — 把数据库客户端做成终端里的分屏会话，键位沿用 vim。（[Markdown](kackerx__sqlmux.md) / [HTML](kackerx__sqlmux.html)）

## 移动 / 桌面 / 跨端

- **valentderah/totk-pc-recomp** · 🌟🌟🌟🌟🌗 4.5 — 把一款 Switch 游戏静态重编译成 x86-64 原生程序，配 Vulkan 渲染，游戏文件需自备。（[Markdown](valentderah__totk-pc-recomp.md) / [HTML](valentderah__totk-pc-recomp.html)）
- **opengeos/GeoLibre** · 🌟🌟🌟🌟🌗 4.5 — 一套工作区同时跑成网页、桌面、手机与 Notebook，把上千个地理处理工具放进 WebAssembly。（[Markdown](opengeos__GeoLibre.md) / [HTML](opengeos__GeoLibre.html)）
- **longbridge/gpui-kit** · 🌟🌟🌟🌟🌗 4.5 — 把 GPUI 从 UI 框架补成应用框架：75+ 组件、无障碍、集成测试与可选 JS 运行时。（[Markdown](longbridge__gpui-kit.md) / [HTML](longbridge__gpui-kit.html)）
- **Minireel/HGhub** · 🌟🌟🌟🌟 4.0 — 一个 Tauri 第三方客户端，README 花最多篇幅写的不是功能，而是使用边界。（[Markdown](Minireel__HGhub.md) / [HTML](Minireel__HGhub.html)）
- **tester-army/e2e** · 🌟🌟🌟🌟 4.0 — 用一句话描述目标让 agent 去点，断言仍用熟悉的 locator 与 expect 写。（[Markdown](tester-army__e2e.md) / [HTML](tester-army__e2e.html)）
