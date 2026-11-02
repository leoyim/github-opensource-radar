# 2026-11-02 · 逐项解读目录

本期共 30 个项目，独立解读 30 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **AI 类独占全榜日增的七成，前四名全是 AI**：30 个项目今日合计 6,483 星增，AI 类五项就吃掉 4,763（约 73%），前四名 iFixAi +1,584、ai-engineering-hub +1,191、Scrapling +892、floorplan +854 无一例外。榜单第五才是后端的 public-apis +324。这不是「AI 项目多」，而是「注意力高度集中」：除 floorplan（6 天、1,808 星）外，其余三席都是半年以上的老项目，说明本轮热度是存量项目被重新发现，而不是新东西冒出。
- **数据类连续第三期塌陷，最高日增只有 +2**：数值库前五分别是 +2 / +1 / +1 / +1 / 0，五个项目合计日增 5 星，其中 DBPilot 只有 93 星仍能入榜。对照 10-30 的最高 +9、11-01 的最高 +3，这已是连续第三天走弱，可以判定为采样缺陷而非市场冷却：data 类的四条查询里有两条限定 topic、一条限定语言，覆盖不到新存储引擎、OLAP 与 SQL 工具链，候选池被压缩到只剩小体量个人项目。这一条需要在采集侧修（扩充 topic:duckdb / topic:olap / topic:etl / language:SQL 一类查询），否则该类每天都会注水。
- **开发工具类被三个「恰好 400 星、2 天新仓」占位**：除 claude-code（154,176 星、+140）之外，该类另外四席日增全为 0，其中 Ads-Blocker（401 星）、StartAll-Back（400 星）、Roblox-Game-Copier（400 星）都是 2 天新建、星数几乎完全一致、今日零增量。三个仓库同形同量、又缺语言标注，是典型的模板仓或互刷形态，把它们放进日报等于用版面换噪声。该类同样存在采样不足：真正在动的 IDE 插件、CLI 工具没有被抓到，才会让 400 星的空壳顶到第三到第五位。
- **storytold 从「重写单个软件」走到「给自己造应用商店」**：Craft 矩阵已经膨胀到 16 款（PhotoCraft / LightCraft / FilmCraft / DesignCraft / VectorCraft / PdfCraft / EffectCraft / WordCraft / DeckCraft / GridCraft / CADCraft / SoundCraft / FigCraft / Craft Anything / TextureCraft + 社区 SolidCraft），于是出现了 craft-launcher：100% Rust、无 Electron、按平台分发、支持装自建构建。23 天 4,695 星、今日 +232，是本期冷启动最快的项目。值得注意的是它的另一面——矩阵扩张速度快于单个应用成熟速度（README 自标 early alpha），启动器既成了唯一稳定入口，也成了唯一故障入口。
- **消费端三席同向：追番、听歌、追剧都在要「无广告 + 跨端 + 原生」**：Kazumi（+203，Flutter 跨端番剧）、limusic（+159，Rust+Tauri 的 YouTube Music 客户端）、awesome-zhuiju-free（+141，每日自动体检的追剧索引）分属三类，诉求却完全一致：绕开官方客户端里的广告与笨重外壳。三者的技术选择也趋同——不用 Electron（或只在必要时用 Flutter/Tauri）、播放走成熟内核（Anime4K / libmpv）、把内容源做成可替换的规则或索引。这条线索比单个项目更值得记：用户不再接受「网页套壳」，而愿意为原生体验承担配置成本。
- **老牌基础设施仍在榜，但日增已回落到两位数**：public-apis（494,655 星，+324）、terraform（+151）、docker/compose（+31）、microsoft/TypeScript（111,714 星，+19）同日出镜。它们能上榜靠的是综合分里的成熟度与社区权重，而不是热度——TypeScript 今日 +19，是「仍在缓慢增长」的量级。这暴露了当前打分模型的一个副作用：当新项目供给不足时，榜单会用稳定的老项目填位，读起来像「本周基础设施没有新闻」，而这恰恰可能是真相，也可能是采样没抓到新东西。

## AI / 大模型

