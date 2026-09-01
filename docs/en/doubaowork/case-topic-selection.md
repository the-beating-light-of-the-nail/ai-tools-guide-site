# What to Write Today: From Trending Topics and Peers to This Week's Slate

> Scenario: Twenty or thirty title ideas sitting on your desktop, and no idea which to write first—the worry that the trending topic is old news, that a peer breakdown becomes a low-rent knockoff, that you've stockpiled topics faster than you can produce.

This piece doesn't have Doubao Work pick topics on a whim for you. Instead, the real workflow is split into three steps, and what you get isn't just a list of topics—it's a **reusable content production line**:

1. First, a morning trend briefing **with sources and timestamps**;
2. Then pick one peer piece and **deconstruct the method, not copy the content**;
3. Finally, combine your account's positioning and real capacity to turn candidates into **a weekly action calendar you can actually execute**.

## The Skill Stack

| Task | Combination | Why |
| --- | --- | --- |
| Daily trend briefing | VOC & Sentiment Research + public web search | Filters content, traces posts back to the source, separates old news from fresh reporting |
| Peer content deconstruction | Official Account Graphics & Operations Strategy + Link Reader + Lark Doc | Reads the original, verifies facts, breaks down structure, and delivers to Feishu in one pass |
| Weekly topic scheduling | Viral Titles & Topic Calendar + Lark Doc | Doesn't just give titles—ranks capacity by reader benefit, verifiability, and execution cost |

## Task 1: The Trend Briefing—Don't Just Ask "What's the News Today"

