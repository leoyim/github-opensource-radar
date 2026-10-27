---
date: 2026-10-27
repo: benbjohnson/litestream
category: data
categoryLabel: 数据 / 数据库
rating: 4
language: Go
stars: 14543
starGain: 9
url: https://github.com/benbjohnson/litestream
tags: [replication, s3, sqlite]
generatedAt: 2026-10-27T01:47:11.541Z
---

# benbjohnson/litestream · 项目解读

> **一句话**：给 SQLite 加一层流式复制：增量备份到 S3，不碰数据文件。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Go |
| 星标 | 14,543 |
| 今日新增 | +9 |
| 仓库 | https://github.com/benbjohnson/litestream |

## 1. 它解决什么问题

SQLite 适合单机服务，但备份方案薄弱：定时 cp 会拿到不一致快照，WAL 模式下的复制更麻烦。Litestream 以独立后台进程运行，通过 SQLite API 读取变更并增量复制到另一个文件或 S3，因此不会因直接操作文件而损坏数据库。

## 2. 为什么是现在

14,543 星、今日 +9。SQLite 正在被重新评估为「足够好的生产数据库」，随之而来的是备份与恢复能力的缺口；Litestream 补的正是这一块。README 极简，定位也很清楚：disaster recovery，而不是集群。

## 3. 关键能力

- 持续增量复制到本地文件或 S3
- 通过 SQLite API 通信，避免直接改数据文件带来的损坏风险
- 作为独立后台进程运行，不改应用代码
- 面向灾难恢复场景设计

## 4. 架构与实现

单进程 sidecar 模式：订阅 SQLite 的变更流，按页/事务增量写到目标存储，恢复时按时间点回放。README 明确「only communicates with SQLite through the SQLite API」——这是它安全性的核心设计约束。本期 README 未提供章节结构，更多细节在上游站点文档。

## 5. 上手路径

1. 先在测试库上配好 S3 目标，验证一次完整恢复流程再上生产
2. 设置合理的保留策略，增量副本会随时间累积存储成本
3. 把恢复演练写进运维手册：没有演练过的备份等于没有备份

## 6. 风险与边界

- 它是备份工具而非读写分离方案，无法分担查询压力
- 恢复时长取决于副本规模，RTO 需求高的业务要实测
- S3 凭证与权限配置错误会静默中断复制，需要监控复制延迟

## 7. 谁该用 / 谁别碰

用 SQLite 支撑单机服务、需要异地备份与快速恢复的场景；需要水平扩展读写的系统应换数据库而非加这一层。

## 8. 评分依据

热度增速 **82** · 社区规模 **76** · 更新活跃 **71** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：定位精准、实现克制，是 SQLite 生产化的关键补件；前提是你愿意把「恢复演练」当成日常运维的一部分。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-27 · 依据仓库 README 与 GitHub 元数据</sub>
