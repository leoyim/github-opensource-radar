# 2026-11-13 · 逐项解读目录

本期共 22 个项目，独立解读 22 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **今日增量几乎集中在两项「给 agent 定规矩」的仓库**：22 项里 11 项有前一日基线，合计日增 +1,979；其中 GoogleChrome/modern-web-guidance-src +739、openai/codex-security +643 两项就占约 69.8%。前端方向 750、AI 方向 739，其余四个方向合计不足 500。这不是一次全栈同步升温，而是注意力集中在「编码 agent 该按什么知识、什么安全流程做事」上；读榜单时不宜把日增理解成各方向普遍走强。
- **半壁是千日以上的老牌基础设施**：22 项中有 11 项年龄超过 1,000 天：Jenkins 5,834 天、axios 4,469 天、Rocket.Chat 4,196 天、frp 3,979 天、BuildKit 3,452 天等；同时还有 4 项不超过 30 天的新仓。TypeScript 占 11 项，正好一半。老项目本期日增多为两位数甚至个位数，但它们在接入、检索、存储、构建、调度、请求层这些位置上的存在，决定了新工具要对接的现实环境。
- **本期主线不是新模型，而是 agent 的知识、流程与权限**：modern-web-guidance-src 把浏览器兼容数据与最佳实践做成可检索技能，codex-security 把发现到修复串成工作流，vercel-labs/ui 把键盘与 ARIA 行为抽成 agent 可组合的原语，universal-modder 让 agent 把勘察结果写成下一个 agent 能用的知识库，agentes-chat 则给 agent 配角色、预算与审批。五项分别落在知识、流程、交互、经验与组织五个切面，共同动作是定义 agent 该怎么工作，而非提升模型能力本身。
- **让 agent 接触真实设备，本期出现了两条低成本路径**：esp32-iphone-agent 用约 7 美元的 ESP32 加 AirPlay 与 USB HID，让模型看屏幕、点手机，不需要电脑、开发者账号或越狱；lcu 则把 Codex 的 computer-use 运行时从桌面应用中解耦给任意 harness，并把逐应用授权留在本机完成。一条走通用硬件，一条走运行时适配，都避开了云设备农场；代价分别是硬件与系统权限的前置条件，以及被控账号必须隔离。
- **本地优先与自托管同时出现在创作、协作与后端三条线**：yovoice 把语音与音乐生成全部放在本机且零 API 费用，Hermes-CN-Desktop 用 Tauri 把 agent 内核与凭据收进桌面端，raea 让视频在本机 GPU 上渲染；协作与后端侧则有 supabase、appwrite、Rocket.Chat、n8n 都把自托管写成一等选项。不同领域的共同取舍是数据与执行留在自己可控的环境，相应地，备份、升级与凭据保护也回到使用方手上。
- **数据与工具方向本期各只一项，后端五项日增合计仅 58**：数据方向仅 supabase（+97），工具方向仅 n8n（+167）；后端五项的日增合计只有 58，其中 Solr、Ozone、BuildKit、Jenkins 四项都是长期运行的基础设施。把这些放在一起看，本期的结构更接近「少数规范型项目拉动增量、多数常驻组件维持稳定」；方向数量与每方向席位的差异，本身就说明了当日候选池的分布。
- **建模与渲染都在把生成结果写成可读程序**：sand3d 用几百 token 的 Python 短程序描述 3D 对象，具名部件、按名字引用、同一程序产出逐位一致的网格，整份 API 约 3,600 token；raea 把视频、动效与 3D 写成 React 组件，画面保持为可查询数据，agent 能渲染一帧、查看、再改。两者都避免把结果封进不可编辑的二进制文件，让「生成」变成可复核、可局部修改的工程过程；代价是各自的运行时依赖（Blender bpy、本机 GPU）仍不可省略。

## AI / 大模型

- **rehan-remade/universal-modder** · 🌟🌟🌟🌟 4.0 — 把「给游戏做 mod」拆成一套技能、一个共享知识库和一条可回放的工作流，交给任意编码 agent 执行。（[Markdown](rehan-remade__universal-modder.md) / [HTML](rehan-remade__universal-modder.html)）
- **GoogleChrome/modern-web-guidance-src** · 🌟🌟🌟🌟 4.0 — 把浏览器兼容数据和 Web 平台最佳实践做成 agent 技能，让编码模型少写过时的写法。（[Markdown](GoogleChrome__modern-web-guidance-src.md) / [HTML](GoogleChrome__modern-web-guidance-src.html)）
- **onehumanbeing/esp32-iphone-agent** · 🌟🌟🌟🌟 4.0 — 一块 7 美元的开发板，让模型通过屏幕镜像看 iPhone、通过 USB HID 动手操作，不需要电脑也不越狱。（[Markdown](onehumanbeing__esp32-iphone-agent.md) / [HTML](onehumanbeing__esp32-iphone-agent.html)）
- **Sandflow-ai/sand3d** · 🌟🌟🌟🌟 4.0 — 让 3D 对象变成几百 token 的 Python 短程序：部件有名字、结果可复现，模型写得动，人也读得懂。（[Markdown](Sandflow-ai__sand3d.md) / [HTML](Sandflow-ai__sand3d.html)）
- **agentes-chat/agentes-chat** · 🌟🌟🌟🌟 4.0 — 把 AI agent 当成频道里的正式成员：有角色、有预算、有审批，人和 agent 在同一段对话里交接工作。（[Markdown](agentes-chat__agentes-chat.md) / [HTML](agentes-chat__agentes-chat.html)）

