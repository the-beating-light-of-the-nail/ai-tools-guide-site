---
title: "Automation Boundaries: Keep the System Stoppable, Takeover-able, and Recoverable"
description: Separate machine checks, human review, acceptance, and action confirmation; build a takeover chain for automation failures
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/desktop/scheduled-tasks
  - https://qwenwork.cn/docs/desktop/computer-use
  - https://qwenwork.cn/docs/desktop/im-channels
---

# Automation Boundaries: Keep the System Stoppable, Takeover-able, and Recoverable

## 30-Second Conclusion

<span id="claim-automation-human-handoff-01" data-claim-id="claim-automation-human-handoff-01"></span>This book argues: automation has the basic conditions to enter enterprise operations only if, on exceptions, it can stop executing, protect the originals, notify the owners, hand over to humans for completion, and resume after re-verification.

- Automatic checks, human review, delivery acceptance, and action confirmation are four distinct control points.
- Deactivation, manual takeover, rollback, undo, and recovery handle different states and cannot be used interchangeably.
- High-risk actions such as writes, sends, and publishes must obey governance levels and explicit authorization.

## A Scenario You Might Hit

You want the system to automatically assemble a weekly report or meeting minutes every week: read this week's files, generate a summary, list action items, and post to the group. The input example is "meeting minutes before Friday 17:00, last week's report, and the confirmed group chat target." Write deactivation, manual takeover, rollback, and recovery into the task first, rather than just setting a timer.

## What You End Up With

The final product is an automated-run card, structured as:

1. Trigger conditions, input versions, and empty-data handling;
2. Four control points: automatic checks, human review, delivery acceptance, action confirmation;
3. Deactivation switch, takeover person, backup process, notification content, and impact scope;
4. Last stable version, re-verification samples, undo method, and recovery approval records.

## Follow Along

1. First run one draft cycle with a weekly report or meeting minutes; identify which steps are read-only and which write, send, or publish.
2. Set machine checks for dates, row counts, totals, repeated runs, and permission changes, and assign the content reviewer and action owner.
3. **Mid-point checkpoint:** deliberately rehearse a shutdown with missing files, changed fields, or unknown-target inputs; confirm the system preserves originals, isolates drafts, and notifies the takeover person.
4. Re-verify with normal, boundary, and failure samples; resume automatic scheduling only after the business owner approves the impact handling.

## Case Reference

You can start with [Youkela: Product R&D and Attendance-Based Payroll](/en/qwenwork/case-youkela), treating its material checks and high-consequence human confirmations as a run-boundary exercise; the case statements are not a promise of your automation outcomes or unattended readiness.

## Post-Task Check

Run one failure drill: make the input version mismatch and confirm the new task stops, originals are untouched, the owner is notified, the current artifact is marked as draft, and delivery can still complete via the backup process; otherwise, do not launch.

## Watch Out

On check failures, repeated runs, permission changes, or unknown targets, deactivate immediately and stop outward delivery; preserve originals, the scene, and logs; have a human take over the current task; if the new version fails, roll back to the last stable version and resume only after fixes are re-confirmed by the business owner.

## Further Reading

Continue with this page's [Method or Model](#method-or-model), [Cases and Evidence](#cases-and-evidence), and [Boundaries and Next Steps](#boundaries-and-next-steps), and see the [scheduled-task sources](/en/qwenwork/appendix-sources#r5), [computer-use sources](/en/qwenwork/appendix-sources#r6), and [IM channel sources](/en/qwenwork/appendix-sources#r7).

## Why It Matters

Automation widens the blast radius of a single error. A changed field can make the daily report wrong for days; an expired login can silently drop data; duplicate scheduling can send repeatedly; a UI change can make computer use click the wrong target. Having only an "off switch" neither undoes already-executed actions nor says who completes the remaining task.

Enterprise AI owners need to design failure handling as part of normal operation. Business owners need to know that after an anomaly the originals are safe, whether delivery slips, who is taking over, and when re-enabling is allowed.

## Method or Model

The four control points answer different questions:

