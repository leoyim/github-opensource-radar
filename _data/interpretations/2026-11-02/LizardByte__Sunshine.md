---
date: 2026-11-02
repo: LizardByte/Sunshine
category: backend
categoryLabel: 后端 / 云原生
rating: 4
language: C++
stars: 42889
starGain: 42
url: https://github.com/LizardByte/Sunshine
tags: [cpm, cpp, docker, flathub-pkg, game-stream, game-streaming, game-streaming-server, geforce-experience]
generatedAt: 2026-11-02T02:17:39.678Z
---

# LizardByte/Sunshine · 项目解读

> **一句话**：自建的低延迟游戏串流服务端，配 Moonlight 客户端，三大 GPU 硬件编码全支持。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | C++ |
| 星标 | 42,889 |
| 今日新增 | +42 |
| 仓库 | https://github.com/LizardByte/Sunshine |

## 1. 它解决什么问题

想把台式机的游戏画面串到客厅电视、平板或手机上，商业方案（GeForce Experience / Steam Link）各有硬限制：绑定特定显卡、绑定平台、或者干脆停止维护。Sunshine 做的是纯自托管的串流服务端：在主机上跑，用 AMD / Intel / NVIDIA 的硬件编码器压缩画面，任何设备上的 Moonlight 客户端都能连，配置和配对通过浏览器里的 Web UI 完成。

## 2. 为什么是现在

1,782 天、4.3 万星，本轮 +42，属稳定存量。它长期占据「自托管串流」这个位置，原因是替代品稀缺：NVIDIA 的 GameStream 已被官方放弃，Steam Link 只覆盖自家生态，而 Sunshine + Moonlight 是唯一同时支持三家的开源组合。近两年的增量主要来自掌机与移动端：Steam Deck、Android 平板、Apple TV 都能当客户端，串流从「极客玩具」变成了实际可用的家庭方案。

## 3. 关键能力

- 自托管串流服务端，配合任意设备上的 Moonlight 客户端使用
- 硬件编码：支持 AMD、Intel、NVIDIA 三家的 GPU 编码器，同时保留软件编码兜底
- Web UI 配置与客户端配对，可从本地主机或移动设备完成
- 低延迟设计，面向云游戏级串流场景
- 覆盖 Windows / Linux / macOS 等多种部署环境，含 Docker 与 Flathub 包
- 提供稳定版与测试版双份文档，功能兼容性矩阵单独成表

## 4. 架构与实现

采集 → 编码 → 传输 → 客户端解码四段流水线。采集用系统级 API 抓帧，编码优先走 GPU 的硬件编码器（NVENC / QuickSync / AMF），传输由 Moonlight 协议负责自适应码率与帧控，客户端侧解码并做输入回传。服务端不承担渲染，因此性能开销集中在编码器占用上。Web UI 是个轻量本地服务，负责配置、配对与状态查看，不参与数据面。

## 5. 上手路径

1. 先确认主机的 GPU 编码器型号支持哪些编码格式（H.264 / HEVC / AV1），格式选错会明显增加延迟
2. 优先走有线网络：这类串流对丢包极敏感，Wi-Fi 是绝大多数「卡顿」投诉的真实原因
3. 配对码有效期短，Web UI 与客户端要同时操作
4. 先用较低码率与分辨率跑通，再逐步上调，比一步到位更容易定位瓶颈
5. Linux 主机需额外配置采集与权限，Windows 侧的开箱体验明显更好

## 6. 风险与边界

- Web UI 默认监听本地网络，暴露到公网等于把主机控制权交出去，需自行加认证与网络隔离
- 硬件编码的画质与延迟强依赖 GPU 世代，老卡可能出现画质劣化
- 串流涉及游戏与内容的版权，公开传播或商业使用有法律风险
- Linux 侧的采集配置复杂，遇到问题是常态
- GPL-3.0 许可，二次分发与商用集成需遵守传染性条款

## 7. 谁该用 / 谁别碰

有闲置显卡想自建家庭串流的玩家、需要在局域网内远程访问工作站的重度用户、以及做数字标牌/远程演示的自托管爱好者。

## 8. 评分依据

热度增速 **82** · 社区规模 **86** · 更新活跃 **72** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：在「自托管串流」这个细分里基本没有对手，工程完成度也够。唯一要提醒的是安全面：它本质是把一台主机的画面与输入交给网络，Web UI 与端口的暴露范围必须自己管住。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-02 · 依据仓库 README 与 GitHub 元数据</sub>
