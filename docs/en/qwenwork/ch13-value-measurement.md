---
title: "Value Measurement: From Usage Data to Recomputable Decisions"
description: Decide workflow keep-or-retire with same-basis samples, cash ROI, releasable capacity, and quality/risk records
status: community-practice
verifiedAt: 2026-08-01
sources: []
---

# Value Measurement: From Usage Data to Recomputable Decisions

## Plain-Language Orientation

This chapter answers the most practical question of all: is this AI workflow worth continuing to fund. The easy way out is reporting "lots of people use it and it saves hours"—but usage is not value, and saved hours are not automatically cash. This chapter gives you a layered ledger: usage, efficiency and capacity, quality, risk, and cash recorded separately, with cash ROI and releasable capacity never blended into one number. When you finish you will know that only actually reduced spending, budget-backed avoidance, and attributable gross profit may enter the cash ledger, and that critical errors and unauthorized actions cannot be netted against average efficiency. When you report to your boss you will have a value ledger that can be recomputed and traced. Don't let usage set the tempo; every line has to trace back to a voucher; layer the records and they survive scrutiny; and when a hard gate fails, stop first.

## When You Need This Chapter

If you only want to know whether a draft is useful, just accept it as a task—no need to compute value yet. Return to this chapter only when you must decide whether to keep investing in an auto-generated weekly report, business reporting, or another team workflow, comparing manual time, quality, risk, cash spend, and releasable capacity. Remember one plain sentence: usage is not value; value must trace back to tasks, acceptance, risk records, and cost vouchers.

## 30-Second Conclusion

<span id="claim-usage-not-value-01" data-claim-id="claim-usage-not-value-01"></span>DAU, conversation counts, tokens, and artifact counts only show usage; by themselves they cannot prove enterprise AI has produced business value.

<span id="claim-capacity-separate-01" data-claim-id="claim-capacity-separate-01"></span>Cash ROI and releasable capacity must be reported separately; quality and risk are also reported separately, entering the cash basis only when verifiable actual losses or gains have formed.

- Lock the tasks, denominator, baseline, and labor costs before looking at pilot results.
- Saved hours are not automatically cash gains; new artifacts are not automatically incremental revenue.
- Expand, optimize, keep as pilot, or stop—all must return to the thresholds and hard gates registered before the pilot.

Plain-language note: before you file the value ledger, lock the tasks, denominator, baseline, and labor costs, and only then look at pilot results. Don't multiply saved hours by wages and call it cash, and don't call new artifacts incremental revenue. Cash ROI, releasable capacity, quality, and risk each get their own line, and critical errors and unauthorized actions cannot be netted against average efficiency.

## Why It Matters

Usage is easy to obtain and the easiest to misread. One task may produce many conversation turns and many files yet fail acceptance; generation time may drop while input preparation, review, and rework shift onto other people. If the team shows only active users or "hours saved," no one can tell whether cost truly fell, quality held, or risk grew.

The purpose of value measurement is not to find a bigger number for AI, but to help business owners allocate resources. A recomputable value ledger lets someone outside the pilot re-verify conclusions along task samples, time records, acceptance results, risk events, and cost vouchers—and see the part that cannot be monetized.

Plain-language note: look only at usage and you get pulled off course—one task, many turns and files, still rejected; time down, but review and rework handed to someone else. Show only active users or hours saved and you cannot see whether cost really fell, quality held, or risk grew. The value ledger is there to help the business owner allocate resources, not to find a bigger number for AI.

## Method or Model

### First Lock the Scenario, Samples, and Baseline

The unit of measurement is one clearly bounded scenario with acceptable results—not "the whole company using AI." Register before the pilot starts:

- Task start, end, eligible tasks, and exclusion rules;
- How baseline period, pilot period, seasonality, and task difficulty are compared;
- The valid-task denominator, and trace-keeping rules for failed, aborted, and excluded tasks;
- Manual time for input preparation, execution, waiting, review, rework, communication, and exception handling;
- Definitions of first-pass, rejection, critical errors, risk events, and business results;
- Vouchers or estimation bases for subscriptions, credits, implementation, training, maintenance, governance, and failure losses.

