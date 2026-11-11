---
date: 2026-11-11
repo: VII-Cae/hyalite--liquid-glass
category: frontend
categoryLabel: 前端 / Web
rating: 2.5
language: JavaScript
stars: 265
starGain: 2
url: https://github.com/VII-Cae/hyalite--liquid-glass
tags: [backdrop-filter, css, glassmorphism, liquid-glass, refraction, svg-filters]
generatedAt: 2026-11-11T03:04:52.682Z
---

# VII-Cae/hyalite--liquid-glass · 项目解读

> **一句话**：单文件实现的真实折射玻璃：SDF 透镜图 + SVG 位移 + backdrop-filter，不用 WebGL、不需构建。

| 指标 | 值 |
| --- | --- |
| 分类 | 前端 / Web |
| 评分 | 🌟🌟🌗 2.5 / 5.0 |
| 语言 | JavaScript |
| 星标 | 265 |
| 今日新增 | +2 |
| 仓库 | https://github.com/VII-Cae/hyalite--liquid-glass |

## 1. 它解决什么问题

多数「液态玻璃」是用模糊加半透明模拟的，边缘不会真正弯折背后的内容，直线穿过玻璃时只是被糊掉而不是被折弯。要做到物理上说得通的折射，通常得上 WebGL 重绘整个背景，代价是集成复杂、性能不可控。

## 2. 为什么是现在

65 天、265 星、15 个 fork、零 open issue，且提供可命令行执行的自动化测试（headless Chromium 跑 cases.html，红绿结果带退出码）。README 逐个版本记录了视觉演进（0.1.0 的 25px 斜面 / 10px 玻璃，到 0.5.0 的 37 / 59），并说明这些数字来自各 tag 当时的 playground 而非引擎默认值——这种对「证据来源」的区分，在效果类项目里很少见。

## 3. 关键能力

- 按元素的精确尺寸与圆角半径计算透镜图（SDF），交给 SVG 滤镜做位移，再由 backdrop-filter 弯折背景
- 中心保持通透，边缘向内拉扯背景、放大处变暗、边缘聚一条光，直线被折弯而非涂抹
- 单文件引入，无 WebGL、无构建步骤
- 三套演示页：四代引擎同页对比、边缘实验室（三种斜面轮廓 + 示波器读数）、自检测试页
- 附带 headless Chromium 测试脚本，npm test 即可跑红绿用例
- 覆盖非对称/椭圆/重叠圆角、共享滤镜的孪生元素、尺寸分桶、四分之一对称、色散不随透镜缩放等边界

## 4. 架构与实现

纯 CSS + SVG 滤镜，MIT 许可。核心是把元素当作带斜面的玻璃板：先按尺寸与圆角算出透镜位移图，编码进 SVG filter，再通过 backdrop-filter: url(#…) 让浏览器实时弯折背后内容。测试策略值得注意——用真实 headless Chromium 跑实时帧而非虚拟时间，因为虚拟时间会快进定时器却不保证出帧。

## 5. 上手路径

1. 在 Chromium 中打开 demo/index.html，先对比四代引擎在同一组参数下的差异
2. 把单文件 CSS 与 SVG 定义引入项目，替换目标元素的 backdrop-filter
3. 用 demo/edge-lab.html 的示波器核对位移与亮度是否符合预期
4. npm test 跑一遍自检用例，确认当前浏览器版本下边界行为未退化
5. 对非 Chromium 浏览器准备降级：退化为普通模糊并保留可读性

## 6. 风险与边界

- backdrop-filter: url() 目前主要在 Chromium 系生效，Safari 与 Firefox 会退化为普通模糊
- SVG 滤镜的位移计算随元素尺寸变化，大量元素同时使用时合成开销上升
- 项目已两个月未推送提交（最后更新 2026-09-11），后续浏览器行为变化可能无人跟进
- 零 open issue 既可能是稳定，也可能是使用面窄，不能单独作为质量信号

## 7. 谁该用 / 谁别碰

追求像素级材质还原、愿意为 Chromium 用户提供增强效果的前端工程师；以及想理解 SDF 透镜图与 SVG 位移如何协作的技术读者。

## 8. 评分依据

热度增速 **55** · 社区规模 **43** · 更新活跃 **0** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **2.5 星**）

**结论**：它做的是「真折射」而非「看起来像玻璃」，并且用可执行的测试页把边界条件钉住，这在效果类项目里相当罕见。限制也很硬：Chromium 之外降级、两个月未更新。把它当作材质实现的参考与增强层是合适的，当作跨端通用方案则不成立。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
