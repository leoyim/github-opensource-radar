# 2026-11-03 · 逐项解读目录

本期共 30 个项目，独立解读 30 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **AI 与移动端吃掉 93% 的日增，中间四类合计不到 7%**：30 个项目今日合计 6,213 星增（21 个有基线）。AI 类五项 3,240（52.1%），移动类五项 2,548（41.0%），两者相加 5,788，占 93.1%。剩下的前端 141、后端 260、数据 5、工具 19，四类合计 425 星，不到总量的 7%。这不是「某个方向更热」，而是榜单结构被压成了两极：一端是 agent 与手机，另一端几乎空着。值得注意的是两极的构成完全不同——AI 端的增量集中在单个项目（agent-desktop 一项就占 AI 类的 70%），移动端则是 NOIR +1,087、nectarlink +1,022、AnyPS5 +337 三点开花，说明后者是真实的品类热度，前者更像单点爆发。
- **数据类连续第四期塌陷：五项合计 5 星，最高日增 +4**：数据类五个项目今日日增合计 5 星，最高是 debezium 的 +4，另有两个 0、一个缺基线。更严重的是构成：第五名是一个 100 星、单日 +1、没有 README（真实内容仅两百余字符法语版本备注）、没有许可证的 Dataiku 教学项目；第四名是一个 135 星、零增量的 Jellyfin 看板。整类里唯一具备生产分量的是 debezium。根因在采集侧而非市场——该类四条查询有两条锁定 topic、一条锁定语言，覆盖不到新的存储引擎、OLAP 与 ETL 工具，候选池被小体量仓库填满。这个缺陷已连续四期复现，从「注水」变成了「失真」，应当优先修查询而不是继续观察。
- **工具类前三席里三个是同模板空壳，这已经是安全问题**：工具类第 2、3、4 名（roblox-game-copier、startall-back、ads-blocker）是同一批投放：创建时间集中在 10:10–10:15 五分钟内，各自只有一次推送（创建后 5–8 秒即 push），README 是逐字相同的 311 字符——内容只有「按 Win + X 打开 PowerShell、粘贴下面这段命令、回车」，无源码、无 release、无许可证，topics 用同一套通用标签，星数凑整为 400 / 400 / 502。真正危险的是话术：一个自称 Roblox 游戏复制器、一个自称系统工具、一个自称广告拦截器，三者都用「预激活」「全功能」「开箱即用」降低戒心，而唯一交付物就是那段需要用户亲手执行的脚本。上一期是三个「恰好 400 星、零增量」的占位仓库，这一期升级为定向投毒。tools 查询必须加入仓库年龄、提交次数与 README 模板相似度过滤，并对「PowerShell 粘贴执行」这类指令直接判负。
- **手机与桌面的边界成了今天最快起量的赛道**：移动类前五里四个都在做「两端之间的事」：NOIR（2 天 +1,087）用电脑审计手机、nectarlink（29 天 +1,022）把手机通知与文件搬进 Windows、DSH-Android（6 天）把 agent 的执行面伸进手机 App、AnyPS5（+337）把主机游戏搬到 PC。再加上 AI 类第一的 agent-desktop（+2,275，操作桌面应用），日增前六里有五项都是在拆某个平台边界。共同点很清楚：它们解决的不是「某个 App 更好用」，而是「数据与操作被困在某个设备里」。NOIR 和 nectarlink 同时破千且都是冷启动，说明这类需求此前缺少合格的开源方案，而不是需求刚刚出现。
- **九个项目没有日增基线，占了三成**：30 个项目里有 9 个 starGain 为 null 或 0，占 30%。拆开看是两类：一类是四个 1 天新仓（含三个空壳），它们还没有历史快照可比，属正常；另一类是 onnxruntime（2,915 天）、nv-rs、defyxVPN、workhorse、DSH-Android 这些在 Trending 页被捕获但快照未覆盖的仓库。问题在于排序影响——缺基线时热度只能退回按绝对星数或 Trending 位次估算，这让「5 万星但今天没人讨论」的老项目与「2 天涨千星」的新项目在同一把尺子上难以区分。建议对 Trending 来源的条目补一条「首次出现」标记，而不是让它以 null 混在增量序列里。
- **Rust 占了六席，但这个数字不说明任何趋势**：30 个项目里 Rust 出现 6 次（agent-desktop、OpenLogi、Veronica、nv-rs、sqmeow.nvim 的引擎、nectarlink 的 Windows 端），是单一语言最高，超过 TypeScript 的 3 和 JavaScript 的 4。但把它们放在一起看，唯一的共性是「需要跟系统层打交道」——辅助功能 API、HID++ 报文、GNOME 服务、游戏引擎、数据库驱动、跨端加密通道。这不是「Rust 正在流行」，而是「这类活本来就只有少数语言合适」。同期 Python 3 席（heretic、mealie、steam 报告卡）全是应用层，Go 2 席（ollama、rclone）全是成熟基础设施。语言分布在这里是任务性质的映射，不是趋势指标，别拿它当选型依据。
- **九个一年以上的老项目同台，注意力在往基础设施回流**：入选项目中 9 个年龄超过 365 天：webpack（5,351 天）、rclone（4,614）、debezium（3,937）、scrcpy（3,268）、onnxruntime（2,915）、mealie（2,157）、ollama（1,225）、defyxVPN（503）、heretic（408）。它们的日增普遍不高（webpack +3、rclone +29、debezium +4），但覆盖了打包、云存储同步、CDC、设备镜像、推理运行时、自建应用、本地模型这七个互不重叠的基础层。把这条和老项目在 AI 类里的位置放在一起看：AI 前两名都是应用层的新玩法，而唯一的基础设施项 onnxruntime 连基线都没有。这更像一次周期性曝光，但方向值得记——当应用层卷到「让 agent 替你点按钮」时，真正决定成本与可靠性的仍然是下面那几层。

