# 2026-11-01 · 逐项解读目录

本期共 30 个项目，独立解读 30 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **AI 类五席，四个在管 agent，只有一个在做内容**：本期 AI 类：orca 管多 agent 的 worktree 与账号、paperclip 管目标预算与权限、graphify 管上下文表征、OpenMontage 管生产流水线，共同点是「不自己训模型、不自己做入口」，而是插在 Claude Code / Codex / Cursor 这些宿主之上，解决 agent 一多就失控的问题。唯一的内容型项目是 ai-pose-gallery-zh，还是个把日文图库汉化的镜像。上周讨论的还是「agent 能不能干活」，本周的榜单已经在回答「十个 agent 同时干活怎么办」。
- **全榜日增前五全是老项目，没有一个是冷启动**：Orkas +1,044（186 天）、lightpanda +929（1,363 天）、anthropics/skills +754（405 天）、orca +728（229 天）、graphify +660（212 天）。五个项目在榜时间中位数约 229 天，日增却占到全榜前列。这与「新项目靠首发冲榜」的常见形态相反：本期的增长集中在已经沉淀过一轮、被某个具体场景重新发现的项目上。判断项目质量时，这个分布比星数本身更有信息量。
- **「agent 运维层」成为独立品类：订阅、额度、进程与终端**：orca 把 Claude 与 Codex 的用量和限速重置摆进面板并支持账号热切换；cc-switch 管 12 个工具的 provider 与 90+ 预设；herdr 管 agent 的终端进程与 blocked 状态；dsh-Go 把运行时搬上手机。四者的共同前提是订阅制编码 agent 已经普及——当额度成为稀缺资源、进程成为长驻服务，账号与终端就从个人习惯变成了需要工具化的对象。这条线在两个月前还不存在。
- **本地优先从卖点变成默认：五席同时出现**：anarlog 用端上模型转写、数据存本地 SQLite；Mika 无中间服务器，屏幕内容直连所选供应商；Orkas 全部数据留在本机；dsh-Go 在手机上跑完整 Linux 环境；hex 用端上语音模型做听写。五个项目分属会议、手机 agent、桌面 agent、移动运行时、输入法四个域，取舍却一致：数据不出机器、不按 token 抽成、能力来自本地已装的运行时。驱动因素大概率是托管成本上涨与合规压力同时到来，而不是单纯的开源理想。
- **skill 成了分发单元，五个项目用同一种形态交付**：anthropics/skills 提供规范正文，graphify 以 /graphify 技能插进四家编码助手，unslop 是清理界面 AI 味的技能，pixelfx 附一个生成像素特效的技能，OpenMontage 带 700+ 生产知识文件。它们的共同形态是：不发布 SDK，不部署服务，只交付一个可被模型按需加载的文件夹。这不只是打包方式的变化——它意味着能力的分发从「调用接口」变成了「注入指令与验收标准」，而后者恰好是模型最缺的部分。
- **data 类连续第三日疲软，本期已出现采样缺陷**：data 类今日最高日增只有 +3（GRDB.swift），43 个候选里 12 个被 30 天历史去重挡掉，最终入选名单里出现两个日增 +3 的个人教学仓库（96 星与 93 星）。这不是「数据库领域没有新东西」，而是该类候选池在现有查询策略下真的枯竭了：四条查询里两条限定 topic、一条限定语言，覆盖不到新出现的存储引擎与数据工具。读本期 data 类时应明确打折，同时这是一个需要修的采集问题，而不是内容问题。
- **Rust 继续吃掉系统级工具，Zig 与 Lean 各出现一个样本**：本期 Rust 五席：herdr（终端运行时）、hex（语音听写）、anarlog（会议转写）、agent-browser（浏览器自动化）、cc-switch（配置管理），全是「需要常驻、需要低开销、需要单一二进制」的形态。同一逻辑下，lightpanda 选了 Zig 从零写浏览器内核，nyxis 用 Lean 写后端并把授权安全性做成形式化证明。语言选择的依据已经从性能转向「失败代价」：前端工具链仍在 TypeScript，而一旦涉及进程、内存或安全边界，名单就换成了系统语言。

