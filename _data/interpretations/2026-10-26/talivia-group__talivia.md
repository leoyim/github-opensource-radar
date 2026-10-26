---
date: 2026-10-26
repo: talivia-group/talivia
category: data
categoryLabel: 数据 / 数据库
rating: 4
language: TypeScript
stars: 2345
starGain: null
url: https://github.com/talivia-group/talivia
tags: [analytics, bing, datafast, dodopayments, google-search, lemonsqueezy, polar, product-analytics]
generatedAt: 2026-10-26T11:59:07.500Z
---

# talivia-group/talivia · 项目解读

> **一句话**：自托管的「收入优先」分析：访客、回放、付费转化放在同一条链路上看。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 2,345 |
| 今日新增 | — |
| 仓库 | https://github.com/talivia-group/talivia |

## 1. 它解决什么问题

常规网站分析告诉你来了多少人，却不告诉你这些人带来了多少钱；收入数据在支付平台、行为数据在分析工具，两套口径对不上。Talivia 把网页分析、会话回放与收入归因合并，并把 Stripe、LemonSqueezy、Polar 等支付源直接接进来。

## 2. 为什么是现在

仓龄 89 天、2,345 星，本期无 Trending 日增数据，热度按速度估算（约 198/日）。它的上榜说明「自托管 + 收入归因」这个细分需求正在从 SaaS 向开源迁移。

## 3. 关键能力

- 网站分析：访问、来源、页面表现
- 会话回放（可在站点设置里启用）
- 收入归因：把支付事件与访问来源关联
- 支付源集成：Stripe、LemonSqueezy、Polar、Dodo、Yolfi 与手动 Payment API
- 网站协作者与共享分析、导入导出
- AI agents 与 MCP 入口（README 有专章）

## 4. 架构与实现

TypeScript 实现，PostgreSQL 存储；交付形态为 Docker 部署 + 跟踪脚本（snippet），README 有 Local development、Configuration、Backups and upgrades 章节，说明自托管的完整生命周期是被考虑的。

## 5. 上手路径

1. 先 Docker 起服务，立刻改掉默认 admin/admin 凭据
2. 建站点、贴 snippet，确认一次访问能出现在仪表盘
3. 再在网站设置里接支付源，验证收入归因口径与财务系统是否一致

## 6. 风险与边界

- 开源版是云版的子集：Google Search Console、Bing、GitHub 活动、社媒提及只在云版，别按云版功能做选型
- 默认凭据 admin/admin 若不改就是直接的数据泄露入口
- 会话回放涉及录制用户行为，需按当地法规做告知与脱敏

## 7. 谁该用 / 谁别碰

适合独立开发者与小型 SaaS，想自己掌握访客与收入数据；需要完整归因（含搜索控制台、社媒）的团队应评估云版或自建管道。

## 8. 评分依据

热度增速 **97** · 社区规模 **62** · 更新活跃 **53** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：定位精准（收入归因 + 回放 + 自托管），是独立开发者视角的实用工具；但「开源子集」与默认凭据两点必须先处理。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
