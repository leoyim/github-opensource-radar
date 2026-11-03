---
date: 2026-11-02
repo: FlashML-org/FreeToken
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: Python
stars: 15434
starGain: 242
url: https://github.com/FlashML-org/FreeToken
tags: [deepseek-v4, edge, glm, inference, minimax, moe, qwen, transformer]
generatedAt: 2026-11-03T03:03:51.004Z
---

# FlashML-org/FreeToken · 项目解读

> **一句话**：在消费级显卡上跑 290B 级 MoE 前沿模型，把 GPU、CPU 与内存当成一块弹性推理平台。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 15,434 |
| 今日新增 | +242 |
| 仓库 | https://github.com/FlashML-org/FreeToken |

## 1. 它解决什么问题

开源权重越来越强，但跑得动的人越来越少：前沿 MoE 模型动辄数百 B 参数，显存装不下就得靠卸载到内存，而朴素卸载会把交互速度拖到不可用。真正难的不是「能不能加载」，而是「decode 时每个 token 要把专家权重搬多少遍」。FreeToken 的切入点是把边缘设备的异构资源——GPU、CPU、主机内存、互联带宽——统一调度，通过带宽自适应的 CPU–GPU 协同执行与专家缓存策略，把 290B+ 级 MoE 在个人工作站上跑到可交互的速度。

## 2. 为什么是现在

104 天、1.5 万星，本轮 +242。它的热度曲线跟着开源权重模型走：DeepSeek-V4-Flash、Qwen3.6-35B-A3B、GLM-5.2 这类「MoE + 小激活参数」架构密集发布，让「本地跑前沿模型」第一次在算力上变得可行，缺的只是一个把带宽榨干的推理引擎。同时它提供 Anthropic / OpenAI 兼容 API，可以直接挂到 Claude Code、Codex、OpenCode 这些编码 agent 后面——本地模型从「玩具」变成「可以替换订阅的生产后端」，这是需求侧的真正推手。

## 3. 关键能力

- 边缘原生 MoE 运行时：带宽自适应的 CPU–GPU 协同执行（q* 策略）
- 全层双缓冲 prefill 流式加载，把权重搬运与计算重叠
- 全局 LRU 专家缓存，减少重复专家换入换出
- 语义锚点检查点：缓存循环状态与 KV cache，agent 上下文编辑（工具调用、思考块）时避免整段重算
- 弹性显存管理：运行时在专家缓存与 KV 之间重新分配 VRAM，不必重启引擎或重载权重
- 支持 DeepSeek-V4-Flash、Qwen3.6-35B-A3B、GLM-5.2 等前沿开源 MoE，量化格式含 MXFP4 / NVFP4 / FP8 / BF16
- 提供 Anthropic / OpenAI 兼容 API，可直接对接 Codex、Claude Code、OpenCode、DeepSeek Harness
- 覆盖消费级笔记本、游戏台式机与工作站 GPU，原生支持 RTX 30 / 40 系等

## 4. 架构与实现

核心是「权重不常驻」的调度器：专家缓存只保留热专家在 VRAM，冷专家留在主机内存，decode 时按路由结果流式换入，并用双缓冲把换入与计算重叠；q* 策略根据实测带宽决定某一层该放在 GPU 还是 CPU 算，而不是固定按层切分。语义锚点则解决 agent 场景的特殊开销——上下文被编辑后，只需从最近的锚点重算，而不是从头再来。对外暴露 OpenAI / Anthropic 兼容层，把引擎藏在标准 API 后面，因此可以直接顶替现有 agent 的模型后端。

## 5. 上手路径

1. 先确认显存与内存的总量：这类引擎的瓶颈几乎总是主机内存带宽，而不是算力
2. 从官方 quick start 的推荐模型开始，别一上来就挑战最大的那个——先建立速度基线
3. 接编码 agent 时用兼容 API 模式，按 OpenAI 协议配置 base_url，改造成本最低
4. 量化优先选 MXFP4 / NVFP4 这类为 MoE 设计的格式，FP8 在消费卡上未必更快
5. 观察 prefill 与 decode 分开测：prefill 慢说明带宽不够，decode 慢说明专家缓存命中率低

## 6. 风险与边界

- 消费级硬件跑前沿 MoE，速度与稳定性高度依赖具体配置，官方 benchmark 与你的机器差距可能很大
- 内存带宽是硬约束，长上下文场景下 KV cache 与专家缓存争抢显存，实际可用上下文会缩水
- 量化会带来质量损失，编码与工具调用任务对精度更敏感，需自行对比
- 生态年轻，模型适配与算子覆盖可能滞后于新权重发布
- 「免费」指的是软件免费，电费与硬件成本不免费

## 7. 谁该用 / 谁别碰

有 RTX 30/40 系显卡、想用本地模型替代订阅制编码 agent 的开发者；需要在离线或内网环境跑前沿模型、不能把代码送出境的团队。

## 8. 评分依据

热度增速 **89** · 社区规模 **80** · 更新活跃 **75** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：把「本地跑大 MoE」从演示推进到可用，工程含量在专家缓存与带宽调度这两处。但它是硬件敏感的——同一份 README 在你的机器上可能快三倍，也可能慢三倍，先测再定。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-02 · 依据仓库 README 与 GitHub 元数据</sub>
