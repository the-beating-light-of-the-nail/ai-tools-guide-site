# What Is the Market Actually Arguing About: From Bull-Bear Disagreement to Research Report Fact-Checking

> Scenario: for the same company, the bulls can lay out one complete thesis and the bears another—both citing data. The real disagreement usually hides in the assumptions. Research reports have the same problem: facts, forecasts, and target prices sit on the same page, and readers easily mistake model assumptions for things that have already happened.

This chapter first uses Cambricon to find common facts between bulls and bears, then uses Foxconn Industrial Internet to dissect a research report: **first establish what both sides acknowledge, then check who baked which assumptions into their conclusions.**

## Part 1: Bulls and Bears, Put the Common Facts on the Table First

The more heated the opinions, the more important it is to find common facts first—whether revenue, customers, product progress, and capital expenditure can be traced to primary sources determines whether the ensuing debate has any foundation. Using the "Market Hotspot Analysis" capability, handle anonymous tips, secondhand research reports, and official disclosures separately:

```text
Please organize the main disagreements in the market around Cambricon (688256) as of a fixed data date.

First list the common facts that both the bull and bear sides can verify, including revenue, profit, cash flow, R&D spend,
product progress, customers, and competitive landscape. Each fact must carry a date, a source, and a source tier.

Then list separately the bull and bear sides' core assumptions on growth, domestic substitution, competition,
gross margin, R&D spend, and valuation.
For each view, state the original source, the strongest counterargument, the conditions under which it could be falsified,
and the next verification checkpoint.
When the original research report cannot be found, it may only be recorded as a secondhand opinion lead;
institutional target prices must not be kept as facts.

Place anonymous rumors and media exclusives separately under unconfirmed information.
Finally output a common-facts table, a disagreement matrix, decisive variables, and a follow-up verification checklist.
Do not pick a side for me.
```

This ordering changes the shape of the answer: revenue, profit, cash flow, and R&D spend are **recorded first by date and source**, and only then discussed as to whether they support the growth thesis; every view must state its strongest counterargument and falsification conditions—bulls must explain what data would weaken their case, and bears must say what change would force them to revise.

### Rewrite Slogans into Testable Assumptions

"Can these orders turn into sustained revenue" is easier to verify than "domestic substitution has huge headroom": the former goes back to revenue recognition, contracts, collections, and gross margin; the latter, without a time range and observable indicators, is hard to judge as fulfilled or not. **The point of a disagreement matrix is rewriting grand judgments into variables you can check next time.**

Three practical points:

1. **"Common facts" doesn't mean the sides reach the same conclusions**—the same heavy R&D spend reads to bulls as investment in future products, while bears worry about the pace of commercialization. The facts table only confirms amounts, periods, and sources; interpretation goes on the next layer. Mix the two layers and opinions get dressed up as facts;
2. **Don't keep too many decisive variables**—revenue recognition, gross margin, cash burn, product progress, and customer concentration already cover most of the debate. Give each variable one observable indicator and one checkpoint, and check against the same table next round;
3. **Keep old versions with every update**—when a new earnings report supports an assumption, record the new evidence; when data misses expectations, write down which falsification condition was triggered; even withdrawn opinions should keep their reasoning. Only after several quarters can this matrix reflect how judgments shifted with evidence.

Sourcing was the main problem in this round: the test report admitted that 12 key facts were not all traced back to first-party materials, and some institutional views came from secondhand platforms—institution name plus a number, with no way to prove which earnings forecasts, valuation methods, or time bases the analyst used. So run a **final source-tier audit**:

