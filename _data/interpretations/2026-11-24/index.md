# 2026-11-24 · 逐项解读目录

本期共 21 个项目，独立解读 21 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **21 项、7 个方向：主线是「绕过模拟层，直接下沉一层」**：本期 21 项分布在 ai 4 / agent 4 / frontend 4 / backend 1 / data 1 / tools 3 / mobile 4（总量按合成分截取，6 项出局）。跨方向看，最集中的技术选择不是「加一层抽象」，而是「把某一层替换掉」：unkernel 不做全系统模拟，把 Linux 内核本身编译成 wasm，只让用户态走解释；xcl 放弃 CPU 模拟，工作量压到主机系统库与着色器重编译两条线；rustyfiles 不用系统复制 API，自研引擎把小文件复制提到约 14 倍；torrentplayer 不靠带宽堆体验，改按播放位置调度分片；smolmaxxing 不在内存里装模型，让权重从 flash 流式读取。五个项目的共同判断是：通用层已经够快，真正的损耗在具体那一处瓶颈上。
- **日增分布平缓：10 项有可比基线，合计 +781，无单项断层**：本期只有 10 项有可比日增（其余 11 项为速度口径或无基线），合计 +781，前五为 Panache +262、ego-lite +150、folkbench +108、agentscope +76、sherpa-onnx +70。与 11-04、11-12 那种单项占全榜近半的结构不同，本期没有断层项目——最高的 Panache 也只占 34%。这种分布通常意味着热度来自多个独立的小圈子，而非一次集中传播；代价是榜单缺少「当期主线」，读者看到的是一组各自成立的选择。
- **agent 四项都在解决「agent 在哪里工作」，没有一项在训模型**：ego-lite 把隔离单位从进程改成同一浏览器内的 Space，让 agent 与人共用一个登录态但互不打断；DS-Bot 把多 bot 的长期存活与消息路由放进宿主层，而不是在应用层拼装；agentscope 2.0 直接撤掉严格 prompt 与固定编排，把控制权交回模型，框架只保留边界与追踪；safe-anything 则把 agent 的配置文件本身列为扫描对象。四条路径分别对应工作空间、宿主、框架、审计面，共同点是都不碰权重——这一轮 agent 的竞争点已经从「模型能力」转到「模型在哪里、以什么权限、被什么约束地工作」。
- **5 项千天级与 7 项 30 天内同台，新老项目的日增差了两个数量级**：老项目一侧是 ImageMagick（4,208 天，+11）、zephyr（3,833 天，+7）、carla（3,318 天，+16）、sherpa-onnx（1,545 天，+70）、agentscope（1,047 天，+76）；新仓一侧是 safe-anything（1 天）、xcl（3 天）、unkernel（11 天）、rustyfiles（16 天）、smolmaxxing（20 天）、kubai-icons（21 天）、hatamoto（28 天）。老项目的日增是个位数到两位数，新仓动辄三位数——这既是存量与增量的必然差异，也提醒读者：日增榜单衡量的是注意力迁移速度，不是工程质量。老项目能留在榜上，靠的是「至今没有替代者」这一事实。
- **backend 与 data 各剩 1 席，但两份内容都是真问题**：本期 backend 只有 Panache 一项（Flutter + Rust 的手写排版工具，按方向归入后端偏牵强），data 只有 moraine 一项 42 星。表面看是两类塌陷，但 moraine 解决的问题很具体：DuckLake 的目录要放在 SQL 数据库里，于是「无服务器数据湖」始终差一个必须托管的服务；它用落在对象存储里的嵌入式事务 KV 承接目录，让目录与数据同桶。这说明 data 方向的问题不在候选质量，而在候选池宽度——能进入「日增前 22」的数据项目本就稀少。把这两类的弱势直接读成「该领域没有进展」，是误判。
- **4 项强 copyleft 许可，且都指向「可替代桌面/基础设施产品」**：本期 21 项里有 4 项采用强 copyleft：unkernel 与 xcl 为 GPL-2.0，flowplan 与 Panache 为 AGPL-3.0，占 19%，明显高于往期。这四项的共同点是都在替代一个商业产品——完整 Linux 环境、主机游戏运行时、Notion/Confluence、商业排版工具——许可选择与「防止被闭源二次分发」的意图高度一致。对使用方而言这是硬约束：嵌入闭源产品前必须逐项确认分发方式，AGPL 还要考虑服务化场景。把它们当工具用没问题，当组件用要先把许可算进成本。

## AI / 大模型

- **hyperionaidev/smolmaxxing** · 🌟🌟🌟🌟 4.0 — 把「这台旧设备到底能跑多大的模型」逐台测成一张对照表。（[Markdown](hyperionaidev__smolmaxxing.md) / [HTML](hyperionaidev__smolmaxxing.html)）
- **Folkbench/folkbench** · 🌟🌟🌟🌗 3.5 — 把「AI API 中转站」当可比对象做横向评测，并附一套自查口径与切换工具。（[Markdown](Folkbench__folkbench.md) / [HTML](Folkbench__folkbench.html)）
- **SWE-agent/mini-swe-agent** · 🌟🌟🌟🌗 3.5 — 用约 100 行 Python 复现「能解 GitHub issue」的编码 agent，作为复杂度的下限基线。（[Markdown](SWE-agent__mini-swe-agent.md) / [HTML](SWE-agent__mini-swe-agent.html)）
- **carla-simulator/carla** · 🌟🌟🌟🌗 3.5 — 自动驾驶研究的开源仿真器：开放城市资产、可配置传感器、可复现场景。（[Markdown](carla-simulator__carla.md) / [HTML](carla-simulator__carla.html)）

