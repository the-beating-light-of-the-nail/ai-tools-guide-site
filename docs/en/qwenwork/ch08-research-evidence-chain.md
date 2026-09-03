---
title: "Research and the Evidence Chain: From the Question Tree (a Framework That Breaks Big Questions into Small Ones) to the Release Record"
description: Produce verifiable research deliverables with a unified evidence card (a small card recording source, basis, and limitations), a conflict register (a record of differences across sources), and a human-machine process
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://alidocs.dingtalk.com/i/nodes/Gl6Pm2Db8DMGQKRatejr3EKoWxLq0Ee4
---

# Research and the Evidence Chain: From the Question Tree (a Framework That Breaks Big Questions into Small Ones) to the Release Record

## 30-Second Conclusion

<span id="claim-evidence-card-fields-01" data-claim-id="claim-evidence-card-fields-01"></span>This chapter defines the single standard for the evidence card (a small card recording source, basis, and limitations) as nine fields: claim, source text, source type, date, statistical basis, applicable scope, limitations, conflicts, status.

<span id="claim-research-question-tree-01" data-claim-id="claim-research-question-tree-01"></span>This book recommends: in research, first break the decision question into a question tree (a framework that breaks big questions into small, evidence-answerable ones), then search and write, to avoid "writing whatever the search turns up."

## A Scenario You Might Hit

You need to research and form a competitive, market, or business analysis conclusion, but the search returns plenty of results with inconsistent bases and dates. The input example is "the budget decision to support, the deadline, the target market, existing official materials, and interview notes"; break the decision into a question tree first, then start searching.

## What You End Up With

The final product is a publishable research package, structured as:

1. Question tree and source plan: each sub-question, priority sources, fallback sources, and stop conditions;
2. Evidence cards (small cards recording source, basis, and limitations): claim, source text, source type, date, statistical basis, applicable scope, limitations, conflicts, status;
3. Conflict register (a record of differences across sources): number, related cards, difference, possible cause, handling action, the owner responsible for verifying and handling this piece of evidence, and status;
4. Layered conclusions: verified facts, evidence-based inferences, recommendations, open questions, and pre-release review records.

## Follow Along

1. First write the decision the reader must make, break it into an evidence-answerable question tree, and assign sources and stop conditions to each sub-question.
2. Collect titles, links, dates, and original-text locations; make evidence cards with the nine fields; do not write search snippets directly into conclusions.
3. **Mid-point checkpoint:** verify the subject, period, units, definitions, and authorization card by card; register conflicts as found—do not mask differences with averages or majority voting.
4. Layer facts, inferences, recommendations, and open questions; before release, have someone not involved in writing spot-check key claims, high-consequence conclusions, and sensitive information.

## Case Reference

You can start with the [Qwen Work public case library: an atlas of 32 scenarios](/en/qwenwork/ch09-public-case-atlas) to understand the "inputs—evidence—artifact" relationship from similar tasks such as competitive research and business analysis; the atlas is a list of public scenario leads awaiting verification, not customer endorsement.

## Post-Task Check

Randomly spot-check 3 key claims and require the reviewer to open the source, locate the original text, and restate the statistical basis and limitations; if any claim cannot be restated, weaken the conclusion, add evidence, or remove it from the release draft.

## Watch Out

If key numbers have no original text, sources require login but no one owns them, differently defined figures are compared directly, or high-consequence conclusions have no reviewer, keep the raw materials and evidence cards and stop the release; roll back to the last stable version, switch to manual read-only analysis or disclose the conflicts side by side, and continue only after the data or professional owner confirms.

## Further Reading

Continue with this page's [Method or Model](#method-or-model), [Cases and Evidence](#cases-and-evidence), and [Boundaries and Next Steps](#boundaries-and-next-steps), and see the [evidence ledger appendix](/en/qwenwork/appendix-evidence-ledger) and [case source map](/en/qwenwork/appendix-case-source-map) for the release gates.

## Why It Matters

The most dangerous failure of a research report is not insufficient length but polished language that cannot be reviewed: paraphrase written as official fact, numbers on different bases compared directly, expired pages supporting current conclusions, public demos dressed up as customer outcomes.

The question tree decides what evidence is needed, evidence cards preserve each claim's boundaries, and the conflict register stops the team from erasing real differences with averages or majority voting. Together they help business owners judge what decisions the conclusions can support and which questions still need human confirmation.

## Method or Model

Derive the question tree from the decision first:

| Sub-question | Evidence needed | Priority sources | Conclusions that cannot be drawn directly |
|---|---|---|---|
| Has the market changed | Consecutive periods, scale or growth, complete basis | Regulators, statistics, company disclosures | Predicting share from a single news article |
| Do customers have the pain point | Verbatim interviews, tickets, or usage data | Authorized first-party interviews and internal data | Substituting competitor ads for customer needs |
| Is the solution feasible | Product docs, test samples, costs, failure records | Official documentation, controlled pilots, raw records | Inferring stable delivery rates from feature entry points |
| Can the organization adopt it | Permissions, processes, responsibility, professional consequences | Organizational policy, system owners, professional opinions | Substituting AI summaries for compliance judgment |

