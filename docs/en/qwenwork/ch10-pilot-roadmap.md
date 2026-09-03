---
title: Scenario Selection and the 30/60/90-Day Pilot
description: Decide when a scenario enters team and scaled operation with unified scoring, threshold registration, and stage gates
status: community-practice
verifiedAt: 2026-08-01
sources: []
---

# Scenario Selection and the 30/60/90-Day Pilot

## When You Need This Chapter

If you are only organizing your own weekly reports, meeting minutes, or other low-risk drafts, you can skip this chapter for now. Come back to confirm stage boundaries only when you want the team to share usage, handle sensitive materials, write or send automatically, run across systems, reuse across multiple people, or decide whether to keep investing and rolling out. The "stage gates" here are checkpoints that decide whether each step may continue; you do not need to understand the scoring sheet or governance terminology first.

## 30-Second Conclusion

<span id="claim-pilot-stage-gates-01" data-claim-id="claim-pilot-stage-gates-01"></span>This book defines personal template candidate, team workflow release, and scaled rollout as the only three stage gates; calendar time, scenario scores, or average efficiency gains cannot replace stage gates.

<span id="claim-critical-error-hard-gate-01" data-claim-id="claim-critical-error-hard-gate-01"></span>Critical errors, legal, security, and unauthorized actions are hard gates that cannot be relaxed; efficiency, adoption, and satisfaction are adjustable experimental thresholds.

- Scenario scores only decide who gets verified first, not who may bypass hard gates.
- Every stage must retain samples, acceptance, anomaly, and approval records.
- If the previous stage has not passed, no auto-promotion just because day 30, 60, or 90 has arrived.

## Why It Matters

Older practices often equate "high frequency, time-consuming" directly with "worth automating," and easily read 30/60/90 days as expanding headcount by date. That lets a high-scoring scenario with unclear permissions enter production first, or lets a one-off demo success be mislabeled as a reusable team capability.

With unified scenario scoring, same-basis baselines, and stage gates, enterprise AI owners can rank candidate scenarios, business owners can judge whether to keep investing, and data/security owners can stop risk from being masked by average efficiency. Only when all three use the same threshold registration table can they make traceable decisions among expanding, optimizing, keeping the pilot, and stopping.

## Method or Model

### First Complete the Scenario Card and Same-Basis Baseline

Candidate tasks are first written up per the [Chapter 7 scenario card](/en/qwenwork/ch07-role-roadmaps) with business problem, inputs, deliverable, acceptance, forbidden actions, metrics, risks, and baseline. The baseline and the pilot must use the same task start, end, sample rules, and acceptance criteria, counting input preparation, human review, rework, communication, and exception handling into total time.

The baseline keeps at least per-task records, task type, input versions, total time, acceptance results, rework, and risk events. For high-frequency tasks, compare medians and distributions, not the single fastest result; for low-frequency complex tasks, keep complete case timelines and professional review conclusions, and do not disguise a few cases as average effects.

Before the pilot starts, the denominator basis must be registered and locked, including inclusion eligibility, exclusion rules, how aborted or failed tasks are handled, and the evidence for judging "valid tasks," "eligible tasks," and "representative samples." The baseline period and pilot period may include or exclude tasks only per that basis; if business scope or task structure changes, create a new version and re-establish a comparable baseline—never modify the denominator after the fact.

All started tasks keep their results and exclusion reasons; failed, aborted, or excluded tasks still enter the run log. Critical errors, unauthorized events, and other hard-gate failures must be fully logged; they may not be moved out of the ledger because a task was excluded, nor hidden outside the denominators of efficiency, quality, adoption, or satisfaction metrics.

### Rank Candidate Scenarios on Seven Dimensions

All seven dimensions are scored 1–5. Except for data risk, stronger conditions score higher; data risk is reverse-scored—"lower risk, higher score." A 3 in the table is the unified midpoint anchor; a 2 means the evidence exceeds a 1 but has not reached a 3, a 4 means it exceeds a 3 but not a 5; when hard to judge, take the adjacent lower score. With no evidence, record a fixed 1 and mark it as needing evidence—never use a 2–4 to mask missing evidence.

