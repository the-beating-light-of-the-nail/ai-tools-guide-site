# Chapter 11: The Office Trio: Word, Excel, PPT

The office trio is where most people first feel the value of WorkBuddy. This chapter focuses on the three most common office deliverables: Word documents, Excel spreadsheets, and PPT presentations.

## A Shared Workflow: Break the Task Into Five Questions First

Whatever the document type, many office tasks where "AI does poorly" stem not from the model's writing ability, but from the human never spelling out the delivery standards.

| Question | What to pin down | Example |
| --- | --- | --- |
| Goal | Who will use this material to make what decision | For the department head, to judge whether to keep investing in the project |
| Audience | Who reads it, and do they know the background | Executives want conclusions only; the project team needs process and owners |
| Materials | Which files are fact sources, which are mere references | `data.xlsx` is the single source of truth; the old PPT is a structure reference only |
| Format | Word, Excel, PPT, or all three working together | A retrospective Word doc, a risk register Excel, an 8-slide reporting PPT |
| Acceptance | How to judge the result as usable | Numbers trace back to source files, spreadsheet formulas refresh, the PPT doesn't overflow on projection |

## Pick the Right Skills First: Recommended Combos for Office Tasks

| Skill | Best for | Notes |
| --- | --- | --- |
| Word / DOCX | Create, check, and edit DOCX — headings, numbering, tables, tracked changes | For local docx files |
| Excel / XLSX | Read, clean, and write workbooks; formulas, dates, template preservation | Confirm data definitions first |
| Powerpoint / PPTX | Create, edit, and check PPTX — layouts, placeholders, charts | For cases needing an editable PPTX |
| Office Document Specialist Suite | Combined Word / Excel / PPT handling and multi-file workflows | For complex tasks, accept step by step |
| wps / kdocs skill | The WPS trio and Kingsoft cloud docs | Usually needs an API Key |
| Tencent Docs | Creating and editing online Word, Excel, and slides | Usually needs authorization |
| Markdown Converter | Convert PDF, Word, PPT, Excel to Markdown | Good for reading materials; not final layout |
| PPT Generator / PPT Workflow | Auto-generate presentations from topics, scripts, or materials | Still needs human review after generation |
| Excel Formula Generator | Natural language to Excel/WPS/Google Sheets formulas | Validate formulas against sample data |
| Tencent Meeting | Book meetings, get transcripts and AI minutes | Requires meeting platform authorization |

Practical combos: for local files, prefer **Word / DOCX, Excel / XLSX, Powerpoint / PPTX**; for online collaboration, prefer **Tencent Docs** or **kdocs**; when there's a pile of materials, use **Markdown Converter** first to extract structure; add **Tencent Meeting** for meeting workflows.

## Word: From Blank Page to Formal Document

Word's real difficulties usually come down to four: not knowing what structure to follow, tone not being formal enough, chaotic heading numbering, and content without evidence sources. What WorkBuddy solves here isn't "thinking for you" — it's **turning your existing materials into a stable, consistently toned draft you can keep editing**.

Tasks that suit Word: formal proposals (events, projects, marketing, training), management documents (policies, notices, minutes, retrospectives, weekly/monthly reports), and product materials (PRDs, requirement specs, competitive analyses).

### Recommended Workflow

| Step | What WorkBuddy does | What the human confirms |
| --- | --- | --- |
| 1 | Reads materials, lists usable information and gaps | Which materials are fact sources, which are references |
| 2 | Generates the document outline and framing | Who the reader is; is the document for reporting, approval, or execution |
| 3 | Generates the Word draft per the outline | Heading hierarchy, section order, completeness of key information |
| 4 | Polishes, adds, and trims based on feedback | What can be finalized, what must be marked "TBC" |
| 5 | Outputs an editable docx plus a change log | Whether it's ready to send to colleagues for review |

### Example: Drafting a Team-Building Event Plan

```text
Generate a Word document framework for a company team-building event plan.
The company has about 80 people. Include: event goals, theme suggestions, an overall
schedule (with time points), grouping and interactive game ideas, a budget breakdown,
staffing assignments, contingency plans, and notes.
Keep the language concise and practical — no need to be overly detailed. Focus on laying out
the overall framework and the key decision items clearly, so it can go straight to leadership
to confirm the event direction.
```

![](/workbuddy/case-office/assets/001_image_PhFMbu3kTo.png)

![](/workbuddy/case-office/assets/002_image_UVm5bKLrZo.png)

### For Revisions, Don't Rewrite — State the Differences

