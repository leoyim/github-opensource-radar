---
date: 2026-11-14
repo: datasifaw/airflow-weather-pipeline
category: data
categoryLabel: 数据 / 数据库
rating: 2.5
language: Python
stars: 52
starGain: 1
url: https://github.com/datasifaw/airflow-weather-pipeline
tags: [airflow, airflow-dags, airflow-docker, airflow-plugin, data, data-analysis, data-analytics, data-engineering]
generatedAt: 2026-11-14T08:52:50.287Z
---

# datasifaw/airflow-weather-pipeline · 项目解读

> **一句话**：一份把 Airflow、PostgreSQL 与 Metabase 串成天气 ETL 的完整教学工程。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌗 2.5 / 5.0 |
| 语言 | Python |
| 星标 | 52 |
| 今日新增 | +1 |
| 仓库 | https://github.com/datasifaw/airflow-weather-pipeline |

## 1. 它解决什么问题

学数据工程时最容易卡在「单个组件都会、串不起来」：调度、存储、查询与看板各自有教程，但一个能从头跑通、端口与目录结构都写清楚的最小闭环并不多，尤其对法语资料圈更是如此。

## 2. 为什么是现在

93 天、52 星，本期 +1。这是本期数据方向连续多期走弱后的一个典型样本：五项星标全在 45–99 之间、日增合计仅个位数，但内容从早前的教学占位转向可复现的管道工程，判定应看素材密度而非星标。README 为法语，含 14 个实质章节。

## 3. 关键能力

- 用 Apache Airflow 2.9.1 调度 DAG，从 OpenWeatherMap API 拉取天气数据
- 经 psycopg2 / requests 写入 PostgreSQL 13，并用 pgAdmin 管理
- Metabase 做可视化，README 给出按城市平均温度、平均湿度等看板指标
- Docker / Docker Compose 一键拉起全套组件，端口列表与数据结构单列成章
- 技术栈、目录结构、安装与启动步骤按章节完整给出

## 4. 架构与实现

典型单机 ETL 闭环：Airflow 负责调度与 DAG 定义，Python 任务调 OpenWeatherMap 并把结果写入 PostgreSQL，pgAdmin 做库管理，Metabase 直连同一库出看板，全部容器由 Docker Compose 编排，端口与数据目录在 README 中显式列出。

## 5. 上手路径

1. 按 Installation 用 Docker Compose 拉起全套服务，先确认各端口不冲突
2. 申请 OpenWeatherMap API key 并放入配置，手动触发一次 DAG 观察入库结果
3. 在 pgAdmin 里检查表结构与字段类型，再照 README 配 Metabase 看板
4. 改动一个 DAG 的调度频率或字段，验证整条链路可复现

## 6. 风险与边界

- 无许可证文件，复用代码到公司项目前须先与作者确认授权
- 零 fork、零 issue、52 星，社区支持几乎为零，遇到问题需自行排障
- 依赖第三方天气 API，密钥配额与接口变更会直接让 DAG 失败
- README 为法语，中文读者需额外翻译成本
- 固定版本组合（Airflow 2.9.1 / PostgreSQL 13）较旧，升级需逐项验证

## 7. 谁该用 / 谁别碰

想用一个可跑通的小项目理解 Airflow + 数仓 + BI 全链路的数据工程初学者。

## 8. 评分依据

热度增速 **72** · 社区规模 **26** · 更新活跃 **4** · 工程成熟 **50**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **2.5 星**）

**结论**：它不是新工具，价值在于把调度、入库、管理、看板四个环节写成一份能照着跑的完整说明。适合当练习骨架；用于生产前需补许可证、密钥管理与版本升级策略。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-14 · 依据仓库 README 与 GitHub 元数据</sub>