All started tasks keep results. Excluded tasks keep reasons; critical errors and unauthorized events must not vanish from risk records due to exclusion. Baseline and pilot use the same acceptance criteria; when the basis changes, rebuild the baseline rather than splicing incomparable data into an average.

Plain-language note: your unit of measurement is one acceptable scenario, not "the company using AI." Register the task boundary, denominator, exclusion rules, each segment of manual time, and the cost vouchers before the pilot. Excluded tasks keep their reasons, and critical errors and unauthorized events may not disappear from the risk record just because a task was excluded. Change the basis and you rebuild the baseline—never average incomparable data together.

### Record in Layers, Don't Compute One Total First

| Layer | Minimum records | Questions it answers | What it cannot prove alone |
|---|---|---|---|
| Usage | Eligible tasks, runs, users, repeat use, DAU, conversations, tokens, artifacts | Whether anyone uses it, what the load is | Quality, cash gains, or business results |
| Efficiency and capacity | Baseline vs. pilot median total time, waiting, manual steps, same-basis valid task volume | Where time changed, how much capacity can be released | That spending has already fallen |
| Quality | First-pass, manual edits, rework, critical errors, professional review results | Whether delivery still meets the same standard | That risk is now acceptable |
| Risk | Unauthorized events, privacy and permission issues, wrong targets, failure losses, takeover results | Whether hard gates or stop conditions were triggered | That business value offsets risk |
| Cash | Realized gains, incremental costs, vouchers, attribution, sensitivity | Whether realized cash results can be recomputed | The future value of unmonetized capacity |

Plain-language note: don't start by computing one total. Record usage, efficiency, quality, risk, and cash as five separate layers—the usage layer tells you only that people use it and how heavy the load is; it proves nothing about quality or gains. The cash layer answers only whether realized results can be recomputed; it says nothing about what future capacity is worth. Layer them and the conclusion survives being traced.

### Use the Single Cash and Capacity Basis

<span id="claim-cash-roi-formula-01" data-claim-id="claim-cash-roi-formula-01"></span>This book recommends: cash ROI includes only realized or verifiably supported cash gains, and counts all incremental costs from input preparation and human review through governance and failure losses.

```text
Realized cash gains = actually reduced spending
               + provable spending avoided with budget basis
               + attributable incremental gross profit

Total incremental cost = subscriptions and credits + implementation + training + input preparation + human review
           + rework + maintenance + governance + realized failure losses

Net cash gain = realized cash gains − total incremental cost
Cash ROI = net cash gain ÷ total incremental cost

Releasable capacity = (baseline per-task median total time − pilot per-task median total time)
             × same-basis valid task volume
```

Cash gains and costs must use the same statistical period, currency, and pricing basis. One-time and recurring costs are listed separately; when used for cross-period decisions, disclose the treatment rule for one-time costs, the periods covered, per-period recurring costs, and excluded items, subject to organizational finance policy. Mixing annual gains with monthly costs is forbidden, and predicted-period gains may not sit in the same cash ROI as realized-period costs.

When total incremental cost is zero or negative, do not compute or display cash ROI. Instead report the realized cash gains, net cash gain, total incremental cost, and why it is non-positive, with evidence and statistical boundaries; "infinite ROI" or other division results cannot substitute for absolute amounts.

Time and task volume use non-negative, same-unit, same-basis inputs: baseline and pilot durations use the same time units, task start/end points, and sample rules; valid task volume uses the same task definition and counting unit. When the baseline per-task median total time minus the pilot median is negative, do not call it negative "releasable capacity"—report it in the same time units as added capacity occupation or capacity loss, explain the cause, and never net it against cash gains.

Releasable capacity is time capacity, not cash income. Only when the organization actually reduces spending, avoids spending under an existing approved budget, or forms attributable incremental gross profit does the corresponding amount enter realized cash gains. Unfilled hiring without an approved budget, reallocated staff time, new files, or new conversations should be disclosed as non-cash outcomes.

