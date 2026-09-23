---
description: "You've collected a pile of jobs you do every day that come out nearly the same each time: scan AI news in the morning, draft the weekly report, watch whether a competitor has moved."
---

# Will Your Scheduled Task Backfire? Set It Up Right and Get One Usable Briefing Every Morning

You've collected a pile of jobs you do every day that come out nearly the same each time: scan AI news in the morning, draft the weekly report, watch whether a competitor has moved. Doesn't it wear you out? Run them by hand and one miss breaks the chain, so the next day you're backfilling from scratch. Doubao Work's "scheduled tasks" take that grind off your hands: you set the rules, it works at the appointed time, and the result lands back in your hands. You don't have to sit and watch it, and you don't have to worry about sleeping through it—when the time comes, it starts on its own.

One thing up front, though: not everything should be handed over.

## Is This Job Even Right for a Scheduled Task?

Scheduled tasks fit work that is **repetitive, rule-stable, and easy to verify**: news briefings, weekly report drafts, competitor monitoring all qualify. The reverse is just as true—don't hand payments, publishing, or data deletion to a workflow nobody is watching. When something goes wrong there, no one is around to hit stop, and you're the one who pays. The test is one line: if the rules can be written clearly and the result can be read clearly, it's safe to hand over.

## Two Ways to Create a Task

### Manual setup

Open "Scheduled Tasks" on the left → New, and fill in the title, task description, schedule, and run environment. This route suits you best when you already know exactly what you want—filling out a form step by step is the least thinking.

### Create by conversation

If filling forms annoys you, just tell Doubao Work in the chat box and let it build the task. Say something like this:

```text
Every day at 8:30, search for major AI product and Agent developments from the past 24 hours.
Keep at most 8 items; merge duplicates of the same event; each item includes when it happened, two sources, an impact assessment, and an angle worth writing about.
If sources are insufficient or fewer than 5 solid items are found, stop generating the formal briefing and return the reason for failure plus retry suggestions.
Don't pad the count with old news, and don't send or publish anything automatically.
```

The more specifically you describe it, the closer the task it builds sits to what you actually need—and the less rework you face later.

## Five Checks Before Saving

Before you hit save, go through these five one at a time: **time range, time zone, data sources, failure handling, run environment**. If you pick "local computer," the machine also has to be on and online at execution time—otherwise it's ready to run at the appointed hour and the computer is asleep, and the whole thing was for nothing. Time zones trip people up especially easily: you're in one country, the data source is in another, and a few hours of difference delivers your briefing at the wrong moment.

## Three Rules to Keep It Running Reliably

### Run it manually first, then schedule it

Run the first pass by hand in a regular work task, and save it as a scheduled task only once the output passes. Don't schedule on the first go, or you'll have something running wrong every single day.

### Spot-check regularly

Once it's running, review the output now and then, and update the prompt when the rules change. An automated flow isn't finished the moment you set it—an occasional glance is what lets you relax.

### Clean up promptly

Don't let one substandard old task grind away in the background for six months—that's just burning tokens for nothing. When a task stops earning its keep, delete it.

## In Practice: A Usable News Briefing Every Morning

News aggregation fails in two places: too much information, so the important items drown; and notifications so noisy that everyone eventually tunes them out. Run it once by hand, then save it as a scheduled task, and you'll get a consistently structured briefing at a fixed time without rebuilding the frame every day.

### Pipeline design

The pipeline below works for tracking news, open-source projects, papers, policy, and competitors alike. Think each step through before moving to the next.

#### Collect

Fix the topic, time range, source scope, and language.

#### Deduplicate

Merge the same event, keeping the original and authoritative sources.

#### Filter

Set thresholds for relevance, importance, and item count.

#### Summarize

Say what happened, why it matters, and who should read it.

#### Verify

Keep links, publication dates, and open questions for key facts.

#### Output

Use a fixed format so you're not re-laying it out every day.

### Test it once first

Don't set it running automatically yet. Run the prompt below once as a normal task and see whether what comes out is to your taste:

```text
Compile the important news related to [TOPIC] from the past 24 hours.
Use only public sources you can access and whose original links are preserved.

Output at most 10 items, each including:
- Headline
- A summary under 100 words
- Why it deserves attention
- Source, publication date, and link

Put anything whose source or date you can't confirm under "unverified"—don't fabricate.
```

Once you're happy with the result, move to the next step.

### Once it passes, save it as a scheduled task

Go to "Scheduled Tasks" on the left → "New," and fill in the title, full task description, repeat cycle, exact time, model, and run environment. With "local computer," make sure the machine is on and online at execution time; start at a lower frequency, watch a few runs, then adjust once you're confident.

If you want results sent to a Feishu group, email, or another system, **you must first confirm the corresponding connector is authorized**, and the task description must spell out the destination, duplicate-send checks, and any human-confirmation requirements. Without a connector, let results stay inside the Doubao Work task—don't promise automatic delivery.

## Two Templates You Can Adapt Directly

Both prompts below work if you just copy them and change a few details. No need to write from scratch.

### GitHub Project Briefing

```text
Every day, compile open-source AI projects from the past 24 hours worth attention.
Prioritize project repositories, release notes, and official documentation; don't treat secondhand reposts as the sole source.
Categorize as "new projects, major updates, developer tools," at most 8 items.
Each item includes the repository link, main purpose, latest update, license info, and who it suits.
Mark items as "unverified" if activity or license can't be confirmed.
Don't recommend based on star count alone, and never install or run code automatically.
```

### AI Industry Briefing

```text
Every day, compile AI model, product, open-source, paper, and industry developments from the past 24 hours.
At most 8 items, ordered by importance.
Each item includes an event summary, who is affected, the original source, publication date, and link.
Major model releases, pricing, or policy changes must cite official sources first and be cross-checked against secondhand coverage.
Don't repeat the same event; when information conflicts, present both side by side.
End with "today's three big stories" and "still needs verification."
```

## FAQ

**Will a scheduled task send things out behind my back while I'm away?**
It won't act on its own—but writing actions like publishing, payment, or deleting data into a task is high risk, so don't let an unattended flow touch them. Keep results inside the Doubao Work task and send them yourself once you've looked. That's the safe way.

**Should I pick local computer or cloud execution?**
Pick "local computer" and the machine has to be on and online at the moment of execution, or nothing runs. If you shut down often, don't use it—choose something that stays online instead.

**What if the task produces garbage?**
Review the output regularly and update the prompt when the rules change. If an old task isn't up to standard, don't let it grind away in the background for half a year burning tokens—clear it out.

**Can it send to a Feishu group automatically if the connector isn't authorized?**
No. To send results to a Feishu group, email, or another system, you must first confirm the connector is authorized, and the task description has to spell out the destination, duplicate-send checks, and human-confirmation requirements. If it isn't authorized, don't promise automatic delivery.

**How often should I set it to run?**
Start at a lower frequency, watch a few runs, then raise it once the results hold up. Don't crank it to maximum on day one—if it goes wrong, you won't have time to stop it.

---

Next up: when to bring in an AI team—[Work Buddy or Work Squad? →](/en/doubaowork/adv-buddy-or-squad)
