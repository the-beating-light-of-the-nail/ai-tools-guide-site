# From Casual Bookmarks to Things You Can Actually Find Later

> Scenario: you've saved a lot of bookmarks, but when you actually need one, you can never find it. One-line sparks of inspiration made sense at the time—a few days later you can't recall why you noted them or what you were planning to do with them.

These are two independent tasks—use whichever one you hit. You don't need to clean out your entire bookmark collection just to organize a single idea:

| Independent task | When to use | Main deliverable |
| --- | --- | --- |
| Lots of bookmarks, can't find them when needed | Grant read-only access to your knowledge base, bookmarks, and document folders; take inventory first, then organize | A searchable catalog, plus an archive-or-delete recommendation list |
| An idea noted in a single line | Hand the fragment notes, voice memo, or screenshot straight to Doubao Work; have it ask follow-up questions when information is lacking | A note draft, written into the knowledge base only after your confirmation |

## Lots of Bookmarks, but Can't Find Them When It Matters

Organizing can't stop at re-categorizing and reshuffling folders—you also need to **fill in the information required for retrieval and judgment**: when the same knowledge exists in copies across several tools, it's unclear which is the master version; grouping by file type or personal habit may not match how you'll actually search later; many bookmarks lack a summary, keywords, and applicable scenarios; and without clear operational boundaries up front, automated cleanup could even delete or move the original files by mistake.

```text
Organize these bookmarks and materials so that I can find them later by the real problems they solve.
First identify, for each piece of content: what problem it solves, what scenarios it applies to, its credibility,
its time sensitivity, and its original source.
Merge duplicate bookmarks; list separately anything that is link-only and inaccessible, outdated,
or has no stated purpose.
Generate short summaries, keywords, and related topics based on "how I will search for this later,"
not just file-type categories.
Output a searchable catalog and an archive-or-delete recommendation list; do not move or delete
the original content without my confirmation.
```

With the knowledge base path set as the working directory, this prompt can be **executed step by step in five stages**, each with its own output:

1. "Organize these bookmarks and materials..." → scan and map the directory, show how materials relate, and generate an index structure organized by real problems;
2. "First identify what each piece solves..." → analyze item by item, summarize core conclusions, and produce a "credibility × time sensitivity" heatmap and a materials metadata table;
3. "Merge duplicate bookmarks..." → consolidate duplicates without touching the original files; list items pending confirmation separately;
4. "Generate summaries based on 'how I'll search later'..." → produce a retrieval map, retrieval table, and summary table;
5. "Output a searchable catalog, archive/delete list..." → compile everything into a searchable catalog, a materials distribution map, and a disposition recommendation list—**all archiving and deleting is presented as suggestions only; originals are untouched before confirmation**.

Final confirmation: whether to move, archive, or delete is decided by a human in the end; before any formal action, double-check that versions, sources, and categories weren't misjudged.

## An Idea Noted in One Line—How to Turn It into a Findable Note

Keep the original sentence, then add the necessary context, title, summary, keywords, and related content. When the original record is too sparse, the biggest risk of an organizing tool is that it **completes the meaning for you**—the final note looks complete but has drifted from what you actually meant at the time:

```text
Turn this fragment of an idea into a note I can understand and reuse later.
Keep the original content and the time it was recorded, then add: what situation it came from, what question it triggered,
which projects or topics it might relate to, and what the next step could be.
If the original sentence's meaning is unclear, ask me at most 3 key questions; don't invent what I was thinking.
Generate a searchable title, a short summary, keywords, and related-note suggestions.
Output a note draft; I'll confirm before it goes into the knowledge base.
```

In testing, this turned 6 idea fragments from an inbox into reusable notes: it first verified the original content and timestamps, then added situation / triggering question / related projects / next action. The line "ask at most 3 key questions" removes speculative content from the notes, with unclear parts marked "to confirm." It then added a retrieval card (searchable title + summary + keywords + related-note suggestions) so the note can be found in full-library searches later; finally it produced a draft for review, written into the knowledge base only after confirmation.

Acceptance habits: spot-check one or two conclusions by going back to the original file or record; check that numbers, dates, versions, and names aren't wrong; **whenever the result affects other people, money, permissions, compliance, or production systems, keep it as a draft first**.

---

Next: [Duplicate Files and Conflicting Versions: Check the Differences Before Deciding →](/en/doubaowork/case-duplicate-files)
