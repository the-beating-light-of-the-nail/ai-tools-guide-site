# Appendix A: Prompt Templates

Ready-to-use task prompt templates. Replace the bracketed `【】` placeholders with your actual content. Beginners should start with A.1–A.4; for writing tips, see the six-element table in [Quickly Completing Your First Task](/en/workbuddy/04-first-task/).

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
