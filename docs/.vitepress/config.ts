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
type NavItem = { text: string; link?: string; items?: NavItem[] };
const LOCALES: Record<
  string,
  { lang: string; siteName: string; description: string; ogLocale: string; home: string; nav: NavItem[] }
> = {
  "": { lang: "zh-CN", siteName: zh.title, description: zh.description, ogLocale: "zh_CN", home: "首页", nav: zh.themeConfig.nav as NavItem[] },
  "en/": { lang: "en-US", siteName: en.title, description: en.description, ogLocale: "en_US", home: "Home", nav: en.themeConfig.nav as NavItem[] },
  "zh-tw/": { lang: "zh-TW", siteName: zhTw.title, description: zhTw.description, ogLocale: "zh_TW", home: "首頁", nav: zhTw.themeConfig.nav as NavItem[] },
  "de/": { lang: "de-DE", siteName: de.title, description: de.description, ogLocale: "de_DE", home: "Startseite", nav: de.themeConfig.nav as NavItem[] },
  "fr/": { lang: "fr-FR", siteName: fr.title, description: fr.description, ogLocale: "fr_FR", home: "Accueil", nav: fr.themeConfig.nav as NavItem[] },
};

const SECTIONS = ["workbuddy", "traework", "qoderwork", "doubaowork", "qwenwork"];

// 从 nav 提取板块显示名（WorkBuddy 等是下拉组，取父级 text）
function navSectionName(nav: NavItem[] | undefined, section: string): string {
  for (const item of nav ?? []) {
    if (item.link === `/${section}/`) return item.text;
    if (item.items?.some((sub) => sub.link === `/${section}/`)) return item.text;
  }
  return section;
}

// 去掉答案里的 markdown 标记，得到与页面可见文本一致的纯文本
function stripMarkdown(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*`]+/g, "")
    .replace(/^[-*]\s+/, "")
    .trim();
}

// 解析源 md 中的 FAQ 章节（## xx常见问题/FAQ/Q&A 下的 **问题** + 答案段）
function extractFaq(content: string): { name: string; text: string }[] {
  const out: { name: string; text: string }[] = [];
  let inFaq = false;
  let inFence = false;
  let q: string | null = null;
  let a: string[] = [];
  const flush = () => {
    if (q && a.length) out.push({ name: q, text: a.join(" ") });
    q = null;
    a = [];
  };
  for (const line of content.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (/^##\s/.test(line)) {
      flush();
      inFaq = /常见问题|FAQ|Q&A/i.test(line);
      continue;
    }
    if (!inFaq) continue;
    // 两种 FAQ 写法：**加粗问题**；或裸文本问题行（短句且以问号结尾，无 markdown 标记）
    const m = line.match(/^\*\*(.+?)\*\*\s*$/);
    if (m) {
      flush();
      q = stripMarkdown(m[1]);
      continue;
    }
    if (/^[^#>|[*`\-].{0,60}[?？]\s*$/.test(line) && !line.includes("](")) {
      flush();
      q = stripMarkdown(line);
      continue;
    }
    if (q && line.trim()) a.push(stripMarkdown(line));
  }
  flush();
  return out;
}

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

      // JSON-LD：WebSite + Organization 全站，内容页加 BreadcrumbList，FAQ 章节页加 FAQPage
      const graph: Record<string, unknown>[] = [
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          url: `${siteUrl}/`,
          name: meta.siteName,
          description: meta.description,
          inLanguage: meta.lang,
        },
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          url: `${siteUrl}/`,
          name: meta.siteName,
          logo: `${siteUrl}/apple-touch-icon.png`,
        },
      ];
      const section = key.split("/")[0];
      if (SECTIONS.includes(section)) {
        graph.push({
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: meta.home, item: `${siteUrl}/${prefix}` },
            {
              "@type": "ListItem",
              position: 2,
              name: navSectionName(meta.nav, section),
              item: `${siteUrl}/${prefix}${section}/`,
            },
            { "@type": "ListItem", position: 3, name: title },
          ],
        });
      }
      const srcFile = join(srcDir, page);
      if (existsSync(srcFile)) {
        const faqs = extractFaq(readFileSync(srcFile, "utf-8"));
        if (faqs.length) {
          graph.push({
            "@type": "FAQPage",
            mainEntity: faqs.slice(0, 20).map((f) => ({
              "@type": "Question",
              name: f.name,
              acceptedAnswer: { "@type": "Answer", text: f.text },
            })),
          });
        }
      }
      head.push(["script", { type: "application/ld+json" }, JSON.stringify({ "@context": "https://schema.org", "@graph": graph })]);
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
