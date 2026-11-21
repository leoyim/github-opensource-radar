---
date: 2026-11-21
repo: phone-harness/phone-harness
category: tools
categoryLabel: 开发工具 / 效率
rating: 4
language: Python
stars: 5393
starGain: 198
url: https://github.com/phone-harness/phone-harness
tags: [agent, ai, automation, developer-tools, mobile-ai, mobile-development]
generatedAt: 2026-11-21T12:26:36.590Z
---

# phone-harness/phone-harness · 项目解读

> **一句话**：不越狱、不装 App，让 agent 直接操作你的真机。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Python |
| 星标 | 5,393 |
| 今日新增 | +198 |
| 仓库 | https://github.com/phone-harness/phone-harness |

## 1. 它解决什么问题

让 agent 操作手机通常要越狱、打包测试版或用模拟器。真机上的账号、通知与系统交互无法被可靠复现，自动化测试与「帮我点一下」类需求都受限。

## 2. 为什么是现在

5,393 星、561 fork、105 天，当日 +198，综合分 83.6。它用系统自带的镜像与无障碍能力绕开改造手机，思路在同类里更轻。

## 3. 关键能力

- iPhone 侧抓取镜像窗口、Vision OCR 读屏并注入点击/滑动/输入
- Android 侧 adb 截图与无障碍树取文本，USB 或 Wi-Fi 连接
- 浏览器实时观看 agent 操作过程
- 无需越狱、无需 Xcode、手机端零安装
- 云版本提供托管真机，支持多设备

## 4. 架构与实现

主机侧运行 harness，iPhone 走镜像 + OCR + 事件注入，Android 走 adb + 无障碍树，统一为「读屏—决策—操作」的循环供 agent 调用。云版本把同一套能力托管到远端真机，通过 HTTPS 或 adb 接入。

## 5. 上手路径

1. 先用 Android + adb 跑通一次「打开应用并点按」
2. 再在 iPhone 上验证镜像与 OCR 的识别准确率
3. 把常用操作封装成工具，再交给 agent

## 6. 风险与边界

- 涉及账号、支付与隐私操作，权限边界必须自行约束
- iOS 镜像在锁屏时会中断
- 云端真机的数据留存与合规需单独评估

## 7. 谁该用 / 谁别碰

做移动端自动化测试、或想让 agent 代劳真机操作的开发者。

## 8. 评分依据

热度增速 **97** · 社区规模 **71** · 更新活跃 **64** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把「操作手机」这件事的门槛降到了 agent 可及的程度；能力越强，越需要明确它能碰什么、不能碰什么。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-21 · 依据仓库 README 与 GitHub 元数据</sub>
