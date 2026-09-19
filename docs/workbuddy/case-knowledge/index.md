---
description: "如果一个人同时使用 WPS、ima、Obsidian、微信收藏、会议记录和本地文件，怎样分工才能避免“每个地方都有一份，但没有一份可信”？"
---

# 收藏的东西怎么变成能用的知识？WPS / ima / Obsidian / 微信收藏这样分工

你大概也有过这种时刻：WPS 里存一份、ima 里收藏一篇、微信里转存一条、Obsidian 里又记一笔，本地文件夹还躺着一个副本。等真要写东西，翻了一圈，发现每个地方都有一份，但没有一份你敢拍胸脯说「这是最新的、可信的」。

知识管理的痛点，往往不是「存得不够多」，而是「散得太开、主版本不清」。这一篇不谈大道理，只帮你把几样常用工具分好工：谁当主版本、谁当临时收件箱、谁只负责移动端收集。

## 先定主版本，再谈连接工具

你先把一句话记牢：一个稳健的个人知识系统可以有多个入口，但只能有一个清楚的主版本。下面这张表把每样工具的「推荐角色」和「不建议承担」列出来了，你可以照着对号入座。

| 系统 | 推荐角色 | 不建议承担 |
| --- | --- | --- |
| WPS / Kdocs | 工作文档、表格、协作笔记和团队知识 | 所有私人原始资料的唯一备份 |
| ima | 微信生态收集、移动问答和知识库检索 | 保存没有来源的二手结论 |
| Obsidian | 本地 Markdown、双链、专题 Wiki 和长期迁移 | 未备份情况下让自动化批量移动或重命名 |
| 微信收藏 / 灵感工具 | 低摩擦入口和临时收件箱 | 永久归档与结构化检索 |
| 飞书 / 腾讯文档 | 团队协作、评论和发布副本 | 默认扩大私人资料可见范围 |

## 场景一：灵感来了，你只记下一句话

灵感最怕两种处理：一种是没来得及记就溜了，另一种是 AI 立刻把一句话扩写成一篇看似完整、却已经偏离你原意的文章。

你可以用这两个 Skill 接住灵感：[灵感捕手](https://skillhub.cn/skills/inspiration-hunter-skill)（自动分类并写入 Markdown 收件箱）、[ima-skills](https://skillhub.cn/skills/ima-skills)（移动端记录、知识库读写与检索）。Obsidian 本地目录作为长期主版本时，还能接入 Wiki 类 Skill。

```text
把下面内容记入"灵感收件箱"，保留我的原话，不扩写、不评价：
"AI 工具真正的门槛不是提示词，而是验收结果。"
```

![灵感收件箱：保留原话不扩写](/workbuddy/case-knowledge/assets/001_image_M29JbJQ3po.png)

## 场景二：微信收藏很多，真写的时候还是搜不到

你微信里攒了一大堆收藏，真到写稿时却搜不出来、也串不起来。问题通常出在「只收集、不导出」——收藏躺在微信里，跟你的知识库是两张皮。

可用 Skill：[微信收藏知识库](https://skillhub.cn/skills/wechat-favorite)（导出、分类，进入 ima / Obsidian / Notion）、[URL to Obsidian](https://skillhub.cn/skills/url-to-obsidian)（抓取网页、总结并保存到 Vault）、[公众号内容提取](https://skillhub.cn/skills/wxpublic-fetch)（公众号文章保存为本地 Markdown）。

```text
处理本周微信收藏，只读，不删除原收藏。
```

![处理微信收藏：只读导出并分类](/workbuddy/case-knowledge/assets/002_byKl8HZ2_TtombzmOwo.jpg)

## 场景三：把 ima 当你的移动知识入口

ima 的优势不是「问答更聪明」，而是手机收集、知识库读写和微信上下文衔接顺手。你用 [ima-skills](https://skillhub.cn/skills/ima-skills) 时，先想清楚目标知识库和写入规则，别让内容乱塞进一个你后来找不到的地方。

```text
将我刚选择的 3 份文件放入 ima"WorkBuddy 案例库"的收件箱。
```

![把文件放入 ima 知识库收件箱](/workbuddy/case-knowledge/assets/003_image_D0c8blIsEo.png)

## 场景四：Obsidian 不是文件夹，而是能维护的 Wiki

你如果拿 Obsidian 当普通文件夹，就浪费了它的双链和长期迁移能力。把它当作可维护的 Wiki 才用得值。可用 Skill：[Obsidian 资料整理](https://skillhub.cn/skills/obsidian-core-notes)（维护核心笔记、专题综合和目录链接）、[agent + Obsidian 长期记忆](https://skillhub.cn/skills/obsidian-memory)（在明确项目边界后读写长期记忆）。

```text
把一篇公众号文章交给 WorkBuddy 解析，再要求放进指定的 Obsidian 素材目录。
```

WorkBuddy 能识别文章正文和作者，并生成 Markdown 条目。

![公众号文章解析为 Obsidian Markdown 条目](/workbuddy/case-knowledge/assets/004_test_SSsAbxS8po.jpg)

## 常见问题

**收藏那么多，为什么我还是写不出东西？**
你缺的通常不是素材，而是一条「从收集到能用」的链路。先定主版本，再让每个工具各管一段，写完自然有料可用。

**ima 和 Obsidian 要同时用吗？**
看你的习惯。ima 适合手机随手收、微信生态里捞；Obsidian 适合本地长期沉淀和双链整理。你让 ima 当入口、Obsidian 当主版本，是最稳的组合。

**让 AI 整理知识，会不会把我的原话改掉？**
会，如果提示词没说清楚。你像上面那样写明「保留原话、不扩写、不评价」，AI 就不会自作主张替你发挥。

**自动化会不会把我文件搞乱？**
会，如果你在没备份时让自动化批量移动或重命名。Obsidian 那条「不建议承担」说的就是这事——备份第一，自动化第二。

---

> 更系统的"AI 依据什么"（知识库、RAG 与记忆的区别），见[课外阅读：看懂 AI 工作系统](/workbuddy/11-ai-work-system/)。
