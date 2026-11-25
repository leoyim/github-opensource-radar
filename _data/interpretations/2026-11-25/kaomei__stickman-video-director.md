---
date: 2026-11-25
repo: kaomei/stickman-video-director
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: JavaScript
stars: 8084
starGain: null
url: https://github.com/kaomei/stickman-video-director
tags: [agent-skills, ai-animation-generator, ai-video-production, animation, claude-code, claude-skills, codex-skill, content-creation]
generatedAt: 2026-11-25T02:41:50.438Z
---

# kaomei/stickman-video-director · 项目解读

> **一句话**：一条消息把脚本变成带配音字幕的火柴人动画视频，面向无真人出镜频道。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 8,084 |
| 今日新增 | — |
| 仓库 | https://github.com/kaomei/stickman-video-director |

## 1. 它解决什么问题

讲解型内容的动画制作门槛：真人出镜成本高，传统动画制作周期长，无真人出镜频道需要一条「脚本到成片」的自动化链路，且要能局部修改不返工。

## 2. 为什么是现在

8,084 星、上线 114 天、JavaScript、MIT，fork 1,416。视频生成服务成熟后，「agent 排程 + 外部生成」的组合才可行；它把分镜确认前置、局部修改保留已批准部分的工作流固化成 skill，这是纯脚本方案没有的。

## 3. 关键能力

- 脚本、分镜、配音、字幕与音效全链路，agent 一条消息完成
- 16 种实战验证的风格，从黑白线稿到极简科技风
- 分镜与开头 20 秒带音频预览前置确认，批准后才进入成片阶段
- 局部修改：只调整该段，保留已批准部分
- 多语言文档（英简中日韩法葡土印尼），适用科普、心理学、商业拆解等讲解型内容

## 4. 架构与实现

技能包驱动宿主 agent（Claude Code、Codex 等）编排任务，素材准备与动画生成调用外部视频生成服务（文档推荐 Google Flow），产出侧组装配音、字幕与音效成片。

## 5. 上手路径

1. 按 README 教程用 Google Flow 出第一条视频，先跑通「脚本—预览—批准—成片」链路
2. 确认账号的视频生成额度与水印规则，估算单集成本
3. 试一次局部修改：只改某一段配音，确认其余段落未被重生成
4. 核对背景音乐与音效的授权范围，再决定是否商用

## 6. 风险与边界

- 成片质量依赖外部生成服务，不同平台额度与水印规则各异，成本随用量线性增长
- 配乐与音效的分发授权需逐条核对，商用频道尤其注意
- 风格模板固定为 16 种，超出范围的视觉风格需要自建素材
- 生成服务接口变动会导致技能层连锁失效，依赖上游稳定性

## 7. 谁该用 / 谁别碰

无真人出镜的知识类频道运营者；需要批量产出讲解动画的内容团队。

## 8. 评分依据

热度增速 **95** · 社区规模 **75** · 更新活跃 **56** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把「分镜确认前置 + 局部修改」做进 skill 工作流是它对纯脚本的实质改进，链路完整；但质量上限由外部生成服务决定，成本模型与授权边界要先算清再上量。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
