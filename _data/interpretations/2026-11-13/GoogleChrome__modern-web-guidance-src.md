---
date: 2026-11-13
repo: GoogleChrome/modern-web-guidance-src
category: ai
categoryLabel: AI / 大模型
rating: 4
language: TypeScript
stars: 3050
starGain: 739
url: https://github.com/GoogleChrome/modern-web-guidance-src
tags: []
generatedAt: 2026-11-13T02:11:25.742Z
---

# GoogleChrome/modern-web-guidance-src · 项目解读

> **一句话**：把浏览器兼容数据和 Web 平台最佳实践做成 agent 技能，让编码模型少写过时的写法。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 3,050 |
| 今日新增 | +739 |
| 仓库 | https://github.com/GoogleChrome/modern-web-guidance-src |

## 1. 它解决什么问题

编码模型学到的前端知识往往停留在训练语料里：能写出能跑的页面，却常常用厚重的 polyfill 或旧 API 绕开平台已有的能力，也容易漏掉无障碍与浏览器支持差异。缺的是一份可检索、可校准、随浏览器演进更新的权威指引，并且要能被 agent 在写码前主动查到。

## 2. 为什么是现在

本期 +739，是全榜日增第一；3,050 星、200 fork、386 个 issue 说明内容在被真实使用与反复讨论。项目由 Chrome、Edge、Firefox 与 MDN 团队共同维护，这类跨厂商共建的规范型仓库在榜单上并不多见。

## 3. 关键能力

- npx modern-web-guidance@latest install 通过交互式向导把技能装进编码 agent，也可先用 search 按问题检索、用 retrieve 按 ID 取整篇指引
- scan 子命令扫描代码库中的遗留模式，指出可以改用现代平台能力的位置
- 内容按领域组织：CSS 与布局约 140 项、HTML 与 DOM 约 36 项、JavaScript 与 API 约 74 项，并覆盖现代特性的安全采用与 .mwgrc 项目配置
- 核心准则强调优先使用平台级 API、兼顾性能与内置无障碍能力，以及用轻量回退替代重型 polyfill
- 本仓库为源仓库，包含内容的编写、校准与评估代码及文档，另有 Eval Dashboard 展示评测结果

## 4. 架构与实现

以 skills 形式向编码 agent 提供结构化的 Web 平台指引，源仓库保存指南原文、校准与评估流程，产出发布到 GoogleChrome/modern-web-guidance。TypeScript 实现，Apache-2.0 许可，治理方式见 CONTRIBUTING.md 与 GOVERNANCE.md，项目处于多厂商共同维护状态。

## 5. 上手路径

1. 先不安装，用 npx modern-web-guidance@latest search 按一个具体前端问题试检索，看看返回的指引是否贴合项目场景
2. 确认可用后运行 install 向导，按所用 agent 完成技能安装
3. 在项目根建立 .mwgrc，声明目标浏览器矩阵与允许采用的现代特性范围
4. 对现有代码跑一次 scan，把报告里的遗留模式与团队迁移计划对齐后再逐项改

## 6. 风险与边界

- 386 个 issue 与多厂商共建意味着内容仍在频繁演进，指引之间可能出现版本差异
- 现代 API 的可用性取决于实际用户浏览器分布，需与自身支持矩阵核对，不能只看指引推荐
- 技能化不等于模型一定会检索；没有在流程里强制 search/retrieve 时，模型仍可能凭记忆作答
- 涉及 Prompt API 等在途特性时，回退方案的实现质量由使用方负责
- 扫描结果偏建议性质，大规模替换前需要回归测试与无障碍验证

## 7. 谁该用 / 谁别碰

维护长期前端代码库、需要把浏览器兼容与无障碍要求固化进团队流程的开发者，以及研究「把规范做成 agent 可读知识」的工具作者。追求单一框架内快速原型的场景收益相对有限。

## 8. 评分依据

热度增速 **95** · 社区规模 **64** · 更新活跃 **75** · 工程成熟 **85**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把 Web 平台的隐性知识变成可检索、可评测、可随浏览器更新迭代的技能包，关键设计是源仓库同时提供校准与评估链路，而不是只堆一份静态清单。落地成效取决于是否在 agent 流程里真正触发检索，以及团队自己的浏览器支持矩阵。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-13 · 依据仓库 README 与 GitHub 元数据</sub>
