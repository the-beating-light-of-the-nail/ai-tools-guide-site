---
description: "Ready-to-use task prompt templates. Swap the bracketed placeholders for your actual content. Beginners should start with A.1–A.4; for writing tips, see the six-element table in Quickly Completing Your First Task."
---

# Appendix A: Staring at the Input Box? 12 Templates You Can Edit Twice and Send

The first time you open WorkBuddy, what stops you usually isn't a feature — it's how to phrase the sentence. You want it to tidy up a folder, you say "organize this for me," and you may get back a directory structure nobody can read. State the requirements clearly and the same job comes out at double the quality. This page gives you 12 instruction templates you can copy straight across: replace what's inside the brackets with your own content and send.

## How to Use the Templates

Don't copy them wholesale. Do three things first:

1. **Swap the placeholders**: replace the bracketed content with your real filenames, industry, and fields. Leave them in and it can only guess.
2. **Add the output format**: the template gives you a skeleton. Whether you want Excel or Markdown, whether you need charts, how many pages — add one line at the end spelling it out.
3. **Run a small sample first**: for any instruction that moves, deletes, or overwrites original files, have it produce a plan first and execute only after you confirm.

Beginners should start with A.1–A.4; those four are the most common and the least likely to go wrong. For writing tips, see the six-element table in [Quickly Completing Your First Task](/en/workbuddy/04-first-task/).

## How to Pick One

When you're not sure which to use, first decide whether this step is "organizing files," "crunching data," "generating a document," or "running on a schedule." A.1–A.4 cover most of everyday work, so start by mastering those four. A.7 through A.9 are advanced uses — revisions, document comparison, multi-sheet reconciliation — and those three are the most prone to silent errors, so check the numbers yourself after each run. A.10 through A.12 lean toward specialized scenarios; come back to them once you're comfortable.

## A.1 File Organization

```text
Please organize the files in the current folder.
Categorize them by file type and topic, and generate a new folder structure.
Show me the organization plan before executing — do not move files directly.
```

## A.2 Excel Analysis

```text
Please analyze this Excel file.
Output: key metrics, anomalies, trend changes, possible causes, and recommended actions.
Generate a summary report and charts.
```

## A.3 PPT Generation

```text
Please generate a PPT outline based on this Word document.
Requirements: about 10 pages, each with a title, 3–4 bullet points, and suggested charts.
Formal style, suitable for reporting to management.
```

## A.4 Meeting Minutes

```text
Please organize this meeting content.
Output: conclusions, action items, owners, deadlines, risk points, and open questions.
```

## A.5 Industry Research

```text
Please research [industry/company/product].
Output: market background, major players, competitor comparison, trend judgments, opportunities, and risks.
Attach source links.
```

## A.6 Sales Proposal

```text
Please generate a pre-sales proposal based on the client's materials.
Include: client background, pain-point analysis, recommended scenarios, implementation path, expected benefits, and demo flow.
```

## A.7 Revisions (Don't Rewrite — State the Differences)

```text
Please revise the previous version of [document name] — do not regenerate the whole thing.
Changes: [list specific edits]
Output the revised v2 and list this round's changes in changelog.md.
```

## A.8 Document Comparison (Policies / Contracts / Proposals)

```text
Compare [File A] with [File B].
Output four categories of differences — added, deleted, modified, and formatting-only — with section references and locations in the original text.
Highlight amounts, dates, responsible parties, approval conditions, exceptions, and negated statements.
Produce an impact list and open questions. Do not modify the original files.
```

## A.9 Multi-Sheet Merging and Reconciliation

```text
Merge the [N] spreadsheets in [directory].
First check column names, data types, date ranges, and primary keys — if inconsistent, stop and list the differences.
Before aggregating, output total rows, blanks, outliers, and duplicate counts.
Generate the cleaned file, an exception list, and reconciliation notes.
Amount totals must reconcile with each source sheet's totals; if the difference isn't zero, produce no management conclusions.
```

## A.10 Investment Research: A Company's Factual Base

```text
Please systematically organize the fundamentals of [company name] and output a structured summary, including:
1) Core business and main product lines
2) Revenue and profit composition
3) Major customers and application scenarios
4) The company's position in the industry chain
5) The most important strategic changes in recent years
Requirements: use only verifiable information; cover each part in 3–5 bullet points;
no investment advice — facts only.
```

> For the fuller investment research prompt chain (industry lens, business breakdown, bull/bear disagreement, and the due-diligence-grade full package), see [Making Investment Analysis a Daily Habit](/en/workbuddy/case-investment/). This template is for research assistance only and does not constitute investment advice.

## A.11 Multi-Agent Task Brief

```text
Goal: Produce a [deliverable type] of [duration] for [product/project].
Style: [reference style].
Assets: [asset space path, or provided files].
Roles: [producer, role A, role B...]
Confirmation points: [which stages need user confirmation before continuing].
Fully/semi-automatic: [whether human intervention is needed at intermediate points].
```

## A.12 Automated Task Definition

```text
Task name: [name]
Trigger: [every day 09:00 / every Friday / the 1st of each month]
Prompt: [full task instructions]
Data sources: [list of @skills or connectors]
Quality gates: [≥ N valid items; ≥ N available data sources]
Output format: [structured list/file]
Push target: [Feishu group / email / document append]
Idempotency: batch ID = [prefix]-{date}; mark after a successful push, never re-push
Retry strategy: retry data source timeouts once; 2 backoff retries for push failures; escalate everything else to a human
Owner: [responsible person]
Disable via: WorkBuddy automation task management page → Pause
```

## FAQ

**I copied the template exactly — why is the result still wrong?**
Usually the placeholders weren't fully swapped, or you never stated the output format. Replace the bracketed content with concrete filenames and fields, then add a line like "output as Excel" or "keep it under 10 pages," and accuracy goes up a lot.

**Do I delete the brackets too?**
Yes. The brackets are just placeholder markers on this page — when you substitute your real content, remove the brackets along with them.

**How is A.7 different from regenerating the whole thing?**
A.7 explicitly says "revise on top of the previous version, do not regenerate the whole thing." Leave that line out and it will most likely rewrite everything, and the wording you tuned by hand is gone.

**How do I keep reconciliation tasks from miscalculating?**
Don't delete that line in A.9: "amount totals must reconcile with each source sheet's totals; if the difference isn't zero, produce no management conclusions." It forces the system to stop and report the discrepancy instead of forcing a total for you.
