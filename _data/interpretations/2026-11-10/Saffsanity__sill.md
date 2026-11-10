---
date: 2026-11-10
repo: Saffsanity/sill
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 3.5
language: Swift
stars: 4763
starGain: 38
url: https://github.com/Saffsanity/sill
tags: [apple-pencil, hevc, ios, ipad, ipados, iphone, iphone-duo, macos]
generatedAt: 2026-11-10T02:30:51.336Z
---

# Saffsanity/sill · 项目解读

> **一句话**：无账号、无中转服务器，把 Mac 窗口用 HEVC 实时送到 iPhone / iPad 并可反向操作。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Swift |
| 星标 | 4,763 |
| 今日新增 | +38 |
| 仓库 | https://github.com/Saffsanity/sill |

## 1. 它解决什么问题

把 Mac 上的某个窗口放到 iPad 上当副屏或绘图面，常见方案要么依赖云账号与中转服务器，要么只能镜像整屏、延迟高且不能精细操作。想要低延迟、可触控、可用 Apple Pencil，还不想把画面经过第三方。

## 2. 为什么是现在

49 天 4,763 星、285 fork、167 个 open issue，本期 +38。README 把「no servers」直接写进一句话定位，并给出四种连接方式（同网、USB、无共同网络时的直连无线、自己的 VPN 远程访问）；Mac 端为免费公证包、iOS 端免费且可源码构建，这种「无账号 + 可自建」的组合在跨端工具里辨识度很高。

## 3. 关键能力

- 把 Mac 上任意窗口或整个桌面实时显示到 iPhone / iPad
- 支持触摸、Apple Pencil、触控板与键盘反向操作 Mac
- Mac 端抓取窗口后编码为 HEVC 视频，经 TLS 1.3 加密连接直送设备
- 输入（点击、滚动、按键）沿同一通道回传
- 四种连接方式：同一局域网、USB 有线、直连无线、走自己的 VPN（如 Tailscale）远程访问
- iPhone 竖持时画面在上、按钮与按键在下，便于单手操作
- Mac 端菜单栏常驻；提供 Homebrew 安装与 iOS 端源码构建

## 4. 架构与实现

Swift 实现、Apache-2.0 许可。链路是「Mac 屏幕录制权限 → 窗口级捕获 → HEVC 编码 → TLS 1.3 直连 → 设备端解码显示」，输入沿同一通道反向回传，全程无账号、无服务器中转。要求 Mac 为 macOS 14+（Apple silicon 或 Intel）、设备为 iOS / iPadOS 17+；Mac 端需授予 Screen Recording 权限。直连无线与自建 VPN 两条路径让它在无共同网络时仍可用。285 fork、167 个 open issue，反映跨设备与网络组合的适配反馈较多。

## 5. 上手路径

1. 确认 Mac 为 macOS 14+、设备为 iOS / iPadOS 17+
2. 从 getsill.app 下载 Mac 端（或 brew install --cask saffsanity/sill/sill），iOS 端从 App Store 安装
3. 在 Mac 上授予屏幕录制权限，先在同一局域网下连接一次
4. 选单个窗口而非整屏试用，测试触摸、滚动与键盘回传
5. 需要外出或不同网络时再按 README 配直连无线或自己的 VPN

## 6. 风险与边界

- 需要 Mac 授予屏幕录制权限，企业设备可能受管理策略限制
- 画面质量与延迟依赖网络条件与 HEVC 编解码，无线环境下波动需实测
- 167 个 open issue 说明不同 Mac / 设备 / 网络组合的适配仍在收敛
- 无服务器中转意味着远程访问要自行配置 VPN（如 Tailscale），对非技术用户有门槛
- 项目 49 天，功能与权限模型仍可能随版本调整，升级后建议回归验证

## 7. 谁该用 / 谁别碰

想把 iPad 当 Mac 的可交互副屏、用 Apple Pencil 操作 Mac 应用、或需要在无云账号前提下做低延迟跨端显示的开发者与创作者。只需要远程桌面全屏镜像、且不介意走云服务的场景，成熟方案可能更省事。

## 8. 评分依据

热度增速 **66** · 社区规模 **68** · 更新活跃 **72** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它在架构上做了两个明确取舍：窗口级而非整屏捕获，以及端到端直连、无账号无服务器。前者让 iPad 真正成为一个可操作的窗口，后者把隐私与延迟都握在使用者手里；代价是远程场景要自己配 VPN，且适配组合仍需实测。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-10 · 依据仓库 README 与 GitHub 元数据</sub>