One evidence card supports only one minimal claim, with fixed fields:

| Field | Required content | Failure signal |
|---|---|---|
| Claim | One verifiable sentence without over-extrapolation | Mixed evaluative words or multiple conclusions |
| Source text | Title, organization, link or location, plus necessary verbatim excerpts | Only search snippets or second-hand paraphrase |
| Source type | `official-product`, `regulatory-statistical`, `first-party-disclosure`, `customer-authorized`, `independent-research`, `public-demo`, `internal-pilot`, or `community-framework` | Not stating who produced the material |
| Date | Publication, access, and necessary collection dates | Cannot judge whether expired |
| Statistical basis | Subject, period, units, sample, denominator, calculation method | Only percentages or "significantly improved" |
| Applicable scope | Regions, subjects, processes, and decisions it can support | Extrapolated by default to all enterprises |
| Limitations | What it cannot support, what is missing, whether independently audited | Conclusions without boundaries |
| Conflicts | Differences with other evidence, possible causes, handling actions | Directly averaging differently defined numbers |
| Status | verified, limited, editor-reviewed, pending, or stale | A vague "credible" instead of a release status |

Use sources by primacy and responsibility boundary: regulatory statistics, formal disclosures, and authorized first-party records take priority for supporting facts; independent research with complete methods can support scope-limited conclusions; media, partner materials, and expert interpretation are supplements; search snippets, reprints, and social media are for finding leads only. Source quantity cannot substitute for quality and basis consistency.

Human-machine collaboration follows a seven-step process:

1. **Frame the question**: clarify the decision the reader must make, the deadline, and the out-of-scope boundaries.
2. **Source plan**: assign priority sources, fallback sources, and stop conditions per sub-question.
3. **Collect and deduplicate**: AI can organize titles, links, dates, and keywords; humans confirm original sources and authorization.
4. **Make evidence cards**: AI can extract structure; humans verify original text, numbers, dates, and qualifiers card by card.
5. **Register conflicts**: compare subject, period, units, definitions, and samples; never mask differences with averages.
6. **Build the argument**: layer verified facts, evidence-based inferences, recommendations, and open questions.
7. **Review and release**: someone not involved in writing spot-checks key claims and checks sensitive information, copyright, and expiry.

The conflict register keeps at least the conflict number, related cards, the difference, possible cause, handling action, owner, and current status. If a conflict cannot be resolved by the deadline, the report should disclose the difference side by side and weaken the conclusion.

Evidence cards are working records inside research tasks and may include unpublished leads and authorized material outside the repository; `evidence-ledger.json` is the release record of the public Blue Book's key claims and holds only content that is safe to publish and passes the release gate. Their duties differ, but source type, status, applicable scope, and limitations must stay consistent between them.

## Cases and Evidence

<span id="claim-demo-boundary-01" data-claim-id="claim-demo-boundary-01"></span>This book argues: a public demo can only prove an observable delivery form; customer identity, implementation cost, production stability, or business outcomes cannot be extrapolated from it.

The web pages, dashboards, and report links in the public case library help readers understand artifact forms. [R11](/en/qwenwork/appendix-sources#r11) Without a case-level external record ID, a deep link, or a snapshot within license, they remain leads awaiting verification and cannot enter the public case count.

Pre-release spot checks prioritize all key claims, all precise numbers, and all high-consequence conclusions; other content is sampled by risk. The checker must be able to open the source, locate the original text, and restate the basis within an acceptable time; otherwise the claim should be downgraded, given more evidence, or removed from the release.

## Enterprise Actions

Build an evidence workbench for an ongoing research task:

1. Have the business owner confirm the decision, the question tree, and the out-of-scope range.
2. Have researchers make evidence cards with the nine fields, not writing conclusions straight from search results.
3. Have the data or professional owner review basis, authorization, and high-consequence interpretations.
4. Set up a conflict register with designated handlers and deadlines.
5. Before release, an independent reviewer spot-checks key claims and syncs the claims used publicly to the release ledger.

Copyable research invocations live in the [prompt appendix](/en/qwenwork/appendix-templates); the appendix only invokes this chapter's fields and does not redefine the evidence card.

Stop signals include: key numbers without original text or basis; sources requiring login with no material owner; differently defined figures compared directly; high-consequence conclusions unreviewed; internal or customer material without public authorization; claim status inconsistent with the body's wording.

## Boundaries and Next Steps

AI can accelerate research organization, but regulatory interpretation, investment judgment, medicine, law, and other high-consequence conclusions must be reviewed by people with the corresponding duty or credentials. Complete evidence cards do not guarantee correct conclusions; they only make errors easier to find and attribute.

This chapter defines the research evidence method; it does not decide which public cases may be released. Cases entering the Blue Book must additionally satisfy independent source location and public counting thresholds.

[Next chapter: The New Delivery Standard](/en/qwenwork/ch01-delivery-standard)
