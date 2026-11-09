---
date: 2026-11-09
repo: pug-sh/pug
category: data
categoryLabel: 数据 / 数据库
rating: 3
language: Go
stars: 109
starGain: 2
url: https://github.com/pug-sh/pug
tags: [ai, analytics, assistant, clickhouse, connectrpc, dpdp, flutter, flutter-analytics]
generatedAt: 2026-11-09T02:01:02.679Z
---

# pug-sh/pug · 项目解读

> **一句话**：自托管的产品分析平台，把事件采集、实时画像与漏斗留存放在一套 Go 服务里。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | Go |
| 星标 | 109 |
| 今日新增 | +2 |
| 仓库 | https://github.com/pug-sh/pug |

## 1. 它解决什么问题

产品行为分析常被拆成两端：埋点采集交给一套管线，漏斗留存与看板交给另一套 SaaS，数据在两边对齐困难，隐私与数据主体删除更难自行掌控。缺的是把采集、档案、分析与看板收在同一处、并且能自己部署的实现。

## 2. 为什么是现在

项目 158 天、109 星，本期 +2，13 fork、零 open issue，属于规模不大但结构完整的新仓。本期数据方向五项里四项日增仅为个位数，热度整体偏低，pug 的价值因此更在内容而非增量：它把 GDPR／DPDP 数据主体删除与预聚合快路径一并写进功能清单，属于面向真实部署而非演示的实现。

## 3. 关键能力

- 基于 NATS 的事件采集管线，自动补全地理位置、user-agent、机器人识别与 Web 归因信息
- 自动生成 Web 分析概览：访客、会话、浏览量、跳出率与流量来源，无需手工拼图块
- 实时世界地图 Live view，可下钻到具体访客与其刚触发的事件
- 基于 ClickHouse 的用户档案与活动 API，支持 identify 与 alias
- 趋势、漏斗、留存、分群、Sankey 用户流与 top-K 拆解，支持过滤、拆分与环比
- 由 insight 与 markdown 图块组成的看板，带板级时间窗与预聚合快路径；支持 GDPR／DPDP 数据主体删除

## 4. 架构与实现

Go 实现、AGPL-3.0 许可，后端服务与 workers 经 Connect RPC（HTTP/2）暴露，本地开发链路由 PostgreSQL、NATS 与 ClickHouse 组成，仓库标签另含 Flutter，说明前端另有实现。README 章节为 Features、Tech stack、Self-hosting、Quick start（构建二进制、起开发基础设施、跑迁移、灌演示数据、启动 dev server 与 workers）、Demo data、Development、Architecture。关键取舍是把实时采集、画像存储与分析查询分层落到三个成熟组件上，自己负责语义与看板层。

## 5. 上手路径

1. 按 Quick start 依次起 PostgreSQL、NATS 与 ClickHouse 开发基础设施
2. 跑 Postgres／NATS／ClickHouse 迁移，灌入演示项目与事件
3. 用自动生成的 Web 分析概览核对漏斗与留存结果，确认埋点口径
4. 准备自建时再读 Self-hosting 与 Architecture，并核对 AGPL-3.0 的对外服务义务

## 6. 风险与边界

- AGPL-3.0 对以网络服务形式提供有相应义务，公开部署前需评估
- PostgreSQL、NATS、ClickHouse 三套基础设施加 Go 服务与 workers，自建运维成本不低
- 109 星、零 open issue，社区规模与长期维护强度仍有限
- 漏斗、留存与用户流结论强依赖埋点口径，接入前需先统一事件定义

## 7. 谁该用 / 谁别碰

需要自建产品行为分析、且对数据留存位置与数据主体删除有明确要求的团队；以及想参考「事件管线 + 列存档案 + 分析看板」分层实现的开发者。只需少量页面统计、不愿维护三套基础设施的团队，用更轻的方案更合适。

## 8. 评分依据

热度增速 **78** · 社区规模 **37** · 更新活跃 **53** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：它在小体量下把采集、档案、分析与看板做成了完整闭环，并罕见地把数据主体删除列为功能项。代价是自建依赖较多、社区尚小，选型时应把运维投入一并计入。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-09 · 依据仓库 README 与 GitHub 元数据</sub>
