# Your First Task: From Description to Deliverable

The QoderWork workflow is just three steps: **describe the task → watch it run → collect the deliverable**. This chapter walks through each step with the details and official best practices.

## Five Steps to Create a Task

1. **Describe the task**: write outcome-oriented prompts—say "what you want to end up with", not "which steps to follow";
2. **Pick a workbench**: bottom left of the input box, "General" by default (there are also three vertical workbenches for design, slides, and writing—see [The Three Workbenches](/en/qoderwork/adv-workbenches));
3. **Pick a model**: model selector at the bottom right (see below);
4. **Pick a working folder** (optional): let the AI read and write a local folder directly—see [Working Folders](/en/qoderwork/04-files);
5. Send.

A good task for your first run:

```text
Analyze the sales-data.csv I uploaded: explain what each field means,
compute and rank sales by category,
and produce an Excel summary sheet plus 3 conclusions.
Rules: figures must match the source file; mark anything unverifiable as "to be confirmed".
```

## Three Entry Points for Enriching Context

| Entry point | How | Best for |
| --- | --- | --- |
| **+ button** | Add from the menu: expert kits, skills, connectors, files | Uploading attachments, attaching capabilities |
| **@ reference** | Type @ to reference existing objects: kits, past tasks, scheduled tasks, files | Linking to existing content |
| **/ invoke** | Type / to invoke skills and commands (xlsx, pptx, pdf, find-skills, etc.) | Calling something out by name |

The official best-practice doc puts it plainly: "**Tasks with the right references and attachments almost always outperform a long paragraph of description.**"

## Choosing a Model

| Tier | Best for | Cost |
| --- | --- | --- |
| Flagship | Complex reasoning, high-stakes reports, multi-file analysis | Highest |
| Advanced | Demanding flagship projects that need balance | Higher |
| Standard | Everyday tasks, balancing speed and quality—**plenty for most scenarios** | Medium |
| Qwen3.7-Max / Plus | The Qwen series: Max for advanced reasoning, Plus for fast, cheap daily work | Varies |

Two key mechanisms:

- **Switch anytime, effective immediately**: you can change models mid-task without losing context. The official example playbook: standard tier to collect data → flagship tier for deep analysis → standard tier to format the output;
- If your balance runs low: buy more Credits, or switch to the advanced/standard tier to cut costs.

## Watching It Run: the Task Monitoring Panel

Task monitoring sits on the right of the workspace with three sub-panels:

- **To-do plan**: the steps the AI broke the task into, checked off as it progresses;
- **Deliverables**: file cards for the task's outputs—click to open them in your system;
- **Skills & MCP**: the skills and connectors used in this run—fully transparent.

**Adding instructions mid-run**: messages sent while a task is running are queued and executed after the current round finishes (with full context preserved); anything sent after the task ends runs immediately. If you're not happy, just say so: "Sort by price, low to high" or "What's the evidence for conclusion #3?"

## Task Boundaries

- One task = one independent AI work session, with its own conversation, context, monitoring, and deliverables—**two tasks share no data**;
- Keep related iterations (draft → revisions → final) in the same task; start a new task for anything unrelated—clean context, and no Credits wasted replaying old conversation;
- All tasks (including unsent drafts) are saved automatically; the task list sorts by "Recent" and supports search, grouping, pinning, export to Markdown, and archiving (archives can be restored—prefer archiving over deleting).

## The Three Elements of a Good Prompt

The official prompt skeleton—run through it before writing a task:

| Element | What it answers | Example |
| --- | --- | --- |
| Goal | What is the deliverable | "An Excel summary sheet" |
| Format | What form the output takes | "Output as .xlsx with charts" |
| Constraints | What must be included / avoided | "No invented data; amounts to two decimal places" |

For more templates see [Prompt Templates](/en/qoderwork/ref-templates); the full prompt methodology (six advanced techniques + five pitfalls) is referenced in [Scenario Cheat Sheet](/en/qoderwork/ref-scenarios).

---

Next: [Working Folders: Let the AI Read and Write Your Files Directly →](/en/qoderwork/04-files)
