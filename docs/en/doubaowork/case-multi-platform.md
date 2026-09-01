# Same Content, Reworked into a Native Version for Each Platform

> Scenario: You've just finished a WeChat Official Account article when your boss says "post it on Xiaohongshu too," then adds, "and while you're at it, do Zhihu and Channels." It sounds like copy-paste, but it actually eats hours: the Official Account piece needs to explain things thoroughly, Xiaohongshu needs an instantly scannable image, Zhihu cares about "why," and Channels has to deliver the conflict in under a minute.

This pipeline is four consecutive tasks: **Xiaohongshu cards → split into a week of content → native drafts for four platforms → pre-publish review**:

```text
one shared fact pack
→ first judge each platform's characteristics
→ then specify the deliverable format per platform
→ generate drafts
→ open the output and check it section by section
→ unified review before publishing
```

Tool-wise you only need two Skills: **Multi-Platform Rewrite & Distribution** (adapts the same content to each platform's structure and tone) and **Marketing Material Review** (checks dates, numbers, links, sources, privacy, and absolute claims all at once). No connectors or expert teams this time—the dedicated Skills cover the whole job. **More tools doesn't mean more professional; the longer the chain, the more easily the factual boundaries get lost somewhere in the middle.**

## Task 1: Xiaohongshu Cards—Not Just a Long Article Cut into Nine Images

The only material given is 5 verified facts, with an explicit ban on inventing personal experiences, view counts, revenue, or customer stories:

```text
Use the "Multi-Platform Rewrite & Distribution" capability to redesign the verified fact pack above into an illustrated note
that Xiaohongshu users will actually read and save. Don't just cut the long official-account article into nine pieces.

[Material] Paste your verified fact pack here, or upload the fact-pack file.

The readers are office workers and content-operations beginners using AI work tools for the first time.

Delivery requirements:
1. Start with 3 candidate Xiaohongshu titles—no exaggeration or made-up benefits;
2. Output 8 cards: 1 cover, 6 body cards, 1 closing interaction card;
3. Each card carries only one information job, and body text stays within a phone screen's readable range;
4. For each card, give "on-card copy + image / layout suggestions";
5. Also provide a Xiaohongshu caption under 300 words plus no more than 8 hashtags;
6. End with a separate "pre-publish manual review checklist";
7. Do not fabricate personal experiences, view counts, revenue, customer cases, or platform rules.
```

When it runs, it works through "extract master draft → platform strategy → card structure"—that intermediate process is worth watching, because it tells you whether the AI is genuinely adapting to the platform or just swapping in a few casual words. The final 8 cards each carry one information job: cover states the value → pain point → explain the fact pack → separate facts from judgment → AI's limits → the full workflow → common pitfalls → save-and-comment prompt, plus a ~250-word caption, 8 hashtags, and an 8-item manual review checklist.

> A handy quality bar: **every card should be able to answer one question**. Cutting a long article into equal-length pieces is not platform adaptation.

## Task 2: Break One Long Piece into Short Pieces That Stand Alone

Still using **Multi-Platform Rewrite & Distribution**, but the goal shifts from "adapt to one platform" to "split one master theme into 7 independent entry points." The prompt spells out 7 formats, and the key line is: **each piece must stand on its own, away from the original**:

```text
Use the "Multi-Platform Rewrite & Distribution" capability to split this confirmed long-form piece into 7 days of short content, each publishable on its own.

[Material] Paste the long-form content to split here, or upload the file.

Formats in order: Xiaohongshu image note, WeChat Moments short post, Q&A, 60-second voiceover script, community discussion, checklist card, retrospective post.

Each day must include an independent theme, the fitting format, target reader, core point, complete draft, and a natural entry point back to the long piece.
Every piece must stand on its own without the original—don't write it as a part-1/2/3 series, don't repeat the same passage,
and don't add any data, cases, or performance promises beyond the original.

Finish with a "one-week content reuse checklist." Generate drafts only—no auto-scheduling, no publishing.
```

It first assigns each day an independent theme, target reader, and core point, then drafts in full—rather than writing one long piece and dividing it by word count. The 7 days each play a different role (pain-point opener → the four elements of a fact pack → AI's limits → a 60-second three-step method → community discussion → a checklist → a weekly retrospective), plus a 30-plus-item reuse checklist.

## Task 3: True One-to-Many Publishing—Native Versions for Four Platforms

Platform names are only the starting point; you also need to spell out **what exactly each platform gets**, and require a line after each version noting "what was kept, what was cut, and why"—forcing the AI to articulate its rewriting logic so an editor can check it:

```text
Use the "Multi-Platform Rewrite & Distribution" capability to rewrite the shared fact pack into a native version for each of four platforms,
and give the platform strategy table first.

[Material] Paste your shared fact pack here, or upload the fact-pack file.

Deliverables:
- WeChat Official Account: ~800 words, fully explaining the three-step method, AI's limits, and action recommendations;
- Xiaohongshu: a 6-card outline + ~250-word caption, optimized for saves and the review checklist;
- Zhihu: ~900 words, opening with a question, with counterexamples, argumentation, and a controversial close;
- WeChat Channels: a 60-second voiceover script—conflict opening, three-step skeleton, one-sentence conclusion, with attention to spoken rhythm.

The four versions may draw only on the shared fact pack. You may change the angle, order, structure, and tone,
but not the facts, dates, or constraints. After each version, note "facts kept / information removed / why it changed."
Finish with a manual review checklist for the four platforms. Generate drafts only—don't schedule any publishing.
```

When executing, it builds a **platform strategy table** first (Official Account favors complete steps, Xiaohongshu favors save-worthy actions, Zhihu favors argumentation, Channels favors spoken rhythm), then generates the four drafts separately.

> Don't treat "task complete" as acceptance: the results land in documents, and you must reopen them and check section by section; if the deliverable is a spreadsheet, slide deck, or file, check that actual artifact.

## Task 4: Before Publishing, Sweep Dates, Links, and Sensitive Claims

Finally, switch to **Marketing Material Review**. To see whether it genuinely catches problems, the test deliberately used a "dirty" draft: two conflicting dates in the body; promises like "10 minutes," "the whole internet," "guaranteed," "no humans needed," "99%," "10x views"; an invalid `.invalid` link; unsourced images, data with no source, and a test phone number.

```text
Use the "Marketing Material Review" capability to run a read-only pre-publish review of the test draft below—don't auto-fix anything and don't publish.

[Material] Paste or upload the draft to review here.

Check item by item: does the title match the body; do the two dates conflict; does every number and performance promise have a source;
do the links open; are quotations and image credits clear; is any private information included;
does it contain absolute or unprovable phrasing such as "10 minutes," "the whole internet," "guaranteed,"
"no humans needed," "99%," "1,000 companies," "viral hit," "10x views"?

Sort the problems into "must fix," "suggest optimizing," and "needs business confirmation"; for each, give the location, original text, risk reason,
and suggested fix; end with a checkable pre-publish checklist. Mark any latest platform rule you can't confirm as needing manual verification.
```

It actually checked the links, grounded each finding on absolute wording, data sources, copyright, and privacy—far more than a spell-check. The final report flagged 10 must-fix items, 4 suggested optimizations, and 5 items needing business confirmation—the date conflict, broken link, absolute claims, effect promises, unsourced data, unclear copyright, and the phone number were all caught, and it separated "rules confirmed to apply" from "platform rules still needing verification."

## Remember This Prompt Formula

To adapt one piece of content to any platform, a prompt should state at least five things:

1. **The shared fact pack**: which facts are confirmed, and their sources, timing, and constraints;
2. **Target reader**: who this piece is actually for;
3. **Platform delivery format**: not just the platform name—give word counts, card counts, voiceover length, and structure;
4. **What may change vs. what may not**: angle, order, and tone can change; facts, numbers, and evidence boundaries cannot;
5. **Manual review and publishing boundary**: drafts only; before publishing, check dates, numbers, links, quotes, copyright, and sensitive claims.

Run the checklist once more before publishing: do all four platforms use the same fact pack; did any number, time, or condition get mangled during adaptation; does the structure match how people actually read there; do links open and do quoted images have sources; is there any absolute claim, false promise, privacy, or copyright risk; and **has the final deliverable been reopened and accepted**?

What one-to-many publishing really saves you is re-deciding "how should I adapt this" at every platform: the fact pack guards what stays unchanged, platform strategy decides what changes, and a unified review catches the risk at the end.

---

Next: [From Long Article to Filmable Voiceover Script and Storyboard →](/en/doubaowork/case-script-storyboard)
