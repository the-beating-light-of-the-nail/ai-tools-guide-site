# How to Build Scheduled Tasks That Deliver Consistently

Scheduled tasks are best suited to work that is **repetitive, rule-based, and easy to verify**: news briefings, weekly report drafts, competitor monitoring all qualify. Conversely, never hand unattended workflows anything like payments, publishing, or data deletion.

## Two Ways to Create a Task

**Manual configuration**: open "Scheduled Tasks" on the left → New, then fill in the title, task description, schedule, and run environment.

**Create by conversation**: just tell Doubao Work in the chat box to set one up for you, for example:

```text
Every day at 8:30, search for major AI product and Agent developments from the past 24 hours.
Keep at most 8 items; merge duplicates of the same event; each item includes when it happened, two sources, an impact assessment, and an angle worth writing about.
If sources are insufficient or fewer than 5 solid items are found, stop generating the formal briefing and return the reason for failure plus retry suggestions.
Don't pad the count with old news, and don't send or publish anything automatically.
```

## Five Checks Before Saving

**Time range, time zone, data sources, failure handling, run environment.** If you choose "local computer" as the run environment, make sure the machine is on and online at execution time.

## Three Rules to Keep It Running Reliably

1. **Run it manually first, then schedule it**: execute the first run in a regular work task, and only save it as a scheduled task once the output passes;
2. **Spot-check regularly**: review the output periodically after it runs, and update the prompt when the rules change;
3. **Clean up promptly**: don't let a substandard old task quietly run in the background for six months—that's just burning tokens for nothing.

## In Practice: A Usable News Briefing Every Morning

News aggregation fears two things: too much information, so important items drown; and notifications too noisy, so everyone eventually tunes them out. Run it once manually, then save it as a scheduled task, and you'll receive a consistently structured briefing at a fixed time.

**Pipeline design** (works for tracking news, open-source projects, papers, policy, and competitors alike):

1. **Collect**: define the topic, time range, source scope, and language;
2. **Deduplicate**: merge the same event, keeping the original and authoritative sources;
3. **Filter**: set thresholds for relevance, importance, and item count;
4. **Summarize**: say what happened, why it matters, and who should read it;
5. **Verify**: keep links, publication dates, and open questions for key facts;
6. **Output**: use a fixed format so you're not re-laying it out every day.

**Test it once first** (don't set it to run automatically on the first go):

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

**Once it passes, save it as a scheduled task**: "Scheduled Tasks" on the left → "New," and fill in the title, full task description, repeat cycle, exact time, model, and run environment. With "local computer," make sure the machine is on and online at execution time; start with a lower frequency and observe a few runs before adjusting.

If you want results sent to a Feishu group, email, or another system, **you must first confirm the corresponding connector is authorized**, and the task description must spell out the destination, duplicate-send checks, and any human-confirmation requirements. Without a connector, let results stay inside the Doubao Work task—don't promise automatic delivery.

## Two Templates You Can Adapt Directly

**GitHub Project Briefing**

```text
Every day, compile open-source AI projects from the past 24 hours worth attention.
Prioritize project repositories, release notes, and official documentation; don't treat secondhand reposts as the sole source.
Categorize as "new projects, major updates, developer tools," at most 8 items.
Each item includes the repository link, main purpose, latest update, license info, and who it suits.
Mark items as "unverified" if activity or license can't be confirmed.
Don't recommend based on star count alone, and never install or run code automatically.
```

**AI Industry Briefing**

```text
Every day, compile AI model, product, open-source, paper, and industry developments from the past 24 hours.
At most 8 items, ordered by importance.
Each item includes an event summary, who is affected, the original source, publication date, and link.
Major model releases, pricing, or policy changes must cite official sources first and be cross-checked against secondhand coverage.
Don't repeat the same event; when information conflicts, present both side by side.
End with "today's three big stories" and "still needs verification."
```

---

Next up: when to bring in an AI team—[Work Buddy or Work Squad? →](/en/doubaowork/adv-buddy-or-squad)
