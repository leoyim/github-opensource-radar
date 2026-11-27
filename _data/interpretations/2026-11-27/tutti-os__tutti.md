---
date: 2026-11-27
repo: tutti-os/tutti
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: TypeScript
stars: 3972
starGain: null
url: https://github.com/tutti-os/tutti
tags: [agent-collaboration, agent-orchestration, agent-workspace, agentic-ai, agentic-workflow, ai-agents, ai-tools, ai-workspace]
generatedAt: 2026-11-27T01:52:46.331Z
---

# tutti-os/tutti · 项目解读

> **一句话**：把「多个 agent 并行」的协作面做出来，上下文变成可 @ 的对象。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 3,972 |
| 今日新增 | — |
| 仓库 | https://github.com/tutti-os/tutti |

## 1. 它解决什么问题

同时用几个 agent 时，真正的损耗不在模型能力，而在上下文搬运：同一个需求要在 Codex、Claude Code 与自己的笔记之间反复复制，每个新会话都从零开始。

## 2. 为什么是现在

168 天、3,972 星、380 fork，TypeScript、Apache-2.0。定位是多人、多 agent 的实时协作空间，Codex 里可 @ 过往对话、文件、应用调用与任务，减少重复粘贴与上传。

## 3. 关键能力

- 多 agent 同屏协作：Codex、Claude Code、Canvas 等并行工作
- 上下文寻址：@ 过往对话、文件、应用调用与任务，而非复制粘贴
- 多人共享同一工作面，适合结对与评审
- 跨会话记忆：新任务可引用旧会话的结论与产物
- 开源可自托管（Apache-2.0）

## 4. 架构与实现

TypeScript 全栈，前端为实时协作工作面，后端维护会话、文件与调用记录作为可引用对象；多用户并发意味着需要处理权限与冲突，这部分是它相对单机 agent 客户端的额外复杂度。

## 5. 上手路径

1. 先用两个 agent 做一个可并行的任务（一个写、一个审），观察上下文是否真的不用手搬
2. 把一次历史会话 @ 进新任务，确认引用的是结论而非全量日志
3. 多人试用时先明确文件所有权，避免并发写入互相覆盖
4. 评估自托管成本：实时协作对延迟敏感，部署位置影响体验

## 6. 风险与边界

- 168 天的新项目，多用户权限与冲突合并仍是难点
- README 偏愿景，实际会话模型与持久化深度需自行验证
- 上下文引用若无裁剪，长会话会迅速吃满模型窗口
- 自托管实时协作对网络与部署有要求，非开箱即用

## 7. 谁该用 / 谁别碰

同时使用多个编码 agent 的开发者；需要让 agent 参与团队协作而非个人独用的团队。

## 8. 评分依据

热度增速 **88** · 社区规模 **68** · 更新活跃 **55** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：方向判断准确：agent 协作的瓶颈在上下文流转，而非模型数量。但「实时协作 + 多 agent」是两份复杂度叠加，产品成熟度会明显慢于单机工具，适合作为探索性试点而非关键路径。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-27 · 依据仓库 README 与 GitHub 元数据</sub>
