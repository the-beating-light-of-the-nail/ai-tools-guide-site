// 各语言文件（en/de/fr/zh-tw.ts）只负责翻译文案，链接保持与 zh 相同的根路径；
// 本文件统一加 /<lang>/ 前缀并组装 VitePress locales 配置。
import type { LocaleConfig } from "vitepress";
import { zh } from "./zh";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { zhTw } from "./zh-tw";

type NavLink = { text: string; link: string };
type SidebarGroup = { text: string; items: NavLink[] };
type LocaleSource = NonNullable<LocaleConfig[string]>;

export const LANGS = [
  { code: "", lang: "zh-CN" },
  { code: "en", lang: "en" },
  { code: "zh-tw", lang: "zh-TW" },
  { code: "de", lang: "de" },
  { code: "fr", lang: "fr" },
] as const;

function prefixLink(link: string, code: string): string {
  if (!code) return link;
  return `/${code}${link === "/" ? "/" : link}`;
}

function applyPrefix(locale: LocaleSource, code: string): LocaleSource {
  if (!code) return locale;
  const tc = locale.themeConfig ?? {};
  const sidebar = tc.sidebar as Record<string, SidebarGroup[]> | undefined;
  return {
    ...locale,
    themeConfig: {
      ...tc,
      nav: (tc.nav as NavLink[] | undefined)?.map((n) => ({ ...n, link: prefixLink(n.link, code) })),
      sidebar: sidebar
        ? Object.fromEntries(
            Object.entries(sidebar).map(([key, groups]) => [
              `/${code}${key}`,
              groups.map((g) => ({
                ...g,
                items: g.items.map((i) => ({ ...i, link: prefixLink(i.link, code) })),
              })),
            ]),
          )
        : undefined,
    },
  };
}

export const locales: LocaleConfig = {
  root: zh,
  en: applyPrefix(en as LocaleSource, "en"),
  "zh-tw": applyPrefix(zhTw as LocaleSource, "zh-tw"),
  de: applyPrefix(de as LocaleSource, "de"),
  fr: applyPrefix(fr as LocaleSource, "fr"),
};

// 供 sitemap/JSON-LD 使用的语言→路径前缀映射
export const langPrefixes: Record<string, string> = {
  "zh-CN": "",
  en: "en/",
  "zh-TW": "zh-tw/",
  de: "de/",
  fr: "fr/",
};