```text
Revise the previous version of the team-building event plan Word document — do not regenerate the whole thing.
Revision requirements:
Compress the event goals to 3 items, each within 50 words;
Turn the schedule into a table with columns: time, segment, main content, owner, materials needed;
In the activity suggestions, add interactive segments suitable for a 100-person company and remove the ones that are too hard to execute;
Further break down the budget with: budget item, estimated amount, quantity, unit price, notes, plus a budget total;
Add a contingency section covering late arrivals, equipment failure, overtime performances, and safety incidents;
Make the overall language more formal and concise, suitable for submitting to leadership for approval.
Output the revised Word document as v2, and list the changes in changelog.md.
```

![](/workbuddy/case-office/assets/003_image_IoOLbfEcvo.png)

![](/workbuddy/case-office/assets/004_image_V1RpbVGuno.png)

### Advanced: Comparing Two Versions of a Policy, Contract, or Proposal

```text
Compare policy-v3.docx with policy-v4.docx.
Output four categories of differences — added, deleted, modified, and formatting-only — with section references and locations in the original text.
Highlight amounts, dates, responsible parties, approval conditions, exceptions, and negated statements.
Produce an impact list and open questions. Draw no legal conclusions and do not modify the original files.
```

![](/workbuddy/case-office/assets/011_image_HqbtbVTw3o.png)

![](/workbuddy/case-office/assets/012_image_MhArbb6Woo.png)

Document comparison is good at surfacing changes — it doesn't replace the final judgment of legal, finance, or the policy owner.

## Excel: Turning Spreadsheets Into Analysis That Answers Questions

The Excel problem usually isn't "can it make a chart" — it's "what question can this spreadsheet actually answer." Throw a spreadsheet full of blanks, merged cells, and mixed definitions at the AI and you'll often get charts that look professional but carry no business value. Order matters: **define the business question first, then choose the chart**.

Tasks that suit Excel: data cleaning (deduplication, filling blanks, standardizing formats, multi-sheet merges), business analysis (sales, margins, conversion rates, inventory turnover), report generation (weekly/monthly reports, budget tracking, attendance summaries), formula help (generating or explaining formulas, debugging `#N/A`), and visualization (charts, pivot tables, dashboards).

### Recommended Workflow

| Stage | Prompt focus | Output |
| --- | --- | --- |
| Read the sheet | First describe the workbook structure, field meanings, and obvious dirty data | Data dictionary, issue list |
| Define metrics | State the business question to answer — not just "analyze this" | Metric definitions table |
| Clean | Explain how to handle blanks, duplicates, and outliers | Cleaned xlsx / csv |
| Compute | Generate formulas and pivot tables, keep refreshable structures | Summary tables, formula notes |
| Visualize | Choose charts based on the business question; avoid piling them on | Charts, analytical conclusions |

### Example: Sales Data Analysis

```text
Read E-commerce Sales Data.xlsx — do not modify the original file yet.
Business question: analyze this month's sales performance and profitability by product line, determine
which lines contribute most, which are weak on margin, and identify unusual fluctuations in this month's selling.
Please output:
Explain the data fields, and check for missing values, duplicate records, outliers, and format issues;
By product line, compute revenue, gross profit, gross margin, revenue share, and gross profit contribution, and rank them;
Aggregate daily revenue and gross margin, and analyze the day-by-day pattern this month;
Generate bar charts comparing revenue and gross profit by product line, and a line chart of daily revenue;
Identify dates or records with clearly abnormal revenue, margins, or per-order amounts — explain from the data, don't speculate on business causes;
Summarize the best-performing product line, the line needing attention, and 3 conclusions directly usable for a business review.
Output output/sales-analysis.xlsx and output/summary.md.
Requirements: preserve the raw data; keep the calculations and formulas traceable; mark unverifiable causes as "to verify" — do not fabricate.
```

![](/workbuddy/case-office/assets/005_image_I118b7wyUo.png)

![](/workbuddy/case-office/assets/006_image_BWkRb60JPo.png)

![](/workbuddy/case-office/assets/007_image_XtfQbkCqio.png)

### Advanced: Multi-Sheet Merging, Reconciliation, and Exception Lists

The most valuable part of everyday office work isn't "making a chart" — it's surfacing data definitions and anomalies:

```text
Merge the weekly sales sheets for 6 regions in input/sales.
First check column names, data types, date ranges, currencies, and primary keys — if inconsistent, stop and list the differences.
Deduplicate by order number but keep the duplicate sources; before aggregating, output total rows, blanks, outliers, and duplicate counts.
Generate clean-sales.xlsx, exception-list.xlsx, and reconciliation.md.
Amount totals must reconcile with each source sheet's totals; if the difference isn't zero, produce no management conclusions.
```

![](/workbuddy/case-office/assets/009_image_UNEqbRnJfo.png)

![](/workbuddy/case-office/assets/010_image_L25tbHIUeo.png)

