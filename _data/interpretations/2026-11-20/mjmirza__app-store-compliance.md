---
date: 2026-11-20
repo: mjmirza/app-store-compliance
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Shell
stars: 1865
starGain: 377
url: https://github.com/mjmirza/app-store-compliance
tags: [accessibility, ai-agents, android, app-review-guidelines, app-store, app-store-connect, app-store-rejection, app-store-review]
generatedAt: 2026-11-20T02:13:10.160Z
---

# mjmirza/app-store-compliance · 项目解读

> **一句话**：把 App Store / Google Play 的拒审模式做成可扫描的规则库与提交前 hook。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Shell |
| 星标 | 1,865 |
| 今日新增 | +377 |
| 仓库 | https://github.com/mjmirza/app-store-compliance |

## 1. 它解决什么问题

应用提交被拒往往不是代码问题，而是隐私清单、权限说明、截图与地区合规等细节；这类规则散落在各家指南与法规更新里，团队每次提交前都要靠人逐条核对，被拒后又要从零复盘。

## 2. 为什么是现在

本期 1,865 星、126 fork、32 个 issue，当日 +377 为移动方向最高增量，创建 167 天。README 给出的是可清点的内容：117 条已归档拒审模式与修复、隐私 manifest 与 Data safety 检查、95 个跟踪中的合规截止日期，以及一个给 AI coding agent 用的 skill——把「合规知识」做成可执行资产，而非又一份静态清单。

## 3. 关键能力

- 汇总 117 条 App Store / Google Play 常见拒审模式及对应修复方案，并提供申诉 playbook
- 提供提交前 checklist 与自动化 guard：克隆仓库后运行一个 bash 脚本即可扫描工程，不安装依赖、不改动项目
- 覆盖隐私 manifest、Data safety 等检查项，并跟踪 95 个合规截止日期（EU AI Act、DSA、COPPA、年龄相关法规等）
- 以 skill / hook 形式装进 Claude Code、Codex、Gemini CLI、Copilot、Cursor 等 AI 编码工具，让每次提交自动检查
- 提供公开网站版与 CI 工作流，便于非开发者查阅与团队级接入

## 4. 架构与实现

知识层是可版本化的文档与规则库（拒审模式、checklist、截止日期表），执行层是一个只读扫描脚本与 agent hook：脚本接收应用目录路径，按规则检查工程内的清单、权限声明与资源，输出问题而不修改文件；hook 把同一检查挂到 AI 编码工具的提交流程上。文档站与 CI 复用同一份规则数据，因此「写给开发者看」和「给机器执行」的内容不会分叉。

## 5. 上手路径

1. 运行两行命令扫描一个即将提交的应用，确认输出的问题确实对应真实工程配置
2. 被拒过时先查申诉 playbook，比对自身原因与 117 条模式中的哪一条吻合
3. 把 guard 挂进 AI 编码工具的 hook，验证每次提交前是否自动触发且不改动源码
4. 核对跟踪的 95 个合规截止日期，把与自身上架地区相关的日期纳入发布计划

## 6. 风险与边界

- 审核指南与法规持续变化，规则库存在滞后，不能替代对官方最新文档的核对
- 扫描只读工程配置，无法覆盖运行时行为、服务端逻辑与人工审核的主观判断
- 95 个截止日期与地区法规属信息汇总，法律适用性需由团队自行确认
- 创建 167 天、32 个 issue，规则覆盖的完整度与误报率需要按自身应用实测

## 7. 谁该用 / 谁别碰

频繁提交 iOS / Android 应用、希望把拒审经验沉淀成团队资产的移动团队；只偶尔上架且已有成熟合规流程的团队收益较小。

## 8. 评分依据

热度增速 **98** · 社区规模 **60** · 更新活跃 **65** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把合规从「人记」变成「可扫描、可挂 hook、可版本化」的规则库，是它最实用的地方；只读不改源码的 guard 设计也降低了接入阻力。117 条模式与 95 个截止日期让内容可清点，而不是泛泛而谈。要清醒的是它只是辅助检查：官方指南与法规更新、以及人工审核判断，仍需团队自己负责。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-20 · 依据仓库 README 与 GitHub 元数据</sub>
