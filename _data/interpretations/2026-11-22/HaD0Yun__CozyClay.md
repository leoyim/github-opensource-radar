---
date: 2026-11-22
repo: HaD0Yun/CozyClay
category: frontend
categoryLabel: 前端 / Web
rating: 4
language: JavaScript
stars: 2066
starGain: 43
url: https://github.com/HaD0Yun/CozyClay
tags: [3d, 3d-animation, ai, ai-video, animation, blender, camera-control, llm-agent]
generatedAt: 2026-11-22T02:08:13.737Z
---

# HaD0Yun/CozyClay · 项目解读

> **一句话**：先把镜头定死，再交给 AI 生成视频。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 2,066 |
| 今日新增 | +43 |
| 仓库 | https://github.com/HaD0Yun/CozyClay |

## 1. 它解决什么问题

文生视频最大的不确定性不是画质，而是镜头不可控：一句提示词无法指定机位、走位与剪辑点，反复抽卡也难得到连贯的一组镜头。

## 2. 为什么是现在

本期前端方向唯一入选，2,066 星、209 fork，当日新增 43 星，116 天的项目已能给出浏览器试用、AI agent 操作指南与文档。README 首句「Make the scene first. Then make it a video.」直接把定位写在最前面。

## 3. 关键能力

- 在浏览器里搭场景、摆角色姿态、编排镜头运动与剪辑点
- 把同一组镜头交给外部 AI 视频模型生成成片
- npx cozyclay 启动，每次运行拉取最新 release
- 提供面向 AI agent 的指南、文档与从源码构建路径
- 全局安装后顶栏显示更新提示，可用 cclay update 或 --off 关闭检查

## 4. 架构与实现

浏览器端 3D 预演工具，场景与镜头作为结构化数据组织，导出后交给外部视频模型；分发走 npm / npx，更新检查在客户端完成，Windows 上刻意只给复制命令而不做一键更新。AGPL-3.0 许可。

## 5. 上手路径

1. 用 npx cozyclay 起一个本地实例，先打开示例场景
2. 按 Guide for AI agents 读一遍镜头与导出的数据结构
3. 做一个 3 镜头的小场景并导出，观察与成片的一致性
4. 团队部署前固定版本号，避免每次运行都拉最新包

## 6. 风险与边界

- 成片还原度取决于所接的外部 AI 视频模型，预演不等于最终画面
- 浏览器端 3D 编辑对显卡与内存有要求，大场景可能卡顿
- npx 每次拉取最新 release，可复现性与供应链需自行约束
- AGPL-3.0 对闭源集成有开源义务

## 7. 谁该用 / 谁别碰

需要可控多镜头短片的内容团队与独立创作者；只需要单张图或单句提示词生成的人用不上预演层。

## 8. 评分依据

热度增速 **87** · 社区规模 **62** · 更新活跃 **64** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把可控性放在生成之前，方向比继续堆提示词更对；但工具链最后一环仍握在外部视频模型手里，验收要以自己的成片为准。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
