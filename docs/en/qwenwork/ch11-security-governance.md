---
title: "Security Governance: Actions, Data, Consequences, and Human-Machine Responsibility"
description: Constrain enterprise AI workflows with G0–G3, data sensitivity, professional consequence, and continuous authorization
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/getting-started/privacy-security
---

# Security Governance: Actions, Data, Consequences, and Human-Machine Responsibility

## When You Need This Chapter

If you are only reading materials you are authorized to see or organizing a draft that touches no one else, you can skip this chapter for now. Return here to confirm who may act, who must confirm, and how to stop on failure whenever a task involves team sharing, personal or customer data, automatic writes to ledgers or to-dos, cross-system connections, outward sending, payments, deletion, approvals, or output that could affect legal, financial, or personnel decisions. You need not memorize G0–G3 first: look at the actual action, data sensitivity, and possible consequences, then register per this chapter.

## 30-Second Conclusion

<span id="claim-g0-g3-controls-01" data-claim-id="claim-g0-g3-controls-01"></span>G0–G3 denote action risk levels only; data sensitivity and professional consequence must be judged independently, applying the strictest of the three controls.

<span id="claim-g2-continuous-authorization-01" data-claim-id="claim-g2-continuous-authorization-01"></span>Only after a workflow is formally released, has clear boundaries, and receives jointly approved continuous authorization may G2 shift from batch-by-batch pre-confirmation to running within the approved scope with spot checks; G3 still requires pre-confirmation every time.

<span id="claim-human-responsibility-01" data-claim-id="claim-human-responsibility-01"></span>The business owner is always accountable for the final business outcome and cannot transfer responsibility to AI or the process maintainer; the G3 executor and the action approver may not be the same person.

## Why It Matters

Judging risk only by "read" or "write" misses two classes of problems: reading candidate information changes no system state yet involves personal data; generating legal, financial, or personnel judgments, even saved only as a draft, may affect high-consequence decisions. Conversely, a reversible new file on ordinary internal data and overwriting originals, sending outward, or deleting cannot share one confirmation rule.

With actions, data, and professional consequences separated, business owners can see who bears the outcome, process maintainers can implement the right confirmation and rollback, and data/security owners can set control floors by authorization scope. A level is not automation maturity, nor an "allowed to execute" label; it is only one dimension deciding the minimum control intensity.

## Method or Model

### First Judge the G0–G3 Action Level Independently

| Level | Fixed definition | Default control |
|---|---|---|
| G0 Read-only | Changes no business object, permission, or external state | May run automatically within authorized data scope; keep source and access records |
| G1 Reversible draft write | Only creates isolated drafts or new files; objects identifiable, deletable, or recoverable; reaches no external recipient; overwrites no original | May execute then notify; originals and recovery paths must be kept |
| G2 Business state write | Creates or updates internal to-dos, ledgers, logs, CRM, and other business objects | By default, before each batch, show objects, fields, and impact and obtain explicit confirmation; only a formally released, bounded workflow with continuous authorization may run within the approved scope and accept spot checks |
| G3 High-consequence action | Outward sending, public publishing, payment, approval, deletion, master-data modification, or other hard-to-undo actions | Mandatory confirmation before every execution with audit records; spot checks cannot replace pre-approval |

"Reversible" must be proven by an actual recovery path. Writing only "deletable" without identifying the object, recovering the original, or verifying the recovery does not satisfy G1; overwriting originals is not G1 either. G2's "explicit confirmation" must let the approver see this batch's objects, fields, and impact; a generic popup or past consent is not a substitute.

### Then Judge Data Sensitivity

| Data category | Typical scope | Minimum handling requirements |
|---|---|---|
| Public | Lawfully public information permitted for the current use | Keep source, date, and usage boundaries |
| Internal | General business and collaboration information for internal use only | Restrict members, systems, and uses; keep access records |
| Confidential / personal or customer data | Trade secrets, personal information, customer data, and re-identifiable data | Minimal authorization, restricted use and retention; control no lower than G2 |
| Regulated or organizational secrets | Data governed by special regulation, contract, or the organization's highest-sensitivity rules | Control at G3 and comply with applicable policy and professional requirements |

### Judge Professional Consequence Independently

| Professional consequence | Judgment question | Typical control focus |
|---|---|---|
| Informational assistance | Does the output only help find, organize, or understand, without directly changing business decisions | Sources, accuracy, applicable scope |
| Daily operations | Does the output affect routine task allocation, ledger status, customer follow-up, or internal operations | Objects, fields, permissions, review, rollback |
| Legal / financial / HR and other high-consequence judgments | Could the output affect rights and obligations, funds, hiring or rejection, compensation, or other major decisions | Independent professional review by someone with the duty or credentials, plus explicit approval |

