# QoderWork 场景速查表

按「我想做什么」组织的词典式索引。

## 功能定位

| 我想做什么 | 用什么 | 详见 |
| --- | --- | --- |
| 免费快速体验能力 | 新任务 + 桌面清理等入门任务 | [第一个任务](/qoderwork/03-first-task) |
| 让 AI 直接读写本地文件 | 工作文件夹 | [工作文件夹](/qoderwork/04-files) |
| 给 AI 装"标准做法" | 技能 Skill | [技能与专家套件](/qoderwork/05-skills) |
| 把重复流程封装成一句话 | /create-skill | [对话式创建技能](/qoderwork/adv-skill-create) |
| 让 AI 操控网页（带登录态） | 浏览器连接器 | [连接器与 MCP](/qoderwork/06-connectors) |
| 接钉钉/飞书/微信 远程指挥 | IM 频道 | [IM 频道](/qoderwork/07-im-channels) |
| 定时自动跑任务 | 定时任务 | [定时任务](/qoderwork/08-automation) |
| 让 AI 操作桌面软件 | 电脑操控 | [电脑操控与语音输入](/qoderwork/adv-computer-use) |
| 说话下达任务 | 按住 Fn 语音输入 | [电脑操控与语音输入](/qoderwork/adv-computer-use) |
| 做海报/落地页/UI 原型 | 设计工作台 | [三大工作台](/qoderwork/adv-workbenches) |
| 做 PPT | 幻灯片工作台（先确认大纲） | [三大工作台](/qoderwork/adv-workbenches) |
| 写长文/报告 | 写作工作台（版本可回溯） | [三大工作台](/qoderwork/adv-workbenches) |
| 让 AI 记住我的偏好 | 意识模式 | [意识、成本与安全环境](/qoderwork/adv-memory-cost) |
| 接私有系统 | MCP（JSON 导入） | [连接器与 MCP](/qoderwork/06-connectors) |
| 隔离环境跑敏感任务 | 安全工作环境 | [意识、成本与安全环境](/qoderwork/adv-memory-cost) |

## 按人群

| 你是谁 | 推荐起点 | 进阶 |
| --- | --- | --- |
| 完全新手 | [第一个任务](/qoderwork/03-first-task) | [工作文件夹](/qoderwork/04-files) |
| 行政/文秘 | [文件整理案例](/qoderwork/case-file-organize) | [定时任务](/qoderwork/08-automation) |
| 财务 | 收据归档模板（[批量文档处理](/qoderwork/case-office-docs)） | 报销汇总定时化 |
| 运营/电商 | [浏览器自动化案例](/qoderwork/case-browser) | 定时日报 + IM 推送 |
| 数据分析 | [数据分析案例](/qoderwork/case-data-report) | 分档模型控成本 |
| HR | 简历筛选模板（[批量文档处理](/qoderwork/case-office-docs)） | 匹配度规则技能化 |
| 法务/财税 | 内置专家套件（企业法务/财税） | [对话式创建技能](/qoderwork/adv-skill-create) |
| 内容创作者 | [三大工作台](/qoderwork/adv-workbenches) | [技能生态](/qoderwork/05-skills) |
| 钉钉重度用户 | [钉钉 MCP](/qoderwork/06-connectors) + [IM 频道](/qoderwork/07-im-channels) | — |

## 提示词五大误区（官方文档）

| ❌ 误区 | ✅ 正解 |
| --- | --- |
| 一句话概括所有需求 | 说具体：目标 + 格式 + 约束 |
| 不检查结果就继续 | 错误会在后续步骤放大，每步抽查 |
| 同一任务混多主题 | 一事一任务，无关新开 |
| 从不使用附件 | "@文件 + 一句要求"胜过一大段描述 |
| 不告诉用途 | 说明"给谁看、用来做什么"，输出更对路 |

## 硬限制备忘

- 一个任务只能关联**一个**工作文件夹；
- 开关连接器后需**新建对话**才生效；
- 定时任务由**本地客户端**调度：电脑睡眠/关机不触发，错过不补（可手动「立即运行」）；
- CAPTCHA、短信验证码、人脸识别必须人工介入；
- 浏览器连接器仅支持 Chromium 内核；
- 历史任务存本地设备，不跨设备同步；
- 技能分享链接约 24 小时有效。

## 三家工具怎么选

| 需求 | 推荐 | 原因 |
| --- | --- | --- |
| 浏览器自动化（带登录态） | QoderWork | 连接器复用真实浏览器 |
| 钉钉生态 | QoderWork | IM 频道 + 钉钉 MCP 市场 |
| 桌面软件自动化 | QoderWork | Computer Use 双平台支持 |
| 深度飞书/腾讯文档 | TraeWork | 外部应用授权 13 个飞书模块 |
| 三端同步、移动派活 | TraeWork | 网页/桌面/移动任务实时同步 |
| 办公三件套深度处理 | WorkBuddy | 文档/表格/PPT 技能生态成熟 |
| 都想要 | 三个都装 | 账号独立、互不冲突 |
