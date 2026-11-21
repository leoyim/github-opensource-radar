---
date: 2026-11-21
repo: replit/datacat
category: backend
categoryLabel: 后端 / 云原生
rating: 3.5
language: TypeScript
stars: 466
starGain: 55
url: https://github.com/replit/datacat
tags: [alerting, apm, clickhouse, dashboards, logging, metrics, monitoring, observability]
generatedAt: 2026-11-21T12:26:36.590Z
---

# replit/datacat · 项目解读

> **一句话**：把指标、日志、追踪与告警自托管在一处，数据留在自己的库。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 466 |
| 今日新增 | +55 |
| 仓库 | https://github.com/replit/datacat |

## 1. 它解决什么问题

可观测性 SaaS 按数据量计费，成本随规模快速上升；自建又要拼凑多个开源组件，采集、存储、查询与告警之间需要大量胶水。

## 2. 为什么是现在

466 星、50 fork，仅四天，当日 +55。它直接兼容 OpenTelemetry 与 Datadog 采集端，切的是「想自托管但不想重写采集」的迁移场景。

## 3. 关键能力

- 指标浏览与公式、仪表盘与主机图
- 日志分面检索、实时尾随与追踪关联
- APM 服务目录、追踪浏览器与瀑布图
- 指标/日志/追踪告警，支持 Webhook 与 Slack 通知
- 组织、本地账号与 API 密钥管理
- OTel Collector 主机 agent 与 Node.js / Python 埋点库

## 4. 架构与实现

单一生产进程同时提供 API、Web UI、安装器与下载；数据落 PostgreSQL，追踪可选 ClickHouse；采集侧兼容 OTel 与 Datadog agent，降低迁移成本。

## 5. 上手路径

1. 用 Docker Compose 起一套最小环境
2. 接一个 OTel demo 应用，验证三类信号是否贯通
3. 再压一段真实流量，观察 PostgreSQL 在写入侧的瓶颈

## 6. 风险与边界

- 仅四天、零 issue，尚未经受真实反馈
- 规模上限、高可用与数据保留策略都需自行评估
- 单进程架构在生产环境是单点

## 7. 谁该用 / 谁别碰

希望把遥测数据留在自有基础设施、且已在用 OTel 或 Datadog 采集的团队。

## 8. 评分依据

热度增速 **87** · 社区规模 **49** · 更新活跃 **66** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：切入点务实——复用现有采集端，只替换存储与查询；但早期项目不宜直接承载核心生产监控。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-21 · 依据仓库 README 与 GitHub 元数据</sub>
