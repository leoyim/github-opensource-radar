---
date: 2026-11-20
repo: imxieyi/Kernarium
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: C++
stars: 1009
starGain: null
url: https://github.com/imxieyi/Kernarium
tags: [android, emulator, ios, linux, linux-kernel, user-mode-linux, virtualization]
generatedAt: 2026-11-20T02:13:10.160Z
---

# imxieyi/Kernarium · 项目解读

> **一句话**：用 User-mode Linux 在 iOS 上原生跑真实 Linux 内核，用户态才交给解释器。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | C++ |
| 星标 | 1,009 |
| 今日新增 | — |
| 仓库 | https://github.com/imxieyi/Kernarium |

## 1. 它解决什么问题

在 iOS 上跑 Linux 通常二选一：整机模拟（UTM 等）兼容好但开销大，或纯用户态模拟（iSH 等）轻但拿不到真实内核能力，容器、命名空间、SELinux 这类需求无法满足。

## 2. 为什么是现在

仓库创建仅 12 天已 1,009 星 / 106 fork / 17 个 issue，GPL-2.0。README 把架构位置讲得很清楚：介于整机模拟与纯用户态模拟之间——UML 内核编译成原生 arm64 并链接进 iOS framework，内核原生执行、不加模拟，只有用户态程序走 iSH 式线程解释器。本期跨端方向里最硬核的一次底层尝试。

## 3. 关键能力

- 在 iOS 上原生运行 Linux 6.18 LTS 主线内核，支持 namespaces、SELinux 等多数内核特性
- 用户态以 iSH 式线程解释器执行，支持 arm64 / arm32 / x86_64 客户指令与 SMP，提供解释器与 JIT 两种模式
- GPU 加速经 KosmicKrisp 提供 Vulkan 1.4，经 Zink 提供 OpenGL 4.6 与 GLES 3.2，硬件编解码走 VideoToolbox
- 存储支持 UBD 虚拟磁盘、ext2/3/4 / erofs / xfs 等文件系统、loop 设备与 FUSE，网络走完整 Linux 栈 + libslirp
- 已上架基于该运行时的 Android 模拟器应用 Andarium，并提供 IPA 侧载；附 AGENTS.md 便于让 coding agent 参与构建

## 4. 架构与实现

把 Linux 内核编译为 User-mode Linux 形态的原生 arm64 代码，链入 iOS runtime framework，因此内核在设备上原生执行、无指令模拟；用户态程序则由 iSH 式线程解释器执行，只模拟用户态代码。GPU 通过 Vulkan→Metal 的 KosmicKrisp 转换层与 Zink 叠加，视频编解码直接调 VideoToolbox；存储与网络分别由 UBD/libslirp 承接。这条架构介于 UTM 的整机模拟与 iSH 的纯用户态模拟之间，兼顾真实内核语义与可执行速度。

## 5. 上手路径

1. 从 App Store 装 Andarium 或侧载 IPA，先确认在自己的设备与系统版本上能启动
2. 跑一个需要 namespace 的工作负载（如轻量容器），验证真实内核能力是否可用
3. 试一次 GPU 相关场景，核对 Vulkan / OpenGL 转换层的实际表现
4. 若要自行构建，按 AGENTS.md 与 docs/ 准备一台 x86_64 Linux 构建机，或直接使用 releases 中的预编译镜像

## 6. 风险与边界

- Kernarium 通用 Linux 应用自述仍处早期、尚未准备好发布，可用形态主要是 Andarium
- 构建完整 Android 系统镜像需要高配远端 Linux 构建机，普通用户基本只能依赖预编译镜像
- TestFlight 版本仅解释器模式，性能与 JIT 版存在差异
- 依赖 iOS 未公开的运行时能力与第三方转换层，系统升级后的可用性存在不确定性

## 7. 谁该用 / 谁别碰

对移动设备虚拟化、在 iOS 上跑真实 Linux 内核或容器有兴趣的开发者与研究者；只是想在手机上用几个 Linux 命令行工具的人，用成熟的终端模拟应用更省事。

## 8. 评分依据

热度增速 **97** · 社区规模 **56** · 更新活跃 **72** · 工程成熟 **70**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：关键判断是「内核原生、用户态模拟」这条中间路线：既拿到真实内核语义，又避开整机模拟的开销。6.18 LTS、Vulkan→Metal 与 VideoToolbox 等细节说明它是可运行工程而非概念验证。当前仍早期、构建门槛高、上架依赖分发渠道，适合关注底层技术的人跟进。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-20 · 依据仓库 README 与 GitHub 元数据</sub>