- **ifixai-ai/iFixAi** · 🌟🌟🌟🌟🌗 4.5 — 把 agent 放进你公司的模拟沙盘里跑一天，再用裁判模型给它打个 A 到 F。（[Markdown](ifixai-ai__iFixAi.md) / [HTML](ifixai-ai__iFixAi.html)）
- **patchy631/ai-engineering-hub** · 🌟🌟🌟🌟🌗 4.5 — 93 个能跑起来的 AI 工程实战项目，按难度分三级，不是又一个链接大全。（[Markdown](patchy631__ai-engineering-hub.md) / [HTML](patchy631__ai-engineering-hub.html)）
- **D4Vinci/Scrapling** · 🌟🌟🌟🌟🌗 4.5 — Python 爬虫的一体化方案：静态页、JS 渲染、反爬绕过、并发爬取与 MCP 出口全在一个库里。（[Markdown](D4Vinci__Scrapling.md) / [HTML](D4Vinci__Scrapling.html)）
- **haydenschmitty/floorplan** · 🌟🌟🌟🌟🌗 4.5 — 让 Claude 或 Codex 读完你的仓库，画一张说人话的可交互架构图。（[Markdown](haydenschmitty__floorplan.md) / [HTML](haydenschmitty__floorplan.html)）
- **FlashML-org/FreeToken** · 🌟🌟🌟🌟🌗 4.5 — 在消费级显卡上跑 290B 级 MoE 前沿模型，把 GPU、CPU 与内存当成一块弹性推理平台。（[Markdown](FlashML-org__FreeToken.md) / [HTML](FlashML-org__FreeToken.html)）

## 前端 / Web

- **JCodesMore/ai-website-cloner-template** · 🌟🌟🌟🌟 4.0 — 给编码 agent 一个网址，让它把站复刻成一个干净的 Next.js 应用。（[Markdown](JCodesMore__ai-website-cloner-template.md) / [HTML](JCodesMore__ai-website-cloner-template.html)）
- **motiondivision/motion** · 🌟🌟🌟🌟 4.0 — React / JS / Vue 三端同一套动画 API，JS 引擎叠原生浏览器能力冲到 120fps。（[Markdown](motiondivision__motion.md) / [HTML](motiondivision__motion.html)）
- **microsoft/TypeScript** · 🌟🌟🌟🌟 4.0 — 4,520 天的语言本体，本轮 +19——它在榜上只是因为「还在」。（[Markdown](microsoft__TypeScript.md) / [HTML](microsoft__TypeScript.html)）
- **lucasmarkes/hairline** · 🌟🌟🌟🌗 3.5 — 33 个等距线稿小人，跟着鼠标动——零依赖、ESM only、React 可选。（[Markdown](lucasmarkes__hairline.md) / [HTML](lucasmarkes__hairline.html)）
- **TheNetsky/Microsoft-Rewards-Script** · 🌟🌟🌟 3.0 — 用 TypeScript + Playwright 把 Microsoft Rewards 的每日任务全自动跑完，含多账号与通知。（[Markdown](TheNetsky__Microsoft-Rewards-Script.md) / [HTML](TheNetsky__Microsoft-Rewards-Script.html)）

## 后端 / 云原生

- **public-apis/public-apis** · 🌟🌟🌟🌟🌗 4.5 — 49 万星的免费 API 清单，现在的最上面一行是广告——而它新增了 MCP Servers 目录。（[Markdown](public-apis__public-apis.md) / [HTML](public-apis__public-apis.html)）
- **hashicorp/terraform** · 🌟🌟🌟🌟🌗 4.5 — 把 API 编成声明式配置的基础设施即代码工具，本轮 +151——它上榜靠的是存量而非新闻。（[Markdown](hashicorp__terraform.md) / [HTML](hashicorp__terraform.html)）
- **LizardByte/Sunshine** · 🌟🌟🌟🌟 4.0 — 自建的低延迟游戏串流服务端，配 Moonlight 客户端，三大 GPU 硬件编码全支持。（[Markdown](LizardByte__Sunshine.md) / [HTML](LizardByte__Sunshine.html)）
- **0xJacky/nginx-ui** · 🌟🌟🌟🌟 4.0 — 给 Nginx 套一个 Web 控制台：配置编辑、证书签发、定时任务与在线监控全在一个界面。（[Markdown](0xJacky__nginx-ui.md) / [HTML](0xJacky__nginx-ui.html)）
- **docker/compose** · 🌟🌟🌟🌟 4.0 — 用一个 YAML 定义多容器应用，一条命令拉起整套环境——4,711 天的老工具，仍是本地编排的默认答案。（[Markdown](docker__compose.md) / [HTML](docker__compose.html)）

## 数据 / 数据库

