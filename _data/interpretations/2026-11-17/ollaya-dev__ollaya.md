---
date: 2026-11-17
repo: ollaya-dev/ollaya
category: backend
categoryLabel: 后端 / 云原生
rating: 3.5
language: Rust
stars: 1468
starGain: null
url: https://github.com/ollaya-dev/ollaya
tags: [calibration, decision-model, decision-models, inference-server, jev, jev-alternative, jev-compatible, laya]
generatedAt: 2026-11-17T02:14:58.013Z
---

# ollaya-dev/ollaya · 项目解读

> **一句话**：把路由、护栏、分诊从 LLM 调用里剥离成毫秒级的概率判断。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 1,468 |
| 今日新增 | — |
| 仓库 | https://github.com/ollaya-dev/ollaya |

## 1. 它解决什么问题

很多 agent 决策其实不需要生成文本：这封邮件要不要升级、这个工具调用该不该批准、这条工单归哪个团队。用 LLM 做这类判断又慢又贵，输出还不可校准。

## 2. 为什么是现在

本期 1,468 星、92 fork、15 个 open issue，54 天新仓；README 给出与闭源托管的线格式兼容路径，并列出多家机构发布的开放决策模型，说明「决策模型」正在形成一个可自托管的品类。

## 3. 关键能力

- 输入状态加类型化问题（choice、score、noul），单次前向返回校准概率，不生成文本
- 一个二进制提供 serve、run、pull、list 等命令，使用方式贴近 Ollama
- 接口与 TypeSafe 的 Jev 线格式一致，既有 SDK 改个 base URL 即可接入
- 支持按模型名拉取并本地服务多个开放决策模型族
- 毫秒级延迟，适合放在 agent 的每一步判断里

## 4. 架构与实现

Rust 编写的本地守护进程，加载决策模型并暴露兼容 HTTP 接口；CLI 负责模型拉取与生命周期管理，推理在后端运行时完成，数据不出本机。

## 5. 上手路径

1. 按安装脚本起服务，先用推荐模型跑一次 triage 预设，观察概率输出
2. 把自己的场景改成类型化问题，验证概率是否可解释、可设判定门限
3. 再把既有 SDK 的 base URL 指向本地端点，确认兼容层无差异

## 6. 风险与边界

- 决策模型的校准质量取决于具体模型，换模型需重新验证门限
- 4B 级模型在无 GPU 时延迟明显上升，需按硬件选型
- 兼容层对齐的是特定版本的线格式，升级 SDK 后需回归测试
- 项目年轻，模型族与接口仍可能调整

## 7. 谁该用 / 谁别碰

需要把 agent 的判断步骤做快、做便宜、做可解释的团队；需要开放式生成能力的场景仍应使用 LLM。

## 8. 评分依据

热度增速 **97** · 社区规模 **58** · 更新活跃 **23** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它切中的是一个被忽视的成本点：agent 里大量判断并不需要生成。把决策模型做成可自托管、接口兼容的服务，是务实的产品化路径；但校准与模型选型是实际门槛，别把概率当真理。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-17 · 依据仓库 README 与 GitHub 元数据</sub>
