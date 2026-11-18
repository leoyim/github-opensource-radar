---
date: 2026-11-18
repo: atuinsh/atuin
category: tools
categoryLabel: 开发工具 / 效率
rating: 4
language: Rust
stars: 32509
starGain: 21
url: https://github.com/atuinsh/atuin
tags: [bash, fish, history, rust, shell, zsh]
generatedAt: 2026-11-18T02:26:10.291Z
---

# atuinsh/atuin · 项目解读

> **一句话**：终端历史第一次同时服务人和 agent，还能跨机器、跨 harness 续接会话。

| 指标 | 值 |
| --- | --- |
| 分类 | 开发工具 / 效率 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Rust |
| 星标 | 32,509 |
| 今日新增 | +21 |
| 仓库 | https://github.com/atuinsh/atuin |

## 1. 它解决什么问题

默认 shell history 只存命令文本，没有退出码、目录、主机与耗时，也不跨机器；而编码 agent 的会话记录又散落在各家 harness 里，换台机器或换个工具就断了上下文。

## 2. 为什么是现在

本期 32,509 星、1,047 fork、457 个 open issue，2,235 天项目今日 +21；README 把「Shell history」与「Agent Threads」并列，并提供内置 MCP server 让 agent 检索历史，说明终端记录正在从个人便利工具变成 agent 的上下文基础设施。

## 3. 关键能力

- 用 SQLite 取代 shell history，记录退出码、工作目录、主机名、命令耗时等上下文
- Ctrl-R 全量检索任意历史命令，支持执行或 Tab 编辑后执行
- 捕获 Claude Code、Codex、OpenCode 等 agent 会话形成 threads，atuin resume 可在另一台机器、另一个 harness 续接
- 内置 MCP server，让 agent 也能搜索全部终端历史
- 历史与 threads 可端到端加密跨机器同步，也可完全离线使用

## 4. 架构与实现

本地 SQLite 数据库为单一事实来源，shell 钩子在每条命令执行前后写入上下文；检索 UI 由 Rust 实现的 TUI 提供。同步服务可选，数据端到端加密；agent threads 由各 harness 的会话记录导入，MCP server 把同一份历史以工具形式暴露给 agent，因此人机共用一套可检索的上下文。

## 5. 上手路径

1. 按官方文档安装（curl --proto '=https' --tlsv1.2 -LsSf https://setup.atuin.sh | sh），重启 shell
2. 先用 Ctrl-R 检索几天前的命令，确认目录、退出码等上下文都已记录
3. 再开启 agent threads 捕获，在一台机器上起一个 thread、另一台上 atuin resume 验证续接
4. 需要多机时再决定是否启用加密同步；敏感环境可保持完全离线

## 6. 风险与边界

- 终端历史会完整记录命令，可能含密钥与内网地址，同步前务必确认加密与访问控制
- 安装走 curl 管道执行脚本，建议先审阅脚本内容再运行
- 457 个 open issue，跨 shell（bash/zsh/fish）与多平台的边角行为需留意
- agent threads 依赖各家 harness 的会话格式，harness 升级可能导致捕获中断
- MCP server 把历史暴露给 agent，等于扩大了可读取敏感上下文的主体范围

## 7. 谁该用 / 谁别碰

多机办公、重度使用终端并同时跑多个编码 agent 的开发者；对命令记录合规敏感或完全不需要跨机同步的环境，可只用离线模式并关闭 agent 暴露面。

## 8. 评分依据

热度增速 **68** · 社区规模 **83** · 更新活跃 **74** · 工程成熟 **90**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：把 shell 历史升级为带上下文的可检索数据库已经是成熟能力，新增的 agent threads 与 MCP 检索是更值得关注的方向——它让「换台机器接着干」真正覆盖到 agent 会话。前提是先把敏感命令与暴露面管好，建议从纯离线模式起步。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-18 · 依据仓库 README 与 GitHub 元数据</sub>
