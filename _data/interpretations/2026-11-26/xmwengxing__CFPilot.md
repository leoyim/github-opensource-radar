---
date: 2026-11-26
repo: xmwengxing/CFPilot
category: frontend
categoryLabel: 前端 / Web
rating: 4
language: TypeScript
stars: 1434
starGain: null
url: https://github.com/xmwengxing/CFPilot
tags: [cloudflare, cloudflare-workers, ip-optimization, proxy, subscription, trojan, typescript, vless]
generatedAt: 2026-11-26T01:52:26.117Z
---

# xmwengxing/CFPilot · 项目解读

> **一句话**：控制面与数据面分离的 Cloudflare 代理方案：面板跑 Pages，转发跑 Pages 或 Workers。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 1,434 |
| 今日新增 | — |
| 仓库 | https://github.com/xmwengxing/CFPilot |

## 1. 它解决什么问题

在 Cloudflare 上自建转发服务时，常见痛点是部署步骤分散、面板与转发耦合导致升级要整体重来，以及优选 IP 导入后延迟显示异常。运维上还缺少统一的监测与保活。

## 2. 为什么是现在

1,434 星、上线 36 天、TypeScript、AGPL-3.0，586 fork、37 issue。它把三件事拆开：控制面（Web 面板）固定跑 Pages，数据面（流量转发）可选 Pages 或 Workers；内核走独立热更新通道，转发组件保持正式版形态；另提供本地真连接优选，解决导入订阅后延迟为 -1 的问题，并内置反代入口池的双通自愈与动态保活。

## 3. 关键能力

- 双侧部署：控制面 Pages，数据面可选 Pages 或 Workers，互不影响
- 内核热更新：kernel-latest 通道独立升级转发组件
- 本地真连接优选：实测连接质量而非只看延迟数字，避免导入后延迟异常
- 盲中继与云监测台：转发链路与运行状态可视化
- 异地组网（含 mesh）：多节点互联
- 交互式部署：npx 引导完成建 KV、部署两侧、绑定变量并输出面板地址

## 4. 架构与实现

控制面为静态面板（Pages），通过 Cloudflare API 管理配置；数据面为 Worker 或 Pages Functions 中的转发逻辑，配置存于 KV；内核与面板分属不同更新通道，面板写入的配置由数据面读取。

## 5. 上手路径

1. 先创建最小权限的 API Token（按文档权限表），不要复用账号全局密钥
2. 用 npx 引导部署，部署完成立即保存面板密码——变量加密后无法再读回
3. 数据面选 Workers 时先绑定自有域名，workers.dev 直连不可用
4. 上线后用云监测台观察一段时间，再决定是否启用优选与保活

## 6. 风险与边界

- 需授予 API Token 多项权限，权限过大将放大密钥泄露的影响
- KV 不可与其它项目共用，误操作会影响既有实例
- AGPL-3.0 对二次分发与网络服务有传染性约束，商用前需评估
- 36 天的新仓，面板密码遗失、KV 冲突等运维场景的恢复路径较少验证

## 7. 谁该用 / 谁别碰

在 Cloudflare 上自建转发、需要面板化管理的运维人员；希望把部署与升级流程收敛成一套脚本的团队。

## 8. 评分依据

热度增速 **94** · 社区规模 **62** · 更新活跃 **63** · 工程成熟 **80**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：控制面与数据面分离、内核独立升级，这套结构比单体面板更易维护，也是它相较同类方案的主要差异。前提是接受在 Cloudflare 账号上授予较宽权限，并愿意按文档约束管理 KV 与域名。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-26 · 依据仓库 README 与 GitHub 元数据</sub>
