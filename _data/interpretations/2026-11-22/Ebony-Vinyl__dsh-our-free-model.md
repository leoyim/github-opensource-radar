---
date: 2026-11-22
repo: Ebony-Vinyl/dsh-our-free-model
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4.5
language: JavaScript
stars: 83131
starGain: 860
url: https://github.com/Ebony-Vinyl/dsh-our-free-model
tags: [ai-agents, deepseek, deepseek-harness, developer-tools, dsh, dsh-plugin, free-model, llm]
generatedAt: 2026-11-22T02:08:13.737Z
---

# Ebony-Vinyl/dsh-our-free-model · 项目解读

> **一句话**：dsh 插件把公共网关的模型清单接成开箱即用的车道。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | JavaScript |
| 星标 | 83,131 |
| 今日新增 | +860 |
| 仓库 | https://github.com/Ebony-Vinyl/dsh-our-free-model |

## 1. 它解决什么问题

想试用多个前沿模型，往往要逐个注册、申请配额、管理 Key；而公共网关的模型可用性会随时变化，静态写死一份清单很快就过期。

## 2. 为什么是现在

本期 83,131 星、2,340 fork，当日新增 860 星为本期最高。README 把上游来源、模型清单刷新、故障与拒路由的区分写进亮点，说明重心在长期对接公共网关的稳定性，而非一次性接入。

## 3. 关键能力

- 无需账号、注册或 API Key，安装后即在 dsh 内使用上游模型清单
- 模型集合、上下文长度与能力每次刷新向上游重新拉取
- 按响应体形状判定流式响应，区分网关 5xx/429 与模型确实不可用
- 思考强度分档位菜单与预算阶梯两类控制，逐次调用留痕
- 应用内升级含 SHA-256 校验、备份、原子替换、回读与失败回滚；用量看板数据留本机

## 4. 架构与实现

作为 dsh 插件运行，仅把 llm 作为硬依赖，看板模块挂在独立 fiber 上，web server 就绪后再注册路由；模型请求直连 OpenCode Zen 与 Kilo AI 公共网关，插件不保存静态模型快照，另提供 OpenAI 兼容转发端。

## 5. 上手路径

1. 按 README 的 Install 一节把插件装进 dsh
2. 打开选择器确认当前可用模型与 region-limited 分组
3. 用一个短任务验证流式输出与思考档位是否按预期下发
4. 在设置页查看用量看板，确认数据仅留本机

## 6. 风险与边界

- 可用性与额度由上游公共网关决定，免费车道不承诺长期稳定
- 请求会发往上游网关，敏感内容需自行判断是否适合
- 仓库许可标注 NOASSERTION，商用或二次分发前应确认授权
- 225 个 open issue 与频繁热重载说明版本迭代快，升级前宜看公告

## 7. 谁该用 / 谁别碰

已在使用 dsh、想低成本试多个模型的个人开发者；对数据出境与授权条款有硬性要求的团队不适合直接用公共车道。

## 8. 评分依据

热度增速 **98** · 社区规模 **89** · 更新活跃 **69** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：工程细节（流式判定、拒路由区分、升级回滚）比免费本身更有价值；把它当试验车道合适，当生产依赖则需要先解决上游与授权的不确定性。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
