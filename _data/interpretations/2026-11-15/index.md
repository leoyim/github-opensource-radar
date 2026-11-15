# 2026-11-15 · 逐项解读目录

本期共 24 个项目，独立解读 24 篇（未撰写 0 篇为 README 兜底）。

## 本期横向观察

- **增量高度集中在 AI 方向，一项就占全榜三分之二**：24 项里 20 项有前一日基线，合计日增 +2,974；AI 方向 2,001（67.3%），跨端 509（17.1%），后端 218、前端 136、工具 90、数据仅 20。两项合计占 84.4%。这不是各方向同步升温，注意力主要落在「给 agent 补基础设施」与「桌面端把内容做成原生体验」两条线上；读总量时不宜理解为全栈普遍走强。
- **日增前四占七成，且分属两类完全不同的驱动**：前四为 chrome-devtools-mcp +664、claude-trading-skills +553、univer +495、Veyra-NRVideo +420，合计 +2,132，占 71.7%。前三项都是把已有能力改造成 agent 可调用的接口或技能，第四项是消费端的 GPU 视频增强管线。同一份热度曲线背后，既有工程基础设施的标准化，也有面向终端用户的功能迭代，评估项目时不宜用同一套标准。
- **24 项里 9 项把 agent 写进定位，「接口、护栏、技能」成为跨方向主题**：AI 方向的 MCP 服务器、Office Facade API、通用 agent 运行时与多 agent 共享图数据库，数据方向的计费 CLI/MCP 与带写操作审批的终端工作台，工具方向的精灵生成技能与发布技能——共 9 项显式面向 agent，合计日增约 2,094，占全榜增量七成。值得注意的是 Dexo 把「逐条等待批准」写进权限设计，说明这一轮讨论已从「能不能接」转向「接了以后怎么约束」。
- **榜单由成熟项目主导，但增量来自新旧两端**：24 项中 12 项仓库年龄 ≥1,000 天，anime（3,898 天）、rust-clippy（4,379 天）、kopia（3,983 天）、wails（2,891 天）仍在稳定收获星标；同时有 5 项 ≤100 天的新仓，其中 quiet-md 仅 14 天、IPTV_Player_2.0 仅 1 天。成熟项目提供可复用的工程基线，新仓则集中出现在本地优先与跨端体验上，两类项目的风险与验证方式差别很大。
- **Rust 占 6 席并横跨四个方向，不再局限于系统工具**：本期 Rust 项目 6 项（25%），分布在 AI（goose、omnigraph）、后端（rust-clippy）、数据（monorm、Dexo）与跨端（quiet-md）。其中三项把「一份核心、多种入口」作为架构主张：goose 的桌面/CLI/API、monorm 的 Python/TypeScript 共用查询内核、Dexo 的 TUI/CLI/MCP 共用权限路径。Rust 在这里承担的角色更接近共享内核，而非单纯的性能优化。
- **数据方向三席都面向具体工作流，且两席尚无基线**：本期数据方向 3 项：lago 做用量计费、monorm 做跨语言 ORM、Dexo 做终端工作台，都是针对明确工作流的工具，而非通用分析引擎。其中 monorm（44 天）与 Dexo（93 天）是本期唯一两个没有前一日基线的数据项目，也是全榜 4 个无基线项目中的两个。它们的 README 都给出了可复核的材料（基准方法与局限、护栏的具体触发条件），适合先做技术验证再评估采用。
- **至少 7 项把「数据留在本机」写成显式承诺**：LibreTranslate 的自托管离线翻译、nginx-proxy-manager 的家庭网络反向代理、Dexo 的「Everything stays on your machine」、kopia 的客户端端到端加密、quiet-md 的本地文件笔记、airi 的 self hosted / you-owned、Orion-Store 的「No servers, no tracking」——覆盖后端、数据、工具与跨端多个方向。这类承诺通常伴随明确的运维责任：密钥保管、升级兼容与外部服务依赖范围，需要逐项按 README 核对，不能只当作一句产品口号。

## AI / 大模型

- **ChromeDevTools/chrome-devtools-mcp** · 🌟🌟🌟🌟🌗 4.5 — 给编码 agent 配上一双能真正打开浏览器、看见运行时状态的眼睛。（[Markdown](ChromeDevTools__chrome-devtools-mcp.md) / [HTML](ChromeDevTools__chrome-devtools-mcp.html)）
- **dream-num/univer** · 🌟🌟🌟🌟🌗 4.5 — 把表格、文档与协同编辑做成可嵌入自己产品的开源内核。（[Markdown](dream-num__univer.md) / [HTML](dream-num__univer.html)）
- **aaif-goose/goose** · 🌟🌟🌟🌟🌗 4.5 — 一个可换模型、可换工具、可进脚本的本地 agent 运行时。（[Markdown](aaif-goose__goose.md) / [HTML](aaif-goose__goose.html)）
- **tradermonty/claude-trading-skills** · 🌟🌟🌟🌟 4.0 — 把个人投研流程固化成一组可复用、可审阅的 agent 技能包。（[Markdown](tradermonty__claude-trading-skills.md) / [HTML](tradermonty__claude-trading-skills.html)）
- **ModernRelay/omnigraph** · 🌟🌟🌟🌟 4.0 — 为多个长周期 agent 准备一份可分支、可回滚的共享世界模型。（[Markdown](ModernRelay__omnigraph.md) / [HTML](ModernRelay__omnigraph.html)）

