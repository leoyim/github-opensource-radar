---
date: 2026-11-23
repo: tigerless-labs/autoharness
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: Python
stars: 11167
starGain: null
url: https://github.com/tigerless-labs/autoharness
tags: [agent-skills, claude-code, claude-code-plugin, llm-agents, python]
generatedAt: 2026-11-23T01:39:14.447Z
---

# tigerless-labs/autoharness · 项目解读

> **一句话**：让 agent 自己长出技能层：从真实会话里学，不用了就剪掉。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Python |
| 星标 | 11,167 |
| 今日新增 | — |
| 仓库 | https://github.com/tigerless-labs/autoharness |

## 1. 它解决什么问题

同一个模型换一套 harness，任务通过率能差出一倍，但 harness 往往每一代模型都要人工重搭。技能包越积越多、近似重复互相干扰，维护成本最终落在少数人身上。

## 2. 为什么是现在

本期 11,167 星，Python 3.11+，MIT。README 给出同一模型在 CORE-Bench 上 42% → 78% 的对照，且明确只维护「自己写过的技能」，不碰人工技能——这种边界设计在同类里少见。

## 3. 关键能力

- 从真实会话中提炼技能，而不是让人预先编写
- 同场景技能合并去重，避免近似条目互相稀释
- 在使用中持续更新技能内容
- 自动剪除长期未被调用的技能，保持技能层干净
- 以 Claude Code 插件形式分发，作用域限定在自身写入项

## 4. 架构与实现

Python 侧负责会话采集、技能抽取与生命周期管理，通过 Claude Code 的插件机制挂载技能；技能以文件形式落盘，合并与剪枝基于使用统计，属于「运行时自我维护」而非离线训练。

## 5. 上手路径

1. 以插件方式装到 Claude Code，先在一两个日常仓库上跑一周
2. 打开技能目录观察生成物，确认没有把一次性操作固化成技能
3. 用同一批任务做前后对照，看通过率提升是否来自技能而非偶然
4. 团队使用时约定技能审核节奏，避免错误经验被长期复用

## 6. 风险与边界

- 自动提炼可能把偶发成功固化成通用技能，需要人工抽查
- 基准提升来自特定任务集与模型版本，换环境未必复现
- 仅支持 Claude Code 宿主，换 agent 需另行适配
- 技能层长期演化后可能出现难以追溯的行为变化

## 7. 谁该用 / 谁别碰

长期使用编码 agent、且愿意投入时间做技能治理的个人与团队；不适合刚接触 agent、还没有稳定工作流的场景。

## 8. 评分依据

热度增速 **97** · 社区规模 **76** · 更新活跃 **9** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把 harness 里最容易被手工重复的那一层交给系统自维护，赌的是技能可以像缓存一样自动收敛；收益取决于你是否愿意定期审计它的产出。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-23 · 依据仓库 README 与 GitHub 元数据</sub>
