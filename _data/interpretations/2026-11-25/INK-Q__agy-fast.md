---
date: 2026-11-25
repo: INK-Q/agy-fast
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: TypeScript
stars: 1201
starGain: null
url: https://github.com/INK-Q/agy-fast
tags: [ai-agent, ai-coding, antigravity, antigravity-cli, antigravity-ide, antigravity-plugins, coding-agent, context-optimization]
generatedAt: 2026-11-25T02:41:50.438Z
---

# INK-Q/agy-fast · 项目解读

> **一句话**：给 Google Antigravity 加速的 MCP 插件：把高频调用合并成批量本地操作。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 1,201 |
| 今日新增 | — |
| 仓库 | https://github.com/INK-Q/agy-fast |

## 1. 它解决什么问题

agent CLI 的高频小调用（搜索、符号查找、单文件编辑、跑测试）每轮都产生固定开销：轮次多、token 计费重、上行流量大，且可能触发输出落盘溢出拖慢会话。

## 2. 为什么是现在

1,201 星、上线仅 6 天、TypeScript、MIT、32 个 issue。Antigravity 生态刚起步，官方尚未提供调用合并能力；它给出的实测口径（轮次 -34%、token -31%、上行 -40%）与「不改动原生 UI 与安全检查」的约束在这个时间点直接切中痛点。

## 3. 关键能力

- 高频搜索、多语言符号大纲、原子化多文件编辑、构建/测试检查合并为批量本地调用
- 会话开始注入一次 50 ms 以内的工作区快照，固定开销约 1.7k token（自第二轮走缓存）
- 实测：同会话对照 v0.2.1，有效吞吐 35.1 → 61.5 tok/s，60 秒卡死轮次 31.2% → 7.4%
- 严格 8.8 KB UTF-8 内联上限，134 次连续调用零落盘溢出
- 单次最多 20 条混合查询（text、regex、glob、fuzzy、只读 git stat）

## 4. 架构与实现

以 MCP 插件形态挂在 Antigravity 的工具协议上：本地合并请求、批量执行、压缩返回；schema 直接内联进 rules/AGENTS.md 避免 schema 读取轮次；对原生 UI、diff 视图、检查点零改动。

## 5. 上手路径

1. 按 Quick Start 安装后先跑一次基准：记录未装时的轮次与 token 消耗
2. 同会话对照装前装后的有效吞吐，注意作者口径是自建基准，需用自己项目复测
3. 观察单次内联 8.8 KB 上限的实际触发频率，超出部分的行为是否符合预期
4. 核对 quota 加权口径（输入 1.0×、缓存读 0.1×、输出 5.0×）与自己账单的一致性

## 6. 风险与边界

- 指标来自作者自建对照样本，不同项目结构与工具使用模式的收益差异大
- 政策合规性声明（policy-compliant）依赖 Antigravity 侧未变动，上游更新可能失效
- 批量调用的失败重试语义需要读文档确认，错误恢复路径尚新
- 6 天新仓，长期稳定性未经检验

## 7. 谁该用 / 谁别碰

Antigravity 重度用户，尤其是关注 token 账单与卡顿的开发者。

## 8. 评分依据

热度增速 **91** · 社区规模 **56** · 更新活跃 **79** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把省 token 做在调用结构层而非 prompt 层是正确方向，数字口径也给出了复算方式；先用自己项目复测收益再长期依赖，对上游更新的敏感性保持关注。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
