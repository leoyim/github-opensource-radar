---
date: 2026-10-29
repo: zeabur-oss/zeabur
category: backend
categoryLabel: 后端 / 云原生
rating: 3.5
language: Rust
stars: 252
starGain: null
url: https://github.com/zeabur-oss/zeabur
tags: [databases, deployment, docker-compose, internal-developer-platform, kubernetes, paas, self-hosted, zeabur]
generatedAt: 2026-10-29T02:07:12.551Z
---

# zeabur-oss/zeabur · 项目解读

> **一句话**：装在自己 K8s 上的 PaaS：只操作你已有的对象，自身不存任何状态。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Rust |
| 星标 | 252 |
| 今日新增 | — |
| 仓库 | https://github.com/zeabur-oss/zeabur |

## 1. 它解决什么问题

Kubernetes 的能力与可用性之间存在巨大落差：平台团队能维护集群，业务团队却看不懂 YAML、不敢改 Deployment，于是每个服务上线都要排队等平台同学。现成的 PaaS 方案要么把集群改造成自己的形态（引入 CRD、自有数据库、专有控制器），要么把控制面放在厂商侧，形成新的锁定。

## 2. 为什么是现在

5 天 252 星，本期以快照差值估算热度（无 trending 增量），说明它刚发布、尚未进入趋势页主流。时点值得注意：Zeabur 从商业 PaaS 转向开源自托管，与同期「把控制面还给自己」的整体情绪一致（OpenBot 自托管 agent、net-merge 自管链路）。

## 3. 关键能力

- 把集群呈现为项目与服务的视图，而不是一堆对象列表
- 用人话解释哪里坏了（README 原文：explains what is wrong in plain words）
- 只操作你已有的对象，绝不用超出你权限的身份动作
- 自身零状态：没有数据库、没有自定义资源（CRD），可直接卸载
- 三种安装路径：单台 Linux 自动装 K3s/RKE2 + Zeabur Identity、已有集群走 Helm、或仅用 kubeconfig 起本地 UI（zeaburctl ui）
- 文档覆盖安装、部署、配置、运维以及「如何离开 Zeabur」

## 4. 架构与实现

无状态控制面 + 复用 K8s 原生对象。这个设计选择是整个项目的技术核心：因为不引入 CRD、不维护自有数据库，卸载即是删除自身，不会在集群里留下残留；也因为没有自有状态，它可以只在你需要时以本地 UI 形式运行，权限完全继承你的 kubeconfig。

## 5. 上手路径

1. 先走第三种路径（kubeconfig + zeaburctl ui）在不改集群的前提下体验界面，这一步零风险
2. 确认团队权限模型：Zeabur 继承你的权限，意味着谁能开它谁就拥有相应集群权限
3. 已有集群用 Helm 安装时，先在一个命名空间做隔离验证
4. 把 README 里「如何离开」那节读完再上线——这是评估锁定风险的唯一诚实来源

## 6. 风险与边界

- 5 天 252 星，极早期，生产可用性未经验证
- 零 CRD 的代价是部分编排能力受限于 K8s 原生语义，复杂发布策略可能表达不了
- 继承用户权限的设计意味着一旦账号泄露即等于集群权限泄露
- 依赖 Zeabur Identity 做登录，自托管场景下其部署形态需确认

## 7. 谁该用 / 谁别碰

已有 Kubernetes、但业务团队无法自助发布服务的组织；完全没有集群的团队用 K3s 一键装也算轻量选择。

## 8. 评分依据

热度增速 **88** · 社区规模 **44** · 更新活跃 **75** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：架构判断比功能列表更值得关注。「无状态、无 CRD、可干净卸载」这三条直接回应了 PaaS 最大的采用顾虑——锁定。适合作为平台工程的内部交付层试点，但 5 天的项目不该进关键路径。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-29 · 依据仓库 README 与 GitHub 元数据</sub>
