# 2026-11-04 · 逐项解读目录

本期共 29 个项目，独立解读 29 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **一个项目吃掉八成日增：dsh-superagent 的 +3,170 让本期榜单失去可比性**：29 个项目今日合计 6,379 星增，其中 AI 类五项 5,161（80.9%），而 deepseek-ai/dsh-superagent-prototype 一个项目就占 3,170——接近全榜的一半。它只有 4 天历史，官方账号发布，带着一份讲「agent 该如何克制地占用人的注意力」的方法论文档。把它剔除后，本期剩余 28 项合计 3,209 星，与上一期的结构完全不同：没有断层第一，没有两千级增量，最高是 colibri 的 +802。这意味着今天读榜单时的参照系要调整——这不是「AI 又爆发了」，而是一个官方原型在极短时间内完成了注意力收割，其余方向的真实温度被它的数字盖住了。
- **数据类连续第五期塌陷：五项合计 94 星，四项合计 2 星**：本期数据方向的五个项目日增分别为 +92、+1、+1、0、0，合计 94 星，占全榜 1.5%。其中四项是 162、108、74、260 星的小体量仓库，几乎零增量。这不是「数据库领域变冷了」——同一个 24 小时里，ClickHouse、DuckDB、Postgres 生态的新项目并不少。真正的问题是采样：数据类的四条查询里有两条限定 topic（database / postgresql）、一条限定语言，覆盖不到新存储引擎、数据工具与 ETL 方向，于是排序时只能在小体量仓库里凑数。这个缺陷已经连续五期复现，从「观察项」应当升级为「必修项」。
- **八个千日老项目同台：成熟基础设施正在填补冷启动的空位**：29 个项目里有 8 个超过 1,000 天：kornia（2,996）、immich（1,734）、keploy（1,750）、awesome-go（4,503）、trivy（2,764）、audacity（4,241）、Kingfisher（4,229）、jadx（4,978）。占比 27.6%，是近期最高。原因不复杂：冷启动项目在 30 天去重窗口后能被推的越来越少，而 Trending 页面对「老项目突然活跃」也有曝光。这带来一个副作用——榜单的「新」在变淡，今天的条目里真正的新东西（30 天内）只有 4 个。
- **「agent 编排层」分化成五个切面，本期一次到齐**：把五个项目放在一起看，会发现它们解决的是同一个问题的不同层：dsh-superagent 管「谁能触发、何时交付」，agent-autoloop 管「后台怎么跑、什么时候叫人」，sandcastle 管「在哪跑、怎么把结果收回来」，agent-beacon 管「跑过的经验怎么留给下一次」，herdr 管「一个人怎么同时看住十个 agent」。五个项目分别处在宿主内调度、流程壳、沙箱、记忆、工作台五个位置，没有一个在做模型本身。这个分布的信号很明确：agent 的能力竞争已经下沉到编排层，而编排层目前还没有事实标准。
- **「让 agent 看见世界」这一层在被重写，且都是减成本路线**：moli 把浏览器拆成结构层与呈现层，默认只给语义树，需要坐标才开布局；keploy 把观察点下移到 eBPF，在系统调用层捕获流量而不侵入应用；jadx 则是把不可读的字节码还原成人能读的源码——虽然是给人类看，但服务的是同一类审计需求。三个项目的共同取向是「先给结构，再给像素/字节」，与上一代「把所有东西渲染出来再说」的方案相比，成本低一个量级。这不是巧合：当 agent 的调用量超过人类浏览的频次，观察成本就成了主要开销。
- **移动端本期没有新应用，只有工具链**：移动方向的五个项目里，Kingfisher 是库、jadx 是反编译器、herdr 是桌面工作台、omniget 是下载器、PiliPlus 是第三方客户端——没有一个是「新的移动应用」。这与前几期「NOIR 两天 +1,087、nectarlink +1,022」的应用爆发形成对照。原因可能是 Trending 的移动类查询仍偏向 topic，而真正的应用发布越来越依赖社区传播而非关键词命中。对读者而言，这一期移动类更像「必备工具清单」而不是「新品发布」。
- **七项首次进入统计，30 天去重窗口开始出现空转**：本期有 7 个项目无历史基线（plainspace、global-law、agent-autoloop、SeeCode、Kingfisher、herdr-app、omniget），占比 24%。这既说明新项目仍在持续涌现，也说明去重机制正在把一批项目挡在窗口外——本期去重拦截 128 个，是近十期的高位。两个效果叠加的结果是：同一批候选被反复筛选，而真正的新面孔进入榜单的速度在下降。这一点值得在后续期次继续观察。

