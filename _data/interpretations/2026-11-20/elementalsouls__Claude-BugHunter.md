---
date: 2026-11-20
repo: elementalsouls/Claude-BugHunter
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4.5
language: Python
stars: 12577
starGain: 1349
url: https://github.com/elementalsouls/Claude-BugHunter
tags: [ai-security, anthropic, application-security, bug-bounty, bugbounty, bugcrowd, claude, claude-code]
generatedAt: 2026-11-20T02:13:10.160Z
---

# elementalsouls/Claude-BugHunter · 项目解读

> **一句话**：把 681 份已披露漏洞报告的方法论，压成一套可安装的 Claude Code 技能包。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 12,577 |
| 今日新增 | +1,349 |
| 仓库 | https://github.com/elementalsouls/Claude-BugHunter |

## 1. 它解决什么问题

安全测试高度依赖经验：知道该测哪一类、用哪条链路、怎样写报告才不被判越界，这些通常靠个人积累。把经验交给通用 agent，它缺方法论边界，容易在授权范围外乱试；靠人逐条写 prompt 又不可复用。

## 2. 为什么是现在

本期 12,577 星、1,595 fork，当日 +1,349 为全榜最高增量，MIT 许可。README 把「82 个技能、15 个 slash command、681 份已披露报告的模式、24 类核心漏洞」写成可清点清单，并专门强调 7-Question Gate、VRT 分级、OOS 反驳与 PII 脱敏——说明它的卖点不是攻防能力本身，而是把合规与边界一起编码进技能。

## 3. 关键能力

- 以 82 个技能与 15 个 slash command 组成 Claude Code 技能包，install once 即可切换 agent 行为
- 从 681 份已披露 HackerOne 报告整理出 58 个按漏洞类别划分的 hunt 技能，含检测模式、payload、绕过表与链路模板
- 覆盖企业边界场景（M365/Entra、Okta、vCenter、SSL-VPN、SharePoint、云 IAM）的 2024–2026 CVE 链路与凭据后升级
- 内置 triage-validation、reporting、evidence-hygiene：7-Question Gate、VRT 感知的严重度、OOS 反驳、PII 脱敏与交付物规范
- 提供 bb-methodology 与 redteam-mindset 两套思维框架，约束五阶段非线性工作流与作用域纪律

## 4. 架构与实现

完全寄生在 Claude Code 的 skills 机制上：不改动宿主运行时，而是以技能目录、slash command 与提示模板注入领域方法论。方法论层（五阶段流程、批判性框架）与执行层（按漏洞类拆分的 hunt 技能、平台链路）分开，再用交付层（triage / reporting / hygiene）在输出侧收口作用域与证据规范。技能是纯文本资产，因此可审阅、可裁剪、可只装需要的子集。

## 5. 上手路径

1. 先只读浏览 skills 目录，确认 82 个技能里哪些与自己的授权测试范围相关，删掉用不上的部分
2. 在一个明确授权的目标上跑一次 bb-methodology，检查 7-Question Gate 是否真的拦住了越界动作
3. 挑一类漏洞用对应 hunt 技能做完整链路，比对它给出的检测模式与自己既有清单的覆盖差
4. 用 reporting 与 evidence-hygiene 生成一次报告，核对 VRT 分级与 PII 脱敏是否符合所在平台要求

## 6. 风险与边界

- 内容包含 payload、绕过表与企业平台 CVE 链路，只可用于有明确书面授权的目标，误用风险由使用者承担
- 技能是提示层资产，不能保证 agent 一定遵守作用域，宿主权限与网络边界必须另行收紧
- 681 份报告的模式来自特定时期与平台，CVE 与界面变化后可能失效，需自行更新
- 仅 10 个 open issue 而星标过万，说明大量使用者尚未产生深度反馈，方法论有效性缺少公开验证

## 7. 谁该用 / 谁别碰

有授权渗透测试或漏洞赏金需求、并已在使用 Claude Code 的安全研究者；无授权环境、或只需要常规代码审计的团队不适合引入。

## 8. 评分依据

热度增速 **98** · 社区规模 **79** · 更新活跃 **60** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：把「经验」做成可安装、可审阅、可裁剪的技能包，是一次很典型的 agent 能力分发：不造框架，只补方法论与交付规范。7-Question Gate 与 PII 脱敏这类设计表明作者把边界当成功能在做。但正因内容敏感，落地前提是授权与宿主权限先立住，技能文本不能替代安全控制。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-20 · 依据仓库 README 与 GitHub 元数据</sub>
