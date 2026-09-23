---
title: "Reusable Assets: Skills, Connectors, and Expert Kits"
description: Distinguish release responsibility across method assets, authorization boundaries, and role-level workflow combinations
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/features/skills
  - https://qwenwork.cn/docs/features/connectors
---

# Reusable Assets: Skills, Connectors, and Expert Kits

## Plain-Language Orientation

This chapter helps you pull apart three things your team tends to bundle together: the method, the permission, and the role package. When you run the same business retrospective every week, you often stuff prompts, account connections, and role knowledge into one "smart assistant"—and when it breaks you cannot tell whether to fix the method, revoke permissions, or update standards. This chapter manages Skills (the method), connectors (the authorized channel), and expert kits (the role task package) separately, each with its own owner, version, and test samples. By the end you will know which assets you can share freely and which ones, the moment they touch permissions, need a review of their own.

## 30-Second Conclusion

<span id="claim-skill-asset-boundary-01" data-claim-id="claim-skill-asset-boundary-01"></span>This book defines a Skill as a versioned asset that packages repeatable methods and tool steps; it answers "what steps to follow for this kind of work," does not automatically gain data permissions, and does not replace professional acceptance.

Plain-language note: why is this boundary drawn here? It is easy to assume that once you have a Skill it can read data automatically. It cannot: a Skill governs only the steps, and permissions are something you apply for separately. Mix the two and sharing spreads your personal permissions together with unverified steps.

- Connectors define the authorized boundary for data and actions; they do not carry a complete business method.
- Expert kits combine multiple published workflows and role standards; they are not a bundle of prompts.
- All three asset types need an owner responsible for maintaining and confirming the asset, a version, inputs and outputs, test samples, permission notes, and release gates.

## A Scenario You Might Hit

Every week you organize a business retrospective by the same set of rules; the usual materials come from the project ledger, and the result still goes to the owner for confirmation. The input example is "this week's ledger, last week's template, exception rules, and the to-do draft location." At this point you can separate out the reusable practice (a workflow), manage the authorization channel that delivers materials to another tool (a connector), and the combined task package (an expert kit) separately.

Plain-language note: start separating them right here—the method is the method, the channel is the channel, the package is the package. Keep the three apart and the day a connector fails, your method asset can still degrade to manually fed inputs instead of silently producing half a conclusion.

## What You End Up With

The final product is a reusable-asset registration package, structured as:

1. Method assets: steps, judgment rules, inputs and outputs, and versions;
2. Authorization channels: system objects, read/write scope, credential ownership, validity periods, and action confirmation;
3. Task packages: accepted workflows, role standards, and professional owners;
4. Test and release records: normal, missing, conflicting, and out-of-scope samples, plus the last stable version.

## Follow Along

1. First break one successful task into repeatable steps, judgment rules, and delivery formats; mark them as Skill candidates—do not share personal prompts directly.
2. Then list each material source and action, and apply separately for the minimal necessary connector authorization; a successful connection does not mean automatic full read/write permission.
3. **Mid-point checkpoint:** have the workflow owner, system or data owner, and professional-quality owner separately confirm the method, permissions, and responsibility boundaries.
4. Test with normal, missing, conflicting, and out-of-scope inputs; only assets that pass the release gate can be combined into expert kits or team processes.

Plain-language note: step 2 is the one you most easily skip. "Connected" does not mean "can read and write." A connector grants only the boundary inside its authorization, so don't assume full permissions just because it displays as connected. Requesting more than the task needs is a release-stop signal.

## Case Reference

You can start with [Pisen: Competitive Research and Product Collateral Production](/en/qwenwork/case-pisen) as an example of why "method steps" and "material authorization" must be kept separate; the case itself cannot prove the connector is already authorized or directly reusable.

## Post-Task Check

Check the asset registration package item by item: you must be able to point to the current version, minimal permissions, the four classes of test samples, the owner, and the last stable version; missing any one item restricts it to personal use or a controlled pilot—no release.

