---
date: 2026-11-14
repo: Gentleman-Programming/gentle-ai
category: ai
categoryLabel: AI / 大模型
rating: 4
language: Go
stars: 9149
starGain: 242
url: https://github.com/Gentleman-Programming/gentle-ai
tags: [agent-skills, ai-agents, ai-coding, claude-code, code-review, codex, coding-agents, copilot]
generatedAt: 2026-11-14T08:52:50.287Z
---

# Gentleman-Programming/gentle-ai · 项目解读

> **一句话**：不换 agent，只给它补上记忆、流程证据与有边界的复核。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Go |
| 星标 | 9,149 |
| 今日新增 | +242 |
| 仓库 | https://github.com/Gentleman-Programming/gentle-ai |

## 1. 它解决什么问题

agent 写完代码就忘掉上下文，对项目的既有约定没有持续记忆，也无法证明自己做了什么，最后把验证成本全部推给人逐行阅读。换一个 agent 就要重配一遍规则，配置本身也容易被锁在单一产品里。

## 2. 为什么是现在

本期 +242、9,149 星，259 天，且明确列出「支持 17 个 agent、无 agent 锁定」。它与本期 Qwen Code 的自动记忆、官方插件目录的技能规范形成同一主题的两条路径：一条做运行时内核，一条做跨 agent 的配置层，说明「给 agent 定规矩」已经是独立的产品形态。

## 3. 关键能力

- Engram 持久记忆保存项目上下文，让跨会话的 agent 接着上一轮的约定工作
- ODD 把工作限制在小步范围，并强调按理由而非按体积决定是否委派子任务
- 测试先行与 RDD 复核：每条要求的规则先有测试证明，完成的工作在合适深度被检查
- 确定性流程明确「下一步的合法动作」，减少 agent 自由发挥造成的偏移
- 可选的有界评审、技能集、MCP 服务器、人格设定，以及面向 Pi 的 Gentle Shell 工作区

## 4. 架构与实现

以 Go 编写的配置与编排层，覆盖 Claude Code、Cursor、OpenCode、Codex、Pi 等 17 种已有 agent，不在它们之上再包一个模型或界面；记忆以 Engram 形式持久化，工作流由 ODD/RDD/测试先行等阶段约束，评审与技能作为可选插件挂载，Gentle Shell 则给 Pi 提供完整工作区。

## 5. 上手路径

1. 按 Get started 安装（macOS 可用 Homebrew），先在你已经在用的那一个 agent 上启用，不要一次铺开
2. 只开 Engram 持久记忆与 ODD 小步流程，观察几轮提交里上下文是否真的被复用
3. 再逐步加入测试先行、RDD 与可选的有界评审，评估增加的检查是否值得往返成本
4. 团队使用前把生成的记忆与规则文件纳入评审，约定哪些可提交、哪些留本地

## 6. 风险与边界

- 同时覆盖 17 个 agent，各家的配置格式与升级节奏不同，兼容性需按自己用的那个实测
- 记忆与确定性流程会写文件、约束下一步动作，可能与团队既有工作流冲突
- 项目自述「确定性」是流程设计目标，不等于 agent 输出可复现，模型侧仍有随机性
- 405 个 open issue 与较多概念命名（Engram、ODD、RDD）带来上手成本，先读文档再开功能
- 有界评审虽可选，但开启后会拉长单次任务时间，CI 场景需评估

## 7. 谁该用 / 谁别碰

已在用某个编码 agent、希望补齐记忆与可验证流程，又不愿被单一 agent 产品绑定的开发者与小团队。

## 8. 评分依据

热度增速 **91** · 社区规模 **75** · 更新活跃 **72** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把「agent 该按什么流程做事」从提示词技巧变成可安装、可版本化的配置层，且明确不锁定 agent，定位克制。代价是概念较多、流程约束偏强；建议从记忆一项起步，按实际收益决定是否加复核与评审环节。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-14 · 依据仓库 README 与 GitHub 元数据</sub>
