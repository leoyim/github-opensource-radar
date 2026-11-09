---
date: 2026-11-09
repo: oinkvm/oink
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Rust
stars: 866
starGain: 195
url: https://github.com/oinkvm/oink
tags: [audio-sharing, barrier-alternative, clipboard-sync, cross-platform, drag-and-drop, keyboard-sharing, kvm, macos]
generatedAt: 2026-11-09T02:01:02.679Z
---

# oinkvm/oink · 项目解读

> **一句话**：在 Mac 与 Windows 之间建一条默认加密的局域网共享链路，键鼠、音频、剪贴板与拖放一起走。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Rust |
| 星标 | 866 |
| 今日新增 | +195 |
| 仓库 | https://github.com/oinkvm/oink |

## 1. 它解决什么问题

多机协作时，键鼠共享只解决了一半：音频还得单独接线或开软件、文件靠网盘来回传、剪贴板不同步。传统 KVM 方案也常依赖一台主机与专用配置。要做的是把「附近的电脑当成一组设备」自动发现并统一共享，同时不让流量明文跑在局域网里。

## 2. 为什么是现在

项目仅 20 天、866 星，本期 +195 为移动与跨端方向日增第一，也是全榜前列；70 fork、18 个 open issue。它在极短时间内获得关注，说明「跨设备无缝协同」仍有明确需求，而 README 把默认加密与音频汇总放在功能首段，是把体验问题和安全边界一起处理，而非事后补充。

## 3. 关键能力

- 用任意一台设备的键盘、鼠标与触控板控制附近设备，保持原生手感
- 把多台设备的音频通过其中一台的扬声器或耳机播放
- 跨设备共享剪贴板与拖放
- 自动发现局域网内的设备
- 所有流量默认加密
- 支持 Mac（Apple silicon 与 Intel）与 Windows x64 混合组网

## 4. 架构与实现

Rust 实现、GPL-3.0 许可，形态是点对点的本地网络设备共享软件，安装包与对应源码从 GitHub Releases 获取。README 仅约 3,800 字符，章节为 Install、Sponsor、Contributing、FAQ、License，主体是功能说明与平台要求，未展开内部架构。平台要求写得较细：Mac 需 macOS 14.2 及以上（Intel 标注未测试），Windows 需 x64 且 Windows 10 1809／build 17763 或 Windows 11，并提示旧版 LTSC 不含 WebView2 Runtime，需先安装 Evergreen 运行时。

## 5. 上手路径

1. 先核对两台设备的系统与架构是否满足 Requirements 中的最低版本
2. 从 GitHub Releases 获取与平台匹配的安装包，并保留对应源码备查
3. 在同一局域网内各装一份，确认自动发现与键鼠控制可用
4. 再逐项验证音频汇总、剪贴板与拖放，并检查 FAQ 中的连接问题排查项

## 6. 风险与边界

- 仅 20 天的新项目，跨版本系统与混合架构组合尚未充分验证（Intel Mac 已标注未测试）
- README 未展开内部架构，权限模型与加密实现细节需自行审阅源码
- Windows 旧版 LTSC 需额外安装 WebView2 Runtime，部署前要单独准备
- GPL-3.0 许可与设备共享涉及的网络权限，二次分发或企业部署前应逐项确认

## 7. 谁该用 / 谁别碰

同时使用 Mac 与 Windows、希望减少外设切换并让剪贴板与音频一起流转的用户；以及关注局域网设备协同实现的开发者。需要跨公网协同、集中管理或企业级审计的团队，当前形态并不适用。

## 8. 评分依据

热度增速 **93** · 社区规模 **54** · 更新活跃 **70** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把键鼠、音频、剪贴板与拖放合进同一条默认加密的局域网链路，定位清晰且补齐了传统 KVM 的空白。项目很新、文档偏薄，适合先在双机环境试用，暂不宜作为团队标准配置。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-09 · 依据仓库 README 与 GitHub 元数据</sub>
