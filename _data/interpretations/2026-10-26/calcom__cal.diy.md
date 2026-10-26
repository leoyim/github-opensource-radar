---
date: 2026-10-26
repo: calcom/cal.diy
category: frontend
categoryLabel: 前端 / Web
rating: 4
language: TypeScript
stars: 49386
starGain: 48
url: https://github.com/calcom/cal.diy
tags: [next-auth, nextjs, open-source, postgresql, prisma, t3-stack, tailwindcss, trpc]
generatedAt: 2026-10-26T11:59:07.500Z
---

# calcom/cal.diy · 项目解读

> **一句话**：Cal.com 的纯 MIT 分叉：删掉所有企业版功能与授权检查，只留能自托管的排程内核。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 49,386 |
| 今日新增 | +48 |
| 仓库 | https://github.com/calcom/cal.diy |

## 1. 它解决什么问题

Cal.com 采用 open-core：Teams、Organizations、Insights、Workflows、SSO/SAML 等能力只存在于企业版，自托管还要处理 license key 与商业条款。对只需要「给别人一个预约链接」的用户，这些是纯负担。cal.diy 把企业代码整段移除，整体以 MIT 发布。

## 2. 为什么是现在

今日 +48 星，热度不高但方向精准：open-core 项目被社区分叉去商业化，是近两年反复出现的模式（同类还有各类「-diy / -community」分叉）。它的价值不在功能创新，而在授权确定性。

## 3. 关键能力

- 基础排程：可用时间、预约类型、日历同步、时区处理
- 无 license key：不需要 Cal.com 账号即可自托管运行
- 100% MIT：没有 Enterprise Edition 分割
- 技术栈与上游一致：Next.js + tRPC + Prisma + Tailwind + PostgreSQL
- 自带 E2E 测试与部署方式（Docker、Railway）

## 4. 架构与实现

继承上游 Cal.com 的 T3 栈（Next.js / tRPC / Prisma / PostgreSQL / Tailwind），仓库结构与上游基本一致，差异在于企业模块被移除。注意元数据陷阱：仓龄显示 2,044 天，这是继承了上游提交历史，不代表分叉本身已维护五年多。

## 5. 上手路径

1. 用 Docker 起一套，先跑通「创建事件类型 → 拿预约链接 → 实际预约」闭环
2. 配置 SMTP 与日历同步（CalDAV / Google / Microsoft），否则提醒与冲突检测不完整
3. 需要团队调度或 SSO 时先确认这些功能确实已被移除，避免中途返工

## 6. 风险与边界

- 企业功能被删除意味着没有团队轮询、工作流与 SSO，多团队场景可能不够用
- 分叉与上游的同步成本由社区承担，安全补丁可能滞后
- 仓龄元数据继承上游历史，容易被误读为「成熟五年」

## 7. 谁该用 / 谁别碰

适合个体或小团队自托管预约页、并且明确不需要企业功能的场景；需要组织级排程、审批与 SSO 的公司应该回到上游或商业产品。

## 8. 评分依据

热度增速 **78** · 社区规模 **92** · 更新活跃 **78** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：决策价值在授权而非功能：如果你被 open-core 条款卡住，这是一个干净的选择；如果你需要企业能力，它直接不适用。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-26 · 依据仓库 README 与 GitHub 元数据</sub>
