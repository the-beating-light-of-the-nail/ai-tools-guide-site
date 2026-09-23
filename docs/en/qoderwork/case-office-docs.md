---
description: "Résumé screening, foreign-trade spec sheets, receipt archiving, audio and video processing—work with clear rules, high volume, and easy mistakes is where AI belongs in the office."
---

# Buried in Résumés, Spec Sheets, Receipts, and Subtitles? Write the Rules Once and Let It Run the Batch

Your day disappears into work like this: 115 résumés to screen, dozens of pages of English spec sheets to translate, a camera roll of receipts to file, a meeting recording that still needs subtitles. What they have in common is clear rules, high volume, and easy mistakes. That combination is exactly QoderWork's home turf: you write the rules down and it runs the whole batch in one pass.

> Sources: the CSDN hands-on guide, the official user-case library, and community field tests (noted inline). Copy them as they are and they'll work.

## Scenario 1: Screening 115 Résumés (CSDN Field Test)

You hand it a folder of 115 Word résumés, attach the JD requirements, and it screens them itself:

```text
Go through all 115 Word résumés in [the résumé folder] and screen against
this JD:
- CET-6 English or IELTS 6.0+
- Experience running Xiaohongshu (RED) or Instagram accounts
- Familiar with overseas social media algorithms
Move qualified candidates to the "qualified-overseas-ops" folder;
output an Excel with: name, contact, English level, ops experience, fit
score (1-10), and recommendation reason.
```

Field test: done in about **1.5 minutes**, with sample output like "fit score 8, IELTS 6.5, 3 months of Instagram account experience". One thing to keep in mind: the fit score is only a reference—the human check before a final interview doesn't go away.

## Scenario 2: Structuring Foreign-Trade Tech Packs (Official User Case)

A merchandiser handles 20+ page English PDFs per order—30+ points of measure (POM), tolerance tables, and fractional inch values (1/2", 3/4") across 7 sizes. By hand it took 2-3 hours per order, and one misread half-inch once caused a whole-batch rework with losses over 200,000 RMB. You create a folder per order, "Order-2024SS-ClientABC", set it as the working folder, and then instruct:

```text
Extract the points of measure from each Tech Pack and translate them into
Chinese:
Structure: measurement position | English name | Chinese name | tolerance
(+/-);
one row of values per size; keep fractional values at their original
precision (1/2", 3/4").
Pay special attention to the accuracy of fractional units—this directly
affects production quality.
```

Result: **2-3 hours per pack → 3 packs in 10 minutes, 100% accuracy**. Reuse after that is one sentence: "Two new Style Tech Packs arrived—process them in the same format as before." That's the power of continuous reuse with a [working folder](/en/qoderwork/04-files).

## Scenario 3: Archiving Receipt Photos (Official User Case)

You've photographed a pile of receipts and every filename is a random string. Four instructions sort it out:

```text
Recognize the spending date, amount, merchant, and category (meals /
transport / lodging / other) for each photo in [the receipts folder]:
1. Rename to "date-category-amount-merchant.jpg" (e.g.
   20260301-meals-128RMB-somerestaurant.jpg)
2. Archive into subfolders by category
3. Generate an Excel expense summary (date / category / amount / merchant /
   notes)
Show a preview of the recognized results first; rename only after I
confirm.
```

OCR + classification + renaming in one pass, and it shows you the results before renaming anything.

## Scenario 4: Three Multimedia Moves

Audio and video work goes through the same way.

**Audio to bilingual subtitles** (CSDN): you upload an MP3 →

```text
Generate an SRT subtitle file with 1-second timeline accuracy, and also
output a three-column Word document of "timestamp + Chinese + English";
save both to the "meeting notes" folder.
```

The SRT imports straight into CapCut/Jianying.

**Bulk video-to-GIF** (Chenmo Wang'er's field test):

You want long videos compressed into GIFs—this one line is enough.

```text
Convert all videos in the folder to GIFs, keep each under 10M, set playback
to 2x speed, and note each GIF's original duration, generation time, and
intended use.
```

Everything landed under 10M with annotations attached, replacing a half-hour manual loop of "screen-record → edit → export → re-tune frame rate".

**PPT to video** (Xu Jingfeng's field test):

```text
@[presentation.pptx] Open it, go through every slide, and turn it into a
short video—keep the duration as short as possible.
```

Page-turn recording, subtitles, and voiceover were assembled automatically.

## Playbook Summary

Line these scenarios up and the pattern is clear.

| Shared traits | Design points |
| --- | --- |
| Clear rules (fixed fields/formats) | Write the field list and format into the instruction |
| High volume | Folder batching + template files |
| Error-prone (units/precision/naming) | Call out critical constraints separately ("fractional units directly affect quality") |
| Needs reuse | Solidify into a Skill once it runs; trigger with one phrase |

Before you deliver anything, go through it yourself end to end—spot-check three files' fields, open a GIF to see it plays, check the Excel formulas. That acceptance pass is the one thing nobody can do for you.

## FAQ

**Can I hire off the fit score alone?**
No. It's an initial screen: it narrows 115 résumés down to the people worth reading. The final-interview call is still yours.

**Will fractional units in trade documents get mangled?**
Not if you write "fractional precision directly affects production quality" into the instruction. It preserves 1/2" and 3/4" as-is and won't convert them on its own.

**Can I see the results before it renames my receipts?**
Yes. Add "show a preview of the recognized results first; rename only after I confirm" and it won't touch the files prematurely.

**Once a flow runs reliably, how do I stop repeating myself?**
Solidify it into a Skill. From then on one phrase triggers it, instead of rewriting that long instruction every time.
