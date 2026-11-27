---
date: 2026-11-27
repo: gastownhall/beads
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: Go
stars: 29131
starGain: 59
url: https://github.com/gastownhall/beads
tags: [agents, claude-code, coding]
generatedAt: 2026-11-27T01:52:46.331Z
---

# gastownhall/beads · 项目解读

> **一句话**：把 agent 的任务清单从 markdown 换成依赖图，让「现在能做什么」成为可计算的结果。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Go |
| 星标 | 29,131 |
| 今日新增 | +59 |
| 仓库 | https://github.com/gastownhall/beads |

## 1. 它解决什么问题

用 markdown TODO 管长任务，问题不在记录而在语义：清单没有依赖关系，agent 无法判断哪一项已解锁，于是要么重复劳动，要么在阻塞项上空转，上下文一长就丢线索。

## 2. 为什么是现在

411 天、29,131 星、1,962 fork、日增 +59，Go、MIT。核心是 Dolt 支撑的分布式图 issue 追踪器：bd create 建节点、bd ready 认领可做的工作、bd update --claim 声明、bd close 关闭并释放下游阻塞。

## 3. 关键能力

- 依赖感知：图结构决定哪些任务已就绪，bd ready 直接给出可认领项
- Dolt 支撑：单元级合并、原生分支、内置远程同步
- 多机多 agent 共享同一任务图，push / pull 即同步
- agent 优化输出：JSON 格式、自动就绪检测，便于程序消费
- bd remember 存项目级事实，与操作者偏好分开管理
- 明确反对用 markdown TODO 做任务追踪

## 4. 架构与实现

Go 单二进制 CLI，状态落在 Dolt 数据库（版本化 SQL，支持单元级合并），因此任务图本身可分支、可合并、可回滚；同步走 Dolt remote，不依赖自建服务端，多机之间是对等关系。

## 5. 上手路径

1. 在一个已有项目上先只建三五个带依赖的节点，跑 bd ready 看顺序是否符合预期
2. 先用 bd prime 拿到工作流上下文，避免凭记忆猜命令
3. 接第二个 agent 前先验证 push / pull 的冲突合并行为
4. 项目级事实用 bd remember，操作习惯留在宿主 agent 自己的记忆里

## 6. 风险与边界

- 引入额外数据库与一套新命令习惯，小项目可能得不偿失
- 多 agent 并发认领依赖 Dolt 的合并语义，冲突处理需实际演练
- 29,131 星体量下，CLI 行为随版本变化会影响自动化脚本
- 图的维护成本高于清单，节点粒度设计不当会变成负担

## 7. 谁该用 / 谁别碰

用编码 agent 跑长任务的团队；需要多个 agent 或多个开发者共享同一份任务状态的项目。

## 8. 评分依据

热度增速 **63** · 社区规模 **84** · 更新活跃 **80** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把「任务」建模成带依赖的图，是对 agent 长任务管理最直接的一次纠偏：可认领性由结构决定，而不是靠提示词提醒。代价是要接受一个数据库与一套新习惯，适合任务复杂度确实高的项目。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-27 · 依据仓库 README 与 GitHub 元数据</sub>
