# Your First Task: From One Sentence to a Deliverable

Once installed, walk through a complete task loop: assign → watch → review → share. This chapter follows the Work mode.

## Assigning a Task

1. In the main chat box, **select a project** (on the web you can also skip this and just send your instructions—the system creates a project automatically and names it from keywords in your prompt);
2. Type your task instructions—text or voice both work;
3. Send.

The input box also lets you add context: attachments (.pptx, .xlsx, etc.), images, slash commands (`/`), and skills.

A good sample task for your first run:

```text
Read the sales data.xlsx file I uploaded. Aggregate this month's revenue and gross margin by
product line and rank them. Deliver an Excel summary sheet plus a 200-word conclusion.
Requirements: numbers must match the source file exactly; do not speculate about causes;
mark anything you can't confirm as "to be verified."
```

## Watching It Run: The Tools Panel

"Expand tools panel" in the top-right corner is where you watch the AI work. The tabs differ by mode:

| Tab | Modes available | Use |
| --- | --- | --- |
| Task Summary | Work / Design: to-dos, task outputs, reference info; Code: to-dos, context | See the steps it broke out and the outputs |
| Browser | All modes | Preview AI outputs, verify visuals and interactions |
| Terminal | Code | Run terminal commands |
| Canvas | Design | Preview/organize outputs and export design files |

## Reviewing and Editing Outputs

When a web-app output finishes building, a preview tab opens automatically. Three ways to revise it:

1. **Edit directly**: Click "Select element" in the top-right → pick an element → change properties in the "Design" or "CSS" panel (manual editing only supports text elements—font size, bold, alignment);
2. **Comment to chat**: Write your feedback and send it, along with the selected element, to the AI;
3. **Annotate a screenshot**: Capture an element or region → mark it with rectangles/arrows → add your feedback → send to the AI (you can also add it to the comment list and send in batch).

HTML outputs (requirement docs, product prototypes, analysis reports) support **prototype-document linking**: after you change part of the prototype, the matching content in the PRD document updates in sync.

## Managing Tasks and Outputs

- **Task management**: Hover over "More actions" in the left task bar (or next to the task name at the top of the chat panel) → pin, view task files (list or tree view), create/rename/delete;
- **Global search**: The search icon in the top-left finds tasks or queries across modes;
- **Outputs space**: "My Files" in the left navigation centrally manages local outputs, cloud outputs, and Feishu Docs. The "···" menu on each card lets you pin, "Open in task" (continue editing with the original chat context carried over), share (generates a public link that keeps showing the latest version as the output updates), download (cloud outputs only), and delete (**this also deletes the original task and cannot be undone**).

## Sharing a Conversation

Got a result worth showing a colleague? Hover over a query or reply in the chat and click the "Share" icon (or right-click a task in the left task list and choose "Share") → pick what to share → two formats:

- **Image**: Copy or download; handy for pasting into group chats or docs;
- **Share link**: Generates a link and QR code.

## How to Write Task Instructions

As with any task-oriented AI, TraeWork's output quality is determined by your instructions. Six elements:

| Element | The question it answers |
| --- | --- |
| Goal | What problem should the final result solve |
| Input | Which files, folders, or links to use |
| Action | Analyze, organize, transform, or generate |
| Constraints | What must not change, which standards to follow |
| Output | What file to deliver, and where to put it |
| Acceptance | What criteria define "done right" |

Not fluent yet? The **template library** at the top of the left navigation offers templates by scenario with pre-written instructions, execution steps, and delivery requirements. Click "Make my own," fill in the background material, and you're ready to go.

---

Next: give the AI a "standard playbook"—[Skills →](/en/traework/04-skills)
