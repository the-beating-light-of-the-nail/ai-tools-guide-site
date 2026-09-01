# Mining the Comments Section for Your Next Piece, and Running a Real Retrospective

> Scenario: many people's content retrospectives end with three sentences—views were meh, saves were decent, keep optimizing next time. That's not a retrospective; at best it's a glance at the dashboard.

A retrospective that actually helps the next piece answers more specifically: what are people really asking? Which questions keep coming up? Which comments are few but touch on trust and safety? Saves hit the target, so why does completion fall off a cliff? What exactly do you keep, optimize, or single-variable test next time? I ran two retrospective workflows end to end:

```text
Task 1: 32 comments → completeness check → primary-category labeling → topic clustering → separating facts from inferences
        → scoring 8 candidates → Top 3 → recommend exactly one next topic

Task 2: 72-hour publishing metrics + pre-launch goals and production log → freeze statistical definitions → aggregate and hand-verify
        → compare by source and date → check against goals and production cost → keep / stop / test → next-piece brief
```

Tool combo: for comment-section insight, use the "User Research & Demand Insight" Skill + a local CSV (covering verbatim labeling, quantitative analysis, and demand synthesis); for the post-publish retrospective, use the "Data Analysis" Skill + a metrics CSV + goals and production log (freeze definitions first, then reconcile and review the business). Both tasks are structured analysis of single local materials and **don't need** expert teams, MCP, or platform connectors—the minimal combination that gets the job done is usually the optimal one.

> When working with real comments: export them from the platform dashboard first, or pull them via an authorized read-only connector; don't hand AI any personal information such as usernames, phone numbers, companies, group IDs, or DM contents.

## Task 1: What Is the Comment Section Asking? Do User Insight on Its Own

You can run this with any legally usable batch of comments—no backend metrics required. The 4 most critical points of the prompt: **each comment gets exactly one primary category** (to prevent double counting); **every topic must include comment count, engagement, representative IDs, verbatim quotes, and sources**; **separate facts provable by users' own words from the analyst's inferences**; **only generate analysis files—no replying, no DMs, no publishing**.

```text
I run an AI-tools account aimed at ordinary office workers. Please use the "User Research & Demand Insight" capability
and analyze only the 32-comment file you just located and read:
[path to comments.csv, or change to "only analyze [file name] in the current conversation"]

Data note: this is de-identified sample data for internal practice and does not correspond to a real account or real commenters.
Do not go online to add comments, and do not infer sensitive personal attributes such as age, gender, occupation, location,
or income from the account profile.

Complete the following steps:
1. First run a data completeness check: confirm total rows, fields, null values, duplicate comments, and suspected spam.
2. Label each comment with one "primary category": question, endorsement, objection, misunderstanding, additional example,
   product request, emotional expression, spam. Add secondary tags if needed, but count only by primary category.
3. Cluster comments into user-problem topics. Each topic must include: comment count, engagement (likes + replies),
   a representative comment_id, 1–2 verbatim quotes, and the corresponding source_url.
4. Clearly separate "facts directly provable from users' own words" from "your inferences." Inferences must be labeled
   separately and must not be written as user consensus.
5. List separately: questions suitable for public replies, risks needing private handling or careful response,
   and ignorable spam.
6. Generate 8 candidates for the next piece. Score each on demand frequency, engagement intensity, actionability,
   and trust/safety value—1 to 5 per dimension—plus a total score and supporting comment_ids.
7. Pick the Top 3; then recommend exactly one topic for the next piece, with a title, the reader's question,
   the article's promise, the 5 questions it must answer, evidence to prepare, and boundaries not to overstate.
8. Run a self-check: does the sum of category counts equal the valid comment count; can citations be traced back
   to comment_id/source_url; were any inferences written as facts.

Save the result as comment-user-problem-map.md (comment user-problem map). In chat, summarize only: valid comment count,
spam count, Top 3 topics, and the recommended next topic.

Safety boundaries: only generate analysis files; do not publicly reply, send DMs, publish content, or write back to any platform.
```

Test results: the completeness check found 1 spam entry among 32 records, leaving 31 valid comments; the Top 3 were "Hands-on long-audio transcription and human proofreading" (16/20, C026 with the highest engagement at 108), "A checklist of AI auto-execution permissions" (15/20, multiple comments pointing to the same permission anxiety), and "Real failure cases and how they were fixed" (15/20, two high-engagement comments totaling 149). The final recommendation was a single topic: **hands-on long-audio transcription and human proofreading**—C026 explicitly says "I transcribe interviews every day," and it also covers adjacent problems like meeting recordings and beginners not knowing where to start.

