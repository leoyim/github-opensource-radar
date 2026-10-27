---
date: 2026-10-27
repo: OpenWhispr/openwhispr
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: JavaScript
stars: 10062
starGain: 74
url: https://github.com/OpenWhispr/openwhispr
tags: [ai, anthropic, cross-platform, gemini, groq, linux, macos, nvidia]
generatedAt: 2026-10-27T01:47:11.541Z
---

# OpenWhispr/openwhispr · 项目解读

> **一句话**：本地或自带 Key 的语音听写，外加会议转写与 AI 笔记。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 10,062 |
| 今日新增 | +74 |
| 仓库 | https://github.com/OpenWhispr/openwhispr |

## 1. 它解决什么问题

WisprFlow、Granola 这类产品把听写与会议记录做得很顺，但都是闭源订阅且音频上云。OpenWhispr 提供开源替代：热键说话即出字，本地可选 Whisper、NVIDIA Parakeet 等模型，也可以自带 Key 走云端换速度，另外补上会议转写与 AI 笔记。

## 2. 为什么是现在

10,062 星、今日 +74。与 Handy 同日入选，两者共同点是完全本地优先、无遥测；差异在于 OpenWhispr 往「会议与笔记」延伸，Handy 更专注输入法式的即时听写。赛道分化的信号已经出现。

## 3. 关键能力

- 热键听写，文字出现在光标处
- 本地模型可选：Whisper、NVIDIA Parakeet、Cohere Transcribe 等（README 列举）
- BYOK 云端模式：可接 Anthropic、Gemini、Groq 等服务
- 会议转写与 AI 笔记
- 跨 macOS/Windows/Linux
- 声明无数据收集、无遥测、完全开源

## 4. 架构与实现

桌面应用（JavaScript 为主，跨平台打包），语音识别层做成可替换的 provider：本地模型与云端 API 走同一抽象，因此用户可逐场景选择隐私或速度。README 单列 Tech stack 章节，细节以官方文档为主。

## 5. 上手路径

1. 先本地模式跑通一段会议录音，评估你常用语种的识别质量
2. 需要实时性时再切云端 BYOK，注意音频出网意味着隐私模型改变
3. 会议场景提前确认录音合规（参与者知情），这是使用前提

## 6. 风险与边界

- 本地模型对硬件有要求，长会议转写耗时明显
- BYOK 模式下音频离开本机，与「隐私优先」的宣称需要用户自行权衡
- 与 Handy 功能重叠，选型取决于是否需要会议与笔记能力

## 7. 谁该用 / 谁别碰

需要本地转写但又要会议纪要与笔记的职场用户与团队；只做即时输入的人用 Handy 更轻。

## 8. 评分依据

热度增速 **89** · 社区规模 **77** · 更新活跃 **75** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把「隐私」与「便利」做成可选组合是它的聪明之处；但要清楚 BYOK 一旦启用，隐私承诺的边界就变了。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-27 · 依据仓库 README 与 GitHub 元数据</sub>
