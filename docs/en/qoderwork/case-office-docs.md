# Case: Bulk Document Processing and Multimedia

Résumé screening, foreign-trade spec sheets, receipt archiving, audio/video processing—document work with "clear rules, high volume, and easy mistakes" is home turf for AI in the office.

> Sources: the CSDN hands-on guide, the official user-case library, and community field tests (noted inline).

## Scenario 1: Screening 115 Résumés (CSDN Field Test)

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

Field test: done in about **1.5 minutes**, with sample output like "fit score 8, IELTS 6.5, 3 months of Instagram account experience". Note: the fit score is a reference—don't skip the human review before final interviews.

## Scenario 2: Structuring Foreign-Trade Tech Packs (Official User Case)

An apparel merchandiser handles 20+ page English PDFs per order—30+ points of measure (POM), tolerance tables, and fractional inch values (1/2", 3/4") across 7 sizes. By hand it took 2-3 hours per order, and one misread half-inch once caused a whole-batch rework with losses over 200,000 RMB. Her approach: create a folder per order, "Order-2024SS-ClientABC", and set it as the working folder:

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

Result: **2-3 hours per pack → 3 packs in 10 minutes, 100% accuracy**. Reuse is one sentence: "Two new Style Tech Packs arrived—process them in the same format as before." That's the power of continuous reuse with a [working folder](/en/qoderwork/04-files).

## Scenario 3: Archiving Receipt Photos (Official User Case)

The pain: receipt photos all have random-string filenames. Four-step instruction:

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

OCR + classification + renaming in one pass.

## Scenario 4: Three Multimedia Moves

**Audio to bilingual subtitles** (CSDN): upload an MP3 →

```text
Generate an SRT subtitle file with 1-second timeline accuracy, and also
output a three-column Word document of "timestamp + Chinese + English";
save both to the "meeting notes" folder.
```

The SRT imports straight into CapCut/Jianying.

**Bulk video-to-GIF** (Chenmo Wang'er's field test):

```text
Convert all videos in the folder to GIFs, keep each under 10M, set playback
to 2x speed, and note each GIF's original duration, generation time, and
intended use.
```

All GIFs came in under 10M with annotations—replacing a half-hour manual loop of "screen-record → edit → export → re-tune frame rate".

**PPT to video** (Xu Jingfeng's field test):

```text
@[presentation.pptx] Open it, go through every slide, and turn it into a
short video—keep the duration as short as possible.
```

Page-turn recording, subtitles, and voiceover were assembled automatically.

## Playbook Summary

| Shared traits | Design points |
| --- | --- |
| Clear rules (fixed fields/formats) | Write the field list and format into the instruction |
| High volume | Folder batching + template files |
| Error-prone (units/precision/naming) | Call out critical constraints separately ("fractional units directly affect quality") |
| Needs reuse | Solidify into a Skill once it runs; trigger with one phrase |

One universal acceptance rule: **before handing a deliverable to anyone, go through it yourself end to end**—spot-check three files' fields, play a GIF, check the Excel formulas.
