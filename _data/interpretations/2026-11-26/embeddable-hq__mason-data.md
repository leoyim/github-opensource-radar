---
date: 2026-11-26
repo: embeddable-hq/mason-data
category: data
categoryLabel: 数据 / 数据库
rating: 3
language: TypeScript
stars: 72
starGain: 17
url: https://github.com/embeddable-hq/mason-data
tags: [analytics, business-intelligence, embedded-analytics, postgres, postgresql, postgresql-database]
generatedAt: 2026-11-26T01:52:26.117Z
---

# embeddable-hq/mason-data · 项目解读

> **一句话**：用 DuckDB 顶替 Postgres 只读副本：SQL 不改、答案不改，算不精确就报错。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 72 |
| 今日新增 | +17 |
| 仓库 | https://github.com/embeddable-hq/mason-data |

## 1. 它解决什么问题

分析查询压在业务库上会拖慢线上；另建数仓又要迁移 SQL 方言，语义差异还会让数字对不上。团队常在「慢」与「不准」之间妥协。

## 2. 为什么是现在

72 星、上线 29 天、TypeScript、Apache-2.0，3 fork、60 issue、日增 17。它的做法是重写而非换方言：先由真实 Postgres 解析查询，再改写成 DuckDB 最快的等价形式在列式表上执行；无法保证完全等价的查询直接报错并说明原因，而不是给出近似结果。同步支持按需、轮询与逻辑复制三种模式。

## 3. 关键能力

- Postgres 协议对外：既有客户端与 BI 工具无需改动即可连接
- 同步策略可选：按需、轮询或逻辑复制，按表与列粒度选择
- 查询重写：由 Postgres 解析后改写成 DuckDB 列式执行形式
- 精确性优先：不能保证等价的查询直接拒绝并给出原因
- agent 场景：按 agent 的用户、行列表级 RBAC、查询全量留痕、原生 MCP
- 单进程部署：一个 Node.js 进程即可运行

## 4. 架构与实现

Node.js 进程内维护同步器与查询层：同步器按策略把 Postgres 表落到列式存储，查询层接收 Postgres 协议请求，交给真实 Postgres 解析与规划，再按等价的 DuckDB 形式执行；等价性由数万条查询构成的判定集约束。

## 5. 上手路径

1. 先选一张读多写少的大表做试点，确认同步延迟在可接受范围
2. 用现有的分析 SQL 逐条比对 Mason 与 Postgres 的结果，确认无偏差
3. 把 RBAC 按 agent 维度配置，先只给只读与限列权限
4. 关注被拒绝的查询清单，它们反映当前重写器的能力边界

## 6. 风险与边界

- 数据同步存在延迟，实时性要求高的报表不适用
- 列式表的内存与并发上限需实测，大表首次同步耗时可能明显
- 72 星、60 issue 的构成说明项目处于早期，重写器覆盖范围仍在扩张
- 写入路径仍需回到 Postgres，双向一致性由使用方保证

## 7. 谁该用 / 谁别碰

在 Postgres 上做分析的团队；需要给 agent 开放只读数据访问、同时要求权限与留痕的数据平台工程师。

## 8. 评分依据

热度增速 **87** · 社区规模 **31** · 更新活跃 **34** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：「精确优先、拒绝近似」是这类工具里少见的取舍，对分析口径的可信度是加分项。当前更适合作为特定负载的加速层，而非通用只读副本替代；能力边界应以被拒绝的查询清单为准。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-26 · 依据仓库 README 与 GitHub 元数据</sub>
