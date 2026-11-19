---
date: 2026-11-19
repo: Chevey339/kelivo
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4
language: Dart
stars: 4665
starGain: 80
url: https://github.com/Chevey339/kelivo
tags: [ai, android, chatbot, chatbox, flutter, flutter-apps, harmony, harmonyos]
generatedAt: 2026-11-19T02:32:35.179Z
---

# Chevey339/kelivo · 项目解读

> **一句话**：把多模型、MCP、skills 与工作区塞进一个本地优先的跨端客户端。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟 4.0 / 5.0 |
| 语言 | Dart |
| 星标 | 4,665 |
| 今日新增 | +80 |
| 仓库 | https://github.com/Chevey339/kelivo |

## 1. 它解决什么问题

各家模型与订阅分散在不同 App 与网页里，切换成本高；移动端想让模型真正干活又缺文件和命令执行环境；同时不少客户端要求注册自有账号、把会话放在云端，数据边界不清晰。

## 2. 为什么是现在

本期 4,665 星、530 fork、当日 +80，447 天，626 个 open issue；README 把「原生协议 + 账号登录 + MCP + skills + workspace」并列为常规能力，并明确「无自有账号体系、数据全本地、可选 WebDAV / S3 备份」，说明跨端 LLM 客户端的竞争点已转向协议覆盖与本地自治。

## 3. 关键能力

- Flutter 跨 Android、iOS、macOS、Windows、Linux（鸿蒙在独立仓库），原生支持 OpenAI Chat Completions / Responses、Gemini 与 Vertex AI、Anthropic Claude 及任意 OpenAI 兼容端点
- 内置 OpenAI、Gemini、Claude、DeepSeek、OpenRouter、SiliconFlow、阿里云、智谱、xAI、字节等预设，也支持 ChatGPT(Codex)、Grok、Kimi Code 账号登录并同步可用模型与额度
- 多 API key 负载均衡（轮询/优先级/最少使用/随机）与错误跟踪、按模型设推理级别与自定义 token 预算、自定义请求头与请求体、按提供商配 HTTP/HTTPS/SOCKS5 代理
- 不止聊天：联网搜索、调用 MCP server、遵循 skills、记忆；绑定 workspace 后模型可读写文件并执行命令（手机端 Linux 沙箱、桌面端原生 shell）
- 会话、设置与文件全部本地存储，无自有账号系统，可备份到 WebDAV 或 S3 兼容存储

## 4. 架构与实现

Flutter 单一代码库覆盖五端，模型接入层把不同厂商的原生协议与 OpenAI 兼容协议统一成一套 provider 抽象，能力（工具、推理、多模态）按模型声明并可在输入栏按会话开关。工作区在移动端借助随 App 打包或可安装的 Linux 环境提供文件与命令能力，桌面端直接用原生 shell；所有状态落本地，云只承担可选的备份角色。

## 5. 上手路径

1. 在 Settings → Providers 填一个 API key 或用受支持的账号登录，拉取模型列表
2. 从输入栏选模型，按会话打开联网搜索、MCP、工具或推理，验证能力开关是否生效
3. 在 Settings → Workspace & environment 建一个 workspace 并绑定到会话，让模型读改一个测试目录
4. 按需配置多 key 负载均衡与 WebDAV / S3 备份，确认没有引入不需要的云端依赖

## 6. 风险与边界

- 626 个 open issue，跨五端与多协议组合覆盖面大，个别 provider 的行为可能不一致
- 工作区允许模型读写文件并执行命令，移动端沙箱与桌面端原生 shell 的权限边界要自行收紧
- AGPL-3.0 许可对二次分发与闭源集成有明确要求，商用前需评估合规影响
- README 含多家 API 中转服务商赞助信息，选用第三方端点时的密钥与数据边界由使用者判断

## 7. 谁该用 / 谁别碰

需要在手机与桌面间用同一套配置访问多家模型、并希望会话与文件留在本机的重度用户；只需单一官方 App 或不能接受模型执行命令的环境不适用。

## 8. 评分依据

热度增速 **85** · 社区规模 **70** · 更新活跃 **72** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.0 星**）

**结论**：协议覆盖与本地自治做得比一般客户端扎实，workspace + MCP + skills 让移动端也能真正干活，而不只是聊天。代价是权限面明显变大，且 AGPL 与多 provider 组合需要提前评估。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-19 · 依据仓库 README 与 GitHub 元数据</sub>
