---
date: 2026-11-03
repo: mvschwarz/openrig
category: tools
categoryLabel: 开发工具 / 效率
rating: 3.5
language: TypeScript
stars: 8561
starGain: 19
url: https://github.com/mvschwarz/openrig
tags: [agent-harness, agent-orchestration, agent-skills, ai-coding, claude-code, cli, codex-cli, multi-agent]
generatedAt: 2026-11-03T01:45:02.177Z
---

# mvschwarz/openrig · 项目解读

> **一句话**：harness 包住模型，rig 包住你的 harness——用一份 YAML 定义一支常驻的 agent 团队。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 8,561 |
| 今日新增 | +19 |
| 仓库 | https://github.com/mvschwarz/openrig |

## 1. 它解决什么问题

同时用 Claude Code 和 Codex 的人，实际工作状态是一堆并行的终端会话：这个窗口在改前端，那个在跑测试，第三个卡在等确认。上下文散落在各自的会话里，谁也说不清「这个仓库现在有哪些活在进行、谁负责哪块、哪件事在等我决策」。会话结束，组织记忆也就没了。openrig 想解决的是这层编排问题：把 agent 从「一次性终端」变成有角色、有归属、有共享上下文的常驻团队。

## 2. 为什么是现在

216 天、8,561 星、单日 +19。增量不大，但方向落在本期最热的那条线上——AI 类前两名（agent-desktop、OmniRoute）解决的是「agent 能操作什么」，openrig 解决的是「多个 agent 如何组织」。作者是 Michael Schwarz（Spectre/Rowhammer 研究者），README 直言它是「个人 AI 文明实验」背后的系统，这个来源解释了它为什么强调常驻团队与地址稳定性而非单次任务效率。

## 3. 关键能力

- 用 YAML 定义 agent 团队：角色、职责与团队成员结构
- 一条命令启动整个 rig，Claude Code 与 Codex 可同处一个 rig 内统一管理
- 面向 lead agent 下达业务目标，由它协调跨团队专家并回收结果
- 团队工作与上下文保持在固定地址，会话之间可延续，而非每次从零开始
- 把需要人决策的事项单独呈报，而不是让 agent 自行猜测
- Apache-2.0 开源

## 4. 架构与实现

分层抽象很清晰：harness 包住单个模型/CLI（Claude Code、Codex 各是一个 harness），rig 包住多个 harness，形成一个被统一调度的系统。YAML 声明团队拓扑，运行时维护每个角色的持久上下文与工作地址，lead agent 作为编排入口做任务分派与结果汇总。这种「声明式拓扑 + 常驻上下文」的设计，本质上是把多 agent 协作从临时脚本升级为可版本化的组织结构——代价是调度层的复杂度，以及上下文持久化带来的状态管理负担。

## 5. 上手路径

1. 从一个仓库 + 一个具体改动开始，不要一上来就定义五六个角色——拓扑复杂度会先于收益到来
2. 先跑通单一 harness，再混入第二个（Claude Code + Codex），跨 harness 的一致性是主要坑点
3. 把 YAML 团队定义纳入版本库，拓扑变更要像代码一样可回溯
4. 关注上下文持久化的存储位置与体积增长，常驻团队会持续累积状态

## 6. 风险与边界

- 多 agent 编排的调试成本高，出问题难以定位是哪个角色、哪次分派导致
- 常驻上下文持续增长，可能带来成本与一致性双重压力
- 跨 harness（Claude Code / Codex）行为差异会让统一调度出现意外分支
- 8,561 星但日增仅 +19，说明热度已过峰值，需关注维护节奏
- 编排层一旦成为唯一入口，会形成对特定 CLI 工具链的深度绑定

## 7. 谁该用 / 谁别碰

同时使用多个编码 agent 的重度开发者、需要把 agent 工作流纳入团队协作规范的技术负责人、以及研究多 agent 组织的实践者。

## 8. 评分依据

热度增速 **57** · 社区规模 **74** · 更新活跃 **71** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：抽象层级选得准——不是再做一个 agent，而是定义 agent 之间怎么组织。这是当前最缺的一层。但要清醒：多 agent 编排的收益高度依赖任务可分解性，硬套在紧耦合的工程任务上，协调成本会超过收益。先用它管「并行可行」的活。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-03 · 依据仓库 README 与 GitHub 元数据</sub>
