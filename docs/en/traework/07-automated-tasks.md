# Automated Scheduled Tasks

Preset tasks that run on schedule, produce results, and need no human babysitting—this is the key feature that turns TraeWork from "moves only when you ask" into "does the work when it's time."

> Official docs: [docs.trae.cn/work_automated-tasks](https://docs.trae.cn/work_automated-tasks)

## Where to Start and How to Create Tasks

Entry point: the "Automation" button at the top of the left panel → the scheduled-tasks management panel (three tabs: Task Templates, Configured, and Execution History; the create button is in the top-right).

Three ways to create a task—pick whichever feels easiest:

**Option 1: Create in a chat** (recommended; supports natural-language schedules)

1. Click "Create in Chat" in the top-right;
2. Enter the task content and schedule (e.g., "9 a.m. on workdays");
3. At the bottom-left of the input box, choose the runtime and where output is stored;
4. Send → the AI parses it and confirms details if needed;
5. Check the task details the AI produced and adjust as needed.

**Option 2: Create manually**—"Create Manually" in the top-right → fill in each field in the dialog → "Create".

**Option 3: Create from a template**—pick a template in the "Task Templates" tab (configuration is preset) → tweak as needed → "Create".

## Key Configuration Items

| Setting | Options |
| --- | --- |
| Run mode | Work / Code (note: cannot be changed after creation) |
| Runtime | Cloud / local (cannot be changed after creation) |
| Trigger | Fixed time (daily/weekly/monthly), interval (minutes/hours/days), custom (natural language; chat creation only) |
| Task content | The full task instructions |
| Output location | Where deliverables are stored (cannot be changed after creation) |

## Four Officially Recommended Scenarios

| Scenario | Example tasks |
| --- | --- |
| Regular codebase maintenance | Security scans, bug hunts, adding test cases, change digests (Code mode) |
| Information gathering and digesting | Industry news, competitor updates, app store review summaries, policy change alerts |
| Brand monitoring | Weekly PR/buzz reports, community discussion tracking, user feedback roundup |
| Periodic reporting | Industry briefings, operations daily reports, key metric monitoring |

A weekly brand-monitoring task you can copy:

```text
Every day at 9:00 a.m., collect public news coverage and social media discussions about
[my company/product] from the past 24 hours. Categorize them as "media coverage /
user feedback / competitor updates," with sources and links noted.
If there are fewer than 3 substantive items, say so instead of padding the report.
Save a Markdown draft of the weekly report to the output/ directory.
```

## Limitations to Remember

1. When creating a task in a chat, the run mode defaults to your current mode and **cannot be changed**;
2. **Once a task is created, its run mode, runtime, and output location cannot be modified**—you have to delete and recreate it;
3. To view execution history, TraeWork's current mode must match the task's run mode;
4. Cloud tasks draw on your account credits; for long tasks, keep an eye on [credit consumption](/en/traework/adv-models-credits).

## Write More Detailed Prompts for Scheduled Tasks

A scheduled task is essentially an **unattended conversation**: when it runs, you're not there to add clarifications. A classic lesson from community testing—the first attempt just said "collect articles into the knowledge base" and failed for missing specifics (where to store, how to authenticate, what to do on failure). After writing the full steps, parameters, and error handling into the instructions, it ran cleanly on the first try.

Writing checklist:

- [ ] State the data source explicitly (which site / which document / which sheet)
- [ ] State the output format and storage path explicitly
- [ ] State exception handling explicitly (what if the data is empty, what if a source fails)
- [ ] Run it once as a manual conversation before turning it into a scheduled task

A complete schedule-plus-push combo: a scheduled task generates the daily report and the [Office Assistant](/en/traework/05-bot-assistant) is bound to a Feishu group—that's a "9 a.m. daily report lands in the group" pipeline. For a hands-on example, see [A WeChat Official Account → Feishu Knowledge Base Pipeline](/en/traework/case-feishu-pipeline).

---

Next: [Computer and Browser Control →](/en/traework/08-computer-browser)