Plain-language note: what this check enforces is auditability. If you cannot name the current version, minimal permissions, the four sample classes, and the owner, the asset stays personal and cannot go out to the team—because when it breaks, nobody knows which version to roll back to or who owns the failure.

## Watch Out

If a connector fails, permissions exceed scope, or tests fail, keep the raw materials and failing versions, stop official writes or outward delivery, and roll back to the last stable version; switch to manually provided inputs or read-only analysis, and resume only after the system owner and professional owner confirm.

Plain-language note: when a connector fails, permissions exceed scope, or tests fail, stop official writes and outward delivery, keep the raw materials and the failing version, and go back to the last stable version. Switch to feeding inputs manually or to read-only analysis, and have the system owner and professional owner confirm before you resume.

## Further Reading

Continue with this page's [Method or Model](#method-or-model), [Cases and Evidence](#cases-and-evidence), and [Boundaries and Next Steps](#boundaries-and-next-steps), and see the [official Skill sources](/en/qwenwork/appendix-sources#r8) and [official connector sources](/en/qwenwork/appendix-sources#r4).

## Why It Matters

Teams often mix prompts, account connections, and role knowledge into one "smart assistant." When an error appears, no one can tell whether to fix the method, tighten authorization, or update professional standards; sharing also tends to spread personal permissions and unverified steps along with it.

Clear asset boundaries let the enterprise manage content quality, system permissions, and role responsibility separately. They also decide whether reuse is auditable: who approved which version, which test samples were used, what data is accessible, and where to roll back after failure.

## Method or Model

| Asset | Normative definition | Applicable conditions | Primary owner |
|---|---|---|---|
| Skill | Packages repeatable methods, tool steps, judgment rules, and delivery formats | Similar tasks with stable inputs, testable steps, identifiable failures | Workflow owner |
| Connector | Provides the authorized boundary for data reads or action calls | System objects, accounts, permissions, and read/write scope all clear | System owner, data owner |
| Expert kit | Combines multiple published workflows, role knowledge, and professional standards | Role task chain stable; component assets have passed stage gates | Role lead, professional-quality owner |

Plain-language note: when you read this table, look at the owner column—a Skill belongs to the workflow owner, a connector to the system or data owner, an expert kit to the role lead and professional-quality owner. Different people own them precisely so that method, permissions, and standards are managed separately.

Each asset is registered with the same release contract:

| Field | Required content | Pre-release evidence |
|---|---|---|
| Owner | The specific role accountable for results, permissions, or professional standards | Responsibility confirmation and escalation contact |
| Version | Version number, changes, compatibility scope, rollback version | Change log, recoverable previous version |
| Inputs and outputs | Input fields, trusted ranges, output format, save location | Valid samples, missing samples, artifact examples |
| Test samples | Normal, boundary, conflict, and failure samples | Test records, human edits, failure reasons |
| Permissions | Data objects, read/write scope, credential ownership, validity period | Authorization records, minimal-permission check |
| Release gate | Current stage, pass conditions, stop conditions, approver | Stage review records and release decision |

<span id="claim-connector-authorization-01" data-claim-id="claim-connector-authorization-01"></span>The product role of a connector is to link external data or tools; the data actually accessible and actions executable are constrained by current authorization and availability—one cannot presume full read/write permission from "connected."

<span id="claim-expert-kit-release-01" data-claim-id="claim-expert-kit-release-01"></span>This book recommends: expert kits may only combine workflows that have passed the role stage gate; a kit's name cannot replace the testing, permission, and responsibility records of its component assets.

Reuse promotion follows the Chapter 10 stage gates; this chapter does not copy sample sizes and thresholds: a personal template becomes a candidate asset only after passing the 0–30 day stage gate; a team workflow may be released as a team Skill only after passing the 31–60 day stage gate; a role expert kit may only combine workflows that passed the 61–90 day stage gate.

