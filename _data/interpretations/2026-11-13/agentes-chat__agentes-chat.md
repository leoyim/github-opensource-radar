---
date: 2026-11-13
repo: agentes-chat/agentes-chat
category: ai
categoryLabel: AI / 大模型
rating: 4
language: TypeScript
stars: 1186
starGain: null
url: https://github.com/agentes-chat/agentes-chat
tags: [agentic-ai, ai-agents, browser-automation, chat, claude, claude-code, codex, collaboration]
generatedAt: 2026-11-13T02:11:25.742Z
---

# agentes-chat/agentes-chat · 项目解读

> **一句话**：把 AI agent 当成频道里的正式成员：有角色、有预算、有审批，人和 agent 在同一段对话里交接工作。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 1,186 |
| 今日新增 | — |
| 仓库 | https://github.com/agentes-chat/agentes-chat |

## 1. 它解决什么问题

多数团队把 AI 助手做成侧边栏或一次性调用，工作过程对同事不可见，合并、部署这类敏感动作也缺少统一的确认点。缺的是一个以对话为主界面、能记录每个 agent 做了什么、并在关键动作前把人放回环路的协作环境。

## 2. 为什么是现在

4 天新仓即达 1,186 星、185 fork 与 146 个 issue，是本期最年轻也最活跃的项目之一。它与 codex-security、modern-web-guidance 同属「为 agent 定义组织方式」这条线，只是把边界落在团队沟通与审批上。

## 3. 关键能力

- agent 以成员身份加入频道与 DM，带角色、owner 与预算；读频道内容、在自己该答的时候回答，并与人来回交接
- 合并、部署及连接器标记为敏感的动作在聊天中等待人工批准；每次模型调用按 agent 记录预算消耗
- agent 有自己的电脑与可观察、可接管的浏览器，支持 MCP 工具、定时或事件触发的 routines 与记忆
- 模型可选 Claude、ChatGPT/Codex、Gemini、Grok 或任意 OpenRouter 模型，自带密钥即可运行
- 一条命令在 Linux 服务器上自托管，Postgres 为唯一依赖；Web、桌面与手机客户端连同一服务，云端与自托管共用同一代码库

## 4. 架构与实现

TypeScript 单仓，服务端以 Postgres 为持久化依赖，Docker Compose 一键部署；客户端覆盖 Web、桌面与手机。agent 运行时包含计算机与浏览器隔离环境，审批、预算与调用记录都落在会话层。AGPL-3.0 许可，README 给出 Quick start、Features 与 Community 章节。

## 5. 上手路径

1. 在可控的 Linux 主机上按 Quick start 用 Docker Compose 起服务，先只配一个模型和少量测试频道
2. 为每个 agent 设定角色、owner 与预算上限，明确哪些连接器动作必须走审批
3. 把 agent 的浏览器与电脑限制在隔离网络，不导入生产凭据
4. 用一个需要人工批准的小任务验证审批链与调用记录，再逐步扩大权限

## 6. 风险与边界

- 4 天新仓、146 个 issue，功能与 API 变动会很快，升级前需看变更记录
- AGPL-3.0 对服务化与二次分发有较强要求，商业化集成前应评估许可影响
- 给 agent 配电脑与浏览器会显著扩大可触达面，网络与凭据隔离必须由部署方负责
- 审批与预算是产品层约束，不构成安全边界，敏感操作仍需在下游系统单独设限
- 自托管要自行维护 Postgres、密钥与客户端版本一致性

## 7. 谁该用 / 谁别碰

希望把 agent 纳入日常协作、并且需要审批留痕与自托管的团队；以及研究多 agent 与人类混合工作流的产品与工程人员。只需临时问答、无需审计链路的个人使用场景偏重。

## 8. 评分依据

热度增速 **88** · 社区规模 **58** · 更新活跃 **89** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把 agent 从「工具」提升为「组织成员」，角色、预算、审批与可见的工作过程构成一套可审计的协作模型，敏感动作在对话里等人点头是其中最实际的设计。代价是 AGPL 许可、自托管运维，以及给 agent 开放电脑与浏览器后必须自行承担的隔离责任。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-13 · 依据仓库 README 与 GitHub 元数据</sub>
