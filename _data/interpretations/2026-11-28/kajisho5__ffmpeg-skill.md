---
date: 2026-11-28
repo: kajisho5/ffmpeg-skill
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: Python
stars: 11922
starGain: 377
url: https://github.com/kajisho5/ffmpeg-skill
tags: [agent-skills, ai-agents, audio-processing, captions, claude-code, codex, coding-agent, cursor]
generatedAt: 2026-11-28T02:35:30.797Z
---

# kajisho5/ffmpeg-skill · 项目解读

> **一句话**：把 FFmpeg 包成 agent 能读懂、能自检的工具契约，而不是一串 shell 命令。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Python |
| 星标 | 11,922 |
| 今日新增 | +377 |
| 仓库 | https://github.com/kajisho5/ffmpeg-skill |

## 1. 它解决什么问题

让 agent 剪视频的常见失败是命令拼错或参数臆造：filter graph 一旦写错，输出可能静默变形；直接覆盖源文件的风险也没人兜。缺一层结构化中间层，模型越「自由」越不可靠。

## 2. 为什么是现在

85 天、11,922 星、985 fork、47 issue，MIT。本期日增 377，是 agent 方向最高之一。它的做法是把 42 个操作做成带类型参数的脚本，配一份机器可读的契约，并附 MCP 服务供不同客户端接入。

## 3. 关键能力

- 42 个 FFmpeg 工具，覆盖剪切、字幕、改画幅、响度归一与平台导出
- 先 probe 再决定参数：按实测时长、帧率、分辨率、色彩与音频布局选方案
- 写后回读校验，确认实际时长、帧尺寸与音频符合预期
- 目标路径与已声明输入重合时拒绝，直接改源文件需显式 --overwrite
- contract --json 声明每个工具的参数、产物、依赖组件与校验方式

## 4. 架构与实现

每个操作是一个独立脚本，参数有类型、不经过 shell，因此不存在拼接注入与转义问题。工具链分三段：probe（测量）→ 规划（按契约选工具与参数）→ 执行并复核（读回产物元数据）。这套结构让 agent 的职责从「写命令」退化为「选工具加填参数」，错误面大幅收窄。README 里 12 段实拍与生成素材的剪辑样例，是验证这套契约可用性的直接证据。

## 5. 上手路径

1. 先确认本机 ffmpeg 与 ffprobe 可用，并跑一次组件自检
2. 用一两个短片段试 probe → 剪切 → 回读，确认校验环节真的会拦错
3. 批量处理前把输出目录与源目录分开，避免命中覆盖保护而中断
4. 若在 agent 框架里用，先读 contract --json 的输出，别按 README 猜参数

## 6. 风险与边界

- 仅覆盖 FFmpeg 能力范围内的事，复杂转场与合成仍需手工
- 依赖本机 FFmpeg 版本与组件（如字幕、响度滤镜）齐备，缺组件会失败
- 「自检」校验的是容器与流参数，不校验画面内容是否正确
- 单一维护者，42 个工具的边界情况覆盖靠 issue 累积

## 7. 谁该用 / 谁别碰

让 agent 批量处理视频的开发者；需要把剪辑动作固化成可复核流水线的内容团队。

## 8. 评分依据

热度增速 **91** · 社区规模 **77** · 更新活跃 **68** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：这是本期最值得借鉴的一种 agent 工程范式：不给模型自由，给它一份契约。把校验放进工具层，比在提示词里反复叮嘱「不要覆盖原文件」有效得多。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-28 · 依据仓库 README 与 GitHub 元数据</sub>
