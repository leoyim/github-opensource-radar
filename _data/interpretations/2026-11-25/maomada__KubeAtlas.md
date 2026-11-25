---
date: 2026-11-25
repo: maomada/KubeAtlas
category: backend
categoryLabel: 后端 / 云原生
rating: 3
language: Go
stars: 163
starGain: 36
url: https://github.com/maomada/KubeAtlas
tags: [gitops, helm, kubernetes, kubernetes-dashboard, mcp, multi-cluster, self-hosted]
generatedAt: 2026-11-25T02:41:50.438Z
---

# maomada/KubeAtlas · 项目解读

> **一句话**：自托管 K8s 运维台：Hub/Agent 多集群视图，AI 走按集群授权的 MCP。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | Go |
| 星标 | 163 |
| 今日新增 | +36 |
| 仓库 | https://github.com/maomada/KubeAtlas |

## 1. 它解决什么问题

多集群运维的可见性断层：每个集群一套 kubectl 视角，故障排查、变更追踪、容量与成本分散在多套工具里；想让 AI 参与操作，又没有现成的权限边界方案。

## 2. 为什么是现在

163 星、上线 23 天、Go、Apache-2.0。AI 运维入口刚起步，它把 MCP 凭证做成「按选中集群 + 用户权限」签发的作用域凭证，这个设计在同类控制台里少见。

## 3. 关键能力

- Hub/Agent 架构：Hub 集中部署，各集群 Agent 建连
- 故障排查：工作负载健康、日志、事件、资源变更时间线
- 应用与资源依赖图，Helm release 与 Argo CD 检视
- 容量与成本：调度请求、节点容量、成本分摊（接 Prometheus 后）
- MCP 接入：凭证按集群与用户权限授权，AI 客户端只见被授权集群

## 4. 架构与实现

Go 实现的 Hub 承担聚合与 MCP 服务，Agent 以 Helm chart 部署进各集群；Agent 上报健康与变更事件，Hub 侧聚合视图；MCP 凭证由 Hub 签发并绑定权限。

## 5. 上手路径

1. 部署 Hub，接第一个集群跑通 Agent onboarding（生成命令—部署—审批—Connected）
2. 故意制造一个 failing workload，走一遍「健康—日志—事件—变更时间线」排查链
3. 配置一个按集群授权的 MCP 凭证，验证 AI 客户端越权访问被拒
4. 接 Prometheus 看成本分摊口径是否符合财务需求

## 6. 风险与边界

- 23 天 163 星的早期项目，多集群稳定性未经长期验证
- Agent 与 Hub 的连接模型与升级路径仍在建设，版本兼容矩阵不完整
- MCP 凭证的权限粒度需自行验证是否符合最小权限预期
- 成本分摊依赖 Prometheus 数据质量，指标缺失时口径会漂

## 7. 谁该用 / 谁别碰

管多个 K8s 集群的运维团队；想把 AI 操作纳入权限体系内的平台工程师。

## 8. 评分依据

热度增速 **81** · 社区规模 **37** · 更新活跃 **49** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：MCP 凭证的集群级授权是给「AI 操作 K8s」补上了缺失的权限边界，方向有价值；项目很新，承载生产集群前建议先在非关键集群试用并审计权限实现。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
