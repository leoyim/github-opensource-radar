---
date: 2026-11-12
repo: JosssphZhou/poki
category: ai
categoryLabel: AI / 大模型
rating: 4
language: Swift
stars: 979
starGain: 58
url: https://github.com/JosssphZhou/poki
tags: [ai-agents, automation, ios, iphone, mcp, model-context-protocol]
generatedAt: 2026-11-12T02:26:30.915Z
---

# JosssphZhou/poki · 项目解读

> **一句话**：一根 USB 线加一个本地 MCP server，让 agent 直接操作一台没越狱的真 iPhone。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Swift |
| 星标 | 979 |
| 今日新增 | +58 |
| 仓库 | https://github.com/JosssphZhou/poki |

## 1. 它解决什么问题

让 agent 操作移动端，过去要么依赖云真机农场，要么要求越狱、额外硬件或私有 API；这些条件把「试一个自动化想法」的门槛抬得很高，也让数据必须离开本机。缺的是一条本地、可复现、边界清楚的真机控制通道。

## 2. 为什么是现在

6 天 979 星、181 fork、54 issue，是本期最年轻的入榜项目之一。它把 MCP 从「给 agent 接工具」推进到「给 agent 接一台物理设备」，且明确以免越狱、免额外硬件为设计前提，正赶上 MCP 生态向设备侧外扩的窗口。

## 3. 关键能力

- 内置 install-iphone skill 引导 agent 自动执行 bin/install-iphone.mjs，人只需完成 Apple Account 输入、信任、开发者模式与自动化模式等系统强制步骤
- Mac 侧本地 MCP server 把设备操作暴露给 agent，可直接下任务试跑；提供预编译 macOS arm64 包
- Poki 键盘与相关配套，支持在真机上完成输入与界面操作流程
- 全流程无需越狱、无需 root、无需额外硬件，Apple 免费账号即可签名安装
- README 附 Quick start、Docs、Roadmap 与 Disclaimer，把前置条件和边界写在同一处

## 4. 架构与实现

iPhone 侧是 Swift 应用，Mac 侧是本地 MCP server，二者通过 USB 与一个把 10.7.0.1 路由回手机的兼容 VPN / 代理 app（README 举例 Karing、Shadowrocket）连通。要求 macOS 14+、Node.js 24+、iOS 18+ 与 USB 数据线；AGPL-3.0 许可。

## 5. 上手路径

1. 确认 Mac、Node 与 iOS 版本满足要求，准备 USB 数据线与可用于签名安装的 Apple Account
2. 让 agent 按 install-iphone skill 执行安装脚本，按提示逐项完成系统侧确认
3. 在 iPhone 上首次打开时进入自动化模式并输入设备密码，随后连通 MCP server
4. 先给一个不涉及敏感账号的只读任务试跑，再逐步扩大操作范围

## 6. 风险与边界

- 免费 Apple Account 签名的应用有有效期，需要周期性重装；开发者模式与自动化模式也是持续前置条件
- 依赖第三方 VPN / 代理 app 做回环，配置不当会直接导致连不通，且这类 app 自身权限较大
- 让 agent 操作真机意味着消息、账号与支付界面都可能被触达，强烈建议只用测试机与测试账号
- 仅支持 macOS + iOS 18+，6 天新仓、54 个 issue，MCP 接口与能力清单仍在变化
- AGPL-3.0 与 iOS 分发形态之间的适配关系，二次分发前需自行确认

## 7. 谁该用 / 谁别碰

做 iOS 自动化、端到端测试与 agent 设备工具链的开发者与测试团队。拿日常主力机直接接 agent、或在没有隔离账号的情况下跑自动化任务，都不合适。

## 8. 评分依据

热度增速 **78** · 社区规模 **57** · 更新活跃 **83** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把真机控制从云端和越狱里拉回本地，路径清晰、前置条件也写得很直白。真正的门槛不是 MCP，而是签名有效期、回环网络与「这台机上有什么」三件事。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-12 · 依据仓库 README 与 GitHub 元数据</sub>
