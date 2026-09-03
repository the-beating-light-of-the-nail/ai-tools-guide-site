// 繁體中文（台灣，zh-tw 路徑）導覽與側欄資料 —— 與其他語言檔案保持同構結構
import type { LocaleConfig } from "vitepress";

const sidebar: LocaleConfig["themeConfig"]["sidebar"] = {
  "/workbuddy/": [
    {
      text: "上手篇",
      items: [
        { text: "板塊導覽", link: "/workbuddy/" },
        { text: "初識 WorkBuddy", link: "/workbuddy/01-intro/" },
        { text: "下載、安裝、登入與更新", link: "/workbuddy/02-install/" },
        { text: "主介面、任務與工作區", link: "/workbuddy/03-interface/" },
        { text: "快速完成第一個任務", link: "/workbuddy/04-first-task/" },
        { text: "載入一個真正用得上的 Skill", link: "/workbuddy/05-skills/" },
      ],
    },
    {
      text: "擴充篇",
      items: [
        { text: "專家與專家團", link: "/workbuddy/06-experts/" },
        { text: "使用連接器", link: "/workbuddy/07-connectors/" },
        { text: "接入小程式與 IM 助理", link: "/workbuddy/08-im-assistant/" },
        { text: "接入外部 API", link: "/workbuddy/09-external-api/" },
        { text: "自動化任務", link: "/workbuddy/10-automation/" },
        { text: "課外閱讀：看懂 AI 工作系統", link: "/workbuddy/11-ai-work-system/" },
      ],
    },
    {
      text: "案例篇",
      items: [
        { text: "辦公三件套：Word、Excel、PPT", link: "/workbuddy/case-office/" },
        { text: "知識管理：收藏要能用起來", link: "/workbuddy/case-knowledge/" },
        { text: "把投資分析變成日常", link: "/workbuddy/case-investment/" },
        { text: "一句話召喚 AI 影片團隊", link: "/workbuddy/case-video-team/" },
        { text: "自媒體成長閉環", link: "/workbuddy/case-self-media/" },
      ],
    },
    {
      text: "進階篇",
      items: [
        { text: "打造 Skill：知識蒸餾", link: "/workbuddy/adv-build-skill/" },
        { text: "多 Agent 系統設計", link: "/workbuddy/adv-multi-agent/" },
        { text: "自動化工作流的可靠性", link: "/workbuddy/adv-automation-reliability/" },
      ],
    },
    {
      text: "速查區",
      items: [
        { text: "常用指令範本", link: "/workbuddy/ref-prompt-templates/" },
        { text: "情境速查表", link: "/workbuddy/ref-scenarios/" },
      ],
    },
  ],
  "/traework/": [
    {
      text: "上手篇",
      items: [
        { text: "板塊導覽", link: "/traework/" },
        { text: "TraeWork 是什麼", link: "/traework/01-what-is" },
        { text: "安裝、登入與三端協同", link: "/traework/02-install" },
        { text: "第一個任務", link: "/traework/03-first-task" },
        { text: "Skills 技能", link: "/traework/04-skills" },
      ],
    },
    {
      text: "擴充篇",
      items: [
        { text: "辦公助理：飛書與微信", link: "/traework/05-bot-assistant" },
        { text: "插件與外部應用授權", link: "/traework/06-plugins-integrations" },
        { text: "自動化定時任務", link: "/traework/07-automated-tasks" },
        { text: "電腦與瀏覽器控制", link: "/traework/08-computer-browser" },
      ],
    },
    {
      text: "案例篇",
      items: [
        { text: "做一套能上台的 PPT", link: "/traework/case-ppt" },
        { text: "動態彙報：看板、週報與述職", link: "/traework/case-report" },
        { text: "公眾號→飛書知識庫流水線", link: "/traework/case-feishu-pipeline" },
        { text: "聊天視窗裡的四種日常", link: "/traework/case-im-daily" },
      ],
    },
    {
      text: "進階篇",
      items: [
        { text: "Plan、Spec、Goal 與命令", link: "/traework/adv-workflows" },
        { text: "MCP 與雲端執行環境", link: "/traework/adv-mcp-env" },
        { text: "模型與積分避坑", link: "/traework/adv-models-credits" },
      ],
    },
    {
      text: "速查區",
      items: [
        { text: "常用指令範本", link: "/traework/ref-templates" },
        { text: "情境速查表", link: "/traework/ref-scenarios" },
      ],
    },
  ],
  "/qoderwork/": [
    {
      text: "上手篇",
      items: [
        { text: "板塊導覽", link: "/qoderwork/" },
        { text: "QoderWork 是什麼", link: "/qoderwork/01-what-is" },
        { text: "安裝與登入", link: "/qoderwork/02-install" },
        { text: "第一個任務", link: "/qoderwork/03-first-task" },
        { text: "工作資料夾", link: "/qoderwork/04-files" },
      ],
    },
    {
      text: "擴充篇",
      items: [
        { text: "技能與專家套件", link: "/qoderwork/05-skills" },
        { text: "連接器與 MCP", link: "/qoderwork/06-connectors" },
        { text: "IM 頻道", link: "/qoderwork/07-im-channels" },
        { text: "定時任務", link: "/qoderwork/08-automation" },
      ],
    },
    {
      text: "案例篇",
      items: [
        { text: "檔案整理與照片管理", link: "/qoderwork/case-file-organize" },
        { text: "資料分析與調研報告", link: "/qoderwork/case-data-report" },
        { text: "瀏覽器自動化實戰", link: "/qoderwork/case-browser" },
        { text: "批次文件處理與多媒體", link: "/qoderwork/case-office-docs" },
      ],
    },
    {
      text: "進階篇",
      items: [
        { text: "電腦操控與語音輸入", link: "/qoderwork/adv-computer-use" },
        { text: "對話式建立技能", link: "/qoderwork/adv-skill-create" },
        { text: "三大工作台", link: "/qoderwork/adv-workbenches" },
        { text: "意識、成本與安全環境", link: "/qoderwork/adv-memory-cost" },
      ],
    },
    {
      text: "速查區",
      items: [
        { text: "常用指令範本", link: "/qoderwork/ref-templates" },
        { text: "情境速查表", link: "/qoderwork/ref-scenarios" },
      ],
    },
  ],
  "/doubaowork/": [
    {
      text: "上手篇",
      items: [
        { text: "板塊導覽", link: "/doubaowork/" },
        { text: "豆包工作是什麼", link: "/doubaowork/01-what-is" },
        { text: "下載、安裝與登入", link: "/doubaowork/02-install" },
        { text: "主介面、任務和專案", link: "/doubaowork/03-interface" },
        { text: "第一個任務：五分鐘跑通", link: "/doubaowork/04-first-task" },
        { text: "連接器：先跑個能驗收的", link: "/doubaowork/05-connectors" },
        { text: "Skill 怎麼選，怎麼用", link: "/doubaowork/06-skills" },
      ],
    },
    {
      text: "擴充篇",
      items: [
        { text: "手機遙控電腦", link: "/doubaowork/07-mobile-remote" },
        { text: "API 服務和連接器怎麼選", link: "/doubaowork/08-api-vs-connector" },
        { text: "定時任務與資訊簡報", link: "/doubaowork/09-automation" },
      ],
    },
    {
      text: "案例篇 · 日常與辦公",
      items: [
        { text: "一份材料做三件套", link: "/doubaowork/case-office" },
        { text: "最適配的還是飛書", link: "/doubaowork/case-feishu" },
        { text: "整理桌面：先看方案", link: "/doubaowork/case-desktop" },
        { text: "生活瑣事先做一版", link: "/doubaowork/case-life" },
      ],
    },
    {
      text: "案例篇 · 個人提效",
      items: [
        { text: "收件匣排優先順位", link: "/doubaowork/case-inbox" },
        { text: "一場會議的全程落地", link: "/doubaowork/case-meeting" },
        { text: "Word 從校對到交付", link: "/doubaowork/case-word" },
        { text: "Excel 從清洗到儀表板", link: "/doubaowork/case-excel" },
        { text: "從臨時調研到正式報告", link: "/doubaowork/case-research" },
        { text: "自動日報與待辦提醒", link: "/doubaowork/case-daily-report" },
        { text: "快速讀一本書", link: "/doubaowork/case-reading" },
        { text: "用個人網站包裝自己", link: "/doubaowork/case-personal-site" },
      ],
    },
    {
      text: "案例篇 · 自媒體",
      items: [
        { text: "選題：熱點、同行與排期", link: "/doubaowork/case-topic-selection" },
        { text: "從熱點到公眾號成稿", link: "/doubaowork/case-wechat-article" },
        { text: "一份內容改多平台版本", link: "/doubaowork/case-multi-platform" },
        { text: "從長文到口播與分鏡", link: "/doubaowork/case-script-storyboard" },
        { text: "音視訊轉寫與精華切片", link: "/doubaowork/case-av-transcription" },
        { text: "從留言區找下一篇", link: "/doubaowork/case-comments" },
        { text: "個人 IP 的 GEO 體檢", link: "/doubaowork/case-geo-checkup" },
        { text: "公眾號文章轉短影片", link: "/doubaowork/case-viral-to-video" },
      ],
    },
    {
      text: "案例篇 · 知識管理",
      items: [
        { text: "從隨手收藏到真正能搜", link: "/doubaowork/case-bookmarks" },
        { text: "重複檔案先看差異", link: "/doubaowork/case-duplicate-files" },
        { text: "專案資產一起沉澱", link: "/doubaowork/case-project-archive" },
        { text: "飛書知識庫變 Skill", link: "/doubaowork/case-wiki-to-skill" },
        { text: "一句話查企業制度", link: "/doubaowork/case-policy-search" },
        { text: "541 個案例重新歸類", link: "/doubaowork/case-prompt-library" },
        { text: "過期知識找 Owner", link: "/doubaowork/case-knowledge-expiry" },
      ],
    },
    {
      text: "案例篇 · 電商與金融",
      items: [
        { text: "一張原圖到整套主圖", link: "/doubaowork/case-product-images" },
        { text: "盤後覆盤與觀察池日報", link: "/doubaowork/case-market-review" },
        { text: "財報：先看成長再查品質", link: "/doubaowork/case-earnings-quality" },
        { text: "第一次研究一家公司", link: "/doubaowork/case-first-company" },
        { text: "從篩選到估值", link: "/doubaowork/case-screening-valuation" },
        { text: "股東、管理層與治理", link: "/doubaowork/case-governance" },
        { text: "多空分歧與研報稽核", link: "/doubaowork/case-bull-bear-audit" },
        { text: "K 線圖到投研審查會", link: "/doubaowork/case-kline-review" },
      ],
    },
    {
      text: "進階篇",
      items: [
        { text: "工作夥伴還是工作小隊", link: "/doubaowork/adv-buddy-or-squad" },
        { text: "多 Agent（工作小隊）實操", link: "/doubaowork/adv-multi-agent" },
      ],
    },
    {
      text: "速查區",
      items: [
        { text: "常用指令範本", link: "/doubaowork/ref-templates" },
        { text: "情境速查表", link: "/doubaowork/ref-scenarios" },
      ],
    },
  ],
  "/qwenwork/": [
    {
      text: "快速上手",
      items: [
        { text: "板塊導覽", link: "/qwenwork/" },
        { text: "快速開始：完成第一個可驗收任務", link: "/qwenwork/quick-start" },
        { text: "執行摘要：先做完一件辦公工作", link: "/qwenwork/executive-summary" },
      ],
    },
    {
      text: "從任務到交付（第 1–5 章）",
      items: [
        { text: "交付新標準：從回答問題到完成工作", link: "/qwenwork/ch01-delivery-standard" },
        { text: "任務交付協議：先定義完成", link: "/qwenwork/ch02-task-delivery-protocol" },
        { text: "工作環境架構：三端選擇與六層診斷", link: "/qwenwork/ch03-work-environment" },
        { text: "可複用資產：Skill、連接器與專家套件", link: "/qwenwork/ch04-skills-connectors" },
        { text: "自動化邊界：可停、可接管、可恢復", link: "/qwenwork/ch05-automation-boundaries" },
      ],
    },
    {
      text: "專業辦公任務（第 6–9 章）",
      items: [
        { text: "辦公交付：文件、資料、彙報與網頁", link: "/qwenwork/ch06-office-delivery" },
        { text: "崗位路線：用統一場景卡選擇真實任務", link: "/qwenwork/ch07-role-roadmaps" },
        { text: "研究與證據鏈：從問題樹到釋出記錄", link: "/qwenwork/ch08-research-evidence-chain" },
        { text: "公開案例圖譜：按證據門釋出", link: "/qwenwork/ch09-public-case-atlas" },
      ],
    },
    {
      text: "團隊落地（第 10–13 章）",
      items: [
        { text: "場景選擇與 30/60/90 天試點", link: "/qwenwork/ch10-pilot-roadmap" },
        { text: "安全治理：動作、資料、後果與責任", link: "/qwenwork/ch11-security-governance" },
        { text: "團隊工作流運營：一次成功變可維護資產", link: "/qwenwork/ch12-workflow-operations" },
        { text: "價值度量：從使用資料到可復算決策", link: "/qwenwork/ch13-value-measurement" },
      ],
    },
    {
      text: "結語與案例",
      items: [
        { text: "產品與生態路線建議", link: "/qwenwork/conclusion" },
        { text: "品勝電子：競品調研與產品物料製作", link: "/qwenwork/case-pisen" },
        { text: "優克拉：產品研發與考勤算薪", link: "/qwenwork/case-youkela" },
      ],
    },
    {
      text: "附錄",
      items: [
        { text: "常用指令模板", link: "/qwenwork/appendix-templates" },
        { text: "場景速查與評分表", link: "/qwenwork/appendix-scenarios" },
        { text: "上線硬門執行清單", link: "/qwenwork/appendix-launch-checklist" },
        { text: "來源與延伸閱讀", link: "/qwenwork/appendix-sources" },
        { text: "主張證據臺賬", link: "/qwenwork/appendix-evidence-ledger" },
        { text: "案例來源對映", link: "/qwenwork/appendix-case-source-map" },
      ],
    },
  ],
  "/": [
    {
      text: "本站",
      items: [
        { text: "首頁", link: "/" },
        { text: "關於與開源致謝", link: "/about" },
      ],
    },
  ],
};

