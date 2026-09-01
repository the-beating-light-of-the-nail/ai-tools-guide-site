# Studying a Company Means Studying Its Shareholders, Management, and Governance Too

> Scenario: business and financials get studied first, while shareholder sell-downs, buybacks, equity incentives, related-party transactions, and management changes scatter across dozens of announcements. These can't be judged by personality labels—whether a shareholder is a "long-termist" or a buyback signals "confidence in the company" must come down to specific dates, quantities, prices, procedures, and follow-through.

This chapter uses Gree Electric to build a governance event timeline, rewriting **personality impressions into event questions you can check against announcements, dates, and execution results**. What's left at the end isn't a management portrait but a governance timeline and a set of relationships still awaiting verification. The tool is the "Announcement Analysis" skill, with the explicit rule that **business-registry data may only supplement relationships, never replace exchange and company announcements**.

## Rewriting Governance Questions as Event Questions

```text
Research Gree Electric's (000651) ownership, management, and corporate
governance as of the fixed data date.

From exchange announcements and statutory company disclosures, sort out
control relationships, the top-ten shareholders, board and executive
changes, equity incentives, employee stock ownership, buybacks, share
increases and reductions, related-party transactions, and major capital
allocation events.
Use business-registry data only to supplement relationships, not to
replace statutory disclosures.

Arrange the past three years of events into a timeline by date. For each
event, state the announcement date, parties involved, quantity or amount,
actual progress, possible impact, and the original link. Mark impact as
your analysis where applicable; do not infer personal motives from
announcement facts.

Finally output a text version of the governance relationship map, evidence
of interest alignment, evidence of potential conflicts, and a list of
announcements to track over the next twelve months.
```

The prompt assigns every event six fields: **date** (when it happened), **parties** (who was involved), **quantity or amount** (the scale), **actual progress** (plan versus completion), **possible impact** (must be marked as analysis), and **original link** (back to statutory disclosure). Governed this way, the material keeps accepting additions instead of losing its use after one reading.

## A Timeline Beats Personality Labels

In the generated three-year event line, whether buybacks completed, how employee stock ownership was arranged, when shareholder reductions happened, and which party proposed a related-party transaction all land in the same structure. That's more reliable than writing "management cares about shareholder returns": buyback amounts, cancellation or holding arrangements, execution progress, and announcement dates are all checkable; employee stock plans and incentives need scrutiny of unlock conditions, funding sources, and coverage. **The events themselves are facts; their effect on governance is still analysis.**

One practical detail: the same event may be disclosed in multiple announcements (initial plan, progress announcement, completion announcement). They should be linked to **one event ID**, not counted as three things—Doubao Work can help deduplicate, but a human should confirm the key fields really point to the same matter.

## Three Rounds Converge into a Complete File

**Round 1 · Statutory-disclosure final review**: re-verify every event category, filling in announcement date, parties, quantities, progress, original links, and status as of the cutoff; registry or media material serves only as leads; motives, interest alignment, and potential conflicts must sit in clearly marked analysis columns, never written as announcement facts.

**Round 2 · Generate the full structure**: with the data cutoff fixed (to the minute), generate an eleven-part file from cninfo announcements actually opened—a text control-relationship map, top-ten shareholder changes, board and executive changes, incentives/holdings/buybacks/increases/reductions, related-party transactions and capital allocation, a three-year timeline, evidence of interest alignment, evidence of potential conflicts, a twelve-month tracking table, a source-verification table, and an item-by-item checklist. **Items that didn't happen, weren't statutorily disclosed, or couldn't be obtained must each be written up as explicit open items, not omitted**; delete every causal claim unproven by announcements (e.g. attributing a change in related-party transaction amounts to a director's departure).

**Round 3 · Read-back acceptance**: no new writing—reopen the file and confirm item by item: correct filename, correct cutoff, all eleven parts present, open items explained, analysis separated from facts, counts internally consistent, previous file not overwritten; if anything fails, regenerate and read back again.

## Keep Unconfirmed Relationships in the Open-Items Zone

Governance research most easily turns into a story about personalities. Open the timeline and look only at events, dates, decision procedures, and original announcements—**don't write dialogue for people's motives**: first verify the formal identities of shareholders, the board, and management, using statutory disclosures rather than media shorthand; then order events by date—the same person appearing in several announcements doesn't mean causation is established between those events; finally examine conflicts of interest, related relationships, and voting procedures, writing unannounced relationships as "to be verified" instead of filling the gap with common sense.

Governance research watches **how promises land as events**: buyback plans, actual execution, reduction plans, incentive conditions, and related-party transactions laid back onto the same timeline. People can state positions; announcements keep the facts. What's worth tracking is whether promises were kept, whether incentive conditions changed, and whether interests were fully disclosed. The real danger in governance research isn't blank space—it's replacing statutory disclosure with personality judgment.

---

Next: [What Is the Market Actually Arguing About: from Bull-Bear Divide to Research-Report Fact Audits →](/en/doubaowork/case-bull-bear-audit)
