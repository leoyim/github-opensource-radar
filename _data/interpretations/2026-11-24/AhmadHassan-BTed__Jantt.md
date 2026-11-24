---
date: 2026-11-24
repo: AhmadHassan-BTed/Jantt
category: frontend
categoryLabel: 前端 / Web
rating: 4
language: TypeScript
stars: 6240
starGain: null
url: https://github.com/AhmadHassan-BTed/Jantt
tags: [ai-gantt-chart, ai-tools, critical-path, dag, data-visualization, gantt, gantt-chart, json]
generatedAt: 2026-11-24T01:51:51.972Z
---

# AhmadHassan-BTed/Jantt · 项目解读

> **一句话**：声明式 JSON 驱动的甘特图引擎，AI 只负责生成数据，不直接画图。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 6,240 |
| 今日新增 | — |
| 仓库 | https://github.com/AhmadHassan-BTed/Jantt |

## 1. 它解决什么问题

做排期有三个常见失败路径：用表格排期，改一个日期整条依赖链就错乱；用商业甘特套件，关键路径、多视图、导出这些基本功能锁在 15–49 美元/人/月；让 LLM 生成 HTML 或 Mermaid，得到一张不可拖拽、无法更新的静态图。三种方式都把「数据」和「视图」绑死了。

## 2. 为什么是现在

6,240 星、上线 88 天、TypeScript、MIT，核心运行时依赖只有 fflate 一个。它在同一数据模型上同时提供「可编辑」与「可生成」：AI 产出 JSON，视图消费 JSON，于是换模型不影响既有数据，换视图也不用重做数据。

## 3. 关键能力

- 6 种联动视图，同一份任务数据在不同视图间保持同步
- 工作日历下的关键路径（CPM）计算，可排除节假日
- 10 万任务级 Canvas 渲染，超出 DOM 方案的量级
- BYOK 的 AI Copilot，支持 10 家服务商与本地 Ollama
- 多入口：React、Vue、Svelte、Python 与 MCP
- 导入导出可对接 Microsoft Project 与 Primavera P6 团队的工作方式

## 4. 架构与实现

TypeScript 核心 + Canvas 渲染层，任务与依赖以 JSON 声明，各视图共享同一状态源；AI 层只负责把自然语言转成符合 schema 的 JSON，渲染层对 AI 无感知。核心包 @jantt/core 只有一个运行时依赖。

## 5. 上手路径

1. 先用在线版建一个 10 任务的排期，把 JSON 结构导出看清楚
2. 再把 @jantt/core 接进自己的前端，用同一份 JSON 渲染，确认样式可控
3. 接自建模型端点替换默认 Copilot，验证生成的 JSON 能通过 schema 校验
4. 最后压 1 万任务看渲染帧率与首屏时间，据此决定是否需要分片加载

## 6. 风险与边界

- 88 天 6,240 星且零 issue 的比例偏热，热度能否持续需要观察
- AI 生成的结构正确性依赖模型能力，复杂的跨任务依赖仍需人工校正
- 10 万任务是渲染上限而非使用建议，交互密集场景要先实测
- MCP 与 Python 入口的成熟度低于前端主路径，属于附加能力

## 7. 谁该用 / 谁别碰

需要在产品里嵌入排期视图的 SaaS 团队，以及想用自然语言快速起草计划、再落到可编辑数据的项目管理者。

## 8. 评分依据

热度增速 **96** · 社区规模 **64** · 更新活跃 **51** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：关键设计是「AI 只产出声明式 JSON」——生成与渲染解耦，模型可替换、数据可迁移。这比让模型直接画图务实得多，也让 AI 能力成为可选项而非架构前提。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-24 · 依据仓库 README 与 GitHub 元数据</sub>
