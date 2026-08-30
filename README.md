# ai-tools-guide-site · AI 工具实战教程网

中文教程站，覆盖三个 AI 工具：**WorkBuddy**（腾讯职场 AI 工作台）、**Trae**（字节 AI IDE）、**Qoder**（智能代理编程平台）。

基于 VitePress 构建，三板块各自独立侧边栏：

| 板块 | 路径 | 内容来源 |
| --- | --- | --- |
| WorkBuddy | `/workbuddy/` | 改编自 [WorkBuddyGuide 蓝皮书](https://github.com/AlephAITech/WorkBuddyGuide)（MIT），精选 7 章 |
| Trae | `/trae/` | 改编自 [AI-fundamentals《Trae 编程实战》](https://github.com/ForceInjection/AI-fundamentals)（Apache-2.0），5 章 |
| Qoder | `/qoder/` | 本站原创，对齐 [docs.qoder.com](https://docs.qoder.com/zh/quick-start) |

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
- WorkBuddy / Trae 板块改编内容：遵循来源项目协议（MIT / Apache-2.0），详见站点"关于"页
- 商标归各自公司所有
