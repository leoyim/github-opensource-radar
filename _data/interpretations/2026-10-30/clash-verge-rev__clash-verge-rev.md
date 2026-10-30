---
date: 2026-10-30
repo: clash-verge-rev/clash-verge-rev
category: mobile
categoryLabel: 移动 / 桌面 / 跨端
rating: 4.5
language: Rust
stars: 154932
starGain: 295
url: https://github.com/clash-verge-rev/clash-verge-rev
tags: [clash, clash-meta, clash-verge, linux, mac, mihomo, tauri-app, windows]
generatedAt: 2026-10-30T01:49:59.370Z
---

# clash-verge-rev/clash-verge-rev · 项目解读

> **一句话**：Tauri 前端加 mihomo 内核，这个组合已是该赛道的事实标准。

| 指标 | 值 |
| --- | --- |
| 分类 | 移动 / 桌面 / 跨端 |
| 评分 | 🌟🌟🌟🌟🌗 4.5 / 5.0 |
| 语言 | Rust |
| 星标 | 154,932 |
| 今日新增 | +295 |
| 仓库 | https://github.com/clash-verge-rev/clash-verge-rev |

## 1. 它解决什么问题

mihomo 内核能力强但配置门槛高：YAML 手写、策略组概念陌生、规则优先级易错。clash-verge-rev 提供现代 GUI，把订阅管理、规则编辑、策略组切换与系统代理配置可视化，让非专家也能正确使用内核。

## 2. 为什么是现在

今日 +295 星，项目 1073 天，15 万星。它在移动/桌面跨端类长期占据头部，本期增量主要来自版本更新与订阅生态活跃。值得注意的是它是 Tauri 生态里最成功的消费级案例之一——与同日 electron 形成技术路线对照。

## 3. 关键能力

- 订阅导入、更新与多订阅合并
- 规则与策略组可视化编辑
- 系统代理与 TUN 模式切换
- 三平台安装包：Windows x64/x86、Linux x64/arm64、macOS 11+（Intel 与 Apple Silicon）
- 内核版本管理与独立升级
- 配置覆写（override）机制，避免手改生成文件

## 4. 架构与实现

Tauri 架构：Rust 后端管理 mihomo 子进程与系统代理设置，Web 前端负责配置编辑与状态展示。配置由前端按模板生成 YAML 交给内核，用户改动以覆写片段形式叠加，因此内核升级不会冲掉自定义规则。

## 5. 上手路径

1. 先导入订阅，只切一个节点验证连通，再动规则
2. 规则改动用覆写而非直接编辑生成配置，否则下次生成会被覆盖
3. TUN 模式需处理与其他 VPN、虚拟网卡的冲突，先确认系统网络栈状态
4. GUI 与内核版本要匹配，跨版本组合容易出现启动失败

## 6. 风险与边界

- README 中混有第三方机场广告，需甄别官方内容与推广
- 规则配置错误可能导致流量泄漏（未走代理或走错代理），需用规则测试页验证
- GPL-3.0 许可
- macOS 与 Windows 需处理签名、权限与开机自启，企业环境部署有额外摩擦

## 7. 谁该用 / 谁别碰

需要精细分流规则的桌面用户。只要「一键连上」的场景用更简单的客户端即可。

## 8. 评分依据

热度增速 **96** · 社区规模 **96** · 更新活跃 **76** · 工程成熟 **100**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **4.5 星**）

**结论**：软件本身成熟。真正的风险在配置正确性——分流规则写错时，它不会报错，只会静默泄漏。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-10-30 · 依据仓库 README 与 GitHub 元数据</sub>
