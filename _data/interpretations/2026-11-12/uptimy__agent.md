---
date: 2026-11-12
repo: uptimy/agent
category: backend
categoryLabel: 后端 / 云原生
rating: 3
language: Go
stars: 80
starGain: null
url: https://github.com/uptimy/agent
tags: [cron-monitoring, golang, healthcheck, heartbeat, helm-chart, kubernetes, monitoring, railway]
generatedAt: 2026-11-12T02:26:30.915Z
---

# uptimy/agent · 项目解读

> **一句话**：把探测器放进内网，连数据库查询、K8s 副本和 cron 有没有跑都能监控。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | Go |
| 星标 | 80 |
| 今日新增 | — |
| 仓库 | https://github.com/uptimy/agent |

## 1. 它解决什么问题

外部可用性监控只能看到公网能碰到的那层：内网 API、私有数据库、定时备份与批处理任务是否按时跑完，往往要等下游报错才发现。而传统监控栈又偏重，给一个小团队装 Prometheus + Alertmanager 并不划算。

## 2. 为什么是现在

42 天 80 星、1 fork、1 issue，是本期最小的新项目之一，但切点很具体：与 Uptime Kuma 一类以外部探测为主的工具相比，它把「跑在服务旁边」作为架构前提。本期后端方向里，它是「把能力浓缩进单二进制」这一侧的代表。

## 3. 关键能力

- 健康检查覆盖 HTTP、Postgres、MySQL、Redis、TCP、ping、DNS、TLS 到期与 Kubernetes 工作负载，可登录数据库执行一条查询
- 心跳监控面向 cron、备份与 worker：漏跑、失败以及每次耗时都能告警
- 30 多种告警渠道（邮件、Slack、Teams、Discord、Telegram、ntfy、PagerDuty、webhook 等），渠道故障最长重试一小时
- 自有域名状态页，含事件、维护窗口与徽章；监控项用 YAML 写成「监控即代码」
- Kubernetes 可按 label 自动纳管，Railway 可监控整个项目；提供 Docker、Helm 与预编译二进制

## 4. 架构与实现

单个 Go 二进制读取 YAML 中的 healthchecks 与 heartbeats 定义，在内网侧发起探测并把结果送到告警渠道与状态页；可选 Uptimy Cloud 作为托管形态。Apache-2.0 许可，README 含「Coming from Uptime Kuma」的对照。

## 5. 上手路径

1. 用 Docker 或单二进制在内网一台常开的机器上启动服务
2. 写一段最小 YAML：一个 HTTP 健康检查、一条数据库查询、一个 Kubernetes 工作负载与一个 cron 心跳
3. 配一个告警渠道并故意让它失效，验证重试与恢复通知
4. 把状态页挂到自有域名，再逐步把监控项纳入版本管理

## 6. 风险与边界

- 42 天、1 fork、1 issue，社区验证很少；告警重试与状态页能力建议逐项实测
- 「监控即代码」意味着每次配置变更都要走自己的发布与回滚流程，改错会直接改掉监控范围
- 数据库探测需要可用凭据，最小权限与凭据轮换要先设计，别用生产高权账号
- Cloud 版为可选商业服务，自托管与云之间的功能边界需读文档确认
- 单二进制便于部署，但自身也是单点，监控它的责任仍要另找方式承担

## 7. 谁该用 / 谁别碰

需要监控内网服务、数据库与定时任务、偏好轻量自托管的小团队。已经建成完整 Prometheus / Alertmanager 体系的场景，重复引入收益有限。

## 8. 评分依据

热度增速 **70** · 社区规模 **30** · 更新活跃 **55** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：差异点不在「又一个 uptime 页面」，而在把探测器放到内网、把 cron 漏跑也当作一等公民。功能清单很完整，但 42 天、几乎无社区验证，采用前需要自己把关键路径测一遍。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-12 · 依据仓库 README 与 GitHub 元数据</sub>
