---
date: 2026-11-01
repo: farion1231/cc-switch
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4.5
language: Rust
stars: 150686
starGain: 253
url: https://github.com/farion1231/cc-switch
tags: [ai-tools, claude-code, codex, deepseek-harness, desktop-app, grok, grokbuild, hermes]
generatedAt: 2026-11-01T05:18:33.330Z
---

# farion1231/cc-switch · 项目解读

> **一句话**：十二个 agent 工具、九十个供应商，不许再手改 YAML。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Rust |
| 星标 | 150,686 |
| 今日新增 | +253 |
| 仓库 | https://github.com/farion1231/cc-switch |

## 1. 它解决什么问题

现在一个开发者常同时用 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw、Hermes 等工具，每个都要配 provider：base URL、模型名、API key，格式分别是 JSON、TOML、YAML，路径还各不相同。换个中转或试新模型就要改四五个文件，改错一个就是一堆 401。cc-switch 把这件事做成一个界面。

## 2. 为什么是现在

454 天、15 万星、今日 +253。原因很直接：provider 生态在膨胀（本期 README 就在推 Kimi K3.1 Pro 的接入），工具越多，配置碎片化越严重；同时「用自己的订阅跑 agent」让账号与额度的管理需求上升，与 orca 的账号切换是同一类问题的两种解法。

## 3. 关键能力

- 一个应用管理 12 个工具：Claude Code、Claude Desktop、Codex、Gemini CLI、Grok Build、OpenCode、OpenClaw、Hermes、Pi、MiniMax Code、Kimi Code 等
- 90+ 供应商预设，含 AWS Bedrock、NVIDIA NIM 与社区中转
- 三种连接模式：直连、经本地路由转发、多供应商聚合
- 集中管理 MCP 服务器、Skills 与 Prompts
- 一键切换，无需手改 JSON/TOML/YAML
- 跨平台桌面应用，Rust 实现

## 4. 架构与实现

核心是「配置归一化」：每个工具对应一个适配器，知道它的配置文件路径、格式与字段语义；内部用统一的 provider 模型描述连接，切换时由适配器把统一模型写回各工具的原生格式。三种模式决定流量走向——直连让工具直接访问 provider；路由在本地起一层代理，便于统一改模型与记录；聚合把多个 provider 放在同一入口后按策略分流。MCP、Skills、Prompts 走同样的归一化思路集中管理。

## 5. 上手路径

1. 先接两个你确实在用的工具，验证写回的配置与手工配的完全等价，再扩大范围
2. 用路由模式前先确认本地代理的端口不会与现有服务冲突
3. 切换前把原配置文件备份一次，归一化写回是破坏性操作
4. 聚合模式下注意不同 provider 的模型名不通用，策略要按能力而不是按名称路由

## 6. 风险与边界

- 写回配置意味着它会改你的 dotfiles，出错时影响所有工具
- 社区中转类预设的可用性与安全性不由它保证，key 泄露风险取决于中转方
- 工具升级改配置格式后适配器可能滞后，表现为写入无效
- 路由模式引入额外一跳，故障排查链路变长

## 7. 谁该用 / 谁别碰

同时使用多个编码 agent、经常换 provider 或中转的开发者；只用一家官方 API 的人收益有限。

## 8. 评分依据

热度增速 **90** · 社区规模 **96** · 更新活跃 **75** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：它解决的是一件很土但每天都要做的事：配置管理。价值在适配器覆盖面，风险也在适配器——工具一升级，它就得跟着改。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-01 · 依据仓库 README 与 GitHub 元数据</sub>