## AI / 大模型

- **vercel-labs/agent-desktop** · 🌟🌟🌟🌟🌗 4.5 — 不给 agent 看截图，让它直接读桌面应用的控件树——按 ref 点，点完再看一遍。（[Markdown](vercel-labs__agent-desktop.md) / [HTML](vercel-labs__agent-desktop.html)）
- **cheaper-inference/OmniRoute** · 🌟🌟🌟🌟🌗 4.5 — 一个端点接 375 家 provider，把各家免费额度摞起来用，还替你算清楚到底剩多少。（[Markdown](cheaper-inference__OmniRoute.md) / [HTML](cheaper-inference__OmniRoute.html)）
- **microsoft/onnxruntime** · 🌟🌟🌟🌟🌗 4.5 — 模型跑在哪儿、跑多快，很大程度上由这层中间件决定。（[Markdown](microsoft__onnxruntime.md) / [HTML](microsoft__onnxruntime.html)）
- **ollama/ollama** · 🌟🌟🌟🌟🌗 4.5 — 本地跑开源模型的事实标准，现在开始主动往 agent 客户端里塞。（[Markdown](ollama__ollama.md) / [HTML](ollama__ollama.html)）
- **p-e-w/heretic** · 🌟🌟🌟🌟 4.0 — 不改权重、不做微调，一个下午在你自己的显卡上把模型的行为「掰」过去。（[Markdown](p-e-w__heretic.md) / [HTML](p-e-w__heretic.html)）

## 前端 / Web

- **mealie-recipes/mealie** · 🌟🌟🌟🌟 4.0 — 自建的家庭食谱库：贴个链接自动抓配方，顺带把一周吃啥和采购清单一起管了。（[Markdown](mealie-recipes__mealie.md) / [HTML](mealie-recipes__mealie.html)）
- **gr8rstudio/gr8r-studio** · 🌟🌟🌟🌗 3.5 — 不用任何 UI 框架、不引运行时依赖的项目管理前端，用原生 ES 模块把六种视图做齐。（[Markdown](gr8rstudio__gr8r-studio.md) / [HTML](gr8rstudio__gr8r-studio.html)）
- **webpack/webpack** · 🌟🌟🌟🌗 3.5 — 十五年历史的打包器，今天仍在每天发布，增量 +3 就是它的常态。（[Markdown](webpack__webpack.md) / [HTML](webpack__webpack.html)）
- **ProxyShard/ShardBrowser** · 🌟🌟🌟 3.0 — 改在浏览器引擎层的指纹伪装：不是注入 JS 打补丁，而是让 Chromium 自己报出假身份。（[Markdown](ProxyShard__ShardBrowser.md) / [HTML](ProxyShard__ShardBrowser.html)）
- **mkturkcan/valdrada** · 🌟🌟🌟 3.0 — 用公开市政数据编译出一座可运行的纽约，连车道标线和行人都是可仿真的。（[Markdown](mkturkcan__valdrada.md) / [HTML](mkturkcan__valdrada.html)）

## 后端 / 云原生

- **AprilNEA/OpenLogi** · 🌟🌟🌟🌟🌗 4.5 — 罗技官方驱动的替代品：Rust 原生、配置一个 TOML 文件、不登录账号也不上报遥测。（[Markdown](AprilNEA__OpenLogi.md) / [HTML](AprilNEA__OpenLogi.html)）
- **rclone/rclone** · 🌟🌟🌟🌟 4.0 — 把七十多种云存储统一成一套命令行语义，rsync 的那套心智直接搬过来用。（[Markdown](rclone__rclone.md) / [HTML](rclone__rclone.html)）
- **namannn04/Veronica** · 🌟🌟🌟🌗 3.5 — 把 Ubuntu 上散落的一堆小工具收进一个原生控制中心，包括 agent 的用量与限流。（[Markdown](namannn04__Veronica.md) / [HTML](namannn04__Veronica.html)）
- **slaterain/nv-rs** · 🌟🌟🌟🌗 3.5 — 用 Rust 与 Bevy 重写《辐射：新维加斯》的引擎，目标是 1:1 复刻，连原版的怪癖都保留。（[Markdown](slaterain__nv-rs.md) / [HTML](slaterain__nv-rs.html)）
- **UnboundTechCo/defyxVPN** · 🌟🌟🌟🌗 3.5 — 一个 Flutter 客户端里塞了五种翻墙协议，按网络状况自动挑一条能通的。（[Markdown](UnboundTechCo__defyxVPN.md) / [HTML](UnboundTechCo__defyxVPN.html)）

