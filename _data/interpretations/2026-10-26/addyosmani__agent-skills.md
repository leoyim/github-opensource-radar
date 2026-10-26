---
date: 2026-10-26
repo: addyosmani/agent-skills
category: tools
categoryLabel: 开发工具 / 效率
rating: 4
language: JavaScript
stars: 110642
starGain: 336
url: https://github.com/addyosmani/agent-skills
tags: [agent-skills, antigravity, claude-code, codex, cursor, skills]
generatedAt: 2026-10-26T11:59:07.500Z
---

# addyosmani/agent-skills · 项目解读

> **一句话**：把资深工程师的流程与质量门写成 25 个 skill，让 agent 按阶段推进而不是自由发挥。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 110,642 |
| 今日新增 | +336 |
| 仓库 | https://github.com/addyosmani/agent-skills |

## 1. 它解决什么问题

给 agent 一份「请写好代码」的提示词，得到的往往是跳步：不写规格、不留测试、不做评审。这个仓库把工程流程拆成 Define → Plan → Build → Verify → Review → Ship 六个阶段，每个阶段若干 skill，每个 skill 都带检查点与退出条件。

## 2. 为什么是现在

今日 +336 星。agent 的能力瓶颈已从「能不能写」变成「会不会按流程走」，而这类「流程资产」比模型能力更容易复用，因此在工具类里持续走高。

## 3. 关键能力

- 25 个 skill 覆盖六个阶段，配套 /spec /plan /build /test /review /ship 命令
- 流程而非文档：每个 skill 有步骤、检查点与退出条件
- 反合理化：每项附「agent 常用的跳步借口」表与对应驳斥
- 验证优先：每项以证据收尾（测试通过、构建输出、运行时数据），拒绝「看起来对」
- 渐进式披露：SKILL.md 作入口，参考材料按需加载以控 token
- 附 Agent Personas 与参考检查表

## 4. 架构与实现

JavaScript 仓库，产物是 Markdown 形式的 SKILL.md + 参考文件，遵循 agent skills 的通用加载约定（可被 Claude Code、Codex、Cursor、Antigravity 等读取）；无运行时、无依赖，本质是提示资产 + 约定。

## 5. 上手路径

1. 先只取 2-3 个最痛的 skill（如 verify、review），接到现有工作流里
2. 把「反合理化」表复制进你团队的项目规则，它对 agent 的约束效果最直接
3. 按团队规范改写退出条件（例如要求覆盖率阈值、必需的结构化日志）

## 6. 风险与边界

- 流程约束会显著增加交互轮次与 token，短任务上是净成本
- 110,642 星对应 253 天仓龄，增速异常偏快，星标来源建议核验
- skill 的措辞与模型版本强相关，换模型后效果需要重新校准

## 7. 谁该用 / 谁别碰

适合有明确工程规范、需要 agent 产出可交付代码的团队；探索性原型阶段用全套流程会拖慢节奏。

## 8. 评分依据

热度增速 **96** · 社区规模 **95** · 更新活跃 **17** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：本期最容易被低估的一个项目：它卖的不是功能而是纪律，而纪律恰好是 agent 最缺的东西。建议只取其中两三节，别整套导入。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
