---
date: 2026-11-07
repo: GopeedLab/gopeed
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Dart
stars: 27470
starGain: 58
url: https://github.com/GopeedLab/gopeed
tags: [android, bittorrent, cross-platform, download-manger, downloader, downloadmanager, ed2k, flutter]
generatedAt: 2026-11-07T03:29:20.658Z
---

# GopeedLab/gopeed · 项目解读

> **一句话**：用 Go 加 Flutter 做一套跨桌面、移动与 Web 的下载管理器，把多协议和扩展能力收进同一个客户端。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Dart |
| 星标 | 27,470 |
| 今日新增 | +58 |
| 仓库 | https://github.com/GopeedLab/gopeed |

## 1. 它解决什么问题

下载需求分散在多个工具里：HTTP 一个、BT 一个、浏览器集成一个，还要各自处理暂停续传、批量任务与自动化。用 Electron 打包又带来体积与资源开销。缺的是一个轻量原生界面、同时覆盖多协议并留出扩展接口的实现。

## 2. 为什么是现在

项目 2,757 天、27,470 星，本期 +58。README 的 features 相当完整，明确「主界面由 Flutter 原生渲染，不用 Electron、不用 WebView」，并列出 HTTP/HTTPS、BitTorrent、magnet、ed2k、DHT、uTP、Web Seeds、选择性下载等能力，以及 REST API、CLI、浏览器扩展与自托管 Web UI。本期跨端五席里，它是唯一把「一套代码覆盖六端」讲清楚的项目。

## 3. 关键能力

- 多协议下载：HTTP/HTTPS、BitTorrent、magnet 与 ed2k 统一入口
- 完整 BT 能力：DHT 节点发现、uTP 传输、Web Seeds、选择性文件下载与 tracker
- 并发任务、多连接 HTTP 传输与 P2P 结合提升速度；任务可暂停、续传、重试、批量与按状态筛选
- Flutter 原生渲染界面，不用 Electron/WebView；跟随系统主题、支持八种强调色与响应式布局
- 提供浏览器集成、JavaScript 扩展、REST API、CLI 与自托管 Web UI，覆盖 Windows/macOS/Linux/Android/iOS/Web 及 Docker、QNAP 部署

## 4. 架构与实现

Dart / Flutter 实现（后端为 Go，按描述「built with Golang and Flutter」），GPL-3.0 许可。README 分 Introduction、Features、AI Integration、Download、2.0.0 Beta、Command-line tool、Browser Extension、Development、Environment、Clone 等章节，可确认结构为「Go 下载核心 + Flutter 多端界面 + 可插拔扩展层」：核心负责协议与任务调度，扩展与 REST API/CLI 把自动化能力暴露出来，界面层不含 WebView 因此体积与资源占用更低。具体实现细节以源码为准。

## 5. 上手路径

1. 按 Download 选择稳定版装到常用平台，先跑一个 HTTP 与一个 magnet 任务
2. 验证暂停续传、批量操作与按状态筛选，确认任务管理符合习惯
3. 需要自动化时接 REST API 或 CLI，浏览器场景再装对应扩展
4. 关注 2.0.0 Beta 的状态，生产使用前确认所选版本的稳定性

## 6. 风险与边界

- GPL-3.0 许可对闭源再分发有约束，集成前需评估条款
- 同时覆盖六端与四类协议，各平台的行为一致性与维护压力较大
- BT / ed2k 等协议涉及第三方内容与网络合规，使用者需自行确认所在地区的法律要求
- README 列有 AI Integration 与 2.0.0 Beta，新特性成熟度需实测而非照说明推断

## 7. 谁该用 / 谁别碰

需要统一管理多协议下载、并希望用 API/CLI 做自动化的桌面与移动用户。

## 8. 评分依据

热度增速 **79** · 社区规模 **83** · 更新活跃 **67** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把多协议核心与轻量原生界面拆清楚，再留出扩展与 API，是它能跨六端的原因。适合下载场景复杂、需要脚本化的用户；只下几个 HTTP 文件时，系统自带工具已够用。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-07 · 依据仓库 README 与 GitHub 元数据</sub>
