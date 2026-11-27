# 2026-11-27 · 逐项解读目录

本期共 21 个项目，独立解读 21 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **21 项、6 个方向：主线是「换掉底下那一层」**：本期 21 项分布在 ai 4 / agent 4 / frontend 4 / backend 3 / data 2 / mobile 4。最清楚的一条线是改写底层换取可行性：llm.asm 用 17,252 行汇编重写推理与裸机系统，openset-llm 重写算子与内存布局把 27B 压进 8 GB，blaze 换掉代码生成后端把增量构建拉快一个量级，d2r-mobile 与 NX2Apple 则放弃 CPU 模拟、改重写平台服务层。副线是 agent 的交付物工件化：hyperframes 把视频变成确定性 MP4，archify 把解释变成单文件 HTML，dms 把后台页面写成仓库里的 TypeScript，beads 把任务清单换成依赖图。前者在换硬件假设，后者在换交付形态。
- **日增：12 项有可比基线合计 +2,297，前四占八成**：本期 12 项有可比日增，合计约 +2,297：hyperframes +707、archify +663 合计已占 59.6%，SideInstaller +292、FlClash +242 紧随，四者合计 82.9%；其后 blaze +161、NX2Apple +85、beads +59、mygo +54、dossier +12、dbeaver +9、intrinsic-core +8、Deskland +5。头部两项都是「把某种内容生产变成可编程格式」的工具，不是一个模型或框架；另有 9 项因缺可比快照只给结构口径，不宜与上述数字相加。
- **语言与许可：TypeScript 6 席，强 copyleft 3 项**：21 项的语言分布为 TypeScript 6、Rust 2、C++ 2、Swift 2、Go 2，Assembly、C、Dart、HTML、Java、JavaScript、Python 各 1。许可侧 MIT 8 项、Apache-2.0 7 项，强 copyleft 3 项（FlClash 与 Deskland 为 GPL-3.0、dossier 为 AGPL-3.0，占 14%），SideInstaller 的许可未标准化。值得注意的是三项 copyleft 都落在「替代商业产品」的位置上：代理客户端、桌面美化、求职工具。
- **年龄跨度从 2 天到 11 年，中位 61 天**：dbeaver 已维护 4,055 天、FlClash 1,200 天，另一端是 llm.asm 2 天、KuroCat 5 天、openset-llm 14 天，全期中位 61 天。老项目的共性是把边界守住——dbeaver 只做客户端与驱动覆盖，FlClash 只做内核之上的那一层；新项目的共性是切口极窄但深度大——2 天写 17,252 行汇编，14 天把 27B 压进 8 GB。这个对照对选型有直接意义：要长期依赖看边界，要短期见效看切口。
- **移动端四条是同一件事：把别处的资产搬到手机上**：移动方向本期 4 席，路径高度一致——KuroCat 把桌面桌宠搬到 Android，d2r-mobile 把 Switch 版游戏搬到 iOS / Android / 鸿蒙，SideInstaller 把电脑上的 sideload 流程搬进手机，NX2Apple 把 Switch 游戏打包成共享壳应用。共同技术判断是「不模拟硬件、只补平台服务」，共同风险也一致：授权边界与系统策略。这条线值得连续观察，因为它正在把「能不能跑」的问题转成「允不允许跑」的问题。
- **数据方向两端分布：11 年的客户端与 55 星的新项目同台**：数据方向仅 2 席，却是本期反差最大的一组：dbeaver 以 350+ 驱动覆盖与 11 年维护构成不可替代性，dms 只有 55 星、71 天，卖点是让 agent 把后台页面写进你的仓库。一端靠广度与时间积累，一端靠流程重构；中间地带——通用 BI 与可视化平台——本期没有条目。这也提示该方向的供给正在往两端走：要么做别人不愿重复做的兼容层，要么做还没人做过的生成流程。

## AI / 大模型

- **modelflare-ai/AnyModelBot** · 🌟🌟🌟🌟 4.0 — 把「一支 agent 团队」装进桌面应用，用权限分档和本地凭据换取可控性。（[Markdown](modelflare-ai__AnyModelBot.md) / [HTML](modelflare-ai__AnyModelBot.html)）
- **alesha-pro/llm.asm** · 🌟🌟🌟🌟 4.0 — 用 17,252 行纯汇编把推理、裸机系统与训练器各重写一遍，零依赖是唯一目标。（[Markdown](alesha-pro__llm.asm.md) / [HTML](alesha-pro__llm.asm.html)）
- **opensetlabs/openset-llm** · 🌟🌟🌟🌟 4.0 — 把 27B 模型塞进 8 GB 内存的普通 CPU，用重写底层换掉显存这道门槛。（[Markdown](opensetlabs__openset-llm.md) / [HTML](opensetlabs__openset-llm.html)）
- **Pinvou/pinvou-agent** · 🌟🌟🌟🌟 4.0 — 以工件为中心的桌面 agent：结果不是一段回答，而是面板里可继续编辑的文件。（[Markdown](Pinvou__pinvou-agent.md) / [HTML](Pinvou__pinvou-agent.html)）

