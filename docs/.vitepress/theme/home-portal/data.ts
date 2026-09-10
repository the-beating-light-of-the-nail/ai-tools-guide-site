// 首页门户数据（HomePortal.vue 消费）。
// 结构与视觉参考 docs/../design-references 门户稿：9 个分区卡片墙 + 内容溯源。
// 链接一律写「根语言（zh）相对路径」，组件按当前语言自动加 /en /zh-tw /de /fr 前缀。

export interface HpCard {
  icon: string; // 单字符 → 渐变字母砖；其余按 emoji 砖渲染
  title: string;
  desc: string;
  link: string;
  badge?: string; // 厂商标签：腾讯 / 字节 / 阿里
}

export interface HpSection {
  id: string;
  icon: string;
  title: string;
  ac: string; // 分区主色
  ac2: string; // 分区渐变辅色
  cards: HpCard[];
  allLink?: string; // 「查看全部」跳转
}

export interface HpLocale {
  h1: string; // 供 SEO / 无障碍的视觉隐藏 h1
  stripLead: string;
  stripSub: string;
  chips: [string, string, string, string]; // 支持 {n} 占位
  searchPlaceholder: string;
  searchAria: string;
  filterNote: string; // 支持 {q} {n}
  clearAria: string;
  emptyText: string;
  sideTitle: string;
  sideGroups: { label: string; items: { id: string; text: string }[] }[]; // id 为分区 id，特殊项 about
  guidesUnit: string;
  allText: string;
  sources: {
    icon: string;
    title: string;
    badge: string;
    blocks: { title: string; items: string[] }[];
    link: string;
    linkText: string;
  };
  sections: HpSection[];
}

/* ================================ zh ================================ */

const zhSections: HpSection[] = [
  {
    id: "s-platforms",
    icon: "🗂",
    title: "五大工作台 · 入门",
    ac: "#2563eb",
    ac2: "#7c3aed",
    cards: [
      { icon: "W", title: "WorkBuddy 教程", desc: "职场 AI 工作台：一句话交付 PPT、表格分析与调研报告。", link: "/workbuddy/", badge: "腾讯" },
      { icon: "豆", title: "豆包工作教程", desc: "与飞书深度打通：只给链接不碰文件，读文档写回文档。", link: "/doubaowork/", badge: "字节" },
      { icon: "千", title: "千问办公教程", desc: "改编自开源《千问办公蓝皮书 V2.0》：从能生成到能交付。", link: "/qwenwork/", badge: "阿里" },
      { icon: "T", title: "TraeWork 教程", desc: "AI 原生工作台：三端协同、办公助理与定时自动化。", link: "/traework/", badge: "字节" },
      { icon: "Q", title: "QoderWork 教程", desc: "桌面智能助手：本地文件、浏览器自动化与 IM 远程指挥。", link: "/qoderwork/", badge: "阿里" },
    ],
  },
  {
    id: "s-workbuddy",
    icon: "W",
    title: "WorkBuddy · 腾讯",
    ac: "#0052d9",
    ac2: "#00a3ff",
    allLink: "/workbuddy/",
    cards: [
      { icon: "🧭", title: "初识 WorkBuddy", desc: "它能替你干哪些活：定位与能力边界。", link: "/workbuddy/01-intro/" },
      { icon: "📦", title: "下载与安装", desc: "装好、登录、更新，10 分钟上岗。", link: "/workbuddy/02-install/" },
      { icon: "🎯", title: "第一个任务", desc: "一句话下达 → 执行 → 验收的完整闭环。", link: "/workbuddy/04-first-task/" },
      { icon: "📑", title: "办公三件套实战", desc: "Word、Excel、PPT 的交付级产出。", link: "/workbuddy/case-office/" },
      { icon: "🧩", title: "加载一个 Skill", desc: "挑一个真正用得上的技能装起来。", link: "/workbuddy/05-skills/" },
      { icon: "🤖", title: "多 Agent 系统", desc: "任务编排、角色分工与结果合并。", link: "/workbuddy/adv-multi-agent/" },
      { icon: "⚙️", title: "自动化的可靠性", desc: "定时任务、失败重试与结果校验。", link: "/workbuddy/adv-automation-reliability/" },
      { icon: "🎨", title: "皮肤工坊", desc: "一键换肤：官方与社区主题合集。", link: "/workbuddy/skins/" },
    ],
  },
  {
    id: "s-doubao",
    icon: "豆",
    title: "豆包工作 · 字节",
    ac: "#7b61ff",
    ac2: "#4f8cff",
    allLink: "/doubaowork/",
    cards: [
      { icon: "👋", title: "豆包工作是什么", desc: "界面、任务与项目总览。", link: "/doubaowork/01-what-is" },
      { icon: "⚡", title: "第一个任务", desc: "五分钟跑通一次完整交付。", link: "/doubaowork/04-first-task" },
      { icon: "🔗", title: "最适配的还是飞书", desc: "只给链接不碰文件：读文档、写回文档。", link: "/doubaowork/case-feishu" },
      { icon: "📄", title: "一份材料做三件套", desc: "文档 / 表格 / 幻灯片一次产出。", link: "/doubaowork/case-office" },
      { icon: "✍️", title: "自媒体选题", desc: "热点、同行与排期：内容生产线第一站。", link: "/doubaowork/case-topic-selection" },
      { icon: "💹", title: "盘后复盘与观察池", desc: "从行情到投研日报的全链路。", link: "/doubaowork/case-market-review" },
    ],
  },
  {
    id: "s-qianwen",
    icon: "千",
    title: "千问办公 · 阿里",
    ac: "#615ced",
    ac2: "#a855f7",
    allLink: "/qwenwork/",
    cards: [
      { icon: "📘", title: "执行摘要", desc: "蓝皮书 V2.0 核心结论一页读完。", link: "/qwenwork/executive-summary" },
      { icon: "🚀", title: "快速开始", desc: "完成第一个可验收的任务。", link: "/qwenwork/quick-start" },
      { icon: "🧮", title: "任务交付协议", desc: "先定义「完成」，再开始工作。", link: "/qwenwork/ch02-task-delivery-protocol" },
      { icon: "🖨", title: "办公交付实战", desc: "文档、数据、汇报与网页的交付标准。", link: "/qwenwork/ch06-office-delivery" },
      { icon: "🧭", title: "岗位路线", desc: "行政 / 运营 / 财务的差异化上手。", link: "/qwenwork/ch07-role-roadmaps" },
      { icon: "🔍", title: "研究证据链", desc: "从问题树到发布记录的完整方法。", link: "/qwenwork/ch08-research-evidence-chain" },
    ],
  },
  {
    id: "s-trae",
    icon: "T",
    title: "TraeWork · 字节",
    ac: "#0ea5e9",
    ac2: "#22d3ee",
    allLink: "/traework/",
    cards: [
      { icon: "👋", title: "TraeWork 是什么", desc: "让 TRAE 为你工作的 AI 原生工作台。", link: "/traework/01-what-is" },
      { icon: "📦", title: "安装与三端协同", desc: "桌面 / 网页 / 移动：手机派活、电脑交付。", link: "/traework/02-install" },
      { icon: "💬", title: "办公助理", desc: "在飞书 / 微信里直接指挥 TraeWork。", link: "/traework/05-bot-assistant" },
      { icon: "⏱", title: "定时自动化", desc: "日报、周报与巡检任务的编排。", link: "/traework/07-automated-tasks" },
      { icon: "🖥", title: "电脑与浏览器控制", desc: "插件、授权与浏览器操作。", link: "/traework/08-computer-browser" },
    ],
  },
  {
    id: "s-qoder",
    icon: "Q",
    title: "QoderWork · 阿里",
    ac: "#16a34a",
    ac2: "#4ade80",
    allLink: "/qoderwork/",
    cards: [
      { icon: "👋", title: "QoderWork 是什么", desc: "你说需求，它交付结果的桌面助手。", link: "/qoderwork/01-what-is" },
      { icon: "🗄", title: "工作文件夹", desc: "本地文件直接读写：整理、归档、批量处理。", link: "/qoderwork/04-files" },
      { icon: "🌐", title: "浏览器自动化", desc: "网页操作录制回放：填表、抓取、下载。", link: "/qoderwork/case-browser" },
      { icon: "📱", title: "IM 远程指挥", desc: "聊天窗下指令，办公室电脑自动干活。", link: "/qoderwork/07-im-channels" },
      { icon: "🧰", title: "三大工作台", desc: "内置工作台组合使用与场景选择。", link: "/qoderwork/adv-workbenches" },
    ],
  },
  {
    id: "s-skill",
    icon: "🧩",
    title: "进阶 · Skill 与自动化",
    ac: "#7c3aed",
    ac2: "#a855f7",
    cards: [
      { icon: "🧩", title: "WorkBuddy：加载 Skill", desc: "技能安装机制与挑选标准。", link: "/workbuddy/05-skills/" },
      { icon: "🛠", title: "WorkBuddy：打造 Skill", desc: "从知识蒸馏到发布的全流程。", link: "/workbuddy/adv-build-skill/" },
      { icon: "🔌", title: "豆包：连接器实战", desc: "先跑一个能验收的连接器。", link: "/doubaowork/05-connectors" },
      { icon: "🤹", title: "TraeWork：Skills 技能", desc: "技能加载与管理。", link: "/traework/04-skills" },
      { icon: "💬", title: "QoderWork：对话式创建技能", desc: "用自然语言造一个技能。", link: "/qoderwork/adv-skill-create" },
    ],
  },
  {
    id: "s-assets",
    icon: "🎨",
    title: "进阶 · 皮肤与办公库",
    ac: "#0891b2",
    ac2: "#22d3ee",
    cards: [
      { icon: "🎨", title: "WorkBuddy 皮肤工坊", desc: "下载、导入、一键换肤。", link: "/workbuddy/skins/" },
      { icon: "📋", title: "WorkBuddy 指令模板", desc: "常用指令与参数速查。", link: "/workbuddy/ref-prompt-templates/" },
      { icon: "📋", title: "豆包工作指令模板", desc: "按场景收录的高命中指令。", link: "/doubaowork/ref-templates" },
      { icon: "📋", title: "TraeWork 指令模板", desc: "命令与提示词速查。", link: "/traework/ref-templates" },
      { icon: "📐", title: "千问场景速查表", desc: "场景卡与评分表。", link: "/qwenwork/appendix-scenarios" },
    ],
  },
  {
    id: "s-cases",
    icon: "💼",
    title: "进阶 · 案例精选",
    ac: "#db2777",
    ac2: "#f472b6",
    cards: [
      { icon: "💼", title: "WorkBuddy：办公三件套", desc: "Word、Excel、PPT 的完整交付复盘。", link: "/workbuddy/case-office/" },
      { icon: "📈", title: "WorkBuddy：自媒体闭环", desc: "选题到增长的完整链路。", link: "/workbuddy/case-self-media/" },
      { icon: "🗓", title: "豆包：一场会议全程", desc: "从纪要到待办落地。", link: "/doubaowork/case-meeting" },
      { icon: "🎬", title: "TraeWork：能上台的 PPT", desc: "从大纲到成稿的案例。", link: "/traework/case-ppt" },
      { icon: "📊", title: "QoderWork：数据调研报告", desc: "数据分析与调研的交付案例。", link: "/qoderwork/case-data-report" },
      { icon: "🏭", title: "千问：品胜电子", desc: "竞品调研与产品物料制作。", link: "/qwenwork/case-pisen" },
    ],
  },
];

