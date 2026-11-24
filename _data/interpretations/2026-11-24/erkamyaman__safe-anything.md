---
date: 2026-11-24
repo: erkamyaman/safe-anything
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 3.5
language: Rust
stars: 496
starGain: null
url: https://github.com/erkamyaman/safe-anything
tags: [ai-agents, claude-code, claude-code-plugin, cli, codex, cursor, devsecops, mcp]
generatedAt: 2026-11-24T01:51:51.972Z
---

# erkamyaman/safe-anything · 项目解读

> **一句话**：一条命令扫代码、密钥、依赖与 agent 配置的 Rust 扫描器。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 496 |
| 今日新增 | — |
| 仓库 | https://github.com/erkamyaman/safe-anything |

## 1. 它解决什么问题

传统 SAST、密钥扫描与依赖检查分散在多个工具里，在 CI 中拼装成本高、结果格式不一；更麻烦的是 agent 开始自动写代码之后，新增了一类暴露面——MCP 配置、agent 提示与硬编码凭据——这些既不在既有 SAST 规则里，也不在密钥扫描器的默认路径中。

## 2. 为什么是现在

496 星、上线 1 天即 36 fork / 49 issue，Rust、MIT，已同时发布到 crates.io 与 npm。它把「agent 的配置本身」列为扫描对象：例如 .mcp.json 中的 GitHub token、agent 的权限设置，这是随 agent 工作流新长出来的需求。

## 3. 关键能力

- 注入类缺陷扫描：XSS、SQL 注入等，按 74 条规则覆盖
- 泄露密钥检测，包括源码、配置文件与 agent 配置中的凭据
- 移动与云配置风险检查
- 依赖漏洞检查，对接 OSV 数据库
- AI agent 配置审计，检查 MCP 与 agent 设置中的权限与凭据问题
- 每条命中给出所在行、判定原因与修复建议；支持 CLI、Claude Code 插件与 GitHub Action 三种形态

## 4. 架构与实现

Rust 原生二进制，覆盖 macOS、Linux、Windows；规则引擎配合多语言解析，扫描在单进程内完成，README 示例中 1,195 个文件约 0.03 秒；以 crates.io 与 npm 分发，CI 侧通过退出码表达结果。

## 5. 上手路径

1. 先对一个已知存在漏洞的靶场（如 OWASP Juice Shop）跑一遍，确认规则能命中预期问题
2. 把退出码接进 CI 的失败门槛，先只对新增改动生效以控制噪声
3. 为自建仓库配置白名单与忽略规则，避免历史遗留问题阻塞流水线
4. 最后才把 agent 配置目录纳入扫描范围，检查 MCP 与凭据设置

## 6. 风险与边界

- 上线 1 天、49 个 issue，规则误报与漏报都还未稳定，不宜作为唯一防线
- 单文件高速扫描对跨文件数据流分析有限，不能替代深度 SAST 或人工审计
- README 首屏含赞助与推广链接，评估时注意区分功能描述与商业内容
- 74 条规则的覆盖面需按自身技术栈逐项核对，缺失的语言或框架可能完全无覆盖

## 7. 谁该用 / 谁别碰

想在 CI 里用一条命令覆盖「代码 + 密钥 + 依赖 + agent 配置」的小团队；不适合作为合规审计的唯一依据。

## 8. 评分依据

热度增速 **78** · 社区规模 **49** · 更新活跃 **86** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：真正的增量在最后一项——把 agent 的配置与凭据当资产来扫。其余能力是既有工具的整合，胜负取决于误报率而不在规则数量。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-24 · 依据仓库 README 与 GitHub 元数据</sub>
