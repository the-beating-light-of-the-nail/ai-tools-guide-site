# Chapter 4: Quickly Completing Your First WorkBuddy Task

## Quickly Create a WorkBuddy Task

1. Click "New Task";

![](/workbuddy/04-first-task/assets/001_image_C4q3bdNKso.png)

2. Select or create a dedicated working directory;

*PS: WorkBuddy uses folder-level authorization and high-risk command interception. For your first run, practice in a scratch directory and pay attention to the access you grant — double-check carefully before working with real business data.*

![](/workbuddy/04-first-task/assets/002_image_GeeybIFZLo.png)

3. Decide which mode to use. The default is Craft; you can also set it to Ask or Plan;

![](/workbuddy/04-first-task/assets/003_image_DZ55bxbCvo.png)

4. Pick a model. You can specify the model you want; different models consume credits at different rates.

![](/workbuddy/04-first-task/assets/004_image_JiigbkdTKo.png)

5. Enter the task description: "Analyze the data in E-commerce Sales Data.xlsx and generate a presentation for me."

![](/workbuddy/04-first-task/assets/005_image_ReDxbwNkYo.png)

6. If needed, specify a Skill, Expert, connector, or knowledge base — skip this for now

![](/workbuddy/04-first-task/assets/006_image_INLGb7TDQo.png)

7. After sending, watch the plan, tool calls, and file changes;

![](/workbuddy/04-first-task/assets/007_image_BD1FbDdcEo.png)

8. Preview and review the deliverable in the results area.

You can open the file locally, upload it to the cloud, or share it. Before sharing, make sure the deliverable contains no sensitive or confidential information, and follow your company's rules on sharing scope.

![](/workbuddy/04-first-task/assets/008_image_TzOAb2lxIo.png)





## How to Write a Task Description

| Element | Question it answers |
|-|-|
| Goal | What problem should ultimately be solved |
| Input | Which files, directories, or links to use |
| Actions | Analyze, organize, convert, or generate |
| Constraints | What must not change, which standards to follow |
| Output | What files to deliver, and where to put them |
| Acceptance | What criteria define "done" |

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
