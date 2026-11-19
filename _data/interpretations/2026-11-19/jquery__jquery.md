---
date: 2026-11-19
repo: jquery/jquery
category: frontend
categoryLabel: 前端 / Web
rating: 4.5
language: JavaScript
stars: 60020
starGain: 266
url: https://github.com/jquery/jquery
tags: [jquery]
generatedAt: 2026-11-19T02:32:35.179Z
---

# jquery/jquery · 项目解读

> **一句话**：6,438 天的老牌库，本期看点是 4.0 之后的版本治理与模块裁剪能力。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | JavaScript |
| 星标 | 60,020 |
| 今日新增 | +266 |
| 仓库 | https://github.com/jquery/jquery |

## 1. 它解决什么问题

大量存量站点仍依赖 jQuery，但 1.x / 2.x 早已停止支持，3.x 也进入只收关键更新的阶段；升级到 4.x 需要清楚的分支策略，同时很多站点其实只用其中几个模块，全量引入并不划算。

## 2. 为什么是现在

本期 60,020 星、20,709 fork，当日 +266，年龄 6,438 天；jQuery 4.0.0 已于 2026-01 发布，README 用一张表把 4.x 完整支持 / 3.x 仅关键更新 / 1.x 与 2.x 不再支持写明白，并给出商业延长支持渠道，属于老项目迁移窗口期的典型样本。

## 3. 关键能力

- 多分支版本支持策略：4.x（main）完整维护，3.x 仅关键更新，1.x / 2.x 停止支持，另有商业延长支持渠道
- 自定义构建：--exclude 可裁掉 ajax、css、effects、event、deferred、wrap、offset、dimensions 等模块，--include 则只保留指定模块
- 排除 selector 模块时自动换成基于原生 querySelectorAll 的轻量包装，而不是直接删除能力
- 支持 --esm 输出 ESM 产物（dist-module/）、--factory 适配无 window 环境、--amd 自定义 AMD 名称、slim 精简变体
- 明确支持 Node、浏览器扩展等非浏览器环境，构建产物含压缩版与 sourcemap

## 4. 架构与实现

源码按模块组织在 src/ 下，构建脚本按 --include / --exclude 组合出不同变体，默认产物落在 dist/，ESM 产物落在 dist-module/；core 模块不可排除，其余模块之间存在依赖链（例如排除 deferred 会连带移除 ajax / effects / queue，并替换 core/ready）。因此裁剪不是简单删文件，而由构建脚本解析依赖关系后重写。

## 5. 上手路径

1. 先按 README 的版本支持表确认自己所在分支，规划向 4.x 的升级路径
2. clone 仓库后 npm install、npm run build，确认默认产物能生成
3. 用 npm run build -- --help 查看可用选项，按实际使用的 API 做一次 --exclude 裁剪并比对体积
4. 如运行在非浏览器环境，试 --factory 构建并把 window 由外部注入

## 6. 风险与边界

- 1.x / 2.x 已停止支持，继续停留意味着安全与兼容性风险自担
- 裁剪模块存在隐式依赖，例如排除 css 会连带移除 effects / dimensions / offset，需回归验证
- 4.0 属大版本，插件生态与存量代码的兼容性需逐个核对
- 95 个 open issue，项目重心偏向维护与治理，不宜期待新范式

## 7. 谁该用 / 谁别碰

维护存量 jQuery 站点、需要规划升级或做体积优化的团队；新建项目应以现代框架与原生 API 为起点，不必引入它。

## 8. 评分依据

热度增速 **96** · 社区规模 **93** · 更新活跃 **61** · 工程成熟 **79**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：本期的价值在治理而非特性：分支策略、模块裁剪与 ESM / factory 构建把「老库怎么体面地活下去」讲得很清楚。若只是新项目选型，参考意义有限；若手上有存量站点，这份 README 值得完整读一遍。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
