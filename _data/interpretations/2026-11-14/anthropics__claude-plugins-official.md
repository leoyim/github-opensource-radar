---
date: 2026-11-14
repo: anthropics/claude-plugins-official
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: Python
stars: 47236
starGain: 130
url: https://github.com/anthropics/claude-plugins-official
tags: [claude-code, mcp, skills]
generatedAt: 2026-11-14T08:52:50.287Z
---

# anthropics/claude-plugins-official · 项目解读

> **一句话**：Anthropic 官方插件目录，同时记录第三方插件投稿入口迁移的过渡规则。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 47,236 |
| 今日新增 | +130 |
| 仓库 | https://github.com/anthropics/claude-plugins-official |

## 1. 它解决什么问题

插件生态扩张后，谁维护目录、名字能不能改、第三方往哪投稿，都需要一个明确且可执行的约定。若目录与投稿入口混在一起，插件重命名会让已安装用户失联，校验规则也难以界定适用范围。

## 2. 为什么是现在

本期 +130、47,236 星，README 的 What is changing 明确：所有插件现改到 claude.ai/directory/manage 提交，第三方插件的 .claude-plugin/marketplace.json 将逐步收敛为 Anthropic 自家插件。对依赖 marketplace.json 分发插件的开发者，这是一条需要跟进的迁移信号，而非单纯的功能更新。

## 3. 关键能力

- 托管 Anthropic 自研插件（/plugins）与迁移前的第三方插件、渠道插件（/external_plugins）
- 明确插件名不可变，确需改名时在顶层 renames 映射登记，让既有安装自动跟随
- 区分 displayName 与插件标识，改 UI 展示名不需要动不可变标识
- 仓库内校验只覆盖本目录的插件目录，边界写清，避免对外部仓库产生误判
- 提供 skill-bundle 类插件的结构约定、贡献流程与许可说明

## 4. 架构与实现

仓库本身是一个受控目录而非运行时框架：按 /plugins 与 /external_plugins 分层，配 .claude-plugin/marketplace.json 作为清单、renames 映射处理标识变更，配套检查脚本只针对本仓库目录生效；分发与投稿逐步上移到 claude.ai 的目录服务，GitHub 仓库回归为官方插件的源码与规范载体。

## 5. 上手路径

1. 先读 What is changing 与 Structure，确认自己使用的是官方插件还是迁移前的第三方插件
2. 第三方插件作者把投稿入口切到 claude.ai/directory/manage，不要继续依赖 marketplace.json 新增条目
3. 需要改 UI 名称时只更新 displayName；确需改标识则按约定写 renames 映射
4. 按 Plugin Structure 与 License 核对自己的插件目录，再用仓库自带检查验证

## 6. 风险与边界

- 第三方 marketplace.json 处于逐步淘汰过程，过渡期内新旧入口并存，容易出现分发路径不一致
- 插件名不可变是硬约束，早期随手起的标识会长期跟随，命名需一次想清
- 仓库检查不覆盖外部仓库托管的插件，本地通过不代表上架后会通过目录服务校验
- 1,294 个 open issue 提示迁移期问题较多，跟进前先看已有讨论
- 渠道插件（Discord、iMessage、Telegram 等）涉及外部服务凭据，权限范围要单独评估

## 7. 谁该用 / 谁别碰

维护 Claude Code 插件、内部 marketplace 或需要跟进官方投稿入口迁移的工具链与集成开发者。

## 8. 评分依据

热度增速 **82** · 社区规模 **89** · 更新活跃 **79** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：价值主要在规范与迁移信息，而不是代码量：它把「哪里投稿、名字能否改、检查覆盖谁」写清楚，降低了生态分叉。对本仓库用户影响有限，对仍依赖旧 marketplace.json 的第三方作者则是一条需要尽快响应的变更。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-14 · 依据仓库 README 与 GitHub 元数据</sub>
