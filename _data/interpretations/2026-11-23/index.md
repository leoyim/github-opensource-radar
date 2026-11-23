# 2026-11-23 · 逐项解读目录

本期共 18 个项目，独立解读 18 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **18 项、6 个方向：本期重心是「验证」而非「生成」**：本期 18 项分布在 ai 4 / agent 4 / frontend 2 / backend 2 / data 2 / mobile 4。AI 与 agent 合计 8 席，其中没有一项在训练新模型：utopia 处理知识的时间语义，bend 用证明约束生成结果，autoharness 维护技能层，open-connector 收拢权限接入，codegraph 提供代码上下文，fast-anything 把热点函数局部替换。另一条线索更直接——renderlint 在渲染层查像素缺陷，mobile-agent-testers 用 agent 做探索式测试，fast-anything 用录制回放证明等价。当生成变得廉价，瓶颈就移到「怎么确认它对」。
- **agent 宿主层分出四条路线，且都不在模型侧**：技能层：autoharness 让技能自己生长、合并与剪枝，只维护自己写过的部分，把 harness 里最易手工重复的一层交给系统。工具层：fast-anything 把「重写成 Rust」拆成定位热点、局部移植、回放验证三步，用 FFI 换性能。接入层：open-connector 用统一目录收拢上千个 SaaS 的 OAuth 与 Action，一次授权处处可用。上下文层：codegraph 预建代码图谱，减少 agent 的读文件轮次。四者共同点是都不碰权重，只改 agent 的工作条件。
- **「证明」开始出现在常规工程流程里**：bend 把定律与证明放进语言本身，主张当人不再逐行读代码时，规格必须可被机械校验；它给出与 C、CUDA 的性能目标与对照基准，也给出与 Lean、Agda 的检查器对比。这条路线短期内不会进入业务开发，但它回答了本期最现实的问题：agent 生成的实现，凭什么让人相信。相对温和的版本是 fast-anything 的录制回放——不做形式化证明，只用真实调用样本证明行为一致。
- **本地优先与自托管在四个方向同时出现**：maya 把 700B 级模型压进 8 GB 显存，用分层调度替代云端算力；dbdelve 用 Rust 与 GPUI 换掉 Electron 与 JVM，让百万行结果集可滚动；databasify 把 RDS 那套托管能力搬回自有机器，含自动故障切换与时间点恢复；cindy 让 agent 跟着人走，会话与文件在设备间同源。四者的共同前提是硬件与带宽已经够用，剩下的是工程取舍：显存、内存、运维责任与凭证暴露面。
- **移动端两条相反路径：一个把测试搬进 CI，一个把数据留在本机**：mobile-agent-testers 把 20 台模拟设备与 20 个 agent 放在 GitHub 免费 runner 上并行，用人物画像矩阵（设备、语言、字号、RTL）替代脚本矩阵，成本按模型调用计。mural 走的是反面：不做账号体系，自带 API key 直连模型，学习记录只存本机并允许导出 JSON。前者把不确定性交给算力摊平，后者把信任交回使用者，同一方向下两种完全不同的成本结构。
- **data 方向只剩两席，但两席都在做「客户端与自托管」**：本期数据库方向入选 dbdelve（原生客户端）与 databasify（自托管 DBaaS），都不是引擎本身。这与前几期数据方向偏弱但内容务实的走向一致：新引擎的窗口期已过，增量集中在「怎么用得更省、更可控」。另需注意 3 项千天级老项目（nginx 4,171 天、awesome-mac 3,780 天、bend 1,181 天）与 4 项 30 天内新仓（fast-anything 1 天、mobile-agent-testers 6 天、databasify 17 天、renderlint 28 天）同台，年龄跨度超过两个数量级。

## AI / 大模型

- **deeplethe/utopia** · 🌟🌟🌟🌟🌗 4.5 — 把「时间」和「本体」放进知识底座的公司级世界模型。（[Markdown](deeplethe__utopia.md) / [HTML](deeplethe__utopia.html)）
- **mw00/project-maya** · 🌟🌟🌟🌟 4.0 — 在 8 GB 显存的单机上跑 700B 级模型的本地推理台。（[Markdown](mw00__project-maya.md) / [HTML](mw00__project-maya.html)）
- **jiwoochris/artex-global** · 🌟🌟🌟🌗 3.5 — 多 agent 自主渗透测试框架的国际化版本，把授权边界写在最前面。（[Markdown](jiwoochris__artex-global.md) / [HTML](jiwoochris__artex-global.html)）
- **bendlang/bend** · 🌟🌟🌟🌗 3.5 — 给「人不再读代码」的时代准备的语言：用定律表达意图，用证明校验实现。（[Markdown](bendlang__bend.md) / [HTML](bendlang__bend.html)）

