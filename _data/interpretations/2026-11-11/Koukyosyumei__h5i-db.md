---
date: 2026-11-11
repo: Koukyosyumei/h5i-db
category: data
categoryLabel: 数据 / 数据库
rating: 2.5
language: Rust
stars: 38
starGain: 1
url: https://github.com/Koukyosyumei/h5i-db
tags: [ai-agents, backtesting, database, dataframe, financial-analysis, financial-data, financial-markets, fintech]
generatedAt: 2026-11-11T03:04:52.682Z
---

# Koukyosyumei/h5i-db · 项目解读

> **一句话**：嵌入式时序库 + 事件驱动回测引擎：回测跑在数据库 fork 里，用时间锚点从结构上排除未来函数。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌗 2.5 / 5.0 |
| 语言 | Rust |
| 星标 | 38 |
| 今日新增 | +1 |
| 仓库 | https://github.com/Koukyosyumei/h5i-db |

## 1. 它解决什么问题

量化回测最常见的错误不是策略写错，而是不小心用了未来数据——某列在决策时刻之后才写入，回测却把它当成了已知信息。事后审计很难证明「当时到底能看到什么」，参数扫描又往往要复制整份数据。

## 2. 为什么是现在

112 天、38 星、2 fork、4 个 issue，属早期项目，但 README 给出的能力是具体且可验证的：3.05M events/s 的回放吞吐、每次运行绑定数据版本、参数网格按 trial 各起一个数据库 fork、以及 `result.verify()` 重放同一配置做一致性比对。这些设计针对的是回测可信度，而不是回测速度本身。

## 3. 关键能力

- pip 安装即用的嵌入式时序库，无需单独起服务
- 事件驱动回测：钉住决策时点后，该时点之后写入的行不会进入帧，从结构上排除未来函数
- 参数扫描按 trial 各起一个数据库 fork，不复制数据，按样本外（holdout）排名
- 每次运行绑定数据版本，结果可复现、可校验
- result.explain() 说明订单为何被拒或未成交；result.verify() 重放配置并比对
- 浏览器审阅界面 h5i-db ui：trials、forks、版本与待写入按「下一步需要人处理什么」排序
- 内置 Kalshi、Polymarket、Hyperliquid、Binance 等场所的执行与费率模型
- 提供 agent skill，可在 Claude Code、Codex、Cursor 中调用

## 4. 架构与实现

Rust 实现，Apache-2.0 许可，Python 侧为库绑定、另提供 CLI 与 Web UI。核心抽象是「数据库 fork + 版本锚点」：每次回测在独立 fork 中执行，数据与版本绑定，使「回测用了什么数据」成为可追溯的事实而非口头约定。这一设计把可复现性从流程规范下沉到存储层。

## 5. 上手路径

1. pip install h5i-db，先导入一段历史行情建库
2. 用 BacktestConfig 写最小策略，跑 inspect 让它在执行前拒绝数据不支持的声明
3. 执行后看 summary 与 explain，确认成交与拒单原因符合预期
4. 跑 result.verify() 验证重放一致，再开始参数网格
5. 用 study 做 train/holdout 划分，只在样本外看排行榜

## 6. 风险与边界

- 38 星、4 个 issue，使用面很窄，边界情况与文档覆盖都不充分
- 嵌入式库意味着数据与计算在同一进程，超大规模历史数据的资源规划需自行评估
- 内置场所模型（费率、撮合假设）与真实环境存在差异，回测结果不能直接外推
- 项目定位偏研究工具，生产级风控与实盘对接能力未见说明
- 3.05M events/s 为作者环境实测，硬件与数据形态不同则差异较大

## 7. 谁该用 / 谁别碰

做事件驱动策略研究、在意回测可复现性与未来函数问题的量化研究员；以及想研究「如何用存储层保证计算语义」的数据系统工程师。

## 8. 评分依据

热度增速 **68** · 社区规模 **26** · 更新活跃 **5** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **2.5 星**）

**结论**：它把「回测是否用了未来数据」从人工纪律变成了存储层的结构约束，这是它最有价值的部分，比吞吐数字重要得多。但 38 星、4 个 issue 的现实意味着它还没被大规模检验，适合当研究工具而非生产依赖。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
