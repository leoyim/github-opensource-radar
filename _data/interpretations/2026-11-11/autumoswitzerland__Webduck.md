---
date: 2026-11-11
repo: autumoswitzerland/Webduck
category: data
categoryLabel: 数据 / 数据库
rating: 1.5
language: Python
stars: 55
starGain: 0
url: https://github.com/autumoswitzerland/Webduck
tags: [analytics, csv, database, docker, duckdb, fastapi, json, open-source]
generatedAt: 2026-11-11T03:04:52.682Z
---

# autumoswitzerland/Webduck · 项目解读

> **一句话**：自托管的 DuckDB 即服务：REST API + Web UI，带项目隔离、写保护、回收站与压缩。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌗 1.5 / 5.0 |
| 语言 | Python |
| 星标 | 55 |
| 今日新增 | +0 |
| 仓库 | https://github.com/autumoswitzerland/Webduck |

## 1. 它解决什么问题

DuckDB 是嵌入式库，天然没有「多用户、多项目、远程访问」的概念。想让分析团队共用一份 DuckDB 数据，要么每人拷一份文件，要么自己写一层 HTTP 包装——而并发写、权限、误删恢复这些事，包装层往往顾不上。

## 2. 为什么是现在

109 天、55 星、1 个 fork、0 个 open issue、AGPL-3.0，体量小但功能面完整：文件锁并发、JWT 管理鉴权、项目级密钥、只读写保护、软删除回收站、数据库压缩。README 明确目标用户是「想给客户提供 DuckDB 管理界面的主机服务商」，定位比通用 BI 工具更具体。

## 3. 关键能力

- DuckDB 存储引擎 + 文件锁，支持安全并发访问
- REST API 分两类：管理端（项目/库管理）与数据库端（SQL 查询）
- Web UI（NiceGUI），深色主题，含服务器状态、实时请求监控与按项目统计的存储概览
- 回收站：项目与库软删除、可恢复、可逐条永久删除或清空
- JWT 管理鉴权，数据库访问可选项目密钥；bcrypt 哈希存储密码
- 按库写保护：与密码正交，密码管「谁能访问」，写保护管「能对数据做什么」
- SQL 编辑器支持多语句顺序执行与查询历史；支持从文件上传 SQL 脚本
- 数据库压缩回收 DuckDB 更新/删除后残留空间，并提示碎片率高的库
- CSV / Parquet / JSON 拖拽导入与浏览器下载导出；Docker 开箱即用

## 4. 架构与实现

Python + NiceGUI + FastAPI 风格的分层，AGPL-3.0 许可，YAML 配置，支持 pip 与 Docker 两种部署。设计上把「写保护」与「认证」拆成两个正交维度，是针对「共享分析库被误改」这一具体事故模式做的补强；回收站与压缩则对应 DuckDB 自身不做在线空间回收的特性。

## 5. 上手路径

1. docker compose 起服务并按 README 设置初始管理员密码
2. 建一个项目与数据库，用 JWT 调管理端 API 验证鉴权链路
3. 上传一份 Parquet 或 CSV，用 Web UI 的 Browse 视图确认表结构
4. 对需要只读共享的库开启写保护，再分发项目密钥
5. 配置日志轮转与上传大小上限，避免磁盘被日志或大文件占满

## 6. 风险与边界

- 55 星、1 个 fork，社区验证极少，长期维护依赖单一作者
- AGPL-3.0 对通过网络提供服务有源码开放要求，商业化集成前需评估
- DuckDB 的文件锁并发模型适合读多写少，高并发写入仍会串行化
- Web UI 直接暴露在公网时，需自行加反向代理、TLS 与访问控制
- 回收站与压缩是管理操作，误清空不可恢复，需配合备份

## 7. 谁该用 / 谁别碰

想给团队或客户提供 DuckDB 可视化与 REST 访问的主机服务商、数据平台团队；以及用 DuckDB 做本地分析、需要一层轻量多用户包装的开发者。

## 8. 评分依据

热度增速 **0** · 社区规模 **28** · 更新活跃 **54** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **1.5 星**）

**结论**：它补的是 DuckDB 作为嵌入式库缺的那一层：多项目、鉴权、写保护、误删恢复。功能取舍有针对性，尤其「写保护与密码正交」是想清楚了事故场景。但 55 星、单一维护者是明确风险，适合内部工具而非对外服务底座。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