const zh: HpLocale = {
  h1: "AI Work 教程网 · 五大办公 AI 工作台中文实战教程",
  stripLead: "腾讯、字节、阿里三大厂办公 AI 工作台中文实战教程总站",
  stripSub: "从下载安装到无人值守，一站学齐。",
  chips: ["{n} 大工作台", "{n} 个分区", "{n} 篇精选", "100% 可溯源"],
  searchPlaceholder: "搜索教程：Skill、飞书、定时、PPT……",
  searchAria: "筛选首页教程卡片",
  filterNote: "匹配「{q}」：{n} 项",
  clearAria: "清除筛选",
  emptyText: "没有匹配的教程，换个关键词试试（如：飞书 / 定时 / PPT）",
  sideTitle: "全部教程",
  sideGroups: [
    {
      label: "工作台教程",
      items: [
        { id: "s-platforms", text: "五大工作台" },
        { id: "s-workbuddy", text: "WorkBuddy" },
        { id: "s-doubao", text: "豆包工作" },
        { id: "s-qianwen", text: "千问办公" },
        { id: "s-trae", text: "TraeWork" },
        { id: "s-qoder", text: "QoderWork" },
      ],
    },
    {
      label: "进阶专题",
      items: [
        { id: "s-skill", text: "Skill 与自动化" },
        { id: "s-assets", text: "皮肤与办公库" },
        { id: "s-cases", text: "案例精选" },
      ],
    },
    {
      label: "站点",
      items: [
        { id: "s-sources", text: "内容溯源" },
        { id: "about", text: "关于本站" },
      ],
    },
  ],
  guidesUnit: "篇",
  allText: "查看全部 →",
  sources: {
    icon: "📖",
    title: "内容溯源",
    badge: "底线",
    blocks: [
      {
        title: "📚 开源改编 · 注明出处",
        items: [
          "千问办公改编自开源《千问办公蓝皮书 V2.0》",
          "WorkBuddy、豆包工作改编自社区开源指南",
          "所有改编内容均在原文注明出处",
        ],
      },
      {
        title: "✍️ 本站原创 · 核对官方",
        items: [
          "TraeWork、QoderWork 及进阶专题为本站原创",
          "依据官方文档逐条核对撰写",
          "案例改编自社区实战并注明出处",
        ],
      },
    ],
    link: "/about",
    linkText: "查看致谢 →",
  },
  sections: zhSections,
};

/* ================================ zh-tw ================================ */

