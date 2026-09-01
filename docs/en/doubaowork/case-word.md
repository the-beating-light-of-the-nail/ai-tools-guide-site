# One Word Document, from Proofreading to Print-Ready Delivery

> Scenario: The writing is done, but the pre-delivery proofreading, polishing, formatting, redaction, and version checks are all manual. Spell out the boundaries first, then let AI take over.

A Word document's most painful moments usually come right before delivery: typos just fixed, and the heading styles break again; page numbers added, then a table spans a page and the layout needs redoing. Proofreading, polishing, formatting, redaction, and version comparison all look like "editing the document," but they touch different things—**spell out the boundaries first, then let Doubao Work act, and the rework shrinks dramatically**.

## One-Click Word Beautification

For documents where **the content is final but the formatting is still on defaults**. The usual problems: unclear heading hierarchy, inconsistent font sizes, cramped paragraphs, missing headers/footers and page numbers. State all these requirements in one pass, and the model can apply a single consistent layout to the whole document:

```text
Please polish the Word report I've uploaded.

Unify the styles for the title, heading 1, heading 2, and body text; adjust the font, font size, line spacing,
spacing before/after paragraphs, and page margins. Add a clean cover page, page numbers, and a header.
Keep the original content unchanged and output a formal business report.
```

In testing, the beautified file gained a cover, header, footer, and unified styles. After the layout is done, still **spot-check the body**: pick a few numbers, tables, and long paragraphs and compare against the original file to confirm the content, order, and meaning are all unchanged.

## Compare Two Versions

When you don't know how far apart two versions are, run a direct comparison and have it deliver **a file with tracked changes + a diff summary**. With many versions, the diff summary beats flipping through files page by page:

```text
Please compare the first draft and the revised draft.

Generate a Word file with tracked changes that clearly marks additions, deletions, and replacements;
also generate a diff summary, categorized as "content changes, number changes, owner changes, date changes."
Don't compare formatting differences only.
```

The diff summary lists number, owner, and date changes separately, so readers can judge the impact first and then go back to the body for context.

## Privacy Redaction

Redaction's two worst failures: **missing one instance**, or **scrubbing so hard the document becomes unusable**. Specify the types of sensitive information, the retention rules, and the delivery purpose; names, phone numbers, emails, ID numbers, and detailed addresses can each get their own masking approach:

```text
Please redact this Word document for privacy.

Replace names with "Mr. X" or "Ms. X"; keep only the first 3 and last 4 digits of phone numbers;
mask the username part of email addresses; keep only the last 4 digits of ID numbers; hide house numbers in detailed addresses.
Keep the document structure and layout unchanged, and output a list of everything that was redacted.
```

The system replaces each category of sensitive information per the rules, keeps the document structure and layout intact, and outputs a redaction list for verification.

> One last gate: before sending it out, **search the full text once more** for phone-number fragments, the `@` symbol, the last four digits of ID numbers, and address keywords—only when the search comes up clean is the redacted file ready to move on.

---

Related scenario: [Work Excel Like a Data Analysis Pro →](/en/doubaowork/case-excel)
