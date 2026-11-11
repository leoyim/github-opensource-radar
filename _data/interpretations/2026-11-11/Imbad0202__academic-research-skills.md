---
date: 2026-11-11
repo: Imbad0202/academic-research-skills
category: ai
categoryLabel: AI / 大模型
rating: 4
language: Python
stars: 56367
starGain: 225
url: https://github.com/Imbad0202/academic-research-skills
tags: [academic-pipeline, academic-writing, ai-research, claude, claude-code, literature-review, peer-review, prompt-engineering]
generatedAt: 2026-11-11T03:04:52.682Z
---

# Imbad0202/academic-research-skills · 项目解读

> **一句话**：把「选题→文献→写作→审稿→修订→定稿」拆成带卡点的 Claude Code 技能流水线，每阶段停下等人确认。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Python |
| 星标 | 56,367 |
| 今日新增 | +225 |
| 仓库 | https://github.com/Imbad0202/academic-research-skills |

## 1. 它解决什么问题

直接用 LLM 写论文，最怕编造引用、方法漂移、把实现 bug 当成研究发现；而全自动研究代理已被实证证明会继承这些失败模式，且错误会以「看起来很专业」的形式混过初筛。

## 2. 为什么是现在

258 天、4,291 fork、41 issue，已到 v3.24.2。README 没有停留在功能罗列，而是直接引用两项 2026 年的实证：Lu 等人在 Nature 对全自动研究系统的失败模式清单，以及 Zhao 等人对 250 万篇论文、1.11 亿条引用的审计（估算 2025 年约 14.7 万条幻觉引用，2024 年中出现拐点）。把「为什么不能全自动」写进设计依据，是这类工具少见的克制。

## 3. 关键能力

- 覆盖研究、写作、审稿、修订、定稿的完整六阶段流水线，每阶段设人工确认卡点
- Stage 2.5 与 Stage 4.5 的完整性闸门，按 7 类失败模式做阻断式检查
- 引用溯源：trust-chain frontmatter 记录来源，三层定位锚支持到句级的后续审计
- 审稿人可选校准模式，用用户提供的金标准集测量自身的漏判率与误判率
- 风格校准从作者既往作品学习语气；写作质量检查识别「机器味」而非教人掩盖使用 AI
- 可选 Pandoc 出 DOCX、tectonic 出 APA 7.0 PDF，纯 Markdown 输出不依赖这两者

## 4. 架构与实现

以 Claude Code 插件形态分发（marketplace add → install），核心是 prompt 驱动的技能集，Python 仅在 write-scope guard 等少数可选命令中使用。README 提供简体、繁体、日、韩、西、葡六种语言版本，并区分「Claude Code CLI/IDE」与「claude.ai 网页版」两种安装路径——后者不支持 hooks 与插件 agent，属于已知限制而非缺陷。

## 5. 上手路径

1. 在 Claude Code 中执行 /plugin marketplace add 与 /plugin install 完成安装
2. 先跑 /ars-plan，用苏格拉底式对话把论文结构定下来
3. 选一个阶段做完整闭环（建议从文献综述开始），观察闸门拦下什么
4. 读 ai_research_failure_modes.md，理解 7 类检查的判定边界
5. 需要投稿格式时再接 Pandoc 与 tectonic，并核对模板与期刊要求

## 6. 风险与边界

- CC BY-NC 4.0 禁止商业使用，机构项目与商业场景需先确认许可范围
- 「人在环」意味着它不会替你省掉判断，把它当全自动出稿工具会用错方向
- 引用审计依赖模型与检索质量，仍须人工抽查关键文献
- 多语言 README 与实际功能覆盖可能不同步，以外文版为准需谨慎
- 流水线阶段多、卡点多，短任务使用反而增加开销

## 7. 谁该用 / 谁别碰

需要写论文的研究生、博士后与高校教师；以及想把「多阶段人工确认」模式迁移到其他长流程（法务审阅、尽职调查、技术方案评审）的团队。

## 8. 评分依据

热度增速 **87** · 社区规模 **89** · 更新活跃 **61** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它最值得看的不是「能写论文」，而是把「哪里必须停下来让人确认」做成了流程的一部分，并用两篇 2026 年的实证说明为什么。对想用 AI 提速但不愿承担学术风险的人，这比一个「一键生成」的工具更有价值；代价是它要求使用者本身具备判断力。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
