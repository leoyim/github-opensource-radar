---
date: 2026-11-13
repo: supabase/supabase
category: data
categoryLabel: 数据 / 数据库
rating: 4.5
language: TypeScript
stars: 114936
starGain: 97
url: https://github.com/supabase/supabase
tags: [ai, alternative, auth, database, deno, embeddings, example, firebase]
generatedAt: 2026-11-13T02:11:25.742Z
---

# supabase/supabase · 项目解读

> **一句话**：以 Postgres 为底座的开发平台，把数据库、鉴权、自动 API、存储与向量能力收在同一个项目里。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 114,936 |
| 今日新增 | +97 |
| 仓库 | https://github.com/supabase/supabase |

## 1. 它解决什么问题

从零搭一个应用后端，往往要在数据库、认证服务、接口层、文件存储与实时订阅之间分别选型，还要自己保证它们之间的权限语义一致。缺的是一套以 Postgres 为中心、各组件共享同一套身份与行级权限、并且既能托管也能自托管的组合。

## 2. 为什么是现在

本期 +97，2,589 天、114,936 星、15,129 fork。数据方向本期仅此一项入选，它同时也是本期唯一把数据库、API 与 AI 向量工具放在同一仓库的入选项目，适合作为该方向的参照基线。

## 3. 关键能力

- 托管 Postgres 数据库，并提供 Authentication 与 Authorization 作为统一身份入口
- 自动生成 API：REST、GraphQL、Realtime 订阅、Database Functions 与 Edge Functions
- File Storage 与 AI + Vector/Embeddings Toolkit，覆盖文件与向量检索两类常见需求
- Dashboard 用于管理与查看项目状态，README 以勾选清单列出各组件与对应文档入口
- 社区与支持渠道完整：Forum 讨论构建与数据库实践、Issues 报缺陷、邮件支持处理数据库与基础设施问题、Discord 交流

## 4. 架构与实现

以 Postgres 为核心，外围由认证、自动 API、实时、函数、存储与向量工具等独立开源组件组合而成，各组件通过数据库层共享身份与权限模型。TypeScript 为主，Apache-2.0 许可，仓库同时提供文档入口、开发者起步指南与多语言 README。

## 5. 上手路径

1. 先按官方文档起一个最小项目，弄清 Postgres、Auth 与自动 API 三者的权限关系
2. 在 Dashboard 里建表并开启行级安全策略，用两个不同身份验证读写边界
3. 按需要逐个叠加 Realtime、Edge Functions 或向量工具，不要一次启用全部组件
4. 自托管前对照组件清单评估运维范围，明确哪些服务由谁负责升级与备份

## 6. 风险与边界

- 组件数量多，自托管意味着要维护多个服务与它们之间的版本兼容性
- 权限语义集中在 Postgres 行级安全策略上，策略写错会直接暴露数据，需专门做越权测试
- 自动生成的 API 便捷但会扩大可访问面，公开 schema 前应逐表核对暴露范围
- 1,196 个 open issue 说明生态面广，升级前需看对应组件的变更记录
- 托管版与自托管版的能力边界可能不同，架构设计不应假定两者完全等价

## 7. 谁该用 / 谁别碰

希望以 Postgres 为中心快速搭建应用后端、又保留自托管选项的团队；也适合研究 BaaS 组件组合与行级权限模型的人。已有成熟微服务体系或强定制数据栈的团队迁移收益需单独评估。

## 8. 评分依据

热度增速 **99** · 社区规模 **96** · 更新活跃 **78** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：它把常见的后端组件以 Postgres 为共同底座组合起来，最实际的收益是身份与权限只需在一处定义。代价是组件多、运维面广，且行级安全策略从便利性变成了必须认真对待的安全边界。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-13 · 依据仓库 README 与 GitHub 元数据</sub>
