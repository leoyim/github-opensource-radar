---
date: 2026-11-11
repo: HolyArrs/HolyArrs
category: backend
categoryLabel: 后端 / 云原生
rating: 4
language: Go
stars: 588
starGain: null
url: https://github.com/HolyArrs/HolyArrs
tags: [docker, homelab, jellyfin, media-server, plex, self-hosted]
generatedAt: 2026-11-11T03:04:52.682Z
---

# HolyArrs/HolyArrs · 项目解读

> **一句话**：把 Sonarr、Radarr、Lidarr、Prowlarr、Bazarr、Seerr 六个媒体自动化应用合并成一个 15MB 的容器。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Go |
| 星标 | 588 |
| 今日新增 | — |
| 仓库 | https://github.com/HolyArrs/HolyArrs |

## 1. 它解决什么问题

一套自托管媒体库通常要并排跑六个应用：剧集、电影、音乐、索引器、字幕、请求各一个。六个登录、六个端口、六个更新周期，还要在它们之间互抄 API Key；某部剧没下载成功时，得挨个查六个地方才知道断在哪一环。

## 2. 为什么是现在

仓库上线仅 1 天即 588 星、27 fork、76 个 issue——issue 密度极高，说明首批用户已经在真实环境里迁移并暴露问题。README 给出的对比是可核对的：六个应用 amd64 镜像合计 718.2MB，HolyArrs 为 14.9MB，空闲内存约 140MiB（1 万部标题、5.5 万集），数据标注了测量日期与镜像来源。

## 3. 关键能力

- 浏览、请求、审批一体：像流媒体应用一样浏览，悬停播放预告片，一键提交请求
- Pick 规则：按体积、质量、语言决定哪个发布胜出，替代质量配置的层层继承
- 字幕按选定语言随文件保存（在线查找安排在 1.0 之后）
- 播出日历：追踪所有在追剧集的下一集时间
- 从 Sonarr/Radarr/Lidarr/Prowlarr/Bazarr/Seerr/Overseerr/qBittorrent/SABnzbd 迁移配置，支持先试跑再执行、事后可撤销
- 兼容既有生态：qBittorrent、Transmission、Deluge、SABnzbd、NZBGet 下载器；Plex、Jellyfin、Emby 媒体服务器；任意 Torznab/Newznab 索引器或 Prowlarr/Jackett
- 旧应用 API 兼容：开启后 Prowlarr 可继续向它推送索引源

## 4. 架构与实现

Go 实现，AGPL-3.0 许可，单容器镜像约 15MB，暴露单一端口 6262，amd64/arm64/armv7 三架构。设计上把「索引源 → 选择规则 → 下载器 → 媒体库」收敛进一个进程，用内置元数据服务替代逐应用的 API Key 配置；迁移器只读旧应用、不改动其数据，允许并行运行一段时间再切换。

## 5. 上手路径

1. 在本地磁盘新建目录，写入 README 的 docker-compose.yml，按实际路径改挂载点
2. docker compose up -d 后访问 6262 端口，创建 owner 账号
3. 按引导配置媒体目录、下载器与索引源（Source）
4. 若已在跑 Sonarr 等旧应用，用 Settings → Move from other apps 先 Try it 再 Move
5. 确认媒体服务器能在文件落盘后收到通知，再停用旧应用

## 6. 风险与边界

- 上线仅 1 天、76 个 open issue，处于高频修复期，不建议直接替换稳定运行多年的旧组合
- 字幕在线查找要等 1.0，当前需自备字幕来源
- 迁移器虽可撤销，但库路径、命名规则与质量配置的语义映射仍可能偏差
- 元数据依赖项目自建服务器，服务不可用时浏览与匹配会受影响
- 媒体库自动化涉及内容来源合法性，使用者需自行确保索引源与下载内容符合当地法规与版权要求

## 7. 谁该用 / 谁别碰

已经自建 Plex/Jellyfin/Emby、被六件套的运维成本困扰的家庭实验室用户；以及想研究「如何把多个成熟单体合并成一个进程」的 Go 工程师。

## 8. 评分依据

热度增速 **95** · 社区规模 **49** · 更新活跃 **87** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：它抓的痛点是真实的：六个应用的维护成本远高于功能本身。把镜像从 718MB 压到 15MB、端口从六个收到一个，是能被验证的工程收益。但 1 天、76 个 issue 意味着它还在早期，适合当并行试验田，不适合立刻替换跑了多年的旧组合。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
