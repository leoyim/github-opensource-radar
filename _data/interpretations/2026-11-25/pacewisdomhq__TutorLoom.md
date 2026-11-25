---
date: 2026-11-25
repo: pacewisdomhq/TutorLoom
category: frontend
categoryLabel: 前端 / Web
rating: 3
language: TypeScript
stars: 103
starGain: null
url: https://github.com/pacewisdomhq/TutorLoom
tags: [corporate-training, django, edtech, elearning, flutter, learning-management-system, lms, moodle-alternative]
generatedAt: 2026-11-25T02:41:50.438Z
---

# pacewisdomhq/TutorLoom · 项目解读

> **一句话**：一套部署服务多家机构的多租户自托管 LMS，Django + React。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | TypeScript |
| 星标 | 103 |
| 今日新增 | — |
| 仓库 | https://github.com/pacewisdomhq/TutorLoom |

## 1. 它解决什么问题

培训机构上 LMS 的两个坑：SaaS 按席位收费且数据不可控，开源方案多为单租户，多家机构要么多套部署要么自己改造隔离层。

## 2. 为什么是现在

103 星、上线 49 天、Django + React、Apache-2.0、fork 22。它把多租户做在数据层——每条查询按组织过滤——而不是部署层，这是与常见单租户开源 LMS 的核心差别；课程结构（级别/章节/步骤 + 前置解锁）也够细。

## 3. 关键能力

- 多租户隔离：每条查询按组织过滤，trainer 与学员只见自家数据
- 结构化课程构建：级别、章节、步骤（视频/文档/任务/测验），前置条件与顺序解锁
- 批次与批量导入：时间批次分组，CSV/Excel 批量邀请
- 评分队列：按分与文字反馈通过/驳回，进度导出 Excel
- OpenAPI 3 文档（Swagger UI、ReDoc）+ JWT，Web 与 Android/iOS 客户端

## 4. 架构与实现

Django 后端承担租户过滤与业务逻辑，React 前端为独立 Vite 构建单独部署；Celery worker 跑异步任务，分析任务需自行调度；生产前置项含 S3 上传、SES 邮件与显式安全配置。

## 5. 上手路径

1. 按 Quickstart 起单机版，建两个组织验证数据隔离是否彻底
2. 导入一份真实课程大纲，走一遍「课程—批次—评分—导出」闭环
3. 对照生产清单配置：DEBUG、SECRET_KEY、ALLOWED_HOSTS、S3、SES、Celery worker
4. 用 OpenAPI 文档接一次自己的系统，确认 API 面覆盖够用

## 6. 风险与边界

- 没有电商与证书合规模块，商业化场景需自行补
- Celery worker 与每日分析调度是手工前置项，漏配会静默失效
- 移动端是打包壳而非原生应用，深度交互体验有限
- 49 天 103 星的早期项目，多租户边界场景的审计建议自行补

## 7. 谁该用 / 谁别碰

培训机构与需要多组织隔离的企业内训团队。

## 8. 评分依据

热度增速 **73** · 社区规模 **37** · 更新活跃 **60** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：把多租户做进数据层是选型时的关键差异，功能面对教学场景完整；项目早期，隔离正确性建议自行审计后再承载敏感数据。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
