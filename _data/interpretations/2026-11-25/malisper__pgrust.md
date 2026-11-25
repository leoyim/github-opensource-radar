---
date: 2026-11-25
repo: malisper/pgrust
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: Rust
stars: 6052
starGain: 20
url: https://github.com/malisper/pgrust
tags: [ai-assisted-development, database, postgres, postgresql, rust]
generatedAt: 2026-11-25T02:41:50.438Z
---

# malisper/pgrust · 项目解读

> **一句话**：用 Rust 重写的 Postgres：协议兼容，为分析负载重新设计引擎。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 6,052 |
| 今日新增 | +20 |
| 仓库 | https://github.com/malisper/pgrust |

## 1. 它解决什么问题

Postgres 做分析负载慢，ClickHouse 等分析库又要维护独立的工具链与数据同步；理想形态是「现有 Postgres 驱动与 SQL 不变，分析性能上一个量级」。

## 2. 为什么是现在

6,052 星、上线 219 天、Rust、AGPL-3.0，fork 248、日增 20。它选择 wire 协议 + SQL 方言兼容 Postgres 18 而非 fork 补丁，重写自由度大：Gravity 引擎（向量化、push-based、JIT）、线程并发模型、按机器整体预算的自动内存管理都是围绕分析重新设计。

## 3. 关键能力

- wire 协议与 SQL 方言兼容 Postgres 18，现有驱动、ORM、psql 无需改动
- Gravity：向量化、push-based、JIT 编译的查询引擎
- 线程级并发模型，防止单条大查询拖垮整机
- 自动内存管理：按机器规模定的统一内存预算
- 官方口径：分析负载快于 Postgres 与 ClickHouse

## 4. 架构与实现

以 Postgres 兼容层为壳，内部是全新引擎：解析后进入 push-based 执行计划，JIT 编译热点算子；并发按线程分配，内存统一预算管理；数据目录与 Postgres 不兼容，属独立存储。

## 5. 上手路径

1. 浏览器 demo 先感受查询体验，再本地起服务跑真实数据集
2. 用现有 psql 与 ORM 直连验证兼容性，重点测项目用到的方言特性
3. 自备分析负载（聚合、大表扫描、join）与 Postgres、ClickHouse 同数据对比
4. 测事务与并发写入路径，评估 OLTP 关键操作的成熟度

## 6. 风险与边界

- 「快于 Postgres 与 ClickHouse」是项目自述，不同负载差异大，务必自带数据实测
- AGPL-3.0 对服务化部署有开源义务，商用前先算许可成本
- 219 天项目，事务、复制、备份等 OLTP 关键路径成熟度待验证
- 数据目录与 Postgres 不兼容，迁移是单向导入

## 7. 谁该用 / 谁别碰

想在不换工具链的前提下给 Postgres 数据提速的分析场景团队。

## 8. 评分依据

热度增速 **91** · 社区规模 **69** · 更新活跃 **24** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：「协议兼容 + 引擎重写」的路线在工程上自洽，方向是分析场景的正确解法；采纳与否取决于自带负载的实测结果与 AGPL 许可约束，两件事都要先做。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
