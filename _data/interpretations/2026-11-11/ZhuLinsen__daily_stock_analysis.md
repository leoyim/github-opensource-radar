---
date: 2026-11-11
repo: ZhuLinsen/daily_stock_analysis
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: Python
stars: 69573
starGain: 960
url: https://github.com/ZhuLinsen/daily_stock_analysis
tags: [a-stock, ai-agent, aigc, llm, quant, quantitative-finance, quantitative-trading]
generatedAt: 2026-11-11T03:04:52.682Z
---

# ZhuLinsen/daily_stock_analysis · 项目解读

> **一句话**：把「每天盯自选股」做成一条 GitHub Actions 流水线：LLM 出决策看板，六个渠道自动推送。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 69,573 |
| 今日新增 | +960 |
| 仓库 | https://github.com/ZhuLinsen/daily_stock_analysis |

## 1. 它解决什么问题

个人投资者每天要在行情、公告、新闻、技术指标之间来回切换，信息越多越难收敛成一个可执行的结论；而市面上的选股工具要么只给数据不给判断，要么把判断藏在黑盒里，无法复核它为什么这么说。缺少的是一条固定、可定时、输出格式稳定的复盘流水线。

## 2. 为什么是现在

仓库 305 天、5.6 万 fork——fork 数接近星标的 81%，说明大量用户是直接 fork 成自己的实例在跑，而不是点个星收藏。内置 AkShare、Baostock、YFinance 等免费源可零配置启动，配合 GitHub Actions 的免费额度就能每日定时出报告，边际成本接近于零，这是它能被大规模复制的前提。

## 3. 关键能力

- 覆盖 A 股、港股、美股、日股、韩股、台股与 ETF 的行情、K 线、技术指标、新闻、公告与基本面数据聚合
- AI 决策报告：核心结论、评分、趋势判断、买卖点位、风险警报、催化因素与操作检查清单
- 15 种内置策略（均线金叉、缠论、波浪理论、多头趋势、热点题材、事件驱动、成长质量、预期重估等），支持 Web/Bot/API 多入口追问
- Web 与桌面工作台：手动分析、任务进度、历史报告、Markdown 全文、回测、持仓与配置管理
- 多形态导入（图片、CSV/Excel、剪贴板）与股票代码/名称/拼音/别名补全
- GitHub Actions、Docker、本地定时任务、FastAPI 四种运行方式，推送企业微信/飞书/Telegram/Discord/Slack/邮箱

## 4. 架构与实现

Python 3.10+，MIT 许可。数据层并接 AkShare、Tushare、Pytdx、Baostock、YFinance、Longbridge 六个行情源与 SerpAPI、Tavily、Bocha、Brave、SearXNG 等新闻检索源；模型层兼容 OpenAI 协议、DeepSeek、通义千问、Claude 与本地 Ollama；服务层是 FastAPI，部署层给出 Actions、Docker 与本地三种路径。README 关联了一篇 arXiv 论文（2608.26990），说明作者把方法写成了可引用的文档而非仅代码。

## 5. 上手路径

1. Fork 仓库后进入 Settings → Secrets and variables → Actions，填入所选模型服务商的 API Key
2. 修改自选股清单，先手动触发一次 workflow，确认推送渠道收到的报告格式符合预期
3. 按 docs/full-guide.md 调整数据源优先级与策略组合，再开启每日定时
4. 需要本地调试或回测时改用 Docker 或 FastAPI 方式启动 Web 工作台

## 6. 风险与边界

- 输出是模型基于公开数据的推断，不构成投资建议，买卖点位与评分不应直接作为交易信号
- 免费行情源受上游限流、接口变更与网络波动影响，README 明确不保证稳定性；长期定时建议换付费源
- fork 数远高于 star 的形态说明多数实例是复制使用，上游改进未必回流到这些副本，版本会逐渐分叉
- 多市场数据接口存在地区可用性与合规边界，跨境行情与新闻源的使用需自行确认
- README 头部赞助商与推广链接密集，第三方服务的可信度需自行甄别

## 7. 谁该用 / 谁别碰

有固定自选股、希望每天拿到一份结构化复盘的个人投资者；以及想把「多源数据 → LLM 结论 → 多渠道推送」这条管道复用到其他垂直领域（如舆情、供应链）的工程团队。

## 8. 评分依据

热度增速 **98** · 社区规模 **95** · 更新活跃 **63** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：它的价值不在预测准确率，而在把「每天该看什么、按什么顺序看、结论怎么落地成一条推送」固化成可定时执行的流水线。fork/star 接近 0.81 是一个罕见信号——多数人拿它当自己的实例用。当决策辅助与信息聚合器是合理的，当交易信号源则越界。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
