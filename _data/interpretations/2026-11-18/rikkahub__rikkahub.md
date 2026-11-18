---
date: 2026-11-18
repo: rikkahub/rikkahub
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Kotlin
stars: 8964
starGain: 55
url: https://github.com/rikkahub/rikkahub
tags: [agent, android, app, chatgpt, deepseek, gemini, jetpack-compose, llm-ui]
generatedAt: 2026-11-18T02:26:10.291Z
---

# rikkahub/rikkahub · 项目解读

> **一句话**：MCP、Skills、Phone Use 与文件记忆，都塞进了一个原生 Android 客户端。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Kotlin |
| 星标 | 8,964 |
| 今日新增 | +55 |
| 仓库 | https://github.com/rikkahub/rikkahub |

## 1. 它解决什么问题

手机上的 LLM 客户端大多只是聊天壳：换供应商要重配、复杂 Markdown 显示不全、agent 能力与工具调用基本缺席；想在移动端用 MCP 或让模型操作手机，通常得自己拼好几个应用。

## 2. 为什么是现在

本期 8,964 星、907 fork、304 个 open issue，616 天项目今日 +55；README 把 Workspace（proot Linux agent 环境）、Phone Use、MCP 与 Skills 支持、文件记忆与搜索服务并列为常规特性，说明移动端已从「能对话」推进到「能带工具干活」。

## 3. 关键能力

- 多供应商切换：自定义 API/URL/模型，覆盖 OpenAI、Google、Anthropic 兼容接口
- Workspace 提供基于 proot 的 Linux agent 环境；Phone Use 允许 AI 操作手机
- MCP 与 Skills 支持、agent 自定义、基于文件的记忆，以及图像与视频生成
- Markdown 渲染含代码高亮、LaTeX 公式、表格与 Mermaid；支持 Exa、Tavily、Zhipu、LinkUp、Brave、Perplexity 等搜索
- 提示词变量、自定义 HTTP 请求头与请求体、供应商配置二维码导入导出、AI 翻译、Silly Tavern 角色卡导入
- Material 3 Expressive 界面，另有 Web 端支持多平台访问

## 4. 架构与实现

纯原生 Android 应用：Kotlin + Jetpack Compose 负责 UI，Room 存会话与配置、DataStore 存偏好、Koin 做依赖注入、OkHttp 承担网络、Coil 加载图片，Navigation 3 管理导航、kotlinx.serialization 处理 JSON。模型请求按供应商配置动态组装，MCP/Skills 与搜索能力作为可插拔工具层接入；Workspace 借 proot 在应用内起一个 Linux 用户态环境供 agent 使用。

## 5. 上手路径

1. 装好后先只配置一个兼容供应商与一个模型，跑通基础对话与 Markdown 渲染
2. 用二维码导出/导入把同一份供应商配置移到第二台设备，确认配置可迁移
3. 接一个 MCP 服务或装一个 Skill，验证移动端工具调用链路是否顺畅
4. 最后再试 Workspace 与 Phone Use，注意这类能力的权限与耗电影响

## 6. 风险与边界

- 304 个 open issue 说明功能面很宽，Workspace（proot）与 Phone Use 对系统版本、权限与性能较敏感
- Phone Use 让模型操作手机，等于把高权限交给 agent，误操作与隐私影响需先设边界
- 多供应商、自定义请求头/请求体与角色卡导入都扩大配置面，配错容易出现难以定位的请求失败
- 图像/视频生成与多家搜索服务依赖外部供应商，成本与数据外发范围需自行核对
- AGPL-3.0 许可，二次分发或基于其做产品需评估合规义务

## 7. 谁该用 / 谁别碰

希望在手机上同时使用多个模型、MCP 工具与 agent 能力的高级用户；只需稳定文本对话、或对高权限自动化敏感的场景，功能密度反而会成为负担。

## 8. 评分依据

热度增速 **82** · 社区规模 **75** · 更新活跃 **70** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把 MCP、Skills、Workspace 与 Phone Use 集成进原生 Android 客户端，完成度与功能密度都高于同类聊天壳，技术栈选型也清晰。代价是功能面宽、issue 较多，且 Phone Use 属高权限能力；建议按「先基础对话、再工具层、最后自动化」的顺序逐步启用，并单独评估权限边界。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-18 · 依据仓库 README 与 GitHub 元数据</sub>
