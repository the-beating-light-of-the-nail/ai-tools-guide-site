---
description: "That hundred-thousand-row spreadsheet lags just opening it. Never mind grouping by dimension, computing gender ratios, charting it, and exporting back to Excel—two hours by hand, with a real chance of getting the math wrong."
---

# Stuck on a 100,000-Row Spreadsheet? From CSV to Sourced Deck to Report Pipeline

That hundred-thousand-row spreadsheet lags just opening it. Never mind grouping by dimension, computing gender ratios, charting it, and exporting back to Excel—two hours by hand, and a real chance the math is wrong. This chapter covers three ways QoderWork handles data work: running a 100K-row CSV with one instruction, building a sourced research deck, and turning ten thousand rows of sales data into an interactive report.

> Community material: CSDN's [Latest Hands-On Guide to Alibaba QoderWork](https://blog.csdn.net/weixin_43107715/article/details/157585560) (2026-01/02, 29k reads) and the official user-case library.

## Scenario 1: Four Instructions for a 100K-Row CSV

You upload a 10,634-row scenic-area visitor CSV (another field test ran at the hundred-thousand-row scale) and lay out the requirements in one block of text:

```text
Analyze this scenic-area visitor CSV:
1. Group by "attraction type" (museum / ancient water town);
2. Compute total headcount, male/female counts, and ratio (1 decimal place);
3. Produce an Excel summary + a bar chart color-coded by gender;
4. Save to the "reports/202601" directory.
```

After you hit send, the task monitoring panel auto-splits it into four steps: read → group and compute → chart generation → save. In field tests at the 100K-row scale, **2 hours by hand → about 30 seconds**.

There's also an official four-dimensional template for a 10,634-row daily sales report—swap the fields and it's yours:

```text
@daily-sales.xlsx Analyze along three dimensions—"sales rep" (clients /
case types / total sales / per-capita), "month" (trend / month-over-month),
and "client" (Top 20 contribution / concentration)—output a report (tables +
charts), then translate it into Japanese and English versions.
```

What you actually save isn't "time" so much as **the ability to switch analysis dimensions whenever you like**—a traditional report has to be rebuilt for a new cut of the data; here it's one sentence.

## Scenario 2: A Research Deck with Sources

Ask it to research the outdoor apparel market and it builds you a 12-page deck along the dimensions you give it:

```text
Research the [outdoor apparel] market and produce a 12-page deck:
- Dimensions: 2025 revenue and 2026 forecast, Top 5 brand share (Patagonia,
  The North Face, etc.), sustainable-product share, online channel growth
- Structure: cover → agenda → market size → brand analysis → trend insights
  → summary
- Charts: line for trends, pie for share, bar for comparisons
- Every figure must cite its source (Statista / IBISWorld); mark anything
  unverifiable as "to be verified"
```

The last line is the one to hold it to: **every figure cites a source**. AI-generated market numbers have to be traceable, or one question from the floor sinks your presentation. Once it's generated, keep talking—have it adjust colors and layout.

## Scenario 3: A Reporting Pipeline for 10K-Row Sales Data

The standard four steps from an official showcase case. You hand it a sales CSV and it runs:

```text
@sales_data.csv:
1. Describe the row/column counts and field types
2. Compute sales and average unit price by category; list the Top 10 products
3. Analyze the monthly trend
4. Generate an interactive HTML report (auto-invoking Python charting)
```

## Five Habits for Data Tasks

If you want results you can trust, these five are worth building:

1. **Have the AI describe the data first** (field meanings, dirty data, missing values) and confirm a shared understanding before analyzing;
2. **Write metric definitions into the instruction** ("gross margin = gross profit / sales")—don't make the AI guess;
3. **List outliers separately** instead of letting them get averaged away in the summary;
4. **You pick the chart types** (lines for trends, pies for share, bars for comparison)—the AI's defaults may not fit your reporting context;
5. **Spot-check three numbers** against the source file by hand—the odds of an AI arithmetic slip are low but real, and the cost of tanking a presentation is high.

## Cost Note

Data tasks reading large files burn plenty of Tokens. The cost-control play: run the pipeline on the [standard-tier model](/en/qoderwork/03-first-task) first, confirm the intermediate results, then switch to the flagship tier only for the final report. More in [Awareness, Costs, and the Secure Working Environment](/en/qoderwork/adv-memory-cost).

## FAQ

**Does a hundred thousand rows really finish in 30 seconds?**
That's the order of magnitude in the field tests, assuming the data is clean and the instruction is specific. With lots of dirty data it will list the anomalies and wait for your call first, which takes longer.

**Can I drop AI-computed numbers straight into my presentation?**
Spot-check at least three key numbers against the source file. The error rate is low, but a mistake in front of the room is expensive.

**What if a source in the research deck is wrong?**
Make it cite a source for every figure and mark anything it can't find as "to be verified", so invented numbers don't slip in.

**Do data tasks burn a lot of Credits?**
Reading large files does cost more. Get it working on the standard tier first and switch to flagship only at the end; that saves a good chunk.

---

Next: [Browser Automation: Organizing 230 Official Account Articles →](/en/qoderwork/case-browser)
