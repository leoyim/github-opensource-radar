---
date: 2026-10-26
repo: manaflow-ai/cmux
category: tools
categoryLabel: 开发工具 / 效率
rating: 4
language: Swift
stars: 28506
starGain: 119
url: https://github.com/manaflow-ai/cmux
tags: [amp, claude-code, cli, codex, coding-agents, gemini, ghostty, macos]
generatedAt: 2026-10-26T11:59:07.500Z
---

# manaflow-ai/cmux · 项目解读

> **一句话**：基于 Ghostty 的 macOS 终端：垂直 tab、agent 通知环、内嵌可脚本化浏览器。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Swift |
| 星标 | 28,506 |
| 今日新增 | +119 |
| 仓库 | https://github.com/manaflow-ai/cmux |

## 1. 它解决什么问题

macOS 上跑多个 coding agent，问题不在终端渲染而在「发现」：哪个会话在等你、哪个跑完了、PR 状态如何、本地起了哪些端口。cmux 把这些信息收进侧栏，并用通知环把注意力引到正确的 pane。

## 2. 为什么是现在

今日 +119 星。与 TUIOS 同日在榜，说明「终端作为 agent 编排层」已是共识方向，只是一个走 TUI（跨平台）、一个走原生 macOS。

## 3. 关键能力

- 通知环与通知面板：agent 需要你时 pane 亮蓝环，未读集中查看
- 垂直 + 水平 tab，侧栏显示 git 分支、关联 PR 状态与编号、工作目录、监听端口、最新通知
- 内嵌浏览器：与终端并排分屏，API 可脚本化，支持从 20+ 浏览器导入 cookie/历史/会话
- cmux ssh：一条命令为远程机器建工作区，可带 --command 直接启动 agent
- cmux.json 自定义命令，从命令面板触发
- CLI 与 socket API：建工作区、分屏、发按键、自动化浏览器
- 兼容 Ghostty 配置（~/.config/ghostty/config 的主题、字体、颜色）

## 4. 架构与实现

Swift + AppKit 原生应用，渲染走 libghostty（GPU 加速），因此启动与内存表现优于 Electron 方案；浏览器部分的会话导入与脚本 API 移植自 agent-browser。

## 5. 上手路径

1. 用 DMG 或 Homebrew 安装，先确认现有 Ghostty 配置被正确继承
2. 把一个 agent 放进 tab，观察通知环在你切走后是否如期出现
3. 需要多机时试 cmux ssh，再配 cmux.json 把常用动作放进命令面板

## 6. 风险与边界

- 元数据自相矛盾：README 写「GPL-licensed」，GitHub 许可证字段却是 NOASSERTION，商用前必须确认
- 仅 macOS，团队跨平台时无法统一
- 从浏览器导入登录态意味着凭据进入终端应用，需评估信任边界

## 7. 谁该用 / 谁别碰

适合 macOS 上同时跑多个 agent、且在意原生性能与通知可见性的开发者；Linux/Windows 用户应看 TUIOS 一类方案。

## 8. 评分依据

热度增速 **79** · 社区规模 **84** · 更新活跃 **80** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把「agent 通知」做成了终端的核心信息架构，是本期体验设计最讲究的一个；但授权信息不一致是必须先澄清的问题。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
