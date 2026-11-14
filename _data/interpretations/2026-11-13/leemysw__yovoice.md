---
date: 2026-11-13
repo: leemysw/yovoice
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: TypeScript
stars: 2172
starGain: null
url: https://github.com/leemysw/yovoice
tags: [ai-music, audio, desktop-app, local-ai, macos, mcp, midi, music-generation]
generatedAt: 2026-11-13T02:11:25.742Z
---

# leemysw/yovoice · 项目解读

> **一句话**：把 TTS、声音克隆、整曲生成与多轨编曲全部放在本机跑，不调用云端 API，也不装 Python 环境。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 2,172 |
| 今日新增 | — |
| 仓库 | https://github.com/leemysw/yovoice |

## 1. 它解决什么问题

语音与音乐生成常按字符或分钟计费，稿件与参考音色还要上传到第三方；本地方案又往往附带一整套 Python/Conda/PyTorch 依赖，安装与冲突排查成本很高。缺的是一个开箱即用、数据不出本机的创作工作台。

## 2. 为什么是现在

58 天做到 2,172 星、164 fork。本期本地优先的取向同时出现在协作、后端与创作三条线上，yovoice 是创作侧最完整的一项，并且把 MCP 与 agent skill 直接做进了产品。

## 3. 关键能力

- 语音侧支持文字转语音、按描述设计音色、克隆参考声音，并可调整情绪与表达、对 take 做局部编辑
- 音乐侧可生成带人声的整曲与 General MIDI 多轨编曲；故事配音能导入文本或字幕，按角色逐行生成
- 转录与字幕：把音频或视频转成带时间轴的字幕行，导出 SRT / WebVTT，并可用参考文本自动填充
- 工作台提供多 take 版本对比、波形裁剪、时间轴滚动与干净的 stems / MIDI 导出
- 内置 MCP server 与 agent skill，可从 Cursor、Claude Code 或 DeepSeek、Qwen、Ollama 等模型端发起端到端创作

## 4. 架构与实现

TypeScript 桌面应用，底层由原生 C++ 的 audio.cpp v0.9.3 承担推理，Windows 随包提供 CUDA 12.4/13.3 运行时、macOS 走 Metal，因此不依赖 Conda 或 PyTorch 环境。README 明确 100% 本地、零云 API 调用，并列出 Supported Models、Installation、CLI & Agent Skill 与 Development 章节。Apache-2.0 许可。

## 5. 上手路径

1. 按平台下载安装包，先确认本机 GPU 与驱动满足要求，再跑一次短文本合成
2. 用一段自有录音试声音克隆，核对输出与参考音色的差异
3. 需要批量工作时再接 MCP 或 agent skill，把逐行生成与字幕导出串成流程
4. 导出前确认 stems 与 MIDI 的目标格式，避免后期再转换

## 6. 风险与边界

- 本地推理对显存与算力有要求，低配机器上生成时长与可用性会明显受限
- 模型权重需自行下载，首次安装体积与磁盘占用要提前规划
- 声音克隆涉及他人音色时，授权与用途边界由使用方自行确认
- 58 天新仓、7 个 open issue，模型支持列表与平台适配仍在扩充
- 本地模型与云端服务在音质、语言覆盖和可控性上可能存在差距，重要产出需人工审听

## 7. 谁该用 / 谁别碰

需要处理稿件、配音或配乐且在意数据不出本机的创作者与小团队；也适合研究本地推理桌面应用打包与 MCP 集成的开发者。追求顶级音质或大规模并发生成的场景仍需服务端方案。

## 8. 评分依据

热度增速 **93** · 社区规模 **62** · 更新活跃 **58** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它同时解决了两件事：数据留在本地，以及绕开 Python 环境这一最劝退的安装环节；多 take、波形与 stems/MIDI 导出让它更像工作台而非模型演示。代价是硬件门槛、模型体积，以及克隆音色的授权边界。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-13 · 依据仓库 README 与 GitHub 元数据</sub>
