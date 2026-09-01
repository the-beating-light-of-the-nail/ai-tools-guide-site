# 第 5 章 WorkBuddy 加载一个真正用得上的 Skill

## Skill 是什么

WorkBuddy 本身负责理解任务和组织执行；Skill 则是一组可复用的说明、脚本、参考资料和资源，告诉 Agent 某类任务应该怎样做、调用什么工具、交付什么格式。

一个最标准的 Skill，大概长这样：

```text
my-skill/
├── SKILL.md
├── scripts/
│   └── check.py
├── references/
│   └── guide.md
└── assets/
    └── template.pptx
```

其中只有 `SKILL.md` 是必须的，开头两行写清名称和用途：

```markdown
---
name: tech-article-writing
description: 用于撰写 AI 产品、模型评测和科技行业相关文章
---

收到写作任务后：

1. 先确认文章核心角度
2. 查找一手资料
3. 对核心事实交叉验证
4. 根据用户写作风格完成初稿
5. 检查禁用句式和 AI 味表达
```

## Skill 是怎么工作的

Skill 最关键的设计不是 SKILL.md，而是**渐进式披露（Progressive Disclosure）**。假设你的 Agent 装了 100 个 Skill，它不会一上来把全部内容塞进上下文，而是分三层按需加载：

1. **启动时**：只读所有 Skill 的名称和 description（几十至上百 Token）；
2. **匹配到任务时**：你说"帮我写一篇 WorkBuddy 的公众号文章"，Agent 根据 description 判断 `tech-article-writing` 相关，这时才加载完整的 SKILL.md；
3. **执行中**：需要模仿写作风格，才继续读 `references/style.md`；需要检查 AI 味，才执行 `scripts/check-ai-phrases.py`。

所以 Skill 解决了一个长期困扰 Agent 的问题：**怎么给 Agent 很多知识和工作方法，又不把所有东西永远塞在 Prompt 里。**

## Skill 跟 Prompt 到底有什么区别

| 维度 | Prompt | Skill |
| --- | --- | --- |
| 核心作用 | 描述当前任务 | 定义一类任务怎么做 |
| 生命周期 | 通常针对一次请求 | 长期复用 |
| 触发方式 | 用户主动输入 | Agent 自动选择或用户显式调用 |
| 载体 | 主要是文本 | 文件夹 |
| 内容 | 指令、上下文、示例 | 指令、脚本、资料、模板、资源 |
| 上下文占用 | 通常直接进入上下文 | 按需加载 |
| 复用 | 经常复制粘贴 | 原生可复用、可分享 |

最简单的理解是：**Prompt = 任务，Skill = 做法。** 你反复在对话里重复的"不要写得太 AI、长短句结合、不要编造例子"，其实天然适合做成一个 `writing-style` Skill——以后 Prompt 只需要一句"写一篇 WorkBuddy 文章"，写作习惯都由 Skill 提供。

Skill 还有两个 Prompt 给不了的价值：一是**固定复杂工作流**（把行业调研的七步流程固化下来，而不是每次让模型重新思考）；二是**把个人经验资产化**——Skill 是文件，可以 Git 管理、版本回滚、团队共享。

## 在 WorkBuddy 里找到合适的 Skill

打开左侧"专家·技能·连接器"，可以从技能市场搜索，也可以用"查找技能"描述需求。

![](/workbuddy/05-skills/assets/001_image_TdcLblfvIo.png)

也可以在 SkillHub 技能市场里找到合适的 Skill：

![](/workbuddy/05-skills/assets/002_image_V3E5bsVZGo.png)

除了从推荐列表里直接安装，还可以**导入自己下载的技能**：在网上看到好用的技能包，下载下来是一个 zip 压缩文件，点击"上传技能"把 zip 文件加载即可。

![](/workbuddy/05-skills/assets/003_image_Oag3bNQHOo.png)

![](/workbuddy/05-skills/assets/004_image_GgOebNBh3o.png)

## 使用 Skill 解决一个任务

比如，你让 AI 写了一篇文章，需要去除 AI 味。找到"文章去 AI 味工具"Skill，安装之后，使用时直接按 `/` 就能唤出。

![](/workbuddy/05-skills/assets/005_20260708200848_NN3hbPsKAo.gif)

你只需要引用 Skill 内容，把文章给到：

![](/workbuddy/05-skills/assets/006_image_Xom2btXVZo.png)

WorkBuddy 会先加载 Skill 的内容：

![](/workbuddy/05-skills/assets/007_image_AmOVb1oGEo.png)

然后根据 Skill 中的规则来执行，比如要去除"不是……而是……"、双引号等内容：

![](/workbuddy/05-skills/assets/008_image_FbpQbmSswo.png)

修改之后可以得到结果——确实去除了 AI 味。

![](/workbuddy/05-skills/assets/009_image_RhBKbRhgIo.png)

## Skill 的关闭和卸载

从全部技能中，点击"我安装的"：

![](/workbuddy/05-skills/assets/010_image_NGsdbBcjso.png)

按钮关闭（则关闭该 Skill）：

![](/workbuddy/05-skills/assets/011_image_DABBb41fGo.png)

点击"···"，可以选择删除或编辑该 Skill：

![](/workbuddy/05-skills/assets/012_image_Uya3bNC9io.png)

---

> 想把一本书或一门课蒸馏成自己的 Skill？见进阶篇[打造 Skill：把知识蒸馏为可执行能力](/workbuddy/adv-build-skill/)。
