---
date: 2026-10-26
repo: yaojingang/GEOInflow
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: TypeScript
stars: 190
starGain: null
url: https://github.com/yaojingang/GEOInflow
tags: [ai-analytics, geo, mit, postgresql, self-hosted, web-analytics]
generatedAt: 2026-10-26T11:59:07.500Z
---

# yaojingang/GEOInflow · 项目解读

> **一句话**：自托管的 GEO 分析：看清哪些 AI 爬虫来了、抓了什么、有没有带来转化。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 190 |
| 今日新增 | — |
| 仓库 | https://github.com/yaojingang/GEOInflow |

## 1. 它解决什么问题

生成式搜索正在改变流量结构，但传统分析工具只认浏览器与搜索引擎，看不到 GPTBot 这类 AI 爬虫的抓取行为，也分不清「AI 引荐」与自然搜索。GEOInflow 把网站访客、AI 引荐、服务器抓取日志与内容清单放进同一个站点上下文。

## 2. 为什么是现在

仓龄 1 天、190 星，本期无日增数据，热度按速度估算（约 65/日）。样本极小，但主题踩在「AI 时代的站点可见性」上：GEO（生成式引擎优化）正从概念走向可测量。

## 3. 关键能力

- AI 爬虫识别：区分爬虫身份与用途，统计抓取活动与内容覆盖
- 缺口诊断：哪些重要页面完全没有被抓取记录，哪些请求失败
- AI 引荐与业务结果：把 AI 搜索带来的访问关联到转化
- 网站分析：默认无 Cookie 追踪
- GEO Weight（Beta）：用最近 30 个完整自然日的 AI 内容访问计算，附公式与证据
- 部署：PostgreSQL 为主，自动采集需公网 HTTPS + 采集密钥

## 4. 架构与实现

TypeScript 实现，PostgreSQL 核心存储（ClickHouse 保留部分能力）；数据入口分三类：浏览器跟踪脚本、AI 引荐标记、服务器抓取日志。README 有 Architecture 与 Deployment 专章，AI 分析默认关闭、需自选模型连接。

## 5. 上手路径

1. 先只用「网站分析 + 爬虫识别」，确认不需要模型 API Key 也能跑
2. 接服务器访问日志，观察 AI 爬虫的实际抓取路径与失败码
3. 再考虑开 AI 分析与 GEO Weight，并把公式与自己算的口径对齐

## 6. 风险与边界

- 1 天仓龄、190 星，几乎没有任何社区验证；生产可用性未知
- GEO Weight 仍是 Beta，指标口径可能变动，不适合作为对外汇报的唯一依据
- 自动采集要求公网 HTTPS 与采集密钥，暴露面需要额外加固

## 7. 谁该用 / 谁别碰

适合内容站、SaaS 官网想先摸清 AI 爬虫行为的团队做早期观察；需要稳定报表的团队应等它成熟或自建日志分析。

## 8. 评分依据

热度增速 **87** · 社区规模 **42** · 更新活跃 **77** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：选题（AI 爬虫可观测性）比实现更值得关注：它把「GEO」从营销词变成了可测量的抓取事实；但当前体量只能当探索性工具。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
