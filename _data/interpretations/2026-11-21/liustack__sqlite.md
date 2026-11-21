---
date: 2026-11-21
repo: liustack/sqlite
category: data
categoryLabel: 数据 / 数据库
rating: 3.5
language: Assembly
stars: 114
starGain: 57
url: https://github.com/liustack/sqlite
tags: [cgo-free, database, go, golang, purego, sql-driver, sqlite, sqlite3]
generatedAt: 2026-11-21T12:26:36.590Z
---

# liustack/sqlite · 项目解读

> **一句话**：用 LLVM 把 SQLite 的 C 编译成 Go 汇编，换来无 cgo 也不慢。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Assembly |
| 星标 | 114 |
| 今日新增 | +57 |
| 仓库 | https://github.com/liustack/sqlite |

## 1. 它解决什么问题

Go 程序用 SQLite 通常要先做取舍：cgo 快但破坏交叉编译与静态镜像，纯 Go 实现可静态构建但慢。容器里带 C 编译器也让部署变重。

## 2. 为什么是现在

114 星、仅 1 个 issue、17 天，当日 +57。它没有绕开问题，而是用 LLVM 直接把 SQLite 的 C 编译为 Go 汇编，正面消除取舍。

## 3. 关键能力

- CGO_ENABLED=0 下构建，单静态二进制、任意交叉编译
- 多数负载下快于 cgo 驱动
- 写操作不因远端存储慢而阻塞
- S3 实时备份，布局与 Litestream 兼容，可 restore 校验
- 多写并发排队，而非报 database is locked

## 4. 架构与实现

编译期把 SQLite C 源码经 LLVM 落为 Go 汇编，运行时无需 C 运行时。备份层与 Litestream 布局对齐，便于互操作；连接层对写事务排队，规避文件锁冲突。

## 5. 上手路径

1. 在一个小服务里替换现有驱动，先跑通读写与迁移
2. 用 CGO_ENABLED=0 交叉编译到目标架构，验证静态镜像
3. 再打开 S3 备份，做一次 restore 演练

## 6. 风险与边界

- 项目很新，基准由作者提供，需独立复现
- 与成熟驱动的边界行为（如扩展、加密）可能不同
- 备份正确性必须实测而非假定

## 7. 谁该用 / 谁别碰

用 Go 写单二进制服务、数据放 SQLite、又要求交叉编译与静态部署的开发者。

## 8. 评分依据

热度增速 **96** · 社区规模 **33** · 更新活跃 **63** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：工程思路清晰且有针对性；但作为 17 天的新驱动，建议先在非关键路径验证，再考虑替换。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-21 · 依据仓库 README 与 GitHub 元数据</sub>
