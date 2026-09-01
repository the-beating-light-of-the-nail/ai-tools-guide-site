# Chapter 10: WorkBuddy Automated Tasks

What really wears people down usually isn't the big creative undertakings — it's opening the same pages every day, gathering similar information, formatting it the same way, and sending the results to the same people. The value of WorkBuddy automation is turning this "fixed-time, similar-steps, checkable-output" work into Agent tasks that run on repeat.

## Why WorkBuddy Can Automate This

Traditional automation requires a person to code every step in advance: which system to open, which button to click, which column to read, how to branch on exceptions.

WorkBuddy's difference is combining "scheduled dispatch" with the Agent's understanding, tool-calling, and file-processing abilities. You don't have to program every detail — but you do need to state the goal, inputs, boundaries, and expected results clearly.

Automation settings are stored in the local client, including the task name, prompt, schedule, working directory, and execution state. At the scheduled time, WorkBuddy launches the Agent task under your current logged-in identity, calling the model, Skills, MCP, or connectors per the prompt, and completes the queries, summaries, and file handling in the designated working directory.

What actually keeps a task running reliably comes down to five elements: a clear trigger time, a repeatable input source, a sufficiently specific Prompt, a fixed and controlled working directory, and acceptance criteria that can judge success or failure.

## What Automation Is Good For

The most obvious use is handing WorkBuddy the work you repeat daily, weekly, or monthly. The value isn't just fewer mouse clicks — it's that tasks don't get forgotten when you're busy, and the way they're executed doesn't vary depending on who happens to do them.

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

Use these six questions to decide. The more "yes" answers, the better suited the task is for your first batch of automations:

1. **Does it repeat?** It happens at least weekly, not a one-off need;
2. **Are inputs stable?** The folders, web pages, spreadsheets, or connector sources are relatively fixed;
3. **Are steps similar?** The content varies, but the processing is basically the same;
4. **Is the result verifiable?** You can check counts, fields, time ranges, sources, or whether files were generated;
5. **Is failure recoverable?** It can be re-run after a failure without immediate irreversible damage;
6. **Are permissions controllable?** You can restrict the working directory, account, and tools allowed.

The best starting point usually isn't "run the whole company for me" — it's "at 8 AM every day, collect 10 AI industry news items, dedupe, keep links, and generate a Markdown briefing in a designated directory." The clearer the scope, the easier it is to spot problems and improve iteratively.



## From One Sentence to a Running Task

Before creating an automation, rewrite your verbal need into a small task description. A reliable Prompt must at least answer: when to run, what to read, how to process, where to output, what counts as done, what to do on failure, and which actions are forbidden.

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

Open the "Automation" page in WorkBuddy to see scheduled tasks and execution history. After clicking "Add," you'll configure the task name, workspace, prompt, model & skills, schedule, and whether to push the finished result to the WorkBuddy Mini Program.

| Setting | Purpose | Tips |
|-|-|-|
| Name | Distinguish between automations | State the subject and frequency, e.g. "Daily AI Briefing" |
| Workspace | Constrain the execution directory and where files are saved | Use a separate directory per automation to avoid overwrites |
| Prompt | Describe the goal, steps, output, and boundaries | Use the task template above — don't just write one slogan |
| Model & skills | Determine the available understanding and execution capabilities | Select only the Skills and connectors the task truly needs |
| Schedule | Set frequency and active dates | Trial-run at low frequency first, then ramp up |
| Push to Mini Program | Review results on your phone when done | Before enabling, confirm which results sync to the cloud over a secure link |

Click "Automation,"

![](/workbuddy/10-automation/assets/001_image_RklAba93No.png)

"Add Automation," and you can customize your task

![](/workbuddy/10-automation/assets/002_image_MhojbPRsOo.png)

For example, a daily AI news push, scheduled for 8 AM

![](/workbuddy/10-automation/assets/003_image_Ff6fbYuGoo.png)



## Don't Want to Write a Prompt from Scratch? Start with a Template

The official task templates cover common scenarios like news digests, weekly reports, health checkup bookings, and study plans. A template's value is providing the basic fields and task structure — but it isn't the final answer. After selecting one, you should still adjust the data sources, time ranges, output locations, acceptance criteria, and forbidden actions.

![](/workbuddy/10-automation/assets/004_%E8%87%AA%E5%8A%A8%E5%8C%96-%E4%BB%BB%E5%8A%A1%E6%A8%A1%E6%9D%BF_FYNwbDWqbo.png)



## More Automation Scenarios Worth Trying

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
