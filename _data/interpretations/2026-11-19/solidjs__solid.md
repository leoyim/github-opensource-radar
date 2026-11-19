---
date: 2026-11-19
repo: solidjs/solid
category: frontend
categoryLabel: 前端 / Web
rating: 4
language: TypeScript
stars: 36598
starGain: 40
url: https://github.com/solidjs/solid
tags: [declarative, fine-grained, javascript, jsx, performance, proxies, reactive, solid]
generatedAt: 2026-11-19T02:32:35.179Z
---

# solidjs/solid · 项目解读

> **一句话**：不用虚拟 DOM，编译期把 JSX 变成真实 DOM 操作，状态变化只重跑依赖它的那一个表达式。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 36,598 |
| 今日新增 | +40 |
| 仓库 | https://github.com/solidjs/solid |

## 1. 它解决什么问题

虚拟 DOM 每轮都要重跑组件并做 diff；开发者常常要靠 memo、依赖数组等手段手动控制重渲染范围。另一类问题是 2.0 重构后公开 API 与大量现存教程、模型训练语料里的 1.x 写法不一致，容易生成跑不通的代码。

## 2. 为什么是现在

本期 36,598 星、1,184 fork，当日 +40，年龄 3,130 天；README 已切到 Solid 2.0，明确列出 monorepo 包分工、1.x 独立分支与迁移指南，并专门写了「For LLMs / AI assistants」章节，把 SKILL.md 与 CHEATSHEET.md 随 npm 包分发，是框架主动适配 agent 生成代码的一个信号。

## 3. 关键能力

- 编译期把 JSX 转成真实 DOM 操作，组件函数只运行一次，实现细粒度更新且无虚拟 DOM diff
- 声明式响应式原语 createSignal / createMemo / createStore，读取状态即自动建立依赖
- 微任务批量更新并提供 flush() 做同步互操作；effect 拆为 tracking compute 与 side-effecting apply 两阶段
- 一等公民异步：计算可返回 Promise / AsyncIterable，以 Loading / Errored 为边界；新增 createOptimistic 与 action(...) 结构化变更
- 流式 SSR、渐进 hydration、TypeScript 与 JSX 优先；可通过 @solidjs/universal 写非 DOM 渲染器

## 4. 架构与实现

pnpm workspaces monorepo：solid-js 负责与渲染器无关的组件与类型，@solidjs/signals 提供 signal / memo / effect / store，@solidjs/web 承担 DOM 运行时、SSR 与 hydrate，@solidjs/compiler 是基于 Oxc 的原生 JSX 编译器，另有 babel-plugin、universal、element、diagnostics 等包。编译器与 DOM 运行时同仓维护，因此 JSX 能直接编译出 template / insert / delegateEvents 这样的细粒度操作。

## 5. 上手路径

1. 用 npx degit solidjs/templates/solid-v2/basic 起一个 2.0 项目，先看编译后的 DOM 操作与组件只执行一次的行为
2. 在已有 Vite 项目里安装 solid-js、@solidjs/web 与 vite 插件，按 README 配好 jsxImportSource
3. 试一次异步计算与 Loading 边界，再试 createOptimistic / action 的乐观更新路径
4. 从 1.x 迁移时先读仓库内 MIGRATION.md 与随包附带的 SKILL.md、CHEATSHEET.md

## 6. 风险与边界

- 2.0 公开 API 与 1.x 差异明显，旧教程与 AI 生成代码容易写错，需以仓库内迁移文档为准
- 细粒度响应式的心智模型与 React 不同，团队切换有学习成本
- 生态与周边库数量不及主流框架，选型前需核对所需集成是否有 2.0 版本
- 25 个 open issue 虽少，但 2.0 属较新主版本，长期稳定性仍待观察

## 7. 谁该用 / 谁别碰

追求运行时性能、愿意接受不同响应式心智模型的前端团队；重度依赖 React 生态或需要大量现成组件库的项目应谨慎评估。

## 8. 评分依据

热度增速 **79** · 社区规模 **84** · 更新活跃 **66** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把「快」的原因落到可查看的编译产物上，比只给 benchmark 数字更有说服力；内置给 AI 助手看的 SKILL.md 也是务实之举。主要代价是 2.0 的迁移与生态成熟度，建议先用小模块试点。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
