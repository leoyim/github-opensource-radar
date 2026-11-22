---
date: 2026-11-22
repo: LodyAI/Lody
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: TypeScript
stars: 1804
starGain: null
url: https://github.com/LodyAI/Lody
tags: [agent, agentic-workflow, coding-agent, collaboration, local-first, multi-agent, multiplayer, orchestration]
generatedAt: 2026-11-22T02:08:13.737Z
---

# LodyAI/Lody · 项目解读

> **一句话**：把团队已在用的编码 agent 接进共享工作区，机器默认私有。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 1,804 |
| 今日新增 | — |
| 仓库 | https://github.com/LodyAI/Lody |

## 1. 它解决什么问题

编码 agent 的会话、文件与运行状态散落在各人自己的终端里，协作靠截图与粘贴日志；让多人共享又会碰到「谁的机器被谁用了」的权限问题。

## 2. 为什么是现在

本期 1,804 星、193 fork、337 个 open issue，107 天的项目已把桌面、移动、Web 与 CLI 四个入口做齐。README 强调通过 ACP 接入已有 agent，而不是要求团队换一套新 agent，这是它区别于同类协作工具的关键。

## 3. 关键能力

- 通过 ACP 接入 Claude Code、Codex、Kimi、OpenCode 等现有 agent
- 共享会话的完整 transcript、运行状态、文件与代码变更
- 桌面/移动/Web/CLI 分派任务，支持附件收发与会话检索、置顶、归档、分叉
- Agent Roles 复用模型、权限与指令预设；内置终端、命令面板与编辑器跳转
- 手机端接收通知、审批权限请求、查看 diff，iOS Live Activities 跟进进度

## 4. 架构与实现

工作区连接多台机器，机器保持私有直到所有者主动共享；agent 经 ACP 协议接入，会话与文件围绕同一工作区组织，并行任务各自隔离，移动端作为审批与观察端而非执行端。

## 5. 上手路径

1. 在桌面端建工作区并按文档连接一台机器
2. 通过 ACP 接入一个已在用的 agent，确认订阅与登录状态沿用原配置
3. 邀请一名同事共享单个会话，验证 transcript 与 diff 是否一致
4. 先在桌面端完成一次权限审批，再决定是否开放移动端放行

## 6. 风险与边界

- 把权限请求推到手机小屏审批，安全闸门移到了注意力更易分散的场景
- 机器一旦共享，工作区内的文件与执行权限边界要事先约定
- ACP 兼容 agent 的范围决定可接入面，不支持的 agent 仍需单独适配
- 337 个 open issue 与 107 天年龄说明仍在快速迭代

## 7. 谁该用 / 谁别碰

已经在多人协作中使用编码 agent、需要共享过程而不只是结果的团队；单人开发者用不上共享层。

## 8. 评分依据

热度增速 **84** · 社区规模 **61** · 更新活跃 **74** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：机器默认私有与并行隔离是设计上最克制的两点；真正要治理的是移动端审批，建议先约定哪些操作允许在手机放行。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
