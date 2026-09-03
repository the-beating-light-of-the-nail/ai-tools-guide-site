---
title: "Work Environment Architecture: Three Clients and Six-Layer Diagnostics"
description: Choose the browser web environment (Web), desktop, or DingTalk by task context, and locate delivery failures with a six-layer model
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/product-introduction
  - https://qwenwork.cn/docs/features/connectors
  - https://alidocs.dingtalk.com/i/nodes/mExel2BLV59rgdDPiPER1ZZDVgk9rpMq
---

# Work Environment Architecture: Three Clients and Six-Layer Diagnostics

## 30-Second Conclusion

<span id="claim-six-layer-diagnosis-01" data-claim-id="claim-six-layer-diagnosis-01"></span>This book argues: stable enterprise AI delivery is decided jointly by six layers—intelligence foundation, context, tools and connections, artifact workbench, reuse and automation, and governance; the model is only one layer.

- First choose the work entry point based on where the materials, permissions, actions, and collaboration live.
- When a result fails, locate the failure layer by layer; do not attribute every problem to the model.
- Every layer needs an owner, failure signals, and checkable evidence.

## A Scenario You Might Hit

You need to organize a batch of local Excel files, look up some web material, or hand the result back to a DingTalk group for confirmation, but you don't know where to start. The input example is "June sales sheets in a local directory, public pages in a logged-in browser, last week's report in a DingTalk group"; confirm file versions, accounts, and permissions first, then pick the entry point.

## What You End Up With

The final product is a work-entry and diagnostics record, structured as:

1. Entry choice: browser web environment (Web), desktop, or DingTalk, plus the reason;
2. Input list: file versions, dates, accounts, authorization scope, and save locations;
3. Six-layer checklist: intelligence foundation, context, tools and connections, artifact workbench, reuse and automation, governance;
4. Failure attribution, owner, verification evidence, and a rollback path.

## Follow Along

1. First judge where the materials, collaboration, and actions to confirm mainly live, then pick one minimal entry among Web, desktop, and DingTalk.
2. Open input files read-only first; record versions, accounts, and permissions; do not expand access when authorization is unclear.
3. **Mid-point checkpoint:** have the owner of the input confirm "this input is usable and processable," and have the action owner confirm "the next step is preview or draft only."
4. After the run, record the first failure signal per the six layers; save the artifacts, logs, and the owner of the next check.

## Case Reference

You can start with the [Qwen Work public case library: an atlas of 32 scenarios](/en/qwenwork/ch09-public-case-atlas) to pick a similar entry point from different tasks' inputs and artifact forms; that page is a list of public scenario leads awaiting verification, not a promise of capability or outcomes.

## Post-Task Check

The check record must state the input versions, current account permissions, save location, and one reproducible failure signal; if you cannot say which version of the material or which authorization the result came from, the task must not proceed to the next step.

## Watch Out

If permissions are insufficient, versions are unclear, or a cross-environment action cannot be confirmed, keep the originals and logs, stop writes or outward delivery, and roll back to the last stable entry; switch to read-only analysis or manual organization, and retry only after the system owner, data owner, or business owner confirms.

## Further Reading

Continue with this page's [Method or Model](#method-or-model), [Cases and Evidence](#cases-and-evidence), and [Boundaries and Next Steps](#boundaries-and-next-steps), then cross-check the [official connector sources](/en/qwenwork/appendix-sources#r4) to understand that six-layer diagnostics is not an official product taxonomy.

## Why It Matters

A task that succeeds in a demo may fail inside a real organization because of file versions, account permissions, connection states, artifact formats, or approval rules. If the team only swaps models, it retests the same layer repeatedly without fixing the other five layers that decide delivery stability.

Work environment architecture helps enterprise AI owners answer two questions: which entry point a task should start from, and who checks which layer after a failure. It also shows business owners that connecting more systems does not mean completing more work—permissions and governance must be designed at the same time.

## Method or Model

<span id="claim-three-surfaces-choice-01" data-claim-id="claim-three-surfaces-choice-01"></span>This book recommends: Web, desktop, and DingTalk should be chosen by task context; no entry point is optimal by default for all tasks.

