---
date: 2026-11-11
repo: backnotprop/plannotator
category: tools
categoryLabel: 开发工具 / 效率
rating: 3.5
language: TypeScript
stars: 10009
starGain: 51
url: https://github.com/backnotprop/plannotator
tags: [agents, claude-code, code-review, codex, obsidian, opencode, pi-mono, plan-mode]
generatedAt: 2026-11-11T03:04:52.682Z
---

# backnotprop/plannotator · 项目解读

> **一句话**：给编码 agent 做审阅的本地浏览器工作区：批注计划、标 HTML、评审 diff，反馈一键送回 agent。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 10,009 |
| 今日新增 | +51 |
| 仓库 | https://github.com/backnotprop/plannotator |

## 1. 它解决什么问题

agent 在终端里连续输出计划与代码，人只能被动地看着，想指出「第三段的假设不成立」却没有地方落笔；把意见打字回聊天框，又丢掉了行号与上下文，下一轮 agent 往往改错位置。

## 2. 为什么是现在

318 天、10,009 星、758 fork、147 个 open issue，说明它已被相当规模的用户当作日常工作流的一环。它支持 Claude Code、Codex、Copilot CLI、Gemini CLI、OpenCode、Kiro、Droid、Amp 等十余种 agent，通过各自的 hooks 与命令接入——这种「贴着现有工具接」而非「要求你换 agent」的策略，是它能扩散开的原因。

## 3. 关键能力

- 审阅计划、规格、Markdown、消息与 HTML 产物，逐处批注后把反馈送回 agent
- 代码评审：本地改动与远程 PR，在 diff 上留评论并给出修改建议
- 内置 AI：可就正在审阅的内容提问，或发起 AI 评审直接把评论贴到 diff
- Plannotator Inbox：多 agent 的消息、问题、文件与引导式审阅汇总在一个本地窗口，点选即回
- 支持 Git、GitButler、Jujutsu（jj）、Perforce、GitHub、GitLab 多种版本控制与托管
- 通过 MCP 与插件两种方式接入不同 agent，回复作为其下一轮输入

## 4. 架构与实现

TypeScript，Apache-2.0 许可，本地运行、浏览器作为界面。核心设计是把「审阅」从聊天流里抽出来，变成结构化的、带位置的批注对象，再通过 hook/MCP 回注给 agent。Inbox 的思路更进一层：不要求人实时盯着，agent 留问题、人有空再答，回复回到发起会话——这让多 agent 并行时的注意力分配变得可控。

## 5. 上手路径

1. 按官方文档为所用 agent 安装插件或配置 MCP
2. 先在一次计划评审里试：让 agent 出计划，浏览器打开后批注两处再发送
3. 确认 agent 能准确响应带位置的反馈，再用于代码 diff 评审
4. 多 agent 并行时启用 Inbox，把待处理项集中到一个窗口
5. 团队场景下注意审阅内容可能含敏感代码，本地运行边界需明确

## 6. 风险与边界

- 依赖各 agent 的 hook/命令能力，上游接口变化可能导致接入失效
- 147 个 open issue 说明多 agent 组合下的兼容问题仍在消化
- AI 评审与内置提问会把代码上下文发给模型，需确认数据边界
- Inbox 让 agent 异步留问题，若长期不处理会积压成新的负担
- 批注对象的结构化程度越高，越依赖 agent 正确解析，弱模型可能忽略位置信息

## 7. 谁该用 / 谁别碰

日常用编码 agent 写代码、需要精细控制其输出的开发者；以及多人共用一组 agent、需要把审阅意见结构化的团队。

## 8. 评分依据

热度增速 **53** · 社区规模 **75** · 更新活跃 **71** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它解决的是 agent 工作流里一个被低估的环节：人的反馈如何精准落位。把批注做成结构化对象再回注，比在聊天框里描述「第几段」可靠得多。147 个 open issue 提示多 agent 组合仍有毛刺，但方向是对的。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
