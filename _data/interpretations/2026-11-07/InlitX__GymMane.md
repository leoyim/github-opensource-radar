---
date: 2026-11-07
repo: InlitX/GymMane
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Dart
stars: 1545
starGain: 153
url: https://github.com/InlitX/GymMane
tags: [android, bodybuilding, dart, exercises, f-droid, fitness, flutter, gym]
generatedAt: 2026-11-07T03:29:20.658Z
---

# InlitX/GymMane · 项目解读

> **一句话**：把健身记录做成一个不需要账号、不联网、不看广告的纯本地 Android 应用。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Dart |
| 星标 | 1,545 |
| 今日新增 | +153 |
| 仓库 | https://github.com/InlitX/GymMane |

## 1. 它解决什么问题

健身类 App 大多要求注册、同步与订阅，训练时却只需要三件事：记下这次练了什么、每组做了多少、下次该加多少重量。把云端账户、广告与社交功能去掉，反而能把离线可用性与数据主权还给使用者，代价是跨设备同步与社区能力一并放弃。

## 2. 为什么是现在

项目 94 天、1,545 星，本期 +153，是本期榜单里少数 ≤100 天的新仓，也是跨端方向唯一的新项目。README 用「Tap the muscles you want to train, log your sets and watch your numbers go up」概括交互，功能覆盖身体部位图选择、组次与重量、休息计时、进阶组型、进度曲线与营养模块（beta）。在几乎全是老牌底座的本期榜单里，它是少见的「小而完整的个人工具」。

## 3. 关键能力

- 在身体部位图上点选肌群生成训练，记录组数、重量与自带音效的休息计时
- 支持热身组、递减组、力竭组、休息暂停组与集群组，可用 RPE 或 RIR 标注强度
- 超级组、单侧配重、例行计划与每周安排或轮换
- 按动作做进阶计算，由 App 给出下一次建议重量；统计容量、连续天数、周目标与个人纪录
- 力量曲线含估算 1RM 与相对体重力量，另有营养模块（beta）与隐私说明

## 4. 架构与实现

Dart / Flutter 实现、GPL-3.0 许可，94 天、164 fork、29 个开放议题。README 分 What it does、Training、Progress、Exercises and tools、Your data、Nutrition (beta)、Download、Privacy、Contributing、Support 等章节，明确「no account, no ads, no internet」，说明数据完全留在设备本地、无服务端依赖；界面截图均为真机直出。功能按「训练 → 记录 → 进步」三段组织，进阶计算与力量曲线是主要逻辑，具体实现以源码为准。

## 5. 上手路径

1. 从 F-Droid 或项目 Download 章节装到 Android 设备，先不开任何网络权限试用
2. 用一个完整训练周期记录组次与重量，验证进阶建议是否符合自己的训练习惯
3. 查看 Progress 里的容量、PR 与力量曲线，确认统计口径与预期一致
4. 如需换机，先确认 Your data 章节给出的本地数据导出与备份方式

## 6. 风险与边界

- 纯本地意味着没有云同步与跨设备使用，换机或数据丢失需自行备份
- 项目仅 94 天、29 个开放议题，长期维护节奏与功能稳定性尚待观察
- GPL-3.0 许可对再分发有明确要求，二次开发需遵守相应条款
- 营养模块标注为 beta，进阶与 1RM 估算属参考值，不应作为训练或医学判断依据

## 7. 谁该用 / 谁别碰

重视隐私与离线可用、只想安静记录训练数据的 Android 用户与健身爱好者。

## 8. 评分依据

热度增速 **91** · 社区规模 **60** · 更新活跃 **64** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把账号、广告、联网全部拿掉之后，剩下的功能反而更聚焦。适合不需要同步、反感订阅制的个人用户；若依赖多设备或教练协作，本地优先的取舍会成为限制。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-07 · 依据仓库 README 与 GitHub 元数据</sub>
