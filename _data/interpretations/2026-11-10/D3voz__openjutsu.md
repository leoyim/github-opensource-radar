---
date: 2026-11-10
repo: D3voz/openjutsu
category: frontend
categoryLabel: 前端 / Web
rating: 3.5
language: TypeScript
stars: 2043
starGain: 73
url: https://github.com/D3voz/openjutsu
tags: [character-swap, comfyui, minimax-h3, nextjs, open-weights, opensourcehiggsfield, video-generation]
generatedAt: 2026-11-10T02:30:51.336Z
---

# D3voz/openjutsu · 项目解读

> **一句话**：把视频里的人换掉而保留镜头、动作与音轨，全流程跑在自有 GPU 与开放权重模型上。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 2,043 |
| 今日新增 | +73 |
| 仓库 | https://github.com/D3voz/openjutsu |

## 1. 它解决什么问题

视频人物替换目前主要靠闭源在线服务，素材要上传、按次计费、参数不可调，且换完常常连相机运动和剪辑节奏一起改掉。想要可控、可本地复现的结果，得自己把生成模型、跟踪模型和描述模型拼成一条工作流。

## 2. 为什么是现在

15 天新仓已有 2,043 星、291 fork、48 个 open issue，本期 +73。它把闭源能力拆成一套可审阅的开源组合：MiniMax H3 负责视频生成、SAM 3.1 跟踪人物、Qwen3-VL 8B 做视觉描述、FLUX.3 Klein 重打光，应用只是薄薄一层 Next.js 前端套 ComfyUI 工作流，并明确声明遵循 Comfy 官方 comfy-reshoot 参考实现。

## 3. 关键能力

- 简单动作迁移：替换画面中占幅最大的主体人物
- 高级动作迁移：支持 1–4 个角色并各自指定角色，按镜头把被跟踪的人与角色匹配
- 物体替换：把 SAM 跟踪到的头发、外套、车辆等换成描述或参考图所示内容，也可直接移除
- 从图片出发时，FLUX 按原视频帧的姿态与身体裁切准备角色，同时保留角色图片特征
- 后处理修脸：针对人在画面里过小时 H3 画不好脸的问题单独重绘
- 保留原视频的相机、剪辑点、运动与音轨，只替换指定主体

## 4. 架构与实现

TypeScript（Next.js 前端）+ Python（comfy-api-proxy），MIT 许可。应用使用 @comfyorg/sdk 驱动 ComfyUI 0.41.2+ 的工作流，核心由 ComfyUI 提供 MiniMax H3、SAM 3.1 与 TextGenerate；models 章节列出所需权重，custom nodes 章节列出自定义节点。硬件门槛写得很实：需 NVIDIA GPU，README 给出 RTX 4060 Ti 16 GB + 64 GB 内存的实测配置，并说明 H3 int8 模型从内存流式加载。另提供部署到 Comfy Developer Platform 的路径。48 个 open issue 反映环境配置仍是主要摩擦。

## 5. 上手路径

1. 先按 Requirements 核对显卡与内存，README 的实测配置是 4060 Ti 16 GB + 64 GB RAM
2. 安装 ComfyUI 0.41.2+ 与 Node.js 22.6+，配好 Python 侧的 comfy-api-proxy
3. 按 Models 与 Custom nodes 下载权重和节点，再按 Run it locally 启动
4. 先用简单动作迁移模式跑一段短视频（主体占幅大、单一人物）验证链路
5. 读 How it works 与 Tips，再尝试多角色与物体替换等复杂模式

## 6. 风险与边界

- 硬件门槛明确且不低，多个模型权重与显存/内存调度是实际使用的最大障碍
- 依赖 ComfyUI 版本、自定义节点与第三方权重，任一环节升级都可能打断工作流
- 项目仅 15 天、48 个 open issue，环境适配与边界镜头仍在处理中
- 人物替换涉及肖像与素材授权，用于公开内容前需自行确认合规性
- README 说明 H3 在人物占画面较小时画脸效果差，需要额外后处理，成片质量不总是稳定

## 7. 谁该用 / 谁别碰

想本地可控地做视频人物 / 物体替换、且已有 NVIDIA GPU 的创作者与技术团队；也适合想研究「生成 + 跟踪 + 描述」多模型如何编排成 ComfyUI 工作流的人。没有合适显卡或希望开箱即用的在线服务，成本会高于收益。

## 8. 评分依据

热度增速 **89** · 社区规模 **63** · 更新活跃 **22** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它的价值是把一条闭源能力拆成可替换的开放权重流水线，并明确保留原片镜头与音轨，这个取向比单纯「能换脸」更工程化。但硬件要求与多组件版本耦合都很实，建议按 README 的实测配置起步，别指望轻量部署。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-10 · 依据仓库 README 与 GitHub 元数据</sub>
