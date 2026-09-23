---
description: "You open the same pages every day, gather roughly the same information, format it the same way, and send it to the same people. The work isn't hard — but it eats your most expensive resource: time. And when you get busy you forget it; when someone else takes over, it drifts."
---

# Chapter 10: Doing the Same Thing Every Morning? Let WorkBuddy Run It on a Schedule

You open the same pages every day, gather roughly the same information, format it the same way, and send it to the same people. The work isn't hard — but it eats your most expensive resource: time. And when you get busy you forget it; when someone else takes over, it drifts. WorkBuddy automation turns that "fixed schedule, similar steps, checkable output" work into Agent tasks that run on time by themselves. The laziness you've been wanting to get away with is exactly what it's built to carry.

## Why WorkBuddy Can Automate This

Traditional automation usually asks you to code every step up front: which system to open, which button to click, which column to read, how to branch on exceptions.

WorkBuddy's difference is combining "scheduled dispatch" with the Agent's understanding, tool-calling, and file-processing abilities. You don't have to program every detail — but you do need to state the goal, inputs, boundaries, and expected results clearly. Draw the boundaries and let it fill in the rest.

Automation settings are stored in the local client, including the task name, prompt, schedule, working directory, and execution state. At the scheduled time, WorkBuddy launches the Agent task under your current logged-in identity, calling the model, Skills, MCP, or connectors per the prompt, and completes the queries, summaries, and file handling in the designated working directory.

What actually keeps a task running reliably comes down to five elements you need to watch: a clear trigger time, a repeatable input source, a sufficiently specific Prompt, a fixed and controlled working directory, and acceptance criteria that can judge success or failure. Miss any one of them and the task can drift.

## What Automation Is Good For

The most obvious use is handing over the work you repeat daily, weekly, or monthly. The value isn't just fewer mouse clicks — it's that tasks don't get forgotten when you're busy, and the way they're executed doesn't vary depending on who happens to do them. Check the table below and see which bucket your work falls into:

| Scenario | What can be automated | Typical deliverables |
|-|-|-|
| News & intelligence | Scheduled searches for industry news, policy updates, competitor moves, deduplicated and summarized | Daily briefings, risk alerts, source lists |
| Daily & weekly reports | Aggregate tasks, calendars, documents, and data changes into fixed-structure reports | Daily reports, weekly reports, project progress sheets |
| Data & spreadsheets | Collect files, merge spreadsheets, clean fields, check for missing values and outliers | Reconciliation sheets, exception lists, trend charts |
| File management | Archive by date and project, batch rename, extract text from PDFs or images | Archive directories, indexes, processing logs |
| Content operations | Collect topic ideas, generate title candidates, organize materials, draft posts | Topic banks, content drafts, cover-art request lists |
| Knowledge management | Periodically organize bookmarks, meeting minutes, and ideas; add tags and sources | Knowledge cards, weekly reviews, to-digest lists |
| Product & engineering | Inspect logs, summarize issues, check dependencies and build results | Inspection reports, defect summaries, upgrade suggestions |
| Personal affairs | Generate study plans, periodic reviews, booking or reminder tasks | Study checklists, reminders, execution logs |

## Which Tasks to Automate First

Use these six questions to judge for yourself. The more "yes" answers, the better suited the task is for your first batch of automations:

1. **Does it repeat?** It happens at least weekly, not a one-off need;
2. **Are inputs stable?** The folders, web pages, spreadsheets, or connector sources are relatively fixed;
3. **Are steps similar?** The content varies, but the processing is basically the same;
4. **Is the result verifiable?** You can check counts, fields, time ranges, sources, or whether files were generated;
5. **Is failure recoverable?** It can be re-run after a failure without immediate irreversible damage;
6. **Are permissions controllable?** You can restrict the working directory, account, and tools allowed.

Your best starting point usually isn't "run the whole company for me" — it's "at 8 AM every day, collect 10 AI industry news items, dedupe, keep links, and generate a Markdown briefing in a designated directory." The clearer the scope, the easier it is to spot problems and improve from there.

## From One Sentence to a Running Task

Before you create an automation, don't rush to click Add. Rewrite your verbal need into a small task description first. A reliable Prompt must at least answer: when to run, what to read, how to process, where to output, what counts as done, what to do on failure, and which actions are forbidden.

```text
Task name: Daily AI Industry Briefing
Trigger: Every day at 08:00, timezone Asia/Shanghai
Working directory: automation/ai-daily

Inputs:
- Search AI product, model, and industry news from the past 24 hours
- Use only public sources that are accessible and preserve links

Processing rules:
1. Merge duplicate events and organize them into three categories: product, technology, business
2. Each entry includes a title, a 100-word summary, source, publish time, and link
3. Anything with an unverifiable publish time or source goes under "To verify" — never fabricate

Output:
- Save as YYYY-MM-DD-ai-daily.md
- At most 10 items in the body, with a source list at the end
```

