# Work Buddy or Work Squad?

The first time you see "Work Buddy" and "Work Squad," the same question pops into everyone's head: both can take tasks, so why two different things? The feature descriptions won't make it click, so instead let's put them to the test with **two things you run into all the time at work**:

- First, take a sales detail sheet and do an August retrospective;
- Second, take a product brief and produce a full launch content package—a WeChat Official Account article, a Xiaohongshu post, and WeCom group copy.

The conclusion up front: **if the job centers on one clear professional role—data analysis, deck building, recruiting—go with a "Work Buddy"; if it has to pass through several stages like planning, writing, design, and review, hand it to a "Squad."**

## Tell the Four Options Apart in 30 Seconds

| The Work in Hand | Better Approach | Example |
| --- | --- | --- |
| A quick question, tweaking a paragraph | Just start a new task | Revising an email, outlining |
| A fixed method you'll reuse again and again | A Skill | A fixed-format weekly report, a unified brand voice |
| One professional role seeing it through to the end | Work Buddy | Data analyst, PPT specialist |
| Multiple roles dividing labor with hand-off dependencies | Work Squad | Product launches, marketing campaigns, content matrices |

The entry point is under "Skills · Connectors · Buddies" on the left—switch to the "Buddies & Squads" tab. One practical tell: only cards labeled "Work Squad" are multi-agent collaboration; most other cards are individual Work Buddies.

## Option One: Find One Professional Buddy to See the Job Through

The most common case, a sales retrospective: the source material is a CSV with 8 rows (date, city, channel, product, sales, refunds, order count). Pick the "Data Analyst"—because the core actions of this task all sit within one professional scope: checking the data, computing metrics, finding anomalies, making recommendations.

Don't write the prompt as just "help me analyze this"—that's far too vague, and the output will almost certainly be unusable. You can copy the version below directly and swap in your own file name and month:

```text
[Materials] Upload your own sales detail sheet, or replace the file name below with your actual file.

I'm the business owner and need a retrospective on August 2026 sales. Read the attached sales-detail.csv.

Work through it the way a professional data analyst would:
1. First check fields, nulls, duplicates, and obvious outliers; do not modify the original file.
2. Compute sales, refunds, net sales, refund rate, and order count, broken down by city, channel, and product.
3. Identify the 3 issues most worth attention; for each, state the numeric evidence and the basis for judgment.
4. Give action recommendations for September; every recommendation must map back to the data above.
5. Do a final number check; mark any causes you can't confirm as "to confirm."

Final deliverable: a downloadable Markdown analysis report covering data quality checks, key metrics, anomaly diagnosis, action recommendations, and an acceptance checklist.

Generate new files only; do not modify the input data, and do not upload or publish anything.
```

Three things in this prompt matter enormously:

1. **Spell out "how to compute and what to look at"** so the model can't quietly swap definitions;
2. **Demand numeric evidence for every judgment** to cut down on empty conclusions;
3. **Hard-code "don't modify the original file, don't upload, don't publish"** so it doesn't take one extra step on your behalf.

### What If It Can't Read a Local File

A very real pitfall: if you initially provide a local Mac path, the buddy runs inside its own task environment, can't read it, and will stop and ask you for the file. **The most reliable approach is to upload the CSV directly**; if the file is tiny, you can also paste the raw CSV into "Additional Information" and keep going.

### What It Delivered

From those 8 rows of data, the Data Analyst produced: total sales of 775,000 yuan, total refunds of 36,000 yuan, net sales of 739,000 yuan, 266 total orders, and an overall refund rate of 4.65%. It also flagged that Beijing's refund rate hit 13.64% and that quarterly-plan refunds outpaced annual plans, and noted "data volume too small; August 30–31 data missing" under limitations. The original input was left unmodified.

That's the value of a Work Buddy: you hand the task to a role who knows the field, it executes using methods the profession has settled on, and it comes back to you when materials are missing.

## Option Two: When the Job Spans Several Roles, Use a Work Squad

Now harder: launching an AI meeting assistant called "QingHuiJi," with nothing but a product brief, and the final deliverables are three pieces of copy—a WeChat Official Account article, a Xiaohongshu post, and WeCom group copy—plus visual assets, a 3-day schedule, and a risk list.

Cram all of that onto one person and the content will get written, but factual consistency, platform differences, and visual coherence will inevitably slip. So search the marketplace for the "Hit Content Creation Squad." After summoning the squad, the prompt must make it: **divide the work first, then start**:

