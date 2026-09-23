---
description: "If you use WPS, ima, Obsidian, WeChat Favorites, meeting notes, and local files all at once, how should you divide the work so you avoid ending up with a copy in every place and not one you actually trust?"
---

# Chapter 16: Saved It Everywhere, Still Can't Use Any of It? Give Each Tool One Job

You've had this moment: a copy in WPS, an article saved in ima, something forwarded to yourself in WeChat, another note in Obsidian, and a stray duplicate in a local folder. Then you actually sit down to write, dig through all of it, and realize there's a copy in every place — but not one you'd swear is current and trustworthy.

The problem with knowledge management is rarely that you saved too little. It's that everything is scattered and no master copy is clear. No big theory here — just a clean division of labor across the tools you already use: which one is the master copy, which is the temporary inbox, and which only handles mobile capture.

## Decide the Master Copy First, Then Connect Tools

Lock this one sentence in first: a sound personal knowledge system can have multiple entry points, but only one clearly designated master copy. The table below lists each tool's recommended role and what it shouldn't be asked to carry — match your setup against it.

| System | Recommended role | Not recommended for |
| --- | --- | --- |
| WPS / Kdocs | Work documents, spreadsheets, collaborative notes, team knowledge | The sole backup of all private raw materials |
| ima | WeChat-ecosystem capture, mobile Q&A, knowledge base retrieval | Storing second-hand conclusions with no sources |
| Obsidian | Local Markdown, backlinks, topic wikis, long-term migration | Letting automation batch-move or rename files without backups |
| WeChat Favorites / idea capture tools | Low-friction entry point and temporary inbox | Permanent archiving and structured retrieval |
| Feishu / Tencent Docs | Team collaboration, comments, published copies | Expanding visibility of private materials by default |

## Scenario 1: An Idea Strikes, and You Note Down Just One Sentence

Ideas suffer from two kinds of handling: not getting them down in time, or having AI instantly expand one sentence into a seemingly complete article that has already drifted from the original thought.

Two Skills can catch the idea for you: [Inspiration Hunter](https://skillhub.cn/skills/inspiration-hunter-skill) (auto-classifies and writes into a Markdown inbox), [ima-skills](https://skillhub.cn/skills/ima-skills) (mobile capture, knowledge base read/write and retrieval); if an Obsidian local directory serves as the long-term master copy, you can also connect a Wiki-type Skill.

```text
Log the following into the "Idea Inbox," keeping my original words — no expanding, no judging:
"The real barrier to AI tools isn't the prompt, it's verifying the results."
```

![Idea inbox: keep the original words, no expansion](/workbuddy/case-knowledge/assets/001_image_M29JbJQ3po.png)

## Scenario 2: Lots of WeChat Favorites, Still Unfindable When Actually Writing

You've piled up a mountain of WeChat favorites, and when it's time to write you can't search them out or connect them to anything. The problem is usually "collecting without exporting" — the favorites sit inside WeChat, completely detached from your knowledge base.

Useful Skills: [WeChat Favorites Knowledge Base](https://skillhub.cn/skills/wechat-favorite) (export, classify, and route into ima / Obsidian / Notion), [URL to Obsidian](https://skillhub.cn/skills/url-to-obsidian) (clips web pages, summarizes, and saves to a Vault), [Official Account Content Extractor](https://skillhub.cn/skills/wxpublic-fetch) (saves Official Account articles as local Markdown).

```text
Process this week's WeChat Favorites — read-only; do not delete the originals.
```

![Processing WeChat favorites: read-only export and sorting](/workbuddy/case-knowledge/assets/002_byKl8HZ2_TtombzmOwo.jpg)

## Scenario 3: ima as the Mobile Knowledge Entry Point

ima's strength isn't "smarter Q&A" — it's mobile capture, knowledge base read/write, and continuity with WeChat context. When you use [ima-skills](https://skillhub.cn/skills/ima-skills), settle the target knowledge base and the write rules first, so content doesn't end up dumped somewhere you can't find later.

```text
Put the 3 files I just selected into the inbox of the "WorkBuddy Case Library" in ima.
```

![Adding files to the ima knowledge-base inbox](/workbuddy/case-knowledge/assets/003_image_D0c8blIsEo.png)

## Scenario 4: Obsidian Isn't a Folder — It's a Maintainable Wiki

Treat Obsidian like an ordinary folder and you waste its backlinks and long-term migration. Use it as a maintainable Wiki and it earns its keep. Useful Skills: [Obsidian Notes Organizer](https://skillhub.cn/skills/obsidian-core-notes) (maintains core notes, topic syntheses, and directory links), [agent + Obsidian long-term memory](https://skillhub.cn/skills/obsidian-memory) (reads and writes long-term memory within clear project boundaries).

```text
Hand a WeChat Official Account article to WorkBuddy to parse, then ask it to file it in the designated Obsidian materials directory.
```

WorkBuddy can recognize the article body and author, and generate a Markdown entry.

![A WeChat article parsed into an Obsidian Markdown note](/workbuddy/case-knowledge/assets/004_test_SSsAbxS8po.jpg)

## FAQ

**I've saved so much — why can I still never write anything from it?**
What you're missing usually isn't material, it's a path from capture to usable. Set the master copy first, then give each tool one stretch of the road, and the material will be there when you sit down to write.

**Do I need both ima and Obsidian?**
Depends on your habits. ima suits grabbing things on your phone and fishing inside the WeChat ecosystem; Obsidian suits long-term local accumulation and backlink work. ima as the entry point and Obsidian as the master copy is the steadiest pairing.

**Will AI rewrite my own words when organizing my notes?**
It will, if your prompt doesn't say otherwise. Write it out like the example above — keep my original words, no expanding, no judging — and AI won't take liberties on your behalf.

**Can automation scramble my files?**
Yes, if you let it batch-move or rename things with no backup. That's exactly what the Obsidian row warned against: backup first, automation second.

---

> For a more systematic take on "what AI relies on" (the difference between knowledge bases, RAG, and memory), see [Further Reading: Understanding AI Work Systems](/en/workbuddy/11-ai-work-system/).
