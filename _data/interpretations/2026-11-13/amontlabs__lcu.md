---
date: 2026-11-13
repo: amontlabs/lcu
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: JavaScript
stars: 2417
starGain: null
url: https://github.com/amontlabs/lcu
tags: [accessibility, agent-skills, browser-automation, claude-code, codex-cli, computer-use, desktop-automation, library]
generatedAt: 2026-11-13T02:11:25.742Z
---

# amontlabs/lcu · 项目解读

> **一句话**：把 Codex 的 computer-use 运行时从桌面应用里解耦出来，交给任意 harness 使用，审批仍留在本地。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 2,417 |
| 今日新增 | — |
| 仓库 | https://github.com/amontlabs/lcu |

## 1. 它解决什么问题

桌面自动化能力常被锁在某个官方客户端里：换一个编码 agent 就用不上，权限提示也只在原应用内出现。缺的是一层适配层，把运行时接出来，同时保留「哪个应用可以被控制」这道必须有人在场的确认。

## 2. 为什么是现在

51 天录得 2,417 星、163 fork，与 esp32-iphone-agent 一起构成本期「让 agent 接触真实设备」的两种低成本路径：一个走硬件，一个走运行时解耦。

## 3. 关键能力

- 暴露 Codex 原有的 computer-use 运行时：读取窗口、点击、输入与截图；启用 Chrome 后可通过官方扩展按站点批准读写标签页
- 为 Pi、Codex CLI、Claude Code 提供 adapter，另有 Oh My Pi、Hermes、DeepSeek Harness、Junie 的实验性接入
- 每个应用首次被控制时由运行时发起授权，可在 Claude Code 中通过 lcu-approve 以原生方式询问
- 已批准应用可用 Touch ID 管理；列表查询不需要在场，allow 与 revoke 必须由本机操作，agent 无法自行绕过
- 支持在会话之间保留 Computer Use 状态，并单独提供 Chrome 与计算机音频录制的启用步骤

## 4. 架构与实现

LCU 负责安装、配置与 harness 集成，真正的 computer-use 运行时与指令仍由本机已安装的官方 ChatGPT 桌面应用提供，因此不需要 Codex 认证但依赖该应用存在。JavaScript 实现，MIT 许可，README 含 Quick start、Permissions、Requirements、Pi commands 与 Documentation。

## 5. 上手路径

1. 确认本机已安装官方 ChatGPT 桌面应用，按最新 release 走一遍安装与配置
2. 先只授权一个无敏感数据的应用，验证点击、输入与截图链路
3. 在所用 harness 里装对应 adapter，观察跨轮次状态是否按预期保留
4. 定期检查已批准应用列表，撤下不再需要的条目

## 6. 风险与边界

- 依赖第三方桌面应用提供的运行时，其版本变化或服务条款调整都可能影响可用性
- 把桌面控制权交给 agent 意味着屏幕上的账号与数据都会进入可触达范围，测试账号应隔离
- README 注明 Junie adapter 无法弹出逐应用确认，会自行执行 allow 且批准持续到撤销，该路径的边界明显更宽
- Touch ID、.app 路径等描述以 macOS 为主，其他平台支持程度需实测
- 51 天新仓且暂无 open issue，社区验证与长期维护情况仍待观察

## 7. 谁该用 / 谁别碰

研究 computer-use 运行时复用、跨 harness 适配器与本地授权模型的开发者；也适合在隔离环境里做桌面自动化实验的人。生产环境无人值守控制真实账号不适用。

## 8. 评分依据

热度增速 **96** · 社区规模 **62** · 更新活跃 **51** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把「能力从哪个应用来」与「由哪个 agent 使用」分开，且坚持授权动作必须由本机完成，这是设计上最值得看的一点。局限也清楚：仍依赖官方桌面应用，个别 adapter 的永久批准会削弱原本的边界。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-13 · 依据仓库 README 与 GitHub 元数据</sub>
