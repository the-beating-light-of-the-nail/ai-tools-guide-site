---
title: "Quick Start: Complete Your First Acceptable Task"
description: Run a low-risk, acceptable draft-task loop end to end using the single task card
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/product-introduction
---

# Quick Start: Complete Your First Acceptable Task

This quick start does exactly one thing: use the [Chapter 2 single task card](/en/qwenwork/ch02-task-delivery-protocol) to complete one low-risk, acceptable draft task. The example below is "organize the authorized meeting materials into an internal draft of the minutes"; no task-card fields are redefined on this page.

## 1. Pick a Task

Choose a task whose inputs are already authorized, whose output can be checked by a human, and which is easy to roll back to its original state if it fails. Limit this round's scope to producing an internal editable draft—no sending, system writes, or publishing.

If the input sources, usage permissions, or final checker cannot be confirmed, switch to a task with clearer boundaries first.

## 2. Fill In the Task Card

Open the [Chapter 2 task delivery protocol](/en/qwenwork/ch02-task-delivery-protocol), fill in this round's task card item by item following that chapter's single standard, and have the final checker confirm it. Do not treat an oral request or a prompt as the task card.

When you need phrasing for the invocation, you can use the [task delivery and review template in the prompt appendix](/en/qwenwork/appendix-templates); the task-card fields and their meanings are defined only by Chapter 2.

## 3. Confirm Inputs and Permissions

List the meeting materials, transcripts, attendee lists, and their versions actually used this round, and confirm each item's source, date, access permissions, and permitted use. If materials are missing, versions conflict, or permissions are unclear, stop generating and ask the material's owner to resolve it.

If the task later requires sending, writing, deleting, or publishing, first check the control rules in [Chapter 11 Security Governance](/en/qwenwork/ch11-security-governance), show the actual objects and impact, obtain the required confirmations, and prepare a verifiable rollback path; this page does not redefine control levels.

## 4. Generate the Draft

Hand the confirmed task card and inputs to the AI, and first ask it to restate the task boundaries and list anything missing, conflicting, or unverifiable. Once the boundaries match, generate only an internal editable draft of the minutes—do not invent names, amounts, dates, decisions, or ownership.

Keep the original inputs and the generated versions. Clearly mark anything that needs human confirmation; do not write unconfirmed content as fact, and do not perform actions beyond the task card.

## 5. Acceptance and Record

Have the checker designated on the task card accept the draft item by item. If acceptance fails, record the rejection reason and revise; if the task card's requirements cannot be met, end this round and keep the issues on record—do not substitute "basically usable" for a passing conclusion.

Save this round's task card, input versions, generated versions, human edits, anomalies, acceptance results, and final confirmation records, so the next run can explain any differences.

Only after the same task passes the [Chapter 10 "personal template candidate" stage gate](/en/qwenwork/ch10-pilot-roadmap) should you consider reusing it as a personal template; the gate's sample sizes, hard gates, and approval requirements are all governed by that chapter and are not restated here.
