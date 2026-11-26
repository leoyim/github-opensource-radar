# 2026-11-26 · 逐项解读目录

本期共 18 个项目，独立解读 18 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **18 项、7 个方向：主线是「推理下沉一层」与「技能变成工程件」**：本期 18 项分布在 ai 4 / agent 4 / frontend 4 / backend 1 / data 1 / tools 1 / mobile 3。两条线最清楚：一是推理下沉——TrnRT 把 decode 写成半层粒度的 NKI 内核跑在 Trainium 上，PolyStrata 用两套引擎把十四个模型塞进 8 GB 显卡的笔记本，Rig 则把终端 agent 直接架在自己的 Rust 库上；二是技能工程化——gamedev-skills 用路由在 12 个引擎间按任务挑技能并锁版本，emilkowalski/skills 把界面判断写成可评审的清单，ste80-humanizer 用受控英语约束句长。前者在换硬件，后者在换交付形态。
- **日增：11 项有可比基线合计约 +1,180，头部不再是单点应用**：本期 11 项有可比日增，合计约 +1,180：gamedev-skills +491 占四成，emilkowalski/skills +298、prism-download-manager +197、munder-difflin +72、word-atlas +47、PolyStrata +44、mason-data +17、workbench +16、rig +14、RetroArch +9、Zephium +5。头部是「技能包」与「工具」，而不是某个模型或框架；这与 11-25 期头部集中在单一项目（ECC +675 占四成）不同，说明关注点在分散而非聚拢。
- **推理侧三种角色：换硬件、换引擎、换抽象层**：同一天出现三个不同层次的推理项目并不常见。TrnRT 换的是硬件与内核粒度：把 decode 合并成半层一个内核，用等价性校验证明正确性；PolyStrata 换的是引擎分工：承认不同模型对显存的要求不同，用两套后端各管一半；Rig 换的是抽象层：把二十余家 provider 收敛成一套接口，让 agent 成为库的第一个消费者。三者对「推理」的理解分别是算子、调度与接口——评估时不应放在同一张跑分表上比较。
- **agent 方向的四席都不做模型：约束的是上下文、判断与状态**：agent 四项的分工很整齐：gamedev-skills 约束上下文——按任务挑两三份技能，不一次全塞；emilkowalski/skills 约束判断——把「agent 会犯的具体错误」列成清单；ste80-humanizer 约束输出形态——用受控英语的句长与单义规则重建句子；munder-difflin 约束状态——记忆与任务都是可打开的文件，编排者统一分派。四项都不碰权重，全部注意力在 agent 工作的边界条件上，与 11-24、11-25 两期的观察方向一致。
- **data 只剩一席，但这席把「精确」当成了硬约束**：本期 data 方向只有 mason-data 一项（72 星、60 issue）。它的设计选择值得单独说：收到查询先由真实 Postgres 解析，再改写成 DuckDB 的等价形式执行，无法保证等价的查询直接报错并说明原因，而不是返回近似值。这与常见的「加速但可能偏差」路线相反，把口径可信度放在了性能之前；代价是重写器的能力边界会以「被拒绝的查询」形式暴露，早期项目这一点会更明显。
- **三个长期项目与三个新仓同台：年龄跨度从 4 天到 16 年**：RetroArch 已维护约十六年半（14,707 星、2,972 issue），Rig 903 天，emilkowalski/skills 254 天；另一端是 kurocat 4 天、obsidian-prism 9 天、workbench 20 天。老项目的共同点是边界稳定——RetroArch 只做前端与 ABI、Rig 只做库与插件边界；新项目的共同点是切口锐利但覆盖面窄——kurocat 靠 MCP 做角色扩展，obsidian-prism 只服务一个宿主编辑器。这个对照对选型有直接意义：要长期依赖看边界，要快速见效看切口。

## AI / 大模型

- **spinabot/brigade** · 🌟🌟🌟🌟 4.0 — 自带凭证复用与公网暴露能力的 agent 运行时，把「能用」和「被陌生人打」放在同一套工具里。（[Markdown](spinabot__brigade.md) / [HTML](spinabot__brigade.html)）
- **RunanywhereAI/trnrt** · 🌟🌟🌟🌟 4.0 — AWS Trainium 上的开源推理引擎：把 decode 写成 NKI megakernel，单机对外提供 OpenAI 兼容接口。（[Markdown](RunanywhereAI__trnrt.md) / [HTML](RunanywhereAI__trnrt.html)）
- **simplexai-labs/PolyStrata** · 🌟🌟🌟🌗 3.5 — 十四个模型跑在两套引擎上：把大模型塞进 8 GB 显卡笔记本的本地推理套件。（[Markdown](simplexai-labs__PolyStrata.md) / [HTML](simplexai-labs__PolyStrata.html)）
- **0xPlaygrounds/rig** · 🌟🌟🌟🌗 3.5 — 库与 agent 同源的 Rust LLM 底座：工具、会话、登录、终端视图都是可替换的插件。（[Markdown](0xPlaygrounds__rig.md) / [HTML](0xPlaygrounds__rig.html)）

