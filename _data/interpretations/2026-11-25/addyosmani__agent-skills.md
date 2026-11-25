---
date: 2026-11-25
repo: addyosmani/agent-skills
category: agent
categoryLabel: SKILL / MCP / Agent
rating: 4.5
language: JavaScript
stars: 120216
starGain: 212
url: https://github.com/addyosmani/agent-skills
tags: [agent-skills, antigravity, claude-code, codex, cursor, skills]
generatedAt: 2026-11-25T02:41:50.438Z
---

# addyosmani/agent-skills · 项目解读

> **一句话**：把资深工程师的工作流写成 agent 可执行、可堵漏的技能库。

| 指标 | 值 |
| --- | --- |
| 分类 | SKILL / MCP / Agent |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | JavaScript |
| 星标 | 120,216 |
| 今日新增 | +212 |
| 仓库 | https://github.com/addyosmani/agent-skills |

## 1. 它解决什么问题

让 agent 按工程纪律工作很难：写在文档里它不执行，写进 prompt 又太软；跳过测试、跳过评审这类「合理化借口」几乎没有现成的系统性对策。

## 2. 为什么是现在

120,216 星、上线 282 天、JavaScript、MIT，fork 12,498、日增 212。它的差异化设计集中在三处：反合理化表、验证不可协商、渐进披露；六阶段流程对应六个入口命令，结构清晰可裁剪。

## 3. 关键能力

- DEFINE、PLAN、BUILD、VERIFY、REVIEW、SHIP 六阶段技能，对应 /spec 到 /ship 六个命令
- 每条技能是带步骤、检查点与退出条件的工作流，不是参考文档
- 反合理化表：把 agent 常用跳步借口逐条列出并写成禁止项
- 验证收尾：测试通过、构建产物、运行数据等证据要求不可协商
- 渐进披露：SKILL.md 为入口，支撑材料按需加载控制 token

## 4. 架构与实现

纯技能包结构（Markdown 为主的 SKILL.md + 引用文件），不依赖特定运行时；命令入口映射到宿主 CLI 的技能调用机制，引用文件按需加载。

## 5. 上手路径

1. 挑 /test 与 /review 两条先试：一条验证收尾是否真挡住了糊弄式通过
2. 对照反合理化表复盘自己 agent 的历史对话，统计跳步频率的变化
3. 把技能库 fork 后按团队规范裁剪，删掉与现有 hooks 重复的条目
4. 再用 /spec 到 /ship 全流程跑一个小需求，观察各检查点的实际拦截

## 6. 风险与边界

- 约束的是流程而非结果，agent 仍可能产出通过验证但方向错误的实现
- 技能与项目既有 CLAUDE.md、hooks 叠加时需去重，两处维护会漂移
- 六阶段全流程对小需求偏重，需要按规模裁剪
- 技能文本的英文表述为主，团队规范本地化后要维护同步

## 7. 谁该用 / 谁别碰

想给 agent 立规矩的个人开发者与团队；需要把工程纪律固化为可执行流程的技术负责人。

## 8. 评分依据

热度增速 **85** · 社区规模 **95** · 更新活跃 **65** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：「反合理化表 + 证据收尾」是同类技能库里少见的硬设计，直接针对 agent 的偷懒路径；当作流程骨架用价值明确，全量照搬则偏重，按团队实际裁剪是正确用法。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-25 · 依据仓库 README 与 GitHub 元数据</sub>
