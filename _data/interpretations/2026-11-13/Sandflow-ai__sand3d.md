---
date: 2026-11-13
repo: Sandflow-ai/sand3d
category: ai
categoryLabel: AI / 大模型
rating: 4
language: HTML
stars: 1920
starGain: null
url: https://github.com/Sandflow-ai/sand3d
tags: [3d, blender, cad, llm, procedural-modeling, python, usd]
generatedAt: 2026-11-13T02:11:25.742Z
---

# Sandflow-ai/sand3d · 项目解读

> **一句话**：让 3D 对象变成几百 token 的 Python 短程序：部件有名字、结果可复现，模型写得动，人也读得懂。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | HTML |
| 星标 | 1,920 |
| 今日新增 | — |
| 仓库 | https://github.com/Sandflow-ai/sand3d |

## 1. 它解决什么问题

用 Blender Python、CadQuery 或 FeatureScript 描述一个零件，往往要写大量坐标与布尔运算，模型生成时 token 消耗高、出错后也难定位；坐标是算出来的，改一个尺寸就得重算一片。缺的是一种面向语言模型、以语义命名为核心的建模表达方式。

## 2. 为什么是现在

10 天新仓录得 1,920 星、211 fork，是本期 AI 类最年轻的项目。它与 raea 一起构成本期「把生成结果写成可读程序」的取向，且把整份 API 压进约 3,600 token，直接面向 agent 的上下文预算设计。

## 3. 关键能力

- 用 profiles、solids、edits、frames、joints 与 assemblies 逐步描述物体，README 用 38 行代码写出一台含四个关节的前置滚筒洗衣机
- 同一部件比 Blender Python、CadQuery 或 FeatureScript 少 2 到 6 倍 token，整份 API 约 3,600 token 可放进 prompt
- 部件、边与面按名字引用，不需要手工计算坐标；同一程序生成的网格逐位一致
- 导出 GLB、URDF、USD、IFC、OBJ 与 STL，覆盖可视化、机器人、建筑与 3D 打印等下游
- 提供 Datasets、Explorer、Citation 与贡献指南，便于把生成结果用于评测与复现

## 4. 架构与实现

以 Python 库形式构建在 Blender 的 bpy 之上，把高层语义操作翻译成底层的网格构建；程序本身即为模型描述，因而可版本化、可 diff。仓库语言标注为 HTML 是站点页面所致，实现主体是 Python，Apache-2.0 许可，文档含 Install、A first program、Give it to your LLM 与 What is in it。

## 5. 上手路径

1. 按 README 安装并准备 Blender 的 bpy 运行环境，先跑通 A first program 的最小示例
2. 把整份 API 作为上下文交给模型，让它先列出部件树与关节，再逐段生成程序
3. 用导出的 GLB 或 STL 在外部查看器里核对形状，确认命名引用没有指错部件
4. 需要用于工程时，再按目标格式检查单位、公差与装配约束

## 6. 风险与边界

- 底层依赖 Blender 的 bpy，部署与 CI 环境需要一并准备，不是纯 Python 轻量依赖
- 10 天新仓、API 与导出器仍在变动， pinned 版本前不宜直接进生产流程
- 面向语言模型的简洁表达不等于工程级 CAD：公差、装配约束与制造可行性需另行校验
- 导出格式多，但语义在不同格式间的保真程度取决于转换器
- 确定性只保证同一程序产出同一网格，不保证程序本身符合设计意图

## 7. 谁该用 / 谁别碰

研究程序化建模、3D 生成与 agent 上下文压缩的开发者，以及需要快速产出可读几何原型的设计与教学场景。要求精密制造图纸或完整参数化 CAD 特征树的场景不适用。

## 8. 评分依据

热度增速 **92** · 社区规模 **62** · 更新活跃 **74** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：最值得注意的设计是「具名而非计算」与「确定性」：部件按名字引用让修改局部化，同一程序产出同一网格让生成结果可复现、可比对。它把 3D 建模从坐标运算变成语义描述，代价是仍站在 Blender 运行时之上，且尚不能替代工程 CAD。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-13 · 依据仓库 README 与 GitHub 元数据</sub>
