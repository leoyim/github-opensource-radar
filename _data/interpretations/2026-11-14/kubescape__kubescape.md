---
date: 2026-11-14
repo: kubescape/kubescape
category: backend
categoryLabel: 后端 / 云原生
rating: 4
language: Go
stars: 11894
starGain: 23
url: https://github.com/kubescape/kubescape
tags: [best-practice, devops, kubernetes, mitre-attack, nsa, security, vulnerability-detection]
generatedAt: 2026-11-14T08:52:50.287Z
---

# kubescape/kubescape · 项目解读

> **一句话**：把 Kubernetes 安全扫描从 IDE 与 CI 一路拉到集群运行时，用同一套规则看风险与合规。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Go |
| 星标 | 11,894 |
| 今日新增 | +23 |
| 仓库 | https://github.com/kubescape/kubescape |

## 1. 它解决什么问题

K8s 的配置风险分散在开发写的 YAML、CI 构建的镜像和线上集群的实际状态里，各阶段工具不同、口径不同，导致「本地说没问题、线上扫出一堆」。团队需要一条能贯穿生命周期、且结果可比较的扫描链。

## 2. 为什么是现在

1,920 天、11,894 星，本期 +23，CNCF 孵化项目。它与本期 CrowdSec 一起构成后端安全两席；README 强调 from left to right 的全生命周期覆盖，正好对应本期多项老牌基础设施「低增量但承担对接现实」的共同特征。

## 3. 关键能力

- 扫描当前集群、指定 YAML 文件或目录、容器镜像漏洞三类对象
- 提供风险分析、安全态势管理、合规与错误配置扫描，结果含加固建议
- 规则映射 NSA、MITRE ATT&CK 等框架，便于按合规口径出报告
- 可在 IDE、CI/CD 流水线与集群内使用，另有 In-Cluster Operator 形态
- 一行安装脚本与多种包管理器分发，提供 CLI 命令与用法示例

## 4. 架构与实现

Go 实现的 CLI 与 operator 共用一套规则/框架库：CLI 侧读本地清单、镜像或当前 cluster 上下文产出扫描结果，operator 侧在集群内持续做态势与运行时检查；结果按 NSA/MITRE 等控制框架归类，使开发期与运行期的发现可以放在同一口径下比较。

## 5. 上手路径

1. 按 Quick Start 安装 CLI，先对当前集群跑一次只读扫描，导出结果做基线
2. 把同一个 YAML 目录放进 CI，比较本地与流水线结果是否一致
3. 挑一两个高风险项按建议修复并复扫，确认评分变化可解释
4. 需要持续态势时再部署 In-Cluster Operator，并限定其 RBAC 范围

## 6. 风险与边界

- 规则集覆盖面广，初次扫描常见大量低风险项，直接全量阻断会拖垮 CI
- 不同扫描对象（YAML / 镜像 / 集群）的风险评分不宜横向直接相加比较
- 83 个 open issue 相对体量不大，但集群 API 版本变化可能影响扫描准确性
- In-Cluster Operator 需要较高读取权限，部署前须审阅 RBAC
- 合规框架映射是对应关系而非认证结论，审计场景仍需人工确认

## 7. 谁该用 / 谁别碰

需要把 K8s 配置与镜像风险前置到 CI、并对线上集群保持持续可见性的平台与安全团队。

## 8. 评分依据

热度增速 **72** · 社区规模 **77** · 更新活跃 **65** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把开发、流水线与运行时三个切面统一到一套规则和框架映射，是它最实用的地方。建议先做只读基线、按严重度分批设门禁，避免把首次扫描的全量发现直接变成 CI 红灯。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-14 · 依据仓库 README 与 GitHub 元数据</sub>
