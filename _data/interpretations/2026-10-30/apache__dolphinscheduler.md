---
date: 2026-10-30
repo: apache/dolphinscheduler
category: tools
categoryLabel: 开发工具 / 效率
rating: 4.5
language: Java
stars: 14540
starGain: null
url: https://github.com/apache/dolphinscheduler
tags: [airflow, azkaban, cloud-native, data-pipelines, job-scheduler, orchestration, powerful-data-pipelines, task-scheduler]
generatedAt: 2026-10-30T01:49:59.370Z
---

# apache/dolphinscheduler · 项目解读

> **一句话**：把补数与版本控制做进调度器，而不是靠人记。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Java |
| 星标 | 14,540 |
| 今日新增 | — |
| 仓库 | https://github.com/apache/dolphinscheduler |

## 1. 它解决什么问题

数据管道最痛的环节往往不是调度本身，而是三件事：依赖关系复杂到画不清、任务失败后要人工补数、流程改动后无法回溯谁改了什么。Airflow 用代码解决前两个，代价是需要写 Python。DolphinScheduler 走另一条路：可视化 DAG 加产品化的补数与版本控制。

## 2. 为什么是现在

今日无趋势增量（Trending 页未覆盖该仓库），项目 2799 天。它与 ansible、lazygit 一同构成当日 tools 类的「成熟工具占位」结构——本期 tools 类头部其实是两个新锐项目分布在其他类别。这个结构提示：当日候选池由 Trending 主导，老牌工具的曝光被放大。

## 3. 关键能力

- 低代码可视化 DAG 编排，内置大量开箱任务类型
- 去中心化多 master / 多 worker 架构，原生支持横向扩容
- 四种部署模式：Standalone、Cluster、Docker、Kubernetes
- 工作流与实例级版本控制（含任务级）
- 工作流与任务状态可随时暂停、停止、恢复
- 原生补数（backfill），Web UI 直接操作
- 多租户，项目与数据源级权限控制
- Web UI、Python SDK、Open API 三种编排入口

## 4. 架构与实现

Java 实现。Master 负责 DAG 切分与任务分发，Worker 执行具体任务，API 与 UI 分离；依赖 ZooKeeper 做注册与选举；流程定义与实例状态存元数据库。去中心化多 master 设计让它避免单点，但也意味着高并发下 ZooKeeper 会成为瓶颈。

## 5. 上手路径

1. 先用 Standalone 跑通一条含上下游依赖的流程，理解它如何切分任务
2. 生产用 K8s 部署，并按任务类型调 master/worker 比例——它们不是等比扩容的
3. 补数前确认下游任务幂等，否则重跑会产生重复数据
4. 流程定义导出后纳入 git，配合它的版本控制做双保险

## 6. 风险与边界

- 组件多（ZK、元数据库、Master、Worker），运维面明显大于同类
- 高并发场景下 ZooKeeper 是已知瓶颈，大规模需评估替代方案
- 权限模型较细，配置不当会出现越权或流程不可见
- 算子生态与 Airflow 仍有差距，特殊数据源需自己写任务类型

## 7. 谁该用 / 谁别碰

需要可视化编排 + 原生补数的数据平台团队，尤其中文环境下运维人力有限的场景。已深度使用 Airflow 的团队迁移收益不大。

## 8. 评分依据

热度增速 **92** · 社区规模 **82** · 更新活跃 **64** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：与 Airflow 的取舍点是「运维人力 vs 代码化程度」。要低代码与开箱补数选它，要生态与可测试性选 Airflow。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-30 · 依据仓库 README 与 GitHub 元数据</sub>