## Creating an Automated Task

Open the "Automation" page in WorkBuddy to see scheduled tasks and execution history. After clicking "Add," you'll configure the task name, workspace, prompt, model & skills, schedule, and whether to push the finished result to the WorkBuddy Mini Program. Fill in the table below one row at a time:

| Setting | Purpose | Tips |
|-|-|-|
| Name | Distinguish between automations | State the subject and frequency, e.g. "Daily AI Briefing" |
| Workspace | Constrain the execution directory and where files are saved | Use a separate directory per automation to avoid overwrites |
| Prompt | Describe the goal, steps, output, and boundaries | Use the task template above — don't just write one slogan |
| Model & skills | Determine the available understanding and execution capabilities | Select only the Skills and connectors the task truly needs |
| Schedule | Set frequency and active dates | Trial-run at low frequency first, then ramp up |
| Push to Mini Program | Review results on your phone when done | Before enabling, confirm which results sync to the cloud over a secure link |

Click "Automation":

![The Automation entry on the left](/workbuddy/10-automation/assets/001_image_RklAba93No.png)

Then click "Add Automation," and you can define your own task:

![Clicking Add Automation to define a task](/workbuddy/10-automation/assets/002_image_MhojbPRsOo.png)

For example, a daily AI news push, scheduled to send at 8 AM:

![Daily AI news digest scheduled for 8 am](/workbuddy/10-automation/assets/003_image_Ff6fbYuGoo.png)

## Don't Want to Write a Prompt from Scratch? Start with a Template

The official task templates cover common scenarios like news digests, weekly reports, health checkup bookings, and study plans. Pick the closest one. A template's value is providing the basic fields and task structure — but it isn't the final answer. After selecting one, you should still adjust the data sources, time ranges, output locations, acceptance criteria, and forbidden actions. Don't copy it straight across.

![Official task templates: news digest, weekly report and more](/workbuddy/10-automation/assets/004_%E8%87%AA%E5%8A%A8%E5%8C%96-%E4%BB%BB%E5%8A%A1%E6%A8%A1%E6%9D%BF_FYNwbDWqbo.png)

## More Automation Scenarios Worth Trying

Here are a few more you can start from — pick one, tweak it, and put it to work:

| Task | Trigger | Suggested human check to keep |
|-|-|-|
| Weekly report rollup | Every Friday, read this week's tasks, calendar, and deliverables | Confirm progress and risk wording before sending |
| Sales daily report | Every day, aggregate new customers and follow-ups from CRM or spreadsheets | Verify amounts, customer status, and owners |
| Expense & invoice organizing | Monthly, read receipts and reimbursement sheets from a designated directory | Finance checks tax amounts, duplicate receipts, and attribution before submission |
| Self-media topic radar | Daily, collect trending topics, industry discussions, and comment-section questions | Human judgment on brand positioning and whether to ride a trend |
| Knowledge base weekly review | Weekly, organize new notes, bookmarks, and meeting minutes | Confirm categories, sources, and whether items are worth keeping long-term |
| Project risk inspection | Daily, check delayed tasks, build results, and error logs | Severe alerts go to the owner for confirmation |
| Competitor price monitoring | Scheduled reads of public pages or authorized APIs | Pause and fix parsing rules when page structures change |
| Study plan review | Daily reminders, weekend summary of completion | Adjust next week's plan based on actual energy |

## FAQ

**I have zero coding background — can I still set up automations?**
Yes. You don't write code; you state the goal, inputs, boundaries, output, and acceptance criteria, then fill in the task template above. Nail down those three things — when it triggers, what it reads, what it produces — and refine the rest as it runs.

**What kind of work is best for a first automation?**
Pick something that happens at least weekly, with fixed inputs, similar steps, and a verifiable result. A good starting point is "collect 10 industry news items at 8 AM and generate a briefing" — small scope, visible output. Don't try to automate an entire business line on day one.

**If a task fails, will something blow up?**
Not if you picked it using those six questions — failure recoverable, no irreversible damage, permissions scoped to a directory. Automation configs live on your machine, so you tweak and re-run.

**Is pushing results to the Mini Program safe?**
Before you enable it, confirm which results sync to the cloud over a secure link. Don't push sensitive deliverables; ordinary briefings and weekly reports are fine to read on your phone.

---

Next up: understand the design logic behind it — [Understanding the AI Work System in One Chapter →](/en/workbuddy/11-ai-work-system/)