export const zhTw = {
  lang: "zh-TW",
  title: "AI Work 教學網",
  titleTemplate: ":title · AI Work 教學網",
  description:
    "騰訊、位元組、阿里三大廠辦公 AI 工作台的中文實戰教學總站：WorkBuddy、TraeWork、QoderWork、豆包工作、千問辦公等為上班族打造的 work 類工具，從下載安裝到第一個任務，涵蓋技能、連接器、自動化與 IM 遠端指揮。",
  themeConfig: {
    siteTitle: "AI Work 教學網",
    nav: [
      { text: "首頁", link: "/" },
      { text: "WorkBuddy", link: "/workbuddy/" },
      { text: "TraeWork", link: "/traework/" },
      { text: "QoderWork", link: "/qoderwork/" },
      { text: "豆包工作", link: "/doubaowork/" },
      { text: "千問辦公", link: "/qwenwork/" },
      { text: "關於", link: "/about" },
    ],
    sidebar,
    outline: { level: [2, 3], label: "本頁目錄" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    returnToTopLabel: "回到頂部",
    sidebarMenuLabel: "目錄",
    darkModeSwitchLabel: "主題",
    lightModeSwitchTitle: "切換到淺色模式",
    darkModeSwitchTitle: "切換到深色模式",
  },
};
