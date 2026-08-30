# ai-tools-guide-site · AI Work 教程网

线上地址：**https://ai-work-guide.cdqyfdbymn.me**

专注「work」类 AI 工作助手（给白领处理文字与日常工作的工具）的中文教程站，当前覆盖：**WorkBuddy**（腾讯职场 AI 工作台）、**Trae**（字节 AI IDE）、**Qoder**（智能代理编程平台），后续收录豆包工作等新工具。

基于 VitePress 构建，三板块各自独立侧边栏，WorkBuddy 与 Qoder 均按「上手 → 扩展 → 案例 → 进阶 → 速查」五组组织：

| 板块 | 路径 | 内容来源 |
| --- | --- | --- |
| WorkBuddy | `/workbuddy/` | 改编自 [WorkBuddyGuide 蓝皮书](https://github.com/AlephAITech/WorkBuddyGuide)（MIT），精选 21 篇（使用手册 + 案例 + 进阶 + 附录速查） |
| Trae | `/trae/` | 改编自 [AI-fundamentals《Trae 编程实战》](https://github.com/ForceInjection/AI-fundamentals)（Apache-2.0），5 章 |
| Qoder | `/qoder/` | 上手篇前 4 篇本站原创（对齐 [docs.qoder.com](https://docs.qoder.com/zh/quick-start)）；其余 15 篇改编自 [QoderGuide 蓝皮书](https://github.com/Eileenes/QoderGuide)（MIT） |

## 开发

```bash
npm install
npm run dev     # 本地开发 http://localhost:5173
npm run build   # 构建到 docs/.vitepress/dist
npm run preview # 预览构建产物
```

## 部署

Vercel（或任意静态托管）：Framework 选 VitePress，Build Command `npm run build`，Output Directory `docs/.vitepress/dist`。

部署域名可通过环境变量 `VITEPRESS_SITE_URL` 注入，用于 sitemap 地址生成。

## License

- 本站原创内容与站点代码：MIT
- WorkBuddy / Trae / Qoder 板块改编内容：遵循来源项目协议（MIT / Apache-2.0），详见站点"关于"页
- 商标归各自公司所有
