import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const siteUrl = process.env.VITEPRESS_SITE_URL || "https://ai-tools-guide-site.vercel.app";

export default withMermaid(
  defineConfig({
    lang: "zh-CN",
    title: "AI 工具实战教程网",
    titleTemplate: ":title · WorkBuddy / Trae / Qoder 教程",
    description:
      "WorkBuddy、Trae、Qoder 中文实战教程：从下载安装到第一个任务，覆盖专家、连接器、自动化、Quest 模式与 Agent 实战。",
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
            "WorkBuddy教程,Trae教程,Qoder教程,AI编程,AI办公,AI Agent,Quest模式,WorkBuddy安装,Trae IDE",
        },
      ],
    ],
    markdown: {
      image: { lazyLoading: true },
      theme: { light: "github-light", dark: "github-dark" },
    },
    themeConfig: {
      siteTitle: "AI 工具实战教程网",
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
            text: "开始",
            items: [
              { text: "板块导览", link: "/workbuddy/" },
              { text: "初识 WorkBuddy", link: "/workbuddy/01-intro/" },
              { text: "下载、安装、登录与更新", link: "/workbuddy/02-install/" },
              { text: "主界面、任务与工作区", link: "/workbuddy/03-interface/" },
              { text: "快速完成第一个任务", link: "/workbuddy/04-first-task/" },
            ],
          },
          {
            text: "进阶",
            items: [
              { text: "专家和专家团", link: "/workbuddy/06-experts/" },
              { text: "使用连接器", link: "/workbuddy/07-connectors/" },
              { text: "自动化任务", link: "/workbuddy/10-automation/" },
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
            text: "Qoder 教程",
            items: [
              { text: "板块导览", link: "/qoder/" },
              { text: "Qoder 是什么", link: "/qoder/01-what-is" },
              { text: "安装与登录", link: "/qoder/02-install" },
              { text: "核心功能速览", link: "/qoder/03-core-features" },
              { text: "第一次 Quest 实战", link: "/qoder/04-first-quest" },
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
