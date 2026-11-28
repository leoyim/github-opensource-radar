---
date: 2026-11-28
repo: nexu-io/opengame
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4.5
language: TypeScript
stars: 2310
starGain: null
url: https://github.com/nexu-io/opengame
tags: [agent-skills, ai-agents, ai-game-generator, claude-code, codex, deepseek, deepseek-harness, dsh]
generatedAt: 2026-11-28T02:35:30.797Z
---

# nexu-io/opengame · 项目解读

> **一句话**：让本地编码 agent 直接产出可玩的游戏，并且产物是可读源码。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 2,310 |
| 今日新增 | — |
| 仓库 | https://github.com/nexu-io/opengame |

## 1. 它解决什么问题

用 AI 生成游戏最容易停在「能跑一次的 demo」：美术、音效、逻辑与发布链路各自断点，改一处就要重生成一遍。要把这件事做成工程，需要模板化的可编辑起点、确定性的逻辑层和一条能走通的发布路径。

## 2. 为什么是现在

3 天、2,310 星、374 fork、76 issue，TypeScript 与 Apache-2.0。三天内 fork 数接近星标的 16%，说明拿到手就在改，而不是只收藏。它同时押注两条赛道：3D 网页游戏与 9:16 竖版小游戏/试玩广告。

## 3. 关键能力

- 一条提示词驱动 3D 场景、美术、音乐与配音，产出可玩版本
- 25 个内置模板可一键 remix，保留机制只换角色、世界与美术风格
- 产物为可读源码：index.html 加确定性 logic.js，3D 内联 Three.js
- 自动逻辑校验、平衡模拟、无头试玩、封面与预告片生成
- 发布路径覆盖微信小游戏、抖音、TikTok、Telegram、itch.io，可导出单文件 9:16 试玩广告

## 4. 架构与实现

核心是一个 Skill 加一套本地 Studio：agent 通过 Skill 拿到游戏模板与规范，Studio 负责浏览、remix 与本地运行。设计上刻意把「产物」与「生成过程」分开——生成完落到磁盘的是标准前端工程，之后可以用普通工具链改。BYOA 与 BYOK 的定位意味着它不代理模型调用，成本和密钥都留在使用者手上。

## 5. 上手路径

1. 先用内置模板 remix 一个，确认本地 Studio 能正常跑起来再谈自制
2. 读一遍 logic.js 的确定性约定，这是后续能否稳定改的前提
3. 3D 模板注意 Three.js 是内联的，体积与首屏时间要自己压
4. 要发布到小游戏平台时，先确认对应导出格式与平台审核要求

## 6. 风险与边界

- 三天的新项目，76 个开放 issue 说明打磨还在早期
- 「AAA 级」是宣传口径，实际观感受模板与模型能力限制
- 多平台发布链路涉及各平台审核规则，落地成本可能高于生成
- 重度依赖外部编码 agent 的能力与额度，换 agent 后表现会变

## 7. 谁该用 / 谁别碰

想用 agent 快速做出可发布小游戏或试玩广告的独立开发者；需要批量产出竖版互动素材的投放团队。

## 8. 评分依据

热度增速 **98** · 社区规模 **64** · 更新活跃 **86** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：把「产物可读」写进设计，是它和一次性生成工具的分水岭。现在的问题是成熟度：模板好用，但从模板走到可上线产品之间仍有大量工程量。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-28 · 依据仓库 README 与 GitHub 元数据</sub>