**Acceptance**: input totals, cleaning changes, and output totals balance; formulas recalculate; exceptions were not silently dropped; the charts use the same fields as the summary tables.

## PPT: It's Not Template-Filling — It's Turning Materials into Narrative

"Make me a high-end PPT" only makes the AI guess at style and produce pretty emptiness. A genuinely usable PPT must first answer three questions: **who** is this presentation for, **what decision** should they make after hearing it, and how much time do you have to present. A PPT Skill can handle page generation, but the storyline must be confirmed first — the prettier the slides, the easier it is to hide logic problems.

Tasks that suit PPT: project reports, business reviews, training decks, proposal presentations.

### Recommended Workflow

| Step | What WorkBuddy does | What the human confirms |
| --- | --- | --- |
| 1 | Converts Word, Excel, and old PPTs into material summaries | What must be kept, what can go |
| 2 | Generates a 6–10 page storyline with a title per page | Audience, duration, decision goal |
| 3 | Builds the PPT from the confirmed outline | Does each page carry only one key point |
| 4 | Adds charts, speaker notes, source mapping, and export versions | Are key numbers from the Excel |
| 5 | Layout check: text overflow, missing images, font sizes | Readable when projected; suitable for live delivery |

### Example: Building a Presentation from a Materials Pack

```text
Using the materials in the current workspace, create a presentation of 8 slides or fewer on the topic of AI Agents.
Audience: business and management staff with basic AI awareness but no Agent knowledge. Presentation length: 10 minutes.
Goal: help the audience understand what an AI Agent is, how it differs from ordinary AI chat tools,
which problems it can solve, and how an enterprise should judge whether adoption is worthwhile.
Materials: AI Terminology Handbook.md is the main content source; do not add facts or data beyond the workspace materials.
Keep it within 8 pages, one core conclusion per page;
Cases, data, and key judgments must cite the source material; do not fill in anything you can't confirm;
Slide titles should state the point directly — avoid generic titles like "Introduction to AI Agents";
Output output/ai-agent.pptx; after generating, check for text overflow, page whitespace, chart consistency,
missing images, font consistency, and page numbers.
Overall style: professional, clean, tech-flavored — but without excessive gradients, glows, or decorative elements.
```

![](/workbuddy/case-office/assets/008_image_ABXObcQeeo.png)

## The Trio Working Together: An Automatic Deliverables Pack After Meetings

Many office tasks aren't about a single file — they're about "something must exist after the meeting": minutes first, then the PRD, then the task sheet, and finally the reporting PPT. WorkBuddy's value is chaining these deliverables onto **a single chain of facts**.

Take a product review meeting; a workable Skill combo:

| Stage | Recommended Skill | Purpose |
| --- | --- | --- |
| Get meeting content | Tencent Meeting / smart-minutes type | Get the transcript, AI minutes, decisions, action items |
| Generate the PRD | Word / DOCX, Tencent Docs | Rewrite the meeting content into a product requirements doc |
| Generate the task sheet | Excel / XLSX | Output owners, deadlines, priorities, acceptance criteria |
| Generate the report | Powerpoint / PPTX | Turn the PRD and task progress into a management presentation |

```text
Read the transcript and AI minutes of this product review meeting and generate an office deliverables pack.
Goal: turn the meeting content into materials that can drive development.
Please output:
1. Word: output/feature-prd.docx, covering background, target users, core problems, the requirement list,
   process descriptions, acceptance criteria, risks, and open questions;
2. Excel: output/action-items.xlsx, with fields for item, owner, priority, deadline,
   dependencies, status, and acceptance criteria;
3. PPT: output/review-summary.pptx, 6 slides or fewer, aimed at management, highlighting this meeting's decisions,
   resource requests, and risks.
Constraints: anything not explicitly confirmed in the meeting must not be written as settled; names, dates, and feature scope must keep their sources;
mark items missing an owner or date as "TBC"; output the outline and task sheet field preview first, and generate the files only after I confirm.
```

## Common Mistakes and How to Fix Them

| Common mistake | Why it happens | A better phrasing |
| --- | --- | --- |
| "Make me a PPT, make it classy" | No audience, goal, or material constraints | State the audience, duration, slide count, decision goal, and must-keep data |
| "Analyze this Excel" | No business question, so the model only summarizes vaguely | State what question to answer, which metrics to compute, which dimensions to compare |
| "Write a report" | No document type or tone requirement | Say whether it's a proposal, summary, application, minutes, or PRD, and name the reader |
| "Do it all automatically, don't ask me" | Key definitions unconfirmed, risk amplified | Have WorkBuddy output the material list, risk list, and outline first; generate after confirmation |
| "Merge these materials into one file" | No distinction between facts, references, and to-confirm | Designate the single source of truth, the reference files, and fields that must not be fabricated |
