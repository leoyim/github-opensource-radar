---
date: 2026-11-10
repo: DokaDev/datarig
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: Rust
stars: 58
starGain: null
url: https://github.com/DokaDev/datarig
tags: [cli, data-editor, database, database-client, explain, mysql, mysql-client, postgres]
generatedAt: 2026-11-10T02:30:51.336Z
---

# DokaDev/datarig · 项目解读

> **一句话**：终端里的数据库客户端：单二进制、显式分页、键盘优先，改动必须读过确切 SQL 才落库。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 58 |
| 今日新增 | — |
| 仓库 | https://github.com/DokaDev/datarig |

## 1. 它解决什么问题

图形化数据库客户端启动慢、结果集一次拉全、多个连接来回切窗口；而命令行客户端虽然快，改数据时又常常一条语句直接写库，误操作只能靠事后回滚。需要在终端里兼顾交互效率与写入安全。

## 2. 为什么是现在

41 天新仓、58 星、5 fork、7 个 open issue，本期无历史基线，是本期数据方向唯一的新仓库。它的切入点不是性能数字，而是把「Safe by default」放在特性清单第一条：网格里的改动保持 pending，直到使用者读过确切的变更语句才提交，这一取舍在数据库客户端里并不多见。

## 3. 关键能力

- 改动默认挂起，必须读过确切的 SQL 变更语句后才提交
- 支持 PostgreSQL 与 MySQL，多个连接并排、各自有独立标签页
- 结果显式分页，不一次性把全表载入内存
- 单个原生二进制分发，提供 macOS / Linux / Windows 的 release 包
- 键盘优先、全 Vim 键位，按空格提示当前可用的后续按键
- 支持 EXPLAIN 等查询分析能力，README 列有 Status 与 Development 章节

## 4. 架构与实现

Rust 实现，Apache-2.0 与 MIT 双许可，TUI 形态由 crates/tui 构建（源码安装命令为 cargo install --locked --path crates/tui）。README 说明 Linux 上的 release 包无需构建工具，源码构建才需要 Rust 1.93、clang 与 libclang。章节按 Why datarig → Features → Status → Quick start → Development → License 组织，Features 把「安全」「全功能」「轻快」「键盘优先」并列，说明交互设计与写入约束是同一层的设计目标。58 星、5 fork 属于早期项目。

## 5. 上手路径

1. 从 GitHub Releases 取对应平台的压缩包直接运行，或用 cargo install --locked --path crates/tui 源码构建
2. 先连一个只读的测试库，熟悉空格提示与 Vim 键位导航
3. 跑一个较大的查询，观察显式分页与原生二进制的响应
4. 在网格里改一条数据，检查 pending 状态与将要执行的 SQL 是否一致，再决定提交
5. 需要同时对比多个环境时，配置多个连接并用各自标签页并排查看

## 6. 风险与边界

- 项目仅 41 天、58 星，覆盖的数据库类型目前只有 PostgreSQL 与 MySQL
- 5 fork、7 个 open issue 说明真实使用样本很少，边界行为待社区验证
- 纯 TUI 与 Vim 键位对不习惯终端操作的人有学习成本
- 源码构建需 Rust 1.93 与 clang / libclang，环境准备比下载 release 包麻烦
- 「读过 SQL 才提交」提升安全但也多一步操作，高频批量编辑场景要评估效率

## 7. 谁该用 / 谁别碰

常在终端工作、需要同时连多个 PostgreSQL / MySQL 实例并重视写入安全的开发者与 DBA；以及偏好单二进制、低资源占用工具的人。需要可视化建模、ER 图或跨多种数据库的团队，图形客户端仍更合适。

## 8. 评分依据

热度增速 **92** · 社区规模 **31** · 更新活跃 **62** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它把数据库客户端里最容易被忽略的「误写入」问题前置成一步确认，同时保留终端工具的轻量与键盘效率。项目很早期、只覆盖两种数据库，适合作为日常查询的第二工具试用，不宜直接替换主力客户端。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-10 · 依据仓库 README 与 GitHub 元数据</sub>
