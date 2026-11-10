---
date: 2026-11-10
repo: JuneYaooo/rea-video
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: Python
stars: 5569
starGain: null
url: https://github.com/JuneYaooo/rea-video
tags: [agent-skills, ai-video, aigc-detection, claude-code, codex, ffmpeg, prompt-engineering, remotion]
generatedAt: 2026-11-10T02:30:51.336Z
---

# JuneYaooo/rea-video · 项目解读

> **一句话**：把任意视频拆成逐镜头取证报告，判断是拍的、AI 生成的还是代码做的，再给出复刻配方。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 5,569 |
| 今日新增 | — |
| 仓库 | https://github.com/JuneYaooo/rea-video |

## 1. 它解决什么问题

AI 生成视频与代码渲染的动效越来越多，肉眼很难说清一段素材是怎么做出来的，更谈不上复刻。现有工具要么只做「是否 AI」的二分类，要么是生成侧的黑盒，缺少一份能落到镜头、时间轴、提示词与布光层面的可核对拆解。要做投放分析、竞品素材研究或教学复盘，往往只能靠人反复拉片。

## 2. 为什么是现在

11 天新仓已有 5,569 星、804 fork、仅 4 个 open issue，本期无历史基线，属首次进入视野的冷启动项目。它以 Agent Skill 形态交付，正好卡在编码代理开始接管多媒体任务的节点上；README 的 Quick start 直接写成「在 Claude Code / Codex 里说一句话安装并拆解视频」，把使用入口从 CLI 挪进了代理会话。

## 3. 关键能力

- 逐镜头判定素材来源：实拍、AI 生成或代码渲染，并给出依据帧与置信描述
- 输出完整 report.html，含逐帧证据、提示词、机位与布光说明、音频拆解
- 生成复刻计划，按「要实拍 / 要生成 / 要写代码」三类拆开，并列出需自行准备的录屏、截图与产品图
- 字幕与样式文本：逐行起止时间（可导出 SRT / ASS）、颜色、描边与入场方式
- 标注贴纸、emoji、画中画的位置与停留时长，剪辑点密度与是否踩节拍
- 音频拆解：人声或 AI 配音、曲库音乐或 AI 音乐及 BPM、每个音效落点

## 4. 架构与实现

Python 实现、Apache-2.0 许可，依赖 ffmpeg 与 Python 3.10+，以 Agent Skill / CLI 形式被编码代理调用而非独立 GUI。README 章节按 Quick start → What it can break down → Examples → Remakes → Accuracy → How it works 组织，说明输出重心是一份结构化报告而不是渲染管线；Accuracy 与 FAQ 单列，意味着作者把判定误差当作需要解释的边界而非默认结论。仓库 804 fork、4 个 open issue，11 天内进入真实协作阶段但争议量极低。

## 5. 上手路径

1. 在 Claude Code、Codex 等可执行命令的代理里按 Quick start 一句话安装并拆解本地视频
2. 或按 README 的手动安装步骤配置 ffmpeg 与 Python 3.10+ 后运行 CLI
3. 先拿一段 8 秒左右的短视频试跑，对照 report.html 检查逐镜头判定与自己的判断差多少
4. 读 Accuracy 与 How it works，明确它在哪些素材上会判不准，再决定是否用于正式分析
5. 按 Remakes 章节准备复刻素材（录屏、截图、产品图），用报告里的配方做一次还原

## 6. 风险与边界

- 来源判定本质是推断，README 单列 Accuracy 章节即说明存在误差，不宜作为真伪结论的唯一依据
- 依赖 ffmpeg 与本地算力，长视频或高分辨率素材的逐帧拆解成本会明显上升
- 复刻计划需要自行提供录屏、截图、产品照片等素材，工具本身不产出这些资产
- 项目仅 11 天、4 个 open issue，判定规则与输出格式仍可能快速变动
- 涉及他人视频素材的取证与复刻，使用时需自行留意素材的授权范围

## 7. 谁该用 / 谁别碰

做投放素材分析、竞品视频研究、AIGC 内容鉴别与教学的团队，以及已经在用 Claude Code / Codex 处理多媒体任务、希望把拉片流程自动化的人。只想要一个「是 AI 吗」的二元结论、或需要批量在线判别服务的场景，它的定位偏重。

## 8. 评分依据

热度增速 **100** · 社区规模 **72** · 更新活跃 **70** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：差异点不在检测精度，而在输出物是一份能指导复刻的施工报告：镜头、字幕、剪辑节奏、音频 BPM 都落到时间轴。对需要解释「这段为什么这么拍」的人，比一个分数有用得多；但 11 天新仓、判定本身带推断性质，建议先在小样本上验证再纳入正式流程。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-10 · 依据仓库 README 与 GitHub 元数据</sub>
