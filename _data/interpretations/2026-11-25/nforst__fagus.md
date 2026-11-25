---
date: 2026-11-25
repo: nforst/fagus
category: frontend
categoryLabel: 前端 / Web
rating: 3.5
language: Rust
stars: 200
starGain: 23
url: https://github.com/nforst/fagus
tags: [css, factur-x, html-to-pdf, laravel, pdf, pdf-generation, pdfa, php]
generatedAt: 2026-11-25T02:41:50.438Z
---

# nforst/fagus · 项目解读

> **一句话**：PHP/Laravel 的 HTML 转 PDF，不带浏览器：Rust 引擎按 Chrome 打印效果渲染。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 200 |
| 今日新增 | +23 |
| 仓库 | https://github.com/nforst/fagus |

## 1. 它解决什么问题

PHP 生态出 PDF 的现实：要么维护一套 Docker + Chromium 的无头渲染链路，要么用 DOM 解析器忍受与浏览器不一致的版式；发票场景还要叠加 PDF/A 与 Factur-X 合规要求。

## 2. 为什么是现在

200 星、上线 11 天、Rust、Apache-2.0。把 Chrome 打印管线用 Rust 重写并以单二进制随 Composer 分发，是 PHP 生态此前没有的形态；PDF/A-3 + ZUGFeRD/Factur-X 内建直接命中欧洲电子发票合规刚需。

## 3. 关键能力

- composer require 即装：Rust 原生引擎按平台分发，SHA-256 校验，PHP 侧常驻 worker
- 渲染对齐 Chrome：flex、grid、:has()、@property、Tailwind v4 按 Chrome 行为解释
- 性能：单页发票热身后约 2.5 ms，十页约 17 ms
- PDF/A-1b 至 PDF/A-4、ZUGFeRD/Factur-X 附件、可访问 PDF（PDF/UA）内建
- 安全默认：无网络访问、无越界文件访问、不执行脚本

## 4. 架构与实现

Rust 引擎承担 CSS 级联、分页与 PDF 生成，以 worker 进程常驻避免重复冷启动；PHP 侧 Fagus::html() 门面与 Laravel 集成；平台二进制经 Composer dist 分发并校验哈希。

## 5. 上手路径

1. composer require 后用一份现有发票模板渲染，与 Chrome 打印结果逐页对比
2. 压测热身后的单页与多页耗时，确认 worker 进程模型符合自己的吞吐预期
3. 验证 PDF/A-3 + Factur-X 附件被验收方系统正确识别
4. 故意投喂含 JS 与外部资源的页面，确认安全默认行为

## 6. 风险与边界

- 不是完整浏览器：不支持 JavaScript，交互页需先静态化
- 与 Chrome 的渲染差异需用自有模板实测，复杂 CSS 边角行为可能不同
- 冷启动首份文档明显慢于热身后数字，突发流量下 worker 模型要调优
- 11 天新仓，引擎成熟度与平台覆盖（musl/arm64）在早期阶段

## 7. 谁该用 / 谁别碰

Laravel 开发者与需要合规 PDF 输出的财务/电商系统团队。

## 8. 评分依据

热度增速 **78** · 社区规模 **37** · 更新活跃 **73** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：替换「Docker + Chromium」这条 PHP 生态的老大难链路，切入点与合规功能都选得准；先用自己的模板验证渲染保真度，再决定是否替换现有方案。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
