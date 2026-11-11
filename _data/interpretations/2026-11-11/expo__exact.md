---
date: 2026-11-11
repo: expo/exact
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Rust
stars: 2206
starGain: null
url: https://github.com/expo/exact
tags: [ai-agents, appkit, coding-agents, cross-platform, css, ios, linux, macos]
generatedAt: 2026-11-11T03:04:52.682Z
---

# expo/exact · 项目解读

> **一句话**：一套声明式 UI 描述，同时编译到浏览器 DOM、AppKit、UIKit 与 Linux，全程无 WebView、无 JS 桥。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Rust |
| 星标 | 2,206 |
| 今日新增 | — |
| 仓库 | https://github.com/expo/exact |

## 1. 它解决什么问题

跨端方案长期在两种妥协里选：WebView 套壳，性能与原生手感打折；或每个平台各写一套原生 UI，维护成本翻倍。React Native 这类方案解决了大部分场景，但 UI 仍经由 JS 桥驱动原生视图，重绘与布局的确定性不足。

## 2. 为什么是现在

仓库仅 9 天，已 2,206 星、48 fork、57 个 issue，来自 Expo 团队。README 给出一个可复核的 agent 实验：在干净克隆上让 Claude Code 按提示词做一个待办应用，约 57 分钟完成（其中约 25 分钟是首次 macOS 与 iOS 构建），测试在 Web、macOS、iOS 三端全部通过。这类「把验证过程写出来」的做法，比纯功能清单更有说服力。

## 3. 关键能力

- 用 Contract 声明式语言描述界面，数据逻辑用 TypeScript 或 Rust 编写
- Contract 编译为紧凑的 plan：Web 端变成一个约 20KB 运行时的 ES 模块，直接驱动真实 DOM
- macOS/iOS/Linux 由 Rust runner 执行同一 plan，Rust 布局内核按 CSS 规则计算盒模型
- 各平台用自身工具绘制：AppKit、UIKit 或 GPU painter；UI 层无 WebView、无 JavaScript 桥
- 同一份 app.contract 在三端呈现同一屏幕，由 agent 驱动截图比对
- 配套 exact new 脚手架与 agent 脚本，可在三端构建、运行、测试

## 4. 架构与实现

Rust 为核心（布局内核与 runner），MIT 许可，来自 Expo 团队。技术路线的关键取舍是「不做 WebView 套壳，也不做 JS 桥」，而是把 UI 编译成中间表示（plan），再由各平台原生渲染。这意味着布局语义必须自己实现一套接近 CSS 的子集——能力上限受此约束，但确定性与性能上限更高。

## 5. 上手路径

1. 在装有 Xcode、Rust、Bun、Chrome 的 Mac 上执行 bun scripts/exact.mjs setup
2. 用 exact new 建一个最小应用，先只做单屏与一处状态变更
3. 把视图写进 Contract、逻辑写进 app.ts，跑通 Web 端
4. 用 scripts/agent.mjs 在 macOS 与 iOS 模拟器上跑同一份测试
5. 确认三端一致后，再引入列表、导航与更复杂的布局

## 6. 风险与边界

- 仅 9 天的新项目，API 与 Contract 语法都可能快速变动
- Contract 只覆盖 CSS 布局的一个子集，复杂视觉效果需要等待能力补齐
- 构建链依赖 Xcode 与 Rust 工具链，Windows 与纯 Linux 开发体验尚未验证
- 57 分钟完成待办应用的实验依赖机器缓存预热，冷启动耗时显著更长
- 57 个 issue 集中在早期使用反馈，说明边界情况仍在快速暴露

## 7. 谁该用 / 谁别碰

想用一套代码覆盖 Web 与 Apple 平台、又不愿接受 WebView 性能损失的团队；以及关注「声明式 UI 如何编译到多后端」这一课题的框架工程师。

## 8. 评分依据

热度增速 **99** · 社区规模 **59** · 更新活跃 **82** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它的野心是重画跨端的分界线：不是把 Web 装进 App，也不是为每个平台写两遍，而是把 UI 编译成中间表示再原生渲染。9 天、57 个 issue 意味着远未成熟，但「同一份 contract 三端一致 + agent 可自测」这个闭环，已经把方向验证得相当清楚。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
