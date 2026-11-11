---
date: 2026-11-11
repo: BareBrowser/bare-browser
category: frontend
categoryLabel: 前端 / Web
rating: 3.5
language: Python
stars: 823
starGain: null
url: https://github.com/BareBrowser/bare-browser
tags: [adblock, android, android-browser, browser, browser-extensions, chromium, degoogled, mobile-browser]
generatedAt: 2026-11-11T03:04:52.682Z
---

# BareBrowser/bare-browser · 项目解读

> **一句话**：基于 Chromium 157 的 Android 浏览器分支：移除账号、遥测与内置 AI，保留桌面扩展与完整 uBlock Origin。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Python |
| 星标 | 823 |
| 今日新增 | — |
| 仓库 | https://github.com/BareBrowser/bare-browser |

## 1. 它解决什么问题

主流 Android 浏览器把账号体系、遥测与推荐流嵌进内核，用户既无法关闭，也难以判断哪些数据被回传。想装桌面扩展、想用完整版 uBlock Origin、想在息屏时继续播放视频，这些需求在官方 Chromium 分支里通常得不到支持。

## 2. 为什么是现在

87 天、823 星、115 个 open issue——issue 数量相对星标偏高，说明真实用户在多设备上踩到问题并在反馈。README 给出的构建差异是可核对的具体数字：295 个补丁、860 个文件、44,691 行新增、3,210 行删除，基线为 Chromium 157.0.8103.46。这种把「改了多少」写清楚的做法，比笼统宣称「更注重隐私」更有说服力。

## 3. 关键能力

- 移除 Google 登录、浏览器遥测与内置 AI 功能，保留扩展体系
- 默认内置完整版 uBlock Origin，可停用或卸载；支持从 Chrome 应用商店、CRX 文件或解包目录安装桌面扩展
- 地址栏可置于顶部或底部，工具栏按钮可逐个指定，标签页支持抽屉、缩略图与列表视图
- 翻译走用户自填的 LibreTranslate 兼容服务；Google 翻译作为独立选项默认关闭
- 无痕模式可用指纹或面容加锁，连续 1/3/5 次解锁失败后擦除，可禁止截图
- 安全项可开：强制安全连接、拦截第三方 Cookie、WebRTC 隐藏本地地址、加固 JavaScript
- 息屏继续播放受支持的视频，可从页面保存媒体或转交其他下载管理器

## 4. 架构与实现

BSD-3-Clause 许可，基于 Chromium 157 的 Android 分支，仅提供 arm64 与 32 位 ARM，无 x86 构建，要求 Android 10 及以上。补丁规模（295 个补丁、860 个文件）说明它不是简单换皮，而是持续维护内核级改动——这意味着每次跟随上游大版本都要重新适配，长期维护成本高，也解释了大量 open issue 的来源。

## 5. 上手路径

1. 从 GitHub Releases 取对应架构的 APK（arm64 或 32 位 ARM），或从 Google Play 安装
2. 首次启动后进设置逐个确认安全项，尤其是 WebRTC 与第三方 Cookie 策略
3. 需要扩展时从 Chrome 应用商店或本地 CRX 安装，并在扩展管理页确认启用状态
4. 把常用底栏按钮与地址栏位置调好，再用一两周观察是否有站点兼容问题
5. 遇到播放或下载异常时先查 issue 列表，同类问题通常已有绕行方案

## 6. 风险与边界

- 无 x86 构建，模拟器与部分平板无法运行；Android 10 以下不支持
- 内核级分支需要跟随 Chromium 上游持续 rebase，版本节奏可能落后官方安全更新
- 115 个 open issue 说明站点兼容与设备适配仍有毛刺，不适合要求零故障的主力机
- 关闭遥测与账号体系后，部分依赖 Google 服务的能力（如推送）需改用第三方分发应用
- 侧载 APK 需自行校验签名与来源，第三方镜像站存在被篡改风险

## 7. 谁该用 / 谁别碰

在意移动端隐私与可控性、愿意接受少量兼容性毛刺的 Android 用户；以及想研究「如何在一个成熟内核上做系统性裁剪」的客户端工程师。

## 8. 评分依据

热度增速 **87** · 社区规模 **51** · 更新活跃 **63** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它的价值在于把「移除了什么」量化到补丁与代码行，而不是停在口号。代价同样明确：内核分支的维护负担会长期存在，115 个 open issue 就是这份账单的一部分。适合当第二浏览器与隐私实验场，不适合要求绝对稳定的唯一主力。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
