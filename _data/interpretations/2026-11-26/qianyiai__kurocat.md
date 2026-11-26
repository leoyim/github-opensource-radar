---
date: 2026-11-26
repo: qianyiai/kurocat
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: TypeScript
stars: 988
starGain: null
url: https://github.com/qianyiai/kurocat
tags: [3d, ai-companion, android, bongo-cat, bongocat, claude-code, codex, cross-platform]
generatedAt: 2026-11-26T01:52:26.117Z
---

# qianyiai/kurocat · 项目解读

> **一句话**：Tauri v2 写的桌面打字猫：六款皮肤、密码遮挡，还内置 MCP 让 AI 生成新角色。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 988 |
| 今日新增 | — |
| 仓库 | https://github.com/qianyiai/kurocat |

## 1. 它解决什么问题

桌面陪伴类应用多停在「好看但不耐用」：单平台、依赖运行时、扩展靠作者持续更新；录屏与直播场景下还容易泄露输入内容。

## 2. 为什么是现在

988 星、上线 4 天、TypeScript + Rust、MIT，152 fork、38 issue。它的做法是把扩展口交给 MCP：原生内置 MCP 服务端，可用一句话让 AI 新增自定义角色；输入密码时自动闭眼或捂眼；支持 Windows（含 Win7 SP1）、macOS、Linux（含麒麟与 UOS）与 Android，可作为 OBS 透明浏览器源，单文件分发、无外部运行时依赖。

## 3. 关键能力

- 六款手绘皮肤 + 鲸鱼角色，支持 3D 与 2D 切换
- 密码遮挡：检测到密码输入时自动闭眼或捂眼
- 内置 MCP 服务端：用自然语言让 AI 生成或修改角色
- 广平台覆盖：Windows 7 SP1 至 11、macOS 10.15+、Linux（麒麟、UOS、Ubuntu）、Android
- OBS 透明浏览器源：可直接用于直播画面
- 单文件低耗：无外部运行时依赖，提供多语言文档

## 4. 架构与实现

基于 Tauri v2：Rust 侧负责全局键盘钩子与原生窗口，前端以 HTML5 Canvas 2D 渲染角色动画；MCP 服务端内嵌于应用内，供外部 AI 客户端调用以生成角色资源。

## 5. 上手路径

1. 先从官网或仓库 Releases 安装，核对校验值，避免第三方镜像
2. 直播场景下先试 OBS 浏览器源，确认透明通道与帧率
3. 需要自定义角色时通过 MCP 接入，先生成一个再检查资源体积
4. 企业环境部署麒麟或 UOS 前，先验证全局钩子的权限要求

## 6. 风险与边界

- 全局键盘钩子在部分安全软件下会被判为风险行为，需加白名单
- 4 天 988 星属爆发期，长期维护与版本节奏尚未验证
- 桌面宠物类应用常被误报，需核对发布源与校验值
- Windows 7 等老平台的兼容维护成本高，后续可能收缩

## 7. 谁该用 / 谁别碰

希望在桌面加一层轻量陪伴与直播装饰的用户；需要跨平台统一体验的国产系统用户。

## 8. 评分依据

热度增速 **93** · 社区规模 **57** · 更新活跃 **84** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把角色扩展交给 MCP 是聪明的取舍：不必等作者更新皮肤，也让应用与 AI 工具链产生连接。技术上 Tauri + Rust 的选择让体积与资源占用可控；热度极新，稳定性还需时间检验。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-26 · 依据仓库 README 与 GitHub 元数据</sub>