| Control point | Fixed definition | Typical evidence | Responsible role |
|---|---|---|---|
| Automatic check | Checks machine-decidable format, range, completeness, and consistency conditions | Schema results, row counts, hashes, reconciliation and duplicate checks | Workflow owner |
| Human review | Judges whether facts, semantics, professional quality, and risk are correct | Spot-check records, change lists, professional opinions | Content reviewer or professional owner |
| Delivery acceptance | Decides whether the artifact satisfies the task card and can proceed | Pass, reject, or conditional-pass records | Business owner |
| Action confirmation | Authorizes the actual send, write, publish, delete, or other external action | Confirmer, target, scope, time, change list | Action owner |

The five run terms are also not interchangeable:

| Term | Meaning | When it applies |
|---|---|---|
| Deactivate | Prevent new automated runs from starting | On systemic risk or maintenance needs |
| Manual takeover | An owner takes over the current unfinished task | When the current delivery must still land on time |
| Rollback | Switch to the last stable version, rule, or manual process | When the new version fails but the old path still works |
| Undo | Reverse a completed action where the system supports it and risk is controllable | After an erroneous write, send, or publish has happened |
| Recover | Re-open automated runs after fix, re-verification, and approval | When the root cause is handled and recovery conditions are met |

The minimal takeover and recovery chain is fixed as:

1. **Trigger**: an automatic-check failure, input anomaly, permission change, repeated run, or human-reported event.
2. **Stop execution**: block new tasks and remaining high-risk actions; do not keep attempting unknown steps.
3. **Protect originals**: keep inputs, the scene, logs, and unmodified originals; isolate erroneous artifacts.
4. **Notify owners**: state the impact scope, current status, deadline, and decisions needed.
5. **Human completion**: the designated takeover person completes the necessary delivery per the backup process, recording manual changes.
6. **Locate the failure**: distinguish input, permission, tool, rule, model, and environment causes.
7. **Fix the version**: create a new version; do not overwrite the failed version or the evidence.
8. **Re-verify**: rerun automatic checks and human review with normal, boundary, and failure samples.
9. **Approve recovery**: the business owner confirms the impact is handled; the workflow owner re-opens scheduling.

The specific confirmation rules for G2/G3 actions have Chapter 11 as their sole normative source; this chapter only requires that automation can invoke the corresponding confirmation and takeover mechanisms.

## Cases and Evidence

The official help center documents desktop scheduled tasks, computer use, and IM channels. [R5](/en/qwenwork/appendix-sources#r5) [R6](/en/qwenwork/appendix-sources#r6) [R7](/en/qwenwork/appendix-sources#r7) Capability entry points and availability may change; test them under the current account, system version, and organizational authorization.

Take the Monday business daily as an example: before scheduling starts, check the input directory and dates; after generation, automatically reconcile totals; the content reviewer checks exception explanations; the business owner accepts; the action owner confirms before the group message is sent. If a field change causes reconciliation to fail, the system stops in draft state, keeps the original sheet, and notifies the takeover person—it must not keep sending conclusions on the old basis.

## Enterprise Actions

Complete a run card for an existing automation:

| Required item | Minimum content |
|---|---|
| Trigger and inputs | Scheduling rule, input location, date range, empty-data handling |
| Four control points | Each one's conditions, owner, evidence, and timeout handling |
| Failure handling | Deactivation switch, takeover person, backup process, impact notification |
| Version recovery | Last stable version, re-verification samples, recovery approver |
| Executed actions | Whether undoable, undo owner, remediation when not undoable |

Deactivate and take over immediately on these signals: machine checks failed yet it is about to deliver outward; input scope or account permissions changed suddenly; the same task is running repeatedly; originals may be overwritten; the current action's target and impact cannot be confirmed; there is no reachable owner or backup process.

## Boundaries and Next Steps

Not every task suits scheduling or unattended runs. Tasks with unstable sources, acceptance that depends on professional judgment, irreversible failure, or external impact should keep a human in the loop; low-risk reads and draft generation still need failure alerts and run records.

This chapter defines run controls, not organizational governance levels. The governance chapter will uniformly cover data sensitivity, human-machine responsibility, and high-risk action thresholds.

[Next chapter: Scenario Selection and Pilots](/en/qwenwork/ch10-pilot-roadmap)
