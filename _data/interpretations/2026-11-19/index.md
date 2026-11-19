# 2026-11-19 · 逐项解读目录

本期共 19 个项目，独立解读 19 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **19 项、7 个方向，但分布明显偏向「能力怎么被交付」**：本期 19 项里 AI 4 席、Agent 4 席，合计占 42%；前端 4 席、跨端 4 席，而后端、数据、工具各只有 1 席。把 AI 与 Agent 这 8 项串起来的不是模型能力，而是交付形态：t3code 统一驱动本机已有的 coding agent，last30days-skill 把多平台检索编排成一份简报，stitch-skills 把设计往返拆成技能包，SkillEvaluator 给技能做质量门禁，aoci-code 把代码库地图版本化，book-to-skill 把文档编译成按需加载的技能。真正落在模型层本身的只有 minimind（从零训练）与 transformers（模型定义框架）两项。
- **「技能包」成了本期最密集的能力载体，还长出了配套工具链**：last30days-skill、stitch-skills、book-to-skill 直接以 Agent Skills 形式分发，NVIDIA/SkillEvaluator 是给技能做评测与 CI 门禁的，aoci-code 用技能之外的 MCP server 提供长期上下文，kelivo 把 skills 列为客户端的一等能力，连 solid 都在 npm 包里附带 SKILL.md 与 CHEATSHEET.md 防止 AI 按 1.x 旧 API 生成代码。规范、流程与领域知识被打包成可安装、可增删、可跨宿主复用的单元，并且已经有评估、索引、转换三类配套设施——这比「又多了一个 agent 框架」更接近日常工程。
- **宿主兼容性被写进 README 的第一屏**：t3code 列了 Claude Code、Codex、Cursor、OpenCode、Grok Build、Antigravity、Kiro、Pi、Muse Code、fx 与任意 ACP agent；last30days-skill、stitch-skills、book-to-skill 都给出面向 50+ 宿主的 npx skills / marketplace 安装路径；SkillEvaluator 的 Harness Check 专门预判各宿主是否会加载技能；aoci-code 与 CubeSandbox 也都点名 Claude Code、Codex、Cursor、OpenCode。一个能力要被多少宿主认出来，已经和它做什么同等重要；由此带来的命名规则、目录位置、描述长度差异，也成了这些项目文档里的常备章节。
- **七项年龄超过 1,000 天，靠版本治理与文档覆盖留在榜上**：jquery 6,438 天、nvm 6,061 天、storybook 3,898 天、solid 3,130 天、transformers 2,942 天、Ventoy 2,444 天、harper 1,124 天。它们的看点几乎都不在新特性：jQuery 4.0 之后明确 4.x 完整支持、3.x 仅关键更新、1.x/2.x 停止支持，并把模块裁剪与 ESM 构建讲透；Solid 2.0 重构 monorepo 与公开 API，配迁移指南和给 AI 看的技能文件；nvm 用数十节文档覆盖 Docker、CI、WSL、Alpine、离线安装与深度 shell 集成；transformers 明确自己是生态复用的模型定义层。与之对照，≤10 天的新仓只有 db-branch 与 snug 两项。
- **一条跨六个项目的暗线：把执行边界划在自己能核对的地方**：CubeSandbox 用 KVM MicroVM 给每个沙箱独占内核，并让凭据走保险箱而不进沙箱；db-branch 用 ZFS clone 让 agent 在独立数据库分支上跑危险迁移，生产数据不动；cua 把登录会话加密留在本机 Keyvault、需批准才下发到 Space；harper 以完全离线作为架构前提；kelivo 不设自有账号体系，会话、设置与文件全本地；snug 只改被控 Mac 的显示层配置，不碰远程协议。形式各异，指向同一件事：agent 能力越强，越需要一层可核对、可回滚、不越界的本地边界。
- **跨端四项走出四条互不相同的技术路线**：cua 在 VM 与桌面池层供给完整桌面，snug 在显示与手势层补移动端体验，Ventoy 在引导层解决多系统启动，kelivo 在应用层用 Flutter 一套代码覆盖五端。它们分别对应「给 agent 一台电脑」「让手机像手机一样操作 Mac」「让一块 U 盘装下所有镜像」「让模型与工具在同一客户端里跨端可用」。同一期出现四种层次完全不同的解法，说明跨端已经没有默认答案，选哪层取决于你愿意改动栈里的哪一层。
- **热度口径不齐，不宜把 19 项简单相加**：18 项有可比的增量数值、1 项为无基线的新仓，且增量本身混用三种口径：trending 当日涨星、较上一快照的差值、以及按速度估算的 velocity，直接求和会失真。单看 trending 口径，t3code +1,220 与 last30days-skill +1,059 断层领先，minimind +687 次之；快照差值口径里 snug +463、aoci-code +279、book-to-skill +108 属同一类；而 jQuery +266、nvm +237、transformers +205 这类老牌项目的当日增量，更多反映长期稳定关注而非新范式。读榜时按方向结构与技术路线看，比按单一热度排序更有信息量。

## AI / 大模型

