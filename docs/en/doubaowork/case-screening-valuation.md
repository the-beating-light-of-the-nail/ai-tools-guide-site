# From Screening to Valuation: Unify the Definitions First, Then Compare and Price

> Scenario: Stock screening, peer comparison, and valuation are often treated as three separate jobs, but they're really one continuous data chain—screening rules decide which companies enter the sample, peer definitions decide which numbers are comparable, and the valuation model turns data into market assumptions. **Cut corners anywhere upstream, and that impressively precise target price at the end becomes meaningless.**

This chapter starts with a CSI 300 screen, then compares Zhongji Innolight, Eoptolink, and T&S Communications, and finishes with a reverse valuation of Midea Group. Different targets, one connected method: every step must leave behind **line-by-line evidence, non-comparable items, and reproducible formulas**.

## Step 1: Turn Natural-Language Conditions into Screening Rules

Use the **Stock Screener** capability, with both the constituent-list date and data date fixed. The first prompt demands **explain the rules before running the scan**:

```text
Convert the following natural-language conditions into computable CSI 300 screening rules and run them on a fixed data date.
1. Conditions: revenue growth in each of the last three complete fiscal years; positive operating cash flow in each of the last three complete fiscal years;
   ROE of at least 15% in the most recent complete fiscal year; debt-to-asset ratio no higher than 70%; and no delisting-risk warning in effect as of the data date.
2. Define each item's fields, formulas, reporting periods, currency, missing-value handling, and exclusions. Tell me first which conditions can be computed directly
   and which still have definitional disputes. You must state the number of stocks actually scanned, the constituent-list date, and the data coverage rate.
3. Output each rule's screening funnel, the selected companies with key figures, the reasons excluded companies were dropped,
   and a sensitivity analysis on thresholds ±10%.
Check for survivorship bias, look-ahead bias, and constituent-list changes. If the full sample can't be scanned,
label the result a sample demonstration—it must not be presented as a full CSI 300 screen.
```

The first round claimed it read all 300 constituents, obtained complete fields for 295, and kept 32 companies—but further checking found two conflicting intermediate counts in the funnel, only 14 stocks with genuinely independent second-pass data pulls, and several ROE errors already visible. **Aggregate numbers alone, without per-stock exit records, can't prove a full-universe screen was done.** Send a coverage audit:

```text
Please audit the screening sample you just produced. List the total number of stocks actually read, how many had all fields successfully retrieved, the number of missing fields,
the remaining count at each step, and the final company list. If the full CSI 300 constituent list as of the data date wasn't covered,
immediately retitle the result as a sample screen and delete any claim of full-market coverage.
```

Doubao Work then downgraded the title to "Sample Screen (partially independently re-checked)." **When the evidence falls short, lower the claim's grade first, then gather more material.** To push the task to a final file, demand line-by-line evidence for each of the 300 stocks:

```text
The previous result independently re-checked only 14 stocks, which doesn't prove a full CSI 300 screen. Keep going—
don't substitute aggregate counts for per-stock evidence again.

Fix the constituent-list date and the data date. First obtain and save a verifiable CSI 300 constituent list for that day (300 security codes).
Then, for each stock, save revenue for the last three complete fiscal years, operating cash flow, ROE for the most recent complete fiscal year,
debt-to-asset ratio, and delisting-risk warning status. Every row must include the security code, company name, reporting period, field value, unit,
data source, reason for any missing value, and pass/fail results on the five rules.

Complete the screen with a repeatable local script, and output csi300-stock-by-stock-evidence.csv, csi300-screening-script.py,
csi300-screening-report.md, and the run log. Recompute the screening funnel, final list, exclusion reasons, missing-field statistics,
and threshold sensitivities. Put the debt-to-asset ratio definition for financial companies under a separate rule—don't force-compare them with non-financial companies.
Then draw at least 10 names each from the final list, the borderline samples, and the excluded samples, and re-check them independently against the original reports;
if any error is found, correct the full dataset and rerun.

Only output the final list when the evidence table contains exactly 300 unique security codes, the script runs repeatably, and the spot checks pass;
otherwise keep recomputing and list the outstanding items explicitly. No buy/sell advice.
```

With everything on disk, the screening funnel ran 300→116→97→36→35→35, with 35 companies passing all rules; sensitivities were recomputed stock by stock (loosening the ROE threshold 10% to 13.5% yields 42 companies, tightening to 16.5% yields 24). Spot checks also exposed an ROE definition conflict (the script said "weighted average preferred," the report said "always period-end")—the fix was **unifying the formula to "period-end ROE = net profit attributable to parent ÷ period-end equity attributable to parent" and rerunning all 300 stocks**, listing separately any samples where weighted vs. period-end flips the verdict, rather than patching just the 30 spot-checked names.

