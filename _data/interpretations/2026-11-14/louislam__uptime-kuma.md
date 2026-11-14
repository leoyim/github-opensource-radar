---
date: 2026-11-14
repo: louislam/uptime-kuma
category: backend
categoryLabel: 后端 / 云原生
rating: 4.5
language: JavaScript
stars: 93977
starGain: 71
url: https://github.com/louislam/uptime-kuma
tags: [docker, monitor, monitoring, responsive, self-hosted, selfhosted, single-page-app, socket-io]
generatedAt: 2026-11-14T08:52:50.287Z
---

# louislam/uptime-kuma · 项目解读

> **一句话**：一条 Docker 命令就能跑起来的自托管监控，把状态页、告警与多协议探测收在一个界面里。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | JavaScript |
| 星标 | 93,977 |
| 今日新增 | +71 |
| 仓库 | https://github.com/louislam/uptime-kuma |

## 1. 它解决什么问题

中小团队要监控服务可用性时，往往要么上整套 Prometheus + Grafana 显得过重，要么用托管服务把探测数据和告警渠道交出去。缺的是一个部署成本低、协议覆盖面够、通知渠道齐全、还能直接对外展示状态页的方案。

## 2. 为什么是现在

1,960 天、93,977 星，本期 +71，是后端方向星标最高的一项。它与本期 rustfs、ZooKeeper、Kubescape 同属「常驻基础设施」：本期后端五项合计日增仅约 163，但这些组件决定了新工具必须对接的现实环境。

## 3. 关键能力

- 支持 HTTP(s)、TCP、关键字、JSON Query、WebSocket、Ping、DNS 记录、Push、Steam 游戏服务器与 Docker 容器等多种探测类型
- 最短 20 秒探测间隔，提供 Ping 图表、证书信息与代理支持
- 90+ 通知渠道（Telegram、Discord、Gotify、Slack、Pushover、SMTP 等）与 2FA
- 多状态页、可把状态页映射到指定域名，界面为响应式单页应用
- Docker Compose / 单条 Docker 命令 / 非 Docker（PM2 后台）三种部署方式，支持多语言

## 4. 架构与实现

Node.js 单页应用 + Socket.IO 实时推送，探测调度与通知分发由服务端承担，数据落在自托管的本地存储中；前端负责 reactive 的状态展示与配置，因此部署可以压缩到一个容器、不需要外部时序库。

## 5. 上手路径

1. 用 Docker Compose 起一个实例，先加一条 HTTP 探测与一条 Ping 探测验证调度
2. 接一个通知渠道并故意让探测失败，确认告警链路与恢复通知
3. 需要对外展示时配置独立状态页并映射到自有域名，检查认证与暴露范围
4. 生产使用前确认持久化卷、备份与升级路径，别让监控自身成为单点

## 6. 风险与边界

- 855 个 open issue 与近十万星同在，功能多、版本迭代快，升级前需回归自己用到的探测类型
- 单机自托管架构本身是单点，监控数据持久化与备份要单独设计
- 默认提供 live demo 且数据 10 分钟清空，配置时别把凭据填进演示实例
- 对外状态页若直接暴露，可能泄露内部服务名与拓扑
- 20 秒间隔的大规模探测会形成持续负载，目标侧需评估

## 7. 谁该用 / 谁别碰

需要低成本可用性监控与对外状态页的自托管团队、独立开发者与运维人员。

## 8. 评分依据

热度增速 **87** · 社区规模 **93** · 更新活跃 **75** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：部署门槛与功能密度的平衡做得好，是「先有监控」这一步的稳妥默认项。规模上来后要正视单机与存储的限制：把持久化、备份与访问控制补齐，或把它定位为轻量层而非完整可观测平台。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-14 · 依据仓库 README 与 GitHub 元数据</sub>
