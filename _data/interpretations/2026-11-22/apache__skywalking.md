---
date: 2026-11-22
repo: apache/skywalking
category: backend
categoryLabel: 后端 / 云原生
rating: 3.5
language: Java
stars: 25018
starGain: 1
url: https://github.com/apache/skywalking
tags: [apm, dapper, distributed-tracing, ebpf, logging, metrics, observability, open-telemetry]
generatedAt: 2026-11-22T02:08:13.737Z
---

# apache/skywalking · 项目解读

> **一句话**：本期年龄最大的项目：11 年 APM 基础设施，日增 +1。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Java |
| 星标 | 25,018 |
| 今日新增 | +1 |
| 仓库 | https://github.com/apache/skywalking |

## 1. 它解决什么问题

微服务与容器架构下，一次请求横跨多个服务与语言，缺少统一追踪、拓扑与告警时，定位性能问题只能靠各服务自己打日志拼时间线。

## 2. 为什么是现在

4,033 天、25,018 星、6,630 fork，当日新增仅 1 星，是本期唯一以「稳态」而非「增长」入榜的项目。它的价值不在新鲜，而在已被大量生产系统验证；对照本期多个 5–40 天新仓，成熟度分层一目了然。

## 3. 关键能力

- 端到端分布式追踪、服务拓扑分析与以服务为中心的可观测性看板
- 覆盖 Java、.NET Core、PHP、Node.js、Go、Lua、Rust、C++、Python 等语言的 agent
- 基于 eBPF 的 Rover，用于 Kubernetes 部署的监控与 CPU/网络性能诊断
- 自研 BanyanDB 观测数据库，单集群可处理 1,000 亿级以上遥测数据
- 接入 OpenTelemetry、Prometheus、Zabbix、Zipkin、Fluentd 等生态，并提供日志与告警流水线

## 4. 架构与实现

典型 APM 分层：多语言 agent 采集 → OAP 处理与聚合 → BanyanDB/兼容存储持久化 → UI 展示与告警；指标、追踪、日志经同一脚本流水线做格式化与采样，eBPF agent 作为无侵入补充。

## 5. 上手路径

1. 先看 Live Demo 与 Documentation，确认需要的接入方式
2. 在测试环境起 OAP + UI + 存储的最小组合
3. 给一个服务加 agent，验证追踪链路与拓扑是否完整
4. 再评估 BanyanDB 选型、采样策略与告警规则，别一上来接全量

## 6. 风险与边界

- 组件多（OAP、UI、存储、多语言 agent），部署与版本升级成本不低
- 11 年项目存在历史路径依赖，旧版本配置迁移需预留时间
- eBPF 能力涉及内核版本与权限，部分环境不可用
- 全量采集的存储与计算开销需要靠采样策略控制

## 7. 谁该用 / 谁别碰

已有可观测性团队、服务数量较多的中大型系统；单机或少量服务用更轻的方案即可，不必上整套。

## 8. 评分依据

热度增速 **52** · 社区规模 **86** · 更新活跃 **67** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它是本期最不需要被「种草」的一项：能力边界与运维成本都很清楚，选型看的是团队能否长期维护，而不是功能清单长短。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
