# After the Earnings Report: Read the Growth First, Then Audit Its Quality

> Scenario: earnings day makes it easy to get swept along by "growth"—revenue up, profit up, gross margin moved. It looks like a lot of information, but only two or three items may actually drive your judgment. Worse, the income statement can tell a rosy story that the cash flow statement and balance sheet don't agree with; a plain performance summary easily mistakes accounting profit for money already collected.

This chapter uses Century Huatong's semi-annual report to catch operating changes, then CATL to check cash, receivables, and profit quality: the first half answers "what happened", the second half asks "does this growth survive a recalculation". The tool is the "Performance Analysis" skill (the Skill runs the earnings-analysis workflow; it doesn't mean numbers can skip verification against the original text).

## Layer One: Find What Actually Changes the Judgment

Don't rush to write "beat expectations"—first verify the report's identity, period, and units, and pin down date boundaries and comparison bases up front:

```text
Use the performance-analysis capability to analyze Century Huatong (002602)'s
2026 Semi-Annual Report officially disclosed on August 28, 2026. This task
covers only what was public as of August 28.

First confirm the report title, reporting period, announcement date,
securities code, and the original link on cninfo.com or the Shenzhen Stock
Exchange. Then compare against the 2025 semi-annual report for the same
period, extracting operating revenue, net profit attributable to parent,
recurring-adjusted net profit, operating cash flow, gross margin, R&D
spending, the games business, the auto-parts business, domestic vs. overseas
revenue, and the interim dividend proposal.
For every figure, state the reporting period, unit, year-over-year change,
and source page; for fields the report doesn't disclose, write "not
disclosed"—do not fill in zeros.

Group the changes into four buckets: scale changes, profit quality, business
mix, and cash & shareholder returns. Identify at least three changes that
genuinely alter the judgment, and for each give one supporting piece of
evidence, one possible counter-explanation, and the next material to verify.
Do not apply an "above expectations" label that can't be traced to a source.

Finally, generate "century-huatong-2026-interim-key-changes.md" containing a
report identity card, a core-metrics comparison table, the four change
groups, a source-verification table, three open questions, and a reader
verification checklist. No target prices, ratings, or buy/sell advice.
```

Four guardrails: use only materials dated on or before disclosure day; compare like periods (2026H1 only against 2025H1); never fill undisclosed fields with zeros; no target prices or trade recommendations.

**Verify the report before talking growth**: the field run first confirmed the report title, period, announcement date, securities code, and the original cninfo PDF (the interim report is unaudited)—with the identity card done, the comparison has a common baseline. Core metrics then lined up: operating revenue RMB 22.117 billion (+28.53%), net profit attributable to parent RMB 4.503 billion (+69.51%), recurring-adjusted net profit RMB 4.303 billion (+66.40%), operating cash flow RMB 4.497 billion (+14.78%).

Don't stop at "revenue and profit both up": gross margin rose 3.19 percentage points, but the **selling expense ratio rose 4.08 points** too; lower admin expenses and financial expenses turning negative also shaped the profit growth. Use the report's own tables when splitting by industry, product, and region, so "by industry" and "by product" figures don't get mixed into one basis; operating cash flow grew more slowly than profit; the interim dividend is still a **board proposal**, not an implemented fact.

**Four buckets beat one paragraph of "strong results"**: scale changes / profit quality / business mix / cash & shareholder returns keep a dozen metrics from being kneaded into one verdict. Every judgment keeps a counter-explanation—"overseas revenue share rising" wasn't written up as a positive; instead it came with supporting evidence (the by-region table), counter-explanations (FX, hit-game lifecycle), and next materials to check (Q3 by-region data, grossing charts, new-game launch dates).

## Layer Two: Once Profit Grows, Check Where the Cash Went

Judging growth quality means pulling operating cash flow, receivables, inventory, and contract liabilities into one table:

```text
Using CATL (300750)'s three most recent annual reports and latest periodic
report published as of August 28, 2026, examine its financial quality.

Compare operating revenue, net profit attributable to parent,
recurring-adjusted net profit, and operating cash flow. Then check
inventory, accounts receivable, contract liabilities, capital expenditure,
depreciation & amortization, R&D spending, government subsidies, and
non-recurring gains/losses.

Keep original figures, reporting periods, units, page numbers, formulas, and
computed results in the tables. Recompute at minimum: the match between
operating cash flow and net profit, receivables growth vs. revenue growth,
and inventory growth vs. revenue growth. Stop comparing whenever the basis
differs across periods, and say why.

For every anomaly, give two explanations and a next verification path.
Output a financial-quality checklist, supporting evidence, counter-evidence,
and questions management should answer. Do not grade the whole company with
words like excellent or good, or with a single ratio.
```

This task is complex enough that Doubao Work delegates it to an "organizer" Agent—coordinating multiple sub-agents to split the work—delivering a Markdown report, an Excel checklist, and an independent verification report.

### Right Formula, Wrong Units—Still Possible

Then send a formula-review prompt:

```text
Re-verify every self-computed metric in the tables above. For each, write
out the original figures fed into the formula, reporting period, unit, and
source page, recompute, and mark consistent or inconsistent. Stop
calculating for any item with a missing figure, mismatched basis, or
unconfirmable page—do not fill gaps with zeros or estimates.
```

On review, 40 ratios, 30 growth rates, and 4 differences held up—but that's **not grounds to declare the report passed**: a second-round audit then caught two unit-conversion errors—the original report disclosed figures in "thousands of yuan", the conversion to "hundred-millions" mistakenly used the ten-thousands factor, and two absolute amounts came out 10x too large. The final file kept a change log: which amounts were corrected, old and new values, and which passages were affected.

### After Unifying Formulas and Units, Recompute from Scratch

```text
Based on the two "thousands-to-hundred-millions, 10x inflation" problems
found in the independent verification, recalculate CATL's financial-quality
report and checklist, and run a complete recomputation.

First list the erroneous fields, original figures, original units, wrong
conversions, correct figures, correct units, source pages, and affected
conclusions. Then check every cross-period figure and unify the ten-thousand
/ thousand / hundred-million / percentage bases; stop comparing any item
whose period, accounting basis, or page number doesn't line up. Recompute
the operating-cash-flow-to-net-profit match, receivables growth vs. revenue
growth, and inventory growth vs. revenue growth, showing inputs and formulas
for every self-computed metric.

Save new files "catl-financial-quality-report.md" and
"catl-financial-quality-checklist.xlsx", keeping the previous versions for
comparison. Reopen the new workbook and audit formulas, units, blanks, and
cross-sheet references; the error count must be zero—if any remain, do not
write the final files; keep recalculating. Finish with a revision list, a
recomputation list, remaining non-comparable items, and pointers to the two
new files. No company ratings or stock-price calls.
```

Opening the final workpapers: the first two screens pin down reporting periods and original figures (mix up yuan, ten-thousands, and hundred-millions even once and every ratio downstream distorts); the middle lays profit, operating cash flow, and receivables side by side (**when the three diverge, that's where to keep digging**); the end keeps formulas, anomalies, and materials to verify—a workpaper passes only if someone else can recompute it.

## The Endpoint Is a Sharper Set of Questions

This process doesn't stop at "revenue grew X%, profit grew Y%". It keeps asking: which business drove the growth, has the cash actually come back, why did receivables and inventory move, are units and periods consistent, and does management's explanation show up anywhere in the statements. After finishing an earnings report, the truly useful deliverable isn't a one-page summary but **a unit-consistent, still-verifiable list of questions**.

---

Next: [Researching a Company for the First Time: from Business Model to Eight Key Questions →](/en/doubaowork/case-first-company)