## 数据 / 数据库

- **debezium/debezium** · 🌟🌟🌟🌟 4.0 — 把数据库的每一次行级变更变成可订阅的事件流，应用不用再猜数据什么时候变了。（[Markdown](debezium__debezium.md) / [HTML](debezium__debezium.html)）
- **stablemates/workhorse** · 🌟🌟🌟🌗 3.5 — 不要 broker 的任务队列：队列状态、调度、重试、恢复全部由 PostgreSQL 的 SQL 函数承担。（[Markdown](stablemates__workhorse.md) / [HTML](stablemates__workhorse.html)）
- **datasifaw/dataiku-projet-bancaire-analytics** · 🌟🌟 2.0 — 一个 Dataiku 银行分析项目的法语文档仓库，没有代码、没有许可证、没有说明。（[Markdown](datasifaw__dataiku-projet-bancaire-analytics.md) / [HTML](datasifaw__dataiku-projet-bancaire-analytics.html)）
- **JellyGlance/Server** · 🌟🌗 1.5 — 给 Jellyfin 和 Emby 装一块仪表盘：谁在播、播了什么、库有多大、下载到哪了。（[Markdown](JellyGlance__Server.md) / [HTML](JellyGlance__Server.html)）
- **2giosangmitom/sqmeow.nvim** · 🌟🌗 1.5 — 在 Neovim 里查库改数据，结果集用 Polars 在本地过滤排序，不用切到 GUI。（[Markdown](2giosangmitom__sqmeow.nvim.md) / [HTML](2giosangmitom__sqmeow.nvim.html)）

## 开发工具 / 效率

- **AssassinCreator/steam-stash-value-report-card** · 🌟🌟🌟🌟 4.0 — 把 Steam 库存估个价，然后印成一张能发出去的卡片——每个数字都标了口径和时窗。（[Markdown](AssassinCreator__steam-stash-value-report-card.md) / [HTML](AssassinCreator__steam-stash-value-report-card.html)）
- **Bridgeyaprovide/roblox-game-copier** · 🌟🌟🌟🌗 3.5 — 名为 Roblox 游戏复制器，README 的实际内容是让你往 PowerShell 里粘一段命令。（[Markdown](Bridgeyaprovide__roblox-game-copier.md) / [HTML](Bridgeyaprovide__roblox-game-copier.html)）
- **MeshBeatDitch/startall-back** · 🌟🌟🌟🌗 3.5 — 与同批次另两个仓库逐字相同的 README：不交付软件，只交付一段让你粘进 PowerShell 的命令。（[Markdown](MeshBeatDitch__startall-back.md) / [HTML](MeshBeatDitch__startall-back.html)）
- **HandcuffHelper/ads-blocker** · 🌟🌟🌟🌗 3.5 — 第三个同模板空壳：名字叫广告拦截器，实际内容是一段请你粘进 PowerShell 的命令。（[Markdown](HandcuffHelper__ads-blocker.md) / [HTML](HandcuffHelper__ads-blocker.html)）
- **mvschwarz/openrig** · 🌟🌟🌟🌗 3.5 — harness 包住模型，rig 包住你的 harness——用一份 YAML 定义一支常驻的 agent 团队。（[Markdown](mvschwarz__openrig.md) / [HTML](mvschwarz__openrig.html)）

## 移动 / 桌面 / 跨端

- **boykopovar/AnyPS5** · 🌟🌟🌟🌟🌗 4.5 — 不做模拟器：把 PS5 可执行文件重链接成目标系统原生格式，直接动态链接系统库实现。（[Markdown](boykopovar__AnyPS5.md) / [HTML](boykopovar__AnyPS5.html)）
- **Genymobile/scrcpy** · 🌟🌟🌟🌟🌗 4.5 — 不装 App、不 root，一根 USB 线把安卓屏幕和操作搬到电脑上。（[Markdown](Genymobile__scrcpy.md) / [HTML](Genymobile__scrcpy.html)）
- **Verlintas/NOIR** · 🌟🌟🌟🌟 4.0 — 用 adb 把安卓机上每个 App 的权限、上报域名和数据流向摊开，每条处置都带回滚命令。（[Markdown](Verlintas__NOIR.md) / [HTML](Verlintas__NOIR.html)）
- **thtbee/nectarlink** · 🌟🌟🌟🌟 4.0 — 把 Phone Link、KDE Connect、LocalSend 三件事合成一个：通知、剪贴板、文件、投屏都在本机直连。（[Markdown](thtbee__nectarlink.md) / [HTML](thtbee__nectarlink.html)）
- **jackwener/DSH-Android** · 🌟🌟🌟🌟 4.0 — 一个 APK 把 DeepSeek Harness 塞进安卓：免 root、免 Termux，用读屏加 Shizuku 替你点 App。（[Markdown](jackwener__DSH-Android.md) / [HTML](jackwener__DSH-Android.html)）