const zhTwSections: HpSection[] = [
  {
    id: "s-platforms",
    icon: "🗂",
    title: "五大工作台 · 入門",
    ac: "#2563eb",
    ac2: "#7c3aed",
    cards: [
      { icon: "W", title: "WorkBuddy 教學", desc: "職場 AI 工作台：一句話交付 PPT、表格分析與調研報告。", link: "/workbuddy/", badge: "騰訊" },
      { icon: "豆", title: "豆包工作教學", desc: "與飛書深度整合：只給連結不碰檔案，讀文件寫回文件。", link: "/doubaowork/", badge: "位元組" },
      { icon: "千", title: "千問辦公教學", desc: "改編自開源《千問辦公藍皮書 V2.0》：從能生成到能交付。", link: "/qwenwork/", badge: "阿里" },
      { icon: "T", title: "TraeWork 教學", desc: "AI 原生工作台：三端協同、辦公助理與定時自動化。", link: "/traework/", badge: "位元組" },
      { icon: "Q", title: "QoderWork 教學", desc: "桌面智慧助理：本地檔案、瀏覽器自動化與 IM 遠端指揮。", link: "/qoderwork/", badge: "阿里" },
    ],
  },
  {
    id: "s-workbuddy",
    icon: "W",
    title: "WorkBuddy · 騰訊",
    ac: "#0052d9",
    ac2: "#00a3ff",
    allLink: "/workbuddy/",
    cards: [
      { icon: "🧭", title: "初識 WorkBuddy", desc: "它能替你做哪些事：定位與能力邊界。", link: "/workbuddy/01-intro/" },
      { icon: "📦", title: "下載與安裝", desc: "裝好、登入、更新，10 分鐘上崗。", link: "/workbuddy/02-install/" },
      { icon: "🎯", title: "第一個任務", desc: "一句話下達 → 執行 → 驗收的完整閉環。", link: "/workbuddy/04-first-task/" },
      { icon: "📑", title: "辦公三件套實戰", desc: "Word、Excel、PPT 的交付級產出。", link: "/workbuddy/case-office/" },
      { icon: "🧩", title: "載入一個 Skill", desc: "挑一個真正用得上的技能裝起來。", link: "/workbuddy/05-skills/" },
      { icon: "🤖", title: "多 Agent 系統", desc: "任務編排、角色分工與結果合併。", link: "/workbuddy/adv-multi-agent/" },
      { icon: "⚙️", title: "自動化的可靠性", desc: "定時任務、失敗重試與結果校驗。", link: "/workbuddy/adv-automation-reliability/" },
      { icon: "🎨", title: "皮膚工坊", desc: "一鍵換膚：官方與社群主題合集。", link: "/workbuddy/skins/" },
    ],
  },
  {
    id: "s-doubao",
    icon: "豆",
    title: "豆包工作 · 位元組",
    ac: "#7b61ff",
    ac2: "#4f8cff",
    allLink: "/doubaowork/",
    cards: [
      { icon: "👋", title: "豆包工作是什麼", desc: "介面、任務與專案總覽。", link: "/doubaowork/01-what-is" },
      { icon: "⚡", title: "第一個任務", desc: "五分鐘跑通一次完整交付。", link: "/doubaowork/04-first-task" },
      { icon: "🔗", title: "最適配的還是飛書", desc: "只給連結不碰檔案：讀文件、寫回文件。", link: "/doubaowork/case-feishu" },
      { icon: "📄", title: "一份材料做三件套", desc: "文件 / 表格 / 幻燈片一次產出。", link: "/doubaowork/case-office" },
      { icon: "✍️", title: "自媒體選題", desc: "熱點、同行與排期：內容生產線第一站。", link: "/doubaowork/case-topic-selection" },
      { icon: "💹", title: "盤後覆盤與觀察池", desc: "從行情到投研日報的全流程。", link: "/doubaowork/case-market-review" },
    ],
  },
  {
    id: "s-qianwen",
    icon: "千",
    title: "千問辦公 · 阿里",
    ac: "#615ced",
    ac2: "#a855f7",
    allLink: "/qwenwork/",
    cards: [
      { icon: "📘", title: "執行摘要", desc: "藍皮書 V2.0 核心結論一頁讀完。", link: "/qwenwork/executive-summary" },
      { icon: "🚀", title: "快速開始", desc: "完成第一個可驗收的任務。", link: "/qwenwork/quick-start" },
      { icon: "🧮", title: "任務交付協議", desc: "先定義「完成」，再開始工作。", link: "/qwenwork/ch02-task-delivery-protocol" },
      { icon: "🖨", title: "辦公交付實戰", desc: "文件、數據、彙報與網頁的交付標準。", link: "/qwenwork/ch06-office-delivery" },
      { icon: "🧭", title: "崗位路線", desc: "行政 / 運營 / 財務的差異化上手。", link: "/qwenwork/ch07-role-roadmaps" },
      { icon: "🔍", title: "研究證據鏈", desc: "從問題樹到發布記錄的完整方法。", link: "/qwenwork/ch08-research-evidence-chain" },
    ],
  },
  {
    id: "s-trae",
    icon: "T",
    title: "TraeWork · 位元組",
    ac: "#0ea5e9",
    ac2: "#22d3ee",
    allLink: "/traework/",
    cards: [
      { icon: "👋", title: "TraeWork 是什麼", desc: "讓 TRAE 為你工作的 AI 原生工作台。", link: "/traework/01-what-is" },
      { icon: "📦", title: "安裝與三端協同", desc: "桌面 / 網頁 / 行動：手機派活、電腦交付。", link: "/traework/02-install" },
      { icon: "💬", title: "辦公助理", desc: "在飛書 / 微信裡直接指揮 TraeWork。", link: "/traework/05-bot-assistant" },
      { icon: "⏱", title: "定時自動化", desc: "日報、週報與巡檢任務的編排。", link: "/traework/07-automated-tasks" },
      { icon: "🖥", title: "電腦與瀏覽器控制", desc: "插件、授權與瀏覽器操作。", link: "/traework/08-computer-browser" },
    ],
  },
  {
    id: "s-qoder",
    icon: "Q",
    title: "QoderWork · 阿里",
    ac: "#16a34a",
    ac2: "#4ade80",
    allLink: "/qoderwork/",
    cards: [
      { icon: "👋", title: "QoderWork 是什麼", desc: "你說需求，它交付結果的桌面助理。", link: "/qoderwork/01-what-is" },
      { icon: "🗄", title: "工作資料夾", desc: "本地檔案直接讀寫：整理、歸檔、批次處理。", link: "/qoderwork/04-files" },
      { icon: "🌐", title: "瀏覽器自動化", desc: "網頁操作錄製回放：填表、抓取、下載。", link: "/qoderwork/case-browser" },
      { icon: "📱", title: "IM 遠端指揮", desc: "聊天視窗下指令，辦公室電腦自動幹活。", link: "/qoderwork/07-im-channels" },
      { icon: "🧰", title: "三大工作台", desc: "內建工作台組合使用與場景選擇。", link: "/qoderwork/adv-workbenches" },
    ],
  },
  {
    id: "s-skill",
    icon: "🧩",
    title: "進階 · Skill 與自動化",
    ac: "#7c3aed",
    ac2: "#a855f7",
    cards: [
      { icon: "🧩", title: "WorkBuddy：載入 Skill", desc: "技能安裝機制與挑選標準。", link: "/workbuddy/05-skills/" },
      { icon: "🛠", title: "WorkBuddy：打造 Skill", desc: "從知識蒸餾到發布的全流程。", link: "/workbuddy/adv-build-skill/" },
      { icon: "🔌", title: "豆包：連接器實戰", desc: "先跑一個能驗收的連接器。", link: "/doubaowork/05-connectors" },
      { icon: "🤹", title: "TraeWork：Skills 技能", desc: "技能載入與管理。", link: "/traework/04-skills" },
      { icon: "💬", title: "QoderWork：對話式建立技能", desc: "用自然語言造一個技能。", link: "/qoderwork/adv-skill-create" },
    ],
  },
  {
    id: "s-assets",
    icon: "🎨",
    title: "進階 · 皮膚與辦公庫",
    ac: "#0891b2",
    ac2: "#22d3ee",
    cards: [
      { icon: "🎨", title: "WorkBuddy 皮膚工坊", desc: "下載、匯入、一鍵換膚。", link: "/workbuddy/skins/" },
      { icon: "📋", title: "WorkBuddy 指令模板", desc: "常用指令與參數速查。", link: "/workbuddy/ref-prompt-templates/" },
      { icon: "📋", title: "豆包工作指令模板", desc: "按場景收錄的高命中指令。", link: "/doubaowork/ref-templates" },
      { icon: "📋", title: "TraeWork 指令模板", desc: "指令與提示詞速查。", link: "/traework/ref-templates" },
      { icon: "📐", title: "千問場景速查表", desc: "場景卡與評分表。", link: "/qwenwork/appendix-scenarios" },
    ],
  },
  {
    id: "s-cases",
    icon: "💼",
    title: "進階 · 案例精選",
    ac: "#db2777",
    ac2: "#f472b6",
    cards: [
      { icon: "💼", title: "WorkBuddy：辦公三件套", desc: "Word、Excel、PPT 的完整交付覆盤。", link: "/workbuddy/case-office/" },
      { icon: "📈", title: "WorkBuddy：自媒體閉環", desc: "選題到增長的完整鏈路。", link: "/workbuddy/case-self-media/" },
      { icon: "🗓", title: "豆包：一場會議全程", desc: "從紀要到待辦落地。", link: "/doubaowork/case-meeting" },
      { icon: "🎬", title: "TraeWork：能上台的 PPT", desc: "從大綱到成稿的案例。", link: "/traework/case-ppt" },
      { icon: "📊", title: "QoderWork：數據調研報告", desc: "數據分析與調研的交付案例。", link: "/qoderwork/case-data-report" },
      { icon: "🏭", title: "千問：品勝電子", desc: "競品調研與產品物料製作。", link: "/qwenwork/case-pisen" },
    ],
  },
];

