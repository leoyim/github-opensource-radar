---
date: 2026-11-06
repo: OpenLabs-so/openanalytics
category: frontend
categoryLabel: 前端 / Web
rating: 3.5
language: TypeScript
stars: 646
starGain: null
url: https://github.com/OpenLabs-so/openanalytics
tags: [agpl, analytics, clickhouse, cookieless, google-analytics-alternative, mcp-server, nextjs, open-source]
generatedAt: 2026-11-06T02:45:57.321Z
---

# OpenLabs-so/openanalytics · 项目解读

> **一句话**：把「不收集」写进架构：无 cookie、无跨站画像、只读聚合结果。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 646 |
| 今日新增 | — |
| 仓库 | https://github.com/OpenLabs-so/openanalytics |

## 1. 它解决什么问题

常规网站分析工具往往在统计流量的同时建立跨站用户画像，既带来同意横幅与合规负担，也让自托管变得困难。运营方真正需要的多是页面级聚合趋势与转化归因，而不是逐人轨迹；把这两件事拆开，是隐私优先方案能成立的前提。

## 2. 为什么是现在

项目 86 天、646 星，以速度估算热度约 56。它同时带 revenue attribution 与 MCP server 两个标签：前者回应「不追踪个人也要能算清转化」，后者把分析结果接到代理侧，是本期多个数据类工具共同的方向。README 还明确托管实例与自托管用的是同一套代码。

## 3. 关键能力

- 一个轻量 tracker 脚本，无 cookie、不做跨站用户画像
- 只做聚合读取，提供网站流量与收入归因
- 内置 MCP server，便于代理侧消费分析数据
- AGPL-3.0 许可，可部署在自己的硬件上
- 作者运营同代码的托管实例 getopen.so

## 4. 架构与实现

TypeScript 实现、AGPL-3.0 许可。数据采集侧极薄（单段脚本），服务端只保留聚合口径的读取，因此不具备逐人还原能力，这是隐私属性的结构性保证而非配置项。托管实例与自托管代码同源，降低了「云端版本才完整」的风险。README 摘录提到 Neon 的托管 Postgres 是推荐的自托管数据库，并说明项目受 Neon 开源计划赞助；MCP server 把聚合结果暴露给代理，归因能力也在同一套数据模型上实现。

## 5. 上手路径

1. 先自托管一版，确认 tracker 脚本体积与页面加载影响
2. 核对聚合指标是否覆盖自己的核心问题，再决定是否启用收入归因
3. 配置 Postgres（README 推荐 Neon）并验证数据留存策略
4. 需要代理消费时再接 MCP server，先确认暴露的字段范围

## 6. 风险与边界

- AGPL-3.0 具有网络使用相关的义务，作为对外服务提供前需评估许可影响
- 聚合口径意味着无法做逐用户漏斗与细粒度回放，需求方需提前对齐
- 收入归因的准确性取决于埋点与事件设计，工具本身不保证口径正确
- 项目仅 86 天、6 个开放议题，长期维护与迁移能力仍需观察

## 7. 谁该用 / 谁别碰

重视访客隐私、需要自托管且只想看聚合趋势与转化归因的站点运营者与独立开发者。

## 8. 评分依据

热度增速 **87** · 社区规模 **51** · 更新活跃 **6** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：用能力上的克制换合规上的简单，是很清晰的取舍。适合内容与产品站点；若业务强依赖逐用户行为分析，这套聚合模型不够用。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-06 · 依据仓库 README 与 GitHub 元数据</sub>