## 前端 / Web

- **juliangarnier/anime** · 🌟🌟🌟🌟 4.0 — 一套 API 统一管理 CSS、SVG、DOM 与对象的动画时间轴。（[Markdown](juliangarnier__anime.md) / [HTML](juliangarnier__anime.html)）
- **semgrep/semgrep** · 🌟🌟🌟🌟 4.0 — 让规则像源码一样可读，把静态分析放进每一次提交。（[Markdown](semgrep__semgrep.md) / [HTML](semgrep__semgrep.html)）
- **wailsapp/wails** · 🌟🌟🌟🌟 4.0 — 用 Go 写后端、用 Web 写界面，产出真正的桌面应用。（[Markdown](wailsapp__wails.md) / [HTML](wailsapp__wails.html)）

## 后端 / 云原生

- **LibreTranslate/LibreTranslate** · 🌟🌟🌟🌟🌗 4.5 — 一台自己的服务器，就是一个不依赖外部厂商的翻译 API。（[Markdown](LibreTranslate__LibreTranslate.md) / [HTML](LibreTranslate__LibreTranslate.html)）
- **NginxProxyManager/nginx-proxy-manager** · 🌟🌟🌟🌟 4.0 — 把反向代理与证书签发做成一个人人可用的管理界面。（[Markdown](NginxProxyManager__nginx-proxy-manager.md) / [HTML](NginxProxyManager__nginx-proxy-manager.html)）
- **rust-lang/rust-clippy** · 🌟🌟🌟🌟 4.0 — 把 Rust 社区的工程经验变成可配置、可进 CI 的默认检查。（[Markdown](rust-lang__rust-clippy.md) / [HTML](rust-lang__rust-clippy.html)）
- **RookieEnough/Orion-Store** · 🌟🌟🌟🌗 3.5 — 一个把应用来源与改动都摊开给人看的原生应用商店。（[Markdown](RookieEnough__Orion-Store.md) / [HTML](RookieEnough__Orion-Store.html)）
- **SigmaHQ/sigma** · 🌟🌟🌟🌗 3.5 — 让检测规则脱离具体 SIEM，成为可共享、可转换的防御资产。（[Markdown](SigmaHQ__sigma.md) / [HTML](SigmaHQ__sigma.html)）

## 数据 / 数据库

- **getlago/lago** · 🌟🌟🌟🌟 4.0 — 把「用了多少」稳定地翻译成「该收多少」。（[Markdown](getlago__lago.md) / [HTML](getlago__lago.html)）
- **UniForgeStack/monorm** · 🌟🌟🌟 3.0 — 一份 Prisma schema，让 Python 和 TypeScript 共用同一个查询内核。（[Markdown](UniForgeStack__monorm.md) / [HTML](UniForgeStack__monorm.html)）
- **KingDasWinx/Dexo** · 🌟🌟🌟 3.0 — 给终端数据库操作加上一层对 agent 也生效的写保护。（[Markdown](KingDasWinx__Dexo.md) / [HTML](KingDasWinx__Dexo.html)）

## 开发工具 / 效率

- **GoogleChrome/lighthouse** · 🌟🌟🌟🌟 4.0 — 用一份可复现的报告回答「这个页面到底怎么样」。（[Markdown](GoogleChrome__lighthouse.md) / [HTML](GoogleChrome__lighthouse.html)）
- **0x0funky/agent-sprite-forge** · 🌟🌟🌟🌗 3.5 — 把角色素材生产拆成「一次确认 + 确定性加工」的流水线。（[Markdown](0x0funky__agent-sprite-forge.md) / [HTML](0x0funky__agent-sprite-forge.html)）
- **dreammis/social-auto-upload** · 🌟🌟🌟🌗 3.5 — 把多平台发布收进一个可编排、可交给 agent 的命令行。（[Markdown](dreammis__social-auto-upload.md) / [HTML](dreammis__social-auto-upload.html)）

## 移动 / 桌面 / 跨端

- **s1dashu/quiet-md** · 🌟🌟🌟🌟 4.0 — 一个不靠 WebView、把界面整个画在 GPU 上的本地笔记应用。（[Markdown](s1dashu__quiet-md.md) / [HTML](s1dashu__quiet-md.html)）
- **Likely7/Veyra-NRVideo** · 🌟🌟🌟🌟 4.0 — 把视频增强、采集与导出连成一条可编排的实时 GPU 管线。（[Markdown](Likely7__Veyra-NRVideo.md) / [HTML](Likely7__Veyra-NRVideo.html)）
- **Trapbraneedle/IPTV_Player_2.0** · 🌟🌟🌟🌟 4.0 — 把多种直播源格式收进一个跨端播放器。（[Markdown](Trapbraneedle__IPTV_Player_2.0.md) / [HTML](Trapbraneedle__IPTV_Player_2.0.html)）
- **moeru-ai/airi** · 🌟🌟🌟🌟 4.0 — 把虚拟伙伴做成可自托管、能说话也能一起玩游戏的开源工程。（[Markdown](moeru-ai__airi.md) / [HTML](moeru-ai__airi.html)）
- **kopia/kopia** · 🌟🌟🌟🌟 4.0 — 把备份做成可验证、可去重的加密快照。（[Markdown](kopia__kopia.md) / [HTML](kopia__kopia.html)）
