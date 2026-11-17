# 系统模型 · 摘要

> 生成方式：`system-modeler`（当前态系统建模）+ `c4model`（C4/Structurizr 源）+ `graphviz`（数据/依赖/发布图）+ `deployment-topology-analyzer`（构建与运行拓扑）。
> 生成依据：2026-11-16 工作区快照；不含目标态或迁移方案。

## 模型一句话

开源雷达是一个**构建期完成全部数据加工、运行期只提供静态资源**的日报站点：上游流水线负责生产，本仓库负责单向搬运、校验、聚合、排版与发布；`_data/` 是唯一数据源，GitHub Actions + GitHub Pages 是交付路径。

## 稳定结构与易变结构

| 层 | 稳定部分 | 易变部分 |
| --- | --- | --- |
| 边界 | 上游只读、本站不写上游；页面构建无业务网络请求 | 上游流水线内部实现、调度器 |
| 数据 | `full_name` 主键、日期键、slug/锚点规则、台账单一准绳 | 台账条目、期次数量、语言分布 |
| 应用 | 页面路由集合、lib 分层、组件职责 | 页面版式、组件内部实现 |
| 交互 | 渐进增强、原生 dialog、无运行时框架 | 具体脚本、3D 折扇实现 |
| 交付 | 静态产物、Actions → Pages、自定义域名 | CDN/TLS/DNS 平台行为、缓存策略 |

## 关键关系

1. **上游 → 本地**：`ingest` 按日期复制报告/摘要/解读，派生星标序列，合并头像缓存，整份复制台账。
2. **台账 → 往期报告**：`sync-removals` 以台账为唯一准绳，删除条目、撤下附录、重算 `stats.selected`。
3. **数据 → 页面**：Astro 构建期通过 `load.ts` 读取、`schema.ts` 校验；`projects.ts` 做跨期摊平；`interpretations.ts` 渲染解读；`almanac.ts` 算农历。
4. **页面 → 读者**：GitHub Pages 返回静态 HTML/CSS/JS；浏览器按需加载头像与 Three.js。
5. **发布**：push `main` → Actions 构建 → Pages artifact → deploy；DNS CNAME 指向 `leoyim.github.io`。

## 证据强度

- **高**：仓库内代码、配置、工作流、README、`_data` 快照。
- **中**：DNS 配置（文档声明）、本地 Node 与 CI Node 的版本差、Pages CDN 行为的常识性推断。
- **低/未知**：上游定时任务实现、线上 TLS/CDN 状态、回滚手册、3D 可访问性实测、并发写入行为。

## 当前最重要的验证项

1. **上游解读 Markdown 的信任边界**：`marked` 渲染结果通过 `set:html` 注入，未做 HTML sanitation；需要明确“上游可信”的组织假设，或增加构建期白名单。
2. **CI 数据门禁**：`pages.yml` 只构建，不跑 `check:removals` 与 `astro check`；数据漂移与类型问题可能在发布后才被发现。
3. **线上运行状态**：DNS、TLS、Pages CDN 缓存没有仓库内证据；建议用线上探测补一条“运行期观察”。
4. **并发写 `_data/`**：脚本无文件锁；若未来把 ingest 放到多个定时任务/机器，需要单写者约束。
5. **可访问性实测**：3D 折扇的键盘路径、焦点管理与色彩对比尚未在真实浏览器 + 辅助技术中验证。

## 阅读顺序

1. [README.md](README.md)：全局与规模快照。
2. [01-system-context.md](01-system-context.md)：边界、参与者、外部系统、信任边界。
3. [02-containers.md](02-containers.md)：构建期/运行期单元与路由。
4. [03-components.md](03-components.md)：lib 分层、组件职责、依赖规则。
5. [04-data-pipeline.md](04-data-pipeline.md)：数据路径、键、不变量、失败模式。
6. [05-deployment-and-runtime.md](05-deployment-and-runtime.md)：构建、发布、运行期依赖。
7. [06-decisions-and-constraints.md](06-decisions-and-constraints.md)：逆向 ADR、硬约束、质量属性。
8. [system-model.evidence.md](system-model.evidence.md)：逐节点/逐关系的证据与置信度。

## 模型维护

- **数据契约变化**：先改 `src/lib/schema.ts`，再更新 L3 与数据流文档。
- **路由/页面变化**：更新容器路由表与 `diagrams/module-dependencies.dot`。
- **交付路径变化**：更新 `05-deployment-and-runtime.md` 与 `diagrams/deployment-release.dot`。
- **规模数字**：每次更新期次后重新统计，不把某日条目数当作架构不变量。
- **图源优先**：Structurizr DSL 与 DOT 是可维护源；Markdown 中的 Mermaid 是阅读辅助。