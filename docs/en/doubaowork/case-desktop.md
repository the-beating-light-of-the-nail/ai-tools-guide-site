---
description: "Your desktop or Downloads folder is a disaster: files cover the whole screen, and you want it cleaned up but you're afraid it will move something to the wrong place on the first pass. This is exactly the kind of job where you should never let the AI start acting. Have it scan read-only and lay out a sorting plan, then execute only after you confirm—faster, and no important file ends up misfiled."
---

# Desktop in Chaos? Have It Show You a Plan Before It Moves Anything

Your desktop or Downloads folder is a disaster—files spread across the whole screen. You want it tidied, but you're nervous it will shove something into the wrong place the moment it starts. This is the kind of job where you never turn the AI loose directly. Have it scan read-only and lay out a sorting plan first, then execute once you've confirmed. You save time, and nothing important gets misfiled.

> Scenario: the desktop / Downloads folder is a disaster zone. Have Doubao Work do a "read-only scan + plan" first, and act only after you confirm.

So the rule is simple: scan first, plan first, and only act after you say yes.

## Step 1: Add the Folder to Your Project

Doubao Work can only modify **local folders that have been added to a project**. Click "Project" below the input box, choose "Add Local Folder", and add the desktop or target directory—only then does it have permission to read and modify the files inside.

## Step 2: Review the Sorting Plan, Then Confirm

Just describe how you want things organized. For the first run, have it **present the sorting plan first**: which folders it intends to create and where each type of file will go. Review the plan, then confirm—much smoother sailing. Once confirmed, it creates the directories and moves files per the plan, herding the scattered files into their folders; the basic tidy-up is already good enough.

## Step 3: Leave System Cleanup to a Dedicated Skill

Once the files are organized, try system cleanup: the skill library includes `Doubao PC Optimizer`, which checks for cleanable items following a PC-maintenance routine, then acts on your confirmation. When it comes to system-level content like caches and temp files, a dedicated skill is the safer bet.

## Three Safety Habits

1. For the first run, pick a **small, recoverable** folder as a trial;
2. Review the **sorting plan and move list**, then confirm;
3. For anything involving **deletion, caches, or system cleanup**, inspect each item before letting it proceed.

Once the flow runs smoothly, widen the scope to the whole desktop or Downloads folder.

---

Related: [Hand Life's Odds and Ends to Doubao Work for a First Pass →](/en/doubaowork/case-life)

## FAQ

**Will it move files without asking me first?**

No—as long as your first instruction is "show me the plan, then act." It won't touch anything until you confirm. No confirmation, no action, just a plan.

**Why can't I add my local folder?**

Because Doubao Work can only modify local folders already added to a project. Click "Project" below the input box → "Add Local Folder", add your desktop or target directory, and it gets read/write permission.

**Can a regular task handle system cleanup?**

Use the ready-made `Doubao PC Optimizer` Skill instead. It checks items following a PC-maintenance routine and acts on your confirmation—safer for caches and temp files than handing the job to a casual task.

**Where should I start with my first cleanup?**

Pick a small, recoverable folder—a single Downloads subdirectory, for example. Once the flow runs smoothly, widen it to the whole desktop.

**If I delete something by mistake, can I get it back?**

Inspect each deletion item at step three, and choose a recoverable folder for the first run. Pausing one extra beat at the confirmation step saves you far more trouble than hunting for a file afterward.
