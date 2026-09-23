---
description: "You've just installed TraeWork. The interface is clean and empty, the cursor blinking in the input box. You have the material on hand—a sales sheet that needs crunching, a few scattered documents—but you have no idea what to type first."
---

# How Do You Run Your First Task? From One Sentence to Work You Can Hand Over

You've just installed TraeWork. The interface is clean and empty, the cursor blinking in the input box. You have the material on hand—a sales sheet that needs crunching, a few scattered documents—but you have no idea what to type first. And if you copy it into a chat window and write it yourself, you're back on the old road: the work the AI was meant to do ends up on you again.

Don't overthink this one. Just walk the full loop once: assign, watch, review, share. After one lap you'll understand how this differs from chat AI.

## Assigning a Task: Pick a Project, Then Send

Start by selecting a project in the main chat box. On the web version you can skip this if you want—just send your instructions, and the system creates a project automatically, naming it from keywords in your prompt.

Then write the task instruction—text or voice both work—and hit send.

The input box also lets you add context. Stuff these in: attachments (.pptx, .xlsx, and so on), images, slash commands (the "/"), and skills. The more complete the material you hand over, the lower the chance it wanders off course.

Don't make your first one complicated. Send the block below as-is, just swapping in your own filename:

```text
Read the sales data.xlsx file I uploaded. Aggregate this month's revenue and gross margin by
product line and rank them. Deliver an Excel summary sheet plus a 200-word conclusion.
Requirements: numbers must match the source file exactly; do not speculate about causes;
mark anything you can't confirm as "to be verified."
```

## Watching It Run: The Tools Panel

Click "Expand tools panel" in the top-right corner and you can watch the AI work the whole way through. It gives you different tabs depending on the mode:

| Tab | Modes available | Use |
| --- | --- | --- |
| Task Summary | Work / Design: to-dos, task outputs, reference info; Code: to-dos, context | See the steps it broke out and the outputs |
| Browser | All modes | Preview AI outputs, verify visuals and interactions |
| Terminal | Code | Run terminal commands |
| Canvas | Design | Preview/organize outputs and export design files |

You don't have to watch every line, but you should confirm it "reads the material first, then acts"—that's your precondition for accepting the result.

## Reviewing and Editing Outputs

When a web-app output finishes building, a preview tab opens automatically. If something looks wrong, there are three ways to make it change it:

1. **Edit directly**: Click "Select element" in the top-right → pick the element you want → change properties in the "Design" or "CSS" panel. Note that manual editing supports text elements only—font size, bold, and alignment are adjustable.
2. **Comment to chat**: Write one line of feedback and send it to the AI together with the selected element.
3. **Annotate a screenshot**: Capture an element or region, mark it with a rectangle or arrow, write your feedback, and send it. You can also add it to the comment list and send in batch.

HTML outputs (requirement docs, product prototypes, analysis reports) also have a labor-saving feature: **prototype-document linking**. Change one part of the prototype, and the matching content in the PRD document updates in sync.

## Managing Tasks and Outputs

What you make has to be findable and manageable. Hover over "More actions" in the left task bar—or the spot next to the task name at the top of the chat panel—to pin, view task files (list or tree view), create, rename, or delete. The search icon in the top-left corner is global search, covering tasks or queries across modes.

Outputs are collected under "My Files" in the left navigation—local outputs, cloud outputs, and Feishu Docs all managed in one place. The "···" menu on each card lets you pin, "Open in task" (continue editing with the original chat context carried over), share, download (cloud outputs only), and delete. Heads up: deleting also removes the corresponding original task, and it can't be undone.

## Sharing a Conversation

Made something worth showing? Hover over a query or reply in the chat and click "Share", or right-click a task in the left task list and choose "Share", tick what you want to share, and pick one of two formats:

- **Image**: Copy or download; handy for pasting into group chats or docs;
- **Share link**: Generates a link and QR code.

## How to Write Task Instructions

As with any task-oriented AI, whether TraeWork delivers good work comes down entirely to whether your instructions are clear. Six elements are enough:

| Element | The question it answers |
| --- | --- |
| Goal | What problem should the final result solve |
| Input | Which files, folders, or links to use |
| Action | Analyze, organize, transform, or generate |
| Constraints | What must not change, which standards to follow |
| Output | What file to deliver, and where to put it |
| Acceptance | What criteria define "done right" |

It's fine if you're not fluent yet. The **template library** at the top of the left navigation has instructions, execution steps, and delivery requirements prepared by scenario. Click "Make my own," fill in the background material, and you can send it straight away.

## FAQ

**Do I have to pick a project to start a task?**
Not required. On the web version you can skip it and just send your instructions—the system creates a project and names it from keywords. On desktop, picking one is a good idea; it makes things easier to find later.

**Why are some tools-panel tabs missing?**
Tabs are handed out by mode. "Terminal" exists only in Code mode, and "Canvas" only in Design mode. "Task Summary" and "Browser" appear in all modes.

**Does deleting an output delete the task too?**
Yes. Delete from the card's "···" menu removes the corresponding original task as well, and it can't be undone. Download or share a copy before you delete anything.

**Is manual editing limited to text?**
Yes. Direct editing (select element + Design/CSS panel) currently supports text elements only—font size, bold, and alignment. For complex layouts, handing it to the AI is more reliable.

**When is the template library worth using?**
When you're new to this, or you just don't feel like writing instructions from scratch. Click "Make my own," fill in the material, and send—that's the least-effort path.

---

Next: give the AI a "standard playbook"—[Skills →](/en/traework/04-skills)