The action level stays independently judged: confidential data or high-consequence judgments take controls no lower than G2; regulated data, organizational secrets, or G3 actions are controlled at G3; where organizational policy is stricter, organizational policy prevails. Raising controls does not relabel the action—reading personal information remains a G0 action, but authorization must be restricted, access logged, and review arranged at no less than G2 intensity.

### Fix the Six Responsible Roles

| Role | Fixed responsibility |
|---|---|
| Business owner | Defines goal, scope, acceptance, and stop conditions; approves business launch and is accountable for the final outcome |
| Process maintainer | Maintains workflow versions, boundaries, tests, monitoring, deactivation, and recovery paths |
| Data/security owner | Confirms data classification, minimal authorization, logs, retention, incident handling, and continuous authorization boundaries |
| User | Provides inputs and executes tasks within the authorized scope, checks visible anomalies, and submits acceptance records |
| Content reviewer | Verifies facts, numbers, sources, wording, and required professional conclusions; records pass or reject |
| Action approver | Verifies objects, scope, and impact before the action happens; approves or rejects G2/G3 actions |

Small teams may combine roles, but the G3 executor and the action approver may not be the same person. The process maintainer answers for run quality, the content reviewer for the reviews they sign, and the action approver for specific action authorizations; none of these divisions relieves the business owner of accountability for the final business outcome.

### Set Up Bounded Registration for G2 Continuous Authorization

G2 defaults to batch-by-batch pre-confirmation. Only workflows that have passed the [team workflow release stage gate](/en/qwenwork/ch10-pilot-roadmap), whose scope is enumerable and which can be deactivated immediately may apply for continuous authorization. The business owner and data/security owner must approve jointly, recording all the following fields:

| Registration field | Required content |
|---|---|
| Allowed business objects | Object types, systems, and identifiable scope that may be created or updated |
| Fields | Whitelist of fields allowed for read and write, with forbidden fields explicit |
| Per-batch cap | Maximum objects, amounts, or other business caps per run |
| Run frequency | Scheduling or manual trigger frequency, plus forbidden time windows |
| Validity period | Start and end dates; default no more than 90 days |
| Log location | An audit location the owners can access, search, and export |
| Spot-check frequency | Default at least weekly, with the sample-selection rule stated |
| Revoker | The specific role or person empowered to deactivate the continuous authorization immediately |
| Revocation conditions | Trigger rules for changes in permissions, fields, recipients, error rates, or other boundaries |
| Bound workflow version | Unique version number or immutable version identifier, with matching test and release records |
| Execution account / service identity | The account or service identity actually running, and its minimal permission scope |
| Run environment | The approved systems, tenants, spaces, and production or test environments |
| Approved purpose | The permitted business purposes, and explicitly forbidden secondary uses |

An old authorization is valid only for the registered workflow version, execution account/service identity, run environment, and approved purpose; it cannot be moved to other versions, executors, environments, or purposes. Continuous authorization becomes void immediately and unconditionally when permissions, fields, recipients, or error rates change in any way. It also becomes void immediately when workflow logic or rules, version, model, connector, execution entity, or run environment changes in any way. The workflow should first be deactivated and restored to batch-by-batch confirmation, then re-enabled after revision, re-verification, and joint approval. Expiry of the default validity period also voids it—no silent renewal.

During continuous authorization, run logs must cover 100% of runs with at least weekly spot checks. Logs record at least run ID, workflow version, execution entity, objects, before/after values of key fields, results, and anomalies; where personal information, customer information, or other sensitive content is involved, record only necessary values, protected references, or content digests per the approved log policy, with corresponding access and retention controls. "100% retention" means every run has an auditable record; it does not mean unlimited copying or permanent storage of sensitive originals.

G3 allows no continuous-authorization exemption from per-execution confirmation. Before every execution, the action approver must be shown the recipient or object, the specific action, key content or fields, the impact scope, and the irreversible consequences; every approval binds an immutable action version or content digest, a one-time execution ID, and the registered validity period. Re-showing and re-approval are required whenever the recipient or object, action, key content, fields, or impact changes, when validity expires, on repeated execution, or when retrying after a failure; spot checks cannot replace pre-approval.

G3 audit records keep both the approval snapshot identifier and the actual executed recipient or object, action, key content or field values, results, and anomalies, so approved content and actual results can be compared. Sensitive content is logged only within the authorized scope, using protected references or content digests; audit must not become a pretext to widen copying, access, or retention.

### An Office Action Example: Four Actions on the Same Meeting Minutes

Understand the levels with ordinary actions first, then check the table rules. "Confirm" below means confirming the specific objects, content, and impact—not one click granting permanent authorization; passing a stage does not automatically grant permissions.

