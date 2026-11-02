---
date: 2026-11-02
repo: SimoHypers/limusic
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Rust
stars: 1675
starGain: 159
url: https://github.com/SimoHypers/limusic
tags: [desktop-app, discord-rich-presence, lastfm, music, music-application, music-player, rust, scrobbler]
generatedAt: 2026-11-02T02:17:39.678Z
---

# SimoHypers/limusic · 项目解读

> **一句话**：Rust + Tauri 写的 YouTube Music 桌面客户端：没有 Electron，没有广告，播放走 libmpv。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Rust |
| 星标 | 1,675 |
| 今日新增 | +159 |
| 仓库 | https://github.com/SimoHypers/limusic |

## 1. 它解决什么问题

网页版 YouTube Music 在桌面上的体验一直被两件事拖累：浏览器标签页里的音频要跟几十个页面抢资源，广告插在音频流里无法屏蔽干净。市面上的第三方客户端大多套 Electron，装完就是第二个 Chrome。limusic 的取舍很明确——直连 YouTube 内部 API 取流，用 libmpv 出声，丢掉整个浏览器运行时。

## 2. 为什么是现在

1,675 星、121 天、今日 +159，属于稳步爬坡而非爆点。它起自 Android 端 Metrolist 的播放引擎重写，等于是把一个已验证的播放实现搬到了桌面，功能密度因此高于同期的个人项目：无缝播放、响度归一化、逐字歌词、Last.fm scrobble 都已经做完。

## 3. 关键能力

- 无广告播放：音频流直接取自 YouTube API，广告不在流内
- 搜索与浏览：歌曲、专辑、艺人、歌单与 YTM 首页流，输入即预览
- 账号登录：内置 Google 登录或粘贴 cookie，支持多账号切换
- 媒体库写入：点赞、加入歌单、建/改/删歌单（含封面）、订阅、收藏专辑与艺人、上传内容
- 播放历史按 YouTube Music 自己的日期分桶
- libmpv 提供的无缝播放与响度归一化
- 变速、变调、混响（独立干湿比）并可保存本机预设
- 队列支持 radio / automix 续播、拖拽排序、重启后恢复
- 同步歌词侧栏，逐字对齐并附译文；可选音乐视频占据封面位置

## 4. 架构与实现

前端是 Tauri 的 WebView，后端是 Rust：网络与 YouTube API 交互、mpv 进程管理与音频管线都在 Rust 侧，因此不需要 Node 运行时。播放走 libmpv 意味着解码、无缝衔接、响度归一化都是成熟实现，作者只需处理与 YTM 的数据对齐。多账号、预设、队列状态都落在本机，没有自建服务端。

## 5. 上手路径

1. 优先用 cookie 粘贴登录而不是内置 Google 登录，后者在部分网络下会触发额外验证
2. 多账号场景下把每个账号的媒体库写入操作分开做，避免混淆当前激活账号
3. 要逐字歌词就选有 timing 的源，缺失时只会退化为整行滚动
4. 装完先测 libmpv 是否正常加载，Linux 上缺解码库时表现为无声而非报错

## 6. 风险与边界

- 依赖 YouTube 内部 API，接口或鉴权调整会直接导致播放失败，修复只能等作者跟进
- 直连取流绕开了官方客户端的广告与部分条款约束，账号存在被限流的可能
- GPL-3.0，二次分发与商用需遵守传染性条款
- cookie 粘贴方式等同于把账号凭据交给本地应用，来源不明的构建不要用

## 7. 谁该用 / 谁别碰

桌面听歌为主、对音质与响应速度敏感、又不想装第二个浏览器的用户；以及想研究「Tauri + libmpv」这套组合怎么落地的开发者。重度依赖官方客户端推荐算法的人会不适应。

## 8. 评分依据

热度增速 **92** · 社区规模 **59** · 更新活跃 **67** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：同类里少见的「架构上真省资源」的实现：Tauri + libmpv 换掉了 Electron 的整块开销，功能补得也齐。代价是把命脉交给了对方的内部 API——它好不好用，取决于 YouTube 心情。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-02 · 依据仓库 README 与 GitHub 元数据</sub>
