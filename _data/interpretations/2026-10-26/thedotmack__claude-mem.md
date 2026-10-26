---
date: 2026-10-26
repo: thedotmack/claude-mem
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: TypeScript
stars: 103258
starGain: 301
url: https://github.com/thedotmack/claude-mem
tags: [ai, ai-agents, ai-memory, anthropic, artificial-intelligence, chromadb, claude, claude-agent-sdk]
generatedAt: 2026-10-26T11:59:07.500Z
---

# thedotmack/claude-mem · 项目解读

> **一句话**：把 agent 的会话历史压缩成可检索的记忆，跨会话自动注入。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 103,258 |
| 今日新增 | +301 |
| 仓库 | https://github.com/thedotmack/claude-mem |

## 1. 它解决什么问题

coding agent 每次开新会话都是失忆的：上周为什么这么改、当时否掉了哪些方案，全部丢失。claude-mem 在会话中捕获动作与结论，用 AI 压缩成结构化记忆，再在后续会话按需注入，并提供检索工具按项目历史查询。

## 2. 为什么是现在

今日 +301 星。上下文管理已经是 agent 工程的主战场：谁决定「注入什么、注入多少」，谁就决定了成本与效果。这个项目把「渐进式披露」和 token 成本可见做成显式功能，正好对应这个痛点。

## 3. 关键能力

- 会话捕获 + AI 压缩：把一段会话压成结构化记忆条目
- 渐进式披露：分层检索，token 成本可见，避免一次性塞满上下文
- MCP 搜索工具与三步 mem-search 技能，可按项目历史做查询
- My Work 本地面板：实时请求、进度、人工交接与待复核队列
- TeamBrain（可选）：团队共享工作区，带成员归属与关联发现
- 隐私控制：用标签把敏感内容排除在存储之外

## 4. 架构与实现

TypeScript 实现，依赖里出现 chromadb（向量检索），上层通过 MCP 暴露搜索能力，可对接 Claude Code、Codex、Gemini、Copilot、OpenCode 等多个 harness；README 含 Architecture / How It Works / Configuration 章节，说明有明确的压缩与注入分层。

## 5. 上手路径

1. 按 Quick Start 装好后先在一个小项目上跑一天，观察注入内容是否真的有用
2. 打开 token 成本可见，量化「记忆带来的输入 token 增量」与「重复解释的减少」
3. 用标签把密钥、客户数据等敏感路径排除，再考虑开 TeamBrain

## 6. 风险与边界

- 记忆注入会持续抬高每轮输入 token，收益需要按项目量化，否则是净亏损
- 把会话内容（可能含代码与密钥片段）落盘并送模型压缩，数据边界必须提前划定
- 103,258 星 / 421 天仓龄仍是偏高的增速，星标来源建议交叉验证

## 7. 谁该用 / 谁别碰

适合长期在同一代码库上跑 agent 的团队，尤其是多人协作、需要交接上下文的场景；一次性脚本任务用不上，反而是负担。

## 8. 评分依据

热度增速 **87** · 社区规模 **94** · 更新活跃 **70** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：解决的是真问题（跨会话上下文），机制也说得清（压缩 + 分层检索 + 成本可见）；决策点是你能不能接受会话内容被持久化并送模型处理。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