- **pingdotgg/t3code** · 🌟🌟🌟🌟🌗 4.5 — 把本机所有 coding agent 收进一个界面，电脑起任务、手机批下一步。（[Markdown](pingdotgg__t3code.md) / [HTML](pingdotgg__t3code.html)）
- **mvanhorn/last30days-skill** · 🌟🌟🌟🌟🌗 4.5 — 用「近 30 天真实互动」而非编辑推荐来排序信息，再把多平台结果合成一份简报。（[Markdown](mvanhorn__last30days-skill.md) / [HTML](mvanhorn__last30days-skill.html)）
- **jingyaogong/minimind** · 🌟🌟🌟🌟🌗 4.5 — 两小时、几块钱，从零把一个 64M 语言模型连同全阶段训练代码跑通。（[Markdown](jingyaogong__minimind.md) / [HTML](jingyaogong__minimind.html)）
- **huggingface/transformers** · 🌟🌟🌟🌟🌗 4.5 — 把「模型定义」收敛成生态共同遵循的一层，训练与推理框架都围着它转。（[Markdown](huggingface__transformers.md) / [HTML](huggingface__transformers.html)）

## SKILL / MCP / Agent

- **google-labs-code/stitch-skills** · 🌟🌟🌟🌟 4.0 — 把「设计稿 ↔ 代码」的往返做成一组遵循开放标准的技能包，交给任意 coding agent 调用。（[Markdown](google-labs-code__stitch-skills.md) / [HTML](google-labs-code__stitch-skills.html)）
- **NVIDIA/SkillEvaluator** · 🌟🌟🌟🌟 4.0 — 给技能包做体检：静态规则先过一遍，再实跑对比「有它 / 没它」的差别。（[Markdown](NVIDIA__SkillEvaluator.md) / [HTML](NVIDIA__SkillEvaluator.html)）
- **aoci-spec/aoci-code** · 🌟🌟🌟🌟 4.0 — 给代码库建一份随 Git 版本化的持久地图，让 agent 开工前先读它，而不是每次重扫仓库。（[Markdown](aoci-spec__aoci-code.md) / [HTML](aoci-spec__aoci-code.html)）
- **virgiliojr94/book-to-skill** · 🌟🌟🌟🌟 4.0 — 把一本技术书编译成按需加载的技能包，问答只读相关章节，不必把整本书塞进上下文。（[Markdown](virgiliojr94__book-to-skill.md) / [HTML](virgiliojr94__book-to-skill.html)）

## 前端 / Web

- **jquery/jquery** · 🌟🌟🌟🌟🌗 4.5 — 6,438 天的老牌库，本期看点是 4.0 之后的版本治理与模块裁剪能力。（[Markdown](jquery__jquery.md) / [HTML](jquery__jquery.html)）
- **solidjs/solid** · 🌟🌟🌟🌟 4.0 — 不用虚拟 DOM，编译期把 JSX 变成真实 DOM 操作，状态变化只重跑依赖它的那一个表达式。（[Markdown](solidjs__solid.md) / [HTML](solidjs__solid.html)）
- **Automattic/harper** · 🌟🌟🌟🌟 4.0 — 离线、隐私优先的英文语法检查器，用 Rust 把延迟和内存都压下来。（[Markdown](Automattic__harper.md) / [HTML](Automattic__harper.html)）
- **storybookjs/storybook** · 🌟🌟🌟🌟 4.0 — 把组件在接入真实页面之前的构建、文档与测试，收敛进一个隔离工作台。（[Markdown](storybookjs__storybook.md) / [HTML](storybookjs__storybook.html)）

## 后端 / 云原生

- **TencentCloud/CubeSandbox** · 🌟🌟🌟🌟 4.0 — 基于 RustVMM 与 KVM 的硬件隔离沙箱，把 agent 执行不可信代码的边界做实。（[Markdown](TencentCloud__CubeSandbox.md) / [HTML](TencentCloud__CubeSandbox.html)）

## 数据 / 数据库

- **db-branch/db-branch** · 🌟🌟🌟🌗 3.5 — 用 ZFS clone 给数据库开分支，创建时零字节复制，还能让 agent 自己开分支跑危险迁移。（[Markdown](db-branch__db-branch.md) / [HTML](db-branch__db-branch.html)）

## 开发工具 / 效率

- **nvm-sh/nvm** · 🌟🌟🌟🌟🌗 4.5 — 6,061 天的 Node 版本管理器，靠文档覆盖度而不是新特性留在榜上。（[Markdown](nvm-sh__nvm.md) / [HTML](nvm-sh__nvm.html)）

## 移动 / 桌面 / 跨端

- **trycua/cua** · 🌟🌟🌟🌟🌗 4.5 — 把「给 agent 一台真电脑」拆成桌面、驱动、虚拟机与评测四层。（[Markdown](trycua__cua.md) / [HTML](trycua__cua.html)）
- **zephyr4123/snug** · 🌟🌟🌟🌟 4.0 — 不改造远程协议，而是给被控 Mac 多开一块「比例正好」的屏幕。（[Markdown](zephyr4123__snug.md) / [HTML](zephyr4123__snug.html)）
- **ventoy/Ventoy** · 🌟🌟🌟🌟 4.0 — 一次装好 U 盘，之后只拷镜像文件，启动时用菜单选要启哪一个。（[Markdown](ventoy__Ventoy.md) / [HTML](ventoy__Ventoy.html)）
- **Chevey339/kelivo** · 🌟🌟🌟🌟 4.0 — 把多模型、MCP、skills 与工作区塞进一个本地优先的跨端客户端。（[Markdown](Chevey339__kelivo.md) / [HTML](Chevey339__kelivo.html)）
