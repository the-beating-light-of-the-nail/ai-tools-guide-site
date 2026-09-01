# TraeWork Common Prompt Templates

Ready to use as-is. Replace `【】` placeholders with your actual content. For a refresher on writing style, see the six elements (goal / input / action / constraints / output / acceptance) in [Your First Task](/en/traework/03-first-task).

## Documents

**Speed-read a document**

```text
Tell me what [document name/attachment] is mainly about. Group it by theme and flag
the 3 issues I should pay the most attention to.
```

**Weekly report**

```text
Polish [my work summary document] into a weekly report structured as this week's
conclusion, key progress, and next week's plan. State the conclusion in one sentence:
the single most report-worthy result of the week. List 3-5 key progress items
(what was done, what outcome it produced). Write 2-3 next-week plan items
(what to push forward, what support is needed).
```

**Write to Feishu and push**

```text
Save the [weekly report / minutes / report] you just produced into a Feishu document
and send it to [group name].
```

**Compare two document versions**

```text
Compare [file A] and [file B]. Output the differences in three groups—added, removed,
changed—with special attention to amounts, dates, responsible parties, and approval
conditions. Produce a list of questions to confirm. Do not modify the original files.
```

## Data

**Excel analysis**

```text
Read [data file.xlsx]. Do not modify the original file yet.
Business question: [the question to answer, e.g., how each product line performed this month].
Output: a field dictionary plus dirty-data check, core metrics broken down by [dimension],
charts, and 3 conclusions ready to use in a review.
Requirements: numbers must match the source file exactly; mark anything you can't
confirm as "to be verified."
```

**Data dashboard**

```text
Build a [period] data dashboard: an overview of [core metric] at the top, then trend
charts, funnel charts, and comparison charts by [dimension]. Charts should be interactive.
```

## Reporting

**Performance review report**

```text
Based on my work records, produce a performance review report. Requirements:
1. Group, merge, and deduplicate the work items; don't write a day-by-day diary
2. Distill 3-5 core achievements, each expanded as "context—actions—results—value—personal contribution"
3. Prefer data and before/after comparisons; distinguish team results from personal contribution
4. Do not fabricate any information
5. Output sections: review summary, core achievements, capability growth, lessons learned, next-stage plan
Role: [role] Review period: [period] Work records: [@document]
```

**Build a PPT (methodology version; see the case study)**

```text
Do not generate any slides yet. First analyze [the material]: extract the core claims
and argument structure, and produce a memo plus a slide plan of about 10 slides,
with only one claim per slide.
Stop after output and wait for my confirmation.
```

## Automation

**Scheduled news digest**

```text
At [9 a.m. on workdays], collect public coverage related to [topic] from the past
24 hours. Categorize it by [categories], with source links noted. If there are fewer
than 3 substantive items, say so instead of padding.
Save the output as Markdown in [directory].
```

**Weekly brand-monitoring report**

```text
Every Monday at 9 a.m., summarize last week's coverage and social media discussion
about [company/product]. Output a three-column weekly report—"media coverage /
user feedback / competitor updates"—noting sentiment and sources.
```

## Computer Control

**Form filling (safe version)**

```text
Fill out the [form name/URL] form for me, using the information in [attachment].
When done, stay on the submission page and wait for my confirmation—do not click Submit.
```

**Batch processing from a template**

```text
Copy the [template] file, replace [fields] with each record's corresponding data,
process the records one by one and save them to the output/ directory, then produce
a processing log at the end.
Do not send or publish any of the output.
```

## Workflows

**Plan mode (review the plan first)**

```text
/plan Organize the [N] files under [directory]: first give me your plan (how many steps,
which files you'll touch, how you'll name things), and execute only after I confirm.
```

**Goal mode (run to a finish line)**

```text
/goal Convert all [file type] files under [directory] to [target format].
Spot-check 1 out of every 10 completed; stop only when all are done and every
spot check passes.
```