## AI / 大模型

- **anhao/ai-pose-gallery-zh** · 🌟🌟🌟🌟🌗 4.5 — 把三套日文 AI 绘画参考库搬成中文静态站，顺手补了个角色合成台。（[Markdown](anhao__ai-pose-gallery-zh.md) / [HTML](anhao__ai-pose-gallery-zh.html)）
- **stablyai/orca** · 🌟🌟🌟🌟🌗 4.5 — 同时开十个编码 agent 而不失控的那块面板。（[Markdown](stablyai__orca.md) / [HTML](stablyai__orca.html)）
- **Graphify-Labs/graphify** · 🌟🌟🌟🌟🌗 4.5 — 不建向量库，建一张每条边都能解释来源的代码图。（[Markdown](Graphify-Labs__graphify.md) / [HTML](Graphify-Labs__graphify.html)）
- **paperclipai/paperclip** · 🌟🌟🌟🌟🌗 4.5 — OpenClaw 是员工，Paperclip 是公司——这句定位就是它的全部设计。（[Markdown](paperclipai__paperclip.md) / [HTML](paperclipai__paperclip.html)）
- **calesthio/OpenMontage** · 🌟🌟🌟🌟 4.0 — 把「做个视频」变成 agent 能执行的生产流水线，而不是一堆静图动效。（[Markdown](calesthio__OpenMontage.md) / [HTML](calesthio__OpenMontage.html)）

## 前端 / Web

- **lightpanda-io/browser** · 🌟🌟🌟🌟🌗 4.5 — 不是 Chromium 的分支，是从零写的第二个浏览器。（[Markdown](lightpanda-io__browser.md) / [HTML](lightpanda-io__browser.html)）
- **heydamir/unslop** · 🌟🌟🌟🌟 4.0 — 专治「一眼 AI」的界面，把设计感拆成九道工序。（[Markdown](heydamir__unslop.md) / [HTML](heydamir__unslop.html)）
- **shinshin86/mesh-avatar-studio** · 🌟🌟🌟🌟 4.0 — 一张插画，交给 agent 做成会呼吸、会说话的 2D 网格形象。（[Markdown](shinshin86__mesh-avatar-studio.md) / [HTML](shinshin86__mesh-avatar-studio.html)）
- **fastrepl/anarlog** · 🌟🌟🌟🌟 4.0 — 开会不派机器人，只在你自己机器上听。（[Markdown](fastrepl__anarlog.md) / [HTML](fastrepl__anarlog.html)）
- **shaongitbd/doory** · 🌟🌟🌟🌗 3.5 — 能自己部署的 Canva，代价是模板只有十套。（[Markdown](shaongitbd__doory.md) / [HTML](shaongitbd__doory.html)）

## 后端 / 云原生

- **bregman-arie/devops-exercises** · 🌟🌟🌟🌟 4.0 — 2,624 道题，把运维知识画成一张可以自测的地图。（[Markdown](bregman-arie__devops-exercises.md) / [HTML](bregman-arie__devops-exercises.html)）
- **anomalyco/hex** · 🌟🌟🌟🌟 4.0 — 按住快捷键说话，松开就出现在任何输入框里。（[Markdown](anomalyco__hex.md) / [HTML](anomalyco__hex.html)）
- **henrygd/beszel** · 🌟🌟🌟🌟 4.0 — 几十台小机器要监控，但不想为它养一套 Prometheus。（[Markdown](henrygd__beszel.md) / [HTML](henrygd__beszel.html)）
- **KaringX/karing** · 🌟🌟🌟🌗 3.5 — 一个客户端吃掉 Clash、sing-box 与订阅链接。（[Markdown](KaringX__karing.md) / [HTML](KaringX__karing.html)）
- **k3s-io/k3s** · 🌟🌟🌟🌗 3.5 — 把 Kubernetes 塞进一个不到 100MB 的二进制。（[Markdown](k3s-io__k3s.md) / [HTML](k3s-io__k3s.html)）