## 前端 / Web

- **openai/codex-security** · 🌟🌟🌟🌟🌗 4.5 — 把漏洞发现、验证、补丁与威胁模型串成一条可在终端、SDK 和 CI 里跑的安全工作流。（[Markdown](openai__codex-security.md) / [HTML](openai__codex-security.html)）
- **shinyobjectz/raea** · 🌟🌟🌟🌟 4.0 — 把视频、动效、3D 和游戏写成 React 组件，交给本机 GPU 渲染，并且画面始终是可以查询的数据。（[Markdown](shinyobjectz__raea.md) / [HTML](shinyobjectz__raea.html)）
- **vercel-labs/ui** · 🌟🌟🌟🌟 4.0 — 不给现成组件，只给交互行为：键盘、焦点、选择、浮层、拖放与对应 ARIA，由 agent 自己拼装界面。（[Markdown](vercel-labs__ui.md) / [HTML](vercel-labs__ui.html)）
- **axios/axios** · 🌟🌟🌟🌟 4.0 — 浏览器与 Node 共用一份 Promise HTTP 客户端，十二年过去仍在按安全边界持续修订。（[Markdown](axios__axios.md) / [HTML](axios__axios.html)）
- **RocketChat/Rocket.Chat** · 🌟🌟🌟🌟 4.0 — 以数据主权为前提的开源协作平台，把自托管、气隙部署与细粒度权限做成同一套可选项。（[Markdown](RocketChat__Rocket.Chat.md) / [HTML](RocketChat__Rocket.Chat.html)）

## 后端 / 云原生

- **fatedier/frp** · 🌟🌟🌟🌟 4.0 — 把 NAT 或防火墙后面的本地服务稳稳暴露出去，TCP、UDP、HTTP、HTTPS 与 P2P 都在一个客户端里。（[Markdown](fatedier__frp.md) / [HTML](fatedier__frp.html)）
- **apache/solr** · 🌟🌟🌟🌗 3.5 — 基于 Lucene 的搜索平台，把全文、向量与地理空间检索放在同一套可自托管的服务里。（[Markdown](apache__solr.md) / [HTML](apache__solr.html)）
- **apache/ozone** · 🌟🌟🌟🌗 3.5 — 为 Hadoop 与云原生环境准备的强一致对象存储，S3 与 HDFS 两套接口共用一个底座。（[Markdown](apache__ozone.md) / [HTML](apache__ozone.html)）
- **moby/buildkit** · 🌟🌟🌟🌗 3.5 — 把源码变成构建产物的底层工具包，缓存、并发与可插拔前端都围绕「可重复」设计。（[Markdown](moby__buildkit.md) / [HTML](moby__buildkit.html)）
- **jenkinsci/jenkins** · 🌟🌟🌟🌗 3.5 — 两千多个插件撑起来的开源自动化服务器，Weekly 与 LTS 两条发布线覆盖不同的升级节奏。（[Markdown](jenkinsci__jenkins.md) / [HTML](jenkinsci__jenkins.html)）

## 数据 / 数据库

- **supabase/supabase** · 🌟🌟🌟🌟🌗 4.5 — 以 Postgres 为底座的开发平台，把数据库、鉴权、自动 API、存储与向量能力收在同一个项目里。（[Markdown](supabase__supabase.md) / [HTML](supabase__supabase.html)）

## 开发工具 / 效率

- **n8n-io/n8n** · 🌟🌟🌟🌗 3.5 — 把可视化编排与自定义代码放在同一条工作流里，让 AI agent 流程也能自托管、可审批、可观测。（[Markdown](n8n-io__n8n.md) / [HTML](n8n-io__n8n.html)）

## 移动 / 桌面 / 跨端

- **tauri-apps/tauri** · 🌟🌟🌟🌟🌗 4.5 — 用系统自带的 WebView 加一枚 Rust 二进制，把桌面与移动应用做小、做快，也把攻击面收窄。（[Markdown](tauri-apps__tauri.md) / [HTML](tauri-apps__tauri.html)）
- **amontlabs/lcu** · 🌟🌟🌟🌟 4.0 — 把 Codex 的 computer-use 运行时从桌面应用里解耦出来，交给任意 harness 使用，审批仍留在本地。（[Markdown](amontlabs__lcu.md) / [HTML](amontlabs__lcu.html)）
- **leemysw/yovoice** · 🌟🌟🌟🌟 4.0 — 把 TTS、声音克隆、整曲生成与多轨编曲全部放在本机跑，不调用云端 API，也不装 Python 环境。（[Markdown](leemysw__yovoice.md) / [HTML](leemysw__yovoice.html)）
- **Eynzof/Hermes-CN-Desktop** · 🌟🌟🌟🌟 4.0 — Tauri 做的中文社区桌面客户端，把 agent 内核的安装、校验、回滚与全套 UI 都收进一个安装包。（[Markdown](Eynzof__Hermes-CN-Desktop.md) / [HTML](Eynzof__Hermes-CN-Desktop.html)）
- **appwrite/appwrite** · 🌟🌟🌟🌟 4.0 — 把 Auth、数据库、存储、函数与实时能力打包成一套可自托管的后端，并让编码 agent 直接操作真实项目。（[Markdown](appwrite__appwrite.md) / [HTML](appwrite__appwrite.html)）
