# 场景速查表

按「你遇到的情况」组织的一页式索引：找到你的场景，直接跳到对应章节与模板。

## 快速定位：我的情况是哪一类

| 你的情况 | 推荐入口 | 相关章节 |
| --- | --- | --- |
| 第一次用，不知道从哪开始 | 顺序读本板块上手篇 | [Qoder 是什么](/qoder/01-what-is) → [第一次 Quest 实战](/qoder/04-first-quest) |
| 有一个新功能要开发 | Spec 模板 → Quest | [Spec 驱动开发](/qoder/05-spec-driven) |
| 接手一个看不懂的老项目 | Repo Wiki 先行 | [Repo Wiki](/qoder/06-repo-wiki)、[从 0 到 1 搭建网站](/qoder/case-website) |
| 有个啃不动的 Bug | 诊断式 Quest | [啃下其他工具卡住的 Bug](/qoder/case-bug) |
| 想批量补测试 | 质量标准 → 切片 | [单元测试从 0 到 70](/qoder/case-testing) |
| 不是程序员，要数据/周报/原型 | 通用模式 | [非开发者的数据、周报与原型](/qoder/case-non-dev) |
| 要写文档/周报/博客 | 素材流水线 | [技术写作与内容增长闭环](/qoder/case-tech-writing) |
| 要接内部系统/外部 API | MCP 三铁律 | [MCP 连接器实战](/qoder/adv-mcp) |
| 想多任务并行 | Worktree 隔离 | [并行任务与 Worktree](/qoder/adv-worktree) |
| 想沉淀团队规范 | rules + Wiki + Case | [团队落地](/qoder/adv-team)、[记忆与规则](/qoder/07-qoder-directory) |
| 想把重复做法固化 | 第三遍提示词 → Skill | [打造自己的 Skills 与插件](/qoder/adv-skills) |

## 常用命令速查

```bash
# 初始化仓库知识（首次打开项目）
qoder wiki generate          # 生成 Repo Wiki

# Quest（任务模式）
qoder quest --spec ./specs/task.yaml      # Spec 驱动
qoder quest --dry-run --prompt "..."      # 只读分析
qoder quest --auto-approve ...            # 无人值守（限沙箱）

# Skill 与规则位置
.qoder/rules/*.md             # 项目规则（常驻上下文）
.qoder/skills/<name>/SKILL.md # 技能定义
.qoder/settings/mcp.json      # MCP 连接器注册

# Git worktree（并行任务隔离）
git worktree add ../repo-task-a -b task-a
```

## 提示词片段速查

**只读侦查（改代码前先看清）**

```text
只读分析本仓库的 X，产出报告到 docs/x-analysis.md：
现状盘点 / 风险清单 / 建议行动顺序。全程不修改任何文件。
```

**计划先行（防止方向跑偏）**

```text
先给出你的实施计划（改哪些文件、顺序、验证方式），我确认后再动手。
```

**切片委派（大规模任务）**

```text
只处理 {模块/页面} 这一片，严格遵循 rules/X.md。
其他模块即使发现问题也只记录不修改。
```

**验收自查**

```text
完成后逐条核对 Spec 的验收标准，自报每条的通过情况与证据（命令输出）。
```

**禁止顺手修（保持 diff 干净）**

```text
过程中发现的无关问题一律列入「发现但未修改」报告，禁止顺手修复。
```

## 风险场景对照

| 高风险动作 | 护栏做法 |
| --- | --- |
| `--auto-approve` 直跑 | 只在容器/worktree，最小权限 token |
| 外部 API 凭据 | 环境变量注入，不进 git 不进日志 |
| 大规模自动改动 | 一片一 PR，diff 控制在人 20 分钟量 |
| 性能优化 | 正确性验收与性能验收并列 |
| 自动发评论（对外身份） | AI 出草稿，人过目再发 |
| 多任务并行 | worktree 物理隔离 + 独立 Spec |

## 验收标准写法对照

| ❌ 不可判定 | ✅ 可判定 |
| --- | --- |
| 界面要好用 | 点击导出后 3 秒内开始下载 |
| 代码要优雅 | 圈复杂度 ≤ 10，函数 ≤ 50 行 |
| 性能要好 | p95 < 300ms（10 万行数据量） |
| 测试要充分 | 覆盖率 ≥ 70%，变异抽查 3 处能拦截 |
| 文档要清楚 | 新人按文档 30 分钟内跑通 demo |
