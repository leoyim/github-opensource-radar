---
date: 2026-11-22
repo: AlienTechSoftware/notecraft
category: backend
categoryLabel: 后端 / 云原生
rating: 3.5
language: Rust
stars: 213
starGain: null
url: https://github.com/AlienTechSoftware/notecraft
tags: [art, artcraft, html, local-first, markdown, note, notecraft, notes]
generatedAt: 2026-11-22T02:08:13.737Z
---

# AlienTechSoftware/notecraft · 项目解读

> **一句话**：笔记本就是文件夹，页面就是 html 或 md 文件。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 213 |
| 今日新增 | — |
| 仓库 | https://github.com/AlienTechSoftware/notecraft |

## 1. 它解决什么问题

商业笔记应用把内容封进专有二进制文件，用户看不到、grep 不到，同步与备份也只能用它自己的服务；一旦停服或换工具，迁移成本极高。

## 2. 为什么是现在

35 天新仓已有 213 星、26 fork、43 个 open issue，本期以 Rust 单二进制进入后端方向。README 明确声明是独立第三方净室实现、与 ArtCraft / getartcraft.com 无关联，并单列「Status and what is missing」，边界交代得清楚。

## 3. 关键能力

- 笔记本为文件夹，页面为 index.html 或 index.md，附件为普通文件
- 同步可由 OneDrive、Dropbox、Syncthing、iCloud 等自行选择，无需服务端与账号
- 无子页面层级上限，保留 Office 风格 ribbon、彩色笔记本、分区与标签
- 单个 Rust 二进制经 egui 在 GPU 上绘制，体积与启动开销小
- 每个动作都是带 id 的命令，窗口、命令面板与脚本/agent 共用

## 4. 架构与实现

纯 Rust 客户端，无服务端；数据层直接映射为本地目录树，UI 用 egui 即时模式绘制，所有操作抽象成可脚本化的 command id，便于外部 agent 调用而不依赖界面自动化。

## 5. 上手路径

1. 按 Quick start 下载或构建单二进制并启动
2. 新建一个笔记本目录，观察落盘的 html/md 文件结构
3. 把该目录放进已有同步盘，在另一台设备上打开验证
4. 用命令 id 跑一次脚本化操作，确认是否适合接入自己的流程

## 6. 风险与边界

- 35 天新仓、43 个 open issue，功能清单里仍有明确的未完成项
- 以 html/md 为页面格式，复杂富文本排版与协同编辑能力有限
- 净室实现的兼容边界需自行验证，不能假设与 OneNote 文件互通
- 同步冲突由外部同步盘决定，多端同时编辑可能产生冲突副本

## 7. 谁该用 / 谁别碰

看重数据自主、愿意用文件夹管理笔记并自行解决同步的用户；需要多人实时协作或复杂排版的团队不适合。

## 8. 评分依据

热度增速 **86** · 社区规模 **42** · 更新活跃 **67** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：把数据格式交还给用户是它最硬的价值；代价是成熟度与富文本能力，短期更适合作为个人知识库的轻量方案。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
