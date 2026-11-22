---
date: 2026-11-22
repo: tartini-ai/agent-traffic-analytics
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: Python
stars: 85
starGain: 12
url: https://github.com/tartini-ai/agent-traffic-analytics
tags: [agent-traffic-analytics, agentcake, agentic-analytics, agentic-browser, agentic-traffic, ai-agent-detection, ai-agent-traffic, ai-agents]
generatedAt: 2026-11-22T02:08:13.737Z
---

# tartini-ai/agent-traffic-analytics · 项目解读

> **一句话**：把「访客到底是不是人」做成可回放的自托管看板。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Python |
| 星标 | 85 |
| 今日新增 | +12 |
| 仓库 | https://github.com/tartini-ai/agent-traffic-analytics |

## 1. 它解决什么问题

流量在涨而转化不变时，传统分析工具只能给出会话数与跳出率，无法区分访问来自真人、AI agent 还是脚本 bot，也就无从判断页面信息是否被 agent 正确读取。

## 2. 为什么是现在

8 天新仓、85 星、当日新增 12 星，是本期数据方向最贴近新现象的一项。它把「AI agent 浏览网站」当作一类独立流量来度量，而不是并入 bot 过滤，问题定义本身比现有 web analytics 早半步。

## 3. 关键能力

- 自托管会话回放，把每个会话判为 human、agent 或 script bot 之一
- 展示 agent 看过哪些页面、是否找到所需信息、在哪一步停滞
- 按 agent 名称与置信度列出高频来访者，如 Claude in Chrome、Grok Bot
- 给出分类时间线与判定原因，便于复核误判
- README 含「How it decides」「Your data stays yours」与安装、贡献章节

## 4. 架构与实现

自托管服务采集站点会话并做分类与回放，判定逻辑以启发式规则配合可解释的原因输出；看板展示分类结果、时间线与置信度，数据留在部署方自己的环境中，不依赖外部分析 SaaS。

## 5. 上手路径

1. 先人工读完 INSTALL.md 再执行，不要直接把安装指令原样交给 agent
2. 在测试站点接入一小段流量，检查会话分类是否可解释
3. 抽查置信度低的会话，修正规则后再扩大采集范围
4. 确认会话回放的存储、留存与隐私合规策略

## 6. 风险与边界

- 8 天新仓、85 星、仅 2 fork，功能与判定规则仍在快速变化
- 安装引导依赖从远端下载 INSTALL.md 并照做，且该下载源在部分网络环境不可达
- 分类基于启发式，agent 标识可伪造，置信度低的结论需人工复核
- 会话回放涉及访问者行为数据，接入生产前需评估告知与留存合规

## 7. 谁该用 / 谁别碰

已经在观察 agent 来访、且需要自建分析而不愿把数据交给第三方 SaaS 的站点运营与工程团队。

## 8. 评分依据

热度增速 **85** · 社区规模 **31** · 更新活跃 **71** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：问题定义有价值，实现还很早期；建议先在测试站点验证分类可解释性，并把安装脚本人工审一遍再谈上线。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
