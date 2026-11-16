---
date: 2026-11-16
repo: ersinkoc/phonebox
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: C#
stars: 1292
starGain: null
url: https://github.com/ersinkoc/phonebox
tags: [android, claude-code, codex, dashboard, desk-panel, dotnet, linux, macos]
generatedAt: 2026-11-16T01:55:53.209Z
---

# ersinkoc/phonebox · 项目解读

> **一句话**：把吃灰的旧安卓手机变成电脑的桌面副屏与触控控制台。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | C# |
| 星标 | 1,292 |
| 今日新增 | — |
| 仓库 | https://github.com/ersinkoc/phonebox |

## 1. 它解决什么问题

想给电脑加一块显示硬件状态、控制音乐或触发宏的副屏，需要额外买设备；旧手机性能足够，却缺少一个能自定义布局、稳定连接、且不必 root 或依赖云服务的方案。

## 2. 为什么是现在

本期 1,292 星、8 天新仓，118 fork / 25 issue 显示已有真实使用与反馈。README 用 11 种语言呈现，列出 115 个 widget、30 个模板与浏览器可视化编辑器；同时它把 Claude Code / Codex 的配额与权限审批放到手机面板上，正好接上本期 agent 工作流的展示需求。

## 3. 关键能力

- Android 全屏 App + 桌面 agent，经 USB 或 Wi-Fi 连接，Windows / Linux / macOS 均可，无需 root、账户或云服务
- 浏览器可视化编辑器：115 个 widget、30 个模板、多页面与实时预览，多台手机可有各自布局
- PC 监控（CPU/GPU/内存/磁盘/网络/进程）、AI 编码会话与配额、GitHub reviews / CI 状态
- 触控控制：快捷方式与宏、应用音量/麦克风/媒体/OBS/系统控制，可从手机回答 Claude Code 的 Allow/Deny
- 日常面板：Now Playing、网络电台、时钟天气、日历、清单、番茄钟，以及 Webhook 与 Home Assistant 自动化

## 4. 架构与实现

桌面侧是自带 .NET 运行时的 .NET 10 agent，本地监听 127.0.0.1:8765 提供设置与编辑器；Android 侧为 APK。USB 走 adb 数据线与调试授权，Wi-Fi 走扫码配对并核对校验码，两者可自动回退；安装脚本会校验 release 的 SHA-256 并可选装 Android App。

## 5. 上手路径

1. 读一遍 setup.ps1 / setup.sh 再执行，确认安装路径与开机自启选项
2. 先用 Wi-Fi 扫码配对（无需开发者选项），打开 127.0.0.1:8765 选一个模板保存
3. 确认 PC 监控与 Now Playing 数据正常，再按需加 AI 会话或控制类 widget
4. 若启用 USB 调试，只在你信任的电脑上授权，并留意当前 release agent 未签名

## 6. 风险与边界

- 安装采用 irm | iex / curl | bash 的一键脚本，README 自己提醒要先通读脚本
- release agent 因代码签名申请未完成而暂未签名，SmartScreen 或杀软可能拦截
- USB 调试授权与本地 HTTP 设置端口都扩大了攻击面，不应暴露到非受信网络
- 8 天新仓、.NET 10 与 Android 9+ 的组合较新，跨平台细节仍在快速变化

## 7. 谁该用 / 谁别碰

适合有闲置安卓设备、喜欢自定义桌面面板的开发者与效率玩家；不适合对未签名二进制或本地调试端口有严格限制的环境。

## 8. 评分依据

热度增速 **98** · 社区规模 **58** · 更新活跃 **79** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把「旧硬件复用」和「agent 状态可视化」缝在一起，编辑器与模板数量扎实，社区反馈也已起来；安装脚本与未签名发布物是当前最需要自行把关的两处。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-16 · 依据仓库 README 与 GitHub 元数据</sub>
