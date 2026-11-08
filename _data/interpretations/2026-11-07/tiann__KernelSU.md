---
date: 2026-11-07
repo: tiann/KernelSU
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Kotlin
stars: 20203
starGain: 58
url: https://github.com/tiann/KernelSU
tags: [android, kernel, kernelsu, root, su]
generatedAt: 2026-11-07T03:29:20.658Z
---

# tiann/KernelSU · 项目解读

> **一句话**：把 root 能力放进内核层实现，并用 App Profile 把权限关进每个应用自己的笼子。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Kotlin |
| 星标 | 20,203 |
| 今日新增 | +58 |
| 仓库 | https://github.com/tiann/KernelSU |

## 1. 它解决什么问题

Android 上的 root 方案长期存在两难：用户态方案容易被应用检测，内核态方案又对设备内核版本与模块机制有依赖；同时一旦授予 root，权限面过大，任何应用都可能越界。需要的是内核级实现加上可按应用收窄的授权模型。

## 2. 为什么是现在

项目 1,429 天、20,203 星，本期 +58。README 列出三条核心特性——内核态 su 与 root 权限管理、基于 metamodules 的模块系统、App Profile「把 root 关进笼子」，并说明官方支持 Android GKI 2.0（kernel 5.10+），旧内核 4.14+ 另有支持路径。本期跨端五席里，它是唯一触及系统内核层的项目，与其余应用层项目形成对照。

## 3. 关键能力

- 基于内核的 su 与 root 访问权限管理
- 基于 metamodules 的模块系统，为 systemless 修改提供可插拔基础设施
- App Profile：按应用限定 root 权限范围，收敛授权面
- 官方支持 Android GKI 2.0 设备（kernel 5.10+），较旧内核（4.14+）另有支持
- 提供多语言文档、安装与构建说明、兼容性状态、讨论与安全章节

## 4. 架构与实现

Kotlin 实现（内核侧以 C 为主，按仓库元数据标注 Kotlin），GPL-3.0 许可，README 特别注明 kernel 目录下文件为 GPL-2.0-only。结构上是「内核态权限判定 + 用户态管理端 + 模块系统」三层：su 与授权在内核完成，因此比纯用户态方案更难被绕过；App Profile 把权限按应用隔离，metamodules 让系统无侵入修改可插拔。兼容性与构建步骤以官方文档为准。

## 5. 上手路径

1. 先读 Compatibility state，确认设备内核版本与 GKI 支持情况
2. 按 Installation 在可恢复的设备上操作，事先完整备份数据
3. 装好后用 App Profile 只给必要应用授权，验证其余应用拿不到 root
4. 需要模块时逐个启用 metamodule，观察系统稳定性再叠加

## 6. 风险与边界

- 内核级修改存在无法开机、数据丢失与保修失效风险，必须在可恢复环境并先备份
- root 会削弱系统安全模型， banking、支付与完整性校验类应用可能拒绝运行
- 内核目录为 GPL-2.0-only、其余为 GPL-3.0，混合许可对再分发有约束，需逐条核对
- 强依赖具体内核版本与厂商实现，系统升级后可能失效需重新适配

## 7. 谁该用 / 谁别碰

熟悉 Android 内核与刷机流程、需要按应用精细控制 root 权限的开发者与高级用户。

## 8. 评分依据

热度增速 **79** · 社区规模 **84** · 更新活跃 **69** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：内核态实现加 App Profile 的组合，把「能不能 root」和「给谁 root」分开处理。适合有明确需求且能承担风险的高级用户；普通用户与生产设备不建议动内核层。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-07 · 依据仓库 README 与 GitHub 元数据</sub>
