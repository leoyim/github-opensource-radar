---
date: 2026-11-14
repo: xxddpac/netra
category: data
categoryLabel: 数据 / 数据库
rating: 1
language: Go
stars: 99
starGain: 0
url: https://github.com/xxddpac/netra
tags: [ai-agent, dpi, duckdb, ebpf, flow-monitoring, go, golang, kafka]
generatedAt: 2026-11-14T08:52:50.287Z
---

# xxddpac/netra · 项目解读

> **一句话**：一个二进制读镜像口流量，用 eBPF/XDP 在内核侧聚合，再用自然语言问这份真实流量。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟 1.0 / 5.0 |
| 语言 | Go |
| 星标 | 99 |
| 今日新增 | +0 |
| 仓库 | https://github.com/xxddpac/netra |

## 1. 它解决什么问题

传统网络可观测方案要堆 Redis、ClickHouse、Elasticsearch 一整套数据栈，部署与维护成本高；而把探针放进转发路径又有影响生产流量的风险。旁路观测需要的恰恰是「只看副本、别加依赖」。

## 2. 为什么是现在

93 天、99 星、本期无日增，是本期数据方向技术密度最高的一项。它与 narwhal 同时把 DuckDB 嵌进单二进制、同时提供 MCP 出口，构成本期小工程里一条清晰路线：用嵌入式分析引擎换掉外部数据栈，再把查询口交给 agent。

## 3. 关键能力

- 单二进制内嵌 SQLite 与 DuckDB，不需要 Redis / ClickHouse / Elasticsearch
- XDP 原生抓包与内核态聚合，把逐包处理留在内核，面向高流量场景
- 只从 SPAN / mirror 口读取流量副本，不路由、不代理、不修改生产流量
- 可用自然语言查询实际观测到的数据，并通过 MCP 接 CMDB、威胁情报、SOC 等自有工具与数据源
- 提供 Dashboard、探测、部署与运行参数（Flags）等完整操作章节

## 4. 架构与实现

Go 实现的旁路观测平台：XDP 程序在内核态完成抓包与聚合，用户态单进程把结果写入内嵌的 SQLite/DuckDB 并提供 HTTP Dashboard 与查询接口；AI 查询层基于这份真实观测数据工作，MCP 作为扩展点把外部数据源接进来，整体不落在转发路径上。

## 5. 上手路径

1. 从 Releases 下载二进制，准备好 GeoLite2-City / GeoLite2-ASN 的 mmdb 文件放在同目录
2. 在有 SPAN/mirror 口的测试环境以 root 或具备 XDP 附着能力的权限启动
3. 打开 10211 端口，用首次启动日志里的随机管理员密码登录并立即修改
4. 先用一个能人工核对结论的自然语言问题验证 AI 查询，再考虑接 MCP 扩展

## 6. 风险与边界

- 需要 root 或 CAP_BPF 等等价能力，权限面大，须在隔离环境评估
- 依赖 SPAN/mirror 口与 MaxMind 地理库，缺任一条件功能就不完整
- 零日增、10 个 issue、99 星，项目较新且社区小，生产可用性未经验证
- AI 查询基于观测数据的解释，结论需回到原始 flow 记录复核
- GPL-3.0 许可与内嵌第三方组件的许可需一并核对

## 7. 谁该用 / 谁别碰

有镜像口条件、想以极低部署成本做流量观测并尝试自然语言查询的网络/SOC 工程师。

## 8. 评分依据

热度增速 **0** · 社区规模 **36** · 更新活跃 **8** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **1.0 星**）

**结论**：架构取舍很明确：旁路只读、内核态聚合、嵌入式分析、无外部数据栈，是本期最值得读源码的一项。落地门槛主要在权限与镜像口条件；先在测试流量里跑通并核对查询结论，再谈生产。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-14 · 依据仓库 README 与 GitHub 元数据</sub>
