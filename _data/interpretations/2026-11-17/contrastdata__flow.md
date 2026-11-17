---
date: 2026-11-17
repo: contrastdata/flow
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: Rust
stars: 89
starGain: null
url: https://github.com/contrastdata/flow
tags: [apache-iceberg, cdc, change-data-capture, data-engineering, iceberg, logical-replication, postgresql, rust]
generatedAt: 2026-11-17T02:14:58.013Z
---

# contrastdata/flow · 项目解读

> **一句话**：一个 Rust 进程，把 Postgres 的变更持续搬进 Iceberg。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 89 |
| 今日新增 | — |
| 仓库 | https://github.com/contrastdata/flow |

## 1. 它解决什么问题

把业务库的变更同步到湖仓，通常要拼三件事：CDC 工具、表格式写入、以及压缩与元数据维护。组件越多，断点恢复与一致性越难保证，运维成本随链路长度上升。

## 2. 为什么是现在

本期 89 星、8 fork、9 个 open issue，69 天；项目标注 beta，但已具备 CI、CHANGELOG、SECURITY 与完整 demo 栈，工程完备度明显高于同规模新仓，说明它是团队产品而非个人试验。

## 3. 关键能力

- 先做一次全量 COPY，再用逻辑复制持续同步插入、更新与删除
- 以 Parquet 落盘，用 Iceberg v2 位置删除或 v3 删除向量表达变更
- 经 Iceberg REST catalog 发布到 S3 兼容存储，读端可独立访问
- 事务日志、持久化行索引与发布账本支撑重放、重连与中断恢复
- 后台压缩与写入在同一进程内完成，减少链路组件

## 4. 架构与实现

单个 Rust 守护进程承担读取、转换、写入与维护：从 Postgres 逻辑复制槽取变更，写入 Parquet 并提交 Iceberg 元数据，同时维护本地 RocksDB 行索引与事务日志以保证恢复语义。

## 5. 上手路径

1. 用 demo 的 compose 栈起一套 Postgres、MinIO、REST catalog 与 Trino
2. 改几行源表数据，在 Trino 里查目标表，确认增删改都被正确表达
3. 再跑一次 check 与 discover，把配置指向自己的库做只读预检

## 6. 风险与边界

- 标注 beta，生产使用前需自行验证故障恢复与长时间运行稳定性
- 依赖持久化磁盘保存日志与行索引，存储规划不能省
- Iceberg v3 删除向量在部分读端支持有限，需核对下游兼容性
- 项目规模小、维护者集中，长期支持存在单点风险

## 7. 谁该用 / 谁别碰

需要把 Postgres 数据实时同步到湖仓、且希望减少链路组件的数据工程团队；只做批量离线同步的场景用更简单的工具即可。

## 8. 评分依据

热度增速 **94** · 社区规模 **34** · 更新活跃 **63** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：把 CDC 与 Iceberg 维护压进一个进程，是对「链路越长越脆弱」的直接回应，工程完备度也超出星标量级。但 beta 标签与单点维护是现实约束，建议先在自己的库上做一轮故障演练，再考虑承接关键链路。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-17 · 依据仓库 README 与 GitHub 元数据</sub>
