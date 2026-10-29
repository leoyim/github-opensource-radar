---
date: 2026-10-29
repo: autonomous-ai/openharness
category: tools
categoryLabel: 开发工具 / 效率
rating: 3
language: TypeScript
stars: 1388
starGain: 9
url: https://github.com/autonomous-ai/openharness
tags: [3d-modeling, agent-framework, agent-harness, ai-agents, cad, claude-code, codex, coding-agents]
generatedAt: 2026-10-29T02:07:12.551Z
---

# autonomous-ai/openharness · 项目解读

> **一句话**：一个界面管住所有 agent 和所有机器，并且把延迟写进了 README。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 1,388 |
| 今日新增 | +9 |
| 仓库 | https://github.com/autonomous-ai/openharness |

## 1. 它解决什么问题

多 agent 并用的现实是混乱的：Claude Code 在本地终端、Codex 在另一台机器、云端还跑着一个 Hermes，每个都有自己的会话、历史与配置。切换成本高，上下文不共享，机器多了之后根本记不清哪个任务在哪跑。而聚合类工具的常见失败是「壳太重」——为了统一界面牺牲了终端本身的响应速度。

## 2. 为什么是现在

今日 +9 星、86 天 1,388 星。它出现的背景是 agent 从「一个工具」变成「一套工具链」：本期 AI 五席中三个是宿主插件，说明用户同时装多个 agent 已是常态，聚合层的需求随之成立。它的差异化在于把性能当成核心指标公开。

## 3. 关键能力

- 统一指挥中心：Claude Code、Codex、Cursor、OpenCode、Devin、Amp、Copilot 等 14 种 agent CLI
- 多机管理：公司、家里、云端的 agent 在一个界面里
- 真实终端：每个 agent 跑在真终端里，而不是模拟输出
- 性能公开：界面操作中位 11–13ms / p95 15–18ms，本地终端回显中位 1.1ms / p95 7.2ms，常驻约 0.1% 单核与 304MiB（含渲染与回滚缓冲）
- 从代码延伸到手艺：CAD、电路、机器人、游戏、音乐
- MIT 许可

## 4. 架构与实现

终端复用器 + agent 适配层：底层管理真实 PTY 会话（这也是回显能到 1.1ms 的原因），上层为每种 agent CLI 提供适配器以统一启动参数与会话恢复。多机能力意味着有一个轻量 daemon 在每台机器上管理会话。README 的性能数字标注为「排除 agent CLI 与 daemon」，读的时候要留意口径。

## 5. 上手路径

1. 先只接一个 agent 跑一周，确认它的终端语义（快捷键、粘贴、图片）没有退化，这是这类工具最容易翻车的地方
2. 多机场景先在一台远程机器上验证 daemon 的部署与重连
3. 性能声称要在你自己的机器上复测，尤其 p95 受终端字体与回滚行数影响很大
4. 把会话恢复策略定下来：崩溃后能否接回正在跑的任务，比界面美观重要得多

## 6. 风险与边界

- 86 天 1,388 星，早期，14 种 CLI 的适配维护成本极高，必然有滞后
- 聚合层增加故障点：它挂了，所有 agent 都不可用
- 多机 daemon 意味着要在多台机器上部署常驻服务，安全面扩大
- README 的性能口径已排除 daemon 与 CLI，实际体感可能不同

## 7. 谁该用 / 谁别碰

同时用两三个编码 agent、且有多台机器的人；只用单一 agent 在单机上工作的场景收益有限。

## 8. 评分依据

热度增速 **53** · 社区规模 **58** · 更新活跃 **69** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：把「性能」当卖点写进 README 的 agent 工具很少见，这本身是个好信号。但要按「终端复用器 + 适配层」评估它：真正的风险不在功能，而在 14 种 CLI 的持续跟进能力。先用一周验证它不破坏你的终端习惯。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-29 · 依据仓库 README 与 GitHub 元数据</sub>