## AI / 大模型

- **JustVugg/colibri** · 🌟🌟🌟🌟🌗 4.5 — 热专家在显存、温专家在内存、冷专家从 NVMe 现流现读——纯 C，一个模型一个文件。（[Markdown](JustVugg__colibri.md) / [HTML](JustVugg__colibri.html)）
- **tashfeenahmed/freellmapi** · 🌟🌟🌟🌟🌗 4.5 — 34 家免费额度聚成一个 /v1 端点，路由替你挑模型、替你兜限流、替你记账。（[Markdown](tashfeenahmed__freellmapi.md) / [HTML](tashfeenahmed__freellmapi.html)）
- **deepseek-ai/dsh-superagent-prototype** · 🌟🌟🌟🌟 4.0 — 给一个仓库配一个常驻 agent：有人开口才动手，干完回到原对话交付 PR。（[Markdown](deepseek-ai__dsh-superagent-prototype.md) / [HTML](deepseek-ai__dsh-superagent-prototype.html)）
- **kornia/kornia** · 🌟🌟🌟🌟 4.0 — 把图像处理与几何视觉算子做成可批量、可反传、可上 GPU 的张量运算。（[Markdown](kornia__kornia.md) / [HTML](kornia__kornia.html)）
- **lexmount/moli** · 🌟🌟🌟🌟 4.0 — 结构优先、像素按需：默认只给语义树，要坐标和截图时才打开布局与渲染。（[Markdown](lexmount__moli.md) / [HTML](lexmount__moli.html)）

## 前端 / Web

- **immich-app/immich** · 🌟🌟🌟🌟🌗 4.5 — 把 Google Photos 那一整套搬回自己家的硬盘，代价是要自己运维。（[Markdown](immich-app__immich.md) / [HTML](immich-app__immich.html)）
- **mattpocock/sandcastle** · 🌟🌟🌟🌟 4.0 — 一次 run() 起一个沙箱、跑一个 agent、把分支合回来——沙箱是编排层的一等公民。（[Markdown](mattpocock__sandcastle.md) / [HTML](mattpocock__sandcastle.html)）
- **Christ9038/Ydisks-Xianyu-Helper** · 🌟🌟🌟🌗 3.5 — 多账号、自动回复、自动发货——把一个人管多个店铺的重复动作收进一个本地服务。（[Markdown](Christ9038__Ydisks-Xianyu-Helper.md) / [HTML](Christ9038__Ydisks-Xianyu-Helper.html)）
- **super-productivity/plainspace** · 🌟🌟🌟 3.0 — 一条链接，不用注册就能一起排计划——把项目管理的开销砍到只剩内容。（[Markdown](super-productivity__plainspace.md) / [HTML](super-productivity__plainspace.html)）
- **Nitjsefnie/Overflow** · 🌟🌟🌟 3.0 — 这周有余力就帮别人修 issue 攒信用，下周自己卡住时再花掉——不动钱，只记账。（[Markdown](Nitjsefnie__Overflow.md) / [HTML](Nitjsefnie__Overflow.html)）

## 后端 / 云原生

- **keploy/keploy** · 🌟🌟🌟🌟🌗 4.5 — 把真实请求录成测试用例，重放即可回归——不写一行测试代码。（[Markdown](keploy__keploy.md) / [HTML](keploy__keploy.html)）
- **avelino/awesome-go** · 🌟🌟🌟🌟🌗 4.5 — Go 生态的公共索引：找轮子之前，先来这里确认它存不存在。（[Markdown](avelino__awesome-go.md) / [HTML](avelino__awesome-go.html)）
- **Asymptote-Labs/agent-beacon** · 🌟🌟🌟🌟 4.0 — 把二十多个 agent 工具的会话历史收进一本账，提炼成下次能直接用的经验。（[Markdown](Asymptote-Labs__agent-beacon.md) / [HTML](Asymptote-Labs__agent-beacon.html)）
- **aquasecurity/trivy** · 🌟🌟🌟🌟 4.0 — 一个二进制扫全部：镜像、仓库、IaC、密钥、SBOM，塞进 CI 不拖慢构建。（[Markdown](aquasecurity__trivy.md) / [HTML](aquasecurity__trivy.html)）

## 数据 / 数据库

