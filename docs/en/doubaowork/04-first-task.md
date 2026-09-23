---
description: "You're staring at an empty Doubao Work interface, the cursor blinking in the input box. You actually have the materials — last week's sales records, a few scattered meeting docs — but you have no idea what to type first."
---

# How Do You Run Your First Doubao Work Job? A Weekly Report You Can Hand In, in Five Minutes

You're staring at an empty Doubao Work interface, the cursor blinking in the input box. You actually have the materials — last week's sales records, a few scattered meeting docs — but you have no idea what to type first. Copy it all into a chat window and write it yourself? That just puts you back where you started, doing the work the AI was supposed to do.

Don't overthink this one. Just make a weekly report. Follow four steps: create the task, add materials, set permissions, review. Run that loop once and you'll see exactly how it differs from chat Doubao.

## Create the Task: Just Open One, Don't Worry About the Name

Click "New Work Task" on the left. Name it whatever you like — "first practice run" is fine, nobody's judging. Treat this one as practice instead of trying to produce something impressive on the first go.

Once you're in the editor, add materials first. Click the "+" to the left of the input box, or use "@ Add Materials," and drop in the files and folders this job needs. If your materials live in Feishu cloud drive, it reads them especially smoothly. You can also @ a Feishu contact to pull a colleague into the job.

With materials loaded, look down at the bottom: confirm it's set to "Work Task," then pick a permission level. There are only three: Always Ask, Confirm As Needed, Allow All. For your first job, choose "Confirm As Needed" — it will ask before touching anything important, which is the safest option.

Leave the model on Auto. Switch to Turbo or Pro only when the job is genuinely grinding, and adjust reasoning intensity while you're at it. Auto is enough for your first run — don't get stuck on model choice.

## A Prompt You Can Use As-Is

With the materials in place, paste this straight into the input box, change the filenames, and send:

```text
Read the three work logs I've attached and turn them into a one-page weekly report.
Structure: completed this week, key numbers, issues and risks, plan for next week.
Use only information explicitly present in the materials; put anything you can't confirm under "to confirm" instead of filling it in.
Output Markdown, and keep the source material name next to each key conclusion.
```

After you send it, don't rush to collect the result. Watch whether it **reads the materials first, then generates results**. If it starts writing the report right away, it never opened your files — add "First list the materials and the time range covered" and send it back, and it will look before it writes. Keep that check in mind; use it to verify every job after this one.

## Review with Just Four Checks

It hands back a Markdown weekly report. Check these four things:

1. Are any facts wrong;
2. Do the numbers reconcile;
3. Are the "to confirm" items still there, without it quietly filling them in;
4. Is the output still editable — can you keep working on it somewhere else.

Pass all four and the job counts as done. If the numbers don't reconcile, make it recalculate. If a fact is wrong, point at it and have it fix it. Don't rush into adding Skills or connectors — build the habit of reviewing first.

## Three Starter Tasks

Once the weekly report runs and your hands are steady, take these three for a spin. The materials are all in the input directory, and you can copy the prompts in the code blocks straight into the box.

### A · Organize Files

```text
Goal: organize the practice files in the input directory so they're easy to find by type.
```

### B · Meeting Minutes

```text
Turn input/meeting.txt into structured meeting minutes.
```

### C · Word to PPT

```text
Convert input/project-report.docx into an internal reporting PPT of no more than 10 slides.
```

## Before You Share, Clear This One Hurdle

Deliverables can be revised, downloaded, or shared as needed. But before you hit "Share," make sure the content contains nothing sensitive or confidential, and choose the sharing scope per your company's policy. Don't casually send out client lists, internal pricing, or unpublished figures.

Still fuzzy on the interface? Once it's installed, the left side holds entry points and the middle shows process and results — [Main Interface, Tasks, and Projects](/en/doubaowork/03-interface) goes deeper. Not sure which kind of work to start with? Open the [Scenario Lookup Table](/en/doubaowork/ref-scenarios) and find your row by role.

## FAQ

**Will it change files on my computer without asking?**
Not recklessly. Every job is governed by a permission level, and since you picked "Confirm As Needed" for the first one, it will ask before touching anything important. If you want it to run free, you can switch to "Allow All" later.

**Does the prompt have to be long?**
No. Just talk normally — where the materials are, what result you want, what must not be touched. Getting those three right beats memorizing templates. The weekly-report prompt above works as soon as you swap in your filenames.

**Why did it start writing the report without reading my files?**
Your prompt didn't force it to look first. Add "First list the materials and the time range covered" and send it back — it will read before it writes. Use that trick to check every job from here on.

**How do I choose between Auto, Turbo, and Pro?**
Auto is enough for your first job; it picks something suitable on its own. Move to Turbo or Pro, with a higher reasoning intensity, only when the work is genuinely complex and needs long chains of reasoning. For ordinary weekly reports and file cleanup, Auto is fine.

**What should I watch out for when sharing?**
Before you hit "Share," confirm the content holds nothing sensitive or confidential, then choose the sharing scope per your company's policy. Don't send client data or internal pricing out without thinking.

---

Next up: connect external tools—[Connectors: Start with a Small, Verifiable Task →](/en/doubaowork/05-connectors)
