---
title: "Quick Start: Complete Your First Acceptable Task"
description: Run a low-risk, acceptable draft-task loop end to end using the single task card
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/product-introduction
---

# How Do You Run Your First Task in Qwen Work? Ship a Reviewable Draft in Ten Minutes

Your first time with Qwen Work, don't try to automate the whole department in one shot. This page does exactly one thing: use the [Chapter 2 task card](/en/qwenwork/ch02-task-delivery-protocol) to run one low-risk, acceptable draft task to completion. The example below is "organize the authorized meeting materials into an internal draft of the minutes." Just follow along.

## 1. Pick a Safe Task First

The task you pick has to meet three conditions: the inputs are already authorized, you can check the output by hand, and it's easy to roll back to the original state if it fails. Keep this round's scope to "produce an internal editable draft"—no sending, no system writes, no publishing.

If you can't state the input sources, the usage permissions, or the final checker, switch to a task with clearer boundaries first.

## 2. Write the Task Into the Task Card

Open [Chapter 2, the task delivery protocol](/en/qwenwork/ch02-task-delivery-protocol), fill in this round's task card item by item following that chapter's single standard, and have the final checker confirm it. Don't treat an oral request or a prompt as the task card—that doesn't count.

When you need phrasing for the invocation, you can borrow the [task delivery and review template in the prompt appendix](/en/qwenwork/appendix-templates); the task-card fields and their meanings are still governed by Chapter 2.

## 3. Confirm Inputs and Permissions

List the meeting materials, transcripts, attendee lists, and versions you're actually using this round, and confirm each item's source, date, access permissions, and permitted use. If materials are missing, versions conflict, or permissions are unclear, stop and let the material's owner sort it out—don't force a generation.

If the task later requires sending, writing, deleting, or publishing, first check the control rules in [Chapter 11, Security Governance](/en/qwenwork/ch11-security-governance), show the actual objects and impact, obtain the required confirmations, and prepare a verifiable rollback path. This page does not redefine control levels.

## 4. Generate the Draft

Hand the confirmed task card and inputs to the AI, and first ask it to restate the task boundaries and list anything missing, conflicting, or unverifiable. Once the boundaries match, it generates only an internal editable draft of the minutes—it does not invent names, amounts, dates, decisions, or ownership for you.

Keep the original inputs and the generated versions. Clearly mark anything that needs human confirmation; unconfirmed content is never written as fact, and no action beyond the task card gets executed.

## 5. Acceptance and Record

The checker named on the task card reviews the draft item by item. If it fails, record the rejection reason and revise; if the task card's requirements can't be met, end this round and keep the issues on record—don't substitute "basically usable" for a passing conclusion.

Save this round's task card, input versions, generated versions, human edits, anomalies, acceptance results, and final confirmation records. That's what lets you explain differences the next time you run it.

Only after the same task passes the [Chapter 10 "personal template candidate" stage gate](/en/qwenwork/ch10-pilot-roadmap) is it worth reusing as a personal template; the gate's sample sizes, hard gates, and approval requirements are all governed by that chapter and are not restated here.

## FAQ

**Is the task card actually mandatory?**
Yes. Don't substitute an oral request or a prompt. Only a task card filled out to the Chapter 2 standard is accepted by the checker.

**Can I generate first if the inputs aren't authorized?**
No. If materials are missing, versions conflict, or permissions are unclear, stop and let the owner handle it. Don't force a run.

**Will the AI send the minutes out for me?**
No. It generates an internal editable draft only. Sending, writing, deleting, and publishing are outside the scope you authorized; if you really need those, run the Chapter 11 control check first.

**Does a passed draft count as a formal document?**
Passing only means it met this round's task-card requirements. Before you turn it into a formal document, you still need confirmation and an audit trail under your organization's process.

Next: for the shape of the whole book, read the [Executive Summary](/en/qwenwork/executive-summary); to fill in the task card, go to [Chapter 2, Task Delivery Protocol](/en/qwenwork/ch02-task-delivery-protocol).