```text
Please continue refining the Cambricon bull-bear disagreement report and complete a final source-tier audit.

Re-examine the relevant materials. Company facts must go back to periodic reports, announcements,
and investor-relations originals; institutional views must state the institution, author, publication date,
and the originally accessible scope. When the original research report cannot be found,
keep it only as a secondhand opinion lead and delete target prices and specific earnings forecasts.
Anonymous rumors stay in the unconfirmed section and must not be retroactively validated
by later stock price moves.

Please output a new cambricon-bull-bear-matrix.md (Cambricon bull-bear disagreement matrix) containing the common-facts table,
bull/bear core assumptions, strongest counterarguments, falsification conditions, verification checkpoints,
a source-tier table, unconfirmed information, and an item-by-item checklist.
Save as a new file and keep the previous version. At the end, state which views were downgraded or removed
for insufficient sourcing. Do not pick a side for me.
```

## Part 2: When You Get a Research Report, Split Facts, Assumptions, and Target Prices First

A research report is not an announcement—it can offer frameworks and forecasts, but each layer of material carries a different evidence tier, and target prices must be traced back to model assumptions. Use the "Stock Research" capability to retrieve public research material, while checking facts that have already happened against the company's periodic reports:

```text
Please search online for publicly accessible research materials on Foxconn Industrial Internet (601138)
as of a fixed data date, and at the same time locate the company's most recent periodic report and related announcements.

Prioritize two brokerage research reports with clear publication dates and institutions, whose body text or core assumptions
are legally accessible.
If only public summaries are obtainable, clearly mark the source tier—do not pretend to have read the full report.
Extract separately: publication date, authoring institution, earnings forecasts, target-price methodology, core assumptions,
catalysts, and risk warnings.
Facts in the reports, analyst assumptions, and investment opinions must be kept separate.

Then verify item by item against the company's original disclosures: revenue, profit, gross margin, capital expenditure,
AI-server-related business, and customer or order claims. Anything that cannot be confirmed from company disclosures
must be clearly flagged.

Finally, compare where the two reports agree on facts, where their assumptions diverge, and which variables drive
the target-price gap. Output a report comparison table, a fact-check table, assumption sensitivities, and questions
to press the analysts on next. Do not recite the full reports, and do not give trading advice.
```

### OCR Material Is Not a Qualified Source

The first draft's limits were obvious: the Goldman Sachs full text came from a third-party research archive (an Hibor OCR archive, with OCR ambiguity even in the author's name) and can't be treated as the institution's official original; the UOB PDF was directly accessible (official PDF, with the print date, target-price methodology, and earnings forecasts all supported by the original text). Source audit:

```text
Please re-verify the two research reports you just used, item by item. List the original links, publication dates,
institutions, authors, accessible scope, and what you actually read. When a full text cannot be legally opened,
downgrade all conclusions drawn from secondhand summaries and delete target-price methodologies and earnings forecasts
with no support from the original text. Then regenerate a comparison table that keeps only verifiable evidence.
```

**When a report's original text doesn't qualify, don't lower the bar just to round out two documents.** The tested fallback strategy: keep the confirmed-accessible UOB official full text, then find one more report whose institution, author, publication date, and body text are all directly accessible through legitimate channels; if a second qualified full text truly can't be found, narrow the task to "verifying one qualified report against the company's original disclosures," and **explicitly close it out as "no second qualified full text found as of the cutoff date"**—rather than keeping a two-report target-price comparison.

> The first step of research report analysis isn't extracting the target price, but **confirming what the document in your hand actually is**: web summaries, screenshots, and OCR text can't be treated as the original report. A number printed in a report doesn't mean the number has been proven; if the original text is unobtainable, downgrade the conclusion—don't fill the gap with search summaries.

## First Know Which Assumption the Two Sides Split On

Putting bull-bear debates and research report audits together has one big benefit: you can see where opinions come from. The same set of facts can produce entirely different conclusions depending on how long growth lasts, how intense capital expenditure is, how the competitive landscape evolves, or where the valuation anchor sits. What a researcher needs to record isn't just "who's bullish, who's bearish," but **which assumption, once changed, invalidates the original judgment**. Target prices can wait—separate facts from assumptions first, and a market argument turns from emotion into a set of questions you can keep verifying.

---

Next: [Starting from a Candlestick Chart, Run an Evidence-Based Investment Review →](/en/doubaowork/case-kline-review)
