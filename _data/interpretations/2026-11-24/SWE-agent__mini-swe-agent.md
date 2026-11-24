---
date: 2026-11-24
repo: SWE-agent/mini-swe-agent
category: ai
categoryLabel: AI / 大模型
rating: 3.5
language: Python
stars: 10014
starGain: 45
url: https://github.com/SWE-agent/mini-swe-agent
tags: [agent, agentic-ai, agentic-ai-cli, ai, ai-agent, textual]
generatedAt: 2026-11-24T01:51:51.972Z
---

# SWE-agent/mini-swe-agent · 项目解读

> **一句话**：用约 100 行 Python 复现「能解 GitHub issue」的编码 agent，作为复杂度的下限基线。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Python |
| 星标 | 10,014 |
| 今日新增 | +45 |
| 仓库 | https://github.com/SWE-agent/mini-swe-agent |

## 1. 它解决什么问题

编码 agent 的工程实现普遍膨胀：巨型 monorepo、大量配置文件、多套编排抽象，导致学习成本高、启动慢，也很难判断一次成功究竟来自框架设计还是模型本身；想做一个可审计的基线来对比时，往往找不到足够小的参照物。

## 2. 为什么是现在

10,014 星、513 天、Python、MIT，日增 45 上 Trending。项目出自 SWE-bench 与 SWE-agent 的原班团队，v2 版本把 agent 类压到百行量级；README 称在 SWE-bench verified 上超过 74%、启动明显快于 Claude Code，并已被 Ramp SWE-Bench 采用、在 DeepSWE 上超过 Claude Code 与 Codex。

## 3. 关键能力

- agent 类核心约 100 行 Python，环境、模型、运行脚本各自独立可替换
- 环境后端可选本地或 docker，便于把执行边界收进容器
- 模型层通过 Litellm 适配，可接多家端点
- 提供 CLI 单任务与批处理两种用法，便于跑 benchmark 子集
- 配套 ProgramBench 与 minimal-agent 教程，用于对照不同任务难度

## 4. 架构与实现

agent 主循环 + 可替换 environment（本地/docker）+ 可替换 model（Litellm 适配）+ 运行入口脚本；v2 与 v1 分支并存，目录按 agents / environments / models / run 四层切分，避免框架把编排写死。

## 5. 上手路径

1. 先跑 hello_world 入口完成一次单任务，确认模型端点与工作目录配置正确
2. 把 environment 换成本地容器，检查容器内权限与文件挂载是否符合预期
3. 接自己的模型端点，用同一批 issue 对比成功率，而非只看单例
4. 最后再批量化跑 SWE-bench 子集，注意记录 harness 版本以便结果可比

## 6. 风险与边界

- 74% 的成绩强依赖 harness 与评分口径，换子集或换评分脚本不可直接对比
- v2 与 v1 接口不兼容，旧脚本需按迁移指南改写
- 真实仓库上的多文件改动仍需人工复核，agent 通过测试不等于改动正确
- 514 个 issue 中相当比例是安装与配置问题，说明最小化并不等于零门槛

## 7. 谁该用 / 谁别碰

想读懂编码 agent 最小闭环、或需要一个可审计基线做二次开发的团队；不适合直接当作生产级自动化工具使用。

## 8. 评分依据

热度增速 **63** · 社区规模 **77** · 更新活跃 **71** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它的意义是给出下限：当框架越堆越厚时，「100 行做到 74%」这件事本身就是对复杂度的反问。做选型时把它当基线，比再引入一层抽象更有用。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-24 · 依据仓库 README 与 GitHub 元数据</sub>
