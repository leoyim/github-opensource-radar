---
date: 2026-11-11
repo: homeassistant-ai/ha-mcp
category: ai
categoryLabel: AI / 大模型
rating: 4
language: Python
stars: 6693
starGain: 790
url: https://github.com/homeassistant-ai/ha-mcp
tags: [ai, claude, hacs, home-assistant, home-automation, llm, mcp, model-context-protocol]
generatedAt: 2026-11-11T03:04:52.682Z
---

# homeassistant-ai/ha-mcp · 项目解读

> **一句话**：把 Home Assistant 的 87 个操作面做成 MCP 工具，让 Claude、ChatGPT 直接查设备、改自动化。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Python |
| 星标 | 6,693 |
| 今日新增 | +790 |
| 仓库 | https://github.com/homeassistant-ai/ha-mcp |

## 1. 它解决什么问题

Home Assistant 的 YAML 与实体模型对普通用户门槛很高，写一条自动化往往要翻文档、试错、重启。想让 AI 代劳，又不愿把整套家庭配置交给一个只会聊天、看不到真实状态的黑盒。

## 2. 为什么是现在

423 天、6,693 星、仅 17 个 open issue，维护响应与体量匹配；日增 790 说明这一期正被集中发现。更重要的变化在安装路径：Home Assistant 2026.11 起内置 Marketplace，HA-MCP 进入默认目录，从「手动配一个 MCP server、管端口、看日志」变成「装集成、重启、粘 token」三步。

## 3. 关键能力

- 87 个工具覆盖设备查询、状态读取、服务调用、自动化与脚本管理等操作面
- 以 HACS 或 Marketplace 集成形态运行在 HA 进程内，覆盖 OS / Supervised / Container / Core 四种安装
- 15+ 客户端的配置向导，从集成条目直接复制连接 URL 粘进 AI 客户端
- 可选择服务以哪个管理员账号行事，支持长时访问令牌与用户名密码两种方式
- README 提供与 Home Assistant 内置 MCP Server 的逐项差异对照

## 4. 架构与实现

Python + FastMCP。关键取舍是把完整服务跑在 HA 进程内，而不是旁挂一个容器——省掉了额外端口、额外镜像与额外生命周期，也让「安装即用」成立。版本语义清楚，v7.3.0 把 ha_config_set_yaml 移入 beta 时在 README 顶部显式标注 Breaking change，并给出兼容版本区间（2026.8–2026.10 走 HACS，2026.11+ 走 Marketplace）。

## 5. 上手路径

1. 在 HACS 或 Marketplace 搜索 HA-MCP 并安装集成，重启 Home Assistant
2. 创建长时访问令牌，明确服务以哪个管理员账号行事
3. 从集成条目 Configure 页复制连接 URL，粘进所用 AI 客户端
4. 先用只读类工具查询设备与状态，观察模型是否会误选工具
5. 确认稳定后再逐步放开服务调用与自动化写入，并保留审计日志

## 6. 风险与边界

- 以管理员身份行事意味着提示注入或模型误判可直接改动自动化、操作门锁类实体，权限面很大
- 87 个工具的选择依赖模型判断，误调用的代价是真实的家庭设备状态变化
- ha_config_set_yaml 处于 beta，跨版本行为可能变动
- 把家庭设备控制权交给云端模型涉及隐私与可用性取舍，断网或服务波动时应有降级路径

## 7. 谁该用 / 谁别碰

已经在用 Home Assistant、愿意折腾自动化的家庭用户；想把设备控制面暴露给 agent、做对话式家居控制的集成商与自建玩家。

## 8. 评分依据

热度增速 **97** · 社区规模 **71** · 更新活跃 **64** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它的聪明处是把集成跑进 HA 进程内，绕开了「再维护一个容器」的长期成本，安装路径因此缩到两步。但「管理员身份 + 87 个写操作工具」是一个高风险组合，建议先用只读工具跑一周，确认模型不会误触发再放开写入。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
