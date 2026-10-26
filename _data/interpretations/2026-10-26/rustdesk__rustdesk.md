---
date: 2026-10-26
repo: rustdesk/rustdesk
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4.5
language: Rust
stars: 127108
starGain: 186
url: https://github.com/rustdesk/rustdesk
tags: [android, anydesk, dart, flatpak, flutter, flutter-apps, ios, linux]
generatedAt: 2026-10-26T11:59:07.500Z
---

# rustdesk/rustdesk · 项目解读

> **一句话**：Rust 写的开源远控，可完全自建 rendezvous/relay，TeamViewer 的自托管替代。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Rust |
| 星标 | 127,108 |
| 今日新增 | +186 |
| 仓库 | https://github.com/rustdesk/rustdesk |

## 1. 它解决什么问题

商业远控的定价与数据路径都由厂商决定：连接要经过他们的服务器，私有网络里还要额外开洞。RustDesk 把服务端（rendezvous/relay）开源，允许自建或自己实现，客户端覆盖桌面与移动端。

## 2. 为什么是现在

今日 +186 星、127,108 星总量、6 年仓龄。它属于「长期刚需 + 稳定迭代」型项目，本期上榜更像是持续曝光而非新爆发。

## 3. 关键能力

- 跨平台客户端：Windows / macOS / Linux / Android / iOS / Flatpak
- 开箱即用：默认配置即可连接，也可换成自建服务端
- 服务端可自建：rendezvous 与 relay 均可自托管，或按协议自己实现
- 自持数据：连接元数据与中继流量不经过第三方
- 多语言界面（README 顶部列出数十种语言的翻译状态）

## 4. 架构与实现

Rust 核心 + 平台原生外壳（桌面端含 Flutter/Flutter Apps topics）；源码构建需准备 C++ 环境与 vcpkg，并安装 libvpx、libyuv、opus、aom 等编解码依赖。仓库结构分 libs/hbb_common（编解码、配置、TCP/UDP 封装）、libs/base（protobuf、文件传输）、libs/scrap（屏幕采集）等。

## 5. 上手路径

1. 先用官方客户端与服务端跑通一次连接，确认 NAT 与网络环境
2. 再自建 rendezvous/relay：relay 带宽按并发会话数预留，别用最低配
3. 开公网前配置访问密码、IP 白名单与失败锁定，远控端点是高危入口

## 6. 风险与边界

- AGPL-3.0：修改后对外提供服务需开源；商业分发前须评估
- 自建 relay 承担全部流量成本，视频类会话带宽消耗高
- 远控软件是攻击面最大的工具之一，弱口令与暴露公网会直接导致主机失守

## 7. 谁该用 / 谁别碰

适合需要自建远控、或跨境/内网场景无法依赖商业服务的团队；只需要偶尔帮家人远程的个人，用官方免费中继即可。

## 8. 评分依据

热度增速 **89** · 社区规模 **97** · 更新活跃 **72** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：成熟的基建型项目，选型上几乎没有替代品（开源 + 可自建 + 全平台）；成本从订阅费转移到带宽与安全运维上。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
