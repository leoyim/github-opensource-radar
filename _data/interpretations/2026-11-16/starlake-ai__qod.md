---
date: 2026-11-16
repo: starlake-ai/qod
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: Scala
stars: 146
starGain: null
url: https://github.com/starlake-ai/qod
tags: [apache-arrow, arrow-flight-sql, duckdb, ducklake, flightsql, lakehouse, query-engine, sql-gateway]
generatedAt: 2026-11-16T01:55:53.209Z
---

# starlake-ai/qod · 项目解读

> **一句话**：DuckDB / DuckLake 缺的那一层「服务」：认证、授权与连接路由，一条命令补齐。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Scala |
| 星标 | 146 |
| 今日新增 | — |
| 仓库 | https://github.com/starlake-ai/qod |

## 1. 它解决什么问题

DuckLake 给了 Postgres 支撑的湖仓目录，DuckDB 给了引擎，但两者之间没有并发用户、身份认证、授权与连接路由；一个房间的人要查同一份数据，就得各自开一个私有 DuckDB 进程，权限也无从谈起。

## 2. 为什么是现在

本期 146 星、172 天，README 明确把「DuckLake 有意留白的部分」作为定位起点，并提供 uvx qod@latest serve --demo 一条命令起带行列级安全的多租户仓库；与本期 tobilg/quacklake 同榜，两项从不同路径补同一块缺口，说明 DuckLake 的服务层正在成形。

## 3. 关键能力

- 把 DuckLake / DuckDB 变成多租户 SQL 仓库：按需 DuckDB 节点、最少负载路由
- 表级 RBAC、列级安全与动态数据脱敏，策略在查询时在引擎内判定
- Arrow Flight SQL 对外，JDBC/ODBC/ADBC/PyArrow/DBeaver/Spark 等客户端直接连
- 本地 DuckDB 可通过 Quack 协议 ATTACH 网关表，与本地表在同一条 SQL 里 join，策略依旧生效
- AI agent 经 MCP 使用同一身份与授权，写入走分支并由人工合并
- 支持对接 Keycloak / Azure AD / Google / Cognito / JWT / 数据库等身份源，单二进制自有部署

## 4. 架构与实现

网关前置 FlightSQL edge（31338）、原生 Quack 监听（9494）与管理 UI（20900）；按 tenant/pool/user 解析主体，策略下沉到查询执行侧。每个租户持有独立 DuckLake catalog DB，语句按负载路由到单个 DuckDB 节点，不做跨节点 shuffle。README 明确声明这一边界，并建议 TB 级分布式查询改用 Trino / StarRocks。

## 5. 上手路径

1. 用 uvx qod@latest serve --demo 起种子仓库，按 admin UI 提示切换 alice 与 acme-admin 两个主体观察脱敏差异
2. 换用 JDBC 或 ADBC 连接串连一次，确认 BI 客户端无需定制驱动
3. 在本地 DuckDB 里 ATTACH 网关，跑一条本地表与网关表的 join，验证无授权表被拒
4. 生产前接通现有 IdP 并逐项核对 tenant/pool 隔离与写入分支的合并流程

## 6. 风险与边界

- 每条语句路由到单节点、不做跨节点 join，README 已明确不适合 TB 级分布式查询
- Quack 监听默认明文 HTTP，远程访问需显式开启 TLS 或自担风险
- --demo 使用内嵌的一次性 Postgres 与固定口令，仅限本地体验
- 项目体量小（146 星、172 天），行列级策略与分支写入的正确性需自行验证

## 7. 谁该用 / 谁别碰

适合已用 DuckDB/DuckLake、需要把数据开放给多个团队或 BI 工具的数据平台工程师；不适合单应用内嵌 DuckDB 或需要大规模分布式 join 的场景。

## 8. 评分依据

热度增速 **90** · 社区规模 **38** · 更新活跃 **64** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：定位切得准：不去重写引擎，只补 DuckLake 刻意不做的服务层，且把 agent 与人工合并纳入权限模型。边界写得诚实是其加分项；生产采用前重点压测策略执行与单节点路由的实际上限。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-16 · 依据仓库 README 与 GitHub 元数据</sub>
