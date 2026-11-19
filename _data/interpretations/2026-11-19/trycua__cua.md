---
date: 2026-11-19
repo: trycua/cua
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4.5
language: Rust
stars: 32618
starGain: 101
url: https://github.com/trycua/cua
tags: [agent, ai-agent, apple, computer-use, computer-use-agent, containerization, cua, desktop-automation]
generatedAt: 2026-11-19T02:32:35.179Z
---

# trycua/cua · 项目解读

> **一句话**：把「给 agent 一台真电脑」拆成桌面、驱动、虚拟机与评测四层。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Rust |
| 星标 | 32,618 |
| 今日新增 | +101 |
| 仓库 | https://github.com/trycua/cua |

## 1. 它解决什么问题

computer-use agent 要操作真实 GUI，但缺一套能同时提供隔离桌面、跨系统操作接口、可复现评测的开源底座；用本机直接跑会抢焦点、脏环境、难回放，用云端桌面又有数据与登录态顾虑。

## 2. 为什么是现在

本期 32,618 星、2,459 fork、当日 +101，656 天，1,581 个 open issue；README 把 Spaces、Driver、Lume、Cua Bench 与 CUA-S1 并列为同一仓库的产品线，并明确提出 Computer-Use 2.0（agent 在同一任务里跨越代码、API 与图形界面），说明关注点已从「能不能点按钮」转向「怎么规模化供给与评测」。

## 3. 关键能力

- Cua Spaces：把自有 Mac、其他电脑或自有云账号组成桌面池，Space 可以是本机 macOS VM 或 Linux / Omarchy 镜像
- Teleport 把已登录的 App 连同会话搬到 Space（会话加密保存在本机、需批准后才下发），Multiplayer 支持人与 agent 多光标同屏协作
- Cua Driver：跨 macOS / Windows / Linux 检查操作原生应用与浏览器，走 CLI、MCP 或类型化 SDK，支持后台投递不移动指针、不抢焦点
- Lume：用 Apple Virtualization.Framework 在 Apple Silicon 上创建本地 macOS / Linux VM
- Cua Bench 构造并验证模拟任务、导出轨迹；CUA-S1 提供面向 computer-use 决策的小型专用模型

## 4. 架构与实现

四层相对独立：Lume 提供 VM 底座，Spaces 在 VM 或自有机器上供给完整桌面并内置 cua-spacesd 让 agent 一启动就拿到进程、文件、截图与输入能力，Driver 作为统一的跨系统操作接口（CLI / MCP / SDK）挂在这些桌面上，Bench 与 S1 负责任务、评测与决策模型。Keyvault 把登录会话加密留在本机并按需授权给 Space，是数据边界的关键设计。

## 5. 上手路径

1. 先按 Choose your path 选一条线：要桌面就装 Spaces，要操作现有应用就装 Driver，要 VM 就装 Lume
2. 用 Driver 跑官方第一个例子：让 agent 在计算器算 6 × 7 并验证界面显示 42
3. 在 macOS 26+ 上装 Spaces，起一个 Space 并试一次 Teleport 已登录 App
4. 需要评测时用 Cua Bench 建一个模拟任务并导出轨迹，作为回归基线

## 6. 风险与边界

- Spaces 应用为 FSL-1.1-MIT 源可用许可、按席位收费（个人免费），并非全仓库统一开源许可
- macOS Spaces 要求 macOS 26 或更新版本，Lume 依赖 Apple Silicon，平台门槛较高
- 1,581 个 open issue，四条产品线并行，跨 OS 的后台投递与权限行为需按平台支持表逐项确认
- Teleport 涉及登录态迁移，虽有 Keyvault 加密与批准机制，仍应界定哪些账号允许进入 Space

## 7. 谁该用 / 谁别碰

训练、评测或部署 computer-use agent，且需要隔离桌面与可回放轨迹的团队；只需少量 GUI 自动化脚本的个人使用者可直接用 Driver，不必上 Spaces。

## 8. 评分依据

热度增速 **88** · 社区规模 **85** · 更新活跃 **79** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：四条线覆盖从 VM 到评测的完整链路，Keyvault 与后台投递这两处设计说明它认真处理了「agent 与人共用电脑」的边界。选型时要先分清开源部分与源可用商业部分，并核对平台支持矩阵。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
