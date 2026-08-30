# 连接器与 MCP

连接器是 QoderWork 与外部系统之间的桥梁——开启后，AI 可以像你一样操作浏览器、读写系统日历与邮件、对接 Microsoft 365 和钉钉。MCP 则是接入更多外部工具的开放协议。

> 官方文档：[connectors](https://docs.qoder.com/zh/qoderwork/connectors) ｜ [钉钉 MCP 实战](https://docs.qoder.com/zh/qoderwork/mcp-walkthrough)

## 连接器总览

统一入口：左侧导航 → 扩展 → 连接器（「市场」/「已安装」两个选项卡）。**默认全部关闭**，只有你明确完成授权与配置后，QoderWork 才获得相应访问权限。

| 类别 | 连接器 |
| --- | --- |
| 内置 | **浏览器**（网页操作、数据提取、表单填写）、**macOS 应用**（提醒事项、日历、备忘录、邮件、通讯录）、**Microsoft 365**（Outlook/日历/联系人/To Do/OneNote/OneDrive） |
| 集成市场 | 钉钉、飞书、Notion、Linear、Todoist、Canva、Supabase、Vercel、Neon、Slack、Figma、Google 日历、Google 地图、LINE、企查查等 |

## 接入步骤（以三个高频为例）

**浏览器连接器**（QoderWork 的招牌能力）：连接器页找「浏览器」点 + →「在 Chrome 应用商店中安装」扩展 → 状态显示「扩展已连接」。它复用你真实的浏览器登录态——后台导数据、表单填报都不用重新登录。

**Microsoft 365**：点「连接微软账户」→ 浏览器弹窗登录 → 确认授权。

**钉钉**：「市场」选项卡 → 钉钉卡片 →「登录钉钉账号」完成授权。

⚠️ 关键限制：**开关连接器后需要新建一个对话任务才能生效**，不要在原来的对话里追问为什么没反应。

## MCP：AI 世界的 USB 接口

MCP（Model Context Protocol）是标准化 AI 应用与外部工具连接方式的开放协议。添加入口：连接器页右上角「+ 添加」，两种方式：

1. **粘贴 JSON 配置**导入（推荐）；
2. 手动填写。

两种服务器类型：**Streamable HTTP / SSE**（远程托管，URL 访问，推荐前者）；**STDIO**（本地命令行启动，需 Node.js/Python）。JSON 结构示例：

```json
{
  "mcpServers": {
    "钉钉文档": {
      "type": "streamable-http",
      "url": "https://mcp-gw.dingtalk.com/mserver/...key=..."
    }
  }
}
```

## 实战：接入钉钉 MCP（四步）

钉钉有自己的 MCP 市场，适合已用钉钉协作的团队：

1. 打开 [mcp.dingtalk.com](https://mcp.dingtalk.com) 并登录，按关键词搜索（带「平台精选」标签的是官方推荐）；
2. 在 MCP 详情页右侧「使用 MCP」区域，复制 JSON Config；
3. QoderWork 连接器页「+ 添加」→ 粘贴 JSON →「通过 JSON 导入」（钉钉 MCP 一般无需额外 Headers，留空即可）；
4. 验证：**服务名称左侧显示绿色圆点即连接成功**，然后在对话里直接试：

```text
帮我找一下名为《2026 Q3 营销计划》的文档
帮我查一下北京的天气（高德地图 MCP）
帮我创建一个明天上午 10 点的日程（钉钉日历 MCP）
```

常用钉钉 MCP：钉钉文档、钉钉日历、钉钉通讯录、钉钉待办、钉钉群聊、高德地图、钉钉 AI 表格。

## 注意事项与故障排查

- 浏览器连接器仅支持 **Chromium 内核**（Safari / Firefox 暂不支持）；任务执行期间避免手动操作被托管的标签页；
- macOS 应用首次开启会弹系统权限，误拒后到 系统设置 → 隐私与安全性 手动放行；
- 验证码、短信验证、扫码登录需要人工接管；
- MCP 连不上按顺序查：JSON/URL 完整性 → 网络 → 额外授权要求 → 删除重加。

**最佳实践**：Prompt 里直接给 URL；连接器与本地文件读写结合；复杂流程先手动跑通，再固化为 Skill 或定时任务。

> MCP 的通用原理与安全边界（它和 API 的关系、"怎么连"与"连了安不安全"），见 WorkBuddy 板块的[看懂 AI 工作系统](/workbuddy/11-ai-work-system/)。

---

下一步：[IM 频道：聊天窗里远程指挥 →](/qoderwork/07-im-channels)
