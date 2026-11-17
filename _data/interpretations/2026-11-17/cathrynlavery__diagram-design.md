---
date: 2026-11-17
repo: cathrynlavery/diagram-design
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: HTML
stars: 67652
starGain: null
url: https://github.com/cathrynlavery/diagram-design
tags: [agent-skills, claude-code, codex, data-visualization, diagrams, drawio, mermaid, svg]
generatedAt: 2026-11-17T02:14:58.013Z
---

# cathrynlavery/diagram-design · 项目解读

> **一句话**：让 agent 把图直接画成一个能双击打开的文件。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | HTML |
| 星标 | 67,652 |
| 今日新增 | — |
| 仓库 | https://github.com/cathrynlavery/diagram-design |

## 1. 它解决什么问题

图表工具与文档流程脱节：Mermaid 渲染受宿主限制、样式难统一，drawio 需要手工拖拽，导出的图片又无法随品牌调整。工程师想要的是一张风格一致、可版本管理的图。

## 2. 为什么是现在

本期 67,652 星、4,530 fork，214 天；技能安装量已成为这类项目的实际分发指标，README 也把「不再产出 Mermaid 风格」作为明确卖点，说明市场对「可交付的图」有具体不满。

## 3. 关键能力

- 约 50 种图表类型，覆盖架构图、象限图、时序图等常见工程表达
- 产出单个自包含 HTML 加 SVG 文件，双击即可查看，无外部依赖
- 可按目标站点的配色与字体做品牌对齐，后续图表沿用同一套视觉
- 支持从 drawio、Mermaid、Excalidraw、PlantUML 导入既有图
- 可导出 PNG 与 SVG，便于插入文档或演示

## 4. 架构与实现

以 agent 技能形式分发，核心是提示词、参考文件与脚本的组合；agent 负责判断图表类型与内容结构，脚本负责生成 HTML 与 SVG，风格由品牌配置驱动。

## 5. 上手路径

1. 用 npx skills add cathrynlavery/diagram-design 安装到当前宿主
2. 让 agent 画一张最简单的架构图，确认产出可双击打开且无外部依赖
3. 再执行一次品牌对齐，检查后续图表的配色与字体是否统一

## 6. 风险与边界

- 产出质量取决于 agent 对图类型的判断，复杂图仍需人工调整
- 品牌对齐会读取目标站点信息，涉及内网站点时需确认网络行为
- 仅从官方仓库分发，第三方市场上的同名条目可能是非官方副本
- 单文件 HTML 便于分发，但不利于多人协同编辑

## 7. 谁该用 / 谁别碰

需要频繁产出架构图、且希望图表与品牌一致的工程团队；需要多人实时协同编辑图的场景仍应使用专业绘图工具。

## 8. 评分依据

热度增速 **96** · 社区规模 **90** · 更新活跃 **39** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：切口小而准——把「图」变成可版本管理、可直接分发的单文件，而不是又一套绘图界面。50 种类型覆盖了多数工程表达，品牌对齐是真正的差异点；复杂图的排版仍要人工收尾，别期待全自动。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-17 · 依据仓库 README 与 GitHub 元数据</sub>
