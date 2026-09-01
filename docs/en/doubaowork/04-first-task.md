# Your First Task: Up and Running in Five Minutes

Once installed, walk the whole flow with one small task: create the task → add materials → set permissions → review.

## Create the Task

1. Click "New Work Task" on the left;
2. Click the "+" beside the input box or use "@ Add Materials" to attach the files, folders, or other materials this task needs—Doubao Work has special support for **Feishu cloud drive data**, and you can also @-mention Feishu contacts;
3. Confirm the bottom selector is on "Work Task." You can assign it to a project and choose a permission mode: **Always Ask / Confirm As Needed / Allow All** (for your first task, choose "Confirm As Needed");
4. Keep the model on Auto, or pick Turbo / Pro and a reasoning intensity based on task complexity.

## A Prompt You Can Use As-Is

```text
Read the three work logs I've attached and turn them into a one-page weekly report.
Structure: completed this week, key numbers, issues and risks, plan for next week.
Use only information explicitly present in the materials; put anything you can't confirm under "to confirm" instead of filling it in.
Output Markdown, and keep the source material name next to each key conclusion.
```

After sending, watch whether it **reads the materials first, then generates results**. If it starts writing the report right away, add one more line to the prompt: "First list the materials and the time range covered."

## Review with Just Four Checks

1. Are any facts wrong;
2. Do the numbers reconcile;
3. Are the "to confirm" items still there;
4. Is the output still editable.

Once your first task is done, gradually add Skills and connectors. Deliverables can be revised, downloaded, or shared as needed; before sharing, make sure the content contains nothing sensitive or confidential, and choose the sharing scope per your company's policy.

## Three Starter Tasks

**A · Organize Files**

```text
Goal: organize the practice files in the input directory so they're easy to find by type.
```

**B · Meeting Minutes**

```text
Turn input/meeting.txt into structured meeting minutes.
```

**C · Word to PPT**

```text
Convert input/project-report.docx into an internal reporting PPT of no more than 10 slides.
```

---

Next up: connect external tools—[Connectors: Start with a Small, Verifiable Task →](/en/doubaowork/05-connectors)