const zhTw: HpLocale = {
  h1: "AI Work 教學網 · 五大辦公 AI 工作台中文實戰教學",
  stripLead: "騰訊、位元組、阿里三大廠辦公 AI 工作台中文實戰教學總站",
  stripSub: "從下載安裝到無人值守，一站學齊。",
  chips: ["{n} 大工作台", "{n} 個分區", "{n} 篇精選", "100% 可溯源"],
  searchPlaceholder: "搜尋教學：Skill、飛書、定時、PPT……",
  searchAria: "篩選首頁教學卡片",
  filterNote: "匹配「{q}」：{n} 項",
  clearAria: "清除篩選",
  emptyText: "沒有匹配的教學，換個關鍵詞試試（如：飛書 / 定時 / PPT）",
  sideTitle: "全部教學",
  sideGroups: [
    {
      label: "工作台教學",
      items: [
        { id: "s-platforms", text: "五大工作台" },
        { id: "s-workbuddy", text: "WorkBuddy" },
        { id: "s-doubao", text: "豆包工作" },
        { id: "s-qianwen", text: "千問辦公" },
        { id: "s-trae", text: "TraeWork" },
        { id: "s-qoder", text: "QoderWork" },
      ],
    },
    {
      label: "進階專題",
      items: [
        { id: "s-skill", text: "Skill 與自動化" },
        { id: "s-assets", text: "皮膚與辦公庫" },
        { id: "s-cases", text: "案例精選" },
      ],
    },
    {
      label: "站點",
      items: [
        { id: "s-sources", text: "內容溯源" },
        { id: "about", text: "關於本站" },
      ],
    },
  ],
  guidesUnit: "篇",
  allText: "查看全部 →",
  sources: {
    icon: "📖",
    title: "內容溯源",
    badge: "底線",
    blocks: [
      {
        title: "📚 開源改編 · 註明出處",
        items: [
          "千問辦公改編自開源《千問辦公藍皮書 V2.0》",
          "WorkBuddy、豆包工作改編自社群開源指南",
          "所有改編內容均在原文註明出處",
        ],
      },
      {
        title: "✍️ 本站原創 · 核對官方",
        items: [
          "TraeWork、QoderWork 及進階專題為本站原創",
          "依據官方文件逐條核對撰寫",
          "案例改編自社群實戰並註明出處",
        ],
      },
    ],
    link: "/about",
    linkText: "查看致謝 →",
  },
  sections: zhTwSections,
};

/* ================================ en ================================ */

const enSections: HpSection[] = [
  {
    id: "s-platforms",
    icon: "🗂",
    title: "The Big Five · Start Here",
    ac: "#2563eb",
    ac2: "#7c3aed",
    cards: [
      { icon: "W", title: "WorkBuddy Tutorials", desc: "One-line brief in, finished work out: decks, spreadsheet analyses, research reports.", link: "/workbuddy/", badge: "Tencent" },
      { icon: "D", title: "Doubao Work Tutorials", desc: "Deep Feishu integration: paste a link, never touch files — it reads and writes back.", link: "/doubaowork/", badge: "ByteDance" },
      { icon: "Q", title: "Qwen Work Tutorials", desc: "Adapted from the open-source Qwen Work Blue Book V2.0: from generating to delivering.", link: "/qwenwork/", badge: "Alibaba" },
      { icon: "T", title: "TraeWork Tutorials", desc: "AI-native workspace: three-device sync, office assistant, scheduled automation.", link: "/traework/", badge: "ByteDance" },
      { icon: "Q", title: "QoderWork Tutorials", desc: "Smart desktop assistant: local files, browser automation, remote control via IM.", link: "/qoderwork/", badge: "Alibaba" },
    ],
  },
  {
    id: "s-workbuddy",
    icon: "W",
    title: "WorkBuddy · Tencent",
    ac: "#0052d9",
    ac2: "#00a3ff",
    allLink: "/workbuddy/",
    cards: [
      { icon: "🧭", title: "Meet WorkBuddy", desc: "What it can take off your plate: scope and limits.", link: "/workbuddy/01-intro/" },
      { icon: "📦", title: "Install & Set Up", desc: "Download, sign in, and be up and running in 10 minutes.", link: "/workbuddy/02-install/" },
      { icon: "🎯", title: "Your First Task", desc: "Brief → run → review: the complete loop.", link: "/workbuddy/04-first-task/" },
      { icon: "📑", title: "The Office Big Three", desc: "Word, Excel, and PPT delivered to a finished standard.", link: "/workbuddy/case-office/" },
      { icon: "🧩", title: "Load a Skill", desc: "Pick one skill you will actually use.", link: "/workbuddy/05-skills/" },
      { icon: "🤖", title: "Multi-Agent Systems", desc: "Task orchestration, roles, and merging results.", link: "/workbuddy/adv-multi-agent/" },
      { icon: "⚙️", title: "Reliable Automation", desc: "Scheduled tasks, retries, and output checks.", link: "/workbuddy/adv-automation-reliability/" },
      { icon: "🎨", title: "Skin Studio", desc: "One-click themes: official and community skins.", link: "/workbuddy/skins/" },
    ],
  },
  {
    id: "s-doubao",
    icon: "D",
    title: "Doubao Work · ByteDance",
    ac: "#7b61ff",
    ac2: "#4f8cff",
    allLink: "/doubaowork/",
    cards: [
      { icon: "👋", title: "What Is Doubao Work", desc: "Interface, tasks, and projects at a glance.", link: "/doubaowork/01-what-is" },
      { icon: "⚡", title: "First Task in 5 Minutes", desc: "One complete, reviewable delivery.", link: "/doubaowork/04-first-task" },
      { icon: "🔗", title: "Made for Feishu", desc: "Paste a link, never touch files: read and write back.", link: "/doubaowork/case-feishu" },
      { icon: "📄", title: "One Brief, Three Deliverables", desc: "Doc, sheet, and slides in one pass.", link: "/doubaowork/case-office" },
      { icon: "✍️", title: "Content Topic Pipeline", desc: "Trends, peers, and a posting calendar.", link: "/doubaowork/case-topic-selection" },
      { icon: "💹", title: "After-Close Market Review", desc: "From quotes to a daily watchlist report.", link: "/doubaowork/case-market-review" },
    ],
  },
  {
    id: "s-qianwen",
    icon: "Q",
    title: "Qwen Work · Alibaba",
    ac: "#615ced",
    ac2: "#a855f7",
    allLink: "/qwenwork/",
    cards: [
      { icon: "📘", title: "Executive Summary", desc: "The Blue Book V2.0 core takeaways on one page.", link: "/qwenwork/executive-summary" },
      { icon: "🚀", title: "Quick Start", desc: "Finish your first acceptance-ready task.", link: "/qwenwork/quick-start" },
      { icon: "🧮", title: "Task Delivery Protocol", desc: "Define “done” before you start.", link: "/qwenwork/ch02-task-delivery-protocol" },
      { icon: "🖨", title: "Office Delivery", desc: "Docs, data, reporting, and web pages.", link: "/qwenwork/ch06-office-delivery" },
      { icon: "🧭", title: "Role Roadmaps", desc: "Different paths for ops, finance, and admin.", link: "/qwenwork/ch07-role-roadmaps" },
      { icon: "🔍", title: "Research Evidence Chains", desc: "From question trees to release records.", link: "/qwenwork/ch08-research-evidence-chain" },
    ],
  },
  {
    id: "s-trae",
    icon: "T",
    title: "TraeWork · ByteDance",
    ac: "#0ea5e9",
    ac2: "#22d3ee",
    allLink: "/traework/",
    cards: [
      { icon: "👋", title: "What Is TraeWork", desc: "The AI-native workspace where TRAE works for you.", link: "/traework/01-what-is" },
      { icon: "📦", title: "Install & Three Devices", desc: "Desktop, web, mobile: assign from your phone, deliver on your PC.", link: "/traework/02-install" },
      { icon: "💬", title: "Office Assistant", desc: "Run TraeWork right from Feishu or WeChat.", link: "/traework/05-bot-assistant" },
      { icon: "⏱", title: "Scheduled Automation", desc: "Daily and weekly reports, routine checks.", link: "/traework/07-automated-tasks" },
      { icon: "🖥", title: "Computer & Browser Control", desc: "Plugins, authorization, browser actions.", link: "/traework/08-computer-browser" },
    ],
  },
  {
    id: "s-qoder",
    icon: "Q",
    title: "QoderWork · Alibaba",
    ac: "#16a34a",
    ac2: "#4ade80",
    allLink: "/qoderwork/",
    cards: [
      { icon: "👋", title: "What Is QoderWork", desc: "Describe the job, get the result: a smart desktop assistant.", link: "/qoderwork/01-what-is" },
      { icon: "🗄", title: "Work Folders", desc: "Direct local file access: tidy, archive, batch-rename.", link: "/qoderwork/04-files" },
      { icon: "🌐", title: "Browser Automation", desc: "Record and replay web actions: forms, scraping, downloads.", link: "/qoderwork/case-browser" },
      { icon: "📱", title: "Remote Control via IM", desc: "Send orders from chat; the office PC does the work.", link: "/qoderwork/07-im-channels" },
      { icon: "🧰", title: "Three Workbenches", desc: "Combining the built-in workbenches.", link: "/qoderwork/adv-workbenches" },
    ],
  },
  {
    id: "s-skill",
    icon: "🧩",
    title: "Advanced · Skills & Automation",
    ac: "#7c3aed",
    ac2: "#a855f7",
    cards: [
      { icon: "🧩", title: "WorkBuddy: Load a Skill", desc: "How skill installation works, how to choose.", link: "/workbuddy/05-skills/" },
      { icon: "🛠", title: "WorkBuddy: Build a Skill", desc: "From knowledge distillation to release.", link: "/workbuddy/adv-build-skill/" },
      { icon: "🔌", title: "Doubao: Connectors", desc: "Run one connector you can actually verify.", link: "/doubaowork/05-connectors" },
      { icon: "🤹", title: "TraeWork: Skills", desc: "Loading and managing skills.", link: "/traework/04-skills" },
      { icon: "💬", title: "QoderWork: Craft a Skill in Chat", desc: "Create a skill from plain language.", link: "/qoderwork/adv-skill-create" },
    ],
  },
  {
    id: "s-assets",
    icon: "🎨",
    title: "Advanced · Skins & Libraries",
    ac: "#0891b2",
    ac2: "#22d3ee",
    cards: [
      { icon: "🎨", title: "WorkBuddy Skin Studio", desc: "Download, import, and switch themes in one click.", link: "/workbuddy/skins/" },
      { icon: "📋", title: "WorkBuddy Prompt Templates", desc: "Frequently used commands and parameters.", link: "/workbuddy/ref-prompt-templates/" },
      { icon: "📋", title: "Doubao Prompt Templates", desc: "High-hit prompts by scenario.", link: "/doubaowork/ref-templates" },
      { icon: "📋", title: "TraeWork Prompt Templates", desc: "Commands and prompts at a glance.", link: "/traework/ref-templates" },
      { icon: "📐", title: "Qwen Scenario Scorecards", desc: "Scenario cards and scoring tables.", link: "/qwenwork/appendix-scenarios" },
    ],
  },
  {
    id: "s-cases",
    icon: "💼",
    title: "Advanced · Case Picks",
    ac: "#db2777",
    ac2: "#f472b6",
    cards: [
      { icon: "💼", title: "WorkBuddy: Office Big Three", desc: "Word, Excel, and PPT end to end.", link: "/workbuddy/case-office/" },
      { icon: "📈", title: "WorkBuddy: Self-Media Loop", desc: "From topic picks to growth.", link: "/workbuddy/case-self-media/" },
      { icon: "🗓", title: "Doubao: One Meeting, End to End", desc: "From minutes to action items.", link: "/doubaowork/case-meeting" },
      { icon: "🎬", title: "TraeWork: A Stage-Ready Deck", desc: "From outline to finished slides.", link: "/traework/case-ppt" },
      { icon: "📊", title: "QoderWork: Data & Research", desc: "A delivered data-research report.", link: "/qoderwork/case-data-report" },
      { icon: "🏭", title: "Qwen: Pisen Electronics", desc: "Competitor research and product collateral.", link: "/qwenwork/case-pisen" },
    ],
  },
];