| Entry point | Task contexts to prioritize it for | Check before choosing | When it should not be the default |
|---|---|---|---|
| Web | Cloud materials, online research, web or cloud artifacts | Upload scope, account plan, artifact save location | Key inputs live only locally or in organizational systems |
| Desktop | Local files, browser login states, system apps, computer operations | Protecting originals, directory permissions, execution visibility | Unattended execution of high-risk write operations |
| DingTalk | Enterprise messaging, documents, calendars, to-dos, process collaboration | Organization authorization, object scope, send or write confirmation | The task needs no organizational context yet requests broad permissions |

Cross-environment tasks can divide the work: process materials in the environment closest to the inputs, and complete confirmation and takeover in the environment closest to the owners. The entry choice must be recorded with its reason, to avoid writing personal habits into team standards.

The six-layer diagnostic table is the shared language for run reviews:

| Layer | Diagnostic question | Failure signal | Owner | Verification evidence |
|---|---|---|---|---|
| Intelligence foundation | Is the current model suited to the task type, language, context, and latency requirements | Misunderstanding, long-document inconsistency, multimodal recognition failures | AI platform owner | Fixed-sample comparisons, error classification, version records |
| Context | Are inputs complete, correct, current, and authorized | Missing files, version conflicts, unclear dates or primary keys | Business data owner | Input list, version numbers, field dictionary, authorization records |
| Tools and connections | Can tools read or execute with minimal permissions | Login expiry, field-mapping errors, actions beyond authorization | System owner | Permission list, connection tests, call or operation logs |
| Artifact workbench | Does the output meet format requirements, stay editable, and retain sources | Corrupted files, flattened structure, charts disconnected from data | Deliverable owner | Source files, format spot checks, reconciliation tables, version locations |
| Reuse and automation | Can successful steps rerun stably and handle exceptions | Works only in a single conversation; results drift across reruns | Workflow owner | Test samples, versions, run records, failure samples |
| Governance | Do high-risk actions have confirmation, audit, takeover, and recovery | Unauthorized outbound delivery, no one takes over, no rollback | Business owner and risk owner | Approval records, confirmation logs, incident records, recovery approvals |

When comparing models or capability combinations, record item by item: task fit, result stability, verifiability, processing time, resource cost, and risk cost. Do not force-multiply or divide these metrics of different units; set the non-negotiable thresholds first, then compare the total cost of the options that pass.

## Cases and Evidence

The official product introduction and public knowledge base describe the Web, desktop, and DingTalk entry points and office contexts. [R3](/en/qwenwork/appendix-sources#r3) [R10](/en/qwenwork/appendix-sources#r10) This dynamic product information confirms the entry points exist and their public positioning; specific capabilities, plans, and organizational authorization should still be verified against the actual page and account at time of use.

The six-layer structure, diagnostic fields, and entry-selection principles are this book's method. Enterprises should validate the classification with real failure logs; the same failure can span multiple layers—for example, "wrong numbers in a report" may come from a context version issue, a tool field mapping, or model inference.

## Enterprise Actions

Pick a task currently in pilot and run one six-layer walkthrough:

1. Mark which entry point the input, run, artifact, and confirmation each happen in.
2. Designate one owner per layer; do not substitute "the AI team" for specific roles.
3. Pick one most-likely failure signal and one piece of verification evidence per layer.
4. Rerun with the same fixed sample set and record which layer the problem appears in first.
5. Fix only the layer located, then compare results and total handling cost.

Stop signals include: needing expanded permissions without a stated necessity; input versions undeterminable; a failure with no owner; artifacts that cannot retain sources; cross-environment actions lacking a confirmation or takeover path.

## Boundaries and Next Steps

The six-layer model is a diagnostic framework, not an official product architecture taxonomy, and it does not mean every task must use all six layers. Low-risk, one-off Q&A can stay at the intelligence foundation and context layers; the tool, automation, and governance layers become hard requirements only when writes, publishing, or continuous operation are involved.

This chapter defines the work environment and diagnostic coordinates, not the release standard for reusable assets. After locating a stable process, the team still needs to separate method assets, system connections, and role kits.

[Next chapter: Skills, Connectors, and Expert Kits](/en/qwenwork/ch04-skills-connectors)
