---
date: 2026-11-01
repo: herdrdev/herdr
category: tools
categoryLabel: 开发工具 / 效率
rating: 4
language: Rust
stars: 47179
starGain: 246
url: https://github.com/herdrdev/herdr
tags: [agent, agent-orchestration, ai, ai-agents, claude-code, cli, codex, coding-agents]
generatedAt: 2026-11-01T05:18:33.330Z
---

# herdrdev/herdr · 项目解读

> **一句话**：agent 的终端不该在断线时死掉。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Rust |
| 星标 | 47,179 |
| 今日新增 | +246 |
| 仓库 | https://github.com/herdrdev/herdr |

## 1. 它解决什么问题

编码 agent 跑长任务时，终端是它的生命线：SSH 一断进程就死，客户端一关上下文全丢，同时开五个 pane 后不知道哪个在等你回答。tmux 能解决前两个，但不知道「agent 在等输入」这件事——它只认得进程活着。herdr 的定位是给 agent 用的终端运行时：接管终端本身，但不管 agent 怎么实现。

## 2. 为什么是现在

218 天、4.72 万星、今日 +246。它与 orca、paperclip、cc-switch 一起构成本期「agent 运维层」的集群：当 agent 从几分钟的任务变成几小时的进程，终端就从工具变成了基础设施。

## 3. 关键能力

- 脱离不中断：客户端关闭或 SSH 断开后，终端仍在后台服务中运行
- 重启后恢复布局，并可恢复支持的 agent 会话（原进程不保留）
- 多机聚合：本地与已保存的 SSH 机器放在一个窗口，agent 列表合并、各自重连
- 每个 pane 标注 working、blocked、idle，agent 卡住等回答时明确提示
- agent 原生：通过 CLI 与 socket API，agent 可开窗、互相提问、等待对方真正阻塞
- 兼容现有工具：Claude Code、Codex、Cursor、OpenCode、Grok 等，只接管终端不包装
- 键盘与鼠标都是一等公民：tmux 式前缀键加点击、拖拽、分屏
- 单个 Rust 二进制，无 Electron，插件市场可扩展

## 4. 架构与实现

客户端与服务端分离：后台服务持有 pty 与进程，客户端只是渲染与输入的前端，因此断线不影响执行。状态判定是它的核心增量——不只监控进程存活，还通过各 agent 的接口约定判断「正在工作」「等待输入」「空闲」，把结果投射到 pane 状态与统一 agent 列表。多机场景下每台机器跑一个服务，客户端聚合连接，重连相互独立，一台掉线不影响其他。socket API 让 agent 之间可以编排，包括「等另一个 agent 真正阻塞」这种条件等待。

## 5. 上手路径

1. 先只用一个 pane 验证「关掉客户端再重连，进程还在」，这是它相对裸终端的根价值
2. 接两个 agent（Claude Code 与 Codex），看 blocked 状态的判定准不准——判错会让人误以为可以走开
3. 多机场景先接一台远程，确认重连与布局恢复在弱网下的行为
4. 让 agent 通过 CLI 开 pane 前，先把权限边界想清楚，这等于给 agent 分配了调度权

## 6. 风险与边界

- 重启后恢复的是布局与会话，原进程不保留，长任务仍需自行做断点续跑
- blocked 判定依赖各 agent 的输出约定，agent 升级可能让判定失效
- agent 通过 socket API 互相开窗与提问，形成难以追踪的调用链，需要可观测性配套
- 多机聚合意味着凭据与连接配置集中一处，本机安全边界更重要

## 7. 谁该用 / 谁别碰

长时间跑编码 agent 的开发者、需要跨机器管理 agent 的团队、原本用 tmux 加手工脚本的人。

## 8. 评分依据

热度增速 **93** · 社区规模 **88** · 更新活跃 **57** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：本期最「对症」的基础设施项目：它不试图让 agent 更聪明，只让 agent 的进程与状态不再依赖一个不能断的 SSH 连接。边界选得准是这个项目最值得肯定的地方。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-01 · 依据仓库 README 与 GitHub 元数据</sub>