## SKILL / MCP / Agent

- **tigerless-labs/autoharness** · 🌟🌟🌟🌟 4.0 — 让 agent 自己长出技能层：从真实会话里学，不用了就剪掉。（[Markdown](tigerless-labs__autoharness.md) / [HTML](tigerless-labs__autoharness.html)）
- **EL4CTEO/fast-anything** · 🌟🌟🌟🌟 4.0 — 不重写整个项目，只把最慢的 5% 换成 Rust。（[Markdown](EL4CTEO__fast-anything.md) / [HTML](EL4CTEO__fast-anything.html)）
- **oomol-lab/open-connector** · 🌟🌟🌟🌟 4.0 — 给 agent 用的连接网关：一次授权，把上千个 SaaS 能力变成可调用目录。（[Markdown](oomol-lab__open-connector.md) / [HTML](oomol-lab__open-connector.html)）
- **colbymchenry/codegraph** · 🌟🌟🌟🌟 4.0 — 给编码 agent 的预索引代码图谱：少读文件，少调工具，全程本地。（[Markdown](colbymchenry__codegraph.md) / [HTML](colbymchenry__codegraph.html)）

## 前端 / Web

- **ngocanhnckh/renderlint** · 🌟🌟🌟🌟 4.0 — 渲染后的 UI 才有的缺陷，交给会开浏览器的 linter。（[Markdown](ngocanhnckh__renderlint.md) / [HTML](ngocanhnckh__renderlint.html)）
- **devswha/ovis** · 🌟🌟🌟🌗 3.5 — 把电脑上的编码 agent 接到手机：远程看终端、点一下就能回话。（[Markdown](devswha__ovis.md) / [HTML](devswha__ovis.html)）

## 后端 / 云原生

- **nginx/nginx** · 🌟🌟🌟🌟 4.0 — NGINX 开源版的官方源码仓库，长期由同一批人维护。（[Markdown](nginx__nginx.md) / [HTML](nginx__nginx.html)）
- **rasonyang/ai-native-callcenter** · 🌟🌟🌟🌗 3.5 — AI 先接电话，人只处理需要人的那部分。（[Markdown](rasonyang__ai-native-callcenter.md) / [HTML](rasonyang__ai-native-callcenter.html)）

## 数据 / 数据库

- **ShayanAbbas1/dbdelve** · 🌟🌟🌟🌟 4.0 — 用 Rust 与 GPUI 写的原生数据库客户端，专治百万行滚动。（[Markdown](ShayanAbbas1__dbdelve.md) / [HTML](ShayanAbbas1__dbdelve.html)）
- **databasifylabs/databasify** · 🌟🌟🌟🌗 3.5 — 自托管的 DBaaS：把 RDS 那套能力搬回自己的机器。（[Markdown](databasifylabs__databasify.md) / [HTML](databasifylabs__databasify.html)）

## 移动 / 桌面 / 跨端

- **pierridotite/mobile-agent-testers** · 🌟🌟🌟🌟 4.0 — 20 个 AI 测试员，20 台模拟手机，在 GitHub 免费 runner 上并行跑。（[Markdown](pierridotite__mobile-agent-testers.md) / [HTML](pierridotite__mobile-agent-testers.html)）
- **Chuloo/mural** · 🌟🌟🌟🌟 4.0 — 一个用对话学语言的 iPhone 应用，数据留在本机。（[Markdown](Chuloo__mural.md) / [HTML](Chuloo__mural.html)）
- **jaywcjlove/awesome-mac** · 🌟🌟🌟🌟 4.0 — macOS 优质软件的分类索引，靠社区长期维护。（[Markdown](jaywcjlove__awesome-mac.md) / [HTML](jaywcjlove__awesome-mac.html)）
- **makecindy/cindy** · 🌟🌟🌟🌟 4.0 — 跨设备的开源 agent 客户端：电脑与手机共用同一段工作。（[Markdown](makecindy__cindy.md) / [HTML](makecindy__cindy.html)）