A human still needs to check three things: whether quotes were taken out of context; whether the few but trust-, safety-, and privacy-related questions got drowned out by averages; and whether the recommended topic can actually be answered with real screenshots, data, or failure stories.

## Task 2: Post-Publish Retrospective, So the Next Piece Doesn't Start from Zero

This task is independent of Task 1: all you need is a metrics table + pre-launch goals and a production log. **The most common pitfall in retrospectives is denominator confusion**—is completion rate computed over plays or over 3-second plays? Without pinning that down first, the same data yields completely different results:

```text
This is a new, independent post-publish retrospective task. Please use the "Data Analysis" capability and read only
the two local materials below:
1. [path to metrics.csv]
2. [path to goals-and-log.md]

The data is a de-identified sample and does not represent real account performance. Do not fetch data online,
do not connect to content platforms, and do not generalize a single publication into long-term patterns.

Follow these steps:
1. Freeze the statistical definitions: 72 hours; confirm row count, fields, nulls, duplicates, and units per metric.
   State the denominator of every ratio explicitly.
2. Aggregate impressions, plays, 3-second plays, completions, likes, saves, shares, comments, profile clicks, and follows.
3. Compute and verify: impression→play rate, 3-second retention, completion rate, like rate, save rate, share rate,
   comment rate, profile-click rate, and follow conversion. Hand-check at least 3 metrics.
4. Compare by date and by source, point out where the biggest changes occurred; separate facts from interpretive hypotheses.
5. Check against pre-launch goals, content structure, and the 490 minutes of production effort: were goals met,
   what's worth keeping, what should stop, and what still needs testing next time.
6. Correlation must not be written as causation. With a sample of one publication, all causal judgments are labeled
   "hypothesis," along with a way to verify each.
7. Output a retrospective card: fact summary, funnel, source comparison, goal check, keep/stop/test, data limitations.
8. Then produce a brief for the next piece: one topic, target reader, core question, content promise, structure,
   evidence needed, success metrics, and a pre-publish checklist. The topic may only come from comments or constraints
   explicitly present in these materials—no free expansion.
9. Self-check: do totals reconcile with the per-source and per-date breakdowns; are formula definitions consistent;
   does every conclusion have a source; were no external actions performed.

Save as post-publish-retrospective-card.md (post-publish retrospective card) and next-piece-brief.md (next-piece brief).
In chat, summarize only: whether the save rate hit target, completion rate, strongest source, one item each for
keep/stop/test, and the next topic.

Safety boundaries: only generate analysis files; do not write back to the topic library, publish, reply to comments,
or call external platforms.
```

Actual 72-hour totals: 51,400 impressions, 22,890 plays, 7,537 completions, 1,190 saves. Three key ratios: impression→play rate 44.53%; completion rate 32.93%; **save rate 5.20%, beating the pre-launch target of 3%**. By source, the follower feed led on 8 of 9 ratios, search led on save rate and share rate, and the recommendation feed contributed about 70% of impressions but converted poorly. More importantly, it called out four concrete actions:

| Decision | Output this time |
| --- | --- |
| Keep | Hands-on case study + save-prompt structure |
| Stop | The high-density approach of cramming 4 unrelated cases into one video |
| Test | Show the failure-and-retry process on its own; watch completion rate and the number of specific questions |
| Next piece | "What to Do When Doubao Desktop Fails: 3 Real Errors and the Full Retry Process" |

Note that "information density caused mid-video drop-off" is still just a hypothesis—it must be verified via A/B testing or comparison with similar content. A single publication is n=1; don't draw long-term conclusions.

> A retrospective isn't about finding a plausible-sounding story about the past—it's about **preparing one verifiable action for next time**.

## Compress It into One Checklist

**Comment insight**: de-identify before handing data to AI; check totals, nulls, duplicates, and spam first; one primary category per comment; every topic must carry comment_id, verbatim quotes, and sources; separate quotes from inferences; rank 8 candidates → Top 3 → commit to exactly one next topic; no auto-replies, DMs, or publishing.

**Post-publish retrospective**: fix the statistical window and metric denominators; totals, per-source, and per-date figures must reconcile; hand-verify at least 3 key ratios; read them alongside pre-launch goals, content structure, and production cost; land conclusions on keep, stop, or test; with one publication, offer only hypotheses; generate the retrospective card and brief first—don't write directly into the topic library.

The comment section is like a free, continuously updated user interview; the dashboard tells you what to change next time. Process the two materials separately, then feed the results into your next piece—and you won't have to start every topic from a blank page.

---

Next: [Giving Your Personal Brand a GEO Checkup →](/en/doubaowork/case-geo-checkup)
