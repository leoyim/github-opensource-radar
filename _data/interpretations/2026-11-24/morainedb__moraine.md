---
date: 2026-11-24
repo: morainedb/moraine
category: data
categoryLabel: 数据 / 数据库
rating: 3
language: Rust
stars: 42
starGain: null
url: https://github.com/morainedb/moraine
tags: [duckdb, duckdb-extension, ducklake, lakehouse, object-storage, rust, slatedb]
generatedAt: 2026-11-24T01:51:51.972Z
---

# morainedb/moraine · 项目解读

> **一句话**：让 DuckLake 的目录也住进对象存储，彻底去掉那个「还得起的库」。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | Rust |
| 星标 | 42 |
| 今日新增 | — |
| 仓库 | https://github.com/morainedb/moraine |

## 1. 它解决什么问题

DuckLake 的设计是把表数据存成对象存储里的 Parquet，把目录放在 SQL 数据库里（SQLite、Postgres 或 DuckDB）。数据库层带来事务一致性与 ACID，但也意味着「无服务器数据湖」始终差一步——你总要额外托管一个目录服务，它的可用性、备份与扩容又要单独运维。

## 2. 为什么是现在

42 星、上线 138 天、Rust、Apache-2.0。它的解法是用 SlateDB——一个同样落在对象存储里的嵌入式事务 KV——承载目录，于是目录与数据文件同处一个桶，不再有独立的服务进程；同时它也是目前唯一为 DuckLake 提供 DuckDB 原生索引的扩展，查询可少扫数据。

## 3. 关键能力

- 目录与数据同桶，无需独立目录数据库
- 以 DuckDB 扩展与 Rust crate 双形态提供
- 提供 DuckDB 原生索引，加速目录侧查询
- 保持 DuckLake 的事务语义与 ACID 保证

## 4. 架构与实现

Rust 实现，SlateDB 作为嵌入式事务 KV 存放目录元数据，对象存储承载全部状态；对外通过 DuckDB extension 加载，Rust 侧则以 crate 集成，不引入常驻服务进程。

## 5. 上手路径

1. 按文档装 DuckDB 扩展，在本地或兼容 S3 的存储上建一个 lake
2. 灌一批 Parquet，确认目录文件确实落在同一个桶而非本地库
3. 对比启用与关闭原生索引时的查询延迟，判断收益是否覆盖额外写入
4. 再压并发写，确认 SlateDB 的事务边界符合预期的隔离级别

## 6. 风险与边界

- 42 星的小项目，生产验证样本极少，故障场景基本没有公开案例
- 对象存储的延迟特性会让目录操作比本地数据库慢一个量级，必须实测
- 嵌入式 KV 的故障恢复与备份路径和 Postgres 不同，既有运维经验不可直接套用
- DuckLake 规范本身仍在演进，扩展需要跟随上游变动

## 7. 谁该用 / 谁别碰

想在纯对象存储上跑分析、又不想维护目录数据库的数据平台团队；适合实验与小规模生产，强一致高并发场景需谨慎。

## 8. 评分依据

热度增速 **77** · 社区规模 **24** · 更新活跃 **58** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：它解决的是「最后一步还得起个库」这个具体摩擦。是否值得换，取决于目录操作延迟的损失能否被对象存储的带宽与免运维收益抵消。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-24 · 依据仓库 README 与 GitHub 元数据</sub>
