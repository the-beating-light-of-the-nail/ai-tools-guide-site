---
title: "Public Case Atlas: Release by Evidence Gates"
description: Verify public candidates, distinguish sample artifacts from case evidence, and maintain a reviewable public membership list
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://alidocs.dingtalk.com/i/nodes/Gl6Pm2Db8DMGQKRatejr3EKoWxLq0Ee4
---

# Public Case Atlas: Release by Evidence Gates

## Plain-Language Orientation

This chapter answers one question: when someone says "we have AI cases in production," how do you judge whether that sentence can be trusted. In a readout or a vendor evaluation you will meet plenty of concrete-looking customer names and scenario atlases, but quoting them straight as evidence is a trap—a polished name is not the same as a source you can re-check line by line. This chapter gives you an evidence gate: only with a case-level external record ID, a stable source location, and a public license does an entry pass the release gate and enter the public membership list. By the end you will understand why, as of the verification date, the number of public cases that have passed the gate is 0, and you will be able to run the evidence-adding procedure yourself to turn one lead awaiting verification into a case you can actually cite. Fewer citation mistakes, and a clear owner when something goes wrong.

## Readable Cases

The case texts remain in the [community case library](/en/qwenwork/) for readers to browse by task and role:

- [Pisen: Competitive Research and Product Collateral Production](/en/qwenwork/case-pisen)
- [Youkela: Product R&D and Attendance-Based Payroll](/en/qwenwork/case-youkela)
- [Qwen Work public case library: an atlas of 32 scenarios](/en/qwenwork/ch09-public-case-atlas)

These pages retain customer statements, public scenarios, and reuse steps, while clearly marking non-independently-audited, pending-verification, and permission boundaries. They are readable practice material and do not change this chapter's statistical basis that "the number of public cases passing the case-level evidence release gate is currently 0."

Plain-language note: treat these as "how someone else did it," not as "evidence that has been verified." If you want to quote them externally, they must clear this chapter's release gate; until they do, they are leads, not members.

## How to Read the Cases

First look at the original pain in the case, then the final artifact; next check the inputs, reuse steps, and acceptance conditions; only then look at customer statements, pending items, and permission boundaries. Results in named cases are statements from customer material, and the 32-scenario atlas is a list of public scenario leads awaiting verification; neither can replace your own baseline and human judgment.

Plain-language note: reading order matters. Problem first, artifact second, and only then the customer's self-praise. Start with customer statements and "the results were great" will pull you off course; check the inputs and acceptance conditions first and you can judge whether the case fits your own scenario at all.

## How to Reuse

1. Replace the case inputs with your own data, rules, assets, permissions, and acceptance basis; do not copy the sample content directly.
2. Start with a low-risk draft or read-only analysis, recording manual edits, anomalies, and rework, before deciding whether to expand.
3. Results from customer material cannot be transplanted directly; product, brand, HR, finance, or other business owners should confirm final conclusions and external actions by scenario, manually.

Plain-language note: what you swap in is your own data, rules, and acceptance basis—not someone else's artifact pasted over. Try the water with a low-risk draft, log what people changed by hand and how much rework there was, then decide whether to scale. "We saved X" in a customer's words is not automatically your conclusion.

## Evidence Statistics

This section gives the current case-level evidence-gate statistics first, then expands on the release gate, source mapping, and item-by-item verification method.

## 30-Second Conclusion

<span id="claim-public-case-count-01" data-claim-id="claim-public-case-count-01"></span>This book states: as of 2026-08-01, public cases satisfying case-level source location and the release gate number 0.

This number describes the public evidence status of this repository; it does not mean there are no tasks worth studying, nor does it auto-promote names, tags, or sample artifacts in the collection page into verified cases. Without a case-level external record ID, a stable source location, or a public snapshot within license, candidate entries remain pending.

Plain-language note: don't read the "0" as bad news. It says this repository, after applying the evidence gate strictly, has no case it can publicly cite yet—not that AI adoption in the workplace has no successes. Add evidence before you quote; without a case-level record ID and a stable source, a candidate stays pending and does not count.

Statistical summary:

| Verification date | Passed case-level release gate | Pending status |
|---|---:|---|
| 2026-08-01 | <span data-public-case-count="0">0</span> | Entries in the candidate set all remain pending |

### Full Public Membership List

The current list is empty. No entry has passed case-level source location and the release gate, so this chapter creates no representative case cards and marks no candidate leads as public members.

Candidate entries are reviewed only in the "leads awaiting verification" section of the generated [case source map](/en/qwenwork/appendix-case-source-map) appendix. That appendix is for finding evidence to add and does not constitute customer endorsement, a public membership list, or proof of outcomes.

<span id="claim-public-demo-boundary-01" data-claim-id="claim-public-demo-boundary-01"></span>This book argues: sample artifacts only prove artifact form; they cannot prove case attribution, implementation cost, production stability, or business outcomes.

The `qwenwork.host` and GitHub Pages links help readers observe how web pages, dashboards, or reports are presented, but cannot replace original case records. Even if a sample is still reachable, one cannot infer that it belongs to some candidate entry or has been running stably in production.

Plain-language note: a demo page that loads proves one thing—that the artifact can look like this. It says nothing about whose it is, what it cost, or whether it holds up in production. Even if you can open it any time, you cannot reverse-engineer which candidate it belongs to, and you certainly cannot treat it as something already running live.

## Why It Matters

Concrete-looking case names do not mean the sources can be re-checked item by item. R11's visitor page can show candidate names and tags, but exposes only the collection-level `sheetId=hERWDMS`, `viewId=HdnvUtk`, and the collection-level Wiki location; the URL does not change when a card is clicked, and visitors cannot obtain case-level record IDs, card deep links, or stable URLs via "source data."

