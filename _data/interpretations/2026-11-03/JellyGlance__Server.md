---
date: 2026-11-03
repo: JellyGlance/Server
category: data
categoryLabel: 数据 / 数据库
rating: 1.5
language: JavaScript
stars: 135
starGain: 0
url: https://github.com/JellyGlance/Server
tags: [analytics, bazarr, docker, jellyfin, jellyfin-dashboard, lidarr, media-server, media-streaming]
generatedAt: 2026-11-03T01:45:02.177Z
---

# JellyGlance/Server · 项目解读

> **一句话**：给 Jellyfin 和 Emby 装一块仪表盘：谁在播、播了什么、库有多大、下载到哪了。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌗 1.5 / 5.0 |
| 语言 | JavaScript |
| 星标 | 135 |
| 今日新增 | +0 |
| 仓库 | https://github.com/JellyGlance/Server |

## 1. 它解决什么问题

自建媒体服务器的人都会遇到同一个落差：Jellyfin 本体功能齐全，但「现在到底在发生什么」很难一眼看到——谁在播什么、转码还是直连、这周看了多少、哪个库最近没更新、下载队列卡在哪、备份有没有跑。官方后台信息密度低，第三方工具又各管一段。JellyGlance 想把这些拼成一块自托管看板。

## 2. 为什么是现在

108 天、135 星，单日增量为 0。它属于典型的长尾自建工具，入选来自 data/analytics 类查询的覆盖结果。值得一提的背景是自建媒体生态的成熟度：Jellyfin、Sonarr/Radarr、Bazarr、Lidarr 这套组合已经形成事实标准，围绕它们的周边工具（看板、请求、下载管理）正在补齐——这个生态的特点是用户黏性极高、付费意愿低但贡献意愿高。

## 3. 关键能力

- 实时会话视图：谁在看、播的什么、播放进度与转码状态
- 观看历史与用户统计
- Recently Added：新入库媒体一览
- 媒体库概览与统计
- 请求（requests）与下载（downloads）状态聚合，可与 Sonarr/Radarr/Bazarr/Lidarr 等周边应用联动
- 日历视图（上映/更新日程）
- webhook 与备份

## 4. 架构与实现

自托管 Web 应用，通过 Jellyfin/Emby 的 REST API 拉取会话与库信息，再聚合周边 *arr 应用的接口，前端做统一呈现。这类工具的技术难点不在采集而在「多源对齐」——同一部剧在 Jellyfin 用 TMDB ID、在 Sonarr 用 tvdbId，跨源合并需要做映射。数据量不大，因此通常单容器 + 轻量数据库即可跑，部署形态以 Docker 为主。

## 5. 上手路径

1. 先确认目标服务的 API key 权限范围，看板只需要只读权限
2. Docker 部署时把时区配好，会话时间与日历视图错位通常源于容器 UTC
3. 若要用请求/下载聚合，逐个别配 *arr 的地址与 key，任一不可达会拖慢整页加载
4. 135 星的小项目，先并行跑一段时间再决定是否替代现有工具

## 6. 风险与边界

- 小项目、单点维护，Jellyfin API 变更后可能长期不跟进
- 需要持有多个周边应用的 API key，等于把媒体栈的凭据集中到一处
- 无日增，社区规模不足以支撑长期维护预期
- 数据看板类工具容易堆积个人观看数据，注意访问控制

## 7. 谁该用 / 谁别碰

自建 Jellyfin/Emby 的用户、家庭媒体中心管理员、以及想把媒体栈状态集中监控的人。

## 8. 评分依据

热度增速 **0** · 社区规模 **37** · 更新活跃 **60** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **1.5 星**）

**结论**：解决了真实但小众的需求，工程质量从 README 看是合格的。但 135 星、零增量的规模意味着它是「够用就好的个人项目」，别指望它跟进上游 API 演进。适合作为自建栈的补件，不适合作为关键依赖。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-03 · 依据仓库 README 与 GitHub 元数据</sub>
