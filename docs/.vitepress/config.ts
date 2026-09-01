import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const siteUrl = process.env.VITEPRESS_SITE_URL || "https://ai-work-guide.cdqyfdbymn.me";

export default withMermaid(
  defineConfig({
    lang: "zh-CN",
    title: "AI Work 教程网",
    titleTemplate: ":title · AI Work 教程网",
    description:
      "腾讯、字节、阿里三大厂办公 AI 工作台的中文实战教程总站：WorkBuddy、TraeWork、QoderWork 等给白领用的 work 类工具，从下载安装到第一个任务，覆盖技能、连接器、自动化与 IM 远程指挥。",
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
      hostname: siteUrl,
    },
    transformHead({ page }) {
      // cleanUrls 下目录页带尾斜杠、普通页无扩展名，与 sitemap 中的 loc 保持一致
      const canonicalPath = page
        .replace(/\.md$/, "")
        .replace(/(^|\/)index$/, "$1");
      const canonical = `${siteUrl}/${canonicalPath}`;
      return [
        ["link", { rel: "canonical", href: canonical }],
        ["meta", { property: "og:url", content: canonical }],
      ];
    },
    head: [
      ["meta", { name: "theme-color", content: "#3aa675" }],
      // Microsoft Clarity 统计分析
      [
        "script",
        { type: "text/javascript" },
        `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "yak6yh0qjj");`,
      ],
      [
        "meta",
        {
          name: "keywords",
          content:
            "AI办公,WorkBuddy教程,TraeWork教程,QoderWork教程,Trae Work,Qoder Work,豆包工作,AI工作台,AI工作助手,AI Agent,办公智能体,白领AI办公",
        },
      ],
    ],
    markdown: {
      image: { lazyLoading: true },
      theme: { light: "github-light", dark: "github-dark" },
    },
    themeConfig: {
      siteTitle: "AI Work 教程网",
      nav: [
        { text: "首页", link: "/" },
        { text: "WorkBuddy", link: "/workbuddy/" },
        { text: "TraeWork", link: "/traework/" },
        { text: "QoderWork", link: "/qoderwork/" },
        { text: "关于", link: "/about" },
      ],
      sidebar: {
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
        "/": [
          {
            text: "本站",
            items: [
              { text: "首页", link: "/" },
              { text: "关于与开源致谢", link: "/about" },
            ],
          },
        ],
      },
      socialLinks: [{ icon: "github", link: "https://github.com/" }],
      search: { provider: "local" },
      outline: { level: [2, 3], label: "本页目录" },
      docFooter: { prev: "上一篇", next: "下一篇" },
      returnToTopLabel: "回到顶部",
      sidebarMenuLabel: "目录",
      darkModeSwitchLabel: "主题",
      lightModeSwitchTitle: "切换到浅色",
      darkModeSwitchTitle: "切换到深色",
    },
  }),
);
