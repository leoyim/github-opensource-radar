---
date: 2026-11-03
repo: cheaper-inference/OmniRoute
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: TypeScript
stars: 83990
starGain: 402
url: https://github.com/cheaper-inference/OmniRoute
tags: [a2a, ai-agents, ai-gateway, anthropic, claude, claude-code, cline, codex]
generatedAt: 2026-11-03T01:45:02.177Z
---

# cheaper-inference/OmniRoute · 项目解读

> **一句话**：一个端点接 375 家 provider，把各家免费额度摞起来用，还替你算清楚到底剩多少。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 83,990 |
| 今日新增 | +402 |
| 仓库 | https://github.com/cheaper-inference/OmniRoute |

## 1. 它解决什么问题

同时用 Claude Code、Codex、Cursor、Cline 的人都会撞上同一堵墙：每家 provider 各一套 SDK、各一套限流、各一套计费口径，免费额度散落在几十个后台里，谁也不知道自己这个月还能免费用多少。手动堆叠的结果通常是某个 key 突然 429，整条编码流被打断。OmniRoute 想解决的就是这层「账」：把多 provider 收敛成一个 OpenAI 兼容端点，按配额自动切换，并把免费额度的真实余量做成可视化仪表盘。

## 2. 为什么是现在

8.4 万星、263 天、单日 +402，本轮仍是 AI 类第二。它踩中的不是模型能力，而是「多订阅并存」这个新常态——编码 agent 的入口从单一 IDE 变成了 Claude Code / Codex / Cursor / Copilot 并存，用户被迫持有多个账号。更值得记的是它的自我约束：README 明写 1.62B tokens/月是「第三方免费层聚合估算」，485 条免费条目按 34 个 pool key 去重、只统计 17 个有公开月度预算的池，且每两周复审计、数字会双向变动。这种把口径写死的做法，在这个赛道上非常罕见。

## 3. 关键能力

- 统一 OpenAI 兼容端点，聚合 375+ provider、1,400+ 模型（Kimi、Claude、GPT、Gemini、GLM、DeepSeek、MiniMax 等）
- quota-aware 自动切换与回退：某家限流或额度耗尽时自动转下一家，不中断会话
- RTK + Caveman 两种上下文压缩，宣称节省 15–95% token
- 免费额度目录：485 条免费条目 / 34 个 pool key 去重，/dashboard/free-tiers 展示实时余量
- Desktop/PWA 双形态客户端，附 MCP 与 A2A 协议支持
- 兼容 Claude Code、Codex、Cursor、OpenCode、Cline、Copilot 等既有客户端，改 base_url 即可接入

## 4. 架构与实现

核心是一个反向代理式的路由层：请求进来先做模型 ID 归一化，再按「可用配额 + 延迟 + 成本」选路，失败则降级到下一个候选；上下文压缩发生在转发前，属于有损变换，所以配置里可开关。免费额度那部分则是独立的采集侧——按 provider 定期抓取额度状态，落成 pool 去重后的目录，前端渲染成仪表盘。900+ 贡献者的规模解释了为什么 provider 覆盖能到 375 家：这类项目的护城河就是长尾适配的体力活。

## 5. 上手路径

1. 先只接 2–3 家你真正有额度的 provider，跑通自动回退再扩，一次性全开会让排障变成猜谜
2. 把上下文压缩默认关掉，确认答案质量无损后再逐档打开——有损压缩在长上下文重构任务里容易丢关键约束
3. 用 /dashboard/free-tiers 的实时余量做监控，别信 README 顶部的总量数字，那个是估算
4. 自建时注意密钥集中风险：一个网关持有全部 provider key，它的日志与配置文件就是最高危资产

## 6. 风险与边界

- 把多家免费层摞起来用，普遍游走在各 provider 服务条款的灰色地带，账号被封是现实成本
- 「1.62B tokens/月」是聚合估算，随时可能因某家取消免费层而腰斩，不能当容量承诺做规划
- 有损上下文压缩（RTK/Caveman）在代码重构、长文档推理场景下有静默丢信息的风险
- 单点网关持有全部凭据，自身一旦被攻破等于全线失守
- 375 家 provider 的长尾质量参差，同一模型名在不同 provider 上的实际行为可能不一致

## 7. 谁该用 / 谁别碰

重度使用编码 agent 的个人开发者、想压低推理成本的小团队、以及需要给内部统一模型入口的平台工程师。

## 8. 评分依据

热度增速 **88** · 社区规模 **94** · 更新活跃 **76** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：它解决的是真问题——多订阅时代的配额调度——而且难得地公开了估算方法。但本质是「免费额度的套利工具」，护城河不在技术而在适配广度，政策一变就得重做。当成本优化层用可以，当基础设施底座要谨慎。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-03 · 依据仓库 README 与 GitHub 元数据</sub>
