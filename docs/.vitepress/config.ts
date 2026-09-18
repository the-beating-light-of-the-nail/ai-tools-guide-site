import { defineConfig, type HeadConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { locales, langPrefixes } from "./i18n";
import { zh } from "./i18n/zh";
import { en } from "./i18n/en";
import { de } from "./i18n/de";
import { fr } from "./i18n/fr";
import { zhTw } from "./i18n/zh-tw";

const siteUrl = process.env.VITEPRESS_SITE_URL || "https://www.aiworkagent.org";

// 路径前缀 → 语言元信息（key 与 i18n/index.ts 的 langPrefixes 值一致）
const LOCALES: Record<string, { lang: string; siteName: string; description: string; ogLocale: string }> = {
  "": { lang: "zh-CN", siteName: zh.title, description: zh.description, ogLocale: "zh_CN" },
  "en/": { lang: "en-US", siteName: en.title, description: en.description, ogLocale: "en_US" },
  "zh-tw/": { lang: "zh-TW", siteName: zhTw.title, description: zhTw.description, ogLocale: "zh_TW" },
  "de/": { lang: "de-DE", siteName: de.title, description: de.description, ogLocale: "de_DE" },
  "fr/": { lang: "fr-FR", siteName: fr.title, description: fr.description, ogLocale: "fr_FR" },
};

// 页面 key（去语言前缀、去 index/扩展名）在指定语言目录下是否存在源文件。
// srcDir 必须用 siteConfig 传入：config.ts 会被 VitePress 打包到临时目录，import.meta.url 不可靠
function pageExists(srcDir: string, prefix: string, key: string): boolean {
  const name = key === "" ? "index" : key;
  const base = join(srcDir, prefix);
  return existsSync(join(base, `${name}.md`)) || existsSync(join(base, name, "index.md"));
}

// 把页面路径（含语言前缀）归一化为不含语言前缀的 key
function pageKey(page: string): { prefix: string; key: string } {
  const raw = page.replace(/\.md$/, "");
  const prefix =
    Object.keys(LOCALES)
      .filter((p) => p && raw.startsWith(p))
      .sort((a, b) => b.length - a.length)[0] ?? "";
  const key = (prefix ? raw.slice(prefix.length) : raw).replace(/(^|\/)index$/, "$1");
  return { prefix, key };
}

export default withMermaid(
  defineConfig({
    locales,
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
      hostname: siteUrl,
    },
    transformHead({ page, pageData, siteConfig }) {
      // cleanUrls 下目录页带尾斜杠、普通页无扩展名，与 sitemap 中的 loc 保持一致；
      // canonical 必须带上语言前缀指向当前页面自身，而非中文版
      const { prefix, key } = pageKey(page);
      const srcDir = siteConfig.srcDir;
      const canonical = `${siteUrl}/${prefix}${key}`;
      const meta = LOCALES[prefix];
      const title = String(pageData.frontmatter.title ?? pageData.title ?? meta.siteName);
      const fullTitle = `${title} · ${meta.siteName}`;
      const description = String(pageData.frontmatter.description ?? meta.description);
      const ogImage = `${siteUrl}/og-image.png`;

      const head: HeadConfig[] = [
        ["link", { rel: "canonical", href: canonical }],
        ["meta", { property: "og:url", content: canonical }],
        ["meta", { property: "og:title", content: fullTitle }],
        ["meta", { property: "og:description", content: description }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:site_name", content: meta.siteName }],
        ["meta", { property: "og:locale", content: meta.ogLocale }],
        ["meta", { property: "og:image", content: ogImage }],
        ["meta", { property: "og:image:width", content: "1200" }],
        ["meta", { property: "og:image:height", content: "630" }],
        ["meta", { property: "og:image:alt", content: fullTitle }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        ["meta", { name: "twitter:title", content: fullTitle }],
        ["meta", { name: "twitter:description", content: description }],
        ["meta", { name: "twitter:image", content: ogImage }],
      ];
      // hreflang 互链（含 x-default）：只输出实际存在对应源文件的语言版本，
      // 避免指向 404（如 workbuddy/skins/ 仅有中文版）
      for (const [lang, p] of Object.entries(langPrefixes)) {
        if (pageExists(srcDir, p, key)) {
          head.push(["link", { rel: "alternate", hreflang: lang, href: `${siteUrl}/${p}${key}` }]);
        }
      }
      head.push(["link", { rel: "alternate", hreflang: "x-default", href: `${siteUrl}/${key}` }]);
      return head;
    },
    buildEnd({ outDir }) {
      // 404 页不走 markdown 管线、transformHead 不执行，直接在产物里补 robots noindex
      const file = join(outDir, "404.html");
      if (existsSync(file)) {
        const html = readFileSync(file, "utf-8");
        if (!html.includes('name="robots"')) {
          writeFileSync(file, html.replace("</head>", '<meta name="robots" content="noindex"></head>'));
        }
      }
    },
    head: [
      ["meta", { name: "theme-color", content: "#3aa675" }],
      ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
      ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
      // Microsoft Clarity 统计分析
      [
        "script",
        { type: "text/javascript" },
        `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a]=c[a].q||c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "yak6yh0qjj");`,
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
      search: { provider: "local" },
    },
  }),
);
