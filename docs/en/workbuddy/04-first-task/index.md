---
description: "You're staring at an empty WorkBuddy interface. You actually have the materials — an e-commerce sales spreadsheet, a few scattered documents — but you have no idea what to type first."
---

# How Do You Run Your First WorkBuddy Job? Eight Steps to a Deck You Can Hand In

You're staring at an empty WorkBuddy interface. You actually have the materials — an e-commerce sales spreadsheet, a few scattered documents — but you have no idea what to type first. Copy it all into a chat window and write it yourself? That just puts you back where you started, doing the work the AI was supposed to do.

Don't overthink this one. Just do "analyze the sales data and build a reporting deck." Follow the eight steps below, and by the end of the loop you'll understand exactly how this differs from a chat AI.

## Eight Steps to Your First Job

1. Click "New Task."

![Clicking the New Task entry](/workbuddy/04-first-task/assets/001_image_C4q3bdNKso.png)

2. Select or create a dedicated working directory.

*PS: WorkBuddy uses folder-level authorization and high-risk command interception. For your first run, practice in a scratch directory and pay attention to the access you grant — double-check carefully before working with real business data.*

![Choosing or creating a dedicated work directory](/workbuddy/04-first-task/assets/002_image_GeeybIFZLo.png)

3. Decide which mode to use. The default is Craft; you can also set it to Ask or Plan.

![Choosing the work mode: Craft, Ask or Plan](/workbuddy/04-first-task/assets/003_image_DZ55bxbCvo.png)

4. Pick a model. You can specify the model you want; different models consume credits at different rates.

![Selecting the model for the task](/workbuddy/04-first-task/assets/004_image_JiigbkdTKo.png)

5. Write the task description in the input box, for example: "Analyze the data in E-commerce Sales Data.xlsx and generate a presentation for me."

![Writing the task brief in the input box](/workbuddy/04-first-task/assets/005_image_ReDxbwNkYo.png)

6. If needed, specify a Skill, Expert, connector, or knowledge base — skip this for now.

![Optional: specifying skills, experts, connectors](/workbuddy/04-first-task/assets/006_image_INLGb7TDQo.png)

7. Send it, then watch the plan, tool calls, and file changes.

![Watching the plan and tool calls after sending](/workbuddy/04-first-task/assets/007_image_BD1FbDdcEo.png)

8. Preview and review the deliverable in the results area. You can open the file locally, upload it to the cloud, or share it. Before sharing, make sure the deliverable contains no sensitive or confidential information, and follow your company's rules on sharing scope.

![Previewing and accepting the generated deck in the results pane](/workbuddy/04-first-task/assets/008_image_TzOAb2lxIo.png)

## How to Write a Task Description

Before you send it, break what you want to say into six elements. With all six in place, it knows where to push and won't start making decisions on its own.

| Element | Question it answers |
|-|-|
| Goal | What problem should ultimately be solved |
| Input | Which files, directories, or links to use |
| Actions | Analyze, organize, convert, or generate |
| Constraints | What must not change, which standards to follow |
| Output | What files to deliver, and where to put them |
| Acceptance | What criteria define "done" |

You can copy the three prompts below and send them as-is — just swap in your own filenames.

### Starter Task A: Organize Files

```text
Goal: Organize the practice files in the input directory so they're easy to find by type.
Input: Only process the input directory in the current workspace.
Actions: Identify file types and propose a plan for categorizing and renaming.
Constraints: Do not delete or overwrite original files; when names collide, keep both copies and add a numeric suffix.
Output: First generate inventory.xlsx and proposed-actions.md.
Acceptance: The file count in the inventory matches the actual files in input, and every action is traceable.
Do not move any files until I confirm proposed-actions.md.
```

### Starter Task B: Generate Meeting Minutes

```text
Please turn input/meeting.txt into structured meeting minutes.
Must include: meeting conclusions, action items, owners, due dates, and open questions.
For any owner or date that can't be confirmed from the original text, write "TBC" — do not fill in gaps on your own.
Output output/meeting-minutes.md and output/todo-list.xlsx.
Acceptance: every conclusion can be traced back to the original text; no action item is missing an owner or time status.
```

### Starter Task C: Word to PPT

```text
Convert input/project-report.docx into an internal presentation of 10 slides or fewer.
Audience: department heads; presentation length: 8 minutes.
Keep the facts and figures from the original text; do not add unverified data.
Structure: background, current status, problems, proposal, plan, decisions needed.
Use the color and font guidelines in reference/brand-guide.pdf.
Output output/project-report_v1.pptx, along with a slide-by-slide content list.
Acceptance: each slide carries a single key point, figures match the original text, and body text is readable when projected.
```

## FAQ

**Do I really need a dedicated working directory for my first job?**
Strongly recommended. WorkBuddy authorizes at the folder level, so a separate directory keeps those permissions boxed in and stops it from reading or changing your other materials. Running it once in a scratch directory first is even safer.

**The default mode is Craft — isn't that risky for a beginner?**
Craft touches local files directly. If you're not sure about your first job, switch it to Ask (look, don't touch) or Plan (see the approach first) when you create the task, and move to Craft once you're comfortable.

**How long should the task description be?**
Not long — complete. Nail the six elements above (goal, input, actions, constraints, output, acceptance) and that beats writing a wall of stream-of-consciousness. The three templates above work as soon as you swap in your filenames.

**Can I send out what it generates as-is?**
Review before you share. You can open files locally, upload them to the cloud, or share them — but before sharing, make sure the deliverable contains nothing sensitive or confidential, and follow your company's rules on sharing scope.

---

Next up: give it a ready-made capability—[Load a Skill You'll Actually Use →](/en/workbuddy/05-skills/)
