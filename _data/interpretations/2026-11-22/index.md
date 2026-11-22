# 2026-11-22 · 逐项解读目录

本期共 21 个项目，独立解读 21 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **21 项、7 个方向：主线是「把能力接到哪里」，不是再造模型**：本期 21 项分布在 ai 4 / agent 4 / frontend 1 / backend 3 / data 4 / tools 1 / mobile 4。AI 与 agent 合计 8 席，却没有一项在训练新模型：ponytail 与 inference-optimisation-skill 是技能包，dsh-our-free-model 与 magpie 处理模型从哪来、怎么切，OpenExecutive 与 Lody 处理 agent 如何进协作流程，open-code-review 则把 agent 嵌进评审流水线。重心已经从「模型能做什么」移到「能力怎么被安装、调用与交付」。
- **技能、网关与混合架构：agent 的宿主层正在成形**：本期出现三种不同的宿主层做法。技能层把方法论写成 agent 可执行的约束（ponytail 约束生成策略、inference-optimisation-skill 约束测量方法）；网关层把模型供给与配置收拢到一处（dsh-our-free-model 直连公共网关、magpie 统一改写各 agent 的配置键）；混合架构则在流程内部划界（open-code-review 用确定性流水线保证文件覆盖与行号，只把语义判断交给模型）。三者的共同判断是：模型之外那一层，才是当前最缺工程化的部分。
- **本地优先不再是个别选择，而是贯穿五个方向的默认约束**：notecraft 把笔记落成普通文件夹、RustGIS 让地理数据默认不出本机、ElyOffice 明说不需要账号与云服务、Jiumi 把监测记录留在手机本地、Crest 用 Spaces 隔离凭据与历史，inferssd 干脆把模型权重放在本地 SSD 上流式换入。它们分处后端、数据、移动与跨端，却都在拆掉「必须上云」这个前提。对使用者的实际变化是成本结构从按次付费转向一次性硬件投入，代价是运维、备份与调优回到自己身上。
- **老将与新仓同台，年龄差本身就是选型信息**：apache/skywalking 已 4,033 天、当日新增 1 星；t8y2/dbx 207 天、ponytail 163 天；另一头是 5 天的 inference-optimisation-skill、8 天的 Jiumi 与 AgentCake、20 天的 ant。星标数会把它们排在一张榜上，但可用性完全不在一个量级：老项目的问题是路径依赖与升级成本，新项目的问题是还没经过真实流量与长期维护。看 ageDays 与 issue 结构，往往比看总星标更有信息量。
- **热度口径：12 项有可比日增，合计 +2,852，其余 9 项不宜相加**：本期 12 项有可比的当日增量，合计约 +2,852 星，其中 agent 方向 1,290（45.2%）、AI 方向 1,098（38.5%），两者合计约 83.7%；单项最高是 dsh-our-free-model +860，其次 ponytail +780。另有 9 项以速度估算入榜、没有可比基线，包括 MROffice、OpenExecutive、Lody、notecraft、ant、Jiumi、ElyOffice、inferssd 与 Crest。把两类数字混在一起做「全榜热度」并没有意义，跨期比较时也要先确认口径是否一致。
- **数据方向四席，四种完全不同的切入点**：dbx 是覆盖 100+ 数据库的客户端并顺带提供 MCP 接入，kividb 是兼容 Redis 协议的内存引擎并把全文与向量检索做进去，ant 是 Go 泛型强类型 ORM，AgentCake 则把「访客是不是 AI agent」变成可回放的分析维度。四项分别落在工具、引擎、开发接口与流量观测四个层面，说明数据层当前的竞争不只在吞吐，还在「谁更靠近应用与 agent 的接入面」。
- **前端与工具方向各只有 1 项，样本偏少**：本期前端只有 CozyClay（浏览器内 3D 预演，把镜头先定死再交给视频模型），工具只有 open-code-review（确定性流水线与 LLM 混合的代码评审）。两席都不缺代表性：一个在补生成式视频缺的可控性，一个在补 agent 评审缺的确定性。但单期各 1 项不足以判断两个方向的整体走势，更适合当作具体案例看，而不是趋势结论。

## AI / 大模型

- **DietrichGebert/ponytail** · 🌟🌟🌟🌟🌗 4.5 — 把「最好的代码是没写的代码」做成编码 agent 的技能约束。（[Markdown](DietrichGebert__ponytail.md) / [HTML](DietrichGebert__ponytail.html)）
- **XinaTian/MROffice** · 🌟🌟🌟🌟 4.0 — 开源编辑器源码可嵌可自建，但 Office 文件读写仍在服务侧。（[Markdown](XinaTian__MROffice.md) / [HTML](XinaTian__MROffice.html)）
- **ForeactLabs/OpenExecutive** · 🌟🌟🌟🌟 4.0 — 8 个专职 agent 组成的虚拟高管团队，关键动作前留审批闸门。（[Markdown](ForeactLabs__OpenExecutive.md) / [HTML](ForeactLabs__OpenExecutive.html)）
- **sybil-solutions/inference-optimisation-skill** · 🌟🌟🌟🌗 3.5 — 把本地推理调参变成单变量、可复现的爬山实验。（[Markdown](sybil-solutions__inference-optimisation-skill.md) / [HTML](sybil-solutions__inference-optimisation-skill.html)）

