---
date: 2026-10-26
repo: JuliusBrussee/caveman
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: Go
stars: 115163
starGain: 208
url: https://github.com/JuliusBrussee/caveman
tags: [ai, anthropic, caveman, claude, claude-code, llm, meme, prompt-engineering]
generatedAt: 2026-10-26T11:59:07.500Z
---

# JuliusBrussee/caveman · 项目解读

> **一句话**：让 agent 用「原始人语」说话与读少一点，换 token 成本下降，代码本身不改。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Go |
| 星标 | 115,163 |
| 今日新增 | +208 |
| 仓库 | https://github.com/JuliusBrussee/caveman |

## 1. 它解决什么问题

agent 的输入 token 里，很大一部分花在冗长的工具输出与客套解释上，而不是代码。caveman 用两层手段压缩：表达层（输出用极简体）与读取层（工具输出裁剪、Blocks 让脚本只写一次），并保证代码保持精确。

## 2. 为什么是现在

今日 +208 星。省 token 从「提示词技巧」变成「可安装的中间件」，而且它给出了具体基准（33.2% 输入 token、整轮 54% 成本、85 项任务同分），这类可复现声明比空泛宣传更有传播力。

## 3. 关键能力

- 表达压缩：让 agent 用极简语言回复，README 称「Say less」但代码不变
- 读取压缩：工具输出裁剪，Blocks 模式让脚本只写一次而非每轮重复
- 多 harness 接入：Claude Code 插件可自动随会话启动，另有 Gemini CLI 等
- Caveman Cloud（Auto 模式）作为可选托管路径
- 提供 18 个 rocks（规则/技能）构成整体压缩策略

## 4. 架构与实现

Go 实现的 CLI + proxy 层，配合 skill 规则做输出改写；README 的 Proof 段落给出对照实验，并称被 Adobe Research 引用、经 JetBrains A/B 测试、被 Elasticsearch Labs 复刻。CLI 默认上报使用统计（命令、token 数、随机安装 ID、OS、IP）。

## 5. 上手路径

1. 先在只读任务上试（解释代码、查文档），确认极简表达不影响你读结果
2. 用自己的一组任务跑 A/B，对比答案正确率与 token 消耗，别直接采信 54% 这个数
3. 不想上报统计就在安装时关掉，或只在离线项目里用

## 6. 风险与边界

- 所有收益数字（33.2% / 54% / 18 of 18）都是项目自述基准，任务集不同结果可能差异很大
- 默认上报使用统计含 IP，合规敏感环境需先关闭
- 压缩输出与工具结果可能丢掉关键上下文，长链路调试时反而增加返工

## 7. 谁该用 / 谁别碰

适合 token 成本敏感、且任务以「写代码 / 改代码」为主的团队；需要长推理与详细解释的场景（架构评审、事故复盘）不适合用极简模式。

## 8. 评分依据

热度增速 **84** · 社区规模 **94** · 更新活跃 **69** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：思路成立且敢于给可验证的数字，是本期最值得自己做 A/B 的一个工具；但把它当「默认开启的省钱开关」有风险，应按任务类型分档使用。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