const en: HpLocale = {
  h1: "AI Work Tutorials · Hands-on guides for five office AI workspaces",
  stripLead: "Practical tutorials for the office AI workspaces of Tencent, ByteDance, and Alibaba",
  stripSub: "from download to unattended automation — all in one place.",
  chips: ["{n} workspaces", "{n} sections", "{n} guides", "100% traceable"],
  searchPlaceholder: "Filter tutorials: skills, Feishu, schedules, PPT…",
  searchAria: "Filter homepage tutorial cards",
  filterNote: "{q}: {n} matches",
  clearAria: "Clear filter",
  emptyText: "No tutorials matched. Try another keyword (e.g. Feishu / schedule / PPT).",
  sideTitle: "All tutorials",
  sideGroups: [
    {
      label: "Workspace tutorials",
      items: [
        { id: "s-platforms", text: "The big five" },
        { id: "s-workbuddy", text: "WorkBuddy" },
        { id: "s-doubao", text: "Doubao Work" },
        { id: "s-qianwen", text: "Qwen Work" },
        { id: "s-trae", text: "TraeWork" },
        { id: "s-qoder", text: "QoderWork" },
      ],
    },
    {
      label: "Advanced topics",
      items: [
        { id: "s-skill", text: "Skills & automation" },
        { id: "s-assets", text: "Skins & libraries" },
        { id: "s-cases", text: "Case picks" },
      ],
    },
    {
      label: "Site",
      items: [
        { id: "s-sources", text: "Sources" },
        { id: "about", text: "About" },
      ],
    },
  ],
  guidesUnit: "guides",
  allText: "View all →",
  sources: {
    icon: "📖",
    title: "Content Sources",
    badge: "our baseline",
    blocks: [
      {
        title: "📚 Adapted from open source · with credit",
        items: [
          "Qwen Work adapted from the open-source Qwen Work Blue Book V2.0",
          "WorkBuddy and Doubao Work adapted from community open-source guides",
          "Every adaptation is credited in the article itself",
        ],
      },
      {
        title: "✍️ Original to this site · checked against docs",
        items: [
          "TraeWork, QoderWork, and the advanced topics are original to this site",
          "Written and fact-checked against the official documentation",
          "Case studies adapted from community field reports, credited inline",
        ],
      },
    ],
    link: "/about",
    linkText: "See the credits →",
  },
  sections: enSections,
};

/* ================================ de ================================ */

