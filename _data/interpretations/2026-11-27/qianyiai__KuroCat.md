---
date: 2026-11-27
repo: qianyiai/KuroCat
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4.5
language: TypeScript
stars: 1384
starGain: null
url: https://github.com/qianyiai/KuroCat
tags: [3d, ai-companion, android, bongo-cat, bongocat, claude-code, codex, cross-platform]
generatedAt: 2026-11-27T01:52:46.331Z
---

# qianyiai/KuroCat · 项目解读

> **一句话**：一个桌宠同时跑四类系统，还能当 OBS 透明源与 MCP 客户端。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 1,384 |
| 今日新增 | — |
| 仓库 | https://github.com/qianyiai/KuroCat |

## 1. 它解决什么问题

桌宠类小工具通常只在单一平台可用，想放进直播画面还要额外抠像；想让它跟编码助手联动，又缺少标准接口。

## 2. 为什么是现在

5 天、1,384 星、193 fork，TypeScript、MIT。Tauri v2 加 Rust 实现 3D / 2D 透明置顶窗口，6 款猫咪形象，输密码时自动闭眼，OBS 免抠像直接作透明源，内置 MCP 可扩展行为；覆盖 Windows、macOS、Linux 与 Android，含中英日韩四语。

## 3. 关键能力

- 3D / 2D 透明置顶，6 款形象，输入密码时自动回避
- OBS 免抠像，直接作为透明源采集
- 内置 MCP，可按协议扩展行为与联动
- 四平台覆盖：Windows、macOS、Linux、Android
- 四语界面，提供官网在线试玩与校验信息
- 含 Win7 SP1 兼容包与 WebView2 运行时说明

## 4. 架构与实现

Tauri v2 外壳加 Rust 后端，渲染层做透明窗口与动画；MCP 作为扩展面，把外部能力接进桌宠行为；打包产物未购商业签名证书，因此安装环节有系统拦截。

## 5. 上手路径

1. 先从官网校验下载包的哈希，再决定是否放行 SmartScreen 拦截
2. 老系统先装 WebView2 运行时，否则窗口无法渲染
3. 直播场景直接用透明源采集，不要叠加色键
4. 接 MCP 前先确认它请求的能力范围，避免授予不必要权限

## 6. 风险与边界

- 未购商业签名证书，安装时会被系统与浏览器拦截，需手动放行
- 5 天新项目，四平台打包的稳定性尚未经时间检验
- MCP 扩展意味着可被外部能力驱动，权限边界需自行审查
- 桌宠常驻前台，资源占用与电池影响的实测数据还很少

## 7. 谁该用 / 谁别碰

希望桌面有轻度陪伴感、同时用编码 agent 的开发者；需要直播叠加形象的创作者。

## 8. 评分依据

热度增速 **97** · 社区规模 **59** · 更新活跃 **85** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：工程选择聪明：Tauri 加 Rust 让一个小工具获得跨端与低占用，MCP 则给了它继续长大的接口。签名缺失是现实短板，但也说明它没有把成本转嫁给用户。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-27 · 依据仓库 README 与 GitHub 元数据</sub>