| Action | Concrete example | Who confirms what | How to stop on failure |
|---|---|---|---|
| G0 Read-only | Read the authorized meeting notes, extract conclusions, to-dos, and sources, changing no business object or external state. | The user confirms the task scope; the data/security owner confirms source and access scope; the content reviewer confirms facts trace back to the original record. | On permission expiry, unclear source versions, or personal data beyond permitted use, stop reading and generating immediately, keep the authorized originals, switch to manual verification, and do not switch to an unauthorized account. |
| G1 Isolated draft | Create an isolated meeting-minutes draft or new file from the weekly report inputs, overwriting no original and reaching no recipient. | The user confirms the draft location and input versions; the content reviewer confirms editability and verifiability; the process maintainer confirms object identification, original protection, and recovery paths. | When a draft lands in the wrong place, the object cannot be identified, originals get overwritten, or a recovery drill fails, deactivate immediately, protect originals, and take over manually; verify recovery after fixing—"deletable" alone is not enough. |
| G2 Internal ledger / to-do write | Write the confirmed meeting action items into an internal ledger or to-do, showing objects, fields, and impact, with no outward sending. | The action approver confirms fields, counts, impact, and rollback for this batch's actual objects; the business owner confirms business scope; the data/security owner confirms authorization. Only formally released, enumerable-boundary, jointly approved workflows may apply for G2 continuous authorization. | On object or field mismatch, duplicate writes, permission anomalies, or unverifiable write results, stop this batch and further scheduling; void the continuous authorization first, protect the original ledger, verify manually and recover; re-verify after revision—old approvals do not carry over. |
| G3 Outward send, payment, or deletion | Send the minutes to a customer, execute a payment, delete records, or take other hard-to-undo external actions. | The action approver confirms the recipient or object, specific action, key content or fields, impact, and irreversible consequences every time; executor and approver are separate. The business owner is accountable for the final business outcome. | Whenever content, object, version, or impact changes, execution fails, or a retry is prepared, stop immediately and block the retry, protect originals, take over manually, and check actual impact against the approval snapshot; verify after recovery, and each subsequent action still needs fresh confirmation. |

The ordinary reader's minimum record: input versions, what was manually changed, what anomalies occurred, who accepted what, and the final result. You can use the [Chapter 9 public case atlas (with 32 pending-verification scenario leads)](/en/qwenwork/ch09-public-case-atlas) to practice meeting-minutes or follow-up scenarios; the atlas only helps understand actions and artifact forms and cannot replace your organization's authorization, professional review, or approval records.

## Cases and Evidence

One "customer visit follow-up" workflow can carry multiple levels at once: reading authorized CRM records is G0; saving an email draft that reaches no customer while keeping the original is G1; updating internal CRM follow-up status is G2; emailing the customer is G3. Even with G2 continuous authorization for the update, the final outward send still needs per-execution confirmation. Leaving traces of input versions, manual edits, anomalies, acceptance, and results is what lets you locate, after a failure, whether the problem was permissions, content, or action confirmation.

Consider candidate status organization next: the action may be only G0 reading and aggregation, but the inputs contain personal information, so controls are no lower than G2; if the output feeds high-consequence judgments such as hiring, rejection, or compensation, the corresponding professional owner must also review. Raising control intensity does not authorize automated personnel decisions.

The official Qwen Work help center provides privacy and security documentation. [R9](/en/qwenwork/appendix-sources#r9) Actual product capabilities, data handling, and organizational configuration should be governed by the page and contract at time of use; this chapter's G0–G3, role division, and continuous authorization terms are community governance suggestions, not an official product risk rating or legal advice.

## Enterprise Actions

Complete one governance card per workflow about to pilot or already running:

1. Mark each action G0–G3; do not assign one vague average level to a whole process.
2. Mark data sensitivity and professional consequence separately, and apply the strictest of the three controls.
3. Designate the six roles; check that the G3 executor and action approver are separated.
4. Verify G1 originals, object identification, and recovery paths; drill a recovery once.
5. Configure batch preview and explicit confirmation for G2; where continuous authorization is truly needed, fill in all registration fields and approve jointly.
6. Configure per-execution confirmation, audit records, and post-failure manual takeover for G3; set no spot-check exemptions.
7. Wire unauthorized actions, major privacy issues, and critical business errors into the Chapter 10 stop rules.
8. Check G2 logs and anomalies at least weekly; on boundary changes, void the authorization first, then investigate.

Minimum launch evidence includes the current workflow version, authorization records, role list, confirmation interface or records, log location, spot-check results, deactivation switch, and a recovery drill. Missing any required control means shrinking scope or keeping manual execution.

## Boundaries and Next Steps

This chapter provides a general governance model; it does not replace organizational policy, contractual obligations, regulatory requirements, or legal, financial, and HR professional judgment. Data categories must be confirmed by people who know the organization's data and applicable rules; when professional consequence is uncertain, control at the higher level and request professional review.

Governance levels do not prove a workflow works, and stage gates do not grant permissions automatically. Organizations should use the Chapter 10 pilot stage gates and the automation takeover chain together, so workflows both pass quality and value validation and can stop, hand over, and recover when permissions, inputs, or error rates change.

[Next chapter: Team Workflow Operations](/en/qwenwork/ch12-workflow-operations)
