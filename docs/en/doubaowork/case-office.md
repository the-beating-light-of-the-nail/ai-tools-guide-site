# One Set of Material, Three Deliverables: Word, Excel, and PPT

> Scenario: Monthly review / project report / event recap. One set of raw data, three deliverables in one go, with numbers that all agree.

I only meant to put together a sales review, but Doubao Work delivered an Excel workbook, a Word document, and a PPT deck in a single task—the core numbers matched across all three files, and during self-check it even caught a formula reference error and fixed it before handing things over.

Lots of office workers go through this every month: crunch numbers in Excel, write conclusions into Word, then distill it all into PPT. The workflow below was tested and is reproducible.

## Prepare the Material First

Three local files:

- **Sales detail sheet**: 8 sales records with city, channel, product, revenue, refunds, and order count;
- **Review background**: the month, targets, and business context;
- **Boss's requirements**: what Word, Excel, and PPT each need to deliver.

This step matters: AI can compute, organize, and produce files for you, **but the original facts still have to come from you**—revenue, refunds, and targets all need a source.

## One Prompt That Spells Out All Three Deliverables

The three files share one set of data definitions and are produced in the same task, which makes cross-checking easy. After copying, replace the file paths and output filenames with your own:

```text
Please read the 3 local files below and produce a full "August 2026 sales review" reporting pack:

1. [path to sales-detail.csv]
2. [path to review-background.md]
3. [path to boss-requirements.md]

Check the files and fields first, then start calculating. The CSV is authoritative for every number—don't invent any.

Deliver 3 downloadable files in the end:
- aug-2026-sales-review_data-analysis.xlsx: keep the raw detail sheet and add summary and chart worksheets;
  at minimum compute revenue, net revenue, refund rate, and order count, broken down by city, channel, and product.
- aug-2026-sales-review_report.docx: under 1,200 words, covering the core conclusions, numeric evidence, problems, and September actions.
- aug-2026-sales-review_deck.pptx: at most 8 slides, one key point per slide, and the key numbers must match the Excel.

Execution requirements:
1. First list the calculation definitions and delivery structure you plan to use.
2. Then generate the three files and run one cross-check.
3. Finally, provide an acceptance table listing, item by item: file name, page or worksheet count, key numbers, and whether they match.
4. Mark anything you can't confirm as "to be confirmed."
5. Only create new files locally—don't modify the input files, upload anything, or publish anything.
```

This prompt deliberately states five things: **where the material is, which data is authoritative, what each of the three files does, how delivery gets checked, and what actions are off-limits**. If you just write "make me a sales review," it will still go ahead—but what you get will likely miss the business requirements. Especially the Excel metric definitions, the Word length, and the PPT page count: spell those out in round one.

## It Calls Office Skills on Its Own

Once the task is sent, Doubao Work reads the CSV and the two briefing files, then computes revenue, net revenue, refund rate, and order count. No extra Mates were installed and no MCP was configured manually—it invoked the spreadsheet, document, and presentation capabilities on its own during execution.

The test data came out to: revenue RMB 775K, refunds RMB 36K, net revenue RMB 739K, refund rate 4.65%, and 266 orders—about 3.3% over the RMB 750K target. It also broke things down by city, channel, and product (e.g., Beijing's refund rate of 13.64%, the WeCom channel's 8.33%)—all those numbers flow into the Word doc and PPT afterwards, so locking down the calculation definitions early saves a lot of verification time later.

## Three Files, Actually Generated, Actually Openable

The tested delivery: Excel with 3 worksheets (raw detail + summary + charts); Word at 3 pages and under 1,200 words; PPT at 8 slides with one takeaway each; core numbers consistent across all three files.

One small hiccup along the way: while self-checking the Excel, Doubao Work found that the "is the refund rate on target" cell referenced the wrong cell, fixed the formula, recalculated, and only then delivered. This kind of self-checking is genuinely useful—a file generating successfully only means it opens; **whether the formulas and numbers are right still needs a separate check**.

## Adapt It to Other Work

As long as you have trustworthy source material, you can reuse this with a different topic:

| Scenario | Excel | Word | PPT |
| --- | --- | --- | --- |
| Monthly business review | Compute metrics | Write the analysis | Present to leadership |
| Project retrospective | Track action items | Keep the full record | Summarize for management |
| Marketing campaign recap | Tally leads and costs | Write the lessons | Show results |
| User research report | Organize samples | Write insights | Distill the highlights |

Two habits worth keeping: **declare a single source of truth** ("all numbers follow the CSV," which stops files from contradicting each other); and **require cross-checking** (have it produce an acceptance table with filenames, page counts, key numbers, and consistency—don't settle for the word "done").

What actually eats time in a three-deliverable job is repeatedly shuffling the same content around: numbers copied from the sheet into the report, then from the report into the deck—and one change means updating everything downstream. Doubao Work puts reading, computing, writing, tabulating, presenting, and self-checking into one task; you still decide the goals, definitions, and quality bar, while it grinds through the repetitive steps—that's where real time savings come from.

---

Related scenario: [Where Doubao Work Fits Best: Feishu →](/en/doubaowork/case-feishu)
