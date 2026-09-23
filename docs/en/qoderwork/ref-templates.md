---
description: "Ready to use. Replace what's inside the brackets with your actual content. For the three elements of a prompt (goal / format / constraints), see [Your First Task](/en/qoderwork/03-first-task)."
---

# Staring at the Input Box Again? 16 Copy-Paste Prompts—Change Two Things and Send

Ever sat there staring at the input box? You know you want it to do the work, but you don't know how to phrase it—write it short and it misreads you, write it long and you'd have been quicker doing it yourself. This page gives you 16 prompts you can copy straight out: swap out what's in the brackets for your own content and hit send.

## How to Use These Templates

Don't copy a template wholesale. Do these three things first:

1. **Replace the placeholders**: swap the bracketed text for your real directories, filenames, and fields. Leave them in and it can only guess.
2. **Add constraints**: a template is a skeleton. If you care about the output format, whether it should confirm first, or that data must not be invented, add one sentence at the end.
3. **Run a small pass first**: for anything that moves, renames, deletes, or submits, have it produce a plan and confirm before it executes.

The three elements of a prompt (goal / format / constraints) are in [Your First Task](/en/qoderwork/03-first-task)—go there for the reasoning when a template isn't enough.

## How to Pick One

Not sure which template fits? First decide whether your step is "read files", "compute data", "edit documents", "run on a schedule", or "drive the browser", then find the matching category below. If you're new, start with the file organization ones: those never touch external systems, so even a sloppy instruction costs you nothing but a few minutes to re-run.

## File Organization

### Downloads Deep Clean

```text
Scan [directory], find all duplicate files, keep the newest version of each,
and generate a list for me to confirm before executing.
```

### Sorting and Archiving

```text
Organize [directory]: move images to assets/images/, documents (.md/.txt/
.pdf) to docs/, config files (.json/.yaml/.toml) to config/, and code into
src/ by language.
Present the plan before executing; finish with an organization report
(counts + directory tree).
```

### Photo Archiving

```text
Organize [photo directory]: read EXIF capture times, build year-month
folders (2026-01/), move and rename files to "date_sequence.jpg", and
generate a CSV manifest. Show the plan first; touch the files only after I
confirm.
```

### Receipt / Invoice Archiving

```text
Recognize the date, amount, merchant, and category (meals / transport /
lodging / other) of each receipt photo in [folder]:
rename to "date-category-amount-merchant.jpg", archive by category, and
generate an Excel expense summary. Show a recognition preview first;
rename only after I confirm.
```

## Data Analysis

### Multi-Dimensional Excel Analysis

```text
@[data.xlsx] Analyze:
1. Explain what each field means; check for missing and abnormal values
2. Compute and rank [metric] by [dimension]
3. Show monthly/weekly trends
4. Generate an Excel summary + charts
Rules: figures must match the source file; mark anything unverifiable as
"to be verified".
```

### Hundred-Thousand-Row CSV

```text
Analyze [visitor/sales data.csv]:
group by [grouping field]; compute totals and shares (1 decimal place);
produce an Excel + a color-coded bar chart; save to [output directory].
```

### Research Deck (with Sources)

```text
Research [topic] and produce an [N]-page deck covering [list of dimensions];
structure: [cover → ... → summary]; line charts for trends, pie charts for
share;
every figure must cite a source; mark anything not found as "to be
verified".
```

## Document Processing

### Bulk Résumé Screening

```text
Go through all résumés in [folder] and screen against the JD:
[requirement 1/2/3];
move qualified candidates to the "qualified-[role]" folder;
output an Excel: name, contact, [key items], fit score (1-10),
recommendation reason.
```

### Bulk Format Unification

```text
Adjust the 10 Word documents in [folder] to a uniform style: headings in
bold 18pt SimSun, body text in 12pt SimSun, 1.5 line spacing, first-line
indent of 2 characters. Preview one document for my confirmation first.
```

### Document Comparison

```text
Compare [file A] with [file B]: output the differences in three
categories—added, deleted, modified—with special attention to amounts,
dates, responsible parties, and approval conditions; generate a list of
questions to confirm.
```

## Automation

### Scheduled Daily Report (with Push)

```text
(Scheduled: 09:00 every business day) Read yesterday's data in data/ and
generate a morning briefing:
key metrics summary (with month-over-month changes); highlight anything
moving ±20% or more in yellow and explain why (mark "to be verified" if the
data can't); output Markdown to reports/ and push it to the DingTalk group
[group name].
```

### Natural-Language Scheduling

```text
Every 3 hours, check [web page/file] and send me a summary notification if
anything changed.
```

## Computer / Browser

### Bulk Web Scraping

```text
From the connected browser page [entry path], collect the records on [N]
paginated pages and organize them into an Excel per the template
[template.xlsx]: date, title, link.
```

### Operation-Type Task (Safe Version)

```text
Help me fill in [form] on [website]; the information is in [attachment].
Stop at the review page after filling—do not click submit; wait for my
confirmation.
```

## Process

### Have the AI Propose a Plan First

```text
[Task description]. Please present your plan first (how many steps, which
files you'll touch, how you'll name things), and execute only after I
confirm.
```

### Packaging a Skill

```text
/create-skill Package the [workflow name] we just did as a skill:
Trigger phrase: [one sentence]; steps: [numbered steps];
output: [format and location]; boundaries: [what it will not do].
```

## FAQ

**I copied a template exactly and the result is still wrong. Why?**
Usually the placeholders weren't fully replaced, or you never said what output format you wanted. Put real paths and filenames inside the brackets, then add one line like "output as Excel" or "give me the plan first, don't touch the files", and accuracy jumps.

**Do I delete the brackets too?**
Yes. The square brackets are only placeholder markers on this page—when you swap in real content, remove the brackets along with them. Don't leave them sitting there.

**How do I avoid accidents with delete and submit instructions?**
Add "present the plan first and execute only after I confirm" at the end. The "Have the AI Propose a Plan First" and "Operation-Type Task (Safe Version)" templates above exist for exactly that—take them as they are.

**Can I save a template I use often and call it up next time?**
Yes, and it's less work. Use the "Packaging a Skill" template to freeze a workflow that runs well into a skill; after that one phrase triggers it and you never have to come back to this page.
