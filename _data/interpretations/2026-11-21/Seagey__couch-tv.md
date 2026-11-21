---
date: 2026-11-21
repo: Seagey/couch-tv
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: JavaScript
stars: 1571
starGain: null
url: https://github.com/Seagey/couch-tv
tags: [android-tv, claude-code, google-tv, home-screen]
generatedAt: 2026-11-21T12:26:36.590Z
---

# Seagey/couch-tv · 项目解读

> **一句话**：把电视桌面从厂商广告里换出来，并让 agent 帮你装。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 1,571 |
| 今日新增 | — |
| 仓库 | https://github.com/Seagey/couch-tv |

## 1. 它解决什么问题

智能电视的默认桌面塞满推荐与广告，启动器不可替换，用户对自己每天面对的界面几乎没有控制权；而改造电视又涉及开发者模式、ADB 等门槛。

## 2. 为什么是现在

1,571 星、248 fork、101 个 issue，25 天。它把安装过程写成 AGENTS.md，让 Claude Code 之类的 agent 代为执行，正好踩在「agent 落地日常设备」的趋势上。

## 3. 关键能力

- 无广告桌面，支持自定义场景与玻璃时钟
- 按自己的顺序排列应用，跨应用「继续观看」
- 手机当遥控器，检索节目直接开播
- 三种安装路径：agent 自动配置、桌面 Setup 应用、手动文档
- 儿童模式与多种电视适配（Android TV、部分 LG / 三星）

## 4. 架构与实现

电视端是替代启动器，手机端是遥控与配置入口，Setup 应用负责探测与配对。AGENTS.md 把操作步骤与前置条件显式化，使 agent 能在不越权的前提下分步执行，并在确认前不改动电视。

## 5. 上手路径

1. 先跑兼容性检查，确认电视型号与系统是否支持
2. 用 agent 方式安装时，让它先读 AGENTS.md 并复述计划，确认后再执行
3. 保留回滚路径，确保能恢复原桌面

## 6. 风险与边界

- 不同品牌与型号的兼容性差异大，部分功能依赖桥接服务
- 改动启动器可能影响保修与系统更新
- agent 执行安装需严格确认边界，避免误改系统设置

## 7. 谁该用 / 谁别碰

对电视广告与推荐流不满、愿意动手改造的 Android TV / Google TV 用户。

## 8. 评分依据

热度增速 **86** · 社区规模 **61** · 更新活跃 **72** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：产品判断清晰——把桌面还给用户；工程判断也清晰——把安装交给 agent 但保留确认闸门。适合愿意折腾的人。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-21 · 依据仓库 README 与 GitHub 元数据</sub>