Plain-language note: don't skip levels when promoting reuse. A personal prompt counts as a candidate only after running the full 0–30 days; a team workflow becomes a Skill at 31–60 days; an expert kit can only contain workflows that cleared the 61–90 day stage gate. A kit's name cannot vouch for its component assets.

## Cases and Evidence

The official help center provides separate documentation for Skills and connectors. [R8](/en/qwenwork/appendix-sources#r8) [R4](/en/qwenwork/appendix-sources#r4) This chapter adopts their public product context, but the "asset release contract" and the stage-gate mapping are community governance methods, not official product commitments.

A weekly business-retrospective Skill can fix input checks, data reconciliation, exception identification, and artifact format; the connector only reads the project ledger or creates to-do drafts within its authorization; the expert kit then combines published workflows such as business retrospective, risk escalation, and management reporting. If any connector fails, the method asset should still be able to degrade to manually provided inputs rather than silently generating incomplete conclusions.

## Enterprise Actions

Run one asset split over existing shared prompts:

1. Organize repeatable steps, judgment rules, and delivery formats into Skill candidates.
2. List each data source and action separately; distinguish reads, draft writes, and official execution.
3. Designate the workflow owner, system owner, and professional-quality owner.
4. Prepare test samples for normal, missing, conflicting, and out-of-scope inputs.
5. Register the current stage gate; before passing, restrict to personal or controlled-pilot use.

Signals to stop a release include: no specific owner; inputs and outputs rest on oral agreements; tests cover only success samples; connector requests exceed what the task needs; no way back to the last stable version; the expert kit contains workflows not yet independently accepted.

Plain-language note: what this split means for you is: don't rush to share "that handy assistant." Separate the steps, the connections, and the role package first, name one owner for each, and prepare all four sample classes. If any signal shows up—no owner, success samples only, permissions beyond scope—stop the release.

## Boundaries and Next Steps

A good prompt can be raw material for a Skill, but is not a complete team asset. Connector availability does not mean business actions are approved; professional judgment inside an expert kit is still borne by people with the corresponding duty.

This chapter defines asset boundaries and release relationships, not takeover and recovery during automated runs. Before an asset enters scheduled or unattended operation, it also needs independent run controls.

## Plain-Language Glossary

| Term | Plain language |
|---|---|
| Skill | Your repeatable method, steps, and judgment rules packaged as a versioned asset; it governs only "how to do it" |
| Connector | An authorized channel that carries your materials to another tool or invokes actions; it grants only the authorized boundary |
| Expert kit | Several published workflows bundled into a role task package—not a bundle of prompts |
| Owner | The specific person truly accountable for an asset's result; you must name one, not write "the team" |
| Release gate | The stage checkpoint an asset clears from candidate to release; failing it limits it to personal or controlled-pilot use |
| Stage gate | Upgrade checkpoints set by day count: 0–30, 31–60, and 61–90 days map to different asset levels |

## FAQ

**You have a prompt that works well. Can you release it as a team Skill directly?**
No. A prompt is only raw material for a Skill, not a complete asset. Break it into steps, judgment rules, and a delivery format; clear the stage gates, name an owner, and assemble the test samples before you release it.

**The connector shows "connected." Does that mean you can read and write?**
No. Connected only means the channel is open; what you can actually read and write is bounded by your current authorization and scope. Don't assume full permissions, and remember that requesting beyond scope triggers a release stop.

**Can an expert kit's name vouch for its component assets?**
No. You may only combine workflows that have passed the role stage gate, and every component asset still needs its own testing, permission, and responsibility records. The kit name cannot stand in for them.

**What must you check when registering an asset?**
Current version, minimal permissions, four test sample classes (normal / missing / conflicting / out-of-scope), owner, and last stable version. Miss any one and it stays personal or controlled-pilot only—no release.

**If a connector fails, does your method asset collapse?**
It shouldn't. By design, the method asset should degrade to manually fed inputs rather than silently producing a half-finished conclusion. Confirm that degradation path exists when you accept the asset.

[Next chapter: Automation and Its Boundaries](/en/qwenwork/ch05-automation-boundaries)
