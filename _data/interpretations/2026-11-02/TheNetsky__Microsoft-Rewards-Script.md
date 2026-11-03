---
date: 2026-11-02
repo: TheNetsky/Microsoft-Rewards-Script
category: frontend
categoryLabel: 前端 / Web
rating: 3
language: TypeScript
stars: 1158
starGain: 8
url: https://github.com/TheNetsky/Microsoft-Rewards-Script
tags: [bot, docker, microsoft-rewards, microsoft-rewards-bot, microsoft-rewards-farmer, microsoft-rewards-script, playwright, script]
generatedAt: 2026-11-03T03:03:51.004Z
---

# TheNetsky/Microsoft-Rewards-Script · 项目解读

> **一句话**：用 TypeScript + Playwright 把 Microsoft Rewards 的每日任务全自动跑完，含多账号与通知。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 1,158 |
| 今日新增 | +8 |
| 仓库 | https://github.com/TheNetsky/Microsoft-Rewards-Script |

## 1. 它解决什么问题

Microsoft Rewards 的积分任务本身是低价值重复劳动：每日集合、促销、打卡、桌面与移动搜索、Read to Earn，一项项点过去一天要十几分钟，漏一天就断连胜。这个脚本把这些动作全部编排成可调度任务，提供 API 模式（直接调接口，快）与浏览器模式（Playwright 模拟真实操作，稳）两条路径，并解决多账号场景下的会话持久化与账号切换。

## 2. 为什么是现在

1,134 天的老脚本，本轮 +8。它上榜的信息量不在热度，而在形态：README 已经演进成一个完整产品文档——v5 分支、Nix 与 Docker 两种安装、Control API（带认证、端点、运行控制、调度与仪表盘数据）、Discord / Telegram / ntfy 三路通知、连胜保护与积分核对。这类「个人自动化脚本产品化」是近两年的稳定趋势：作者把一次性脚本维护成有版本、有 API、有可观测性的小系统。

## 3. 关键能力

- 覆盖任务：Daily Set、促销、punchcards、加分项领取、桌面/移动搜索、Bing Explore、每日签到、Read to Earn
- 两种执行模式：API 模式（快、依赖接口稳定）与浏览器模式（Playwright 模拟真实操作）
- 可选 Visual Search 与后台 Edge 浏览
- 多账号支持、会话持久化、账号选择与定时调度
- 连胜进度跟踪、基于 API 的连胜保护、积分核对上报
- 通知渠道：Discord、Telegram、ntfy
- Control API：认证、端点、运行控制、调度与仪表盘数据，附实时事件与历史
- 安装方式：本地、Nix、Docker

## 4. 架构与实现

分层是「调度器 + 任务执行器 + 状态存储」：调度层按计划触发运行，执行器对每个任务选择 API 或浏览器通道，状态层持久化会话 cookie、连胜与积分历史。浏览器模式用 Playwright 维持登录态并模拟人类节奏，API 模式绕过 UI 直接请求，速度快但更易因接口变更失效。Control API 是一个独立 HTTP 服务，把运行控制与观测数据暴露给外部仪表盘，因此可以接 Grafana 一类的面板做长期跟踪。

## 5. 上手路径

1. 先只用 API 模式跑一轮，确认账号与地区支持哪些任务，再决定要不要开浏览器模式
2. 会话用持久化存储，别每次登录——频繁登录是最容易触发风控的动作
3. 把运行间隔拉长并随机化，固定时刻的高频执行是封号的典型特征
4. 通知接一路就够（ntfy 最轻），三路全开只会制造噪音
5. 积分核对打开：它能提前暴露「任务跑了但没加分」的接口变更

## 6. 风险与边界

- 明确违反 Microsoft Rewards 服务条款，账号被封是预期风险而非意外
- 自动化行为可能触发风控，导致账号受限甚至关联账号连带处理
- 接口随时可能变更，API 模式的失效是常态，需要持续跟进维护
- 多账号批量运行会放大风控概率，收益与风险不成比例
- Control API 若暴露在公网且认证配置不当，等于把账号控制权交出去

## 7. 谁该用 / 谁别碰

个人用户自动处理自己账号的日常积分任务；以及想学习「脚本如何产品化」（调度、会话、多通道通知、Control API）的开发者。

## 8. 评分依据

热度增速 **67** · 社区规模 **59** · 更新活跃 **54** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：工程实现比多数同类脚本规范得多，但它的定位决定了风险：这是明确违规的自动化，收益是每天几十分钟和一点积分，代价可能是账号。真正值得借鉴的是它的产品化结构，而不是它的用途。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-02 · 依据仓库 README 与 GitHub 元数据</sub>
