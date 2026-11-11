---
date: 2026-11-11
repo: mikefarah/yq
category: backend
categoryLabel: 后端 / 云原生
rating: 3.5
language: Go
stars: 16260
starGain: 9
url: https://github.com/mikefarah/yq
tags: [bash, cli, csv, devops-tools, golang, hcl, json, portable]
generatedAt: 2026-11-11T03:04:52.682Z
---

# mikefarah/yq · 项目解读

> **一句话**：jq 语法的 YAML/JSON/XML/CSV/TOML/HCL 处理器，单个无依赖二进制，适合塞进任何 CI 镜像。

| 指标 | 值 |
| --- | --- |
| 分类 | 后端 / 云原生 |
| 评分 | 🌟🌟🌟🌗 3.5 / 5.0 |
| 语言 | Go |
| 星标 | 16,260 |
| 今日新增 | +9 |
| 仓库 | https://github.com/mikefarah/yq |

## 1. 它解决什么问题

配置文件的格式越来越多（YAML、JSON、TOML、HCL、XML、properties），每换一种就要换一个工具、记一套语法；在 CI 里做「读一个字段、改一个值、转一种格式」往往要装 Python 或 Node 运行时。

## 2. 为什么是现在

4,063 天、16,260 星、1,296 fork、323 个 open issue，属于被长期验证的基础设施。它没有热点故事，但每天都在被流水线调用——这类工具出现在榜单上，通常意味着某批团队正在集中替换配置处理链路，或在新项目里重新选型。

## 3. 关键能力

- 读取与就地修改（-i）YAML/JSON/XML/CSV/TSV/TOML/HCL/properties/INI
- 沿用 jq 的路径表达式与常用函数，学习成本可复用
- 多文件合并（含 glob 批量求值 ea）与多步更新管道
- 格式互转：JSON→YAML、YAML→JSON、XML→YAML 等
- 环境变量注入（strenv）与从 STDIN 管道读取
- 单二进制分发，另有 Docker/Podman 镜像与主流包管理器渠道

## 4. 架构与实现

Go 编写，MIT 许可，编译为无运行时依赖的静态二进制——这是它在容器与边缘环境里被广泛采用的根因。README 坦承「尚未支持 jq 的全部能力，但覆盖常用操作并持续补齐」，这种表述比宣称完全兼容更可信。注意 -i 对符号链接的行为是替换链接本身而非目标文件，脚本里需要留意。

## 5. 上手路径

1. 用包管理器或直接下载二进制安装，先跑 yq --version 确认版本语义（v4 与 v3 语法差异大）
2. 从 yq '.a.b[0].c' file.yaml 开始熟悉路径表达式
3. 改配置用 yq -i，并在版本控制下先 diff 再提交
4. 多文件合并优先用 ea 一次性求值，避免逐个覆盖的顺序问题
5. 在 CI 中固定版本号，避免上游行为变化导致流水线漂移

## 6. 风险与边界

- v3 与 v4 语法不兼容，网上大量旧教程会直接报错
- -i 就地修改对符号链接是替换链接，K8s 挂载的 ConfigMap 场景需特别小心
- 323 个 open issue 说明边界情况仍多，复杂表达式建议先在临时文件验证
- 对不同格式的支持深度不一，XML 与 HCL 的能力弱于 YAML/JSON

## 7. 谁该用 / 谁别碰

写 CI/CD 流水线、需要在无运行时环境里处理配置的 DevOps 工程师；日常要改 K8s 清单、Helm values 与各类配置文件的开发者。

## 8. 评分依据

热度增速 **62** · 社区规模 **80** · 更新活跃 **61** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.5 星**）

**结论**：它不是新东西，但「单二进制 + jq 语法 + 多格式」这个组合至今没有等量替代。出现在今日榜单更像是一次集体重新确认：在容器与流水线里，少一个运行时依赖就少一类故障。使用时注意 v4 语法与 -i 的符号链接语义即可。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-11 · 依据仓库 README 与 GitHub 元数据</sub>
