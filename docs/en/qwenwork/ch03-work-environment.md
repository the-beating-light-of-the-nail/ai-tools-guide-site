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

## Plain-Language Orientation

This chapter does two things for you: choose an entry point and diagnose failures. When you tidy up local Excel files, look something up on the web, or hand results back to a DingTalk group for sign-off, you keep getting stuck on the same two questions—where do I start, and who do I call when it breaks. First, this chapter helps you pick the smallest workable entry point among Web, desktop, and DingTalk, based on where your materials, permissions, and actions actually live. Then it gives you a six-layer diagnostic table, so that when something goes wrong you locate it layer by layer instead of dumping all the blame on "the model isn't good enough." By the end you will also see why connecting more systems does not mean completing more work: permissions and governance have to be designed at the same time.

## 30-Second Conclusion

<span id="claim-six-layer-diagnosis-01" data-claim-id="claim-six-layer-diagnosis-01"></span>This book argues: stable enterprise AI delivery is decided jointly by six layers—intelligence foundation, context, tools and connections, artifact workbench, reuse and automation, and governance; the model is only one layer.

Plain-language note: why does this claim matter? You often assume a stronger model will solve everything, but if any one of file versions, account permissions, connection state, artifact format, or approval rules is missing, your real task still fails. The model is just one of six layers.

- First choose the work entry point based on where the materials, permissions, actions, and collaboration live.
- When a result fails, locate the failure layer by layer; do not attribute every problem to the model.
- Every layer needs an owner, failure signals, and checkable evidence.

## A Scenario You Might Hit

You need to organize a batch of local Excel files, look up some web material, or hand the result back to a DingTalk group for confirmation, but you don't know where to start. The input example is "June sales sheets in a local directory, public pages in a logged-in browser, last week's report in a DingTalk group"; confirm file versions, accounts, and permissions first, then pick the entry point.

Plain-language note: do one thing before you start—confirm the file version, the account, and the permissions. A lot of failures are not the AI's fault: you are pointing at an old sheet, using the wrong account, or you simply don't have access. Choose the wrong entry point and the whole thing is skewed from the start.

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

Plain-language note: there is a reason this check is strict. If you cannot say which version of the material or which authorization the result came from, you cannot reproduce it and you cannot assign responsibility. If you can't say it, don't move it to the next step.

## Watch Out

If permissions are insufficient, versions are unclear, or a cross-environment action cannot be confirmed, keep the originals and logs, stop writes or outward delivery, and roll back to the last stable entry; switch to read-only analysis or manual organization, and retry only after the system owner, data owner, or business owner confirms.

Plain-language note: when permissions are insufficient, versions are unclear, or a cross-environment action cannot be confirmed, stop writes and outward delivery, keep the originals and the logs, and go back to the last stable entry point. Switch to read-only analysis or manual organization, and have the system owner, data owner, or business owner confirm before you retry.

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

Plain-language note: there is no "best" entry point, only the closest fit. The classic signs of a wrong pick are that your data lives only locally yet you default to Web, or that the task needs no organizational context at all yet you go ask DingTalk for broad permissions. Both amount to writing a personal habit into a team standard.

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

Plain-language note: when you use this table, keep in mind that one failure often spans several layers. "The numbers in the report are wrong" could be a stale context version, a tool field-mapping error, or the model inferring badly. Don't rush to pin it on one layer—find where the first signal appeared.

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

Plain-language note: what this walkthrough means for you is: don't rush to swap the model. Mark clearly which entry point the input, the run, and the artifact each live in, put a real named person behind each of the six layers, then rerun with the same sample set to see which layer the problem surfaces in first—and fix only that layer.

## Boundaries and Next Steps

The six-layer model is a diagnostic framework, not an official product architecture taxonomy, and it does not mean every task must use all six layers. Low-risk, one-off Q&A can stay at the intelligence foundation and context layers; the tool, automation, and governance layers become hard requirements only when writes, publishing, or continuous operation are involved.

This chapter defines the work environment and diagnostic coordinates, not the release standard for reusable assets. After locating a stable process, the team still needs to separate method assets, system connections, and role kits.

## Plain-Language Glossary

| Term | Plain language |
|---|---|
| Web entry | The browser environment you use when materials are in the cloud, you are doing online research, or you are producing cloud artifacts |
| Desktop entry | The environment for local files, browser login states, and computer operations |
| DingTalk entry | The collaboration environment for enterprise messaging, documents, calendars, and to-dos |
| Six-layer diagnostics | Coordinates from intelligence foundation to governance that help you find a failure layer by layer instead of only blaming the model |
| Owner | The specific person truly accountable for a layer's result; don't fob it off with "the AI team" |
| Failure signal | The observable sign to watch in each layer, such as login expiry or version conflicts |

## FAQ

**Your data is local, but you default to Web. What goes wrong?**
The wrong entry point skews things from the root: local sheets won't connect and versions won't line up. Do it properly—judge first where the materials, collaboration, and actions-to-confirm live, then pick the smallest entry point. If key inputs live only locally, choose desktop.

**When a result fails, should you swap the model first or check something else?**
Don't swap the model first. Work down the six-layer table layer by layer: file versions, account permissions, connection state, artifact format, and approval rules can each sink the task on their own. The model is only one of them.

**A single failure spans several layers. How do you assign responsibility?**
Find the layer where the first failure signal appeared and let that layer's owner take it. If the numbers are wrong, the cause could be a stale context version, a tool mapping error, or a bad model inference, so don't rush to pin it to one layer.

**If you can't say which version of the material a failure came from, can you keep going?**
No. Your check record must state input versions, account permissions, save location, and one reproducible failure signal. If you cannot, the task does not advance—go back to the last stable entry point.

**Does connecting more systems mean getting more work done?**
No. Connecting a system only opens the channel. If permissions and governance are not designed alongside it, delivery stays unstable anyway. As the business owner, you have to see both at once.

[Next chapter: Skills, Connectors, and Expert Kits](/en/qwenwork/ch04-skills-connectors)
