---
date: 2026-11-06
repo: royalbhati/sqltoerdiagram
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: HTML
stars: 715
starGain: null
url: https://github.com/royalbhati/sqltoerdiagram
tags: [data-modeling, database, database-schema, dbdiagram, dbml, developer-tools, diagram, entity-relationship-diagram]
generatedAt: 2026-11-06T02:45:57.321Z
---

# royalbhati/sqltoerdiagram · 项目解读

> **一句话**：粘贴 CREATE TABLE 就得到可交互 ER 图，全程在浏览器里，schema 不上传。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | HTML |
| 星标 | 715 |
| 今日新增 | — |
| 仓库 | https://github.com/royalbhati/sqltoerdiagram |

## 1. 它解决什么问题

想快速看清一个库的表关系，常见工具要么收费、要么要注册并把 schema 上传给第三方。对内部系统来说，这既多一步流程，也有数据外泄的顾虑。

## 2. 为什么是现在

项目 145 天、715 星、71 fork，热度为速度估算（约 46）。它是本期数据方向里最轻的一件，与 navop、duckle、hflow 的重量级平台恰成两端：一端是完整工作台，一端是「一个静态页面解决一个动作」。

## 3. 关键能力

- 粘贴 CREATE TABLE 语句即可生成交互式实体关系图
- 支持 SQL 与图之间的双向编辑
- 用单个链接分享整张图，无需账号
- 纯浏览器运行，无后端、无上传、无需注册
- 作者宣称在数百张表规模下仍保持流畅

## 4. 架构与实现

单页 HTML 实现、MIT 许可，解析与布局都在浏览器内完成，因此没有服务端、没有账号体系，schema 也不离开本机。取舍是能力与单页实现绑定：SQL 方言兼容性、视图与触发器等复杂对象的支持有限，图的持久化依赖链接而非数据库。README 中「数百张表仍流畅」为作者描述，应按自己的 schema 实测。

## 5. 上手路径

1. 用一份脱敏的建表语句试跑，确认外键识别与布局可读性
2. 在图上做一次编辑，检查回写 SQL 的结果
3. 用分享链接在另一台设备打开，确认信息确实都编码在链接里
4. 再评估是否纳入内部表结构评审与文档流程

## 6. 风险与边界

- 纯前端解析对 SQL 方言与复杂 DDL 的兼容性有限
- 完整 schema 编码进分享链接意味着链接即数据，需控制分发范围
- 没有账号与版本管理，图无法回溯到历史状态
- 单页项目的长期维护依赖少数贡献者

## 7. 谁该用 / 谁别碰

需要快速梳理或评审表结构、又不便把 schema 交给第三方服务的开发者与 DBA。

## 8. 评分依据

热度增速 **94** · 社区规模 **53** · 更新活跃 **2** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：「不上传」是它最硬的差异点，适合评审与临时建模场景；要做长期模型管理，仍需能存版本、能回溯的建模工具。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-06 · 依据仓库 README 与 GitHub 元数据</sub>
