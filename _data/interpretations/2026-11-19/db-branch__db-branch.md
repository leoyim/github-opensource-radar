---
date: 2026-11-19
repo: db-branch/db-branch
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: Go
stars: 70
starGain: null
url: https://github.com/db-branch/db-branch
tags: [database]
generatedAt: 2026-11-19T02:32:35.179Z
---

# db-branch/db-branch · 项目解读

> **一句话**：用 ZFS clone 给数据库开分支，创建时零字节复制，还能让 agent 自己开分支跑危险迁移。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Go |
| 星标 | 70 |
| 今日新增 | — |
| 仓库 | https://github.com/db-branch/db-branch |

## 1. 它解决什么问题

测一次迁移、试一次版本升级或让 agent 自由操作数据时，通常要复制整库或共享一个预发环境，前者慢且占空间，后者容易互相污染。CI 里想给每个 PR 一份独立数据库副本，成本更高。

## 2. 为什么是现在

本期 70 星、6 天新仓，较上期无基线（velocity 口径）；README 明确把「给 AI agent 做沙箱」「每个 PR 一个数据库」列为首要用例，并内置 MCP server 让 LLM 自己创建分支、跑查询或迁移、再删除分支，反映了 agent 基础设施向数据层延伸的动向。

## 3. 关键能力

- 基于 ZFS clone 的分支：base 是已载入数据的 ZFS dataset，分支是 base 快照的克隆，创建时复制 0 字节
- 官方自测集群上 PostgreSQL 分支约 0.5 秒、MySQL 分支约 3 秒可用；branch reset 回到创建态，--ttl 自动过期
- checkpoint / restore 即时保存与回档（已有检查点仍可恢复）；branch upgrade 只升单个分支，先存检查点且失败自动回滚
- CLI、REST API、Web 控制台与 MCP server 共用同一套 API；MySQL 与 PostgreSQL 多版本 runtime 可并存
- 单机或 Raft 集群，可选 ProxySQL 按用户名或 /*db_branch='name'*/ 查询注释路由，应用保持单一地址

## 4. 架构与实现

base 是承载已载入数据库的 ZFS dataset，分支是 base 快照的 ZFS clone，每个分支在独立端口跑自己的数据库进程；因此分支间写时复制、互不干扰。多节点通过 Raft 共享 bases、branches、设置与用户，ProxySQL 负责把连接导向正确分支。核心（分支、集群、CLI/API/控制台/MCP、监控、备份）为 Apache-2.0，认证/SSO、审计、历史、diff、FSx 存储是独立闭源自托管模块。

## 5. 上手路径

1. 先用浏览器里的 live console demo 过一遍「建分支 → 删表 → 重置 → 删除」，不创建真实资源
2. 在 Mac / Windows 上用 Multipass 起 Ubuntu VM，按 cloud-init 一键装好并加载样例 base shop
3. 在自己的 Ubuntu 服务器上按 apt 源安装，init 一个 ZFS pool，再依次试 base create / branch create / branch dsn
4. 跑一次 branch upgrade --check-only 做版本升级预检，并接上 MCP server 让 agent 在独立分支里执行迁移

## 6. 风险与边界

- 强依赖 Linux 与 ZFS（Ubuntu 24.04/26.04 + zfsutils-linux），Mac / Windows 只能经 VM 试用
- 项目自述为 Beta，1.0 前 API 与命令行细节可能变化；仅 70 星、1 fork、2 issue，社区验证很有限
- 核心 Apache-2.0，但认证/SSO、审计、历史、diff 等为闭源付费模块，能力边界要提前核对
- eval 环境用文件-backed ZFS pool，官方明确速度较慢且不适合真实数据；无托管云版本

## 7. 谁该用 / 谁别碰

需要在 CI、迁移演练或 agent 沙箱里快速拿到隔离数据库副本、且能自托管 ZFS 环境的团队；没有 Linux/ZFS 运维条件或要求完全开源所有模块的场景不适用。

## 8. 评分依据

热度增速 **95** · 社区规模 **29** · 更新活跃 **68** · 工程成熟 **89**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：把 Git 式分支语义落到数据库层，写时复制 + 即时回档的组合很实用，内置 MCP server 也让 agent 有了安全试错空间。但它是 6 天新仓、Beta 状态、强依赖 ZFS，且部分模块闭源，建议先在演练环境验证，别直接进生产链路。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