- **alpcanaydin/tusk** · 🌟🌟🌟 3.0 — Rust + GPUI 写的原生数据库客户端，20 种引擎一个界面，AI 只写 SQL 不执行。（[Markdown](alpcanaydin__tusk.md) / [HTML](alpcanaydin__tusk.html)）
- **RayElg/kafgres** · 🌟🌟🌟 3.0 — 把 Kafka broker 塞进 Postgres：原生 Kafka 客户端连 9092 端口，感知不到区别。（[Markdown](RayElg__kafgres.md) / [HTML](RayElg__kafgres.html)）
- **pgrundev/pgterm** · 🌟🌟🌗 2.5 — 所有 Postgres 库的 htop：一个静态二进制，在终端里同时盯多个实例并跑只读诊断。（[Markdown](pgrundev__pgterm.md) / [HTML](pgrundev__pgterm.html)）
- **SkyChenSky/DBPilot** · 🌟🌟🌗 2.5 — 自托管的数据库性能诊断平台，SQL Server / MySQL / PostgreSQL 三引擎，内置 MCP server 给 agent 用。（[Markdown](SkyChenSky__DBPilot.md) / [HTML](SkyChenSky__DBPilot.html)）
- **arpanjot-coding/Datly** · 🌟🌗 1.5 — 本地优先的 AI 数据分析 IDE：自然语言出图，但每张图都要对着真实数据核对。（[Markdown](arpanjot-coding__Datly.md) / [HTML](arpanjot-coding__Datly.html)）

## 开发工具 / 效率

- **anthropics/claude-code** · 🌟🌟🌟🌟🌗 4.5 — 住在终端里的编码 agent，本轮 +140——它自己就是这波榜单里一半项目的前提。（[Markdown](anthropics__claude-code.md) / [HTML](anthropics__claude-code.html)）
- **mizorewww/x_gift_bot** · 🌟🌟🌟🌗 3.5 — 用你的 X 登录 Cookie 和银行卡，自动给他人下单赠送 X Premium 的兑换码系统。（[Markdown](mizorewww__x_gift_bot.md) / [HTML](mizorewww__x_gift_bot.html)）
- **CelestialStarfish/Ads-Blocker** · 🌟🌟🌟🌗 3.5 — ⚠️ 疑似投毒仓库：2 天新建、400 星、0 fork、无语言无许可，README 要求粘贴 PowerShell 命令安装「预激活版本」。（[Markdown](CelestialStarfish__Ads-Blocker.md) / [HTML](CelestialStarfish__Ads-Blocker.html)）
- **gryphonautocratmatch/StartAll-Back** · 🌟🌟🌟🌗 3.5 — ⚠️ 与 Ads-Blocker 同模板的第二个投毒仓库：换掉软件名，README 一字未改。（[Markdown](gryphonautocratmatch__StartAll-Back.md) / [HTML](gryphonautocratmatch__StartAll-Back.html)）
- **azurerockcode/Roblox-Game-Copier** · 🌟🌟🌟🌗 3.5 — ⚠️ 同批第三个投毒仓库：换成 Roblox 游戏复制，模板与文案与另两个完全相同。（[Markdown](azurerockcode__Roblox-Game-Copier.md) / [HTML](azurerockcode__Roblox-Game-Copier.html)）

## 移动 / 桌面 / 跨端

- **Predidit/Kazumi** · 🌟🌟🌟🌟🌗 4.5 — 用五行 XPath 描述一个番剧站，Flutter 就能把它变成带弹幕和支持超分的播放器。（[Markdown](Predidit__Kazumi.md) / [HTML](Predidit__Kazumi.html)）
- **totec448-spec/chat-on-steroids** · 🌟🌟🌟🌟 4.0 — 给 ChatGPT 装上本地的手和脚：读写文件、跑测试、留终端，还顺手把浏览器里的 ChatGPT 页面变成可被自动化的界面。（[Markdown](totec448-spec__chat-on-steroids.md) / [HTML](totec448-spec__chat-on-steroids.html)）
- **storytold/craft-launcher** · 🌟🌟🌟🌟 4.0 — 16 款 Craft 应用统一成一个 Rust 写的启动器：装、更新、打开，一个入口解决。（[Markdown](storytold__craft-launcher.md) / [HTML](storytold__craft-launcher.html)）
- **SimoHypers/limusic** · 🌟🌟🌟🌟 4.0 — Rust + Tauri 写的 YouTube Music 桌面客户端：没有 Electron，没有广告，播放走 libmpv。（[Markdown](SimoHypers__limusic.md) / [HTML](SimoHypers__limusic.html)）
- **laoma528/awesome-zhuiju-free** · 🌟🌟🌟🌟 4.0 — 一份由 GitHub Actions 每天体检的追剧资源清单：只做索引，不托管内容。（[Markdown](laoma528__awesome-zhuiju-free.md) / [HTML](laoma528__awesome-zhuiju-free.html)）
