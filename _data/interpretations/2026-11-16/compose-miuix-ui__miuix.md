---
date: 2026-11-16
repo: compose-miuix-ui/miuix
category: frontend
categoryLabel: 前端 / Web
rating: 3.5
language: Kotlin
stars: 1650
starGain: 6
url: https://github.com/compose-miuix-ui/miuix
tags: [compose-multiplatform, compose-multiplatform-library, compose-ui, miuix]
generatedAt: 2026-11-16T01:55:53.209Z
---

# compose-miuix-ui/miuix · 项目解读

> **一句话**：给 Compose Multiplatform 一套 MIUI 风格组件，一次写好铺到五端。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Kotlin |
| 星标 | 1,650 |
| 今日新增 | +6 |
| 仓库 | https://github.com/compose-miuix-ui/miuix |

## 1. 它解决什么问题

Compose Multiplatform 跨 Android、iOS、桌面与 Web 时，Material 组件在各平台观感不一致，想要统一的小米/MIUI 视觉语言（玻璃、模糊、连续圆角、偏好设置页）得自己实现，桌面端标题栏与窗口样式也缺现成方案。

## 2. 为什么是现在

本期 1,650 星、日增 +6，832 天项目。README 列出 Android / iOS / macOS / Desktop / Web 五个平台与 Web 在线 Demo，并把组件拆成 10 个可独立引入的模块；在跨端桌面方案集中出现的本期，它代表「从 UI 组件层统一多端观感」这一路径。

## 3. 关键能力

- 以 MiuixTheme 提供 light/dark 配色，ThemeController 支持 Monet 动态取色与自定义种子色
- 模块按职责拆分：ui、preference、icons、glass-icons、material、blur、squircle、glass、nav、window
- blur / squircle / glass / nav 等模块可单独使用，不必整体引入
- miuix-window 专门处理 Desktop JVM 的窗口与标题栏样式
- 覆盖 Android、iOS、macOS、Desktop、Web，并提供 Wasm Web Demo

## 4. 架构与实现

Kotlin Multiplatform 库，按 Maven Central 坐标分模块发布；主题层由 MiuixTheme 与 ThemeController 组合，组件层依赖 material 渲染原语，桌面窗口样式单独放 desktopMain 依赖。README 明确标注 experimental、API 可能变更。

## 5. 上手路径

1. 在 commonMain 只加 miuix-ui 一个依赖，用 MiuixTheme 包住现有 Composable
2. 确认目标平台（至少先跑 Android 或 Web Demo）能正常渲染并切换明暗主题
3. 按需追加 preference 或 glass 模块，观察包体积与依赖变化
4. 桌面端再引入 miuix-window 处理标题栏，最后评估 Monet 动态取色

## 6. 风险与边界

- README 首行即声明实验性、API 可能不通知就变更，生产采用需锁版本
- Compose Multiplatform 与 Kotlin/Compose 版本组合敏感，升级要整体回归五端
- 视觉语言偏特定风格，未必适合需要严格遵循平台设计规范的产品
- 模块多且部分可独立使用，依赖组合与主题一致性需自行维护

## 7. 谁该用 / 谁别碰

适合使用 Compose Multiplatform、想统一多端观感且能接受实验性 API 的 Kotlin 团队；不适合只做单端或强依赖 Material 规范的应用。

## 8. 评分依据

热度增速 **68** · 社区规模 **60** · 更新活跃 **59** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：模块拆分和桌面窗口处理是务实之处，跨平台覆盖也完整；但 experimental 声明摆在README顶部，宜用于内部工具或可快速回滚的界面层，不宜直接压到核心产品。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-16 · 依据仓库 README 与 GitHub 元数据</sub>
