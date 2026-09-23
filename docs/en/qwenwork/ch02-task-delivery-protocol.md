---
title: "Task Delivery Protocol: Define \"Done\" First"
description: "Run traceable AI tasks with a five-field task card: goal, inputs, constraints, deliverable, acceptance"
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/product-introduction
---

# Task Delivery Protocol: Define "Done" First

## Plain-Language Orientation

This chapter gives you a task card aimed at a problem you hit constantly when you lead a team: a colleague drops "help me put together a business analysis" into chat, and you take the work without knowing who it is for, what date the data cuts off, whether the CRM may be touched, or who signs off. This chapter breaks that vague request into five fields—goal, inputs, constraints, deliverable, acceptance. Fill them in and the AI stops guessing at your business conventions. By the end you can turn a one-line verbal request into an acceptance contract an ordinary colleague can actually fill out: less rework for you, and clearer accountability when something goes wrong.

## 30-Second Conclusion

<span id="claim-define-done-first-01" data-claim-id="claim-define-done-first-01"></span>This book recommends: define "done" before starting an AI task, then decide prompts, tools, and automation.

Plain-language note: why settle "done" first? If you have not defined done, the AI will answer your wrong question at high quality—a polished report that is not the version you need to make the decision.

<span id="claim-task-card-fields-01" data-claim-id="claim-task-card-fields-01"></span>This chapter defines the single standard for the task card as five fields: goal, inputs, constraints, deliverable, acceptance. Other chapters and appendices only reference this definition and do not build parallel field systems.

## A Scenario You Might Hit

A colleague sends only "help me do a business analysis" without saying who it's for, the data cutoff date, whether the customer relationship management (CRM) system may be used, or who confirms it. You can write the input example as "this week's CRM opportunity list, last week's version, the stage dictionary, cutoff June 30," turning the vague request into a task card an ordinary user can fill in.

## What You End Up With

The final product is a five-field task card:

1. Goal: what task for whom, supporting which decision;
2. Inputs: materials, systems, periods, versions, and authorization scope;
3. Constraints: reporting basis, format, forbidden actions, and stop conditions;
4. Deliverable: file type, structure, naming, location, and editability requirements;
5. Acceptance: checker, checking method, rejection conditions, and confirmation points.

## Follow Along

1. Rewrite the original request as "reader—decision—deadline," and list existing inputs, missing inputs, and no-permission inputs.
2. Fill in constraints, deliverable, and acceptance; state clearly whether sending, writing, or publishing is allowed.
3. **Mid-point checkpoint:** have the business owner restate the five fields; whenever the goal, basis, version, or checker is unclear, fix the card first—do not let the AI guess.
4. Run once with the task card, saving input versions, artifacts, human edits, and the final acceptance record.

Plain-language note: the restatement in step 3 is the step that matters. Have the business owner read the five fields back; if they stumble on any one of them, the requirement is not actually clear yet, and setting the AI running now only amplifies your team's confusion.

## Case Reference

You can start with [Youkela: Product R&D and Attendance-Based Payroll](/en/qwenwork/case-youkela) as a task-card exercise in "inputs—processing—artifact—acceptance"; the specific customer statements in the case still need their sources and human-review boundaries preserved.

## Post-Task Check

Check item by item that all five fields have executable content: for example, "acceptance" must name a specific checker and rejection conditions, not just "send if it looks fine." While fields are incomplete, the task stays in the clarification stage.

Plain-language note: the wording to watch for most at acceptance time is "send if it looks fine." It hands judgment back to you without saying who checks, what they check, or how a failure gets rejected. A field written that way is effectively blank.

## Watch Out

If the goal changes, input versions conflict, or a high-risk action has no confirmer, keep the original task card and raw materials, stop the run, and roll back to the last stable version; have the business owner re-confirm the basis, and switch to manual organization or read-only analysis if necessary.

Plain-language note: when the goal changes, versions conflict, or a high-risk action has no confirmer, stop the run and keep the originals, then return to the last stable version. Have the business owner re-confirm the basis, and fall back to manual organization or read-only analysis if needed. Don't push through.

## Further Reading

Continue with this page's [Method or Model](#method-or-model), [Cases and Evidence](#cases-and-evidence), and [Boundaries and Next Steps](#boundaries-and-next-steps), and use the [task delivery and review template](/en/qwenwork/appendix-templates) to cross-check the five-field definitions.

## Why It Matters

"Help me do a business analysis" says nothing about who decides based on it, the data cutoff date, which basis to use, what file is finally delivered, or who checks it. Even if the AI generates a complete report, it may be a high-quality answer to the wrong question.

The task card turns a vague request into an observable protocol. The business owner can confirm direction before the run, the user can spot missing inputs, the content reviewer can reject against the same standard, and the team can compare real completion rates across tools or versions.

## Method or Model

The five-field task card is the shared input contract for the rest of this book's workflows:

| Field | Question it must answer | Acceptable wording | Unacceptable wording |
|---|---|---|---|
| Goal | What task for whom, supporting which decision | For Monday's operations meeting to decide whether to add East China budget | For the boss to see |
| Inputs | Which materials, systems, periods, and versions may be used | Use attachment A detail; data as of June 30 | See attachments |
| Constraints | What basis to apply, what is forbidden, when to stop | Year-over-year vs. same period last year; missing values must not be fabricated | As professional as possible |
| Deliverable | Output format, structure, location, naming, editability | 1-page summary, editable table, validation notes | A report |
| Acceptance | Who checks what and when; what triggers rejection | Finance reconciles totals; publish after business owner confirms | Send if it looks fine |

Plain-language note: on this table, read the "unacceptable wording" column closely. That column is exactly where you trip up in daily work—"for the boss to see," "see attachments," "a report" all sound like real answers, but none of them can be judged at acceptance time.