> A screening report stating "12 hits out of 300" doesn't prove it actually scanned 300. **"High ROE" is not a rule; "weighted ROE above 15% for three consecutive years" is**—and a broken rule isn't fixed by changing one number, it means rerunning the whole sample.

## Step 2: Unify Definitions Before Comparing Peers

Once companies enter the candidate pool, don't rank them immediately. Use the **Multi-Stock Comparison** capability, and first align reporting periods, units, business scope, and metric definitions:

```text
On the same data cutoff date, compare Zhongji Innolight 300308, Eoptolink 300502, and T&S Communications 300394 side by side.

Compare the three companies on a unified basis across business position, product mix, customer concentration, revenue and profit growth, gross margin,
operating cash flow, capital expenditure, R&D spending, valuation basis, and key risks.
All numbers must use the same reporting periods, the same units, and the same source tiers.

Explain how the three companies differ across the optical module, optical component, and CPO supply chains; point out which metrics can be compared directly
and which can't be force-compared. Output a like-for-like comparison table, each company's strongest advantage and biggest vulnerability, the five variables that will decide relative performance,
and follow-up verification checkpoints. Don't simply crown a winner, and don't give portfolio weights.
```

Then audit column by column:

```text
Please audit the three-stock comparison table you just produced. Check each column's reporting period, currency, unit, accounting basis, and whether it comes from the company's original disclosure.
Move any item with a mismatched reporting period or source tier out of the main table into "not yet comparable."
Recompute the comparable items and state how the conclusions changed.
```

In testing, only 10 of the original 16 metrics survived: 6 were strictly comparable, 4 were recomputed to TTM under a single formula, and the other 6 were moved to "not yet comparable" due to mismatched reporting periods, unverified accounting definitions, incomplete interest-bearing debt, or unsupported R&D capitalization. **Placing the two optical-module makers and the upstream component company at their different positions in the chain avoids reading a segment's naturally high gross margin as superior operating ability.** The final file keeps only comparable metrics in the main table, moves the rest to a supplementary table with an item-by-item note on what's missing, and drops any simple ranking.

> The same "revenue" could be half-year, full-year, or trailing twelve months—don't line them up side by side. The main table does the comparing; the explanation table prevents misreading. You need both.

## Step 3: Use Valuation to Reverse-Engineer What the Market Is Betting On

Valuation comes last. Use the **Valuation Modeling** capability, with inputs, formulas, and results kept separate:

```text
Analyze, as of a fixed data date, what operating assumptions are embedded in Midea Group's (000333) current valuation.

First extract revenue, operating profit, operating cash flow, capital expenditure, net cash, and total shares from the company's official financial reports for the last three years.
Explain why you chose DCF, free cash flow to equity, or comparable companies—and why you didn't use the other methods.

Build base, optimistic, and conservative scenarios, listing the revenue growth, margin, reinvestment, discount rate, and terminal value assumptions.
Annotate every input with source, date, and unit. Keep inputs, formulas, and results in separate places,
and put all formulas in a locally recomputable spreadsheet—don't create an online spreadsheet.

Reverse-engineer what growth and margin path the current market cap requires to hold, then run sensitivity analyses on the discount rate and perpetual growth rate.
Output the assumptions table, valuation range, reverse derivation, and the three variables most likely to be wrong. The valuation range must not be written as a guaranteed target price.
```

If the formula audit fails (a `#NAME?`, a circular reference, a key hardcode), **don't patch the broken file—rebuild from a minimal viable version**: step one, build the input sheet using only verifiable inputs (each annotated with reporting period, unit, and page number); step two, build a single base scenario and one free-cash-flow path, and hand-verify enterprise value, equity value, and per-share value with an independent script; only after the base case passes, add conservative/optimistic scenarios, the reverse valuation, and sensitivity tables. Compare the three scenarios item by item with an independent script—**key results must agree within 0.01%**; if the audit still fails, keep recomputing and don't output a valuation range.

> What you reverse out of a market price isn't an answer—it's a set of assumptions. A valuation model's biggest danger isn't having many parameters; it's mixing parameters, formulas, and results together—if the historical data doesn't reconcile, the DCF downstream just keeps getting more precisely wrong. A valuation range can be wide, but every slice of that width should be explainable by a specific assumption.

## The More Precise the Numbers, the More You Must Be Able to Trace Back to Step One

Once screening, comparison, and valuation form one chain, every result can step back upstream: why did a company enter the sample—check the screening evidence; why is it above or below peers—check definitions and non-comparable items; why did the valuation move—go back to inputs, formulas, and scenario assumptions. It's more work than a pretty ranking, but far more reliable—**what ruins a financial model isn't computational complexity, it's one wrong definition traveling down the whole chain and getting dressed up as certainty by a decimal point**.

---

Next: [Know the Company, but Also Its Shareholders, Management, and Governance →](/en/doubaowork/case-governance)