const deSections: HpSection[] = [
  {
    id: "s-platforms",
    icon: "🗂",
    title: "Die großen fünf · Einstieg",
    ac: "#2563eb",
    ac2: "#7c3aed",
    cards: [
      { icon: "W", title: "WorkBuddy-Tutorials", desc: "Ein Satz Auftrag, fertiges Ergebnis: Präsentationen, Tabellenanalysen, Research-Berichte.", link: "/workbuddy/", badge: "Tencent" },
      { icon: "D", title: "Doubao-Work-Tutorials", desc: "Tief in Feishu integriert: Link einfügen statt Dateien – liest das Dokument und schreibt zurück.", link: "/doubaowork/", badge: "ByteDance" },
      { icon: "Q", title: "Qwen-Work-Tutorials", desc: "Adaptiert aus dem offenen „Qwen-Work-Blaubuch V2.0“: vom Generieren zum Liefern.", link: "/qwenwork/", badge: "Alibaba" },
      { icon: "T", title: "TraeWork-Tutorials", desc: "KI-nativer Arbeitsplatz: drei Geräte, Büro-Assistent, zeitgesteuerte Automatisierung.", link: "/traework/", badge: "ByteDance" },
      { icon: "Q", title: "QoderWork-Tutorials", desc: "Intelligenter Desktop-Assistent: lokale Dateien, Browser-Automatisierung, Fernsteuerung per Chat.", link: "/qoderwork/", badge: "Alibaba" },
    ],
  },
  {
    id: "s-workbuddy",
    icon: "W",
    title: "WorkBuddy · Tencent",
    ac: "#0052d9",
    ac2: "#00a3ff",
    allLink: "/workbuddy/",
    cards: [
      { icon: "🧭", title: "WorkBuddy kennenlernen", desc: "Was er für Sie erledigen kann: Umfang und Grenzen.", link: "/workbuddy/01-intro/" },
      { icon: "📦", title: "Download & Installation", desc: "Herunterladen, anmelden, in 10 Minuten einsatzbereit.", link: "/workbuddy/02-install/" },
      { icon: "🎯", title: "Der erste Auftrag", desc: "Auftrag → Ausführung → Abnahme: der komplette Loop.", link: "/workbuddy/04-first-task/" },
      { icon: "📑", title: "Office-Dreigestirn", desc: "Word, Excel und PPT auf Lieferqualität.", link: "/workbuddy/case-office/" },
      { icon: "🧩", title: "Einen Skill laden", desc: "Einen Skill wählen, den Sie wirklich nutzen.", link: "/workbuddy/05-skills/" },
      { icon: "🤖", title: "Multi-Agent-Systeme", desc: "Aufgaben orchestrieren, Rollen verteilen, Ergebnisse zusammenführen.", link: "/workbuddy/adv-multi-agent/" },
      { icon: "⚙️", title: "Zuverlässige Automatisierung", desc: "Zeitgesteuerte Aufgaben, Wiederholungen, Ergebnisprüfung.", link: "/workbuddy/adv-automation-reliability/" },
      { icon: "🎨", title: "Skin-Studio", desc: "Themes mit einem Klick: offizielle und Community-Skins.", link: "/workbuddy/skins/" },
    ],
  },
  {
    id: "s-doubao",
    icon: "D",
    title: "Doubao Work · ByteDance",
    ac: "#7b61ff",
    ac2: "#4f8cff",
    allLink: "/doubaowork/",
    cards: [
      { icon: "👋", title: "Was ist Doubao Work", desc: "Oberfläche, Aufgaben und Projekte im Überblick.", link: "/doubaowork/01-what-is" },
      { icon: "⚡", title: "Erste Aufgabe in 5 Minuten", desc: "Eine komplette, abnahmefähige Lieferung.", link: "/doubaowork/04-first-task" },
      { icon: "🔗", title: "Am besten mit Feishu", desc: "Nur den Link geben: lesen und zurückschreiben.", link: "/doubaowork/case-feishu" },
      { icon: "📄", title: "Ein Briefing, drei Ergebnisse", desc: "Dokument, Tabelle und Folien in einem Durchgang.", link: "/doubaowork/case-office" },
      { icon: "✍️", title: "Themen-Pipeline", desc: "Trends, Wettbewerber und Terminplan.", link: "/doubaowork/case-topic-selection" },
      { icon: "💹", title: "Kurschluss-Review", desc: "Von Kursdaten zum Watchlist-Tagebericht.", link: "/doubaowork/case-market-review" },
    ],
  },
  {
    id: "s-qianwen",
    icon: "Q",
    title: "Qwen Work · Alibaba",
    ac: "#615ced",
    ac2: "#a855f7",
    allLink: "/qwenwork/",
    cards: [
      { icon: "📘", title: "Executive Summary", desc: "Die Kernthesen des Blaubuchs V2.0 auf einer Seite.", link: "/qwenwork/executive-summary" },
      { icon: "🚀", title: "Schnellstart", desc: "Die erste abnehmbare Aufgabe erledigen.", link: "/qwenwork/quick-start" },
      { icon: "🧮", title: "Aufgaben-Lieferprotokoll", desc: "„Fertig“ definieren, bevor es losgeht.", link: "/qwenwork/ch02-task-delivery-protocol" },
      { icon: "🖨", title: "Office-Lieferung", desc: "Dokumente, Daten, Berichte und Webseiten.", link: "/qwenwork/ch06-office-delivery" },
      { icon: "🧭", title: "Rollen-Routen", desc: "Getrennte Pfade für Verwaltung, Ops und Finanzen.", link: "/qwenwork/ch07-role-roadmaps" },
      { icon: "🔍", title: "Research-Nachweisketten", desc: "Vom Fragenbaum zum Veröffentlichungsprotokoll.", link: "/qwenwork/ch08-research-evidence-chain" },
    ],
  },
  {
    id: "s-trae",
    icon: "T",
    title: "TraeWork · ByteDance",
    ac: "#0ea5e9",
    ac2: "#22d3ee",
    allLink: "/traework/",
    cards: [
      { icon: "👋", title: "Was ist TraeWork", desc: "Der KI-native Arbeitsplatz, in dem TRAE für Sie arbeitet.", link: "/traework/01-what-is" },
      { icon: "📦", title: "Installation & drei Geräte", desc: "Desktop, Web, mobil: vom Handy beauftragen, am PC liefern.", link: "/traework/02-install" },
      { icon: "💬", title: "Büro-Assistent", desc: "TraeWork direkt in Feishu oder WeChat steuern.", link: "/traework/05-bot-assistant" },
      { icon: "⏱", title: "Zeitgesteuerte Automatisierung", desc: "Tages- und Wochenberichte, Routine-Checks.", link: "/traework/07-automated-tasks" },
      { icon: "🖥", title: "Computer- & Browser-Steuerung", desc: "Plugins, Berechtigungen, Browser-Aktionen.", link: "/traework/08-computer-browser" },
    ],
  },
  {
    id: "s-qoder",
    icon: "Q",
    title: "QoderWork · Alibaba",
    ac: "#16a34a",
    ac2: "#4ade80",
    allLink: "/qoderwork/",
    cards: [
      { icon: "👋", title: "Was ist QoderWork", desc: "Sie beschreiben, es liefert: der intelligente Desktop-Assistent.", link: "/qoderwork/01-what-is" },
      { icon: "🗄", title: "Arbeitsordner", desc: "Lokale Dateien direkt lesen und schreiben.", link: "/qoderwork/04-files" },
      { icon: "🌐", title: "Browser-Automatisierung", desc: "Web-Aktionen aufnehmen und abspielen.", link: "/qoderwork/case-browser" },
      { icon: "📱", title: "Fernsteuerung per Chat", desc: "Befehle aus dem Chat, der Büro-PC arbeitet.", link: "/qoderwork/07-im-channels" },
      { icon: "🧰", title: "Drei Arbeitsplätze", desc: "Die eingebauten Workbenches kombinieren.", link: "/qoderwork/adv-workbenches" },
    ],
  },
  {
    id: "s-skill",
    icon: "🧩",
    title: "Fortgeschritten · Skills & Automatisierung",
    ac: "#7c3aed",
    ac2: "#a855f7",
    cards: [
      { icon: "🧩", title: "WorkBuddy: Skill laden", desc: "Wie die Skill-Installation funktioniert.", link: "/workbuddy/05-skills/" },
      { icon: "🛠", title: "WorkBuddy: Skill bauen", desc: "Von der Wissensdestillation bis zur Veröffentlichung.", link: "/workbuddy/adv-build-skill/" },
      { icon: "🔌", title: "Doubao: Konnektoren", desc: "Einen Konnektor lauffähig und prüfbar machen.", link: "/doubaowork/05-connectors" },
      { icon: "🤹", title: "TraeWork: Skills", desc: "Laden und Verwalten von Skills.", link: "/traework/04-skills" },
      { icon: "💬", title: "QoderWork: Skill im Chat", desc: "Einen Skill in natürlicher Sprache erschaffen.", link: "/qoderwork/adv-skill-create" },
    ],
  },
  {
    id: "s-assets",
    icon: "🎨",
    title: "Fortgeschritten · Skins & Bibliotheken",
    ac: "#0891b2",
    ac2: "#22d3ee",
    cards: [
      { icon: "🎨", title: "WorkBuddy Skin-Studio", desc: "Themes herunterladen und mit einem Klick wechseln.", link: "/workbuddy/skins/" },
      { icon: "📋", title: "WorkBuddy-Befehlsvorlagen", desc: "Häufige Befehle und Parameter.", link: "/workbuddy/ref-prompt-templates/" },
      { icon: "📋", title: "Doubao-Prompt-Vorlagen", desc: "Trefferstarke Prompts nach Szenario.", link: "/doubaowork/ref-templates" },
      { icon: "📋", title: "TraeWork-Befehlsvorlagen", desc: "Befehle und Prompts auf einen Blick.", link: "/traework/ref-templates" },
      { icon: "📐", title: "Qwen-Szenariokarten", desc: "Szenariokarten und Bewertungstabellen.", link: "/qwenwork/appendix-scenarios" },
    ],
  },
  {
    id: "s-cases",
    icon: "💼",
    title: "Fortgeschritten · Fallauswahl",
    ac: "#db2777",
    ac2: "#f472b6",
    cards: [
      { icon: "💼", title: "WorkBuddy: Office-Dreigestirn", desc: "Word, Excel und PPT komplett.", link: "/workbuddy/case-office/" },
      { icon: "📈", title: "WorkBuddy: Selbstmedien-Loop", desc: "Von der Themenwahl bis zum Wachstum.", link: "/workbuddy/case-self-media/" },
      { icon: "🗓", title: "Doubao: ein Meeting komplett", desc: "Vom Protokoll bis zu den Aufgaben.", link: "/doubaowork/case-meeting" },
      { icon: "🎬", title: "TraeWork: PPT bühnenreif", desc: "Von der Gliederung zu fertigen Folien.", link: "/traework/case-ppt" },
      { icon: "📊", title: "QoderWork: Daten & Research", desc: "Ein gelieferter Daten-Research-Bericht.", link: "/qoderwork/case-data-report" },
      { icon: "🏭", title: "Qwen: Pisen Electronics", desc: "Wettbewerbs-Research und Produktmaterial.", link: "/qwenwork/case-pisen" },
    ],
  },
];