This distinction decides whether a case can be cited, corrected, and maintained long term. If readers cannot get from the body back to an original record, they cannot confirm whether the name and tags belong to the same record, nor judge link rot, content updates, or attribution changes. Therefore, collection-level visibility can only produce leads awaiting verification, not public case members directly.

Plain-language note: if you cannot click from the text back to the original record, you cannot tell whether this name and that tag belong to the same entry, and you will never notice a dead link or a change of ownership. Before you cite a case you must be able to return to the source item by item—otherwise errors can't be corrected and nobody can be held to account.

## Release Gate and Verification Method

Public cases use a per-entry release gate, not the visible count on the collection page:

| Release gate | Pass condition | Handling when not passed |
|---|---|---|
| Case identity | A case-level external record ID exists, with no book-created ID masquerading as an external one | Remain pending |
| Source location | A case-level stable deep link, or a public snapshot with content hash saved within license | Not counted publicly |
| Content correspondence | Name, tags, source location, and sample artifacts correspond stably to the same record | Record the conflict and keep adding evidence |
| Release boundary | Contains no unlicensed identity, customer results, or sensitive information | De-identify or stop the release |
| Review record | Keeps verification date, status, limitations, and responsible roles | No representative case card created |

The structured basis defers to the [case source map](/en/qwenwork/appendix-case-source-map): only entries with `included_in_public_count` set to `true` enter the public count and membership list. Evidence cards, source priority, and conflict handling follow [Research and the Evidence Chain](/en/qwenwork/ch08-research-evidence-chain); this chapter establishes no separate judgment standard.

Plain-language note: to turn a candidate into a public member you have to clear all five gates—identity, source, correspondence, boundary, and review record. Miss one and it stays pending. Above all, never pass off an ID this book invented as an external record ID; that is fabricated evidence.

## Enterprise Actions

When the team prepares to make a candidate case public, add evidence in this order:

1. The case evidence reviewer obtains the case-level external record ID and a stable source location.
2. Check item by item the correspondence between original name, original tags, source record, and sample artifact.
3. Record the access date, evidence status, applicable scope, and unsupported conclusions; downgrade first when there are conflicts.
4. Make a public snapshot only when the license is explicit, registering the content hash at the same time; create no snapshot without a license.
5. Review identity, results, sensitive information, and promotional copy in the public content, then set the structured status to releasable.
6. Regenerate the appendix and run content validation so the body's count, membership list, and structured data stay consistent.

Plain-language note: work those six steps in order—get the external record ID and stable source, check item by item, log the limitations, confirm the license, and only then flip the status to releasable. No license, no snapshot. Conflicts get downgraded first. Leave a trail at every step, or the body, the list, and the structured data will drift apart.

## Boundaries and Next Steps

This chapter is a content snapshot as of 2026-08-01; it makes no inferences about internal records beyond the R11 collection page, and does not transcribe card content that cannot be stably located into public fact. The public count will change with added evidence, expiry, or withdrawal, and every release must rerun the same release gate.

The next step is not to embellish candidate stories, but to obtain reviewable case-level locations item by item, confirm public licenses, and record limitations. Until then, readers can use the leads awaiting verification to understand possible task directions, but cannot cite them as verified cases.

Plain-language note: don't mistake "write a few more candidate stories" for progress. The real next step is obtaining a reviewable location item by item, securing the public license, and writing the limitations down clearly. Until that happens, leads are directional reference only—you cannot publish them as "verified cases."

## Plain-Language Glossary

| Term | Plain language |
|---|---|
| Case-level evidence gate | The five hard thresholds a case must clear to enter the public list; miss one and it stays pending |
| Release gate | The item-by-item check that decides "can we say this case out loud"—not a count of how many rows the collection page shows |
| Lead awaiting verification | Looks like a case by name and tag, but you have no re-checkable source yet; treat it as a topic idea only |
| Public membership list | The cases that have cleared every release gate and that you can cite without worry; currently empty |
| pending | The holding state for a candidate that has not cleared the gate; it does not count until you add evidence |
| Sample artifact | Proves only "this is what the artifact looks like," not attribution, cost, or outcomes—don't treat it as case evidence |
| Content hash | A fingerprint computed over a snapshot so you can later tell whether anyone altered the content |

## FAQ

**You want to cite a customer case but all you have is a name and tags from the collection page. Is that enough?**
No. You need at least a case-level external record ID and a stable source location, and all five release gates must pass, before it enters the public membership list. Name and tags alone make it a lead awaiting verification, and an external citation on that basis will be rejected.

**The count of cases that passed the release gate is 0. Does that mean there are no successful AI office cases?**
No. It only means that after applying the evidence gate strictly, this repository has no case it can cite publicly. When you run into a very concrete customer story, add evidence first—don't assume it has already been verified.

**Can you use someone else's demo page as evidence for your own organization?**
No. A demo page proves artifact form only, not attribution, cost, or production stability. Even if you can open it at any moment, you cannot reverse-engineer which candidate it belongs to, and you cannot write it into your readout as a result.

**As the case evidence reviewer, what is the first thing you do when adding evidence?**
Get the case-level external record ID and a stable source location, then check item by item whether name, tags, source, and artifact correspond to the same record. Without an external ID, nothing downstream has a foundation.

**You find that a candidate does not match the original record. Do you stop or fix it?**
Downgrade it first, keep it pending, log the conflict, and keep adding evidence. Don't force mismatched content into the public membership list; wait until you have a consistent source before deciding whether it can be released.

[Next chapter: Office Delivery](/en/qwenwork/ch06-office-delivery)
