import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { locales, langPrefixes } from "./i18n";

const siteUrl = process.env.VITEPRESS_SITE_URL || "https://www.aiworkagent.org";

// 把页面路径（含语言前缀）归一化为不含语言前缀的 key，用于生成 hreflang
function stripLang(page: string): string {
  return page.replace(/^(en|zh-tw|de|fr)\//, (m) => "");
}

export default withMermaid(
  defineConfig({
    locales,
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
      hostname: siteUrl,
    },
    transformHead({ page }) {
      // cleanUrls 下目录页带尾斜杠、普通页无扩展名，与 sitemap 中的 loc 保持一致
      const key = stripLang(page.replace(/\.md$/, "").replace(/(^|\/)index$/, "$1"));
      const canonical = `${siteUrl}/${key}`;
      const head: [string, Record<string, string>][] = [
        ["link", { rel: "canonical", href: canonical }],
        ["meta", { property: "og:url", content: canonical }],
      ];
      // hreflang 互链（含 x-default），只对存在对应语言版本的页面输出
      for (const [lang, prefix] of Object.entries(langPrefixes)) {
        head.push(["link", { rel: "alternate", hreflang: lang, href: `${siteUrl}/${prefix}${key}` }]);
      }
      head.push(["link", { rel: "alternate", hreflang: "x-default", href: `${siteUrl}/${key}` }]);
      return head;
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
            "AI办公,WorkBuddy教程,TraeWork教程,QoderWork教程,豆包工作教程,Trae Work,Qoder Work,豆包工作,AI工作台,AI工作助手,AI Agent,办公智能体,白领AI办公",
        },
      ],
    ],
    markdown: {
      image: { lazyLoading: true },
      theme: { light: "github-light", dark: "github-dark" },
    },
    themeConfig: {
      socialLinks: [{ icon: "github", link: "https://github.com/" }],
      search: { provider: "local" },
    },
  }),
);
