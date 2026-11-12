---
date: 2026-11-12
repo: Chrisinho8/DACH-data-job-market
category: data
categoryLabel: 数据 / 数据库
rating: 1.5
language: Python
stars: 54
starGain: 0
url: https://github.com/Chrisinho8/DACH-data-job-market
tags: [api, apis-json, dashboard, data-engineering, databricks, job-board, job-search, job-tracker]
generatedAt: 2026-11-12T02:26:30.915Z
---

# Chrisinho8/DACH-data-job-market · 项目解读

> **一句话**：每天把德语区 3,000 多条 AI / 数据岗位跑成一份可下钻、可回溯的静态快照。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌗 1.5 / 5.0 |
| 语言 | Python |
| 星标 | 54 |
| 今日新增 | +0 |
| 仓库 | https://github.com/Chrisinho8/DACH-data-job-market |

## 1. 它解决什么问题

谈「AI 岗位需求」时最容易滑向印象：职位标题怎么算、重复发布怎么去重、技能词怎么归类是口径问题，而不是数据问题。多数看板只给曲线，不给曲线背后的原始岗位和口径说明。

## 2. 为什么是现在

106 天 54 星、4 fork、日增 0，是本期数据方向里唯一把「公开数据管道 + 静态发布」做成完整闭环的项目。它的价值不在热度，而在 README 里 Scope 与 Limitations 两节把口径写清楚了——这恰是本期其他数据项目普遍缺的一环。

## 3. 关键能力

- 每天 08:00（UTC+2）由 Databricks 管道查询 Adzuna API 的 18 类 AI / 数据职位标题，覆盖德、奥、瑞三国
- bronze / silver / gold Delta Lake 完成去重与分类，再用 71 词技能词典扫描并发布为静态 GitHub Pages
- 按角色、城市、国家、在招时长、资历结构与工具提及查看市场形状，每张图都可下钻到原始岗位
- 原始岗位可按标题、雇主、角色、国家、城市与资历筛选，按最新或挂得最久排序
- 每日追加而不覆盖，任何数字都有时间序列这一第二维度；MIT 许可且可自行复跑

## 4. 架构与实现

Python + Databricks / Delta Lake 构成管道，产出静态数据交给 GitHub Pages，无在线服务；README 给出 Architecture of the pipeline、Scope、Limitations、Running it yourself 与 Tech stack。

## 5. 上手路径

1. 先看 Pages 上的市场概览与地图，随意点开一个数字下钻到原始岗位链接
2. 读 Scope 与 Limitations，明确「什么算 AI / Data 岗」以及 created 字段的含义
3. 若要复跑，按 Running it yourself 配 Adzuna API key 与 Databricks 环境
4. 做跨期比较前，先确认 71 词词典与 18 类标题的口径没有变动

## 6. 风险与边界

- 数据来自第三方 Adzuna API，覆盖率与字段口径受其影响；README 明确 created 可能是聚合器索引日期而非发布日期
- 18 类职位标题与 71 词技能词典是人为口径，口径一变历史序列就不可直接比较
- 仅覆盖 DACH 区域，不能外推到其他市场或整体行业
- 零 issue，口径调整与数据异常没有公开的社区讨论记录
- 岗位链接会随下架失效，静态快照的「可回溯」不等于「原始岗位永久可访问」

## 7. 谁该用 / 谁别碰

研究德语区 AI / 数据岗位结构的人，以及想参考「公开数据管道 + 静态发布 + 口径公开」做法的数据工程师。需要实时、全球或企业级岗位数据的场景不适用。

## 8. 评分依据

热度增速 **0** · 社区规模 **30** · 更新活跃 **50** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **1.5 星**）

**结论**：最值得读的不是那张地图，而是 README 把「什么算一个岗位」「日期字段代表什么」写成了明文档。把口径公开，是这类统计项目最难也最容易被跳过的一步。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-12 · 依据仓库 README 与 GitHub 元数据</sub>
