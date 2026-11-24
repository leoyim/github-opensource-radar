---
date: 2026-11-24
repo: agentscope-ai/agentscope
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: Python
stars: 36560
starGain: 76
url: https://github.com/agentscope-ai/agentscope
tags: [agent, chatbot, large-language-models, llm, llm-agent, mcp, multi-agent, multi-modal]
generatedAt: 2026-11-24T01:51:51.972Z
---

# agentscope-ai/agentscope · 项目解读

> **一句话**：面向「越来越像 agent 的模型」重写的生产级框架：撤掉 prompt 约束，只留边界与可观测。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Python |
| 星标 | 36,560 |
| 今日新增 | +76 |
| 仓库 | https://github.com/agentscope-ai/agentscope |

## 1. 它解决什么问题

早期 agent 框架用严格 prompt 与固定编排去约束模型行为，在模型能力较弱时有效，但随着模型自身的推理与工具调用能力提升，这层约束反而成为上限；同时 agent 的行为缺少可解释性，出问题时难以定位是编排、工具还是模型的问题。

## 2. 为什么是现在

36,560 星、约 3 年、Python、Apache-2.0，日增 76 上 Trending。2.0 版本明确转向：利用模型自身的推理与工具调用，而不是用 prompt 和固定 pipeline 去限制它；配套多 agent、多模态、MCP 支持，以及以「看得见、能理解、可信任」为目标的追踪能力，对应论文 arXiv 2402.14034。

## 3. 关键能力

- 多 agent 编排与消息传递，支持分布式 actor 模式运行
- 多模态输入输出，覆盖文本、图像等模态的 agent 交互
- MCP 协议接入，可挂载外部工具服务器
- 可观测/追踪能力，输出完整调用树，便于定位问题环节
- 既有研究论文支撑，抽象与实验口径可对照

## 4. 架构与实现

Python 包（3.11+），以 message 传递为核心抽象，agent / pipeline / memory 分层；支持分布式部署，工具以 MCP 或原生函数接入；追踪数据与运行时解耦，可作为独立观测面接入。

## 5. 上手路径

1. pip 安装 2.0 后先跑官方 quickstart 的双 agent 对话，确认基础链路
2. 接一个 MCP 工具服务器，验证工具发现与调用链路是否完整
3. 打开追踪看一次完整调用树，确认能定位到具体工具与参数
4. 迁移自有逻辑时优先删掉硬编码编排，把控制权交回模型

## 6. 风险与边界

- 2.0 与 1.x 的抽象变动较大，旧代码的编排层通常需要重写
- 865 个 issue 集中反映分布式与多模态路径的边界问题，生产接入前需压测
- 「可信任」依赖追踪数据质量，全量记录会带来可观的日志体积与存储成本
- 36k 星的老项目文档分散在多个站点，版本对应关系需逐项核对

## 7. 谁该用 / 谁别碰

需要多 agent 协作、且要把 agent 行为纳入可观测体系的团队；不适合只做单轮模型调用的轻量场景。

## 8. 评分依据

热度增速 **66** · 社区规模 **87** · 更新活跃 **73** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它的取舍值得借鉴：把约束从 prompt 层撤到编排层，让模型用自己的推理干活，框架只负责边界与可观测性。这也是这一轮 agent 框架分化的主要方向。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-24 · 依据仓库 README 与 GitHub 元数据</sub>
