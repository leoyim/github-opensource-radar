---
date: 2026-11-20
repo: rukamori/ArchiveTune
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Kotlin
stars: 8518
starGain: 123
url: https://github.com/rukamori/ArchiveTune
tags: [android-application, android-studio, foss, jetpack-compose, kotlin, material-design, material-ui, material3]
generatedAt: 2026-11-20T02:13:10.160Z
---

# rukamori/ArchiveTune · 项目解读

> **一句话**：一个把本地音乐与 YouTube Music 收进同一处的 Android 播放器。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Kotlin |
| 星标 | 8,518 |
| 今日新增 | +123 |
| 仓库 | https://github.com/rukamori/ArchiveTune |

## 1. 它解决什么问题

听本地文件用一个播放器、听流媒体用另一个，收藏、歌单与播放状态互不通用；官方客户端功能固定，音质、界面与隐私策略都由服务方决定。

## 2. 为什么是现在

本期 8,518 星、373 fork、185 个 issue，当日 +123，GPL-3.0、已有 444 天历史。README 用 Jetpack Compose + Material 3 把「高性能、注重隐私、功能密集」写成产品定位，同时明确声明不向任何 fork 提供支持——后一条在开源社区里不常见，也提示使用者应按官方发行版评估。

## 3. 关键能力

- Android 上同时支持本地音乐文件与 YouTube Music 内容，统一播放体验
- 基于 Kotlin、Jetpack Compose 与 Material Design 3 构建，界面现代化
- 强调性能、隐私与面向重度使用者的丰富功能集
- 以 FOSS / GPL-3.0 发行，提供官网、下载、截图与支持渠道

## 4. 架构与实现

典型的现代 Android 单应用架构：Kotlin + Jetpack Compose 负责声明式 UI 与 Material 3 主题，播放与媒体会话在 Android 媒体框架之上封装；本地文件与在线内容通过各自的媒体源适配汇入同一播放队列与状态管理，因而收藏、歌单与播放进度可统一呈现。GPL-3.0 保证源码可审阅，但上游明确把支持范围限定在官方发行版。

## 5. 上手路径

1. 从官方渠道安装，先只导入本地音乐库，确认扫描与元数据表现
2. 登录并接入在线内容，检查本地与在线曲目能否混排进同一队列
3. 按自己关心的音质、后台播放与隐私设置逐项核对
4. 若计划自行修改，先读 README 关于 fork 不支持的声明，评估维护责任

## 6. 风险与边界

- 依赖第三方服务的接口，接口变化可能导致在线部分失效
- 上游明确声明不为任何 fork 提供支持、维护或排障，二次分发需自行承担全部维护
- 185 个 open issue 与 GPL-3.0 意味着定制版本需履行相同开源义务
- 使用第三方客户端接入在线服务可能涉及服务条款，使用前应自行核对

## 7. 谁该用 / 谁别碰

以 Android 为主、希望本地与在线音乐统一管理的开源爱好者；需要官方支持保障或企业级分发合规的场景不适用。

## 8. 评分依据

热度增速 **90** · 社区规模 **73** · 更新活跃 **70** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它把本地与在线音乐收进同一个 Compose 应用，属于成熟、功能密集的开源客户端，星标与 issue 量说明有真实用户群。技术上没有特别激进的创新，价值集中在体验整合与可审阅源码。要特别留意上游对 fork 的不支持声明与服务条款风险，这两点决定了它适不适合作为长期依赖。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-20 · 依据仓库 README 与 GitHub 元数据</sub>
