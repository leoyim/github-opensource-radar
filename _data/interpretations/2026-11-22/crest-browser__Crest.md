---
date: 2026-11-22
repo: crest-browser/Crest
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Swift
stars: 1406
starGain: null
url: https://github.com/crest-browser/Crest
tags: [browser, ios, ipados, macos, open-source, privacy, swift, swiftui]
generatedAt: 2026-11-22T02:08:13.737Z
---

# crest-browser/Crest · 项目解读

> **一句话**：以 Spaces 为第一概念的 Apple 平台开源浏览器。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Swift |
| 星标 | 1,406 |
| 今日新增 | — |
| 仓库 | https://github.com/crest-browser/Crest |

## 1. 它解决什么问题

大多数浏览器把所有登录态、标签页与历史放进同一个长期容器，工作与私人、研究与临时会话互相串味；无痕窗口只是临时补丁，配置与凭据仍要反复切换。

## 2. 为什么是现在

98 天、1,406 星、140 fork、309 个 open issue，本期进入移动/跨端方向。README 开篇「A browser with boundaries」并把 Spaces 的隔离范围逐项列出，说明它想解决的是边界问题，而不是再做一个更快的渲染器。

## 3. 关键能力

- Spaces 为工作、家庭、研究等场景提供各自独立的 cookie、网站数据、历史、归档、标签、凭据、设置与同步身份
- Mac 上同时提供 Chromium 与 WebKit 两种引擎
- 结构化侧栏：固定站点、带首页 URL 的收藏标签、嵌套项目文件夹与当前标签页
- Split View 支持 2–4 个活动页面，Mac/iPad 可调列宽，iPhone 走聚焦卡片
- Peek 链接预览、Mac 上的 Quick Window 与共享窗口、Crest Studio 外观定制

## 4. 架构与实现

SwiftUI 构建的 Apple 平台原生应用，Spaces 作为顶层容器隔离存储与凭据；Mac 侧可切换 Chromium / WebKit 引擎，窗口与标签管理围绕 Spaces 组织，README 另给出构建、发布渠道与变更验证说明。

## 5. 上手路径

1. 从官网或 release 下载 Mac 稳定版
2. 先建两个 Space，验证 cookie 与登录态确实互不相通
3. 在 Mac 上对比两种引擎对常用站点的兼容性
4. 按 Validate a change 与 Project status 判断是否适合日常主力使用

## 6. 风险与边界

- 98 天新仓、309 个 open issue，稳定性与扩展生态仍在建设
- 双引擎 + Spaces 并存会长期抬高维护成本，问题定位也更复杂
- 仅支持 Apple 平台，跨设备场景受限
- MPL-2.0 为修改文件级开源义务，二次分发需核对条款

## 7. 谁该用 / 谁别碰

在 Mac/iPhone/iPad 上需要严格分开工作与私人浏览环境、且愿意用早期浏览器的用户；依赖大量浏览器扩展的人需先确认兼容。

## 8. 评分依据

热度增速 **90** · 社区规模 **59** · 更新活跃 **74** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把隔离做成第一概念是清晰的产品判断；代价是双引擎与多容器带来的维护复杂度，短期内更适合作为第二浏览器试用。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-22 · 依据仓库 README 与 GitHub 元数据</sub>