const de: HpLocale = {
  h1: "AI Work Tutorials · Praxis-Guides für fünf KI-Arbeitsplätze",
  stripLead: "Praxistaugliche Tutorials für die Büro-KI-Arbeitsplätze von Tencent, ByteDance und Alibaba",
  stripSub: "von der Installation bis zur unbeaufsichtigten Automatisierung — alles an einem Ort.",
  chips: ["{n} Arbeitsplätze", "{n} Bereiche", "{n} Guides", "100 % nachvollziehbar"],
  searchPlaceholder: "Tutorials filtern: Skill, Feishu, zeitgesteuert, PPT…",
  searchAria: "Tutorialkarten der Startseite filtern",
  filterNote: "{q}: {n} Treffer",
  clearAria: "Filter löschen",
  emptyText: "Keine Treffer. Probieren Sie ein anderes Stichwort (z. B. Feishu / zeitgesteuert / PPT).",
  sideTitle: "Alle Tutorials",
  sideGroups: [
    {
      label: "Arbeitsplatz-Tutorials",
      items: [
        { id: "s-platforms", text: "Die großen fünf" },
        { id: "s-workbuddy", text: "WorkBuddy" },
        { id: "s-doubao", text: "Doubao Work" },
        { id: "s-qianwen", text: "Qwen Work" },
        { id: "s-trae", text: "TraeWork" },
        { id: "s-qoder", text: "QoderWork" },
      ],
    },
    {
      label: "Fortgeschritten",
      items: [
        { id: "s-skill", text: "Skills & Automatisierung" },
        { id: "s-assets", text: "Skins & Bibliotheken" },
        { id: "s-cases", text: "Fallauswahl" },
      ],
    },
    {
      label: "Seite",
      items: [
        { id: "s-sources", text: "Quellen" },
        { id: "about", text: "Über uns" },
      ],
    },
  ],
  guidesUnit: "Guides",
  allText: "Alle ansehen →",
  sources: {
    icon: "📖",
    title: "Quellen & Nachvollziehbarkeit",
    badge: "unser Anspruch",
    blocks: [
      {
        title: "📚 Aus Open Source adaptiert · mit Quellenangabe",
        items: [
          "Qwen Work adaptiert aus dem offenen „Qwen-Work-Blaubuch V2.0“",
          "WorkBuddy und Doubao Work adaptiert aus Community-Leitfäden",
          "Jede Adaption wird im Text selbst genannt",
        ],
      },
      {
        title: "✍️ Original dieser Seite · gegen Dokumente geprüft",
        items: [
          "TraeWork, QoderWork und die Vertiefungen sind Originalinhalte",
          "Anhand der offiziellen Dokumente Zeile für Zeile geprüft",
          "Fälle aus der Community adaptiert und mit Quelle genannt",
        ],
      },
    ],
    link: "/about",
    linkText: "Danksagung ansehen →",
  },
  sections: deSections,
};

/* ================================ fr ================================ */

