---
date: 2026-11-19
repo: google-labs-code/stitch-skills
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: TypeScript
stars: 10416
starGain: 365
url: https://github.com/google-labs-code/stitch-skills
tags: []
generatedAt: 2026-11-19T02:32:35.179Z
---

# google-labs-code/stitch-skills · 项目解读

> **一句话**：把「设计稿 ↔ 代码」的往返做成一组遵循开放标准的技能包，交给任意 coding agent 调用。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 10,416 |
| 今日新增 | +365 |
| 仓库 | https://github.com/google-labs-code/stitch-skills |

## 1. 它解决什么问题

设计工具与代码库之间缺一条可重复的通路：从前端代码反推设计系统、把设计稿转成组件、同步后续修改，过去多靠手工搬运或一次性脚本，换一个 agent 就要重做一遍集成，设计资产也难以版本化。

## 2. 为什么是现在

本期 10,416 星、1,368 fork，当日 +365；README 按 Agent Skills 开放标准组织，明确列出 Codex、Antigravity、Gemini CLI、Claude Code、Cursor、OpenCode 的安装路径，并把技能拆成 design / build / utilities 三组，说明「设计能力以技能包交付」已形成可分发、可裁剪的形态。

## 3. 关键能力

- design 组：前端代码转 Stitch 设计、文/图生成与编辑屏幕、生成设计变体、管理设计系统、抽取 DESIGN.md 与静态 HTML、上传资产
- build 组：设计稿转 React 组件、React Native 组件、React + Vite 仪表盘，含 shadcn/ui 集成与 Remotion 演示视频生成
- utilities 组：生成 DESIGN.md 与 SITE.md、增强提示词、由单条提示生成多页站点的 stitch-loop
- 按 marketplace / plugin / npx skills 分发，支持 sparse checkout 只取所需目录以加快克隆
- 依赖 Stitch MCP server；技能之间存在依赖，可整套安装也可按需挑选

## 4. 架构与实现

每个技能是一个含 SKILL.md 与辅助文件的目录，按 Agent Skills 规范被宿主发现；实际设计数据的读写通过远程 Stitch MCP 服务完成，宿主 agent 只负责按技能说明编排调用。三个插件包共享一套设计系统与项目标识，技能可串联成「抽取 → 生成 → 转组件」的链路；不同宿主的工具名与发现路径不完全一致，需要按各自约定适配。

## 5. 上手路径

1. 先按 Stitch MCP 官方说明注册服务，配置好环境变量与凭据，确认宿主能连通
2. 在 Codex 中添加 marketplace，用 --sparse 只装 stitch-design，验证一次代码转设计
3. 再装 stitch-build，把同一设计转成 React 组件，核对 DESIGN.md 里的 token 是否一致
4. 如用 OpenCode，手工配置 remote MCP 条目，并把技能名改为小写 kebab-case 与目录名一致

## 6. 风险与边界

- 强依赖 Stitch MCP 与 Google 侧服务，离线或无法访问该服务时技能整体不可用
- 技能之间存在依赖，按需裁剪时容易漏装，导致链路中途失败
- 不同宿主的工具名、技能发现路径与命名规则不一致，OpenCode 需要手工改造
- 21 个 open issue、306 天项目，插件 marketplace 布局随宿主演进可能变化

## 7. 谁该用 / 谁别碰

已在用 Stitch 做设计、并希望让 coding agent 直接参与设计到代码往返的团队；不用该设计平台，或制度上不允许设计资产出内网的场景不适用。

## 8. 评分依据

热度增速 **91** · 社区规模 **77** · 更新活跃 **59** · 工程成熟 **85**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把设计工作流拆成可组合的技能包，是「能力交付」而非「再造设计工具」的路线，三组目录划分也清楚，便于只取所需。前提是接受对 Stitch MCP 的绑定，并先把技能依赖与宿主差异理顺。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