Plain-language note: into cash ROI goes only what is realized or verifiable, and into incremental cost goes everything—subscriptions, implementation, training, review, rework, governance, failure losses. If the time difference goes negative, don't call it "negative capacity": report it as capacity occupation or loss. When incremental cost is zero or negative, don't compute ROI at all and don't wave around "infinite ROI"—report the absolute amounts and explain why.

### Control Attribution, Annualization, and Double Counting

Every value report must state the statistical period, sample rules, attribution assumptions, and low/medium/high sensitivity ranges. Sensitivity analysis changes only the disclosed key assumptions—such as valid task volume, labor cost, or attributable share—never the hard gates and factual records.

Short pilots may not be annualized unconditionally. If a budget scenario is required, list separately the business cycles, seasonality, task-volume caps, maintenance costs, and failure-rate assumptions, and state clearly that this is a forecast, not realized gains. Delivery acceleration, avoided quality losses, and labor costs may not be double counted; one outcome enters exactly one cash item, keeping its calculation path.

Quality and risk are reported separately by default. Only rework spending, compensation, losses, or gains that have occurred, are verifiable in amount, and clearly attributed may enter the cash ledger under the same voucher rules. Average efficiency or net cash gain cannot offset critical errors, unauthorized actions, or other hard-gate failures.

Plain-language note: every report states the period, samples, attribution assumptions, and sensitivity range; sensitivity may move only the disclosed key assumptions, never the hard gates or the facts. Don't annualize a short pilot unconditionally—if you must build a budget scenario, list the cycles and assumptions and label it a forecast. One result goes into one cash item only, no double counting; quality and risk get their own lines, and a hard-gate failure cannot be netted against average efficiency.

### Decide with Registered Thresholds

Value reports set no thresholds after results appear. Decisions cite the [Chapter 10 threshold registration table](/en/qwenwork/ch10-pilot-roadmap):

- **Expand**: all applicable hard gates passed, target metrics meet the registered thresholds, and evidence supports the post-expansion task and permission scope.
- **Optimize**: no hard gate failed, but verifiable improvements exist in inputs, entry, quality gates, or manual steps; retest after changes.
- **Keep as pilot**: the value direction is unclear, or samples or business cycles are insufficient; keep gathering evidence in a limited scope.
- **Stop**: a hard gate was triggered, no acceptable result can be formed, incremental costs are unacceptable, or further evidence gathering is not worth it.

Plain-language note: when you decide expand, optimize, keep, or stop, you do not invent a new threshold—you cite the table registered before the pilot. All hard gates passed and targets met means expand; no hard gate failed but improvements remain means optimize; insufficient samples means keep as pilot; a hard gate triggered or unacceptable cost means stop.

### An Office Action Example: Whether to Keep Investing in an Auto-Generated Weekly Report or Business Report

The keep-or-stop decision is not about how many people opened the workflow, but about separating five things over the same batch of tasks. First record input versions, manual edits, anomalies, acceptance, and final results; then compare against the baseline, thresholds, and hard gates registered before the pilot.

| What to look at | How to judge with ordinary office actions | Conclusions it supports |
|---|---|---|
| Time | Count input preparation, execution, waiting, review, rework, communication, and exception handling; compare baseline vs. pilot per-task median total time. | Shows whether time changed and how much time capacity can be released; cannot directly claim cash saved. |
| Quality | Record first-pass, manual edits, rejections, recomputation results, professional review, and critical errors—not just the reports finally adopted. | Shows whether delivery still meets the same standard; passing a stage or average efficiency cannot mask critical errors. |
| Risk | Fully record unauthorized access, outbound delivery, writes, wrong targets, privacy issues, takeover, and recovery verification. | Shows whether stop conditions were triggered; value statistics cannot offset hard-gate failures. |
| Cash ROI | Count as gains only actually reduced spending, budget-backed spending avoided, or attributable incremental gross profit; subtract subscriptions, implementation, training, review, rework, maintenance, governance, and realized failure losses. | Shows whether realized cash results can be recomputed; saved hours, new files, or new conversations cannot be written directly as cash gains. |
| Releasable capacity | Compute the median per-task total time difference times the same-basis valid task volume; report separately what staff can turn to—do not treat it as income. | Shows whether time capacity was released; it enters cash gains only when spending actually fell, spending was avoided under an approved budget, or attributable gross profit formed. |