```text
[Materials] Upload your own product brief, or replace the file name below with your actual file.

We're about to launch an AI meeting assistant. Read the attached AI-meeting-assistant-launch-brief.md.

Have the squad collaborate on the launch content package. Before formal execution, tell me:
1. Which roles are taking part;
2. What each role owns, which input it uses, and what it delivers;
3. Who is responsible for the single source of truth on facts, and who runs the final review;
4. Which items you need me to confirm.

Once the division of labor is confirmed, produce:
- One unified messaging throughline;
- One editable piece of copy each for the WeChat Official Account, Xiaohongshu, and the WeCom group;
- A visual asset checklist;
- A 3-day launch schedule;
- A fact-check and risk list.

All facts come from the brief only. You must keep "14-day trial," "first 50 teams," and the current capability limits;
Do not invent customer stories, numbers, or user testimonials.
Generate local drafts only—no automatic publishing and no sending messages.
```

The squad first proposed four roles:

| Role | Responsible For |
| --- | --- |
| Creative Director (lead) | Single source of truth on facts; final consistency check and review |
| Hit Marketing Planner | 3-day schedule and risk list |
| Hit Content Specialist | Messaging throughline and editable copy for the three platforms |
| AI Illustrator | Key visual and visual asset list, after the throughline is settled |

The marketing planner and content specialist can start in parallel; the AI illustrator waits for the throughline; finally the creative director pulls everything together and checks it. In the task list you can see each subtask's status: who's in progress, who's waiting on an upstream deliverable—and that is the core difference between a "squad" and "one buddy."

### A Few Things Worth Adding Before the Squad Starts

Based on the brief, the squad asked six follow-up questions: the start date, visual style, account names, brand slogan, and how the first 50 teams would be acquired, among others. Answer like this:

```text
Division of labor confirmed—please proceed.

The schedule starts September 1; visuals should be a clean blue-gray tech look; we don't have a slogan yet;
Don't put account names in the copy; mark how the "first 50 teams" are acquired as "to confirm"—don't invent it.

Keep the 14-day trial, first 50 teams, and current capability limits.
Do not fabricate customer stories, time-savings numbers, or 100% accuracy promises. Local drafts only—no publishing, no messages.
```

When something has no answer yet, just mark it "to confirm." Guessing a QR code, URL, or signup method just to fill out the copy only creates more rework later.

### If the First Draft Has Problems, Make It Rework on the Spot

Here we caught a textbook problem: the content specialist's first draft ended with "all facts come from the brief," but scroll up and it had added "a 30-minute meeting summarized in 1 hour," "4–5 meetings a week," and "14-day free trial"—none of which were in the brief—and even adopted a first-person "hey girls" tone to fake a lived-in voice. **Never rely on the agent's self-declaration during review—check it yourself.** List the problems one by one and have it regenerate:

```text
Delete all personal anecdotes and numbers not provided in the brief—for example "a 30-minute meeting summarized in 1 hour," "4–5 meetings a week," "saved me so much time after trying it"—and change every "14-day free trial" to "14-day trial."

Do not write fake first-person expressions like "hey girls," and don't present interactions the brief doesn't specify as confirmed facts.
Regenerate the copy for all three platforms and do a fact self-check against the brief, item by item.
```

After the rework, the creative director ran another full acceptance pass, and the final delivery was revised copy for the three platforms, 3 sets of key visuals with an asset list, a 3-day schedule, and a risk list.

One honest caveat on boundaries: the squad did not publish to my WeChat Official Account, Xiaohongshu, or group chats, but **the results overview was written into a Feishu cloud document**. When materials involve privacy or trade secrets, ask where things will be stored and who can see them before starting, and check what it actually produced afterward.

## After Running Both Flows, Four Takeaways

1. If the task lives within one professional role, prefer a work **buddy**;
2. If it spans multiple roles with hand-off dependencies, hand it to a work **squad**;
3. A file path is only an address on your computer—if the buddy can't read it, **upload the file** or paste the raw content;
4. Write the prompt's **fact sources, deliverables, and action boundaries** clearly, and have the lead role run a final review.

Once you pick the right tool, the prompt doesn't need to be mystical. Spell out who's responsible, what materials they get, what they deliver, and what's off-limits, and the task becomes far more stable.

Before tools like this, launching a product meant holding a dozen things in your head at once: who writes the article, who makes the images, how to adapt per platform, whether any number was misstated, who wraps it up—on a short-staffed team all of it lands on one person, and the most exhausting part is the constant role-switching. The truly useful thing about work buddies and squads is that they **put responsibility back on the table**: who takes this step, what the next step waits on, who checks at the end. Start with one real, clearly-bounded job, run it once, and you'll naturally know whether next time calls for one buddy or a whole squad.

---

To see how a squad is summoned from scratch: [Multi-Agent (Work Squad) in Practice →](/en/doubaowork/adv-multi-agent)
