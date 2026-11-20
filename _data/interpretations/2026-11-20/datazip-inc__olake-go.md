---
date: 2026-11-20
repo: datazip-inc/olake-go
category: data
categoryLabel: 数据 / 数据库
rating: 4
language: Go
stars: 2034
starGain: 84
url: https://github.com/datazip-inc/olake-go
tags: [apache-iceberg, cdc, change-data-capture, data-ingestion, data-pipeline, database, elt, etl]
generatedAt: 2026-11-20T02:13:10.160Z
---

# datazip-inc/olake-go · 项目解读

> **一句话**：不用 Spark/Flink/Kafka/Debezium，把数据库、Kafka、S3 直接复制进 Iceberg。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Go |
| 星标 | 2,034 |
| 今日新增 | +84 |
| 仓库 | https://github.com/datazip-inc/olake-go |

## 1. 它解决什么问题

把业务库同步到湖仓，常见栈是 Debezium + Kafka + Flink/Spark 一串组件：吞吐不错，但要维护多条链路、多个集群与各自的故障语义。对只想做 CDC 复制的团队，这套基础设施明显超出需求。

## 2. 为什么是现在

本期 2,034 星、312 fork、205 个 issue，当日 +84，Apache-2.0、已有 766 天历史。README 直接把「Infra-light: No Spark, no Flink, no Kafka, no Debezium」写进特性清单，并给出 580K RPS（Postgres）、139K RPS（MySQL）的吞吐量指标，同时说明仓库已改名（原 datazip-inc/olake）、表维护拆到 olake-fusion——是一个在收敛职责的成熟项目。

## 3. 关键能力

- 从 PostgreSQL、MySQL、MongoDB、Oracle、DB2、MSSQL、Kafka 与 S3 复制到 Apache Iceberg 或纯 Parquet
- Full + CDC 复制，自动 schema 发现与 schema evolution，宣称 exactly-once 与 Arrow 写入
- 支持 Glue、Hive、JDBC、REST 多种 Iceberg catalog，落到无厂商锁定的开放表格式
- 提供 Web UI 与 CLI，Docker Compose 可在数分钟内部署并起同步
- 明确不依赖 Spark、Flink、Kafka、Debezium，以单一引擎承担摄取链路

## 4. 架构与实现

用一个 Go 编写的高性能摄取引擎承担原本由多个组件分担的职责：源端通过全量快照 + CDC 读取变更，中间以 Arrow 列式写入，目标端落到 Iceberg 表或 Parquet 文件，catalog 可插拔。schema 发现与演进在引擎内闭环，因此不需要外部流处理集群；Web UI 与 CLI 只是同一引擎的控制面。表维护（compaction 等）被拆到独立仓库 olake-fusion，职责边界清楚。

## 5. 上手路径

1. 用 Docker Compose 起一套，先做 Postgres 全量 + CDC 到 Iceberg 的最小同步
2. 在源库改一次表结构，验证 schema evolution 是否自动传导到目标表
3. 换一个 catalog（如 REST 或 Glue），确认元数据接入无厂商绑定
4. 按自身数据量压测 RPS 与 exactly-once 语义，再决定是否替换现有 Kafka/Flink 链路

## 6. 风险与边界

- 580K / 139K RPS 为官方在特定条件下的基准，自建环境需按自身硬件与网络复测
- 表维护已拆到 olake-fusion，长期运行需要同时运维两个项目，不能只看本仓库
- 205 个 open issue 与较宽的源端覆盖面，冷门数据库版本与 DDL 场景需实测
- 从成熟 Kafka/Flink 栈迁移会改变故障恢复与重放语义，需要重新设计运维流程

## 7. 谁该用 / 谁别碰

要做数据库到湖仓的实时复制、但不想维护 Kafka/Flink 集群的数据平台团队；已有成熟流处理栈且依赖其生态能力的组织迁移收益有限。

## 8. 评分依据

热度增速 **98** · 社区规模 **63** · 更新活跃 **72** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：价值主张很直接：把 CDC 到 Iceberg 的链路从多组件收敛成一个 Go 引擎，并用开放表格式避免锁定。exactly-once、schema evolution 与多 catalog 是实打实的工程内容。选型时要把 olake-fusion 的表维护一并纳入运维范围，并对官方吞吐指标做自己的基准验证。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-20 · 依据仓库 README 与 GitHub 元数据</sub>
