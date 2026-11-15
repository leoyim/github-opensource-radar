---
date: 2026-11-15
repo: ChromeDevTools/chrome-devtools-mcp
category: ai
categoryLabel: AI / 大模型
rating: 4.5
language: TypeScript
stars: 56361
starGain: 664
url: https://github.com/ChromeDevTools/chrome-devtools-mcp
tags: [browser, chrome, chrome-devtools, debugging, devtools, mcp, mcp-server, puppeteer]
generatedAt: 2026-11-15T03:39:52.494Z
---

# ChromeDevTools/chrome-devtools-mcp · 项目解读

> **一句话**：给编码 agent 配上一双能真正打开浏览器、看见运行时状态的眼睛。

| 指标 | 值 |
| --- | --- |
| 分类 | AI / 大模型 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | TypeScript |
| 星标 | 56,361 |
| 今日新增 | +664 |
| 仓库 | https://github.com/ChromeDevTools/chrome-devtools-mcp |

## 1. 它解决什么问题

编码 agent 大多只能读写源码，对页面实际渲染、控制台报错、网络瀑布与性能瓶颈缺少一手证据，优化建议容易停留在静态推断。以往要在自动化脚本里自己拼 Puppeteer 与 CDP 调用，工具面和 agent 的工作流彼此割裂。

## 2. 为什么是现在

本期日增 +664 居全榜第一，56,361 星、4,772 fork 与 Chrome DevTools 官方团队背景说明它已从实验项目变成事实标准接口。README 把 MCP 服务器、CLI、Skills 插件与用量/更新开关并列为正式能力，恰好呼应本期多项都在为 agent 补「可验证的外部世界接口」这一取向。

## 3. 关键能力

- 以 MCP 服务器或 CLI 接入 Claude、Cursor、Copilot 等编码 agent，控制并检查一个真实运行的 Chrome 实例
- 录制 Chrome DevTools 性能 trace，从原始调用栈中提取可执行的性能结论，而不只是给分数
- 读取控制台日志、网络请求与页面状态，用于复现与定位运行时缺陷
- 提供 Skills 目录与插件安装方式，把常用调试套路沉淀为 agent 可复用的技能
- 明确列出 Disclaimers、Usage statistics 与 Update checks，把遥测与边界放在明处供审阅

## 4. 架构与实现

底层复用 Chrome DevTools Protocol 与 Puppeteer 能力，向上以 MCP 服务器暴露结构化工具，向外另提供 CLI 便于脚本与 CI 调用；Skills 以文件目录形式随仓库分发，可被 agent 按需加载。README 按 Requirements、MCP Client configuration、Your first prompt 分层，把接入路径写成可照做的步骤。

## 5. 上手路径

1. 按 README 的 Requirements 确认 Node 与 Chrome 版本，在 MCP 客户端配置里加上该服务器并用第一个示例提示词验证连通
2. 让 agent 打开一个本地页面，读取控制台与网络请求，核对它与 DevTools 面板所见是否一致
3. 用性能 trace 场景跑一次真实页面，观察它给出的结论是否指向可改的具体代码位置
4. 需要批量或 CI 场景时改用 CLI 入口，并把 Skills 目录安装到 agent 的技能路径

## 6. 风险与边界

- 授予 agent 控制真实浏览器的权限，等同于授予其访问该浏览器会话内数据与凭据的能力，生产环境需隔离配置文件
- 性能结论强依赖运行环境与网络条件，同一页面在不同机器上的 trace 可能给出不同优先级
- README 明示存在用量统计与更新检查，对遥测敏感的团队需先确认关闭方式
- 依赖特定 Chrome 版本与 CDP 行为，浏览器升级后工具面可能出现兼容性波动

## 7. 谁该用 / 谁别碰

适合前端与全栈工程师、需要让 agent 自主复现线上问题的团队；不适合只做静态代码生成、或无法开放浏览器会话权限的受控环境。

## 8. 评分依据

热度增速 **99** · 社区规模 **89** · 更新活跃 **71** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：官方维护、协议层标准化、日增与社区体量都居前，是当前让编码 agent 获得运行时可观测性最直接的一条路径；先用只读场景验证结论可信度，再决定是否放开写操作。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-15 · 依据仓库 README 与 GitHub 元数据</sub>
