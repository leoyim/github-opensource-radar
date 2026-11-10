---
date: 2026-11-10
repo: gosom/google-maps-scraper
category: backend
categoryLabel: 后端 / 云原生
rating: 4
language: Go
stars: 7780
starGain: 205
url: https://github.com/gosom/google-maps-scraper
tags: [agent-skills, claude-skills, codex-skills, distributed-scraper, distributed-scraping, golang, google-maps, google-maps-scraping]
generatedAt: 2026-11-10T02:30:51.336Z
---

# gosom/google-maps-scraper · 项目解读

> **一句话**：把地点信息抽取做成 CLI / Web UI / REST API 三形态，并让编码代理来规划搜索与验证。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Go |
| 星标 | 7,780 |
| 今日新增 | +205 |
| 仓库 | https://github.com/gosom/google-maps-scraper |

## 1. 它解决什么问题

地点类公开数据分散在地图页面里，字段多、结构不统一，手工整理成本极高；写一次性脚本又容易在反爬、分页、字段漂移上反复返工。团队真正需要的是能批量跑、结果可复用、且能与现有工作流对接的抽取管线。

## 2. 为什么是现在

1,297 天的老项目，本期 +205、累计 7,780 星、1,214 fork，是本期后端方向日增最高者。README 把「Ask an AI Agent to Get Leads」放在最前：按 Agent Skills 规范提供技能包，在 Claude Code / Codex / Cursor / Copilot 里用自然语言描述目标，代理负责规划搜索、先跑小样本验证、再启动本地全量抓取并协助处理结果——一个三年半的 Go 项目主动把入口迁到了代理工作流。

## 3. 关键能力

- 抽取名称、地址、电话、网站、评分、评论数、经纬度、评论、邮箱等地点字段
- 三种使用形态：命令行、Web UI、REST API
- 支持 Docker 部署（推荐）、源码构建与分布式抓取
- 提供 Agent Skill，可由编码代理规划搜索、做小样本验证、启动全量任务并跟进结果
- 可选 self-hosted 平台与 SaaS 版本
- README 提供 Recipes 与命令行参数、Web UI、REST API 的说明入口

## 4. 架构与实现

Go 实现、MIT 许可。仓库把同一套抽取能力暴露成 CLI、Web UI 与 REST API 三个界面，便于从一次性任务平滑过渡到常驻服务；distributed-scraper / distributed-scraping 等 topic 表明横向扩展是设计内能力。新增的 AI Agent Skill 是一层编排而非重写内核：代理只负责规划、验证与监控，实际抓取仍在本机运行。1,214 fork、64 个 open issue，属于接口稳定、被大量自行部署的工具。

## 5. 上手路径

1. 按 Quick Start 用 Docker 起一个实例，先用小范围关键词验证字段完整性
2. 在 Claude Code / Codex 等工具里加载 Agent Skill，用自然语言描述目标线索
3. 让代理先跑小样本校验结果，确认字段与筛选条件后再启动全量本地抓取
4. 需要常驻服务时切到 REST API 或 Web UI，把结果接入自己的数据表
5. 规模较大时按分布式抓取章节横向扩展，并关注代理与来源的使用条款

## 6. 风险与边界

- 抓取对象为第三方平台页面，字段结构与访问策略变化会直接影响结果稳定性
- 使用抓取数据前需自行确认目标平台条款与数据合规要求，尤其是联系方式类字段
- 分布式抓取与代理虽提升效率，也放大了请求量，需要自己设速率与预算
- 老项目功能面较宽（CLI / UI / API / SaaS），选型时要分清开源版与商业版边界
- 64 个 open issue 提示字段映射与平台变化仍是主要维护负担

## 7. 谁该用 / 谁别碰

做本地商业研究、线索整理或数据富集的团队，以及希望把抽取流程交给编码代理调度的开发者；也适合研究「老工具如何接上 Agent Skills」的人。只需要少量一次性查询的场景，手动检索可能更省事。

## 8. 评分依据

热度增速 **94** · 社区规模 **75** · 更新活跃 **58** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：值得注意的不是抽取字段多，而是三年半的老项目把新入口改成了代理技能包，且明确让代理先做小样本验证再全量跑——这个「先校验后放大」的流程很实用。使用前务必自行评估目标平台条款与数据合规边界。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-10 · 依据仓库 README 与 GitHub 元数据</sub>
