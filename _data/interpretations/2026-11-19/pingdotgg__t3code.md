---
date: 2026-11-19
repo: pingdotgg/t3code
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: TypeScript
stars: 65290
starGain: 1220
url: https://github.com/pingdotgg/t3code
tags: [agent-orchestration, agents, ai, chatgpt, claude, claude-code, code, vibe-coding]
generatedAt: 2026-11-19T02:32:35.179Z
---

# pingdotgg/t3code · 项目解读

> **一句话**：把本机所有 coding agent 收进一个界面，电脑起任务、手机批下一步。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 65,290 |
| 今日新增 | +1,220 |
| 仓库 | https://github.com/pingdotgg/t3code |

## 1. 它解决什么问题

每个 coding agent 都有自己的界面、订阅与会话，来回切换成本高；离开工位后无法继续推进正在跑的任务；多个 agent 之间也没有交接通道。把它们统一驱动起来，比再选一个更强的 agent 更贴近日常。

## 2. 为什么是现在

本期 65,290 星、11,448 fork、3,631 个 open issue，当日 +1,220 居首；README 把「一个服务端 + 多端同会话」「线程中途换模型」「让 Claude 把任务交给 Codex」写成核心能力而不是附加项，说明关注点已从模型能力转向已有 agent 的编排与触达。

## 3. 关键能力

- 统一驱动 Claude Code、Codex、Cursor、OpenCode、Grok Build、Antigravity、Kiro、Pi、Muse Code、fx 及任意 ACP agent，只调用用户已登录的订阅，不转售 token
- 同一线程内切换模型，或让一个 agent 把任务交给另一个，上下文不重新起
- 桌面、Web、iOS、Android 共用同一服务端与同一批线程，远程走局域网、Tailscale 或 T3 Connect
- 每个线程可绑定独立 git worktree，审查 diff 后一键 commit、push 并开 PR
- 明确把性能当功能、把掉帧当 bug；MIT 许可，开放可 fork

## 4. 架构与实现

本地或远端常驻一个服务进程，负责与各 agent 建立会话并保存状态；桌面、Web 与移动客户端只是同一份线程的视图，不各自持有会话。线程与 git worktree 绑定，改动隔离在各自工作树中；远程访问不依赖公网中转，走局域网或 Tailscale/T3 Connect。模型与订阅仍在各 agent 侧，服务端只做驱动与编排。

## 5. 上手路径

1. 在装有目标 agent 的机器上部署服务端，逐个确认各 agent 已登录且命令行可用
2. 桌面端开一个线程跑起来，再用手机端登录同一服务端，验证会话与审批步骤同步
3. 为一个线程启用独立 worktree，完整走一遍「审查 diff → 提交 → 开 PR」
4. 试一次线程中途换模型或跨 agent 交接，确认上下文与产物连续

## 6. 风险与边界

- 能力完全依赖本机已安装并登录的 agent，订阅范围与额度受各家限制
- 把 agent 暴露给手机与远程访问等同于远程执行代码，网络边界与鉴权必须由使用者收紧
- 3,631 个 open issue，兼容的 agent 面很广，边缘组合的稳定性需要实测
- 一键 push / 开 PR 把审批与提交压缩到一步，团队使用前应先定好 review 规则

## 7. 谁该用 / 谁别碰

已经同时使用多个 coding agent、且希望离开工位仍能推进任务的开发者；只用单一 agent，或制度上不允许远程控制本机代码执行的团队不适用。

## 8. 评分依据

热度增速 **98** · 社区规模 **92** · 更新活跃 **80** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：思路是把「agent 的控制台」从各家工具里抽出来做成一层，而不是再造一个 agent；worktree 隔离、多端同会话、跨 agent 交接都是实打实的工程细节。落地前提是远程访问的安全边界先立住，并接受它对上游 agent 的强依赖。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
