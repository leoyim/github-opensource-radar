---
date: 2026-11-16
repo: jaegertracing/jaeger
category: backend
categoryLabel: 后端 / 云原生
rating: 4.5
language: Go
stars: 23414
starGain: null
url: https://github.com/jaegertracing/jaeger
tags: [cncf, distributed-tracing, hacktoberfest, jaeger, observability, opentelemetry, tracing]
generatedAt: 2026-11-16T01:55:53.209Z
---

# jaegertracing/jaeger · 项目解读

> **一句话**：分布式追踪的老牌底座，v2 把自己收进 OpenTelemetry 的同一套骨架。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Go |
| 星标 | 23,414 |
| 今日新增 | — |
| 仓库 | https://github.com/jaegertracing/jaeger |

## 1. 它解决什么问题

微服务里一次请求跨十几个进程，排障时靠日志拼接很难还原调用链与耗时分布；自建追踪平台又要处理采集、存储、查询、采样与多语言 SDK 的一致性问题。

## 2. 为什么是现在

本期 23,414 星，README 首屏即标「Jaeger v2 is out」，并给出一条 docker run 同时暴露 UI 与 OTLP gRPC/HTTP 端口的启动方式。3,866 天的 CNCF 毕业项目仍在更新主版本，说明追踪层正加速向 OpenTelemetry Collector 统一。

## 3. 关键能力

- 一条 docker run 起 all-in-one，含 UI、collector、query 与内存存储
- 直接接收 OTLP：gRPC 4317、HTTP 4318，无需专有 SDK
- 架构包含 Collector、Storage Plugin、Query Service 与 Jaeger UI，支持采样回传
- v2 大量复用 OpenTelemetry Collector 组件，配置兼容性与弃用策略有成文承诺
- 文档明确 Go 版本跟随上游支持策略，存储后端按各上游生命周期给出支持范围

## 4. 架构与实现

以 OpenTelemetry SDK 为数据源，经 Collector 写入 Storage（可经 gRPC 存储插件扩展），Query Service 从存储读取并供 UI 展示；Collector 可通过 gRPC 向 SDK 下发采样配置。v2 与 OTel Collector 组件深度整合，因此配置迁移与版本策略成为 README 的重点。

## 5. 上手路径

1. 按 Quick Start 跑 all-in-one 容器，打开 localhost:16686 确认 UI 可用
2. 让一个示例服务通过 OTLP 4317/4318 上报 span，核对 trace 是否完整串联
3. 对照 Getting Started 换成生产存储后端，并阅读配置弃用宽限期说明
4. 若从 v1 迁移，先按版本兼容保证逐项核对 CLI flags 与配置项

## 6. 风险与边界

- v2 与 v1 的配置和 CLI 存在差异，存量部署升级前需按官方弃用策略规划
- 存储后端覆盖范围依赖各上游 EOL 策略，Elasticsearch/OpenSearch/Cassandra/ClickHouse 升级节奏会传导过来
- 内存存储仅适合 quick start，生产需自行选型并承担运维
- Go 版本跟随上游，移除旧版支持不视为破坏性变更，构建链要同步跟进

## 7. 谁该用 / 谁别碰

适合需要自建可观测性平台、已在用 OpenTelemetry 的后端与 SRE 团队；不适合只需单机日志排障的小项目。

## 8. 评分依据

热度增速 **94** · 社区规模 **84** · 更新活跃 **76** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：仍是自建追踪最稳妥的默认选项，v2 向 OTel 靠拢降低了长期维护成本；本期出现的意义更多是「基础设施工业标准仍在演进」，升级时把配置兼容当成主要工作量。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-16 · 依据仓库 README 与 GitHub 元数据</sub>