| Dimension | 1-point signal | 3-point signal | 5-point signal | Minimum basis |
|---|---|---|---|---|
| Frequency | Occasional, hard to form repeat samples | Occurs on a fixed cycle, but sample or task volume fluctuates | Occurs continuously with stably obtainable samples | Task ledger or calendar records |
| Time cost | Current total effort is small | Clear manual effort, but total or repetition moderate | Current total effort is high and repeatedly occupies staff | Per-task time including review rework |
| Input stability | Sources, fields, or versions change often | Core inputs stable; some field or version changes still handled | Sources, fields, versions, and authorization scope stable | Input list, field dictionary, version records |
| Acceptance clarity | Judged only by feel | Some standards objectively checkable; key quality still needs human judgment | Recomputable, traceable, or sign-off-able standards exist | Acceptance checklist and rejection samples |
| Failure reversibility | Errors hard to undo and affect external objects | Recoverable via explicit manual steps; impact internal only | Only isolated drafts produced and recoverable | Rollback path and failure drills |
| Data risk | Involves regulated, organizational-secret, or permission-unclear data | Uses clearly authorized internal data; use and retention still restricted | Uses public or authorized low-sensitivity data | Data classification and authorization records |
| Business impact | No clear effect on cycle, quality, or risk | Affects one defined process metric, but attribution evidence limited | Direct, measurable effect on a defined business problem | Business metrics, error costs, or wait records |

```text
Candidate ranking score = frequency + time cost + input stability + acceptance clarity
             + failure reversibility + data risk (low risk scores high) + business impact
```

The total is only for ranking candidate scenarios in the same round. A high score does not mean low risk, and grants no data access, write, send, or publish permission; every candidate scenario must pass the hard gates on its own.

### Establish the Single Threshold Registration Table

Each scenario maintains exactly one threshold registration table with fixed fields. Efficiency, adoption, and satisfaction get no cross-scenario unified numbers; they must be registered against baseline and business goals before seeing pilot results; adjustments can only target future validation batches and cannot retroactively change completed judgments.

| Metric formula | Applicable stage | Default | Basis | Minimum sample | Observation period | Adjustable by | Exception reason | Stop condition | Approver |
|---|---|---|---|---|---|---|---|---|---|
| Critical errors = tasks or events judged as critical errors | All stages | 0 | Hard gate, not relaxable | All samples of the stage | Entire stage | May not be lowered; business owner may add categories or overrides | Not allowed | Stop immediately on any critical error | All approvers of the stage |
| Unauthorized data or actions = unauthorized access, outbound delivery, writes, deletes, or publishes | All stages | 0 | Legal and security hard gate | All samples of the stage | Entire stage | Not adjustable | Not allowed | Stop immediately on any event | Business owner, data/security owner |
| Failed legal and security items = failed items among those to check | All stages | 0 | Organizational policy and applicable requirements | All applicable check items | Entire stage | May not be lowered; the organization may raise | Not allowed | Stop immediately on any hard-gate failure | Business owner, data/security owner, and required professional owners |
| First-pass rate = valid tasks passing first acceptance / valid tasks | Team workflow release | Not below the same-basis baseline | Team release stage gate | At least 10 representative samples covering required boundaries | 31–60 day corresponding stage | Business owner may only raise | Not allowed below the same-basis baseline | No release below baseline | Business owner, process maintainer, data/security owner |
| Efficiency improvement = (baseline per-task median total time − pilot per-task median total time) / baseline per-task median total time | Scaled rollout or registered experimental stage | Registered pre-pilot; no cross-scenario unified value | Same-basis baseline and business goals | Scaled-stage sample requirements | At least 1 corresponding stage or full business cycle | Business owner | Task structure, seasonality, or process change; evidence required | No scale-up if not met; stop immediately on hard-gate failure | Stage approvers |
| Scenario quality pass rate = valid tasks meeting scenario quality standards / valid tasks | Scaled rollout or registered experimental stage | Registered pre-pilot; not lowerable within a stage | Scenario card acceptance and professional standards | Scaled-stage sample requirements | At least 1 corresponding stage or full business cycle | Business owner may register or raise before stage start | Basis changes require a new baseline; no after-the-fact relaxation | No scale-up if not met and no other registered target is met | Stage approvers and required professional reviewers |
| Adoption rate = valid tasks completed per registered process / eligible tasks | Registered experimental stage | Registered pre-pilot; no cross-scenario unified value | Available task pool and run records | Stage sample requirements | Entire stage | Business owner | Entry, population, or task pool change; reason required | Optimize and retest or stop below threshold | Stage approvers |
| Satisfaction = sum of valid ratings / number of valid ratings | Registered experimental stage | Registered pre-pilot; no cross-scenario unified value | Unified scale and anonymous feedback | Stage sample requirements | Entire stage | Business owner | Scale or participant change; reason required | Optimize and retest or stop below threshold | Stage approvers |

