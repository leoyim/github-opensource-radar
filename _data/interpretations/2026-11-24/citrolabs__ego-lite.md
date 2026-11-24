---
date: 2026-11-24
repo: citrolabs/ego-lite
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4
language: JavaScript
stars: 24188
starGain: 150
url: https://github.com/citrolabs/ego-lite
tags: [agent-skills, ai-agent, automation, browser, browser-automation, claude-code, codex, hermes-agent]
generatedAt: 2026-11-24T01:51:51.972Z
---

# citrolabs/ego-lite · 项目解读

> **一句话**：给 agent 单独开工作空间的浏览器：同一实例内，人和 agent 各用各的 Space。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 24,188 |
| 今日新增 | +150 |
| 仓库 | https://github.com/citrolabs/ego-lite |

## 1. 它解决什么问题

agent 做浏览器自动化时通常接管整个浏览器实例，人的会话被强行中断；同时 agent 需要复用登录态，把凭据复制到 agent 侧又带来泄露面。两个需求互相冲突，常见做法是在虚拟机或容器里另开一套，代价是登录态无法共享。

## 2. 为什么是现在

24,188 星、222 天、JavaScript、MIT，日增 150。它把隔离单位从「进程」改成「同一浏览器内的 Space」：共享登录态，但 agent 的操作发生在隔离工作区，人的标签不受影响——这一步把上面两个冲突需求同时满足。

## 3. 关键能力

- Space 级隔离工作区：agent 在独立上下文里跑自动化，不抢占人的标签
- 可把已登录的浏览器状态共享给 Codex、Claude Code 等 agent，无需复制 cookie
- 人与 agent 并行操作同一浏览器实例
- 零配置启动，桌面端直接安装使用
- 项目称在同类任务上消耗更少 token、完成更快

## 4. 架构与实现

基于 Chromium 的浏览器发行版，Space 为同一 profile 下的隔离上下文；通过扩展与协议把自动化接口暴露给外部 agent，agent 侧仍是标准浏览器自动化调用。

## 5. 上手路径

1. 先在一个低风险站点验证 Space 隔离：agent 操作时自己的标签是否确实不受影响
2. 再把登录态共享给一个 agent，用只读任务确认权限边界符合预期
3. 给 agent 的任务限定域名白名单，避免其在无关站点上操作
4. 确认无问题后才接入内部系统，并单独评估是否需要干净 profile

## 6. 风险与边界

- 共享登录态等于把账户权限交给 agent，一旦遭遇提示注入即可越权操作，这是结构性风险
- >24k 星但 313 个 issue，说明站点兼容性与隔离边界仍有缺口
- 「更快更省 token」属项目自述，需在自有任务上复测，不同站点差异可能很大
- 桌面安装包走自有 CDN 分发，供应链完整性需自行核验

## 7. 谁该用 / 谁别碰

高频使用编码与浏览 agent、又不愿让 agent 接管整台浏览器的开发者；处理敏感账户时应另开干净 profile，不与主账号共享登录态。

## 8. 评分依据

热度增速 **77** · 社区规模 **82** · 更新活跃 **70** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：方向正确——把 agent 的操作空间与人的操作空间在浏览器内部切开，比另起一套虚拟机务实得多。但共享登录态是双刃剑：便利与权限风险同源，收窄域名白名单不是可选项。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-24 · 依据仓库 README 与 GitHub 元数据</sub>
