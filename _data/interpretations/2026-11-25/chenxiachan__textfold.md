---
date: 2026-11-25
repo: chenxiachan/textfold
category: ai
categoryLabel: AI / 大模型
rating: 3.5
language: Python
stars: 1454
starGain: 126
url: https://github.com/chenxiachan/textfold
tags: [arxiv, llm, local-first, open-source, paper-reader, research-papers, semantic-zoom, translation]
generatedAt: 2026-11-25T02:41:50.438Z
---

# chenxiachan/textfold · 项目解读

> **一句话**：把论文、网页、文件与 AI 回复折叠成五级细节层，逐级缩放阅读。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Python |
| 星标 | 1,454 |
| 今日新增 | +126 |
| 仓库 | https://github.com/chenxiachan/textfold |

## 1. 它解决什么问题

长文档阅读的两难：直接读全文太慢，交给摘要模型又丢结构且引入二次失真；agent 场景下模型回复过长同样淹没关键信息。需要的是保结构的分级折叠，而不是有损摘要。

## 2. 为什么是现在

1,454 星、上线 51 天、Python、Apache-2.0，日增 126、fork 123、issue 13。它的不同在于「缩放」语义：折叠过程中保留下来的词句逐词滑动而非重新生成，语义连续；同时打通了 agent 回复的折叠路径（Claude Code 与 Pi 内按层级按键），不依赖第二个模型。

## 3. 关键能力

- 输入侧覆盖网页链接（arXiv、PubMed Central、bioRxiv、medRxiv、Wikipedia、GitHub）与 PDF、Word、PowerPoint、Excel、EPUB、HTML、CSV、Markdown、图片等本地文件
- 浏览器扩展一键把当前页传入 TextFold，支持 Chrome、Edge、Brave
- 五级细节缩放，从结构总览到原文逐级展开
- Claude Code 与 Pi 中按层级折叠 agent 回复，无需第二个摘要模型
- 开放 CLI：python3 -m textfold get 一次取一个层级，供脚本与 agent 消费

## 4. 架构与实现

本地应用承担解析与折叠，维护 Chrome/Edge/Brave 的连接；解析器按文档类型分流（学术源站走结构化抓取，办公文档走格式解析）；折叠结果以开放的分层格式存储，CLI 与浏览器扩展消费同一份数据。

## 5. 上手路径

1. 装 TextFold 0.10.40+，从 Chrome Web Store 加扩展并在扩展菜单固定按钮
2. 贴一篇 arXiv 链接试五级缩放，重点看第 3 级左右是否保住了论证结构
3. 在 Claude Code 里装好后按层级键折叠一条长回复，对比与摘要命令的信息保真度
4. 用 python3 -m textfold get 把某一层级接进自己的脚本管线

## 6. 风险与边界

- 折叠质量依赖文档结构，纯图片 PDF 与无标题层级网页会退化为线性文本
- 浏览器扩展与本地应用的长连接在应用重启后需重新建立
- 五个层级的切分粒度是通用策略，特定领域（法律、医学）可能需要自定义口径
- 51 天项目，对新型文档格式的支持在持续变化中，跟进 changelog

## 7. 谁该用 / 谁别碰

天天读论文与长报告的研究者；需要压缩 agent 上下文的开发者。

## 8. 评分依据

热度增速 **75** · 社区规模 **59** · 更新活跃 **36** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：「保词滑动」的折叠语义与 agent 回复折叠是真实差异点，后者直接解决上下文膨胀；本地解析加开放格式的设计对私有文档友好。文档结构差的输入是明显短板，值得先用主力文档类型实测。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