Legal, security, unauthorized actions, and critical errors are hard gates that cannot be relaxed. Efficiency, adoption, and satisfaction are adjustable experimental thresholds; the adjuster must write the reason, evidence, and effective batch in "exception reason," and the "approver" must re-approve.

### Fix the Definition of Critical Errors

"Critical errors" include at least:

1. Key number or basis errors that change the direction of a business decision.
2. Fabricated or untraceable core sources.
3. Wrong person, object, time, amount, or recipient.
4. High-consequence conclusions missing required professional review.
5. Unauthorized data access, outbound delivery, write, delete, or publish.
6. Defects that leave the deliverable unopenable, unrecomputable, or unrecoverable.

These minimum categories, plus legal, security, and unauthorized actions, may not be downgraded. Before each scenario pilot, the business owner and data/security owner jointly supplement a scenario-specific critical error list and judgment evidence. Only for ambiguous quality issues within the supplemental categories may the two owners jointly record a reason not to count them as critical errors in the registration table; that record cannot rewrite the minimum categories above.

### Run the Single Three-Stage Default Gates

The following are the default stage gates:

> Personal template candidate: 5 representative normal samples + 2 boundary samples; 0 critical errors; 0 unauthorized data or actions; acceptance records every time; approvers are the user and the business owner.

> Team workflow release: at least 10 representative samples covering empty data, field changes, duplicate records, permission expiry, key-number conflicts, and repeated runs; 0 critical errors; first-pass rate not below the same-basis baseline; all hard gates passed; approvers are the business owner, process maintainer, and data/security owner.

> Scaled rollout: by default at least 20 valid tasks covering 1 full business cycle; low-frequency complex tasks use at least 3 complete cases, 2 independent professional reviewers, and consistent passing conclusions; 0 critical errors; registered efficiency or quality targets met; no unresolved permission issues; approvers are the business owner and data/security owner.

Personal template candidate, team workflow release, and scaled rollout must all pass every applicable hard gate. Even a small-scope, low-risk-action personal template candidate may not bypass the applicable legal, security, data-authorization, or unauthorized-action hard gates.

The approvers above are only each stage's minimum business approval set. If the threshold registration table, data/security, legal, or professional hard gates require other approvers, the final approver is the union of "the stage's minimum approvers" and "all applicable hard-gate approvers"; neither side may be omitted.

The business owner may raise standards; lowering experimental thresholds must be explained in the registration table; hard gates may not be lowered. Approval records must point to specific workflow versions, sample lists, acceptance evidence, and unresolved issues—not just "agree to roll out."

### Fix the 30/60/90-Day Mapping and Stop Rules

Days 0–30 complete personal template candidate validation; days 31–60 complete team workflow release validation, and only after passing may it be released as a team Skill; days 61–90 complete scaled rollout validation, and only after passing may role expert kits be combined. Calendar time cannot replace stage gates; without passing the previous stage, no auto-promotion just because the date arrived.

On unauthorized outbound delivery, deletion, payment, master-data modification, major privacy issues, or critical business errors, stop immediately, take over manually, and run an incident review; average efficiency gains may not offset hard-gate failures. Takeover, protecting originals, fixing, and recovery follow the [automation takeover chain](/en/qwenwork/ch05-automation-boundaries).

### An Office Action Example: How a Weekly Report or Meeting Minutes Walks Through 30/60/90 Days

Below, using one office action—"organize meeting notes into a weekly report draft"—no new thresholds are added; the existing stage gates are simply translated into who confirms what, when. Every run first keeps input versions, then records manual edits, anomalies, acceptance, and the final result; passing a stage does not automatically grant permissions—actions still go through Chapter 11 one by one.

