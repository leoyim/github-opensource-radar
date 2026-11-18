---
date: 2026-11-18
repo: Vincentwei1021/video-shotcraft
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4.5
language: TypeScript
stars: 21015
starGain: 408
url: https://github.com/Vincentwei1021/video-shotcraft
tags: [agent-skills, ai-agents, ai-video, claude-code, claude-code-skills, claude-skills, codex, motion-design]
generatedAt: 2026-11-18T02:26:10.291Z
---

# Vincentwei1021/video-shotcraft · 项目解读

> **一句话**：成片不是生成出来的，是用代码从你的真实页面一帧帧画出来的。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 21,015 |
| 今日新增 | +408 |
| 仓库 | https://github.com/Vincentwei1021/video-shotcraft |

## 1. 它解决什么问题

用模型直接生成产品宣传视频，画面容易失真、品牌元素不可控，交付的是一段无法再改的 MP4；而人工做动效又要写 Remotion 代码、配运镜、卡节拍、补音效与逐帧验收，门槛高且难以复用。

## 2. 为什么是现在

本期 21,015 星、1,933 fork、4 个 open issue，122 天项目较上一快照新增 408 星；README 明确写「It is not a video generator」，把 124 张运镜配方卡、150 个预览、节拍同步与剪映草稿导出串成一条可编辑流水线，说明 agent skill 已从文本任务扩到完整的多媒体交付物。

## 3. 关键能力

- agent 抓取真实产品页面与截图，从 124 张调优过的运镜配方卡里选镜头并生成分镜
- 用 Remotion 逐帧以代码绘制画面，按节拍剪辑、加音效，并逐帧检查后交付 MP4
- 150 个运镜预览的 Gallery 与 Showcase，可先浏览再决定镜头组合
- Motion Workbench：类剪映的浏览器编辑器，成片可继续修改
- 导出剪映（CapCut CN）草稿，把成片拆成按镜头组织的可编辑片段
- 给出低核机器上 Remotion --concurrency 上限、新版 Chromium 移除旧 headless 模式、CDN 被墙导致 headless-shell 失败等常见坑的处理说明

## 4. 架构与实现

以 agent skill 形式挂在 Claude Code / Codex 上：skill 负责流程编排与素材捕获，镜头库与配方卡提供可复用的动效参数，Remotion 作为渲染后端把分镜编译成逐帧代码绘制的视频，音效资源来自 Freesound 并记录在 manifest 里。交付物不止 MP4，还包括可在 Motion Workbench 或剪映里继续编辑的工程结构；旁支 video-talkcraft 处理解说类视频。

## 5. 上手路径

1. 在 Claude Code 或 Codex 里加载 skill，用「make a promo for my product」加一个自己的页面 URL 试跑
2. 先在 Gallery 里挑 2–3 个镜头，确认抓取到的截图与文案是你要的品牌内容
3. 跑一次完整渲染，若报 concurrency 上限或 headless-shell 拉不到，按 README 的排障段调整
4. 导出剪映草稿检查是否按镜头拆好，并核对 Freesound 音频的 CC BY 归属要求

## 6. 风险与边界

- 依赖 Remotion 与 headless Chromium，国内网络下 CDN 不可达是 README 明确列出的常见问题，需自备 headless-shell
- 低核机器上并发渲染会失败，CI 或轻薄本需降 --concurrency
- Freesound 音频按各自许可使用，商用发布需保留项目 manifest 与 CC BY 署名
- 逐帧渲染成本随分辨率与镜头数上升，长片的时间与算力开销需先估
- 4 个 open issue、122 天项目，Motion Workbench 与剪映导出都是较新加入的能力，边界情况可能未覆盖

## 7. 谁该用 / 谁别碰

需要频繁产出产品宣传短片、又要求品牌元素与后续可编辑性的开发者与小型市场团队；追求写实生成画面或没有 Remotion/Node 环境的场景不适用。

## 8. 评分依据

热度增速 **94** · 社区规模 **82** · 更新活跃 **58** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：「用代码画每一帧」的定位很清醒，避开了生成式视频不可控的老问题，并把交付物做成可继续编辑的工程而非死文件，配方卡与剪映导出也确实降低了复用成本。门槛在渲染链路本身：Chromium、并发与 CDN 都会实际卡人，建议先用短片跑通再规模化。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-18 · 依据仓库 README 与 GitHub 元数据</sub>
