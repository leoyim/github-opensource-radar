---
date: 2026-10-27
repo: pch/rawmakase
category: tools
categoryLabel: 开发工具 / 效率
rating: 3.5
language: Rust
stars: 1543
starGain: 45
url: https://github.com/pch/rawmakase
tags: [linux-desktop, omarchy, photography, raw-editor]
generatedAt: 2026-10-27T01:47:11.541Z
---

# pch/rawmakase · 项目解读

> **一句话**：Rust 写的非破坏性 RAW 编辑器，替 Linux 用户补上 Lightroom 的位置。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 1,543 |
| 今日新增 | +45 |
| 仓库 | https://github.com/pch/rawmakase |

## 1. 它解决什么问题

RAW 后期长期被 Adobe 生态占据，Linux 桌面缺乏体验接近的方案；而订阅制与目录锁定又让很多摄影师不愿迁移。RAWmakase 用 Rust 实现非破坏性编辑，支持 Lightroom 风格的调整面板，并能导入 Lr Classic 目录（评分、旗标、标签、关键词与兼容的调整项），且不写原目录与原片。

## 2. 为什么是现在

1,543 星、今日 +45。它的增长与「非 Adobe 后期工作流」的需求直接相关；README 明确列出不支持的文件类型（Sigma Foveon、GoPro GPR、宾得 K-3 III 单色的 PEF、Adobe 旧式有损 DNG），这种诚实披露在同类项目中不多见。

## 3. 关键能力

- 非破坏性编辑，覆盖 RAW/JPEG/PNG/TIFF/WebP/AVIF/JPEG XL
- Lightroom 风格调整面板
- 导出 JPEG、16bit TIFF、PNG（WebP/AVIF/JXL 导出尚未支持）
- 导入 Lightroom Classic 目录的评分、旗标、标签、关键词与兼容调整，不修改原目录
- 支持单色 DNG、线性 DNG（iPhone ProRAW）、HDR 与全景合并结果
- 三平台安装包：macOS 15+、Linux（deb/rpm/Arch）、Windows 10+

## 4. 架构与实现

Rust 实现图像管线与 UI，采用非破坏性编辑模型（编辑参数与原始文件分离）。README 的兼容性清单说明它对各家 RAW 变体做了针对性处理。具体解码后端与色彩管理实现未在 README 展开。

## 5. 上手路径

1. 先用官方安装包，拿一批你自己的机器样片验证解码与色彩是否可接受
2. 迁移时先导入 Lr 目录做只读比对，确认评分与关键词映射正确
3. 导出走 16bit TIFF 保留最大余量，需要交付网络格式时再转

## 6. 风险与边界

- README 自陈是个人项目且在活跃开发，功能与稳定性会变
- 不支持部分特殊机型格式（Foveon、GPR、K-3 III 单色 PEF、旧式有损 DNG）
- 导出格式尚未覆盖 WebP/AVIF/JXL，交付链路需另配工具

## 7. 谁该用 / 谁别碰

Linux 桌面摄影师、以及想脱离订阅制但不愿放弃 Lr 目录的个人用户；商业影棚的批量交付链路仍需评估。

## 8. 评分依据

热度增速 **81** · 社区规模 **57** · 更新活跃 **65** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：切入点是真实缺口（Linux + Lr 目录迁移），且对局限披露充分；适合个人工作流先行试用，团队交付暂缓。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-27 · 依据仓库 README 与 GitHub 元数据</sub>
