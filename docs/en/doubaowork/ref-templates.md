# Prompt Templates

Create a "work task" in Doubao Work, paste a template below, then add your files, links, time ranges, and output locations. Three universal disciplines: **when multiple files are involved, create a project first; when external systems are involved, confirm the required connectors are authorized; when moving, overwriting, sending, or publishing is involved, keep a human confirmation step.**

## File Organization

```text
Read the folder I provide; tally file types, counts, and duplicates.
Propose a new folder structure and renaming rules by file type and topic.
Output the plan and a list of expected changes first; move or rename files
only after I confirm.
Do not delete any files; stop and ask when you hit identical filenames.
```

## Excel Analysis

```text
Analyze the Excel file I provide.
First check worksheets, fields, missing values, and outliers; then output
core metrics, trend changes, possible causes, and recommended actions.
Generate a summary report and any needed charts, and state the data range
behind each conclusion.
Do not modify the original file; save results as a new file.
```

## PPT Generation

```text
Generate a roughly 10-slide PPT from this Word document.
Each slide: a title, 3-4 bullet points, and a suggested chart; all data
and conclusions must come from the source text.
Formal style, suitable for a management briefing.
Give the slide outline first; generate the full file only after I confirm.
```

## Meeting Minutes

```text
Organize this meeting content.
Output conclusions, action items, owners, deadlines, risks, and open
questions.
Where an owner or deadline isn't explicit, mark "to be confirmed"—do not
fill one in.
For important conclusions, keep the corresponding original words or
timestamps where possible for review.
```

## Industry Research

```text
Research [industry / company / product] with a time range of [].
Output market background, main players, competitor comparison, trends,
opportunities, and risks.
Keep the source link and publication date for every key fact; where
sources conflict, present them side by side.
Mark unverifiable information as "to be verified"—do not invent.
```

## Scheduled Briefing

```text
Create the task description for a "daily industry briefing".
Every day at [time], summarize the past 24 hours of [topic] in at most 10
items.
Each item carries a title, summary, source, publication time, and link;
merge duplicate events.
When sources fall short, say so—don't invent items to fill the count.
Run it once in a normal work task first; after I confirm the result, I'll
save it under "scheduled tasks".
```

## Using a Work Mate or Squad

```text
Goal: [the deliverable to produce]
Materials: [projects, files, or links]
To be completed by [Work Mate / Work Squad].
First explain the division of labor, handoff artifacts, and the points
where you need my confirmation, then start executing.
Do not send, publish, or overwrite official files without confirmation.
```

---

Find tutorials by scenario: [Scenario Cheat Sheet →](/en/doubaowork/ref-scenarios)