## SKILL / MCP / Agent

- **gamedev-skills/awesome-gamedev-agent-skills** · 🌟🌟🌟🌟 4.0 — 79 个技能加一个路由：让编码 agent 在 12 个游戏引擎上写对的代码。（[Markdown](gamedev-skills__awesome-gamedev-agent-skills.md) / [HTML](gamedev-skills__awesome-gamedev-agent-skills.html)）
- **Dodaios/ste80-humanizer** · 🌟🌟🌟🌟 4.0 — 两遍改写：先清掉 AI 写作的 26 类痕迹，再用航空手册的受控英语重建句子。（[Markdown](Dodaios__ste80-humanizer.md) / [HTML](Dodaios__ste80-humanizer.html)）
- **emilkowalski/skills** · 🌟🌟🌟🌗 3.5 — 把「界面品味」写成可加载的技能：agent 会犯的动效与视觉错误逐条列出并给出修正。（[Markdown](emilkowalski__skills.md) / [HTML](emilkowalski__skills.html)）
- **HarnessMD/munder-difflin** · 🌟🌟🌟🌗 3.5 — 把多 agent 做成一层办公室：十二种引擎同室工作，记忆与任务都是可打开的文件。（[Markdown](HarnessMD__munder-difflin.md) / [HTML](HarnessMD__munder-difflin.html)）

## 前端 / Web

- **xmwengxing/CFPilot** · 🌟🌟🌟🌟 4.0 — 控制面与数据面分离的 Cloudflare 代理方案：面板跑 Pages，转发跑 Pages 或 Workers。（[Markdown](xmwengxing__CFPilot.md) / [HTML](xmwengxing__CFPilot.html)）
- **libretro/RetroArch** · 🌟🌟🌟🌟 4.0 — 十六年的参考前端：把模拟器统一成动态库，前端只管音视频、输入与生命周期。（[Markdown](libretro__RetroArch.md) / [HTML](libretro__RetroArch.html)）
- **designfuchen/word-atlas** · 🌟🌟🌟🌗 3.5 — 7,298 个雅思词条配原创插画与双语音频，连数据集一起开源。（[Markdown](designfuchen__word-atlas.md) / [HTML](designfuchen__word-atlas.html)）
- **zephium-browser/Zephium** · 🌟🌟🌟🌗 3.5 — 浏览器加一块画布：agent 的工作结果以表格、图表、图示留在 Work 上，而不是聊天记录里。（[Markdown](zephium-browser__Zephium.md) / [HTML](zephium-browser__Zephium.html)）

## 后端 / 云原生

- **talgent-work/workbench** · 🌟🌟🌟 3.0 — 整套控制面自托管的 agent 平台：每个 Work 一个沙箱，会话、文件与遥测都留在自己的集群。（[Markdown](talgent-work__workbench.md) / [HTML](talgent-work__workbench.html)）

## 数据 / 数据库

- **embeddable-hq/mason-data** · 🌟🌟🌟 3.0 — 用 DuckDB 顶替 Postgres 只读副本：SQL 不改、答案不改，算不精确就报错。（[Markdown](embeddable-hq__mason-data.md) / [HTML](embeddable-hq__mason-data.html)）

## 开发工具 / 效率

- **RMvdesi/obsidian-prism** · 🌟🌟🌟🌟 4.0 — 把上下文用量做成界面上的试管：给 Antigravity 加一层看得见配额的光学外壳。（[Markdown](RMvdesi__obsidian-prism.md) / [HTML](RMvdesi__obsidian-prism.html)）

## 移动 / 桌面 / 跨端

- **alejandrobujan/tendedero** · 🌟🌟🌟🌟 4.0 — 挂在菜单栏下的一条线：截图与剪贴板按时间挂上去，悬停滑下、移开收回。（[Markdown](alejandrobujan__tendedero.md) / [HTML](alejandrobujan__tendedero.html)）
- **qianyiai/kurocat** · 🌟🌟🌟🌟 4.0 — Tauri v2 写的桌面打字猫：六款皮肤、密码遮挡，还内置 MCP 让 AI 生成新角色。（[Markdown](qianyiai__kurocat.md) / [HTML](qianyiai__kurocat.html)）
- **FortoGraphy/prism-download-manager** · 🌟🌟🌟🌟 4.0 — 32 路并行、崩溃可续、直写最终文件的开源下载器。（[Markdown](FortoGraphy__prism-download-manager.md) / [HTML](FortoGraphy__prism-download-manager.html)）
