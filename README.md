# ai-tools-guide-site · AI Work 教程网

线上地址：**https://ai-work-guide.cdqyfdbymn.me**

专注「work」类 AI 工作助手（给白领处理文字与日常工作的工具）的中文教程站，当前覆盖三大厂办公 AI 工作台：**WorkBuddy**（腾讯）、**TraeWork**（字节）、**QoderWork**（阿里），后续收录豆包工作等新工具。

基于 VitePress 构建，三板块各自独立侧边栏，WorkBuddy / TraeWork / QoderWork 均按「上手 → 扩展 → 案例 → 进阶 → 速查」五组组织：

| 板块 | 路径 | 内容来源 |
| --- | --- | --- |
| WorkBuddy | `/workbuddy/` | 改编自 [WorkBuddyGuide 蓝皮书](https://github.com/AlephAITech/WorkBuddyGuide)（MIT），精选 21 篇 |
| TraeWork | `/traework/` | 本站原创，依据 [docs.trae.cn](https://docs.trae.cn/) 官方文档核对撰写，共 18 篇 |
| QoderWork | `/qoderwork/` | 本站原创，依据 [docs.qoder.com](https://docs.qoder.com/zh/qoderwork/introduction) 官方文档核对撰写，共 19 篇 |

> 历史：站点早期曾覆盖程序员向的 Trae IDE 与 Qoder 编程平台教程，2026-08 起定位收敛为办公人群，旧板块已下线（`/trae/*`、`/qoder/*` 已 301 至对应 Work 版板块）。

## 开发

```bash
npm install
npm run dev     # 本地开发 http://localhost:5173
npm run build   # 构建到 docs/.vitepress/dist
npm run preview # 预览构建产物
```

## 部署

Vercel（或任意静态托管）：Framework 选 VitePress，Build Command `npm run build`，Output Directory `docs/.vitepress/dist`。`vercel.json` 内含旧路径 301 重定向。

部署域名可通过环境变量 `VITEPRESS_SITE_URL` 注入，用于 sitemap 地址生成。站点已接入 Microsoft Clarity 统计（配置于 `docs/.vitepress/config.ts` 的 `head`）。

## License

- 本站原创内容（TraeWork / QoderWork 板块、导览页、站点代码）：MIT
- WorkBuddy 板块改编内容：遵循来源项目协议（MIT），详见站点"关于"页
- 商标归各自公司所有