## SKILL / MCP / Agent

- **Ebony-Vinyl/dsh-our-free-model** · 🌟🌟🌟🌟🌗 4.5 — dsh 插件把公共网关的模型清单接成开箱即用的车道。（[Markdown](Ebony-Vinyl__dsh-our-free-model.md) / [HTML](Ebony-Vinyl__dsh-our-free-model.html)）
- **Gathin23/cleanyourtv** · 🌟🌟🌟🌟🌗 4.5 — 给电视做系统级精简与桌面替换，并自带恢复路径。（[Markdown](Gathin23__cleanyourtv.md) / [HTML](Gathin23__cleanyourtv.html)）
- **yetone/magpie** · 🌟🌟🌟🌟🌗 4.5 — 一个菜单栏入口，统一切换所有编码 agent 的模型与订阅。（[Markdown](yetone__magpie.md) / [HTML](yetone__magpie.html)）
- **LodyAI/Lody** · 🌟🌟🌟🌟 4.0 — 把团队已在用的编码 agent 接进共享工作区，机器默认私有。（[Markdown](LodyAI__Lody.md) / [HTML](LodyAI__Lody.html)）

## 前端 / Web

- **HaD0Yun/CozyClay** · 🌟🌟🌟🌟 4.0 — 先把镜头定死，再交给 AI 生成视频。（[Markdown](HaD0Yun__CozyClay.md) / [HTML](HaD0Yun__CozyClay.html)）

## 后端 / 云原生

- **AlienTechSoftware/notecraft** · 🌟🌟🌟🌗 3.5 — 笔记本就是文件夹，页面就是 html 或 md 文件。（[Markdown](AlienTechSoftware__notecraft.md) / [HTML](AlienTechSoftware__notecraft.html)）
- **opengeos/RustGIS** · 🌟🌟🌟🌗 3.5 — 一切皆命令的纯 Rust GIS，原生与浏览器同一套操作。（[Markdown](opengeos__RustGIS.md) / [HTML](opengeos__RustGIS.html)）
- **apache/skywalking** · 🌟🌟🌟🌗 3.5 — 本期年龄最大的项目：11 年 APM 基础设施，日增 +1。（[Markdown](apache__skywalking.md) / [HTML](apache__skywalking.html)）

## 数据 / 数据库

- **t8y2/dbx** · 🌟🌟🌟🌟🌗 4.5 — 25 MB 覆盖 100+ 数据库，并把 AI 与 MCP 做进客户端。（[Markdown](t8y2__dbx.md) / [HTML](t8y2__dbx.html)）
- **kividbio/kividb** · 🌟🌟🌟🌟 4.0 — 兼容 Redis 协议，并把全文与向量检索做进引擎。（[Markdown](kividbio__kividb.md) / [HTML](kividbio__kividb.html)）
- **tartini-ai/agent-traffic-analytics** · 🌟🌟🌟🌗 3.5 — 把「访客到底是不是人」做成可回放的自托管看板。（[Markdown](tartini-ai__agent-traffic-analytics.md) / [HTML](tartini-ai__agent-traffic-analytics.html)）
- **skudra-go/ant** · 🌟🌟🌟🌗 3.5 — 列名用字段指针，查询交给编译器检查。（[Markdown](skudra-go__ant.md) / [HTML](skudra-go__ant.html)）

## 开发工具 / 效率

- **alibaba/open-code-review** · 🌟🌟🌟🌟🌗 4.5 — 把「哪些文件必须看」交给确定性流水线，把「怎么评」交给 agent。（[Markdown](alibaba__open-code-review.md) / [HTML](alibaba__open-code-review.html)）

## 移动 / 桌面 / 跨端

- **ybblab/Jiumi** · 🌟🌟🌟🌟 4.0 — 免 Root 看应用行为与网络活动，记录只留本机。（[Markdown](ybblab__Jiumi.md) / [HTML](ybblab__Jiumi.html)）
- **ELY-Open-Source/ElyOffice** · 🌟🌟🌟🌟 4.0 — 文件留在自己文件夹里的 Rust + GPUI 离线办公套件。（[Markdown](ELY-Open-Source__ElyOffice.md) / [HTML](ELY-Open-Source__ElyOffice.html)）
- **wici-ai/inferssd** · 🌟🌟🌟🌟 4.0 — 把 MoE 专家从 SSD 流式换入，让大模型装得下比显存更大的体积。（[Markdown](wici-ai__inferssd.md) / [HTML](wici-ai__inferssd.html)）
- **crest-browser/Crest** · 🌟🌟🌟🌟 4.0 — 以 Spaces 为第一概念的 Apple 平台开源浏览器。（[Markdown](crest-browser__Crest.md) / [HTML](crest-browser__Crest.html)）