## 数据 / 数据库

- **NyxFoundation/nyxis** · 🌟🌟🌟🌟 4.0 — 授权正确性不靠测试覆盖，靠 Lean 证明。（[Markdown](NyxFoundation__nyxis.md) / [HTML](NyxFoundation__nyxis.html)）
- **styczynski/bioseqdb** · 🌟🌟🌟🌗 3.5 — 让基因序列和患者数据住在同一张表里。（[Markdown](styczynski__bioseqdb.md) / [HTML](styczynski__bioseqdb.html)）
- **groue/GRDB.swift** · 🌟🌟🌗 2.5 — 把 SQLite 用对的那些细节，它已经替你写完了。（[Markdown](groue__GRDB.swift.md) / [HTML](groue__GRDB.swift.html)）
- **datasifaw/world-bank-talend-studio** · 🌟🌟🌗 2.5 — 8 个 Talend ETL Job 的版本化仓库，README 只有三行。（[Markdown](datasifaw__world-bank-talend-studio.md) / [HTML](datasifaw__world-bank-talend-studio.html)）
- **datasifaw/MiniBank_Cpp** · 🌟🌟🌗 2.5 — C++17 的控制台银行作业，但两个关键决定做对了。（[Markdown](datasifaw__MiniBank_Cpp.md) / [HTML](datasifaw__MiniBank_Cpp.html)）

## 开发工具 / 效率

- **anthropics/skills** · 🌟🌟🌟🌟 4.0 — 「技能」这种分发形态的规范原文，就在这个仓库里。（[Markdown](anthropics__skills.md) / [HTML](anthropics__skills.html)）
- **patch-gg/pixelfx** · 🌟🌟🌟🌟 4.0 — 244 个像素特效，没有一个像素文件。（[Markdown](patch-gg__pixelfx.md) / [HTML](patch-gg__pixelfx.html)）
- **herdrdev/herdr** · 🌟🌟🌟🌟 4.0 — agent 的终端不该在断线时死掉。（[Markdown](herdrdev__herdr.md) / [HTML](herdrdev__herdr.html)）
- **termux/termux-app** · 🌟🌟🌟🌟 4.0 — 手机上的 Linux 终端，十年了还是同一个答案。（[Markdown](termux__termux-app.md) / [HTML](termux__termux-app.html)）
- **vercel-labs/agent-browser** · 🌟🌟🌟🌟 4.0 — 别让模型看截图算坐标，让它按引用点。（[Markdown](vercel-labs__agent-browser.md) / [HTML](vercel-labs__agent-browser.html)）

## 移动 / 桌面 / 跨端

- **ccch1mneyyy/dsh-Go** · 🌟🌟🌟🌟🌗 4.5 — 把 DeepSeek Harness 装进口袋，还能遥控桌上的电脑。（[Markdown](ccch1mneyyy__dsh-Go.md) / [HTML](ccch1mneyyy__dsh-Go.html)）
- **vorssaint/vorssaint-utils** · 🌟🌟🌟🌟🌗 4.5 — 一个菜单栏图标，替掉十来个付费小工具。（[Markdown](vorssaint__vorssaint-utils.md) / [HTML](vorssaint__vorssaint-utils.html)）
- **farion1231/cc-switch** · 🌟🌟🌟🌟🌗 4.5 — 十二个 agent 工具、九十个供应商，不许再手改 YAML。（[Markdown](farion1231__cc-switch.md) / [HTML](farion1231__cc-switch.html)）
- **Orkas-AI/Orkas** · 🌟🌟🌟🌟 4.0 — 不只是回答一个问题，而是把一件活干完。（[Markdown](Orkas-AI__Orkas.md) / [HTML](Orkas-AI__Orkas.html)）
- **wangzan101/Mika** · 🌟🌟🌟🌟 4.0 — 在你手机上替你点，而你还在用手机。（[Markdown](wangzan101__Mika.md) / [HTML](wangzan101__Mika.html)）
