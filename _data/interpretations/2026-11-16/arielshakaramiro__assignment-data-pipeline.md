---
date: 2026-11-16
repo: arielshakaramiro/assignment-data-pipeline
category: data
categoryLabel: 数据 / 数据库
rating: 1
language: Python
stars: 66
starGain: 0
url: https://github.com/arielshakaramiro/assignment-data-pipeline
tags: [data-cleaning, data-engineering, data-pipeline, etl, github-actions, pandas, pytest, python]
generatedAt: 2026-11-16T01:55:53.209Z
---

# arielshakaramiro/assignment-data-pipeline · 项目解读

> **一句话**：一份把「脏数据」每一步处理理由都写清楚的 ETL 教学作业。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟 1.0 / 5.0 |
| 语言 | Python |
| 星标 | 66 |
| 今日新增 | +0 |
| 仓库 | https://github.com/arielshakaramiro/assignment-data-pipeline |

## 1. 它解决什么问题

入门数据工程时，最常见的困惑不是不会调用 drop_duplicates 或 fillna，而是不知道什么时候该填中位数、什么时候必须留空；课程作业往往只交代码，不解释选择依据，也不配测试与 CI。

## 2. 为什么是现在

本期 66 星、78 天，README 用印尼语逐项列出 205×30 的原始汽车数据集、17 个缺失值、4 条重复记录与 7 类清洗动作的方法与理由，并特别说明 `transaction_date` 作为事实字段刻意不插补。数据方向本期多项为教学/小体量内容，这一项的价值在过程记录而非工程规模。

## 3. 关键能力

- Python + Pandas + NumPy 的完整 ETL：Raw CSV → 检查 → 清洗 → 转换 → Processed CSV
- 清洗覆盖文本统一与去空格、去重、多格式日期归一、序数类别词转数字、中位数/众数填充
- 转换包含 14 列 Min-Max 归一化、序数编码、One-Hot 编码与高频类别的 frequency encoding
- 为每类处理给出选择理由，并明确事实型日期字段留空、不臆造记录
- 附 pytest 单元/集成测试、GitHub Actions CI、数据流程图与缺失值/缩放对比图

## 4. 架构与实现

小型课程项目结构：data/raw 与 data/processed 分离输入输出，src/ 放 pipeline.py 与 EDA 图表脚本，tests/ 放 pytest，documentation/ 存图示，.github/workflows 每次 push 重跑 pipeline。README 以表格逐步对应「问题 → 方法 → 理由」。

## 5. 上手路径

1. 先读 README 的「Permasalahan yang Ditemukan」与清洗对照表，理解每条决策的依据
2. 按 requirements.txt 装依赖，本地跑一次 pipeline，核对 205 → 201 行与缺失值 17 → 0
3. 看 tests/test_pipeline.py 与 CI 配置，确认断言覆盖哪些清洗结果
4. 把其中的决策表当作模板，换成自己的数据集逐项复核哪些假设不成立

## 6. 风险与边界

- 这是课程作业而非通用框架，数据集固定为 205 行汽车规格，不宜直接用于生产管道
- README 主体为印尼语，其他语种读者需要额外翻译成本
- 清洗策略（如中位数填充价格、Min-Max 缩放）与具体教学假设绑定，换场景未必成立
- 仅 66 星、78 天，无社区维护预期

## 7. 谁该用 / 谁别碰

适合数据工程初学者、需要一份可对照的 ETL 决策记录或教学样例的人；不适合寻找可复用生产级管道库的团队。

## 8. 评分依据

热度增速 **0** · 社区规模 **29** · 更新活跃 **2** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **1.0 星**）

**结论**：亮点是把「为什么这样填、为什么这里必须留空」写成了明文，比大多数作业更接近真实数据治理的思维方式；把它当教材读，不要当依赖引入。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-16 · 依据仓库 README 与 GitHub 元数据</sub>
