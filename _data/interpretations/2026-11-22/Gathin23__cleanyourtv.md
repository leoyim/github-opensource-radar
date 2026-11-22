---
date: 2026-11-22
repo: Gathin23/cleanyourtv
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4.5
language: Python
stars: 60096
starGain: 216
url: https://github.com/Gathin23/cleanyourtv
tags: [adb, adblock, android-tv, android-tv-launcher, apple-tv, bloatware-removal, claude-code, debloat]
generatedAt: 2026-11-22T02:08:13.737Z
---

# Gathin23/cleanyourtv · 项目解读

> **一句话**：给电视做系统级精简与桌面替换，并自带恢复路径。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 60,096 |
| 今日新增 | +216 |
| 仓库 | https://github.com/Gathin23/cleanyourtv |

## 1. 它解决什么问题

Android / Google TV 的预装应用与广告位多数无法在设置里关闭，用户想换一个干净的桌面又担心把 HOME 响应者卸掉后设备变砖。

## 2. 为什么是现在

本期 60,096 星、7,879 fork、当日新增 216 星，是 agent 方向少见的面向消费电子设备的项目。README 用大量篇幅写保护逻辑与恢复步骤，说明作者把「别把电视弄坏」放在功能之前。

## 3. 关键能力

- 通过 Wi-Fi 与 ADB 批量精简预装应用
- 若列表含持有 HOME 的应用且无其他应用响应 HOME 则跳过；Google TV 上保留 setupwraith 期间的 Home 拥有者
- 替换类 Apple TV 风格桌面，支持自定义主题、照片轮播与 config.json 旋转配置
- 覆盖手工操作、恢复、固件升级后的处理与常见问题
- 提供多语言 README 与官方链接澄清

## 4. 架构与实现

以 ADB 为执行通道，在本地按设备型号组装保留/移除清单后推送；桌面以自定义 launcher 承载，主题为配置目录，推送后重启一次 Home。官方明确只认可 cleanyour.tv 与本仓库，且不在任何应用商店发布 App。

## 5. 上手路径

1. 先通读 Supported TVs 与 Restoring your TV 两节
2. 确认设备已开启无线调试并能在电脑上 adb connect
3. 按文档做一次完整备份，再跑最小范围的精简
4. 验证 HOME 与设置入口正常后，再考虑替换桌面与主题

## 6. 风险与边界

- 卸载预装或替换 Home 可能让设置、语音或投屏入口失效
- 不同厂商固件差异大，保护逻辑未必覆盖所有机型
- 固件升级后可能重置配置，需要按文档重新处理
- README 列出多个同名非官方域名，误装第三方包风险需自行规避

## 7. 谁该用 / 谁别碰

熟悉 ADB、能接受自行恢复设备的进阶用户；把电视作为家庭唯一影音入口且不想承担恢复成本的人建议不动。

## 8. 评分依据

热度增速 **90** · 社区规模 **91** · 更新活跃 **62** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：保护逻辑与恢复文档是它比同类脚本更靠谱的地方；但操作仍是系统级改动，备份与验证比功能本身更重要。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
