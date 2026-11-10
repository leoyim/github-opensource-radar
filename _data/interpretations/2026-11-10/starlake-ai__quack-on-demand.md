---
date: 2026-11-10
repo: starlake-ai/quack-on-demand
category: data
categoryLabel: 数据 / 数据库
rating: 1.5
language: Scala
stars: 144
starGain: 0
url: https://github.com/starlake-ai/quack-on-demand
tags: [apache-arrow, arrow-flight-sql, duckdb, ducklake, flightsql, lakehouse, query-engine, sql-gateway]
generatedAt: 2026-11-10T02:30:51.336Z
---

# starlake-ai/quack-on-demand · 项目解读

> **一句话**：用 Arrow Flight SQL 把 DuckDB / DuckLake 变成带行列权限的多租户服务，一条命令即可演示。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌗 1.5 / 5.0 |
| 语言 | Scala |
| 星标 | 144 |
| 今日新增 | +0 |
| 仓库 | https://github.com/starlake-ai/quack-on-demand |

## 1. 它解决什么问题

DuckDB 作为嵌入式引擎很好用，但一旦要让多个团队或应用共享同一份数据，就缺一层服务化能力：标准线协议、身份认证、表 / 行 / 列级权限、连接池与管理界面都得自己搭。给每个租户各开一个 DuckDB 进程又很快失控。

## 2. 为什么是现在

166 天 144 星、11 fork、12 个 open issue，本期 +0。README 把它定位为「The missing serving layer」（缺失的服务层），并给出极低的体验门槛：uvx qod@latest serve --demo 一条命令就起好带行列脱敏的种子仓库，切换 principal 能直接看到掩码与行过滤生效；同时也直白写出「什么时候不该用」——单应用内嵌用 DuckDB 本身、TB 级跨节点 join 用 Trino / Dremio / StarRocks。

## 3. 关键能力

- 以 Arrow Flight SQL 作线协议，可被 JDBC / ODBC / ADBC 客户端连接
- 多租户连接池与按角色路由，多个租户共享基础设施而不必各开进程
- 表级、行级、列级安全：演示里同一查询对 analyst 掩码电话并只返回特定分段行
- 可插拔认证：数据库 / JWT / OIDC，可接 Keycloak、Azure AD、Google、Cognito
- 实时管理控制台与 FlightSQL edge、DuckDB 原生 quack 端点
- 一条命令可服务 .duckdb 文件、Parquet / CSV 目录或 s3:// 远程前缀
- 支持本地 DuckDB 与远端 QoD 表混合 join

## 4. 架构与实现

Scala 实现、Apache-2.0 许可。网关把 DuckDB（原生 Quack）、DuckLake 与 Iceberg 放到同一服务层后面，用 Arrow Flight SQL 统一对外协议，认证与 ACL 作为可插拔层；README 的 Quick start 给出原生 Linux / macOS / Windows 与 Docker 两条路径，示例里 admin UI 在 20900、FlightSQL edge 在 31338。README 的「Who is this for?」章节明确划出边界：单应用内嵌直接用 DuckDB，TB 级跨节点 shuffle / join 应看 Trino / Dremio / StarRocks——这种反向选型说明在数据工具里不多见。11 fork、12 个 issue。

## 5. 上手路径

1. 跑 uvx qod@latest serve --demo，先在笔记本上把整套网关与节点起起来
2. 在 admin UI 用 tenant=acme、pool=bi 登录，切换 principal 观察掩码与行过滤
3. 用 JDBC / ODBC / ADBC 客户端连 FlightSQL edge，验证标准协议可用
4. 换成 uvx qod@latest serve ./sales.duckdb 服务自己的数据文件
5. 读 Who is this for? 与边界说明，确认规模落在它的适用区间后再规划生产部署

## 6. 风险与边界

- Scala 技术栈与 Arrow Flight SQL 协议对只熟悉 DuckDB 单机用法的团队有额外学习成本
- 项目 166 天、144 星、11 fork，生产级声明仍需用自己的负载验证
- README 明确不适合 TB 级跨节点 shuffle / join，规模超出后要换引擎
- 演示默认 admin / admin，正式环境必须按说明设置 QOD_ADMIN_PASSWORD 与真实 IdP
- 认证、ACL、租户路由叠加后配置面较宽，权限模型需要仔细设计与回归测试

## 7. 谁该用 / 谁别碰

要把 DuckDB / DuckLake 数据仓库开放给多个团队或应用、且需要行列级权限与标准协议的数据平台工程师；以及想研究嵌入式引擎如何服务化的人。只在单个应用里内嵌 DuckDB 的场景，按 README 建议直接使用 DuckDB 即可。

## 8. 评分依据

热度增速 **0** · 社区规模 **38** · 更新活跃 **61** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **1.5 星**）

**结论**：把「嵌入式分析引擎怎么服务化」这件事做成了可一条命令验证的产品，行列脱敏与多租户路由都在演示里能直接看到。更难得的是 README 主动写出不适用的规模区间，选型时少走弯路；代价是 Scala 栈与较宽的配置面。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-10 · 依据仓库 README 与 GitHub 元数据</sub>
