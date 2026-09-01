# Duplicate Files and Conflicting Versions: Check the Differences Before Deciding

> Scenario: a friend sends over a whole folder to clean up—5 subfolders, 9 Word documents, 3 groups of which have nearly identical names. Deduplicate by filename? Files with the same or similar names aren't necessarily the same content—some are versions left over from different stages.

Agree on the ground rule first: **this round only analyzes and recommends; nothing gets deleted**. Once each group's relationship is clear, the file owner decides what to archive, rename, or keep.

## Step 1: List the Files, Then Use Fingerprints to Find True Duplicates

Start by scanning the folder and listing all 9 documents' names, sizes, and paths. Three files are all named "2026 Self-Media Commerce Compliance Panorama Handbook" and two are both named "Viral Copy Bank and Golden Opening Lines for Self-Media"—going by filename alone, both groups would be flagged as duplicates:

```text
Check which files in this folder are true duplicates and which merely have
similar names.
First see whether the content is exactly identical, then show me where the
similar-named but different files diverge.
```

A "file fingerprint" is a **hash** computed from the file's data: identical hashes mean byte-for-byte identical; different hashes only mean the file changed, and the content still needs comparing. Field-test results:

- The 3 "Compliance Handbook" copies have identical hashes—3 copies of the same file;
- The 2 "Copy Bank" files hash differently—content needs review;
- The 2 "Aurora Repair Serum Review Scripts" hash differently—version differences need confirming.

At this point only the first group is confirmed as exact duplicates. **Thank goodness we didn't clean up by filename from the start.**

## Step 2: Different Fingerprints—See Where the Content Diverges

Have Doubao Work read the two groups with different hashes, comparing topic, structure, and key passages to determine whether they're two different documents or different versions of the same content:

- **The two "Copy Bank" files target different platforms**: one covers Douyin spoken-word scripts (openings, pacing, presenter delivery), the other Xiaohongshu image-and-text posts (titles, covers, layout, imagery)—different content and purpose, so both stay; just rename them to tell the scenarios apart;
- **The two "Review Scripts" are versions from different stages**: the blogger's spoken version works on camera but ends with a note "missing test report and purity statement, needs merging with the brand version"; the brand's compliance-annotated version carries legal requirements, testing credentials, pricing mechanics, and a launch date, in more formal language—keep the spoken version's delivery style and let the annotated version supply the compliance details. **Neither is the final deliverable; keeping both is the safest call.**

Also check sharing and references: here everything is local with no external links. But that's only the current scope—when files come from a shared drive, a project system, or a collaboration space, confirm with the actual users before moving anything.

## Step 3: Handle by Difference, in Four Categories

| Category | How to tell | What to do |
| --- | --- | --- |
| Identical content | Same hash | Keep one official copy (owner confirms); move the rest to a recoverable archive |
| Staged versions of one project | Complementary content, marked "to merge" | Keep both, label "to merge"; decide once the final version exists |
| Same name, different content | Different platforms/purposes | Keep both; rename to distinguish (e.g. "Douyin spoken version" / "Xiaohongshu image-text version") |
| No duplicate | Only one copy | Leave as is |

## Step 4: Dry-Run List First, Confirm, Then Act

Have Doubao Work generate a **dry-run list** without moving or renaming anything, itemizing each proposed action and its reasoning; dispute anything directly, and execute only after everything is confirmed:

```text
Turn the analysis above into a list stating how each file will be handled
and why.
Once confirmed, only move and archive—no direct deletion.
Record the original location of every moved file so it can be restored
later.
```

Use a **recoverable archiving approach**: a "00_dedup-archive-recoverable" folder holds the confirmed duplicate copies, with no permanent deletion; every moved file gets its original path, archive path, size, and modification time recorded—no relying on memory to restore things later.

## Outcome

Of the 9 documents, 2 exact-duplicate copies moved into the recoverable archive and 7 stayed, with zero permanent deletions throughout: 1 of the 3 compliance handbooks kept; both review scripts kept and marked "to merge"; both copy banks kept with renaming suggestions pending confirmation; the Q2 review report and Q3 investor deck untouched.

Next time you clean a folder, first separate the three cases—**exact duplicates, staged versions, and same-name-different-content**. Only byte-identical copies belong on the archive list. One extra comparison step saves a lot of pain after a wrong deletion.

---

Next: [Wrapping Up a Project: Archiving Files, Decisions, and Deliverables Together →](/en/doubaowork/case-project-archive)
