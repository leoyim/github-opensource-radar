---
date: 2026-11-22
repo: ELY-Open-Source/ElyOffice
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Rust
stars: 1563
starGain: null
url: https://github.com/ELY-Open-Source/ElyOffice
tags: []
generatedAt: 2026-11-22T02:08:13.737Z
---

# ELY-Open-Source/ElyOffice · 项目解读

> **一句话**：文件留在自己文件夹里的 Rust + GPUI 离线办公套件。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Rust |
| 星标 | 1,563 |
| 今日新增 | — |
| 仓库 | https://github.com/ELY-Open-Source/ElyOffice |

## 1. 它解决什么问题

主流办公套件把文件、账号与协作绑成一体，本地文件反而成了二等公民；想在无网络或数据不出本机的环境里用一套现代界面的办公应用，选择很少。

## 2. 为什么是现在

33 天新仓、1,563 星、94 fork，0.1.16 已能一次给出 Windows / macOS / Linux 三平台多种包格式。README 首句「Files stay in your folders; no account, no cloud service」把定位压得很实，本期与 notecraft、RustGIS 一起构成「本地优先」的一组样本。

## 3. 关键能力

- 文档等桌面应用离线优先，文件保存在用户自己的目录，无账号无云服务
- Windows x64、macOS（Apple 芯片与 Intel）、Linux x86_64 的安装包与多种包格式
- 每个应用独立更新，另有整包安装器
- ElyMail 支持 Microsoft OAuth、Gmail/iCloud 应用密码与 QQ/163/126 授权码
- README 给出三平台构建依赖、测试、实验性 R macros 与许可说明

## 4. 架构与实现

Rust 实现，UI 基于 GPUI，桌面端直接读写本地文件，不引入服务端与账号体系；各应用作为独立可分发单元构建，按平台生成安装包，邮件客户端以其各自的认证方式连接外部服务。

## 5. 上手路径

1. 从官网或最新 release 下载对应平台的安装包
2. 先用一份本地文档验证打开、编辑与保存路径
3. 按 Build 一节核对本机是否具备 Xcode / MSVC + clang-cl / 容器与 pnpm
4. 若要用 ElyMail，先确认各类邮箱的授权方式并妥善保管凭据

## 6. 风险与边界

- 33 天新仓、0.1.x 版本号，功能完整度与文件格式兼容仍在早期
- 构建链较重，三平台依赖各不相同，二次开发门槛不低
- GPUI 生态与上游框架演进绑定较紧
- 邮件凭据保存在本机，安全性取决于设备与备份策略

## 7. 谁该用 / 谁别碰

需要离线、数据自主的桌面办公环境，且愿意接受早期版本的个人与小团队；依赖成熟协作与格式兼容的组织暂不适合。

## 8. 评分依据

热度增速 **95** · 社区规模 **58** · 更新活跃 **59** · 工程成熟 **85**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：无账号无云服务是很明确的产品选择，方向值得肯定；但 0.1.x 的成熟度决定了它目前更适合试用而非替换主力工具。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
