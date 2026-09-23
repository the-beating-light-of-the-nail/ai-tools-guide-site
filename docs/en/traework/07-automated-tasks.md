---
description: "The way you've used TraeWork until now is that it moves only when you ask. Automated scheduled tasks flip that relationship."
---

# How Do You Set Up Automated Scheduled Tasks? Let the AI Run Itself on Time

The way you've used TraeWork until now is that it moves only when you ask. Automated scheduled tasks flip that relationship: you set the time, and at the appointed hour it runs on its own and produces the result, with nobody watching over it. It keeps working while you sleep.

> Official docs: [docs.trae.cn/work_automated-tasks](https://docs.trae.cn/work_automated-tasks)

## Where to Start and How to Create Tasks

Click "Automation" at the top of the left panel to open the scheduled-tasks management panel. Get oriented first: three tabs—Task Templates, Configured, and Execution History—with the create button in the top-right.

Three ways to create a task—pick whichever feels easiest:

**Option 1: Create in a chat** (recommended; you can state the schedule in plain language)

1. Click "Create in Chat" in the top-right;
2. Enter the task content and schedule (e.g., "9 a.m. on workdays");
3. At the bottom-left of the input box, choose the runtime and where output is stored;
4. Send → the AI parses it and confirms details if needed;
5. Check the task details the AI produced and adjust as needed.

**Option 2: Create manually**—click "Create Manually" in the top-right, fill in each field in the dialog, then click "Create".

**Option 3: Create from a template**—switch to the "Task Templates" tab and pick one (the configuration is already preset), tweak as needed, then click "Create".

## Key Configuration Items

| Setting | Options |
| --- | --- |
| Run mode | Work / Code (note: cannot be changed after creation) |
| Runtime | Cloud / local (cannot be changed after creation) |
| Trigger | Fixed time (daily/weekly/monthly), interval (minutes/hours/days), custom (natural language; chat creation only) |
| Task content | The full task instructions |
| Output location | Where deliverables are stored (cannot be changed after creation) |

Three of those rows deserve your attention: run mode, runtime, and output location are locked the moment the task is created. Changing them means deleting the task and building it again.

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

1. When creating a task in a chat, the run mode defaults to your current mode and **cannot be changed**—even if you spot the problem right away;
2. **Once a task is created, its run mode, runtime, and output location cannot be modified**—you have to delete and recreate it;
3. To view execution history, TraeWork's current mode must match the task's run mode;
4. Cloud tasks draw on your account credits; for long tasks, keep an eye on [credit consumption](/en/traework/adv-models-credits).

## Write More Detailed Prompts for Scheduled Tasks

A scheduled task is essentially an **unattended conversation**: when it runs, you're not there to add clarifications. Community testing shows exactly how you get burned—the first attempt said only "collect articles into the knowledge base" and failed for missing specifics (where to store, how to authenticate, what to do on failure). Once the full execution steps, parameters, and error handling went into the task description, it ran cleanly on the first try.

Writing checklist:

- [ ] State the data source explicitly (which site / which document / which sheet)
- [ ] State the output format and storage path explicitly
- [ ] State exception handling explicitly (what if the data is empty, what if a source fails)
- [ ] Run it once as a manual conversation before turning it into a scheduled task

A complete schedule-plus-push combo: combine this with the [Office Assistant](/en/traework/05-bot-assistant) bound to a Feishu group and you get a "9 a.m. daily report lands in the group" pipeline. For a hands-on example, see [A WeChat Official Account → Feishu Knowledge Base Pipeline](/en/traework/case-feishu-pipeline).

## FAQ

**Can I change the schedule whenever I want?**
The time and trigger can be changed freely. But run mode, runtime, and output location lock at creation—those three mean delete and rebuild.

**What's the difference between creating in chat and creating manually?**
In a chat you can set the schedule in plain language ("9 a.m. on workdays") and the AI translates it into configuration; manually you fill in every field yourself. If you want the easy route, use the chat.

**Why did my first attempt fail when I only wrote one line?**
A scheduled task is an unattended conversation with no one beside it to fill in the gaps. Leave out where to store things, how to authenticate, or what to do on failure, and it stalls. Spell out the steps and exception handling and it usually runs the first time.

**What should I watch for when checking execution history?**
Your current run mode has to match the task's run mode, or you won't see the history. Switch to the wrong mode and the history comes up empty.

**Do long tasks burn through credits?**
Yes. Cloud tasks bill against your account credits, so keep an eye on [credit consumption](/en/traework/adv-models-credits) for long jobs. Get it working manually before hanging it on a schedule, or you may pay for repeated failures while nobody is watching.

---

Next: [Computer and Browser Control →](/en/traework/08-computer-browser)
