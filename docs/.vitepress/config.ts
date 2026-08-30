import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const siteUrl = process.env.VITEPRESS_SITE_URL || "https://ai-work-guide.cdqyfdbymn.me";

export default withMermaid(
  defineConfig({
    lang: "zh-CN",
    title: "AI Work 教程网",
    titleTemplate: ":title · AI Work 教程网",
    description:
      "给白领的 AI 工作助手教程总站：WorkBuddy、Trae、Qoder、豆包工作等 work 类工具的中文实战教程，从下载安装到第一个任务，覆盖专家、连接器、自动化与 Quest 模式。",
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
      hostname: siteUrl,
    },
    head: [
      ["meta", { name: "theme-color", content: "#3aa675" }],
      [
        "meta",
        {
          name: "keywords",
          content:
            "AI办公,WorkBuddy教程,Trae教程,Qoder教程,豆包工作,AI工作助手,AI Agent,Quest模式,WorkBuddy安装,Trae IDE,白领AI办公",
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
        { text: "Trae", link: "/trae/" },
        { text: "Qoder", link: "/qoder/" },
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
        "/trae/": [
          {
            text: "基础入门",
            items: [
              { text: "板块导览", link: "/trae/" },
              { text: "Trae 简介与环境配置", link: "/trae/01-intro" },
              { text: "基础交互模式", link: "/trae/02-interaction" },
              { text: "实战练习：HelloWorld 项目", link: "/trae/03-hello-world" },
              { text: "第一部分总结与进阶准备", link: "/trae/04-summary" },
            ],
          },
          {
            text: "场景实战",
            items: [{ text: "现代前端开发实战", link: "/trae/05-frontend" }],
          },
        ],
        "/qoder/": [
          {
            text: "上手篇",
            items: [
              { text: "板块导览", link: "/qoder/" },
              { text: "Qoder 是什么", link: "/qoder/01-what-is" },
              { text: "安装与登录", link: "/qoder/02-install" },
              { text: "核心功能速览", link: "/qoder/03-core-features" },
              { text: "第一次 Quest 实战", link: "/qoder/04-first-quest" },
              { text: "Spec 驱动开发", link: "/qoder/05-spec-driven" },
            ],
          },
          {
            text: "扩展篇",
            items: [
              { text: "Repo Wiki：代码库自动文档", link: "/qoder/06-repo-wiki" },
              { text: "记忆与规则：.qoder 目录", link: "/qoder/07-qoder-directory" },
              { text: "全家桶：CLI、移动端与云智能体", link: "/qoder/08-ecosystem" },
            ],
          },
          {
            text: "案例篇",
            items: [
              { text: "从 0 到 1 搭建一个网站", link: "/qoder/case-website" },
              { text: "啃下其他工具卡住的 Bug", link: "/qoder/case-bug" },
              { text: "非开发者的数据、周报与原型", link: "/qoder/case-non-dev" },
              { text: "单元测试从 0 到 70", link: "/qoder/case-testing" },
              { text: "技术写作与内容增长闭环", link: "/qoder/case-tech-writing" },
            ],
          },
          {
            text: "进阶篇",
            items: [
              { text: "打造自己的 Skills 与插件", link: "/qoder/adv-skills" },
              { text: "MCP 连接器实战", link: "/qoder/adv-mcp" },
              { text: "并行任务与 Worktree", link: "/qoder/adv-worktree" },
              { text: "团队落地：规范、权限与验收", link: "/qoder/adv-team" },
            ],
          },
          {
            text: "速查区",
            items: [
              { text: "常用指令模板", link: "/qoder/ref-prompt-templates" },
              { text: "场景速查表", link: "/qoder/ref-scenarios" },
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
