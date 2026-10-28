---
date: 2026-10-28
repo: trinodb/trino
category: data
categoryLabel: 数据 / 数据库
rating: 4
language: Java
stars: 13377
starGain: 5
url: https://github.com/trinodb/trino
tags: [analytics, big-data, data-science, database, databases, datalake, delta-lake, distributed-database]
generatedAt: 2026-10-28T01:55:53.021Z
---

# trinodb/trino · 项目解读

> **一句话**：一个 SQL 入口查遍数据湖，分布式 MPP 引擎里的老牌选择。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Java |
| 星标 | 13,377 |
| 今日新增 | +5 |
| 仓库 | https://github.com/trinodb/trino |

## 1. 它解决什么问题

数据摊在若干系统里——Hive/HDFS、Iceberg 表、Kafka、关系库、MongoDB——每种都有自己的查询方式。要跨源分析，过去只能先 ETL 汇总到一处。Trino（原 PrestoSQL）的方案是联邦查询：一套 SQL、一个引擎，直接连到各数据源上执行，把结果在内存里做分布式聚合。

## 2. 为什么是现在

今日 +5 星（2,839 天）。热度极低，属于常态补位。它的技术状态稳定成熟：README 保持极简，把部署、开发、安全策略分别指向用户手册、DEVELOPMENT 与安全策略文档——这种「README 只做索引」的写法，是长期项目的典型形态，说明它不靠 README 卖自己。

## 3. 关键能力

- 分布式 MPP SQL 查询，面向大数据分析场景
- 联邦查询：通过 connector 直接访问多种数据源
- 对数据湖格式（Iceberg、Delta Lake 等）的原生支持
- 成熟的插件体系，可自研 connector
- 明确的开发规范与安全漏洞上报流程

## 4. 架构与实现

Coordinator 负责解析、规划与调度，Worker 执行分片任务，数据尽可能在源端过滤以减少网络传输（谓词下推是关键）。它不存储数据，因此性能强依赖 connector 的下推能力——同一份 SQL 在不同 connector 上可能差一个数量级。

## 5. 上手路径

1. 先用单节点 Docker 版本连一个数据源跑通查询，确认 connector 版本与源端兼容
2. 重点验证谓词下推：对比下推前后扫描的数据量，这决定它是否适合你的场景
3. 生产部署前先定资源组与查询队列策略，否则一条大查询会拖垮整个集群

## 6. 风险与边界

- 不存储数据，性能完全取决于 connector 的下推实现质量
- 内存密集，大 join 容易 OOM，需要调参与资源组隔离
- 运维复杂度高于单机引擎，小数据量用它属于过度设计

## 7. 谁该用 / 谁别碰

已有数据湖或多种数据源、需要一个统一 SQL 入口的中大型团队；单机分析场景 DuckDB 更合适。

## 8. 评分依据

热度增速 **71** · 社区规模 **81** · 更新活跃 **79** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：成熟稳健，但今日上榜只是补位。选它的判断标准只有一个：你是否真的需要跨源联邦查询。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-28 · 依据仓库 README 与 GitHub 元数据</sub>