For example, the weekly report generates faster but manual review and rework increase: time may not have improved, quality needs separate explanation, and cash ROI cannot be patched with imagined wage savings. Or, the business report is used by more people, but one critical basis error changes a business judgment: stop first, protect originals, take over manually, complete recovery verification, then update the value ledger; do not keep investing just because usage is high or the report arrives on time. Only when all hard gates pass, registered thresholds are met, and the added scope has evidence does "expand" apply; only when no hard gate failed but the process still needs work is it "optimize"; with insufficient samples or cycles, "keep as pilot"; on hard-gate triggers or unacceptable results, "stop."

You can reference the [Chapter 9 public case atlas (with 32 pending-verification scenario leads)](/en/qwenwork/ch09-public-case-atlas) to pick a weekly-report or business-report form for record-keeping practice. The atlas only helps understand scenarios and provides no baseline, cost, or value results of your own; ordinary records include at least input versions, manual edits, anomalies, acceptance, and results.

Plain-language note: the keep-investing call rests on the five layers over the same batch of tasks, not on how many people opened it. If the weekly report is faster but review and rework grew, time may not have improved and cash ROI cannot be patched with imagined wage savings. If the business report is widely used but one critical basis error changed a business judgment, stop first, protect the originals, take over, recover, and then update the ledger. All hard gates passed and targets met means expand; no failure but fixable issues means optimize; insufficient samples means keep as pilot; a hard gate triggered means stop.

## Cases and Evidence

Take the "monthly business report." The team first records data preparation, reconciliation, explanation, review, and rework in the manual process, then records the pilot under the same task boundary. If the report generates faster but finance staff spend more time recomputing and correcting, total time may not have fallen; if the report lands earlier but produces no realized spending reduction or attributable gross profit, the earliness should be reported as a business outcome or releasable capacity, not written into cash gains. Binding input versions, manual edits, anomalies, acceptance, and results to the same task is what prevents "was used" from being mislabeled "created value."

Likewise, if one wrong basis during the pilot changes a business judgment, record it in the quality and risk layers and handle it per the stage gates—even if average duration fell. Deleting failure samples before computing the first-pass rate, or counting only adopted reports, distorts the denominator.

This chapter's formulas and default categories are community practice norms, not accounting standards, valuation opinions, or validated industry benchmarks. Enterprises should have finance, business, and data owners jointly confirm vouchers, attribution, and applicable basis.

Plain-language note: take the "monthly business report"—it is faster, but finance spends more time recomputing and correcting, so total time may not have fallen; it arrives earlier, but with no realized spending reduction or attributable gross profit, earliness is a business outcome or releasable capacity, not a cash gain. Delete failure samples before computing the first-pass rate, or count only adopted reports, and the denominator is distorted and the conclusion does not stand.

## Enterprise Actions

Build one scenario value ledger for a workflow about to be reviewed:

1. The business owner locks the scenario, task eligibility, denominator, baseline period, and pilot period.
2. The user records per task: input preparation, execution, waiting, review, rework, and exception handling.
3. The content reviewer records first-pass, edits, and critical errors under the same acceptance criteria.
4. The data/security owner fully registers unauthorized, privacy, permission, and takeover events.
5. Finance or the responsible owner verifies cash gains, incremental costs, vouchers, and attribution assumptions.
6. Compute cash results and releasable capacity separately, listing quality, risk, and sensitivity ranges separately.
7. Decide expand, optimize, keep as pilot, or stop against the pre-pilot thresholds, recording approvers and the follow-up scope.

Stop signals include: baseline and pilot on different bases; failed tasks vanished from the denominator; human review or rework untimed; saved hours multiplied by wages written as cash gains; one outcome counted into multiple items; short-term results annualized unconditionally; critical errors offset by gain numbers; calculations that cannot trace back to tasks and vouchers.

