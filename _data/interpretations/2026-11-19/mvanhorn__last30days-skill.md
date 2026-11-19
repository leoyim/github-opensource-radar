---
date: 2026-11-19
repo: mvanhorn/last30days-skill
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: Python
stars: 70055
starGain: 1059
url: https://github.com/mvanhorn/last30days-skill
tags: [ai-prompts, ai-skill, bluesky, claude, claude-code, clawhub, deep-research, hackernews]
generatedAt: 2026-11-19T02:32:35.179Z
---

# mvanhorn/last30days-skill · 项目解读

> **一句话**：用「近 30 天真实互动」而非编辑推荐来排序信息，再把多平台结果合成一份简报。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 70,055 |
| 今日新增 | +1,059 |
| 仓库 | https://github.com/mvanhorn/last30days-skill |

## 1. 它解决什么问题

搜索引擎与单一模型各被平台围墙隔开：Google 不索引评论区，各家模型只覆盖自己有合作的一两个平台。而判断一个话题当下热度时，最有用的信号往往散落在 Reddit 点赞、X 讨论、YouTube 转录与预测市场赔率里，没有任何单一 AI 同时拿得到。

## 2. 为什么是现在

本期 70,055 星、6,245 fork，当日 +1,059 位列第二；README 跟踪 v4 流水线，把「自带 key 与浏览器会话、并行搜索数十个来源、按真实互动打分、由 agent 裁判合成」写成主线，是技能包从一段提示词长成带数据源编排的研究流水线的样本。

## 3. 关键能力

- 以 Agent Skills 技能包形式分发，Claude Code 走 marketplace，其余 50+ 宿主用 npx skills add -g
- 并行检索 Reddit、HN、Polymarket、GitHub 等零配置来源，向导再解锁 X、YouTube、TikTok、arXiv、Techmeme 等
- 按 upvote、点赞、转录命中与真金白银的预测市场赔率等信号交叉打分，并把赔率变化贴在相关结论下
- 由 agent 裁判合成为带出处的简报；公司类话题附带专利、招聘页与股价，人物类附带 PR 速度与仓库
- 来源可按需增减，支持 --search 指定来源、研究计划与多语言文档

## 4. 架构与实现

技能规范文件 SKILL.md 定义流程、命令与评分口径，是实际行为的事实来源；运行时由宿主 agent 调度各来源的 CLI 或公开接口，能免 key 的来源直接走，需要凭据的来源读取用户自带的 API key 或已登录浏览器会话。各路结果汇总后统一排序、去重并生成简报，README 只承担说明与导航。

## 5. 上手路径

1. 在 Claude Code 里执行 marketplace add 与 install，其他宿主用 npx skills add -g 全局安装
2. 用零配置来源跑一个自己熟悉的话题，逐条检查简报引用能否回溯到原帖
3. 跑一次设置向导解锁需要凭据的来源，确认凭据只保存在本地且来源开关符合需要
4. 用 --search 或研究计划限定来源，对比不同打分口径下结论的变化

## 6. 风险与边界

- 多数社交平台来源依赖用户自带 key 或登录会话，可用性与合规边界由使用者承担
- 「按互动排序」天然偏向争议与热度，不等同于事实核验，结论需要另行交叉验证
- 来源极多且各自限流，单次运行的耗时与成本随启用来源线性增长
- README 声明跟踪 v4 流水线、实际命令以 SKILL.md 为准，文档与实现可能不同步

## 7. 谁该用 / 谁别碰

需要在会前、选型前快速掌握某话题近一个月讨论与数据的人；需要可审计、可复现的正式调研流程，或不能接受引用社交平台内容的场景不适用。

## 8. 评分依据

热度增速 **97** · 社区规模 **91** · 更新活跃 **58** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：把「搜索」重构成「多来源信号 + agent 合成」，价值在于跨围墙的编排而非又一个检索接口。使用时要把热度与事实分开看，先把凭据与数据边界管好，再逐步增加来源。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
