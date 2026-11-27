---
date: 2026-11-27
repo: alesha-pro/llm.asm
category: ai
categoryLabel: AI / 大模型
rating: 4
language: Assembly
stars: 1558
starGain: null
url: https://github.com/alesha-pro/llm.asm
tags: [assembly, avx2, bare-metal, llm, machine-learning, nasm, osdev, qwen]
generatedAt: 2026-11-27T01:52:46.331Z
---

# alesha-pro/llm.asm · 项目解读

> **一句话**：用 17,252 行纯汇编把推理、裸机系统与训练器各重写一遍，零依赖是唯一目标。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Assembly |
| 星标 | 1,558 |
| 今日新增 | — |
| 仓库 | https://github.com/alesha-pro/llm.asm |

## 1. 它解决什么问题

推理栈通常由层层依赖堆起来：C 运行时、数学库、BLAS、推理框架。每一层都带来可控性与可移植性的损失，也让「到底哪里慢」变得难以回答。

## 2. 为什么是现在

2 天、1,558 星、228 fork，MIT。三个独立工程共用一套手写内核：12 KB 的 Qwen3-0.6B 推理、22 KB 的可引导裸机 SMP 系统、32 KB 的 Mini-GPT 训练器加 Braille 终端界面；模型文件 613.66 MiB（.asmbin v2）对应 GGUF Q8_0 的 604.15 MiB，同机三轮均值对比。

## 3. 关键能力

- 手写数学内核：expf、sincosf、RMSNorm、RoPE、SiLU、Softmax 全部为 x86-64 汇编
- AVX2 + FMA + F16C 的 GEMM/GEMV 引擎，BPE 分词器与 clone/futex 线程池同样手写
- 裸机路径：22 KB 内核可在 qemu、Proxmox、VirtualBox 或真机上直接引导
- 训练器：解析式反向传播加 AdamW，配 Unicode Braille 实时曲线
- 零动态依赖：readelf 显示无 dynamic section，nasm 汇编、ld 链接即可

## 4. 架构与实现

三工程共享 shared/ 目录下的 math.asm、matmul.asm、tokenizer.asm、transformer.asm；裸机版通过 -DBARE_METAL 编译同一份内核代码，因此推理与训练复用同一套数值实现，避免两套代码漂移。

## 5. 上手路径

1. 先跑单元测试确认数学内核在 1e-7 至 1e-6 误差内，再谈性能
2. 用 python3 与 numpy 做一次 .asmbin 导出，核对与参考实现的 logits 差异
3. 裸机路径先在 qemu 里引导，确认 SMP 启动与串口输出正常再上真机
4. 把 AVX2 要求写进部署前提，老 CPU 上不要期待可用的降级路径

## 6. 风险与边界

- 仅 2 天历史，速度与稳定性结论来自单一机型，外部复现样本还很少
- 只覆盖 Qwen3-0.6B 一族，规模一变大，寄存器与缓存策略都要重做
- 汇编可维护性极低，任何模型结构变化都意味着手工改写内核
- AVX2+FMA+F16C 是硬门槛，不支持的老平台无法运行

## 7. 谁该用 / 谁别碰

想彻底搞清推理栈每一层开销的工程师；做嵌入式或极端受限环境部署、需要把依赖压到零的团队。

## 8. 评分依据

热度增速 **95** · 社区规模 **60** · 更新活跃 **74** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：工程价值不在「用汇编写 LLM」这个噱头，而在它提供了一份可逐行对照的最小实现：想验证某个数值或性能假设时，这是比框架源码更短的路径。作为生产栈则不合适，维护成本远高于收益。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-27 · 依据仓库 README 与 GitHub 元数据</sub>
