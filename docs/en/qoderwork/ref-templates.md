# QoderWork Prompt Templates

Ready to use. Replace what's inside `【】`/`{}` with your actual content. For the three elements of a prompt (goal/format/constraints), see [Your First Task](/en/qoderwork/03-first-task).

## File Organization

**Downloads deep clean**

```text
Scan [directory], find all duplicate files, keep the newest version of each,
and generate a list for me to confirm before executing.
```

**Sorting and archiving**

```text
Organize [directory]: move images to assets/images/, documents (.md/.txt/
.pdf) to docs/, config files (.json/.yaml/.toml) to config/, and code into
src/ by language.
Present the plan before executing; finish with an organization report
(counts + directory tree).
```

**Photo archiving**

```text
Organize [photo directory]: read EXIF capture times, build year-month
folders (2026-01/), move and rename files to "date_sequence.jpg", and
generate a CSV manifest. Show the plan first; touch the files only after I
confirm.
```

**Receipt/invoice archiving**

```text
Recognize the date, amount, merchant, and category (meals / transport /
lodging / other) of each receipt photo in [folder]:
rename to "date-category-amount-merchant.jpg", archive by category, and
generate an Excel expense summary. Show a recognition preview first;
rename only after I confirm.
```

## Data Analysis

**Multi-dimensional Excel analysis**

```text
@[data.xlsx] Analyze:
1. Explain what each field means; check for missing and abnormal values
2. Compute and rank [metric] by [dimension]
3. Show monthly/weekly trends
4. Generate an Excel summary + charts
Rules: figures must match the source file; mark anything unverifiable as
"to be verified".
```

**Hundred-thousand-row CSV**

```text
Analyze [visitor/sales data.csv]:
group by [grouping field]; compute totals and shares (1 decimal place);
produce an Excel + a color-coded bar chart; save to [output directory].
```

**Research deck (with sources)**

```text
Research [topic] and produce an [N]-page deck covering [list of dimensions];
structure: [cover → ... → summary]; line charts for trends, pie charts for
share;
every figure must cite a source; mark anything not found as "to be
verified".
```

## Document Processing

**Bulk résumé screening**

```text
Go through all résumés in [folder] and screen against the JD:
[requirement 1/2/3];
move qualified candidates to the "qualified-[role]" folder;
output an Excel: name, contact, [key items], fit score (1-10),
recommendation reason.
```

**Bulk format unification**

```text
Adjust the 10 Word documents in [folder] to a uniform style: headings in
bold 18pt SimSun, body text in 12pt SimSun, 1.5 line spacing, first-line
indent of 2 characters. Preview one document for my confirmation first.
```

**Document comparison**

```text
Compare [file A] with [file B]: output the differences in three
categories—added, deleted, modified—with special attention to amounts,
dates, responsible parties, and approval conditions; generate a list of
questions to confirm.
```

## Automation

**Scheduled daily report (with push)**

```text
(Scheduled: 09:00 every business day) Read yesterday's data in data/ and
generate a morning briefing:
key metrics summary (with month-over-month changes); highlight anything
moving ±20% or more in yellow and explain why (mark "to be verified" if the
data can't); output Markdown to reports/ and push it to the DingTalk group
[group name].
```

**Natural-language scheduling**

```text
Every 3 hours, check [web page/file] and send me a summary notification if
anything changed.
```

## Computer / Browser

**Bulk web scraping**

```text
From the connected browser page [entry path], collect the records on [N]
paginated pages and organize them into an Excel per the template
[template.xlsx]: date, title, link.
```

**Operation-type task (safe version)**

```text
Help me fill in [form] on [website]; the information is in [attachment].
Stop at the review page after filling—do not click submit; wait for my
confirmation.
```

## Process

**Have the AI propose a plan first**

```text
[Task description]. Please present your plan first (how many steps, which
files you'll touch, how you'll name things), and execute only after I
confirm.
```

**Packaging a skill**

```text
/create-skill Package the [workflow name] we just did as a skill:
Trigger phrase: [one sentence]; steps: [numbered steps];
output: [format and location]; boundaries: [what it will not do].
```
