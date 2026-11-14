---
date: 2026-11-13
repo: openai/codex-security
category: frontend
categoryLabel: 前端 / Web
rating: 4.5
language: TypeScript
stars: 12447
starGain: 643
url: https://github.com/openai/codex-security
tags: [ai-security, application-security, cli, code-scanning, codex, codex-security, cybersecurity, devsecops]
generatedAt: 2026-11-13T02:11:25.742Z
---

# openai/codex-security · 项目解读

> **一句话**：把漏洞发现、验证、补丁与威胁模型串成一条可在终端、SDK 和 CI 里跑的安全工作流。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 12,447 |
| 今日新增 | +643 |
| 仓库 | https://github.com/openai/codex-security |

## 1. 它解决什么问题

扫描器容易给出一长串候选问题，但真正耗时的是复核：判断哪些是真问题、按团队标准定级、找到该负责的人、写补丁并确认修复生效。这些环节通常散在不同工具与表格里，缺的是一条能把发现到修复闭环、并且能进自动化的链路。

## 2. 为什么是现在

本期 +643，是全榜日增第二；12,447 星、978 fork、144 个 issue。增量前二里有两项都是「给 agent 定规矩」的规范型项目，它负责的是安全这一侧，且与本期多篇解读讨论的 agent 权限边界相呼应。

## 3. 关键能力

- 扫描整个仓库、指定路径，或从某个 base revision 到 HEAD 的提交变更；Deep scan 会重复 Standard 扫描并返回去重后的发现
- 验证候选发现、生成补丁、验证已有修复是否真的生效
- 起草 SECURITY.md 策略、保存威胁模型供后续复核；浏览历史扫描与发现，识别重复项
- 按自定义 rubric 评估严重度，并依据源码与 Git 历史建议负责人
- 导入第三方扫描器结果、导出 SARIF/JSON/CSV，与 Linear、Jira、GitHub 联动，并支持 GitHub Action 与容器化批量扫描

## 4. 架构与实现

提供 @openai/codex-security CLI 与 TypeScript SDK 两层接口：Codex 内走安全工作流，终端与 CI 走 CLI/SDK/GitHub Action，报告可本地保存或发布到 Codex Security Cloud。TypeScript 实现，Apache-2.0 许可，README 分 Scan options、TypeScript SDK、Save and export threat models、Containerized bulk scans 等章节。

## 5. 上手路径

1. 先在终端对一个小仓库跑一次标准扫描，确认输出格式与误报水平
2. 把 base revision 到 HEAD 的变更扫描接进 PR 流程，只处理本次改动引入的发现
3. 用自定义 rubric 与负责人建议规则对齐团队现有的定级与分派方式
4. 确认补丁复核流程后再考虑导出 SARIF 或发布到云端，避免一次性把全部历史发现外发

## 6. 风险与边界

- 扫描与验证依赖模型调用，存在费用、速率与数据出域考量，敏感仓库宜先本地评估
- 候选发现仍需人工判断，自动生成补丁不应未经审阅直接合入
- 严重度与负责人建议基于自定义规则和 Git 历史，组织上下文不足时会偏离实际
- Deep scan 会重复扫描，CI 中的耗时与配额要单独规划
- 发布到云端与导入第三方结果会扩大数据流转范围，需与团队安全策略核对

## 7. 谁该用 / 谁别碰

要把安全扫描纳入日常开发与 CI 的工程团队，以及需要把发现、定级、分派与复核串起来的安全工程师。只有一次性合规检查、没有持续修复流程的团队收益有限。

## 8. 评分依据

热度增速 **99** · 社区规模 **77** · 更新活跃 **71** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：它的重点不在多一种扫描算法，而在把「发现 → 验证 → 补丁 → 复核 → 归档」做成 CLI、SDK 与 Action 都能调用的流程，并按团队自己的 rubric 定级。落地时要先解决误报复核与数据出域这两件事。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-13 · 依据仓库 README 与 GitHub 元数据</sub>