Search for "VOC & Sentiment Research" under "Skills · Connectors · Mates" and add it (note: this Skill only works on the web and desktop clients—it won't trigger on mobile). If you only ask "what's trending today," AI will happily fold stale news republished today into the mix—so specify the **time window, source priority, filtering criteria, and pending-verification rules** together:

```text
I'm an editor at a tech / AI WeChat official account, and today I need to prepare an "AI industry topic briefing" for the editorial team.

Use the "VOC & Sentiment Research" skill plus public web search to retrieve and verify
AI industry information published between [start date 00:00] and [current time today], focusing on:
- major model and Agent product updates;
- AI tools for office work, content creation, and developers;
- new features or changes that genuinely affect ordinary office workers.

Work through the following steps:
1. First state the cutoff time and coverage of this search.
2. Distinguish "when the event happened" from "when the article was published"—old news must not be written up as today's news.
3. Merge duplicate coverage of the same event, prioritizing official announcements, official blogs, or product update pages.
4. Pick the 5 items most worth the editorial team's attention; for each, give: the event, why it matters,
   how we could write it up, the original source link, the time basis, and points to confirm.
5. Finally, recommend only the 3 topics most worth starting today,
   with reasons scored on "account fit, timeliness, reader benefit, and verifiability."
6. Flag any numbers, prices, version numbers, and product capabilities you can't confirm—don't fill in or guess.

Deliver a well-structured briefing (in the language of the target account),
with three sections: "today's information table," "today's priority topics," and "pending human review."

Without my confirmation, do not publish content, send messages, or modify any online documents or data.
```

In testing, it first confirmed Beijing time and the search window, then loaded the sentiment capability, searched, verified, and finally delivered a ~20KB briefing: 5 key items → 3 priority topics → 10 facts to re-verify before writing, and it even caught 4 pieces of old news where "the article appeared recently, but the event falls outside the time window." **The most common failure** is mistaking old news that other outlets republished today for "the product just launched today"—splitting "event time" from "publication time" in the prompt filters that out.

> Treat the briefing as a topic radar, not a publishable draft: every "to be confirmed" price, benchmark, or user count must go back to the official source before real writing starts.

## Task 2: A Peer's Viral Post—Deconstruct, Don't Copy

A viral 36Kr article shows up in the briefing. The move isn't to have Doubao Work "write one like it," but to treat it as a **peer sample** to deconstruct. Use the "Official Account Graphics & Operations Strategy" Skill (covering topic selection, fact-checking, article evaluation, and operations review; deliverables go to a Feishu doc first):

```text
I'm an editor at a tech / AI WeChat official account. Use the "Official Account Graphics & Operations Strategy" skill
to deconstruct the public article below—but do not copy its phrasing:

Article link: https://36kr.com/p/xxxxx

Work through the following steps:
1. Read the article first and list the title, author / outlet, publication time, and original link you actually retrieved;
   mark any field you can't read as "to be confirmed"—don't guess.
2. Separate the article's "verifiable facts" from "the author's judgments / rhetoric."
   Where it involves specs, prices, benchmark scores, user counts, or performance comparisons, state whether the original's evidence is sufficient.
3. Break down why it earns clicks and full reads across 6 dimensions:
   opening hook, title promise, narrative structure, information density, use of evidence, closing call to action.
4. Output a deconstruction table; every conclusion must cite its location in the article or a content summary;
   don't excerpt the original at length, and don't copy its distinctive phrasing.
5. Summarize 5 methods worth learning, 3 elements that can't be transplanted, and 5 facts to re-verify before writing.
6. Based on the same event, design 3 brand-new topic angles for my account,
   aimed at ordinary office workers and developers, emphasizing hands-on testing, tutorials, or decision value—no paraphrased rewrites.
7. Run a self-check: did any author opinion get written as fact; were publication time and event time conflated;
   did any untraceable number appear?

Write the final result into a new Feishu doc and return an accessible link.
Without my confirmation, do not publish content, send messages, or modify any other online documents or data.
```

The three boundary lines matter most: **separate facts from opinions, cite the article's location for every conclusion, and no extended excerpting**—without them, a "deconstruction" easily slides into a slightly fancier content scrape. The tested output: 13 verifiable facts each judged for sufficient support; 8 author judgments or rhetorical flourishes flagged separately; a 6-dimension breakdown of its viral mechanics; 5 learnable methods + 3 non-transferable elements + 5 facts to re-verify; and 3 new topic angles that would require original hands-on testing. For example, the original's "priced at just 1/40" is punchy, but how inputs and outputs are weighted is unclear—Doubao Work didn't treat those numbers as ironclad and left them on the re-verification list.

This step answers three questions: **why did it get clicks? which techniques are worth learning? which facts must I re-verify?**

## Task 3: Turn Topics into a Week You Can Actually Execute

With trends and a deconstruction in hand, one practical problem remains: not enough time. Use the "Viral Titles & Topic Calendar" Skill, and beyond the candidate topics **state your real capacity**:

```text
I run a tech / AI WeChat official account and want to turn this week's candidate topics into a content calendar I can actually execute.

Account positioning:
- Aimed at ordinary office workers and developers who want AI to boost their efficiency;
- Mostly hands-on AI tool tests, open-source projects, step-by-step tutorials, and real work cases;
- Conversational tone, emphasizing "read it and you can follow along"—no vague trend pieces.

This week's capacity:
- 5 official-account articles can be completed;
- 2 of them can get full hands-on testing plus 6-10 step screenshots;
- The other 3 must each be done within half a day.

Candidate topics:
1. [topic 1] 2. [topic 2] ... (list your candidates)

Use the "Viral Titles & Topic Calendar" skill and work through the following steps:
1. First check whether the inputs are sufficient; list anything missing as an item to confirm—don't invent data.
2. Score each topic 1-5 on: account fit, reader benefit, timeliness, provability, and execution cost.
3. Pick 5 topics based on capacity and slot them Monday through Friday, labeling each "deep hands-on" or "half-day quick write."
4. For each topic, give: the recommendation reason, reader benefit, suggested format, materials to prepare,
   one main title and one A/B alternate title.
5. For topics not selected, explain clearly "why not this week"—don't wave them off with "not hot enough."
6. Run a self-check: does the workload exceed capacity; do two or more pieces compete for the same reader need; are any titles exaggerated.

Write the final result into a new Feishu doc and return an accessible link.
Without my confirmation, do not publish content, send messages, or modify any other online documents or data.
```

In testing, it first checked today's date, the candidates, and the capacity—since the test happened on a Thursday, it interpreted "this week" as the next full work week and wrote that assumption into the pending-confirmation list for you to approve. The final schedule was 2 deep hands-on tests + 3 half-day quick writes; the reasons for the two rejected topics were specific too: one would need 1–2 weeks of deep testing that current capacity can't support, and the other leaned toward operations methodology and didn't fit the account's core readers. It also proactively left 4 items pending confirmation (schedule start date, publish times, whether the personal experience in a title actually holds, and whether tool-count claims have been tested).

## Remember This Prompt Skeleton

Swap in legal, HR, sales, or product management, and the same four layers apply directly:

1. **State role and audience first**: who you are and who the content is for;
2. **Then state the constraints**: time window, capacity, data permissions, what's off-limits;
3. **Define the judgment criteria**: fit, benefit, timeliness, evidence, cost;
4. **Require a review checklist**: what's fact, what's assumption, which numbers can't be written yet.

Where AI genuinely shines is filtering 30 candidates down to 3 and telling you **why those 3, which to start today, and what still needs verifying before you write**—that's a "what to write today" a content team can actually act on.

---

Next: [From Trending Topic to a Finished Official Account Article →](/en/doubaowork/case-wechat-article)
