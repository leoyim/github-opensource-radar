---
date: 2026-11-18
repo: mdiri-ai/SoduWork
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: JavaScript
stars: 1715
starGain: null
url: https://github.com/mdiri-ai/SoduWork
tags: [agent-harness, agent-orchestration, agent-workflows, ai-agents, ai-workflows, anti-slop, claude-code, codex]
generatedAt: 2026-11-18T02:26:10.291Z
---

# mdiri-ai/SoduWork · 项目解读

> **一句话**：「完成」不是 agent 说做完了，而是提出者签收、另一个模型复核通过。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 1,715 |
| 今日新增 | — |
| 仓库 | https://github.com/mdiri-ai/SoduWork |

## 1. 它解决什么问题

多 agent 编排常见两个缺口：一是任务做完没人定义什么叫合格，二是不同 harness、不同模型各自为战，成本、权限与过程都不可见；团队场景还缺插件审核、角色与审计。

## 2. 为什么是现在

本期 1,715 星、212 fork、112 个 open issue，20 天新仓、无历史基线；README 以「A chat ends with an answer. A SoduWork request ends when the person who asked signs off.」开篇，并把验收标准、独立复核、人工拍板写成核心机制，属于把 agent 编排往交付治理方向推的一类项目。

## 3. 关键能力

- 多 harness 接入：Pi、OpenCode、DeepSeek Harness、Qwen Code、Kimi Code、Codex 等，每个步骤单独选并可会话中途切换
- 智能分派：常规步骤走便宜或本地模型，关键步骤用强模型，长任务交给自有云 runner
- 每个请求自带验收标准，由另一个模型独立复核，不通过就带理由打回，最终由人签收
- 插件共享前需审核，按团队或个人授权且可撤销；提供角色、用量、成本与审计日志
- 支持把人和 agent 混编：请求可指派给同事的 agent 执行，全过程对请求参与者可见
- 把一次成功的人机协作对话保存为插件，审核后成为团队资产

## 4. 架构与实现

自托管的 Hub + 管理控制台 + 桌面客户端：Hub 负责请求、验收标准、分派与审计，控制台配置模型目录、角色与插件授权，客户端发起会话。外部 harness 由 Hub 调度，Codex 使用自身账号登录，Pi 走 SoduWork 的模型目录；一次运行在本机起三个组件，需要 Python 3.12+、Node.js 22.19+ 与 Git，首启会安装依赖并要求设置 admin 密码。

## 5. 上手路径

1. clone 后按平台执行 sh start.sh --desktop（或 Windows 的 start.cmd --desktop），首启设 admin 密码
2. 在管理控制台 Capabilities → Model catalog 里添加服务与一个 Chat model，注意只填凭据不会自动生成可选模型
3. 用桌面客户端登同一 Hub，选 New conversation + Pi + 刚添加的模型，跑一个小任务（如把会议纪要转成带负责人和日期的行动表）
4. 再创建一个带验收标准的 Requirement，走一次「独立复核 → 人工签收」的完整闭环

## 6. 风险与边界

- 自述处于 public beta，README 明确要求先在非生产环境评估，20 天新仓稳定性未知
- 112 个 open issue 相对 20 天仓龄偏高，说明反馈集中或功能面铺得快
- 多 harness 各有独立登录与凭据体系（Codex 不自动用 Hub 的 API key），配置复杂度与排障成本不低
- 独立复核仍由模型执行，验收标准写得含糊时会出现「一起放过」的假阳性
- 自托管意味着模型凭据、审计日志与插件权限的安全边界全部由部署方承担

## 7. 谁该用 / 谁别碰

需要把 agent 产出纳入正式验收流程、且要求权限与成本可审计的团队；单人使用或只需一次性对话的场景，这套请求—复核—签收机制偏重。

## 8. 评分依据

热度增速 **92** · 社区规模 **61** · 更新活跃 **76** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把验收标准、独立复核与人工签收做成一等公民，是对「agent 说完成就算完成」的有效纠偏，插件审核与审计日志也补齐了团队侧治理。但它还很年轻、部署链路长且多 harness 配置繁琐，建议按 README 建议先在单个小任务上验证整套闭环，再考虑推广。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-18 · 依据仓库 README 与 GitHub 元数据</sub>
