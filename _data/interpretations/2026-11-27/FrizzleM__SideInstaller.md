---
date: 2026-11-27
repo: FrizzleM/SideInstaller
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Swift
stars: 2116
starGain: 292
url: https://github.com/FrizzleM/SideInstaller
tags: [exploit, ios, ipa, sideloading, sidestore]
generatedAt: 2026-11-27T01:52:46.331Z
---

# FrizzleM/SideInstaller · 项目解读

> **一句话**：把 sideload 必须插电脑这一步去掉：配对与签名都在手机上完成。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Swift |
| 星标 | 2,116 |
| 今日新增 | +292 |
| 仓库 | https://github.com/FrizzleM/SideInstaller |

## 1. 它解决什么问题

在 iOS 上装 SideStore 或 LiveContainer 本身不复杂，复杂的是必须有一台电脑跑桌面工具完成配对与 provisioning；没有电脑的用户直接被挡在门外。

## 2. 为什么是现在

158 天、2,116 星、175 fork、日增 +292，Swift。它把配对、描述文件与安装流程全部搬进手机，完成后即得到可自签应用的整套环境；要求 iOS 27+（iOS 17.4+ 需配对文件），首次需 Wi-Fi。

## 3. 关键能力

- 全设备内完成：配对、provisioning 与安装无需电脑
- 一次装好 SideStore 与 LiveContainer 两件套
- Apple 账号凭据本地使用，不上传
- 适配 iOS 27+，旧版本可用配对文件方案
- 开源，便于自行审计流程

## 4. 架构与实现

Swift 编写的 iOS 应用，借助 rootshell 取得必要能力，再通过设备内网络完成与 Apple 服务的配对与签名；Open Minis 与 LocalDevVPN 构成链路中的辅助环节。

## 5. 上手路径

1. 先备好配对文件（旧系统）或确认 iOS 27+ 环境
2. 严格按 README 的步骤顺序执行，跳步会导致签名失败
3. 只在自己的设备与账号上试用，不要使用他人凭据
4. 装好后记录一次完整恢复流程，系统更新可能重置状态

## 6. 风险与边界

- 许可未标准化（NOASSERTION），二次分发与商用边界不清
- 依赖 rootshell / Open Minis / LocalDevVPN 多步链路，任一环变化都会失效
- 涉及 Apple 账号凭据与系统策略边界，账号风险需自行承担
- 系统更新随时可能阻断，长期可用性不稳定

## 7. 谁该用 / 谁别碰

手上只有 iPhone、需要自签应用环境的用户；研究 iOS 设备内签名的开发者。

## 8. 评分依据

热度增速 **96** · 社区规模 **62** · 更新活跃 **68** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它盯住的是一个被忽略的门槛：不是技术难度，而是「必须有第二台设备」。日增 +292 证明需求真实；但链路过长与授权模糊，决定了它更像阶段性方案而非长期工具。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-27 · 依据仓库 README 与 GitHub 元数据</sub>
