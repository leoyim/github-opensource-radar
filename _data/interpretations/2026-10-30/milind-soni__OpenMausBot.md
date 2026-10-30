---
date: 2026-10-30
repo: milind-soni/OpenMausBot
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4.5
language: TypeScript
stars: 7507
starGain: 1199
url: https://github.com/milind-soni/OpenMausBot
tags: [ai-agents, claude-code, codex, computer-use, docker, electron, expo, grok]
generatedAt: 2026-10-30T01:49:59.370Z
---

# milind-soni/OpenMausBot · 项目解读

> **一句话**：bot 不用你的 API key，它用你机器上已登录的 CLI。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 7,507 |
| 今日新增 | +1,199 |
| 仓库 | https://github.com/milind-soni/OpenMausBot |

## 1. 它解决什么问题

托管式「AI 助手团队」有两个结构性代价：每个 bot 都要为 token 付费，且数据与能力都锁在平台侧。OpenMausBot 反转这个模型——bot 跑你本机已经装好并登录的 claude / codex / grok CLI，由一个本地 harness 统一托管进程、转录与密钥，于是成本、数据与能力都留在本地。

## 2. 为什么是现在

今日 +1,199 星，79 天，本期移动类日增第一、全榜第二。同期 coucou（刘海批准权限）、nyaterm（命令卡片）、shannon（只认 PoC）都在处理同一个问题：agent 有了手脚之后，权限与审计怎么管。OpenMausBot 的答案是「隔离虚拟机 + 本地 harness」。

## 3. 关键能力

- 自带 agent：直接驱动本机已装的 claude、codex、grok CLI
- 聊天应用形态，多 bot 组队协作
- 本地 harness 服务跑在 127.0.0.1，托管进程、转录与密钥
- 每个 bot 可获得云端 Linux 桌面或隔离的本地虚拟机作为执行环境
- 跨平台客户端（Electron 桌面 + Expo 移动）
- 不依赖平台方 API 计费，用你已有的 CLI 额度

## 4. 架构与实现

核心是一个本地 harness 服务：它在 127.0.0.1 上管理每个 agent 子进程的生命周期，保存转录、密钥与配置；客户端只是聊天前端，通过本地接口驱动 bot。执行侧为虚拟机或云桌面，与宿主文件系统隔离，避免 bot 直接操作你的机器。

## 5. 上手路径

1. 先只接一个 CLI，验证 token 复用与并发行为——多 bot 并发会争抢同一份登录态
2. 隔离环境必须先开：让 bot 直接访问宿主目录等于把整台机器交给它
3. 明确「谁能给 bot 发消息」的准入机制，这是最容易忽略的攻击面
4. 先定转录留存与清理策略，再积累数据

## 6. 风险与边界

- 复用本机 CLI 登录态意味着一处泄漏全部沦陷，凭据爆炸半径极大
- 多 bot 并发对 CPU 与内存要求高，笔记本上很容易拖垮
- 79 天的项目，VM 隔离实现需自行审计，不能默认安全
- 云端桌面方案涉及数据出境与合规问题

## 7. 谁该用 / 谁别碰

想自建多 agent 团队、且有能力管好本机权限与隔离边界的开发者。普通用户直接买托管服务更省心。

## 8. 评分依据

热度增速 **99** · 社区规模 **74** · 更新活跃 **76** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：架构思路值得抄：本地 harness 管进程、VM 管执行。生产使用前先算清「CLI 凭据泄漏」的爆炸半径。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-30 · 依据仓库 README 与 GitHub 元数据</sub>
