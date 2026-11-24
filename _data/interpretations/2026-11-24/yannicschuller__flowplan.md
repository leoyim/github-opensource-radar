---
date: 2026-11-24
repo: yannicschuller/flowplan
category: frontend
categoryLabel: 前端 / Web
rating: 3.5
language: TypeScript
stars: 198
starGain: 36
url: https://github.com/yannicschuller/flowplan
tags: [collaboration, docker, kanban, knowledge-base, markdown, nextjs, notion-alternative, open-source]
generatedAt: 2026-11-24T01:51:51.972Z
---

# yannicschuller/flowplan · 项目解读

> **一句话**：一个容器 + SQLite 起步的团队知识库，功能面覆盖到白板、手写与 flashcards。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 198 |
| 今日新增 | +36 |
| 仓库 | https://github.com/yannicschuller/flowplan |

## 1. 它解决什么问题

团队知识库的两难很具体：用 SaaS 省事但数据出境、按人头计费；自托管一套往往要同时跑应用、搜索服务与消息队列，几个容器起步，小团队没有余力维护。而功能一旦拆成多个产品，页面树、权限与检索又对不上。

## 2. 为什么是现在

198 星、上线 53 天、TypeScript、AGPL-3.0，日增 36。它的定位是「单容器可跑，需要时再扩」：默认 SQLite，规模上去切 PostgreSQL 与多实例集群；功能面覆盖文档、11 种视图的数据库、白板、手写笔记本、日记、项目与工单迭代、问卷、工作流、flashcards，且可选 AI 默认关闭。

## 3. 关键能力

- 文档、数据库（11 种视图）、白板、手写笔记本、日记在同一页面树内
- 项目、工单与迭代，问卷、工作流与 flashcards
- 默认单容器 + SQLite，无需外部搜索服务；可扩到 PostgreSQL 与多实例
- 可选 AI：默认关闭，可按功能与按人开启，支持本地 Ollama 或自带 Key
- 权限细化到单条记录，2FA 登录，文件与备份可用自有密钥加密
- 导出 Markdown + frontmatter、CSV 与 ZIP，数据可迁移

## 4. 架构与实现

Next.js 应用，默认单容器 + SQLite 部署；规模扩展时切 PostgreSQL 与多实例集群；AI 能力按功能与按人粒度开关，本地推理走 Ollama，外部则自带 Key。

## 5. 上手路径

1. 单容器起服务，先建一棵页面树验证层级与权限继承
2. 导入一份带 frontmatter 的 Markdown，确认元数据被保留
3. 试两三种数据库视图（表格、看板、日历），确认数据同源
4. 最后再决定是否启 AI 与切 PostgreSQL，避免过早增加运维面

## 6. 风险与边界

- 198 星 + 19 issue 属早期项目，数据模型仍可能变动，升级前务必备份
- AGPL-3.0 对二次分发与服务化有明确约束，商业产品需先评估
- 单容器 SQLite 在扩到多实例前是单点，且并发写能力受限
- AI 若接外部 Key，页面内容会出网，与「数据自主」的定位存在张力

## 7. 谁该用 / 谁别碰

想要数据自主、又不想养一套重运维栈的中小团队；对 AGPL 敏感的商业产品需先评估许可边界。

## 8. 评分依据

热度增速 **77** · 社区规模 **41** · 更新活跃 **65** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：定位准确：先用一个容器解决大部分知识库需求，把复杂度留到真正需要时。导出口径（Markdown / CSV / ZIP）是它对抗锁定最实在的一张牌。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-24 · 依据仓库 README 与 GitHub 元数据</sub>
