---
date: 2026-11-15
repo: dreammis/social-auto-upload
category: tools
categoryLabel: 开发工具 / 效率
rating: 3.5
language: Python
stars: 16548
starGain: 34
url: https://github.com/dreammis/social-auto-upload
tags: [agent-skills, bilibili, douyin, tiktok, xiaohongshu, youtube]
generatedAt: 2026-11-15T03:39:52.494Z
---

# dreammis/social-auto-upload · 项目解读

> **一句话**：把多平台发布收进一个可编排、可交给 agent 的命令行。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Python |
| 星标 | 16,548 |
| 今日新增 | +34 |
| 仓库 | https://github.com/dreammis/social-auto-upload |

## 1. 它解决什么问题

做内容矩阵时，同一条视频要在多个平台重复登录、填表、上传与核对，人工操作琐碎且难以复现；各平台的自动化脚本又往往各自为政，缺少统一入口与文档。

## 2. 为什么是现在

16,548 星、2,808 fork、1,077 天历史，本期 +34。README 已把「供 Codex、OpenClaw、Claude Code 等 Agent 使用的 Skill」写进定位，命令按平台维护在 sau commands/、发布流程位于 uploader/，是本期工具方向「agent 技能化」的第二例，且已有稳定的 Release 与 CHANGELOG。

## 3. 关键能力

- 统一 CLI 覆盖抖音、小红书、视频号、TikTok、YouTube、B 站等多个平台
- 提供可供 Codex、OpenClaw、Claude Code 等 agent 使用的 Skill
- 命令按平台模块化维护，发布流程独立在 uploader/ 目录
- 给出 CLI 与 examples 两种上手方式、详细文档与交流支持渠道
- 有 CHANGELOG 与 GitHub Release 稳定版本，另按内容形态划分功能说明

## 4. 架构与实现

Python 实现，CLI 作为统一入口按平台名分发到 sau commands/ 下的具体命令模块，实际上传由 uploader/ 中的流程处理；Skill 层把这套命令包装成 agent 可调用的步骤，因此人工与 agent 复用同一份平台实现。

## 5. 上手路径

1. 按安装指南配置环境，先用一个平台跑 examples 里的示例，确认登录态如何保存
2. 阅读对应平台的文档，核对登录要求与字段限制，避免直接照搬其他平台参数
3. 用 CLI 发布一条测试内容，检查标题、标签与可见性设置是否符合预期
4. 需要 agent 编排时再接入 Skill，并把凭据与登录态排除在版本库之外

## 6. 风险与边界

- 各平台登录与接口规则会变化，自动化脚本可能失效，使用前需查阅对应平台文档与服务条款
- README 含较多赞助与推广内容，技术信息需从安装指南与详细文档中筛选
- 登录态与 Cookies 属敏感凭据，误提交或明文存放风险较高
- 批量发布涉及内容合规与账号规则，自动化不应替代发布前的人工审核

## 7. 谁该用 / 谁别碰

适合做多平台内容分发、能自行维护登录态并遵守各平台规则的创作者与运营工具链；不适合对账号安全要求极高、或无法接受平台接口变动的场景。

## 8. 评分依据

热度增速 **80** · 社区规模 **82** · 更新活跃 **15** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：平台覆盖广、结构清晰、已形成稳定版本，是自建发布流水线的实用起点；把凭据管理与平台规则变更当作长期维护项，而非一次性配置。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-15 · 依据仓库 README 与 GitHub 元数据</sub>
