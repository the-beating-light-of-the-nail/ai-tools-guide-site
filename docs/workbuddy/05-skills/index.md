---
description: "你让 WorkBuddy 写一篇文章，每次都得在对话框里反复叮嘱：「别写太 AI」「长短句结合」「别编例子」。同样的叮嘱你说了一遍又一遍，它还是偶尔走样。"
---

# WorkBuddy 的 Skill 是什么？装一个就让 AI 照着老手的套路干活

你让 WorkBuddy 写一篇文章，每次都得在对话框里反复叮嘱：「别写太 AI」「长短句结合」「别编例子」。同样的叮嘱你说了一遍又一遍，它还是偶尔走样。你心里大概想过：这些重复的要求，能不能一次性教给它，以后不用再讲？能，这就是 Skill 要解决的问题。

WorkBuddy 本身负责理解任务、组织执行；Skill 则是一组可复用的说明、脚本、参考资料和资源——你告诉它某类任务该怎么做、调用什么工具、交付什么格式。你装上一个写作风格的 Skill，往后发一句「写一篇 WorkBuddy 文章」，习惯它自己带，你不用每次重讲。

## 一个标准 Skill 长什么样

最标准的 Skill，大概长这样——只有 `SKILL.md` 是必须的，其余是你按需加的辅助文件：

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

你只要记住，其中只有 `SKILL.md` 是必须的，开头两行写清名称和用途：

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

## Skill 是怎么被调用的

Skill 最关键的设计，不是你看到的几行说明，而是渐进式披露（Progressive Disclosure）。假设你的 Agent 装了 100 个 Skill，它不会一上来把全部内容塞进上下文，而是分三层按需加载：

1. **启动时**：只读所有 Skill 的名称和 description（几十至上百 Token）；
2. **匹配到任务时**：你说「帮我写一篇 WorkBuddy 的公众号文章」，Agent 根据 description 判断 `tech-article-writing` 相关，这时才加载完整的 SKILL.md；
3. **执行中**：需要模仿写作风格，才继续读 `references/style.md`；需要检查 AI 味，才执行 `scripts/check-ai-phrases.py`。

所以 Skill 帮你解决了一个长期困扰 Agent 的问题：怎么给 Agent 很多知识和工作方法，又不把所有东西永远塞在 Prompt 里。

## Skill 跟 Prompt 到底差在哪

最简单的理解是：**Prompt = 任务，Skill = 做法。** 你反复在对话里重复的「不要写得太 AI、长短句结合、不要编造例子」，其实天然适合做成一个 `writing-style` Skill——以后你发一句「写一篇 WorkBuddy 文章」，写作习惯都由 Skill 提供，你不必再啰嗦。

| 维度 | Prompt | Skill |
| --- | --- | --- |
| 核心作用 | 描述当前任务 | 定义一类任务怎么做 |
| 生命周期 | 通常针对一次请求 | 长期复用 |
| 触发方式 | 用户主动输入 | Agent 自动选择或用户显式调用 |
| 载体 | 主要是文本 | 文件夹 |
| 内容 | 指令、上下文、示例 | 指令、脚本、资料、模板、资源 |
| 上下文占用 | 通常直接进入上下文 | 按需加载 |
| 复用 | 经常复制粘贴 | 原生可复用、可分享 |

Skill 还有两个 Prompt 给不了你的价值：一是**固定复杂工作流**（你把行业调研的七步流程固化下来，而不是每次让模型重新思考）；二是**把个人经验资产化**——Skill 是文件，你可以用 Git 管理、版本回滚、团队共享。

## 在 WorkBuddy 里找到合适的 Skill

你打开左侧「专家·技能·连接器」，可以从技能市场搜索，也可以用「查找技能」描述你的需求。

![左侧「专家·技能·连接器」入口与技能搜索](/workbuddy/05-skills/assets/001_image_TdcLblfvIo.png)

你也能在 SkillHub 技能市场里找合适的 Skill：

![SkillHub 技能市场](/workbuddy/05-skills/assets/002_image_V3E5bsVZGo.png)

除了从推荐列表里直接安装，你还可以导入自己下载的技能：你在网上看到好用的技能包，下载下来是一个 zip 压缩文件，点「上传技能」把 zip 文件加载即可。

![「上传技能」导入 zip 技能包](/workbuddy/05-skills/assets/003_image_Oag3bNQHOo.png)

![选择本地 zip 文件上传技能](/workbuddy/05-skills/assets/004_image_GgOebNBh3o.png)

## 用 Skill 解决一件具体的事

比如，你让 AI 写了一篇文章，需要去除 AI 味。你找到「文章去 AI 味工具」Skill，安装之后，使用时直接按 `/` 就能唤出。

![输入 / 唤出已安装的技能](/workbuddy/05-skills/assets/005_20260708200848_NN3hbPsKAo.gif)

你只需要引用 Skill 内容，把文章给到：

![引用 Skill 并把文章给到](/workbuddy/05-skills/assets/006_image_Xom2btXVZo.png)

WorkBuddy 会先加载 Skill 的内容：

![WorkBuddy 加载 Skill 内容](/workbuddy/05-skills/assets/007_image_AmOVb1oGEo.png)

然后根据 Skill 中的规则来执行，比如要去除「不是……而是……」、双引号等内容：

![按 Skill 规则执行去 AI 味处理](/workbuddy/05-skills/assets/008_image_FbpQbmSswo.png)

修改之后你可以拿到结果——确实去除了 AI 味。

![去 AI 味后的成品效果](/workbuddy/05-skills/assets/009_image_RhBKbRhgIo.png)

## Skill 的关闭和卸载

你从全部技能里点「我安装的」：

![技能列表切到「我安装的」](/workbuddy/05-skills/assets/010_image_NGsdbBcjso.png)

点按钮关闭（则该 Skill 关闭）：

![点开关关闭对应 Skill](/workbuddy/05-skills/assets/011_image_DABBb41fGo.png)

你点「···」，可以选择删除或编辑该 Skill：

![「···」菜单：删除或编辑 Skill](/workbuddy/05-skills/assets/012_image_Uya3bNC9io.png)

## 新手常见问题

**Skill 和 Prompt 我该先弄懂哪个？**
你先把 Prompt 写顺手，知道「材料、结果、边界」怎么说清。等同一类活你反复说同样的叮嘱，再把它做成 Skill，省得每次重讲。

**装了 Skill 会一直占着上下文吗？**
不会。它用的是渐进式披露：启动时只读名字和简介，匹配到任务才加载正文，执行中才读参考资料和脚本。你装一百个也不会一次性全塞进去。

**我自己做的 Skill 能给别人用吗？**
能。Skill 本质是个文件夹，你打包成 zip 就能上传分享，也能用 Git 管理、版本回滚，适合团队共用一套工作方法。

**Skill 不合适了怎么撤？**
你打开「我安装的」，点按钮先关闭；想彻底删就点「···」选删除，也能在那儿直接编辑。关掉后这一单就不会再调用它。

---

下一步：让专家替你扛专业活——[WorkBuddy 的专家和专家团 →](/workbuddy/06-experts/)

> 想把一本书或一门课蒸馏成自己的 Skill？见进阶篇[打造 Skill：把知识蒸馏为可执行能力](/workbuddy/adv-build-skill/)。
