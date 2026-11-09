---
date: 2026-11-09
repo: kortix-ai/CompanyOS
category: ai
categoryLabel: AI / 大模型
rating: 4
language: TypeScript
stars: 20580
starGain: 72
url: https://github.com/kortix-ai/CompanyOS
tags: [ai, ai-agents, company-as-code, company-operating-system, company-os, companyos, llm, open-source]
generatedAt: 2026-11-09T02:01:02.679Z
---

# kortix-ai/CompanyOS · 项目解读

> **一句话**：把公司流程写成 kortix.yaml 与常驻代理，让事件驱动的代理成组运行并共享一份公司记忆。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 20,580 |
| 今日新增 | +72 |
| 仓库 | https://github.com/kortix-ai/CompanyOS |

## 1. 它解决什么问题

把重复业务流程交给自动化脚本，难在流程变更频繁、跨系统步骤零散；交给聊天代理，又缺少持久化状态、并行执行与结果核验。真正缺的是一个能声明「要达成什么结果」、让多个代理按事件持续工作、且每一步变更都经过人工确认的运行框架。

## 2. 为什么是现在

项目 764 天、20,580 星，本期 +72，3,462 fork。README 把它称为开源的 CompanyOS／云原生 agent harness，并用「Always-on agents」定义产品：代理由事件启动、并行运行、共享一份公司记忆。本期 AI 方向多个项目都在处理代理的编排与组织，CompanyOS 是其中把抽象层级抬得最高的一个——直接把公司作为可编程对象。

## 3. 关键能力

- 声明一次结果与规则，代理端到端拆解计划并按时间表自行唤醒
- 代理在各自云电脑上按定时器、webhook 与工具启动，可并行工作
- 由独立代理核验结果，变更经人工批准的 change request 落地
- 每次运行学到的内容回写进公司记忆与技能，形成累积改进
- CLI 加 kortix.yaml 的项目式定义，推送仓库即可上线
- 支持自托管，README 另设 Security 章节与多个实际案例

## 4. 架构与实现

TypeScript 实现，许可证标注 NOASSERTION（使用前需自行确认授权范围）。README 章节含 What is a CompanyOS、Three things make it yours、Quickstart（安装 CLI → 生成 kortix.yaml 与 agents/skills → 推送仓库）、What runs on、Self-host、Security 等。结构上以仓库为配置载体，代理、技能与流程都落在代码里；关键取舍是把 Verify 独立成另一个代理，并把人工批准作为变更落地的必经闸门，避免自动执行直接改写生产。案例包括 SciencePal、Platinum 以及项目自身用 intake agent 分流 issue、worker agents 修复。

## 5. 上手路径

1. 先用 Quickstart 安装 CLI 并生成一份最小 kortix.yaml，只定义一个结果与一个代理
2. 在隔离仓库里跑一次完整循环，检查 Plan → Work → Verify 的输出与 change request 内容
3. 确认批准闸门确实生效后，再引入定时唤醒与 webhook 触发
4. 阅读 Self-host 与 Security 章节，明确代理云电脑的网络与凭证边界后再接入真实系统

## 6. 风险与边界

- 许可证标注 NOASSERTION，商业使用前必须核实实际授权条款
- 代理可持续运行并具备实际执行能力，权限范围与审计日志需要部署方严格设定
- 把公司流程写成代码的抽象层级较高，流程频繁变动时配置维护成本不低
- 自动核验依赖另一个代理，关键业务仍应保留人工复核，不宜把它当作唯一质量闸门

## 7. 谁该用 / 谁别碰

已有较多可声明、可核验的重复业务流程，且愿意把流程纳入版本管理的团队；也适合研究多代理协作形态的开发者。流程高度依赖人工判断、或无法接受代理持续运行的组织，不宜直接采用。

## 8. 评分依据

热度增速 **78** · 社区规模 **84** · 更新活跃 **69** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它最有价值的设计不是「多个代理并行」，而是把核验与批准拆成独立环节，让自动化停在人工闸门前。这使它在同类 agent harness 里更贴近真实组织的责任边界；代价是配置与治理成本，以及许可证需要自行确认。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-09 · 依据仓库 README 与 GitHub 元数据</sub>
