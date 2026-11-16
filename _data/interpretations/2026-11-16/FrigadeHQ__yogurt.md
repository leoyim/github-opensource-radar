---
date: 2026-11-16
repo: FrigadeHQ/yogurt
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4.5
language: TypeScript
stars: 1655
starGain: null
url: https://github.com/FrigadeHQ/yogurt
tags: [ai-meeting-assistant, ai-notetaker, electron, granola-alternative, linux, llama-cpp, local-ai, local-first]
generatedAt: 2026-11-16T01:55:53.209Z
---

# FrigadeHQ/yogurt · 项目解读

> **一句话**：不拉机器人进会议的本地 AI 会议笔记，音频与模型都留在自己电脑。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 1,655 |
| 今日新增 | — |
| 仓库 | https://github.com/FrigadeHQ/yogurt |

## 1. 它解决什么问题

主流会议笔记工具要往会议里加一个 bot，或把音频上传到云端做转写；对涉及客户与内部讨论的场景，这既改变会议形态，也带来数据外流与合规顾虑。

## 2. 为什么是现在

本期 1,655 星、5 天新仓已进榜，README 首屏即写「Private AI meeting notes. A free, open-source alternative to Granola」并给出 Mac/Windows/Linux 三个平台包。它把「不加 bot」「本地处理」「无需账户」三条同时前置，是本期本地优先取向里最激进的一项。

## 3. 关键能力

- 录制麦克风与电脑播放的声音并实时转写，不向会议里加入 bot
- 生成会议摘要、跨会议问答并附来源，支持文件夹与全文搜索、Markdown 导出
- 本地处理：whisper.cpp（Mac 上另有 Apple SpeechAnalyzer）转写、llama.cpp 跑本地开放权重模型
- 多语言模式覆盖 99 种语言，Mac 上可识别 Zoom/Teams/Meet 的说话人
- 本地 MCP server 让助手应用读取笔记，默认关闭、只读；支持录音提醒与通话结束自动停止

## 4. 架构与实现

Electron 桌面应用，音频、转写与摘要全在本地；首次需下载模型（先约 5 GB 的笔记模型，再按硬件选更大的，可达 14 GB 以上），之后可离线工作。数据按平台分别存在 ~/Library/Application Support/Yogurt、%APPDATA%\Yogurt、~/.config/Yogurt；MCP 通道在 Mac/Linux 用 0600 socket、Windows 用随机命名管道。

## 5. 上手路径

1. 按平台下载安装包并确认 8 GB 内存与系统版本要求，预留首次模型下载空间
2. 先录一段本地测试音频，核对转写与摘要质量再用于真实会议
3. 按合规要求提前告知与会者正在录音（README 明确 bot 不入会，需自行提示）
4. 需要助手联动时再在 Settings → AI apps 打开只读 MCP，用完及时关闭

## 6. 风险与边界

- 首次模型下载 5–14 GB 以上，磁盘与带宽成本明显
- MCP 开启后同账户下任何应用都能读笔记，无 per-app token，且对方可能把内容发到自己的在线模型
- Windows 安装包尚未签名，README 说明会触发 SmartScreen 提示
- 仅 5 天新仓，说话人识别、日历关联目前限 Mac，跨平台功能尚不齐

## 7. 谁该用 / 谁别碰

适合对会议内容保密要求高、不愿引入云端 bot 的知识工作者；不适合设备内存不足、或需要团队集中管理与共享笔记的场景。

## 8. 评分依据

热度增速 **98** · 社区规模 **59** · 更新活跃 **82** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：「本地 + 不加 bot + 无账户」三件事同时做到，定位很干净，MCP 只读通道也把边界写清楚了；但 5 天新仓与首次十余 GB 下载，建议先在本机小范围试用。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-16 · 依据仓库 README 与 GitHub 元数据</sub>
