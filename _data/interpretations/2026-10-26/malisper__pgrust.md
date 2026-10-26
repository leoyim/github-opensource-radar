---
date: 2026-10-26
repo: malisper/pgrust
category: data
categoryLabel: 数据 / 数据库
rating: 4
language: Rust
stars: 5518
starGain: 88
url: https://github.com/malisper/pgrust
tags: [ai-assisted-development, database, postgres, postgresql, rust]
generatedAt: 2026-10-26T11:59:07.500Z
---

# malisper/pgrust · 项目解读

> **一句话**：用 Rust 重写 Postgres，wire 与 SQL 方言兼容，目标是「2026 年重写会是什么样」。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Rust |
| 星标 | 5,518 |
| 今日新增 | +88 |
| 仓库 | https://github.com/malisper/pgrust |

## 1. 它解决什么问题

Postgres 的 C 实现承载了三十年兼容负担，一些核心结构（执行器、并发模型、内存管理）难以大改。pgrust 选择重写而非分叉：保持线协议与 SQL 方言兼容，从而让现有驱动、迁移脚本与客户端可以直接接上。

## 2. 为什么是现在

今日 +88 星。数据库重写不是新话题，但「兼容 Postgres 协议 + 全新执行引擎」的组合意味着可以拿真实应用做对照测试，而不是跑玩具 benchmark。

## 3. 关键能力

- Postgres 线协议与 SQL 方言兼容（现有客户端可直接连）
- 新查询引擎 Gravity：向量化、push-based、JIT 编译
- 线程模型并发（而非进程模型）
- 查询调度器：避免单个查询拖垮整个实例
- 自动内存管理：单一内存预算，按机器规格设定

## 4. 架构与实现

全 Rust 实现，README 明确「每一行都是 Rust，按 C 实现的行为对齐」。启动方式与 Postgres 类似：initdb 建数据目录、前台起服务并输出日志；提供 linux-x86_64/aarch64（含 neoverse-v2 变体）与 macOS arm64/x86_64/universal 构建，另有 Docker 与浏览器试用入口。

## 5. 上手路径

1. 先用官方二进制 initdb 建目录并起服务，用 psql 跑 `select version()` 类查询确认连通
2. 把一个小型真实库的 schema + 数据导入，跑你的关键查询对比结果正确性
3. 再做性能对照：同一 workload 在 Postgres / ClickHouse / pgrust 上跑，注意缓存与并行度设置

## 6. 风险与边界

- 「比 Postgres 与 ClickHouse 快」是自述，且不同 workload 差异极大，必须自测
- 重写版在扩展生态（PostGIS、pg_stat_statements 等）与运维工具链上几乎必然缺位
- AGPL-3.0：把它嵌入产品分发会触发源码开放义务

## 7. 谁该用 / 谁别碰

适合关注数据库内核、愿意做对照实验的工程师与研究场景；生产环境迁移现在为时过早，除非你的负载极窄且可完整验证。

## 8. 评分依据

热度增速 **90** · 社区规模 **68** · 更新活跃 **43** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：本期技术含量最高的「重写」样本之一，兼容协议的选择让它具备可验证性；但它目前是研究性实现，不是可托付数据的数据库。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
