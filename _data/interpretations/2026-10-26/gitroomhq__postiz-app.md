---
date: 2026-10-26
repo: gitroomhq/postiz-app
category: frontend
categoryLabel: 前端 / Web
rating: 4.5
language: TypeScript
stars: 37925
starGain: 146
url: https://github.com/gitroomhq/postiz-app
tags: [nextjs, open-source, open-source-social-media-scheduling-tool, oss, postiz-cloud, postiz-hosted, redis, scheduling-tool]
generatedAt: 2026-10-26T11:59:07.500Z
---

# gitroomhq/postiz-app · 项目解读

> **一句话**：自托管的社媒排程与运营中台：多平台发帖、分析、协作、API 全都在。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 37,925 |
| 今日新增 | +146 |
| 仓库 | https://github.com/gitroomhq/postiz-app |

## 1. 它解决什么问题

社媒运营被拆在多个平台后台里，排期、素材、评论、数据各一套界面，团队协作只能靠表格。Postiz 把多平台发帖排程、分析、团队协作与对外 API 收进一个可自托管的系统。

## 2. 为什么是现在

今日 +146 星。它是本期少见的「成熟且仍在增长」的项目（3.3 年仓龄、37,925 星），说明开源社媒工具的需求已经从「替代 Buffer」变成「自建运营基础设施」。

## 3. 关键能力

- 多平台排程发帖，内置多项 AI 辅助功能
- 分析度量：帖子表现与账号数据
- 团队协作：成员邀请、评论、交接与稿件交换
- 对外集成：Public API、NodeJS SDK、n8n / Make.com / Zapier 自定义节点
- SaaS 与自托管双形态（Postiz Cloud 与开源版）

## 4. 架构与实现

pnpm workspaces 单仓，Next.js（React）前端，Prisma + PostgreSQL 为默认存储，Redis 参与队列；README 的 Tech Stack 与 Quick Start 章节给出本地起服务的路径。

## 5. 上手路径

1. 按 Quick Start 用 Docker 或 pnpm workspace 起一套，先接一个平台验证发帖链路
2. 确认 OAuth 应用与平台审核要求（各平台对第三方发帖有各自的准入）
3. 需要自动化再开 Public API 或 n8n 节点，避免一开始就全自动

## 6. 风险与边界

- AGPL-3.0：对外提供服务会触发源码开放义务，商业化前必须评估
- 各平台 API 政策与配额变化会直接影响可用性，自托管也躲不开
- 自托管意味着 OAuth 凭据、素材与客户数据全部由你保管，安全责任转移给你

## 7. 谁该用 / 谁别碰

适合有稳定社媒运营需求、且不接受把账号凭据交给第三方 SaaS 的团队；只发几条文案的个体，直接用平台原生工具更省事。

## 8. 评分依据

热度增速 **89** · 社区规模 **88** · 更新活跃 **62** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：功能面与工程成熟度都在线，是自建社媒中台的现实选项；决策点是 AGPL 义务与凭据自持带来的运维责任。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
