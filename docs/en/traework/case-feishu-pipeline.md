# Case Study: A Fully Automated WeChat Official Account → Feishu Knowledge Base Pipeline

> Adapted from a hands-on forum post by TRAE user HancksLiu (product manager): ["I Built a Fully Automated 'WeChat Official Account Articles → Feishu Knowledge Base' Pipeline with TraeWork"](https://forum.trae.cn/t/topic/172002) (July 2026). The companion skills are open source: [yucai0302/wechat-to-feishu-kb](https://github.com/yucai0302/wechat-to-feishu-kb).

## Three Pain Points

1. **The WeChat ecosystem is closed**: Generic crawlers fetching Official Account articles get empty shell pages or an "open in the WeChat client" notice. AI search engines can't get through WeChat's CDN protections, and "one-click save" tools barely work on Official Account content;
2. **Reading and archiving are disconnected**: Articles get saved and never opened again, never making it into a personal or team knowledge base for search and reuse;
3. **Manual filing is too expensive**: Filing one 5,000-word article by hand takes 15-20 minutes; at 10-15 articles a week, that's 3-4 hours spent on filing alone.

## The Architecture: Two Skills + Two Modes

```text
Skill 1  wechat-article-saver     Scrape Official Account article → save as local Markdown
Skill 2  wechat-to-feishu-kb      Local Markdown → Feishu knowledge base
─────────────────────────────────────────────
Instant mode: paste an article link in chat → Skill auto-triggers scraping + writing
Batch mode: paste links line by line into pending.txt → a 10 p.m. scheduled task processes them
```

### Scraping: A Four-Tier Fallback Strategy

WeChat's anti-scraping is the hard part, so Skill 1 has four built-in fallback tiers—whichever succeeds wins:

1. Playwright + Chromium headless browser rendering;
2. HTTP fetch with anti-bot headers (User-Agent, Accept-Language, etc.);
3. TraeWork's built-in WebFetch tool;
4. Manually pasting the original text as the last resort.

The body is extracted with Mozilla Readability and converted to Markdown with Turndown—about 30 seconds per article.

### Archiving: The Feishu Connection

On the Feishu side, only two lark-cli capabilities are used: `wiki + node-create` (create knowledge base nodes) and `docs + update` (write document content). Local Markdown copies are kept as a dual backup and can be indexed directly by Obsidian / Notion / Logseq.

## Results

| Metric | Before | After |
| --- | --- | --- |
| Time per article | 15-20 minutes | 5 seconds (instant) / 0 (scheduled) |
| Weekly savings | — | 3-4 hours |
| Monthly savings | — | About 15 hours |
| Knowledge searchable | Gathering dust in favorites | 100% (Feishu AI Q&A + local full-text search) |
| Team reuse | None | Knowledge base accessible to everyone |

## The Biggest Lesson: Prompts for Scheduled Tasks

When the author first configured the scheduled task, he wrote just one sentence—"scrape articles into the knowledge base"—and it **failed**, for missing parameters like space_id, authentication method, and file paths. The corrected takeaway:

> **A scheduled task is essentially an unattended conversation: the more detailed the prompt, the more stable it runs.**

After writing the full execution steps, parameters, and error-handling logic into the instructions, it ran cleanly on the first try. See the writing checklist in [Automated Scheduled Tasks](/en/traework/07-automated-tasks).

## Porting It to Your Scenario

The skeleton of this pipeline is universal:

```text
Information source (links / email / reports) → scraping Skill (multi-tier fallback)
→ standardized intermediate format → archiving Skill (Feishu / Notion / local knowledge base)
→ dual mode: scheduled runs + on-demand chat
```

Swappable sources: industry news pages, competitor changelogs, app store reviews, team weekly-report emails. The author is candid about current limits too—the local pending.txt collection method "isn't smart enough yet," and ideal automatic recommendation is constrained by how closed the WeChat ecosystem is.

## Security Notes

- If the scraping flow involves login credentials, don't run it on shared devices;
- Respect content copyright: archiving for personal use and redistributing are different things—mind licensing boundaries in team knowledge bases.
