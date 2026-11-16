---
date: 2026-11-16
repo: paimonsoror/telltaledns
category: backend
categoryLabel: 后端 / 云原生
rating: 4
language: Rust
stars: 323
starGain: 105
url: https://github.com/paimonsoror/telltaledns
tags: [adblock, dns, dns-over-https, dns-over-quic, dns-over-tls, dns-resolver, homelab, kubernetes]
generatedAt: 2026-11-16T01:55:53.209Z
---

# paimonsoror/telltaledns · 项目解读

> **一句话**：把每一条 DNS 查询都归因到设备、解释清楚，并按设备下规则。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Rust |
| 星标 | 323 |
| 今日新增 | +105 |
| 仓库 | https://github.com/paimonsoror/telltaledns |

## 1. 它解决什么问题

家庭与小型网络的 DNS 过滤工具常见于「能拦截」，但很难回答「谁在问、问了什么、为什么被这样回答」；规则变更也缺少事前影响评估，控制面一挂 DNS 就跟着停摆。

## 2. 为什么是现在

本期日增 +105、323 星，44 天新仓。README 用大量篇幅写可观测性与可靠性：每次查询分阶段计时、按设备命名与识别、规则保存前可回放昨日真实流量、控制面故障时从最后一份好配置继续应答，明显是冲着既有方案的痛点来的。

## 3. 关键能力

- 每条查询关联具名设备并解释应答原因，设备名来自路由器、mDNS 或 UI，还能据厂商与请求域名识别设备类型
- 按设备与分组配置拦截列表、计划、安全搜索、服务屏蔽、重写与快捷规则，保存前可预览对昨日流量的影响
- 端到端加密：DoT/DoH/DoQ、DNSSEC 校验与可选完整递归
- 集群与高可用：Pi 与 K8s 共用一套配置，witness 自动切换，配置可入 Git，支持金丝雀与自动回滚
- 可观测与自动化：集群/节点/站点仪表盘、Prometheus、OpenTelemetry、dnstap、SIEM 事件，以及 REST API、ctl 与带审批的 MCP 工具

## 4. 架构与实现

单个静态二进制（镜像约 13 MiB）跑在 Raspberry Pi、K8s 或两者混合的同一集群；配置平面与解析平面分离，解析侧从最后一份可用配置继续工作。隐私分级决定查询日志保留粒度，变更进审计日志；发布用 cosign 签名、附 SBOM 并保证可复现构建。

## 5. 上手路径

1. 按 Quick start 在 Linux 主机上取 compose.yaml 与 telltale.toml，docker compose up -d 后初始化 token
2. 打开 8053 面板，确认设备命名与查询归因是否覆盖了家里主要终端
3. 在保存一条拦截规则前用昨日流量预览功能，核对误伤范围
4. 需要高可用再按 running.md 加第二个节点与 witness，测试控制面断开时是否仍应答

## 6. 风险与边界

- 项目自述 pre-1.0，1.0 之前配置键与 API 仍可能变更，需跟踪 release notes
- 性能数字（250 µs、14 MiB 空闲内存、百万域名 60 MiB）来自项目方在特定负载下的测量，宜自行压测
- README 建议用 curl 拉 compose 文件后直接启动，执行前应通读配置内容
- 带审批的 MCP 工具把网络策略交给 agent，权限边界需自行收紧

## 7. 谁该用 / 谁别碰

适合自建家庭/小型网络 DNS、在意可观测性与规则可解释性的运维爱好者与平台工程师；不适合只需默认拦截列表、不想维护集群的用户。

## 8. 评分依据

热度增速 **91** · 社区规模 **44** · 更新活跃 **65** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：是本期后端方向里少数从零设计的新项目，规格文档、可复现构建与故障降级写得相当完整；但 pre-1.0 与庞大功能面意味着它会快速变动，适合先在小网络试运行。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-16 · 依据仓库 README 与 GitHub 元数据</sub>
