---
date: 2026-10-26
repo: Gaurav-Gosain/tuios
category: tools
categoryLabel: 开发工具 / 效率
rating: 4
language: Go
stars: 6065
starGain: 190
url: https://github.com/Gaurav-Gosain/tuios
tags: [ai-agents, bubbletea, charm, claude-code, codex, coding-agents, developer-tools, go]
generatedAt: 2026-10-26T11:59:07.500Z
---

# Gaurav-Gosain/tuios · 项目解读

> **一句话**：会盯着 agent 状态的终端窗口管理器：平铺、workspace、会话保活，全部 agent 汇到一个 Inbox。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Go |
| 星标 | 6,065 |
| 今日新增 | +190 |
| 仓库 | https://github.com/Gaurav-Gosain/tuios |

## 1. 它解决什么问题

同时跑三五个 coding agent 时，终端成为瓶颈：tmux 能分会话，但不知道哪个 pane 在等你确认、哪个已经卡住。TUIOS 在终端多路复用器之上加了一层「agent 状态感知」：agent 可上报状态、互相发消息，所有待处理事项集中到一个 Inbox。

## 2. 为什么是现在

今日 +190 星。多 agent 并行已经从尝鲜变成日常，编排层（谁在跑、谁在等、谁挂了）成为新的刚需，而终端是成本最低的落点。

## 3. 关键能力

- vim 式模态操作，终端内完成全部管理
- BSP 平铺 + master-stack / 滚动布局，支持预选与分屏控制
- workspace 与会话：daemon 保活，跨重启恢复，并可连到其他机器上的会话
- Agent 状态通道：pane 内的 agent 上报状态、彼此发消息，统一 Inbox 收拢
- kitty 图形协议透传，图片预览无闪烁
- Hooks：在 window / session / agent 事件上跑 shell 命令
- 主题与 glyph set 可定制

## 4. 架构与实现

Go 实现，基于 Charm 栈（Bubble Tea v2 + Lipgloss v2），事件驱动渲染，README 称空闲时 CPU 近乎为零；文档在 tuios.dev 与仓库 docs/ 双份。安装渠道覆盖包管理器、安装脚本、go install 与 Docker，并附多 shell 补全。

## 5. 上手路径

1. 先用安装脚本跑起来，把一个 agent 放进 pane，验证状态上报是否生效
2. 配好 hooks，让「agent 需要确认」触发桌面通知，减少盯屏
3. 再开多 workspace 做真实并行任务，观察 daemon 保活与跨重启恢复

## 6. 风险与边界

- agent 状态上报需要 agent 侧配合，未接入的 agent 在 Inbox 里是隐形的
- 终端内自建窗口管理有学习曲线，快捷键需要一段时间形成肌肉记忆
- README 特别声明「只在 tuios.dev 与本仓库发布、没有 X 账号」，说明存在仿冒分发

## 7. 谁该用 / 谁别碰

适合在终端里跑多个 agent、且愿意投入几天适应模态操作的工程师；只用单个 agent 的人，tmux 已经够用。

## 8. 评分依据

热度增速 **85** · 社区规模 **70** · 更新活跃 **68** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：本期最贴工程日常的一个工具：它补的正是 tmux 缺的那块——agent 的运行状态；代价是学习曲线与 agent 侧接入。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
