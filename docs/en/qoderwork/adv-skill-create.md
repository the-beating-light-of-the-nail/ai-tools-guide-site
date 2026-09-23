---
description: "You're writing the same task brief for the third time this week. Weekly report format, case analysis flow, store daily—every time you start from scratch, and every time something gets missed. That third pass is the signal: this should be a skill."
---

# Writing the Same Brief for the Third Time? Turn It Into a Skill—/create-skill Makes It a Conversation

You know the moment: the same task brief, and this is the third time you've written it this week. Weekly report format, case analysis flow, store daily report—every time you describe it from scratch, and every time something gets missed. That third pass is the signal it should be a skill. QoderWork has lowered the bar to "just say it in plain words": the built-in `/create-skill` command talks you through it and produces a SKILL.md you can trigger with one phrase from then on.

> Official docs: [skills](https://docs.qoder.com/zh/qoderwork/skills) | field material from the official user-case library.

## A Real Sample: The Sales Weekly Report Skill

The complete creation process as tested by the community (from a CSDN guide). You'd do it like this:

1. Type `/create-skill` in the conversation;
2. Describe the trigger phrase and workflow:

```text
Create a "Sales Weekly Report" skill:
Trigger phrase: generate this week's sales report
Steps: read sales-data.xlsx in the sales/ directory → compute the
week-over-week growth rate ((this week - last week) / last week × 100%) →
generate a Top 5 product bar chart → produce a Word report from a fixed
template and save it to the reports/ directory.
Dependencies: Excel processing, Python-Matplotlib charting.
```

3. QoderWork generates the SKILL.md and stores it in `~/.qoderwork/skills/`—ready to call up any time;
4. From then on, in any new task, type `/` and pick "Sales Weekly Report", or just say "generate this week's sales report" to trigger it.

An even more thorough asset-building sample (official user case, a lawyer)—you can package your own work the same way:

```text
Please package the case-analysis workflow we just did into a Skill named
"Commercial Dispute Case Analysis":
Input: the case-materials folder (complaint, contracts, supplementary
agreements, WeChat screenshots, transfer receipts, lawyer's letters);
Output: a case timeline + points of dispute + evidence-chain analysis
(tagged strong/medium/weak) + a litigation strategy report;
The analysis framework is fixed; the content is generated dynamically from
each case's materials.
```

Twenty years of practice becomes a standardized, reusable tool for the team: juniors generate in one click, partners review.

## Quality Points for SKILL.md

When you review that first draft `/create-skill` hands you, check these six things before saving:

- [ ] **Make the trigger conditions specific**: "when the user asks for a weekly report / data summary", not "handle data";
- [ ] Avoid trigger phrases that clash with other skills (conflicts prevent triggering);
- [ ] Make steps verifiable: "step one: check whether there are 7 files; if fewer, ask first";
- [ ] Give an output sample: paste what the desired result should look like;
- [ ] Declare boundaries: state what it will not do ("do not modify the original CSV", "no legal conclusions");
- [ ] List dependencies clearly (note when Excel/Python/network access is needed).

## The Acquire-and-Share Ecosystem

| Channel | Notes |
| --- | --- |
| Search in conversation | "find me a skill for X" → find-skills recommends, one-click install |
| Skill marketplace | Extensions → Skills, browse the market |
| Open-source community | Paste a GitHub repo link to pull automatically, e.g. [lexburner/skill-collection](https://github.com/lexburner/skill-collection) (qoder-ppt, infographics, and more) |
| Manual upload | "Install Skill" and upload SKILL.md (the zip root must contain SKILL.md) |
| Sharing | Share icon on the Skills page → link (**valid for 24 hours**) → recipient installs in one click |

## From Skill to Team Standard

To lock a best practice in for your team, the route is: **get the best practice running with a Skill → package it into an [Expert Kit](/en/qoderwork/05-skills) → roll it out team-wide**. To judge whether a type of work deserves a skill, one sentence suffices—"pick work you've repeated at least twice in the past week".

> Cross-tool perspective: the SKILL.md spec is highly portable across WorkBuddy / TraeWork / QoderWork—learn it once, use it in all three. For the deep methodology (distilling books and videos into skill sets), see the WorkBuddy section's [Building Skills: Knowledge Distillation](/en/workbuddy/adv-build-skill/).

## FAQ

**I can't code. Can I still make a skill?**
Yes. Say the trigger phrase and the steps out loud via `/create-skill` and it writes the SKILL.md. You don't write a line of code.

**Can a skill I make conflict with my existing ones?**
Yes, if the trigger phrases are too similar. Write specific trigger conditions and steer clear of phrasing other skills already use, and they won't fight over the trigger.

**How does my team use a skill I built?**
Package it into an Expert Kit, or generate a share link on the Skills page and send it over—they install in one click.

**Does a share link stay valid forever?**
No—about 24 hours. Fine for passing something to a colleague on the spot; for anything long-term, use a kit or the marketplace.
