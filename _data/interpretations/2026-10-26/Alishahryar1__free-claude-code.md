---
date: 2026-10-26
repo: Alishahryar1/free-claude-code
category: tools
categoryLabel: 开发工具 / 效率
rating: 4.5
language: Python
stars: 63599
starGain: 358
url: https://github.com/Alishahryar1/free-claude-code
tags: []
generatedAt: 2026-10-26T11:59:07.500Z
---

# Alishahryar1/free-claude-code · 项目解读

> **一句话**：一个本地代理，把 61 家 provider 的免费额度接给 12 种 coding agent。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 63,599 |
| 今日新增 | +358 |
| 仓库 | https://github.com/Alishahryar1/free-claude-code |

## 1. 它解决什么问题

免费额度散落在各家 provider：注册、限流、模型名、客户端兼容性全不一样，而 coding agent 又各自只认特定接口。这个项目在中间放一层代理：统一模型目录 + 客户端适配 + 额度耗尽后的自动切换。

## 2. 为什么是现在

今日 +358 星。它是本期工具类第二个「明牌省钱」的项目（另一个是 caveman 的 token 压缩），说明成本已经成为 agent 落地的主要摩擦点。

## 3. 关键能力

- 统一模型目录：61 家 provider 的免费/付费/订阅/本地模型在一个可搜索界面里
- 客户端适配：Claude Code、Codex、Pi、OpenCode、Cline、Aider、Antigravity CLI、VS Code Chat 等 12 种
- 故障切换：重试耗尽后自动换下一个已配置模型
- token 压缩：RTK 过滤常见命令输出、Headroom 压缩工具结果（宣称最高降 90%）
- 浏览器内原生 Code 会话（可选文件夹、前后台运行）
- 多通道入口：终端、桌面、IDE、Discord/Telegram、语音输入（本地 Whisper 或 NVIDIA NIM）

## 4. 架构与实现

Python 实现，本地起代理服务并改写各 agent 的 base_url 与模型映射；README 有 Providers / Clients / Integrations / Manage 四段式说明。项目明确声明「与 Anthropic 无关联」，并称遵循 provider 条款、条款不允许时会移除对应集成。

## 5. 上手路径

1. 先只接一家 provider（如 NVIDIA NIM 或本地 Ollama）跑通一个 agent，确认代理链路
2. 再做故障切换测试：手动让主 provider 失败，看是否按预期切到下一个
3. 把 token 压缩功能单独开关做 A/B，避免它掩盖真实消耗

## 6. 风险与边界

- 许可证为 NOASSERTION，商用与二次分发前必须确认授权
- 「每月 13 亿免费 token」是自述，且免费额度随时可能被 provider 收回
- 把账号 key 集中在一个本地代理里，一旦泄露影响面覆盖所有 provider

## 7. 谁该用 / 谁别碰

适合想低成本试多种模型与 agent 的个人开发者；公司环境使用需法务确认各 provider 条款，且不应作为生产链路的唯一入口。

## 8. 评分依据

热度增速 **98** · 社区规模 **92** · 更新活跃 **69** · 工程成熟 **65**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：它解决的是真实的成本摩擦，工程也做得细（12 种 client + 故障切换）；但「免费」是这个项目最不稳定的一层，别把它写进长期架构。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