When turning the task card into a runnable task, follow six steps:

1. **Clarify the goal**: restate the reader, decision, and deadline; do not proceed while directions diverge.
2. **Check inputs**: list materials that are in hand, missing, out of scope, or of doubtful credibility; confirm versions, dates, and primary keys.
3. **Lock constraints**: write down statistical basis, format standards, forbidden items, permission boundaries, and exception handling.
4. **Define artifacts**: break the final result into checkable intermediate artifacts plus the final deliverable, and agree on the save location.
5. **Write acceptance**: designate the checker, spot-check method, rejection conditions, and confirmation points before sending, writing, or publishing.
6. **Run and review**: save the task card, input versions, generated versions, human edits, anomalies, and final confirmer.

Fill in missing fields before running; never let the AI guess business conventions. Where payments, deletions, personnel decisions, system writes, or external publishing are involved, write preview, explicit confirmation, and rollback into "constraints" and "acceptance."

Plain-language note: for actions like payments, data deletion, or external publishing, you have to write "who confirms and how to roll back" into the card. Otherwise the AI executes for real and you find out afterward that nobody signed off and nothing can be undone.

## Cases and Evidence

A quick task card for a business weekly report:

| Field | Example |
|---|---|
| Goal | Produce weekly-meeting material for the sales owner to judge which regions need resource support |
| Inputs | This week's CRM opportunity list, last week's version, the confirmed stage dictionary |
| Constraints | Count only defined stages; unify currency units; flag missing owners in red, never fabricate them |
| Deliverable | 1-page summary, region detail, anomaly list, and validation notes, saved as a new version |
| Acceptance | Totals reconcile with detail; anomalies traceable to record IDs; business owner confirms before posting to the group |

At runtime, output the field dictionary and anomaly rules first, confirm, then clean the data, generate the summary, check totals, and finally structure the summary as "observation—possible cause—decision needed." This way, even if the recommendations change, the data base and the review path remain reusable.

This is a community practice example, not a statistical basis for any particular business. A copyable blank task card lives in the [prompt appendix](/en/qwenwork/appendix-templates); the appendix must not change the meaning of this chapter's five fields.

## Enterprise Actions

| Responsible role | Responsibility | Acceptance evidence |
|---|---|---|
| Business owner | Approve goals, business basis, and high-risk actions; decide continue or stop | Confirmed task card, gate records, stop decision |
| User | Prepare inputs, run per the card, record versions, anomalies, human edits | Input list, run logs, artifact versions, change records |
| Content reviewer | Check facts, numbers, professional quality, and reader usability | Reconciliation tables, source spot checks, review comments, acceptance conclusion |

On first implementation, take 5 real samples from a high-frequency task with stable inputs and reversible failure. Adjust only one field or rule at a time and compare rework causes; only after 3 consecutive passes within the same boundary should you consider codifying it as a template, Skill, or scheduled task.

Stop the current run when: the goal or reader changes; key inputs are missing or versions conflict; the basis cannot be confirmed by the owner; the artifact cannot be delivered in the agreed format; or a high-risk action has no explicit confirmation or rollback.

Plain-language note: this division of labor means the business owner owns direction and risk, the user runs and records, and the reviewer rejects against the same yardstick. Don't overreach on the first rollout: take 5 real samples and change one field at a time, and you will see where rework actually gets stuck.

## Boundaries and Next Steps

The task card cannot replace professional judgment, nor turn unknown information into facts. For exploratory tasks, the goal can be "produce a question list or test a hypothesis," but input boundaries, forbidden items, and this round's deliverable still need to be explicit.

This chapter only defines the task protocol. How tools connect to files, browsers, and collaboration systems, and what responsibilities different run environments carry, will be defined in the architecture chapters.

## Plain-Language Glossary

| Term | Plain language |
|---|---|
| Task card | Your vague request written as a five-field contract: goal, inputs, constraints, deliverable, acceptance |
| Goal field | Say first who it is for, what gets done, and which decision it supports—not "for the boss to see" |
| Constraints field | Statistical basis, forbidden actions, and stop conditions: the red lines you draw for the AI |
| Deliverable field | What format, what structure, where it is stored, and whether it can still be edited |
| Acceptance field | Who checks, what they check, how a failure gets rejected—no "send if it looks fine" |
| Stage gate | The checkpoint you clear after the task card runs cleanly, before it becomes a template, Skill, or scheduled task |

## FAQ

**A colleague just drops "help me analyze this." How do you turn it into a task card?**
Pin down three anchors first—reader, decision, deadline—then ask what date the data cuts off, whether the CRM may be touched, and who confirms. Write those answers into the five fields and the vague request becomes a contract you can actually run.

**Who should fill in the task card?**
The business owner sets the goal and the basis, the user fills in inputs and runs it, the content reviewer writes acceptance. Don't do it all yourself: splitting the work is what makes responsibility clear and rejection defensible.

**What goes wrong if acceptance just says "send if it looks fine"?**
It is acceptance in name only—no checker, no check method, no rejection path. At acceptance time the judgment lands back on you, and when something breaks nobody owns it. Replace it with a named checker and explicit rejection conditions.

**How should you write the card for high-risk actions like payments or data deletion?**
Put preview, explicit confirmation, and rollback into constraints and acceptance. With no confirmer and no rollback path, stop the run and go back to the last stable version rather than letting the AI execute directly.

**Once the task card runs smoothly, can you lock it in as an automated flow?**
Not yet. Pass acceptance 3 consecutive times inside the same boundary before turning it into a template, Skill, or scheduled task. For exploratory tasks, spell out the input boundaries and forbidden items as well.

[Next chapter: Work Environment and Capability Architecture](/en/qwenwork/ch03-work-environment)
