---
date: 2026-11-09
repo: microsoft/TokenEconomizer
category: ai
categoryLabel: AI / 大模型
rating: 4
language: Python
stars: 5287
starGain: 328
url: https://github.com/microsoft/TokenEconomizer
tags: [agentic-ai, agentic-coding, ai-coding, ai-coding-assistant, anthropic, artificial-intelligence, claude-code, codex]
generatedAt: 2026-11-09T02:01:02.679Z
---

# microsoft/TokenEconomizer · 项目解读

> **一句话**：不改代理、不换模型，靠复用同一仓库的历史会话把编码代理的运行成本压下来。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Python |
| 星标 | 5,287 |
| 今日新增 | +328 |
| 仓库 | https://github.com/microsoft/TokenEconomizer |

## 1. 它解决什么问题

编码代理在熟悉的仓库里反复跑会话时，会把同一批工具定义、同一段仓库结构知识一次次重新读进上下文；卡住的回合还会不断重试。多数缓存命中并不等于成本按缓存价计，于是「越用越贵、且贵的部分与任务产出无关」。要做的是把这些重复消耗识别出来并可逆地去掉，同时不伤害任务成功率。

## 2. 为什么是现在

项目仅 27 天、5,287 星，本期 +328，是本期最年轻的显著增量项目之一，且带完整的论文式 README（作者来自 UC Berkeley、微软研究院与微软安全部门）。它给出的不是定性主张而是测量结果：在 SWE-Bench 任务上五种代理—模型组合平均成本降低 18.4%–30.9%，30 个仓库×组合单元全部更便宜，Pass@1 在五组中四组上升。这类「把成本控制做成可复现实验」的工作，正对应代理从试用走向长期运行的阶段。

## 3. 关键能力

- micro-skills：从既有会话中形成并记住仓库的工作方式，避免每次会话重新发现同一事实
- tool pruning：识别长期未使用的工具，停止把其定义随每次请求一并送入上下文
- loop guard：在单个回合卡住时介入，打断失败循环
- 按实际计费口径核算成本，明确区分缓存重读与全新输入
- 事实只从重复证据中形成、工具仅在充分证据后移除，被后续会话反驳的事实会被丢弃
- 所有动作可回滚；附 Reproducing the experiments 章节，结果可自行复算

## 4. 架构与实现

Python 实现、Apache-2.0 许可，以插件／技能形式作用于既有编码代理，不替换代理本体。README 章节包括 Results、How it works、Quick start、Install、Supported versions、Everyday commands、Settings、What it does on each agent、When a turn gets stuck、Repository、Reproducing the experiments、Citation、License，说明它同时是工具与可复现研究。关键取舍是「经验驱动、黑盒」：只观察会话与计费，不要求改代理内部；代价是效果依赖同一仓库确实反复出现，并注明 Codex 0.141.0 之前完全不运行插件钩子。

## 5. 上手路径

1. 先读 Results 与 Supported versions，确认所用代理与版本在支持范围内
2. 按 Install 与 Quick start 在单个常用仓库启用，保留一个未启用的对照会话
3. 用 Everyday commands 与 Settings 观察哪些工具被剪除、哪些事实被写入
4. 对照 What it does on each agent 判断行为差异，必要时按可逆原则回退后再扩大范围

## 6. 风险与边界

- 收益来自同一仓库的重复会话，冷启动或一次性任务上可能不明显甚至多出开销
- 工具剪除与事实沉淀会改变代理行为，需在关键任务上对照验证结果一致性
- 版本兼容性是硬约束，README 已注明低版本 Codex 不运行插件钩子
- README 中的降本比例来自特定任务与模型组合，迁移到自有工作负载时应自行复现测量

## 7. 谁该用 / 谁别碰

长期在固定几个仓库里跑编码代理、且对调用成本敏感的团队与个人；也适合想复现「代理成本控制」实验的研究者。若只是偶尔让代理改一次代码，或代理版本不在支持列表内，当前收益有限。

## 8. 评分依据

热度增速 **95** · 社区规模 **69** · 更新活跃 **63** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把降本做成「从经验里学、且每一步可撤销」的工程机制，比单纯压缩上下文更稳妥，附带的复现章节也让结论可被检验。它的适用面有明确边界：仓库越固定、会话越重复，效果越明显。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-09 · 依据仓库 README 与 GitHub 元数据</sub>
