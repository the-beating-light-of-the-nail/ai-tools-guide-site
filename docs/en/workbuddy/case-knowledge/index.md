# Chapter 16: Bookmarks Aren't Knowledge Management — Putting Them Back to Work Is

## All the Tools Installed, Knowledge Still Scattered

If someone uses WPS, ima, Obsidian, WeChat Favorites, meeting notes, and local files all at once, how should the work be divided so you avoid "a copy everywhere, but none of them trustworthy"?

## Decide the Master Copy First, Then Connect Tools

A sound personal knowledge system can have multiple entry points, but only one clearly designated master copy:

| System | Recommended role | Not recommended for |
| --- | --- | --- |
| WPS / Kdocs | Work documents, spreadsheets, collaborative notes, team knowledge | The sole backup of all private raw materials |
| ima | WeChat-ecosystem capture, mobile Q&A, knowledge base retrieval | Storing second-hand conclusions with no sources |
| Obsidian | Local Markdown, backlinks, topic wikis, long-term migration | Letting automation batch-move or rename files without backups |
| WeChat Favorites / idea capture tools | Low-friction entry point and temporary inbox | Permanent archiving and structured retrieval |
| Feishu / Tencent Docs | Team collaboration, comments, published copies | Expanding visibility of private materials by default |

## Scenario 1: An Idea Strikes, and You Note Down Just One Sentence

Ideas suffer from two kinds of handling: not getting them down in time, or having AI instantly expand one sentence into a seemingly complete article that has already drifted from the original thought.

Useful Skills: [Inspiration Hunter](https://skillhub.cn/skills/inspiration-hunter-skill) (auto-classifies and writes into a Markdown inbox), [ima-skills](https://skillhub.cn/skills/ima-skills) (mobile capture, knowledge base read/write and retrieval); if an Obsidian local directory serves as the long-term master copy, you can also connect a Wiki-type Skill.

```text
Log the following into the "Idea Inbox," keeping my original words — no expanding, no judging:
"The real barrier to AI tools isn't the prompt, it's verifying the results."
```

![](/workbuddy/case-knowledge/assets/001_image_M29JbJQ3po.png)

## Scenario 2: Lots of WeChat Favorites, Still Unfindable When Actually Writing

Useful Skills: [WeChat Favorites Knowledge Base](https://skillhub.cn/skills/wechat-favorite) (export, classify, and route into ima / Obsidian / Notion), [URL to Obsidian](https://skillhub.cn/skills/url-to-obsidian) (clips web pages, summarizes, and saves to a Vault), [Official Account Content Extractor](https://skillhub.cn/skills/wxpublic-fetch) (saves Official Account articles as local Markdown).

```text
Process this week's WeChat Favorites — read-only; do not delete the originals.
```

![](/workbuddy/case-knowledge/assets/002_byKl8HZ2_TtombzmOwo.jpg)

## Scenario 3: ima as the Mobile Knowledge Entry Point

ima's strength isn't "smarter Q&A" — it's mobile capture, knowledge base read/write, and continuity with WeChat context. When using [ima-skills](https://skillhub.cn/skills/ima-skills), first specify the target knowledge base and the write rules.

```text
Put the 3 files I just selected into the inbox of the "WorkBuddy Case Library" in ima.
```

![](/workbuddy/case-knowledge/assets/003_image_D0c8blIsEo.png)

## Scenario 4: Obsidian Isn't a Folder — It's a Maintainable Wiki

Useful Skills: [Obsidian Notes Organizer](https://skillhub.cn/skills/obsidian-core-notes) (maintains core notes, topic syntheses, and directory links), [agent + Obsidian long-term memory](https://skillhub.cn/skills/obsidian-memory) (reads and writes long-term memory within clear project boundaries).

```text
Hand a WeChat Official Account article to WorkBuddy to parse, then ask it to file it in the designated Obsidian materials directory.
```

WorkBuddy can recognize the article body and author, and generate a Markdown entry.

![](/workbuddy/case-knowledge/assets/004_test_SSsAbxS8po.jpg)

---

> For a more systematic take on "what AI relies on" (the difference between knowledge bases, RAG, and memory), see [Further Reading: Understanding AI Work Systems](/en/workbuddy/11-ai-work-system/).
