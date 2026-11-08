---
date: 2026-11-07
repo: sherlock-project/sherlock
category: tools
categoryLabel: 开发工具 / 效率
rating: 4.5
language: Python
stars: 98577
starGain: 1761
url: https://github.com/sherlock-project/sherlock
tags: [cli, cti, cybersecurity, forensics, hacktoberfest, information-gathering, infosec, linux]
generatedAt: 2026-11-07T03:29:20.658Z
---

# sherlock-project/sherlock · 项目解读

> **一句话**：用一个用户名在 400 多个社交网络上查出对应账号，把分散的公开足迹收敛成一次检索。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Python |
| 星标 | 98,577 |
| 今日新增 | +1,761 |
| 仓库 | https://github.com/sherlock-project/sherlock |

## 1. 它解决什么问题

做开源情报（OSINT）或账号核查时，同一个用户名在各平台的存在性要逐个站点手工验证，站点清单还会随时间失效。需要的是一份可维护的目标列表与并发查询能力，把「某个名字在哪里出现过」变成一条命令能回答的问题，而不是几十次人工浏览。

## 2. 为什么是现在

项目 2,875 天、98,577 星，本期 +1,761 为全榜日增断层第一，远超第二名 +534。它是 MIT 许可、11,708 fork 的长期社区维护项目，README 只列 Installation、General usage、Credits、Star History、License，并说明 Debian、Ubuntu、Homebrew、Kali、BlackArch 等发行版已有社区打包（但非项目官方维护）。本期工具方向五席全为老牌 CLI/编辑器，如此高的单日增量属显著异常热度，值得单独留意。

## 3. 关键能力

- 按用户名在 400 多个社交网络上检索对应账号是否存在
- 命令行使用，覆盖 CTI、取证、信息收集与 infosec 等场景
- Debian、Ubuntu、Homebrew、Kali、BlackArch 等社区维护的安装包
- 社区驱动的目标站点清单持续更新，含 Credits 与 Star History 章节

## 4. 架构与实现

Python 实现、MIT 许可，主体是一个 CLI 加一份可维护的站点清单：对每个目标站点构造探测请求，依据响应判定账号是否存在，并发汇总结果。README 分 Installation、General usage、Credits、Star History、License 五节，明确各发行版包由社区提供而非官方直接支持，因此站点定义与打包版本可能不同步。具体判定规则与速率限制策略不在摘录内，应以仓库数据与文档为准。

## 5. 上手路径

1. 按官方 Installation 安装（优先仓库方式），先用一个自己的公开用户名验证结果
2. 阅读 General usage，理解输出格式与站点清单的更新机制
3. 做正式调查前确认目标平台的使用条款与所在地区的合规要求
4. 把结果与人工复核结合，避免把「存在同名账号」误当作身份确认

## 6. 风险与边界

- 检索结果只是同名账号的存在性，不等同于同一自然人，误判会带来实际伤害
- 对第三方平台发起批量请求可能触发速率限制、封禁或违反其服务条款
- 社区打包版本与仓库主分支的站点清单可能不一致，结果可能随版本漂移
- 涉及个人信息的公开足迹汇总，用于调查之外目的时有明确隐私与伦理边界，需先取得合法依据

## 7. 谁该用 / 谁别碰

有合法授权的安全研究、威胁情报与数字取证人员，以及需要核查自身公开账号足迹的开发者。

## 8. 评分依据

热度增速 **100** · 社区规模 **94** · 更新活跃 **68** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：它把一件重复且易漏的手工活压成一次检索，价值在可维护的站点清单而非算法。适合有明确合规边界的专业场景；使用时务必区分「同名」与「同一人」，并遵守目标平台条款与隐私保护要求。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-07 · 依据仓库 README 与 GitHub 元数据</sub>