| Validation window | Actual office actions and confirmations | How to stop and roll back on failure |
|---|---|---|
| 0–30 days: personal template candidate | The user organizes their own weekly report or meeting minutes with 5 representative normal samples and 2 boundary samples. The user confirms input sources, versions, forbidden actions, and draft editability; the business owner confirms business basis, acceptance, and stop conditions; the data/security owner and other hard-gate owners confirm authorization as applicable. | When key numbers cannot be recomputed, facts have no source, boundary samples fail, or any hard gate fails, stop the promotion immediately; protect original records, take over manually, record manual edits and anomalies, and re-accept after fixing. Drafts whose recovery cannot be shown do not enter the next stage. |
| 31–60 days: team workflow release | Hand the personally validated version to a limited set of members, covering empty data, field changes, duplicate records, permission expiry, key-number conflicts, and repeated runs. The business owner confirms team task boundaries and first-pass requirements; the process maintainer confirms versions, tests, logs, and rollback; the data/security owner confirms permissions, authorization periods, and deactivation capability; the content reviewer confirms facts and numbers. | When team samples fail, versions or permissions drift, logs cannot locate objects, or any hard gate fails, stop the team release and further writes; return to the last identifiable version or manual process, protect originals, and retest the affected scope after fixing. Passing the stage gate still does not grant G2 or G3 permissions. |
| 61–90 days: scaled rollout | Expand to the approved organizational scope over a full business cycle, confirming efficiency or quality thresholds, sample coverage, permission boundaries, run logs, and manual takeover. The business owner confirms whether expansion is worth it; the data/security owner confirms data scope and permissions have no unresolved issues; required professional reviewers confirm high-consequence content; the process maintainer confirms run and recovery capability. | When registered targets are not met, permission issues arise, critical errors occur, or recovery fails, stop the rollout, undo or shrink the added scope, deactivate scheduling, and take over manually; roll back to the team workflow or manual process. After fixes, re-verify recovery results; average efficiency, adoption, or satisfaction may not offset hard-gate failures. |

The "records" in this example need no elaborate reports upfront: at minimum they must trace back to the input versions used, the user's manual edits, the anomalies, who accepted against which standard, and the final outcome—pass, reject, keep as pilot, or stop. You can use the [Chapter 9 public case atlas (with 32 pending-verification scenario leads)](/en/qwenwork/ch09-public-case-atlas) as a topic-selection entry, converting its artifact forms into your own scenario cards; the atlas leads are not your organization's baseline or stage results.

## Cases and Evidence

Take the "business weekly report draft" as an example: a team may rank it high among candidate scenarios for being high-frequency, manually time-consuming, and having stable input fields, but must still confirm that key numbers trace to raw detail, that empty data and field changes do not silently generate wrong conclusions, and that drafts are not sent outward without approval. As long as a key number cannot be recomputed or an unauthorized delivery occurs, you must stop rather than promote—even if average prep time clearly dropped. For records, an ordinary reader only needs to put input versions, manual edits, anomalies, the acceptor, and results into the same run record, so there is later evidence for deciding whether to continue.

Role scenarios, public demos, and sample artifacts only help form pilot hypotheses. Public case pages can prove delivery form but cannot provide your organization's baseline, proof of permissions, or stage-gate results; see [Chapter 8](/en/qwenwork/ch08-research-evidence-chain) for those evidence boundaries. This chapter's thresholds are community practice norms; they represent no official product commitment and do not prove that any scenario necessarily produces efficiency or business gains.

## Enterprise Actions

Build one auditable scenario package for a pilot round:

1. The business owner and user complete the scenario card, clarifying deliverable, acceptance, forbidden actions, and the same-basis baseline.
2. The data/security owner confirms data classification, authorization scope, action levels, and organizational hard gates.
3. Candidate scenarios are scored on the seven dimensions, determining verification order only.
4. The two owners supplement scenario-specific critical errors and judgment evidence.
5. Fill in the single threshold registration table before seeing pilot results, locking formulas, samples, periods, and approvers.
6. Run all normal, boundary, and failure samples for the current stage, keeping acceptance and anomaly records each time.
7. Decide expand, optimize-and-retest, keep as pilot, or stop against the stage gates—no skipping levels.
8. After version, permission, field, or process changes, re-judge whether to return to the previous stage for validation.

The review meeting reads hard gates first, then experimental thresholds and average metrics. Any hard-gate failure ends the "whether to promote" discussion immediately, switching to manual takeover and incident review.

## Boundaries and Next Steps

This chapter defines pilot ranking, threshold registration, and rollout gates; it does not replace legal, privacy, financial, HR, or industry professional standards. Sample counts are minimum validation coverage, not a promise of statistical significance; when task distributions change, disclose the limitation and re-establish a comparable baseline.

Before entering any stage, you must still independently judge action level, data sensitivity, professional consequence, and human responsibility per Chapter 11 security governance. A scenario passing a stage gate does not automatically gain new system permissions or authorization for high-consequence actions.

[Next chapter: Security, Permissions, and Responsibility](/en/qwenwork/ch11-security-governance)
