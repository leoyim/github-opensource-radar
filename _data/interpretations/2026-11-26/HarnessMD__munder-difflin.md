---
date: 2026-11-26
repo: HarnessMD/munder-difflin
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 3.5
language: TypeScript
stars: 9792
starGain: 72
url: https://github.com/HarnessMD/munder-difflin
tags: [agent-harness, agent-orchestration, agent-team, agentic-ai, ai-agent, ai-agents, ai-assistant, ai-tools]
generatedAt: 2026-11-26T01:52:26.117Z
---

# HarnessMD/munder-difflin · 项目解读

> **一句话**：把多 agent 做成一层办公室：十二种引擎同室工作，记忆与任务都是可打开的文件。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 9,792 |
| 今日新增 | +72 |
| 仓库 | https://github.com/HarnessMD/munder-difflin |

## 1. 它解决什么问题

多 agent 编排工具常把状态藏进数据库或云端，用户既看不清 agent 在做什么，也无法迁移或审计；同时不少平台转售模型额度，导致成本与账号边界模糊。

## 2. 为什么是现在

9,792 星、上线 178 天、TypeScript、MIT，1,392 fork、223 issue、日增 72。它的取舍是「用你已有的订阅」：每个 agent 跑的是用户本就登录的真实 CLI，项目不自售模型额度；agent 的记忆与任务以纯文件存在用户指定目录，可打开、备份或删除；编排者 Michael 负责把请求拆给对应 agent。

## 3. 关键能力

- 十二种引擎共存：Claude Code、Codex、Gemini 等可同室工作，也可接入自定义命令
- 订阅复用：每个 agent 使用用户自己的登录态，不转售模型访问
- 文件化状态：记忆与任务为纯文件，可审计、可备份、可迁移
- 办公室隐喻：为 agent 设角色、头像与模型，观察其规划与执行过程
- 源码分发：发布形态为源码，需自行构建，便于审阅

## 4. 架构与实现

桌面应用（Electron 类壳 + 本地运行时）为每个 agent 启动对应 CLI 子进程，编排层负责任务拆解与结果汇总；状态落在用户指定目录的普通文件，应用本身不做远端存储。

## 5. 上手路径

1. 先构建运行，用一个 agent 跑通一次真实任务，确认 CLI 登录态被正确复用
2. 把状态目录放在可备份的位置，先做一次备份再增加 agent 数量
3. 并发两三个 agent 观察资源占用，再决定是否扩到一支队伍
4. 需要审计时直接读状态目录里的文件，不必依赖应用界面

## 6. 风险与边界

- 本地多 agent 并发对 CPU 与内存占用明显，笔记本上需控制数量
- 复用订阅登录态可能触及各服务的使用条款，团队使用前应确认合规
- 223 个开放 issue 说明边界情况仍在收敛
- 需自行构建，非技术用户上手成本较高

## 7. 谁该用 / 谁别碰

已订阅多个编码 CLI、想把它们组织成团队的个人开发者；需要可审计 agent 状态的小型团队。

## 8. 评分依据

热度增速 **68** · 社区规模 **77** · 更新活跃 **71** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：「不转售模型访问」与「状态即文件」两条定位让它在多 agent 工具里边界清晰，审计与迁移成本低。适合已经在为订阅付费、希望把 agent 组织起来的人；对资源受限的机器与追求开箱即用的用户不够友好。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-26 · 依据仓库 README 与 GitHub 元数据</sub>
