// 开源雷达 · 当前态 C4 模型（Structurizr DSL）
// 生成依据：2026-11-16 工作区快照
// 使用：用 Qoder 的 Structurizr DSL 查看器打开；这是图源，Markdown 中的 Mermaid 是阅读辅助。
// 说明：上游日报流水线是仓库外系统，本文只按“产出数据快照的外部系统”建模；
//       GitHub Pages 的 CDN/TLS 行为、DNS 线上状态不在仓库证据内，置信度见 artifact/system-model.evidence.md。

workspace "OpenSource Radar" "每日 GitHub 热点日报静态站点：构建期生成、运行期只读。" {

    model {

        reader = person "站点读者" "匿名浏览每日日报、项目索引、跨期统计与风险提示。"
        maintainer = person "维护者" "在本地运行 ingest、构建并推送仓库。"

        radar = softwareSystem "开源雷达" "静态日报站点 + 单向数据搬运 + 构建期渲染。" {

            astroApp = container "Astro 站点应用" "构建期读取 _data、校验契约、聚合数据并渲染全部页面。" "Astro 5 / TypeScript"
            dist = container "静态产物 dist/" "HTML、CSS、JS、CNAME 与静态资源，发布到 GitHub Pages。" "静态文件"
            dataStore = container "_data 快照" "仓库内提交的 JSON/Markdown 数据快照，是站点唯一数据源。" "文件系统 / Git"
            overrides = container "本期观察覆盖" "人工修订的本期横向观察，优先于上游原文。" "Markdown"
            ingest = container "Ingest CLI" "只读搬运上游报告/摘要/解读，派生星标序列，同步台账与头像缓存。" "Node.js ESM"
            removalSync = container "Removal Sync" "以台账为唯一准绳回写各期报告，并支持只检测模式。" "Node.js ESM"
            fanBuilder = container "Fan Model Builder" "生成十八骨折扇 GLB 几何模型。" "Node.js ESM"
            buildPipeline = container "构建与发布工作流" "安装依赖、Astro 构建、校验产物、上传并部署 Pages。" "GitHub Actions"

            schema = component "Schema Contract" "定义数据形状并在构建期断言渲染依赖的字段。" "TypeScript"
            load = component "Data Access" "读取期次、摘要、星标序列、台账与头像缓存；日期与星期计算。" "TypeScript"
            projects = component "Project Catalog" "把每期条目按仓库摊平成跨期目录；语言 slug 与分页。" "TypeScript"
            interp = component "Interpretation Renderer" "剥离上游解读的重复部分并用 marked 渲染 Markdown。" "TypeScript / marked"
            almanac = component "Almanac" "用 lunar-javascript 离线推算农历、干支与节气。" "TypeScript / lunar-javascript"
            format = component "Formatting" "数字、评分、热度口径、锚点与 sparkline 的纯函数。" "TypeScript"
            palettes = component "Palette Metadata" "六套中国风配色的展示元数据。" "TypeScript"
            routes = component "Page Routes" "首页、期次页、项目索引、归档、统计与风险提示的静态路径。" "Astro"
            views = component "View Components" "Base、IssueView、ProjectsView、RepoRow、ReaderDialog 等展示组件。" "Astro"
            nav = component "Site Navigation & Fan" "书眉导航、全屏折扇配色选择器、昼夜切换。" "Astro / 原生 JS"
            clientRuntime = component "Client Runtime" "主题、配色、筛选排序、外链提示与按需 Three.js。" "原生 JS / WebGL"
            tokens = component "Design Tokens" "语义化颜色、版式与状态 token；明暗与配色两轴。" "CSS"
            assets = component "Static Assets" "印章 SVG、折扇 GLB、CNAME 与 favicon。" "SVG / GLB"
        }

        upstream = softwareSystem "上游日报流水线" "仓库外的定时采集与分析流水线，产出 reports/summaries/snapshots/interpretations/blacklist/owners。" "外部系统"
        githubData = softwareSystem "GitHub 数据源" "Trending 页面、Search API 与仓库元数据。" "外部系统"
        githubRepo = softwareSystem "GitHub 仓库" "托管源码、_data 快照与 Actions 工作流。" "外部系统"
        githubPages = softwareSystem "GitHub Pages + CDN" "托管 dist/ 的静态站点，绑定自定义域名 osradar.leoyim.cn。" "外部系统"
        dns = softwareSystem "DNS" "osradar.leoyim.cn 的 CNAME 解析。" "外部系统"
        avatarCdn = softwareSystem "GitHub 头像 CDN" "avatars.githubusercontent.com；运行期按需加载 owner 头像。" "外部系统"
        githubIssues = softwareSystem "GitHub Issues" "接收建议与勘误。" "外部系统"
        outbound = softwareSystem "站外目标站点" "被收录项目的 GitHub 页面或个人主页等。" "外部系统"

        // ---- 人员与外部系统 ----
        githubData -> upstream "提供候选、星标、README 与元数据" "HTTPS"
        upstream -> ingest "提供只读 JSON/Markdown 快照" "文件系统"
        maintainer -> ingest "运行搬运、回写与构建" "CLI"
        maintainer -> githubRepo "提交代码与 _data 快照" "git push"
        maintainer -> astroApp "本地构建与预览" "CLI"
        reader -> githubPages "访问公开页面" "HTTPS"
        reader -> avatarCdn "按需加载 owner 头像" "HTTPS"
        reader -> githubIssues "提交建议与勘误" "HTTPS"
        reader -> outbound "点击站外链接（先弹提示）" "HTTPS"
        dns -> githubPages "CNAME 解析" "DNS"

        // ---- 数据面 ----
        ingest -> dataStore "写入报告、摘要、序列、解读、台账与头像缓存" "文件系统"
        ingest -> removalSync "搬运后调用 applyRemovals()" "进程内调用"
        removalSync -> dataStore "读取台账，回写报告并重算 stats.selected" "文件系统"
        fanBuilder -> assets "生成 fan.glb" "文件系统"
        dataStore -> astroApp "构建期读取" "文件系统"
        overrides -> astroApp "优先于上游观察" "文件系统"

        // ---- 构建与发布 ----
        githubRepo -> buildPipeline "push main / workflow_dispatch 触发" "GitHub event"
        astroApp -> dist "astro build 生成" "文件系统"
        dist -> buildPipeline "上传 Pages artifact" "文件系统"
        buildPipeline -> githubPages "deploy-pages 部署" "Pages API"

        // ---- 站点内部组件 ----
        load -> schema "读报告时断言契约" "进程内调用"
        projects -> load "跨期摊平依赖期次读取" "进程内调用"
        interp -> load "复用 DATA_DIR" "进程内调用"
        routes -> load "读取期次、序列与台账" "进程内调用"
        routes -> projects "生成项目目录页" "进程内调用"
        routes -> interp "渲染详细解读" "进程内调用"
        routes -> almanac "生成农历与节气" "进程内调用"
        routes -> views "组合展示组件" "进程内调用"
        views -> nav "Base 引入书眉" "进程内调用"
        views -> tokens "组件使用语义 token" "CSS"
        nav -> clientRuntime "启动折扇与主题脚本" "进程内调用"
        clientRuntime -> assets "按需加载 fan.glb" "HTTPS"
    }

    views {

        systemContext radar "SystemContext" {
            include *
            autolayout
        }

        container radar "Containers" {
            include *
            autolayout
        }

        component astroApp "SiteComponents" {
            include *
            autolayout
        }

    }

}