const frSections: HpSection[] = [
  {
    id: "s-platforms",
    icon: "🗂",
    title: "Les cinq grands · Pour commencer",
    ac: "#2563eb",
    ac2: "#7c3aed",
    cards: [
      { icon: "W", title: "Tutoriels WorkBuddy", desc: "Une phrase en entrée, un livrable en sortie : présentations, analyses de tableaux, rapports d'étude.", link: "/workbuddy/", badge: "Tencent" },
      { icon: "D", title: "Tutoriels Doubao Work", desc: "Intégration profonde avec Feishu : collez un lien, il lit le document et y écrit.", link: "/doubaowork/", badge: "ByteDance" },
      { icon: "Q", title: "Tutoriels Qwen Work", desc: "Adapté du « Livre bleu Qwen Work V2.0 » open source : de « savoir générer » à « savoir livrer ».", link: "/qwenwork/", badge: "Alibaba" },
      { icon: "T", title: "Tutoriels TraeWork", desc: "Espace de travail natif IA : trois appareils, assistant de bureau, automatisation planifiée.", link: "/traework/", badge: "ByteDance" },
      { icon: "Q", title: "Tutoriels QoderWork", desc: "Assistant desktop intelligent : fichiers locaux, automatisation du navigateur, pilotage par messagerie.", link: "/qoderwork/", badge: "Alibaba" },
    ],
  },
  {
    id: "s-workbuddy",
    icon: "W",
    title: "WorkBuddy · Tencent",
    ac: "#0052d9",
    ac2: "#00a3ff",
    allLink: "/workbuddy/",
    cards: [
      { icon: "🧭", title: "Découvrir WorkBuddy", desc: "Ce qu'il peut faire à votre place : périmètre et limites.", link: "/workbuddy/01-intro/" },
      { icon: "📦", title: "Téléchargement & installation", desc: "Installer, se connecter, être prêt en 10 minutes.", link: "/workbuddy/02-install/" },
      { icon: "🎯", title: "La première tâche", desc: "Consigne → exécution → validation : la boucle complète.", link: "/workbuddy/04-first-task/" },
      { icon: "📑", title: "La triade bureautique", desc: "Word, Excel et PowerPoint au niveau livrable.", link: "/workbuddy/case-office/" },
      { icon: "🧩", title: "Charger un skill", desc: "Choisir un skill que vous utiliserez vraiment.", link: "/workbuddy/05-skills/" },
      { icon: "🤖", title: "Systèmes multi-agents", desc: "Orchestration, rôles et fusion des résultats.", link: "/workbuddy/adv-multi-agent/" },
      { icon: "⚙️", title: "Automatisation fiable", desc: "Tâches planifiées, reprises et vérification des sorties.", link: "/workbuddy/adv-automation-reliability/" },
      { icon: "🎨", title: "Atelier de skins", desc: "Thèmes en un clic : officiels et communautaires.", link: "/workbuddy/skins/" },
    ],
  },
  {
    id: "s-doubao",
    icon: "D",
    title: "Doubao Work · ByteDance",
    ac: "#7b61ff",
    ac2: "#4f8cff",
    allLink: "/doubaowork/",
    cards: [
      { icon: "👋", title: "Qu'est-ce que Doubao Work", desc: "Interface, tâches et projets en un coup d'œil.", link: "/doubaowork/01-what-is" },
      { icon: "⚡", title: "Première tâche en 5 minutes", desc: "Une livraison complète et vérifiable.", link: "/doubaowork/04-first-task" },
      { icon: "🔗", title: "Fait pour Feishu", desc: "Donnez juste le lien : lecture et écriture dans le doc.", link: "/doubaowork/case-feishu" },
      { icon: "📄", title: "Un brief, trois livrables", desc: "Document, tableur et diapos en une passe.", link: "/doubaowork/case-office" },
      { icon: "✍️", title: "Chaîne éditoriale", desc: "Tendances, concurrents et calendrier de publication.", link: "/doubaowork/case-topic-selection" },
      { icon: "💹", title: "Débrief de clôture", desc: "Des cours au rapport quotidien de veille.", link: "/doubaowork/case-market-review" },
    ],
  },
  {
    id: "s-qianwen",
    icon: "Q",
    title: "Qwen Work · Alibaba",
    ac: "#615ced",
    ac2: "#a855f7",
    allLink: "/qwenwork/",
    cards: [
      { icon: "📘", title: "Résumé exécutif", desc: "Les points clés du Livre bleu V2.0 en une page.", link: "/qwenwork/executive-summary" },
      { icon: "🚀", title: "Démarrage rapide", desc: "Réussir sa première tâche livrable.", link: "/qwenwork/quick-start" },
      { icon: "🧮", title: "Protocole de livraison", desc: "Définir « terminé » avant de commencer.", link: "/qwenwork/ch02-task-delivery-protocol" },
      { icon: "🖨", title: "Livraison bureautique", desc: "Documents, données, reporting et pages web.", link: "/qwenwork/ch06-office-delivery" },
      { icon: "🧭", title: "Parcours par métier", desc: "Des parcours distincts pour ops, finance et admin.", link: "/qwenwork/ch07-role-roadmaps" },
      { icon: "🔍", title: "Chaînes de preuves", desc: "De l'arbre de questions au journal de publication.", link: "/qwenwork/ch08-research-evidence-chain" },
    ],
  },
  {
    id: "s-trae",
    icon: "T",
    title: "TraeWork · ByteDance",
    ac: "#0ea5e9",
    ac2: "#22d3ee",
    allLink: "/traework/",
    cards: [
      { icon: "👋", title: "Qu'est-ce que TraeWork", desc: "L'espace de travail natif IA où TRAE travaille pour vous.", link: "/traework/01-what-is" },
      { icon: "📦", title: "Installation & trois appareils", desc: "Desktop, web, mobile : assignez du téléphone, livrez du PC.", link: "/traework/02-install" },
      { icon: "💬", title: "Assistant de bureau", desc: "Pilotez TraeWork depuis Feishu ou WeChat.", link: "/traework/05-bot-assistant" },
      { icon: "⏱", title: "Automatisation planifiée", desc: "Rapports quotidiens et hebdomadaires, vérifications de routine.", link: "/traework/07-automated-tasks" },
      { icon: "🖥", title: "Contrôle PC & navigateur", desc: "Plugins, autorisations, actions navigateur.", link: "/traework/08-computer-browser" },
    ],
  },
  {
    id: "s-qoder",
    icon: "Q",
    title: "QoderWork · Alibaba",
    ac: "#16a34a",
    ac2: "#4ade80",
    allLink: "/qoderwork/",
    cards: [
      { icon: "👋", title: "Qu'est-ce que QoderWork", desc: "Décrivez le travail, il livre : l'assistant desktop intelligent.", link: "/qoderwork/01-what-is" },
      { icon: "🗄", title: "Dossiers de travail", desc: "Lire et écrire directement les fichiers locaux.", link: "/qoderwork/04-files" },
      { icon: "🌐", title: "Automatisation navigateur", desc: "Enregistrer et rejouer des actions web.", link: "/qoderwork/case-browser" },
      { icon: "📱", title: "Pilotage par messagerie", desc: "Des ordres dans le chat, le PC du bureau exécute.", link: "/qoderwork/07-im-channels" },
      { icon: "🧰", title: "Trois espaces de travail", desc: "Combiner les workbenches intégrés.", link: "/qoderwork/adv-workbenches" },
    ],
  },
  {
    id: "s-skill",
    icon: "🧩",
    title: "Avancé · Skills & automatisation",
    ac: "#7c3aed",
    ac2: "#a855f7",
    cards: [
      { icon: "🧩", title: "WorkBuddy : charger un skill", desc: "Comment fonctionne l'installation des skills.", link: "/workbuddy/05-skills/" },
      { icon: "🛠", title: "WorkBuddy : créer un skill", desc: "De la distillation de connaissances à la publication.", link: "/workbuddy/adv-build-skill/" },
      { icon: "🔌", title: "Doubao : connecteurs", desc: "Mettre en route un connecteur vérifiable.", link: "/doubaowork/05-connectors" },
      { icon: "🤹", title: "TraeWork : skills", desc: "Charger et gérer les skills.", link: "/traework/04-skills" },
      { icon: "💬", title: "QoderWork : un skill en dialogue", desc: "Créer un skill en langage naturel.", link: "/qoderwork/adv-skill-create" },
    ],
  },
  {
    id: "s-assets",
    icon: "🎨",
    title: "Avancé · Skins & bibliothèques",
    ac: "#0891b2",
    ac2: "#22d3ee",
    cards: [
      { icon: "🎨", title: "Atelier de skins WorkBuddy", desc: "Télécharger, importer, changer de thème en un clic.", link: "/workbuddy/skins/" },
      { icon: "📋", title: "Modèles de commandes WorkBuddy", desc: "Commandes et paramètres fréquents.", link: "/workbuddy/ref-prompt-templates/" },
      { icon: "📋", title: "Modèles de prompts Doubao", desc: "Des prompts efficaces par scénario.", link: "/doubaowork/ref-templates" },
      { icon: "📋", title: "Modèles de commandes TraeWork", desc: "Commandes et prompts en un coup d'œil.", link: "/traework/ref-templates" },
      { icon: "📐", title: "Fiches de scénarios Qwen", desc: "Cartes de scénarios et grilles de score.", link: "/qwenwork/appendix-scenarios" },
    ],
  },
  {
    id: "s-cases",
    icon: "💼",
    title: "Avancé · Cas choisis",
    ac: "#db2777",
    ac2: "#f472b6",
    cards: [
      { icon: "💼", title: "WorkBuddy : la triade bureautique", desc: "Word, Excel et PowerPoint de bout en bout.", link: "/workbuddy/case-office/" },
      { icon: "📈", title: "WorkBuddy : boucle média perso", desc: "Du choix des sujets à la croissance.", link: "/workbuddy/case-self-media/" },
      { icon: "🗓", title: "Doubao : une réunion complète", desc: "Du compte rendu aux actions.", link: "/doubaowork/case-meeting" },
      { icon: "🎬", title: "TraeWork : un deck prêt pour la scène", desc: "Du plan aux diapos finales.", link: "/traework/case-ppt" },
      { icon: "📊", title: "QoderWork : données & recherche", desc: "Un rapport d'étude livré.", link: "/qoderwork/case-data-report" },
      { icon: "🏭", title: "Qwen : Pisen Electronics", desc: "Étude concurrentielle et supports produit.", link: "/qwenwork/case-pisen" },
    ],
  },
];

const fr: HpLocale = {
  h1: "AI Work Tutoriels · Guides pratiques pour cinq espaces de travail IA",
  stripLead: "Les tutoriels pratiques des espaces de travail IA de Tencent, ByteDance et Alibaba",
  stripSub: "de l'installation à l'automatisation sans surveillance — tout au même endroit.",
  chips: ["{n} espaces", "{n} sections", "{n} guides", "100 % traçable"],
  searchPlaceholder: "Filtrer : skill, Feishu, planifié, PPT…",
  searchAria: "Filtrer les cartes de tutoriels",
  filterNote: "{q} : {n} résultats",
  clearAria: "Effacer le filtre",
  emptyText: "Aucun tutoriel trouvé. Essayez un autre mot-clé (ex. Feishu / planifié / PPT).",
  sideTitle: "Tous les tutoriels",
  sideGroups: [
    {
      label: "Espaces de travail",
      items: [
        { id: "s-platforms", text: "Les cinq grands" },
        { id: "s-workbuddy", text: "WorkBuddy" },
        { id: "s-doubao", text: "Doubao Work" },
        { id: "s-qianwen", text: "Qwen Work" },
        { id: "s-trae", text: "TraeWork" },
        { id: "s-qoder", text: "QoderWork" },
      ],
    },
    {
      label: "Sujets avancés",
      items: [
        { id: "s-skill", text: "Skills & automatisation" },
        { id: "s-assets", text: "Skins & bibliothèques" },
        { id: "s-cases", text: "Cas choisis" },
      ],
    },
    {
      label: "Site",
      items: [
        { id: "s-sources", text: "Sources" },
        { id: "about", text: "À propos" },
      ],
    },
  ],
  guidesUnit: "guides",
  allText: "Tout voir →",
  sources: {
    icon: "📖",
    title: "Sources & traçabilité",
    badge: "notre exigence",
    blocks: [
      {
        title: "📚 Adapté de l'open source · avec mention",
        items: [
          "Qwen Work adapté du « Livre bleu Qwen Work V2.0 » open source",
          "WorkBuddy et Doubao Work adaptés de guides communautaires open source",
          "Chaque adaptation est créditée dans l'article",
        ],
      },
      {
        title: "✍️ Original du site · vérifié",
        items: [
          "TraeWork, QoderWork et les sujets avancés sont originaux",
          "Rédigés et vérifiés par rapport à la documentation officielle",
          "Cas adaptés de retours communautaires, crédités en ligne",
        ],
      },
    ],
    link: "/about",
    linkText: "Voir les remerciements →",
  },
  sections: frSections,
};

/* eslint-disable-next-line import/no-default-export */
export const homePortalData: Record<"zh" | "zh-tw" | "en" | "de" | "fr", HpLocale> = {
  zh,
  "zh-tw": zhTw,
  en,
  de,
  fr,
};
