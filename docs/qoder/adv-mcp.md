# MCP 连接器实战

## 为什么需要连接器

一个摸不到你真实环境的智能体，只能陪你对付 Demo。真实任务的数据在哪？在代码托管、文档、数据库、工单、监控里。MCP（Model Context Protocol）就是把这些系统接进 Qoder 的标准通道，配合 Qoder 自带的 40+ 连接器覆盖主流 SaaS。

## 配置一个 MCP Server

在设置 > MCP 中添加。以 GitHub 为例：

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<你的token>"
      }
    }
  }
}
```

配置后在 Agent/Quest 模式直接下指令：

```text
搜索本仓库带 bug 标签的 open issue，按出现频率聚类，总结出 Top 3 问题方向
```

智能体会通过 MCP 调用 GitHub API 取数、分析、输出结论。

## 常用连接器清单（按场景）

| 场景 | 接什么 | 典型任务 |
| --- | --- | --- |
| 代码托管 | GitHub / GitLab | issue 聚类、PR 总结、发布说明 |
| 文档协作 | 语雀 / Notion / 飞书 | 从 PR 变更同步更新文档 |
| 数据库 | MySQL / PostgreSQL（只读账号） | 查数核对、生成数据字典 |
| 监控 | Prometheus / 日志系统 | 告警归因、周报指标提取 |
| 内部系统 | 自建 MCP | 工单流转、内部 API 调用 |

## 安全铁律

连接器 = 智能体获得了真实系统的钥匙。三条铁律：

1. **最小权限**：数据库一律只读账号；token 只给需要的 scope；
2. **写操作默认人工确认**：能读的先读，涉及写（建 issue、发评论、改文档）保持逐条批准，信任建立后再逐步放开；
3. **凭证隔离**：MCP 配置文件不入库，团队用 `.example` 模板 + 各自本地填值。

```text
mcp.config.json          # 加进 .gitignore
mcp.config.example.json  # 提交模板，值留空
```

## 实战：告警归因流水线

把监控 MCP + 代码仓库连接起来：

```text
读取过去 24 小时的 ERROR 级告警：
1. 按服务聚类，标出次数 Top 3
2. 对每个 Top 服务，在代码里定位对应的错误处理位置
3. 结合最近一周的 commit，判断告警是否由某次变更引入
4. 输出归因报告，标注置信度
```

这是单个工具时代要写一整套脚本的事，现在是三段话。

> MCP 的通用原理（它和 API 的关系、能解决什么不能解决什么）见 WorkBuddy 板块的[看懂 AI 工作系统](/workbuddy/11-ai-work-system/)——同一套标准，两边通用。

---

下一步：[并行任务与 Worktree →](/qoder/adv-worktree)
