---
date: 2026-11-25
repo: vxcontrol/pentagi
category: ai
categoryLabel: AI / 大模型
rating: 3.5
language: Go
stars: 34965
starGain: 84
url: https://github.com/vxcontrol/pentagi
tags: [ai-agents, ai-security-tool, anthropic, autonomous-agents, golang, gpt, graphql, multi-agent-system]
generatedAt: 2026-11-25T02:41:50.438Z
---

# vxcontrol/pentagi · 项目解读

> **一句话**：自然语言下指令，一组专业分工的 agent 在沙箱里跑完渗透测试全流程。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Go |
| 星标 | 34,965 |
| 今日新增 | +84 |
| 仓库 | https://github.com/vxcontrol/pentagi |

## 1. 它解决什么问题

渗透测试自动化的老问题：工具链（nmap、Metasploit、sqlmap 等）成熟但串联靠人，脚本化方案面对目标变化就脆；直接把 LLM 接上去又缺乏监督、情报记忆与安全边界。

## 2. 为什么是现在

34,965 星、上线 687 天、Go、MIT，fork 5,595、issue 78、日增 84。作为老项目近期仍在增长，说明自主渗透方向需求持续；它的监督层、沙箱与图谱记忆三件套在同类里配置面最全。

## 3. 关键能力

- 自然语言描述目标与目的，多 agent 团队自动规划并执行
- 隔离 Docker 沙箱内运行 20+ 专业工具（nmap、Metasploit、sqlmap 等）
- agent 监督层：任务派发、结果回收、情报记忆与报告生成
- Langfuse 观测与 Graphiti 知识图谱集成
- 十余家 LLM 供应商支持（Azure OpenAI、Anthropic、Gemini、Bedrock、DeepSeek、GLM、Kimi、Qwen、Mistral、xAI 等），含 OAuth 与多实例运行

## 4. 架构与实现

Go 服务端承担编排与监督，agent 行动在独立 Docker 沙箱执行；LLM 供应商层做了统一抽象，供应商切换不影响工具链；观测走 Langfuse，长期情报入 Graphiti 图谱。

## 5. 上手路径

1. 在隔离网络环境部署单实例，先用自建靶场（如 DVWA）跑通全流程
2. 检查沙箱网络策略：agent 能访问什么、能碰哪些网段，先收紧再放开
3. 接 Langfuse 复盘一次任务的完整决策链，确认监督层的拦截行为
4. 再考虑接入真实资产，且仅限书面授权范围内

## 6. 风险与边界

- 渗透能力本身即双刃，只能用于授权测试，部署面暴露需严格管控
- 沙箱隔离强度取决于部署方式，公网部署必须自行加固
- 78 个开放 issue 含工具适配与凭证管理问题，生产前先查对应条目
- LLM 成本随任务规模线性增长，大目标需预算控制

## 7. 谁该用 / 谁别碰

安全团队的渗透测试与红队自动化；需要把工具链串联交给 agent 的安全工程师。

## 8. 评分依据

热度增速 **71** · 社区规模 **87** · 更新活跃 **14** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：在「自主渗透」这个方向上监督与沙箱设计是它的核心资产，比裸 agent 方案可控；但使用边界完全依赖使用者的合规意识，部署与授权流程要先于功能评估。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
