---
date: 2026-11-25
repo: openai/codex-plugin-cc
category: tools
categoryLabel: 开发工具 / 效率
rating: 3.5
language: JavaScript
stars: 35438
starGain: 43
url: https://github.com/openai/codex-plugin-cc
tags: []
generatedAt: 2026-11-25T02:41:50.438Z
---

# openai/codex-plugin-cc · 项目解读

> **一句话**：在 Claude Code 里直接调 Codex：评审委托与任务交接的官方插件。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | JavaScript |
| 星标 | 35,438 |
| 今日新增 | +43 |
| 仓库 | https://github.com/openai/codex-plugin-cc |

## 1. 它解决什么问题

多模型协作的实际需求：用 Claude Code 的工作流，但希望另一个模型（Codex）做独立评审或接手部分任务，手动切换上下文成本高。

## 2. 为什么是现在

35,438 星、上线 239 天、JavaScript、Apache-2.0，fork 2,468、日增 43。官方维护是关键差异：命令面稳定（/codex:review、adversarial-review、rescue、transfer、status、result、cancel），跨厂商的评审委托有官方路径可用。

## 3. 关键能力

- /codex:review：只读代码评审
- /codex:adversarial-review：可调控的对抗式评审，让分歧点显式化
- /codex:rescue、/codex:transfer：委派任务与交接会话
- /codex:status、/codex:result、/codex:cancel：后台任务管理
- ChatGPT 订阅（含 Free）或 API key 均可，用量计入 Codex 限额

## 4. 架构与实现

以 Claude Code 插件形式注册斜命令与 codex:codex-rescue 子代理，命令转发到 Codex 服务；会话状态由插件维护，后台任务可查询与取消。

## 5. 上手路径

1. 装插件后先跑 /codex:review 评审一个自己熟悉的 PR，评估评审质量与盲区
2. 用 /codex:adversarial-review 对同一段代码跑对抗评审，对比两模型分歧点
3. 试一次 /codex:rescue 委派后台任务，熟悉 status/result/cancel 的状态机
4. 确认自己的额度模型，估算评审与委派的用量占比

## 6. 风险与边界

- 用量计入 Codex 限额，评审与委派混用会挤占生成额度
- 后台任务状态机与 Claude Code 自身任务系统并行，中断恢复路径要先熟悉
- 评审质量依赖模型版本，Codex 更新可能改变评审风格
- 跨厂商数据边界：评审内容会发送到 OpenAI 侧，敏感代码注意合规

## 7. 谁该用 / 谁别碰

Claude Code 用户里想引入第二模型做评审与任务分工的团队。

## 8. 评分依据

热度增速 **72** · 社区规模 **85** · 更新活跃 **21** · 工程成熟 **65**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：官方维护保证了命令面稳定，「对抗式评审」是跨模型协作里最容易落地的切入点；用量与数据边界两件事在使用前算清楚即可。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
