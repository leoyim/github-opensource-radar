---
date: 2026-11-02
repo: laoma528/awesome-zhuiju-free
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: JavaScript
stars: 14414
starGain: 141
url: https://github.com/laoma528/awesome-zhuiju-free
tags: [awesome-list, bt-search, chinese, cloud-drive-search, free, free-streaming, iptv, magnet-search]
generatedAt: 2026-11-03T03:03:51.004Z
---

# laoma528/awesome-zhuiju-free · 项目解读

> **一句话**：一份由 GitHub Actions 每天体检的追剧资源清单：只做索引，不托管内容。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | JavaScript |
| 星标 | 14,414 |
| 今日新增 | +141 |
| 仓库 | https://github.com/laoma528/awesome-zhuiju-free |

## 1. 它解决什么问题

找免费影视资源的清单满网都是，绝大多数死在一件事上——链接失效没人管。这份清单把「维护」变成了自动化：所有条目存在 resources/resources.json，GitHub Actions 每天跑一遍可达性检测，用 🟢 可访问 / 🟡 访问受限 / 🔴 无法访问 / ⚪ 未检测 四种状态标注，历史结果留在 reports/verifications.json，投诉与处理记录留在 notices.json。

## 2. 为什么是现在

14,414 星、149 天、今日 +141，长期稳定增长。它的增长逻辑不是「发现了新资源」，而是「清单还活着」——在一个链接平均寿命以周计的领域，每日自动体检带来的可信度就是全部竞争力。

## 3. 关键能力

- 分类索引：在线影视、影视 APP、网盘搜索、磁力 BT、字幕、TVBox / 影视仓空壳与配置地址、IPTV 直播源、会员拼团、相关开源项目
- 每日自动可达性检测，四色状态标记并展示最后验证日期
- 主数据与验证记录分离（resources.json / verifications.json / notices.json），可被程序消费
- 明确的编辑准则：不因合作、广告或个人偏好修改评分；收到有效权利通知或失效反馈即复核
- 只做指引，不托管、不上传、不复制、不销售第三方影视内容

## 4. 架构与实现

本质是一个「数据 + 定时任务」的静态仓库：Markdown 仅作展示层，真正的条目在 JSON 里，Actions 每日拉取并写回验证结果，因此清单状态可审计、可 diff、可回滚。这种结构让它能被 TVBox 配置、脚本或其他工具直接读取，而不只是给人看。

## 5. 上手路径

1. 直接读 resources/resources.json 而不是 README 表格，前者是主数据且字段稳定
2. 看状态先看最后验证日期与节点网络：检测只在 Actions 出口网络成立，不代表你本地可访问
3. 需要长期引用就把 JSON 缓存到本地并记录抓取时间，避免清单更新后无法回溯
4. 对 🔴 与 ⚪ 条目不要重试式试探，先看 notices.json 是否已有投诉或下架记录

## 6. 风险与边界

- 条目指向的多为未经授权传播的影视内容，使用与传播的合规风险由使用者承担，清单的「只做指引」不构成免责
- 可达性检测结果受 Actions 出口网络限制，与你本地网络环境可能完全不一致
- CC-BY-4.0 只覆盖清单文本与结构，不覆盖被索引的第三方内容
- IPTV 与 TVBox 配置类条目失效极快，即便每日检测也存在窗口期

## 7. 谁该用 / 谁别碰

需要一个「可验证、可 diff」的资源索引的折腾型用户，以及做 TVBox / IPTV 配置聚合的开发者。想要稳定观影体验的人不适合依赖任何清单。

## 8. 评分依据

热度增速 **91** · 社区规模 **78** · 更新活跃 **64** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把 awesome list 做成可自动验证的数据集，是这类仓库唯一能对抗「链接腐烂」的办法，工程思路值得借鉴。但它的合法性建立在「不托管内容」这一层薄壳上——索引盗版入口这件事，不会因为加了每日检测就变得干净。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-02 · 依据仓库 README 与 GitHub 元数据</sub>
