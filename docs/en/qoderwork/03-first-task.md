---
description: "You're staring at the input box, cursor blinking. You already have the material—a sales spreadsheet, a few scattered documents—but you have no idea what to type first. Copy it into a chat window and write it yourself? That just puts you back on the old road, doing the work the AI was supposed to do."
---

# How Do You Hand QoderWork Its First Job? Describe It, Wait for the File, Three Steps to a Working Loop

You're staring at the input box, cursor blinking. You already have the material—a sales spreadsheet, a few scattered documents—but you have no idea what to type first. Copy it into a chat window and write it yourself? That just puts you back on the old road, doing the work the AI was supposed to do.

This chapter lays out the QoderWork loop in full: **describe the task → watch it run → collect the deliverable**. Run one job end to end and you'll see how it differs from a chatbot.

## Five Steps to Create a Task

You're creating a new task—follow these five steps:

1. **Describe the task**: write outcome-oriented prompts—say "what you want to end up with", not "which steps to follow";
2. **Pick a workbench**: bottom left of the input box, "General" by default (there are also three vertical workbenches for design, slides, and writing—see [The Three Workbenches](/en/qoderwork/adv-workbenches));
3. **Pick a model**: model selector at the bottom right (see below);
4. **Pick a working folder** (optional): let the AI read and write a local folder directly—see [Working Folders](/en/qoderwork/04-files);
5. Send.

Here's a task that works well for your first run. Paste it in, change the filename, and send:

```text
Analyze the sales-data.csv I uploaded: explain what each field means,
compute and rank sales by category,
and produce an Excel summary sheet plus 3 conclusions.
Rules: figures must match the source file; mark anything unverifiable as "to be confirmed".
```

## Three Entry Points for Enriching Context

However clearly you describe it, attaching the material beats writing about it. Use the three entry points like this:

| Entry point | How | Best for |
| --- | --- | --- |
| **+ button** | Add from the menu: expert kits, skills, connectors, files | Uploading attachments, attaching capabilities |
| **@ reference** | Type @ to reference existing objects: kits, past tasks, scheduled tasks, files | Linking to existing content |
| **/ invoke** | Type / to invoke skills and commands (xlsx, pptx, pdf, find-skills, etc.) | Calling something out by name |

The official best-practice doc puts it plainly: "**Tasks with the right references and attachments almost always outperform a long paragraph of description.**" So if you have the file in hand, attach it with @ or + first.

## Choosing a Model

When you pick a model, use this table. Don't overthink it day to day:

| Tier | Best for | Cost |
| --- | --- | --- |
| Flagship | Complex reasoning, high-stakes reports, multi-file analysis | Highest |
| Advanced | Demanding flagship projects that need balance | Higher |
| Standard | Everyday tasks, balancing speed and quality—**plenty for most scenarios** | Medium |
| Qwen3.7-Max / Plus | The Qwen series: Max for advanced reasoning, Plus for fast, cheap daily work | Varies |

Two key mechanisms you should know:

- **Switch anytime, effective immediately**: you can change models mid-task without losing context. The official example playbook: standard tier to collect data → flagship tier for deep analysis → standard tier to format the output;
- If your balance runs low: buy more Credits, or switch to the advanced/standard tier to cut costs.

## Watching It Run: the Task Monitoring Panel

Once you've handed off the job, progress shows on the right of the workspace, split into three sub-panels:

- **To-do plan**: the steps the AI broke the task into, checked off one by one as it goes;
- **Deliverables**: file cards for the task's outputs—click to open them in your system;
- **Skills & MCP**: the skills and connectors used in this run—fully transparent, you can see all of it.

**Adding instructions mid-run**: messages sent while a task is running are queued and executed after the current round finishes (with full context preserved); anything sent after the task ends runs immediately. If you're not happy, just say so: "Sort by price, low to high" or "What's the evidence for conclusion #3?"

## Task Boundaries

Remember these boundaries when you create a task:

- One task = one independent AI work session, with its own conversation, context, monitoring, and deliverables—**two tasks share no data**;
- Keep related iterations (draft → revisions → final) in the same task; start a new task for anything unrelated—clean context, and no Credits wasted replaying old conversation;
- All tasks (including unsent drafts) are saved automatically; the task list sorts by "Recent" and supports search, grouping, pinning, export to Markdown, and archiving (archives can be restored—prefer archiving over deleting).

## The Three Elements of a Good Prompt

Before you write a task, run it through this skeleton:

| Element | What it answers | Example |
| --- | --- | --- |
| Goal | What is the deliverable | "An Excel summary sheet" |
| Format | What form the output takes | "Output as .xlsx with charts" |
| Constraints | What must be included / avoided | "No invented data; amounts to two decimal places" |

For more templates see [Prompt Templates](/en/qoderwork/ref-templates); the full prompt methodology (six advanced techniques + five pitfalls) is referenced in [Scenario Cheat Sheet](/en/qoderwork/ref-scenarios).

## FAQ

**What do I actually type first?**
Skip openers like "what can you do." Write the result instead: which file you want, in what format, and what it must not touch. The sales-data prompt above works as-is once you change the filename.

**Which model won't waste credits?**
The standard tier covers most scenarios. Move up to advanced or flagship only when the job is genuinely complex or needs reasoning across many files. You can also switch tiers mid-task without losing context.

**Can it handle two unrelated jobs at once?**
Not recommended. Two tasks share no data, so keep one job per task. The context stays clean and you save Credits.

**What if it goes off track halfway through?**
Send a follow-up instruction. It queues up and runs after the current round finishes. Say "sort by price, low to high," and that's what it does.

**Will an unsent draft be lost?**
No. All tasks are saved automatically, drafts included. They're sorted by recency and can be archived (archives can be restored).

---

Next: [Working Folders: Let the AI Read and Write Your Files Directly →](/en/qoderwork/04-files)
