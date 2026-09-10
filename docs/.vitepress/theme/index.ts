// 自定义主题：扩展 VitePress 默认主题。
// 存在本目录后 VitePress 会改用这里的主题入口，故需显式继承默认主题；
// 同时补注册 mermaid 组件（vitepress-plugin-mermaid 在自定义主题下的标准接法）。
// 首页门户 HomePortal.vue 由各语言 index.md 按需引入，无需在此全局注册。
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import Mermaid from "vitepress-plugin-mermaid/Mermaid.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Mermaid", Mermaid);
  },
} satisfies Theme;
