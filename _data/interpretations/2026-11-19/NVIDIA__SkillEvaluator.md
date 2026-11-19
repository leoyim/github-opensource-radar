---
date: 2026-11-19
repo: NVIDIA/SkillEvaluator
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: Python
stars: 3746
starGain: 312
url: https://github.com/NVIDIA/SkillEvaluator
tags: [agent-evaluation, agent-plugins, agent-security, agent-skills, agentic-ai, benchmark, claude-code, codex]
generatedAt: 2026-11-19T02:32:35.179Z
---

# NVIDIA/SkillEvaluator · 项目解读

> **一句话**：给技能包做体检：静态规则先过一遍，再实跑对比「有它 / 没它」的差别。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Python |
| 星标 | 3,746 |
| 今日新增 | +312 |
| 仓库 | https://github.com/NVIDIA/SkillEvaluator |

## 1. 它解决什么问题

Agent Skills 数量暴涨后缺少质量基线——描述超限导致宿主根本不加载、技能之间语义重叠、引入凭据泄漏或恶意脚本，以及最关键的问题：这个技能到底有没有改善任务结果。过去这些都没有可复核的度量，只能靠人工试用。

## 2. 为什么是现在

本期 3,746 星、518 fork、148 天，当日 +312；README 把三层检查、CI 门禁与 Harness Check 一起写成主线，并附论文与 NVIDIA Verified Skills 流水线，说明技能生态开始需要配套的工程化评估设施，而非只堆技能数量。

## 3. 关键能力

- Tier 1 静态检查：质量、schema、版本、PII、许可证、Unicode、脚本 lint，背后是 500+ 静态规则与检测模式，无需 LLM key
- Harness Check：不开 agent、不用 key 就能预判各宿主是否加载该技能，可发现描述被截断、目录不被扫描等问题
- Tier 2 语义重叠检测与合成评测数据集生成；Tier 3 用 live agent 对比有无技能的真实表现（skill lift）
- 安全侧接 SkillSpector、Gitleaks、Bandit、可选 Semgrep 与 pip-audit，覆盖代码完整性与依赖审计
- ci init 一键接入 GitHub / GitLab，对变更技能出可下载报告；也可作为 CLI 或 agent 技能使用

## 4. 架构与实现

Python CLI（3.12–3.14）按三层递进执行：Tier 1 纯静态；Tier 2 需嵌入与对话端点，可用免费 NVIDIA Build key 做原型；Tier 3 还需 Docker 与受支持 agent 实跑。CI 模板把同一套检查挂到 PR 上作为合并门禁，输出统一报告。项目自身也是 NVIDIA Verified Skills 流水线的一环，规范依据 Agent Skills specification。

## 5. 上手路径

1. pip install skillevaluator 后先跑 quality-check 或 validate --tiers 1，无需任何 key 拿到 100 分制报告
2. 跑 harness-check 确认目标宿主确实会加载该技能，先修描述长度与目录位置问题
3. 用 ci init 把检查挂到仓库 PR，设定团队可接受的通过线
4. 需要评估真实收益时再配置端点与 Docker，跑全三层看 skill lift 是否为正

## 6. 风险与边界

- Tier 2 / Tier 3 依赖外部模型端点与 Docker，配置复杂度与成本明显高于静态检查
- 静态评分默认通过线为 70 分，分数高不等于技能在真实任务中有效；README 也明确此时发表证据仍为 INCOMPLETE
- live evaluation 结果受所选 agent、模型与数据集影响，跨版本可比性有限
- 67 个 open issue、148 天新项目，扫描器链与宿主 profile 更新较快

## 7. 谁该用 / 谁别碰

维护内部技能库、需要在合并前设质量与安全门禁的平台或工程效能团队；只写一次性提示词、不涉及技能分发的个人使用者收益有限。

## 8. 评分依据

热度增速 **89** · 社区规模 **68** · 更新活跃 **68** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：少见地把「技能是否被加载」「是否安全」「是否真的有用」三件事分开度量，Harness Check 尤其切中实际痛点。建议从 Tier 1 + CI 门禁起步，别一上来就跑全套 live evaluation。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