## SKILL / MCP / Agent

- **Fei-Craft/DS-Bot** · 🌟🌟🌟🌟🌗 4.5 — 把 DeepSeek Harness 变成一群可长期存活的 bot，有主从、有群聊。（[Markdown](Fei-Craft__DS-Bot.md) / [HTML](Fei-Craft__DS-Bot.html)）
- **citrolabs/ego-lite** · 🌟🌟🌟🌟 4.0 — 给 agent 单独开工作空间的浏览器：同一实例内，人和 agent 各用各的 Space。（[Markdown](citrolabs__ego-lite.md) / [HTML](citrolabs__ego-lite.html)）
- **agentscope-ai/agentscope** · 🌟🌟🌟🌟 4.0 — 面向「越来越像 agent 的模型」重写的生产级框架：撤掉 prompt 约束，只留边界与可观测。（[Markdown](agentscope-ai__agentscope.md) / [HTML](agentscope-ai__agentscope.html)）
- **erkamyaman/safe-anything** · 🌟🌟🌟🌗 3.5 — 一条命令扫代码、密钥、依赖与 agent 配置的 Rust 扫描器。（[Markdown](erkamyaman__safe-anything.md) / [HTML](erkamyaman__safe-anything.html)）

## 前端 / Web

- **AhmadHassan-BTed/Jantt** · 🌟🌟🌟🌟 4.0 — 声明式 JSON 驱动的甘特图引擎，AI 只负责生成数据，不直接画图。（[Markdown](AhmadHassan-BTed__Jantt.md) / [HTML](AhmadHassan-BTed__Jantt.html)）
- **kubai087/kubai-icons** · 🌟🌟🌟🌟 4.0 — 把「图标该长什么样」写成 agent 可执行的规则与自检回路，再附 2,800+ 成品。（[Markdown](kubai087__kubai-icons.md) / [HTML](kubai087__kubai-icons.html)）
- **Zen-Labs-Corp/hatamoto** · 🌟🌟🌟🌗 3.5 — 一个 Go 二进制扛下 CMS 的全部内建能力，插件换成签名的 WebAssembly。（[Markdown](Zen-Labs-Corp__hatamoto.md) / [HTML](Zen-Labs-Corp__hatamoto.html)）
- **yannicschuller/flowplan** · 🌟🌟🌟🌗 3.5 — 一个容器 + SQLite 起步的团队知识库，功能面覆盖到白板、手写与 flashcards。（[Markdown](yannicschuller__flowplan.md) / [HTML](yannicschuller__flowplan.html)）

## 后端 / 云原生

- **SXP-Simon/Panache** · 🌟🌟🌟🌟 4.0 — 把手写体当排版问题解决：文本、公式、表格、电路图都排到纸上。（[Markdown](SXP-Simon__Panache.md) / [HTML](SXP-Simon__Panache.html)）

## 数据 / 数据库

- **morainedb/moraine** · 🌟🌟🌟 3.0 — 让 DuckLake 的目录也住进对象存储，彻底去掉那个「还得起的库」。（[Markdown](morainedb__moraine.md) / [HTML](morainedb__moraine.html)）

## 开发工具 / 效率

- **pithings/unkernel** · 🌟🌟🌟🌟 4.0 — 不做全系统模拟：把 Linux 内核自己编译成 wasm，只把用户态交给解释器。（[Markdown](pithings__unkernel.md) / [HTML](pithings__unkernel.html)）
- **ImageMagick/ImageMagick** · 🌟🌟🌟🌗 3.5 — 二十年不变的图像处理底座：批处理场景下几乎不用选型。（[Markdown](ImageMagick__ImageMagick.md) / [HTML](ImageMagick__ImageMagick.html)）
- **zephyrproject-rtos/zephyr** · 🌟🌟🌟🌗 3.5 — 面向资源受限设备的多架构 RTOS：把「可移植」做成构建系统级能力。（[Markdown](zephyrproject-rtos__zephyr.md) / [HTML](zephyrproject-rtos__zephyr.html)）

## 移动 / 桌面 / 跨端

- **ivall/xcl** · 🌟🌟🌟🌟🌗 4.5 — 在 Windows 上原生跑 Xbox Series 游戏：不做 CPU 模拟，只替换系统库与着色器。（[Markdown](ivall__xcl.md) / [HTML](ivall__xcl.html)）
- **torrentplayer/torrentplayer** · 🌟🌟🌟🌟 4.0 — 把种子当流媒体：秒开、秒跳，不起服务端、不留遥测。（[Markdown](torrentplayer__torrentplayer.md) / [HTML](torrentplayer__torrentplayer.html)）
- **gelenmedya/rustyfiles** · 🌟🌟🌟🌟 4.0 — 用 Rust 重写文件管理器，核心主张只有一条：主线程永不阻塞。（[Markdown](gelenmedya__rustyfiles.md) / [HTML](gelenmedya__rustyfiles.html)）
- **k2-fsa/sherpa-onnx** · 🌟🌟🌟🌟 4.0 — 离线语音全家桶：一套 C++ 覆盖十余项任务，落到 NPU 与鸿蒙。（[Markdown](k2-fsa__sherpa-onnx.md) / [HTML](k2-fsa__sherpa-onnx.html)）
