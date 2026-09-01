// 中文（默认，根路径）导航与侧栏数据 —— 其他语言文件保持同构结构
import type { LocaleConfig } from "vitepress";

const sidebar: LocaleConfig["themeConfig"]["sidebar"] = {
  "/workbuddy/": [
    {
      text: "上手篇",
      items: [
        { text: "板块导览", link: "/workbuddy/" },
        { text: "初识 WorkBuddy", link: "/workbuddy/01-intro/" },
        { text: "下载、安装、登录与更新", link: "/workbuddy/02-install/" },
        { text: "主界面、任务与工作区", link: "/workbuddy/03-interface/" },
        { text: "快速完成第一个任务", link: "/workbuddy/04-first-task/" },
        { text: "加载一个真正用得上的 Skill", link: "/workbuddy/05-skills/" },
      ],
    },
    {
      text: "扩展篇",
      items: [
        { text: "专家和专家团", link: "/workbuddy/06-experts/" },
        { text: "使用连接器", link: "/workbuddy/07-connectors/" },
        { text: "接入小程序与 IM 助理", link: "/workbuddy/08-im-assistant/" },
        { text: "接入外部 API", link: "/workbuddy/09-external-api/" },
        { text: "自动化任务", link: "/workbuddy/10-automation/" },
        { text: "课外阅读：看懂 AI 工作系统", link: "/workbuddy/11-ai-work-system/" },
      ],
    },
    {
      text: "案例篇",
      items: [
        { text: "办公三件套：Word、Excel、PPT", link: "/workbuddy/case-office/" },
        { text: "知识管理：收藏要能用起来", link: "/workbuddy/case-knowledge/" },
        { text: "把投资分析变成日常", link: "/workbuddy/case-investment/" },
        { text: "一句话召唤 AI 视频团队", link: "/workbuddy/case-video-team/" },
        { text: "自媒体增长闭环", link: "/workbuddy/case-self-media/" },
      ],
    },
    {
      text: "进阶篇",
      items: [
        { text: "打造 Skill：知识蒸馏", link: "/workbuddy/adv-build-skill/" },
        { text: "多 Agent 系统设计", link: "/workbuddy/adv-multi-agent/" },
        { text: "自动化工作流的可靠性", link: "/workbuddy/adv-automation-reliability/" },
      ],
    },
    {
      text: "速查区",
      items: [
        { text: "常用指令模板", link: "/workbuddy/ref-prompt-templates/" },
        { text: "场景速查表", link: "/workbuddy/ref-scenarios/" },
      ],
    },
  ],
  "/traework/": [
    {
      text: "上手篇",
      items: [
        { text: "板块导览", link: "/traework/" },
        { text: "TraeWork 是什么", link: "/traework/01-what-is" },
        { text: "安装、登录与三端协同", link: "/traework/02-install" },
        { text: "第一个任务", link: "/traework/03-first-task" },
        { text: "Skills 技能", link: "/traework/04-skills" },
      ],
    },
    {
      text: "扩展篇",
      items: [
        { text: "办公助理：飞书与微信", link: "/traework/05-bot-assistant" },
        { text: "插件与外部应用授权", link: "/traework/06-plugins-integrations" },
        { text: "自动化定时任务", link: "/traework/07-automated-tasks" },
        { text: "电脑与浏览器控制", link: "/traework/08-computer-browser" },
      ],
    },
    {
      text: "案例篇",
      items: [
        { text: "做一套能上台的 PPT", link: "/traework/case-ppt" },
        { text: "动态汇报：看板、周报与述职", link: "/traework/case-report" },
        { text: "公众号→飞书知识库流水线", link: "/traework/case-feishu-pipeline" },
        { text: "聊天窗里的四种日常", link: "/traework/case-im-daily" },
      ],
    },
    {
      text: "进阶篇",
      items: [
        { text: "Plan、Spec、Goal 与命令", link: "/traework/adv-workflows" },
        { text: "MCP 与云端运行环境", link: "/traework/adv-mcp-env" },
        { text: "模型与积分避坑", link: "/traework/adv-models-credits" },
      ],
    },
    {
      text: "速查区",
      items: [
        { text: "常用指令模板", link: "/traework/ref-templates" },
        { text: "场景速查表", link: "/traework/ref-scenarios" },
      ],
    },
  ],
  "/qoderwork/": [
    {
      text: "上手篇",
      items: [
        { text: "板块导览", link: "/qoderwork/" },
        { text: "QoderWork 是什么", link: "/qoderwork/01-what-is" },
        { text: "安装与登录", link: "/qoderwork/02-install" },
        { text: "第一个任务", link: "/qoderwork/03-first-task" },
        { text: "工作文件夹", link: "/qoderwork/04-files" },
      ],
    },
    {
      text: "扩展篇",
      items: [
        { text: "技能与专家套件", link: "/qoderwork/05-skills" },
        { text: "连接器与 MCP", link: "/qoderwork/06-connectors" },
        { text: "IM 频道", link: "/qoderwork/07-im-channels" },
        { text: "定时任务", link: "/qoderwork/08-automation" },
      ],
    },
    {
      text: "案例篇",
      items: [
        { text: "文件整理与照片管理", link: "/qoderwork/case-file-organize" },
        { text: "数据分析与调研报告", link: "/qoderwork/case-data-report" },
        { text: "浏览器自动化实战", link: "/qoderwork/case-browser" },
        { text: "批量文档处理与多媒体", link: "/qoderwork/case-office-docs" },
      ],
    },
    {
      text: "进阶篇",
      items: [
        { text: "电脑操控与语音输入", link: "/qoderwork/adv-computer-use" },
        { text: "对话式创建技能", link: "/qoderwork/adv-skill-create" },
        { text: "三大工作台", link: "/qoderwork/adv-workbenches" },
        { text: "意识、成本与安全环境", link: "/qoderwork/adv-memory-cost" },
      ],
    },
    {
      text: "速查区",
      items: [
        { text: "常用指令模板", link: "/qoderwork/ref-templates" },
        { text: "场景速查表", link: "/qoderwork/ref-scenarios" },
      ],
    },
  ],
  "/doubaowork/": [
    {
      text: "上手篇",
      items: [
        { text: "板块导览", link: "/doubaowork/" },
        { text: "豆包工作是什么", link: "/doubaowork/01-what-is" },
        { text: "下载、安装与登录", link: "/doubaowork/02-install" },
        { text: "主界面、任务和项目", link: "/doubaowork/03-interface" },
        { text: "第一个任务：五分钟跑通", link: "/doubaowork/04-first-task" },
        { text: "连接器：先跑个能验收的", link: "/doubaowork/05-connectors" },
        { text: "Skill 怎么选，怎么用", link: "/doubaowork/06-skills" },
      ],
    },
    {
      text: "扩展篇",
      items: [
        { text: "手机遥控电脑", link: "/doubaowork/07-mobile-remote" },
        { text: "API 服务和连接器怎么选", link: "/doubaowork/08-api-vs-connector" },
        { text: "定时任务与资讯简报", link: "/doubaowork/09-automation" },
      ],
    },
    {
      text: "案例篇 · 日常与办公",
      items: [
        { text: "一份材料做三件套", link: "/doubaowork/case-office" },
        { text: "最适配的还是飞书", link: "/doubaowork/case-feishu" },
        { text: "整理桌面：先看方案", link: "/doubaowork/case-desktop" },
        { text: "生活琐事先做一版", link: "/doubaowork/case-life" },
      ],
    },
    {
      text: "案例篇 · 个人提效",
      items: [
        { text: "收件箱排优先级", link: "/doubaowork/case-inbox" },
        { text: "一场会议的全程落地", link: "/doubaowork/case-meeting" },
        { text: "Word 从校对到交付", link: "/doubaowork/case-word" },
        { text: "Excel 从清洗到仪表盘", link: "/doubaowork/case-excel" },
        { text: "从临时调研到正式报告", link: "/doubaowork/case-research" },
        { text: "自动日报与待办提醒", link: "/doubaowork/case-daily-report" },
        { text: "快速读一本书", link: "/doubaowork/case-reading" },
        { text: "用个人网站包装自己", link: "/doubaowork/case-personal-site" },
      ],
    },
    {
      text: "案例篇 · 自媒体",
      items: [
        { text: "选题：热点、同行与排期", link: "/doubaowork/case-topic-selection" },
        { text: "从热点到公众号成稿", link: "/doubaowork/case-wechat-article" },
        { text: "一份内容改多平台版本", link: "/doubaowork/case-multi-platform" },
        { text: "从长文到口播与分镜", link: "/doubaowork/case-script-storyboard" },
        { text: "音视频转写与高光切片", link: "/doubaowork/case-av-transcription" },
        { text: "从评论区找下一篇", link: "/doubaowork/case-comments" },
        { text: "个人 IP 的 GEO 体检", link: "/doubaowork/case-geo-checkup" },
        { text: "公众号文章转短视频", link: "/doubaowork/case-viral-to-video" },
      ],
    },
    {
      text: "案例篇 · 知识管理",
      items: [
        { text: "从随手收藏到真正能搜", link: "/doubaowork/case-bookmarks" },
        { text: "重复文件先看差异", link: "/doubaowork/case-duplicate-files" },
        { text: "项目资产一起沉淀", link: "/doubaowork/case-project-archive" },
        { text: "飞书知识库变 Skill", link: "/doubaowork/case-wiki-to-skill" },
        { text: "一句话查企业制度", link: "/doubaowork/case-policy-search" },
        { text: "541 个案例重新归类", link: "/doubaowork/case-prompt-library" },
        { text: "过期知识找 Owner", link: "/doubaowork/case-knowledge-expiry" },
      ],
    },
    {
      text: "案例篇 · 电商与金融",
      items: [
        { text: "一张原图到整套主图", link: "/doubaowork/case-product-images" },
        { text: "盘后复盘与观察池日报", link: "/doubaowork/case-market-review" },
        { text: "财报：先看增长再查质量", link: "/doubaowork/case-earnings-quality" },
        { text: "第一次研究一家公司", link: "/doubaowork/case-first-company" },
        { text: "从筛选到估值", link: "/doubaowork/case-screening-valuation" },
        { text: "股东、管理层与治理", link: "/doubaowork/case-governance" },
        { text: "多空分歧与研报审计", link: "/doubaowork/case-bull-bear-audit" },
        { text: "K 线图到投研评审会", link: "/doubaowork/case-kline-review" },
      ],
    },
    {
      text: "进阶篇",
      items: [
        { text: "工作伙伴还是工作小队", link: "/doubaowork/adv-buddy-or-squad" },
        { text: "多 Agent（工作小队）实操", link: "/doubaowork/adv-multi-agent" },
      ],
    },
    {
      text: "速查区",
      items: [
        { text: "常用指令模板", link: "/doubaowork/ref-templates" },
        { text: "场景速查表", link: "/doubaowork/ref-scenarios" },
      ],
    },
  ],
  "/": [
    {
      text: "本站",
      items: [
        { text: "首页", link: "/" },
        { text: "关于与开源致谢", link: "/about" },
      ],
    },
  ],
};

export const zh = {
  lang: "zh-CN",
  title: "AI Work 教程网",
  titleTemplate: ":title · AI Work 教程网",
  description:
    "腾讯、字节、阿里三大厂办公 AI 工作台的中文实战教程总站：WorkBuddy、TraeWork、QoderWork、豆包工作等给白领用的 work 类工具，从下载安装到第一个任务，覆盖技能、连接器、自动化与 IM 远程指挥。",
  themeConfig: {
    siteTitle: "AI Work 教程网",
    nav: [
      { text: "首页", link: "/" },
      { text: "WorkBuddy", link: "/workbuddy/" },
      { text: "TraeWork", link: "/traework/" },
      { text: "QoderWork", link: "/qoderwork/" },
      { text: "豆包工作", link: "/doubaowork/" },
      { text: "关于", link: "/about" },
    ],
    sidebar,
    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "目录",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色",
    darkModeSwitchTitle: "切换到深色",
  },
};
