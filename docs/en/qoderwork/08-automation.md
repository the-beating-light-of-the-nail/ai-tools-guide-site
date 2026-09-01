# Scheduled Tasks: It Runs Itself When the Time Comes

The official positioning in one line: "scheduled tasks take QoderWork from 'acting only when you ask' to 'acting on its own when the time comes'."

> Official docs: [docs.qoder.com/zh/qoderwork/scheduled-tasks](https://docs.qoder.com/zh/qoderwork/scheduled-tasks)

## Execution Model

At the scheduled time → a new conversation task is created automatically → it runs the prompt you wrote → the result is saved in that conversation. Scheduled tasks can call MCP tools, use connectors (browser automation, native macOS apps), run skills, and read/write local files—**anything a manual task can do, a scheduled task can do too**.

## Two Ways to Create One

**Option 1: natural language in a conversation** (recommended)

Just state the time plus the task in the conversation; the AI infers the frequency, time, and content automatically—no cron expressions needed. All of these are understood:

```text
Every 3 hours ...
On the last business day of each month ...
Every Tuesday and Thursday at 2 p.m. ...
```

**Option 2: create manually from the panel**

Left navigation "Scheduled Tasks" → "+ New Scheduled Task" at the top right → fill in → save, and it takes effect.

## Six Schedule Types

| Frequency | Good for |
| --- | --- |
| One-off (runs once at a set date and time) | Meeting prep, deadline checks, timed sending |
| Interval (every N hours/days) | Price monitoring, progress polling |
| Hourly | Monitoring alerts, service checks |
| Daily | Morning briefings, data reports |
| Weekly | Weekly report drafts, competitor tracking |
| Monthly | Monthly analysis, bill consolidation |

Other settings: task name, task prompt, working folder (optional, but recommended for a stable context), and attachments (optional).

## Managing and Debugging

- The toggle at a card's top left starts/stops it;
- The "..." menu: **Run Now** (for debugging or catching up) / Delete / Edit;
- Run history status: success / running / failed.

## Limitations You Must Know

1. **Scheduled by the local desktop client**: execution follows your computer's system timezone; **a sleeping or powered-off computer can't trigger anything**—for important tasks, turn on "Keep system awake" (toggle at the top right of the Scheduled Tasks page);
2. **Missed runs are not replayed automatically**; use "Run Now" in the run history to catch up manually;
3. Each run creates an independent conversation and **consumes Credits just like a manual one**;
4. Prerequisites for browser automation: the browser connector is enabled and Chrome is running; an expired login on the target site will fail the run.

## A Prompt-Writing Checklist for Scheduled Tasks

For unattended conversations, the more detailed the prompt, the more reliable the run:

- [ ] State the data source precisely (which file / which web page / which system)
- [ ] State the output format and storage location precisely ("output Markdown to the reports/ directory")
- [ ] State the judgment criteria precisely ("flag any month-over-month drop over 20%")
- [ ] State the error handling precisely ("if the data is empty, say so—don't force it")
- [ ] **Run it manually once, tune the prompt, then solidify it**

A complete template:

```text
Task name: Daily Operations Morning Briefing
Time: 9:00 a.m. every business day
Prompt: Read yesterday's operations data files in the data/ directory and
generate a morning briefing:
1. Key metrics summary (sales, order volume, refund rate) with
   month-over-month changes
2. Highlight any metric moving more than ±20% month-over-month in yellow and
   suggest possible causes (if the data can't explain it, mark as "to be
   verified")
3. Output Markdown to reports/{date}-briefing.md and push it to the
   "Operations" DingTalk group
```

Pushing to IM requires [IM Channels](/en/qoderwork/07-im-channels) to be configured—scheduled tasks + IM is QoderWork's golden automation combo.

For advanced play (turning "run this" into a one-phrase trigger), see the [E-commerce Daily Report Case](/en/qoderwork/case-browser) and [Creating Skills Through Conversation](/en/qoderwork/adv-skill-create).