## SKILL / MCP / Agent

- **heygen-com/hyperframes** · 🌟🌟🌟🌟🌗 4.5 — 把视频变成可编译的 HTML：同输入同帧同输出，才谈得上进 CI。（[Markdown](heygen-com__hyperframes.md) / [HTML](heygen-com__hyperframes.html)）
- **tt-a1i/archify** · 🌟🌟🌟🌟🌗 4.5 — 把「解释一件事」做成一种可交付格式：结论先行、图能点、论断有出处。（[Markdown](tt-a1i__archify.md) / [HTML](tt-a1i__archify.html)）
- **tutti-os/tutti** · 🌟🌟🌟🌟 4.0 — 把「多个 agent 并行」的协作面做出来，上下文变成可 @ 的对象。（[Markdown](tutti-os__tutti.md) / [HTML](tutti-os__tutti.html)）
- **gastownhall/beads** · 🌟🌟🌟🌟 4.0 — 把 agent 的任务清单从 markdown 换成依赖图，让「现在能做什么」成为可计算的结果。（[Markdown](gastownhall__beads.md) / [HTML](gastownhall__beads.html)）

## 前端 / Web

- **egoist/mygo** · 🌟🌟🌟🌟 4.0 — 用 Go 写桌面应用，窗口级别选择 webview 还是原生绘制，且不需要 cgo。（[Markdown](egoist__mygo.md) / [HTML](egoist__mygo.html)）
- **deeplethe/solid-glass** · 🌟🌟🌟🌗 3.5 — 在扁平与液态玻璃之间取一个可读的中间态：只透轮廓，不透过背景。（[Markdown](deeplethe__solid-glass.md) / [HTML](deeplethe__solid-glass.html)）
- **AienTech/dossier** · 🌟🌟🌟🌗 3.5 — 自托管求职工作台：只用档案里的事实生成简历，把编造这个风险从流程里删掉。（[Markdown](AienTech__dossier.md) / [HTML](AienTech__dossier.html)）
- **BLEZZ0102/Deskland** · 🌟🌟🌟 3.0 — 让壁纸跟着图标走：读的是布局，改的是场景几何，而不是换一张图。（[Markdown](BLEZZ0102__Deskland.md) / [HTML](BLEZZ0102__Deskland.html)）

## 后端 / 云原生

- **chen08209/FlClash** · 🌟🌟🌟🌟🌗 4.5 — 内核来自社区，价值在把多平台客户端缺的那一层补齐。（[Markdown](chen08209__FlClash.md) / [HTML](chen08209__FlClash.html)）
- **indexable-inc/blaze** · 🌟🌟🌟🌟 4.0 — 不改造 cargo，直接换掉编译后端：增量构建的量级差来自 JIT。（[Markdown](indexable-inc__blaze.md) / [HTML](indexable-inc__blaze.html)）
- **intrinsic-ai/intrinsic-core** · 🌟🌟🌟🌗 3.5 — 把工业机器人的集成工作产品化：预配置运行时加统一硬件抽象层。（[Markdown](intrinsic-ai__intrinsic-core.md) / [HTML](intrinsic-ai__intrinsic-core.html)）

## 数据 / 数据库

- **dbeaver/dbeaver** · 🌟🌟🌟🌟🌗 4.5 — 11 年积累的护城河不是界面，而是 350 多个驱动的覆盖。（[Markdown](dbeaver__dbeaver.md) / [HTML](dbeaver__dbeaver.html)）
- **AntelopeJS/dms** · 🌟🌟🌟🌗 3.5 — 后台页面由 agent 写进你的仓库：先对样稿，再一次性生成 TypeScript。（[Markdown](AntelopeJS__dms.md) / [HTML](AntelopeJS__dms.html)）

## 移动 / 桌面 / 跨端

- **qianyiai/KuroCat** · 🌟🌟🌟🌟🌗 4.5 — 一个桌宠同时跑四类系统，还能当 OBS 透明源与 MCP 客户端。（[Markdown](qianyiai__KuroCat.md) / [HTML](qianyiai__KuroCat.html)）
- **jhaizhou-ops/d2r-mobile** · 🌟🌟🌟🌟 4.0 — 不做 CPU 模拟，只重写平台服务层——因为 iPhone 与 Switch 同属 ARM。（[Markdown](jhaizhou-ops__d2r-mobile.md) / [HTML](jhaizhou-ops__d2r-mobile.html)）
- **FrizzleM/SideInstaller** · 🌟🌟🌟🌟 4.0 — 把 sideload 必须插电脑这一步去掉：配对与签名都在手机上完成。（[Markdown](FrizzleM__SideInstaller.md) / [HTML](FrizzleM__SideInstaller.html)）
- **LNPANDY/NX2Apple** · 🌟🌟🌟🌟 4.0 — 不模拟硬件，直接把游戏打包进共享壳应用，用热加载减少重装。（[Markdown](LNPANDY__NX2Apple.md) / [HTML](LNPANDY__NX2Apple.html)）
