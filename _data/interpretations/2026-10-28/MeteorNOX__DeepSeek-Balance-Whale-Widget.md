---
date: 2026-10-28
repo: MeteorNOX/DeepSeek-Balance-Whale-Widget
category: tools
categoryLabel: 开发工具 / 效率
rating: 3.5
language: JavaScript
stars: 6315
starGain: 139
url: https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget
tags: [cordis, deepseek, deepseek-harness, developer-tools, dsh, dsh-plugin, dsh-plugins, floating-widget]
generatedAt: 2026-10-28T01:55:53.021Z
---

# MeteorNOX/DeepSeek-Balance-Whale-Widget · 项目解读

> **一句话**：DSH 界面右下角的一只鲸鱼，替你盯着 API 余额。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | JavaScript |
| 星标 | 6,315 |
| 今日新增 | +139 |
| 仓库 | https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget |

## 1. 它解决什么问题

用 API 跑 Agent 的人有一个共同的焦虑：不知道今天烧了多少钱。官方控制台的账单是滞后汇总，等发现超支已经晚了。这个挂件把「余额 + 今日已用 + 每轮对话消耗」搬到 DSH 界面右下角的常驻气泡里，看一眼就知道当前状态，不需要切窗口。

## 2. 为什么是现在

今日 +139 星（快照口径），71 天。它的意义不在功能，而在它暴露的生态：DeepSeek Harness（DSH）已经形成插件生态，一个纯装饰性挂件能做到 6k+ 星，说明 DSH 的用户基数与「愿意折腾界面」的氛围都到位了。判断一个 Agent 平台是否成气候，看它的第三方挂件生态比看官方功能表更准。

## 3. 关键能力

- 常驻气泡：小鲸鱼形象 + 余额 + 今日已用 + 每轮消耗
- 气泡内容完全可自定义：点击序列、模块化排版、并列加权出泡
- 支持随机语句与随机图片，可按点击触发不同内容
- 交互细节：拖拽吸附、左吸附翻转、数字滚动动画
- 标准 DSH bundle 插件，dsh plugin 一键安装，无需会话令牌
- 同一套包同时支持 DSH Web 与官方桌面客户端

## 4. 架构与实现

作为 DSH bundle 插件运行在前端进程内，通过 DSH 插件接口读取余额与用量数据（因此不需要会话令牌），气泡渲染完全在前端完成。它的「模块化排版 + 加权出泡」是一套轻量内容编排系统，本质是小型的展示逻辑引擎。

## 5. 上手路径

1. 确认你的 DSH 版本在 main 这条线上（Codex 版与本插件互不兼容，装错无效）
2. 用 dsh plugin 一键安装，重启界面后确认右下角出现气泡
3. 先改一次气泡内容排版，验证自定义能力是否符合预期，再决定是否长期挂着

## 6. 风险与边界

- 两条产品线（DSH Web / Codex 桌面）互不兼容，装错平台会完全无效
- 依赖 DSH 插件接口，宿主升级可能失效
- 挂件会持续请求用量数据，注意它对界面性能与请求频率的影响

## 7. 谁该用 / 谁别碰

日常用 DSH 跑 Agent、需要随时掌握 API 花费的用户；不关心成本的场景没必要装。

## 8. 评分依据

热度增速 **89** · 社区规模 **69** · 更新活跃 **16** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：功能上是玩具，生态上是信号。它证明 DSH 已经长出第三方插件层——这比它显示余额的能力重要得多。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-28 · 依据仓库 README 与 GitHub 元数据</sub>