- **shy3130/tick-stock-panel** · 🌟🌟🌟🌟🌗 4.5 — 自托管的 A 股量化工作台：策略、回测、监控共用一份数据口径，回测与实盘走同一条代码路径。（[Markdown](shy3130__tick-stock-panel.md) / [HTML](shy3130__tick-stock-panel.html)）
- **2giosangmitom/sqmeow.nvim** · 🌟🌟🌗 2.5 — 查一行数据不该离开编辑器——把 SQL、NoSQL 与分析库都塞进 Neovim 的缓冲区。（[Markdown](2giosangmitom__sqmeow.nvim.md) / [HTML](2giosangmitom__sqmeow.nvim.html)）
- **masumedb/masume** · 🌟🌟 2.0 — 键盘优先的终端数据库客户端，AI 对话与 MCP 服务器都做进同一个二进制。（[Markdown](masumedb__masume.md) / [HTML](masumedb__masume.html)）
- **yimindev/dati** · 🌟🌗 1.5 — 不让 agent 直连数据库，而是给它一组带语义、带权限的工具。（[Markdown](yimindev__dati.md) / [HTML](yimindev__dati.html)）
- **Sheltercosmo/jev4pg** · 🌟 1.0 — 把语义算子做成 PostgreSQL 扩展：自然语言查询直接在库里跑，不搬数据。（[Markdown](Sheltercosmo__jev4pg.md) / [HTML](Sheltercosmo__jev4pg.html)）

## 开发工具 / 效率

- **lexifina/global-law** · 🌟🌟🌟🌟🌗 4.5 — 每个司法辖区的法律是一个 git 仓库，每次提交是一部生效的法——于是任意日期的条文都能查、能 blame。（[Markdown](lexifina__global-law.md) / [HTML](lexifina__global-law.html)）
- **ivankovic/omnidiff** · 🌟🌟🌟🌟 4.0 — 不按行切、按内容选算法——重构和格式化不再把 diff 变成一整片红绿。（[Markdown](ivankovic__omnidiff.md) / [HTML](ivankovic__omnidiff.html)）
- **KKKKhazix/agent-autoloop** · 🌟🌟🌟🌟 4.0 — Agent 干完一轮就退出，等你拍板期间不占进程、不烧 token。（[Markdown](KKKKhazix__agent-autoloop.md) / [HTML](KKKKhazix__agent-autoloop.html)）
- **Aryanutkarsh/SeeCode** · 🌟🌟🌟🌗 3.5 — 一句描述变一个可走查的动画图，而不是一张要人脑补的静态截图。（[Markdown](Aryanutkarsh__SeeCode.md) / [HTML](Aryanutkarsh__SeeCode.html)）
- **audacity/audacity** · 🌟🌟🌟🌗 3.5 — 免费音频编辑的事实标准，正在整体重写 UI——所以 master 现在不好碰。（[Markdown](audacity__audacity.md) / [HTML](audacity__audacity.html)）

## 移动 / 桌面 / 跨端

- **onevcat/Kingfisher** · 🌟🌟🌟🌟🌗 4.5 — 图片加载这件事，平台原生只给了一半——另一半是缓存策略、取消与并发。（[Markdown](onevcat__Kingfisher.md) / [HTML](onevcat__Kingfisher.html)）
- **herdrdev/herdr-app** · 🌟🌟🌟🌟 4.0 — 窗口只负责排列，core 负责运行——关掉界面，终端和 agent 继续干活。（[Markdown](herdrdev__herdr-app.md) / [HTML](herdrdev__herdr-app.html)）
- **OpenSelena/omniget** · 🌟🌟🌟🌟 4.0 — 把 yt-dlp 的能力包成桌面 GUI，再顺手塞进半个媒体工具箱。（[Markdown](OpenSelena__omniget.md) / [HTML](OpenSelena__omniget.html)）
- **bggRGjQaUbCoE/PiliPlus** · 🌟🌟🌟🌟 4.0 — 官方客户端没做的长尾功能，被一个 Flutter 项目一次性补齐了。（[Markdown](bggRGjQaUbCoE__PiliPlus.md) / [HTML](bggRGjQaUbCoE__PiliPlus.html)）
- **skylot/jadx** · 🌟🌟🌟🌟 4.0 — dex 到 Java 源码的还原器，Android 逆向与安全审计的起点工具。（[Markdown](skylot__jadx.md) / [HTML](skylot__jadx.html)）