Plain-language note: when you build the scenario value ledger, the business owner locks the basis, the user records time per task, the reviewer records quality, data/security records risk in full, and finance verifies the cash. Different bases, failures dropped from the denominator, saved hours times wages written as gains, one result counted twice, short-term results annualized unconditionally, critical errors offset by gains—all of these are stop signals, and the ledger cannot be built that way.

## Boundaries and Next Steps

Recomputable does not mean causality has been rigorously experimentally validated. Before-after comparisons can be affected by proficiency, seasonality, and task difficulty; low-frequency complex tasks are better served by disclosing complete cases, professional review, and limitations rather than disguising them as stable averages. Cash results should also follow organizational finance policy and applicable accounting requirements.

Value measurement decides whether a workflow deserves continued investment, not the product's official roadmap. Product, partner, and ecosystem suggestions should separately label public facts, tested combinations, feasible inferences, and hypotheses awaiting verification, to avoid writing suggestions as promises.

Plain-language note: recomputable is not the same as causally proven—before-and-after comparisons get skewed by proficiency, seasonality, and difficulty. For low-frequency complex tasks, disclose the full case and the limitations instead of disguising them as a stable average. Cash results still have to follow the organization's finance policy. Value measurement only answers "is it worth continuing to fund," not the product's official roadmap.

## Plain-Language Glossary

| Term | Plain language |
|---|---|
| Cash ROI | Realized cash gains minus all incremental cost, divided by the cost. Only what actually happened or can be verified goes in; lock the basis before you compute |
| Releasable capacity | Per-task time difference times same-basis task volume—time capacity, not income. Don't write it as cash; report it as capacity only |
| Same-basis baseline | The "how we do it today" numbers captured before the pilot; pilot and baseline use the same ruler and the same denominator |
| Denominator | The "total tasks" basis behind a ratio. Failures must not quietly leave it, or the ratio is distorted |
| Hard gate | Critical errors, unauthorized actions, and other non-negotiable items. Trigger one and no value statistic offsets it—you stop the ledger and stop the work |
| Sensitivity range | The result range under low/medium/high assumptions; you move only the disclosed key assumptions |
| Non-cash outcome | Avoided hiring with no budget, reallocated staff time, and similar. Disclose them as a separate line; they do not go into the cash ledger |

## FAQ

**Can you prove a workflow "saved money" by multiplying saved hours by wages?**
No. Saved hours are releasable capacity, not cash gain. Only actually reduced spending, spending avoided under an approved budget, or attributable gross profit may enter the cash ledger; otherwise disclose it as a non-cash outcome. Don't treat capacity as income, and don't treat new artifacts as incremental revenue.

**Usage is rising and reports arrive on time. Can you increase investment?**
Not on that basis alone. If one critical basis error changed a business judgment, stop first, protect originals, take over manually, complete recovery verification, and then update the value ledger. High usage and on-time delivery do not offset a hard-gate failure. Don't be fooled by surface activity—a hard-gate failure is the red line.

**What happens if you count the same benefit into several cash items?**
One outcome belongs to exactly one cash item, with its calculation path kept. Double count it and cash ROI is inflated; someone outside the pilot tracing the vouchers will find the mismatch and the conclusion is void. Double counting buries a landmine that detonates the moment anyone checks.

**Your short pilot produced good results. Can you annualize it straight into a budget request?**
Not unconditionally. If you need a budget scenario, list the business cycles, seasonality, task-volume caps, maintenance costs, and failure-rate assumptions separately, and state clearly that it is a forecast rather than realized gains. Annualize with a forecast label, not as realized fact.

**As the finance or business owner, what must a value ledger trace back to?**
Back to task samples, time records, acceptance results, risk events, and cost vouchers. Someone who was not in the pilot has to be able to recompute your numbers along those vouchers; otherwise it is a story, not a ledger. A ledger that cannot survive recomputation is not a ledger—vouchers are the floor.

[Next chapter: Product and Ecosystem Roadmap Suggestions](/en/qwenwork/conclusion)
