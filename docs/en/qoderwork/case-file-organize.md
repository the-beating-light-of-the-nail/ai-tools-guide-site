---
description: "You open your Downloads folder: thousands of files packed in, and nobody has the energy to deal with it. Then you need one résumé, one photo, one year-end report—and you can't find any of them."
---

# Thousands of Files in Downloads and You Can't Find a Thing? Clean It Up, Archive Your Photos, Ship the Annual Summary

You open your Downloads folder: thousands of files packed in, and nobody has the energy to deal with it. Then you actually need one résumé, one photo, one year-end report—and you're stuck searching. This chapter covers what QoderWork does with file organization: duplicate cleanup, sorting and archiving, photo management, and one admin director's annual-summary run.

> Community material: Chenmo Wang'er's hands-on review ([javabetter.cn](https://javabetter.cn/sidebar/itwanger/ai/qoderwork-review.html)) and the official user-case library. Prompts have been tidied up by this site—copy them as they are.

## Scenario 1: The Downloads Deep Clean

Have it sweep your Downloads and find duplicates, keeping the newest copy:

```text
Scan my Downloads folder, find all duplicate files, and keep the newest
version of each.
```

Field-tested numbers (Chenmo Wang'er, during the beta): moving 2,444 résumé files took **under 6 seconds**; cleaning an oversized Downloads of 10,000+ files took about 300 seconds and produced a report marking each file "duplicate / delete / keep". The AI identifies duplicates by MD5 and groups by time—two orders of magnitude faster than doing it by hand.

One thing you can relax about: it doesn't delete files on its own. It presents a plan and acts only after you authorize it, and deletions go only to the system trash (see the three safety rules in [Working Folders](/en/qoderwork/04-files)).

You dispatch sorting and archiving the same way:

```text
Organize [the folder]: move images to assets/images/, documents (.md/.txt/
.pdf) to docs/, config files (.json/.yaml/.toml) to config/, and code into
src/ subfolders by language.
Present the plan before moving anything, execute only after I confirm;
finish with an organization report (counts + directory tree).
```

An advanced version with renaming rules you can copy too:

```text
Organize the Downloads folder: sort by file type (documents / images /
videos / archives), rename files to "type_date_original-name" format, and
generate a sorting log.
```

## Scenario 2: From Photo Wall to Photo Archive

You have a pile of photos sitting in ~/Pictures/2024 and want them ordered by when they were taken. Here's the official scenario prompt:

```text
Organize the ~/Pictures/2024 directory:
1. Read each photo's EXIF capture time
2. Build a year-month folder hierarchy (2024-01/, 2024-02/, ...)
3. Move and rename files by capture time to "date_sequence.jpg"
4. Generate a CSV manifest (original filename, new path, capture time)
Show me the plan first; only touch the files after I confirm.
```

## Scenario 3: The Admin Director's Annual Summary (Official User Case)

Li Jie is admin director at a 300-person tech company. Every year she consolidates year-end reports from 8 departments—50+ Word/PDF files on her desktop, "at least two days every year". Here's how she does it now:

1. Create a folder "2024 Annual Summary Materials" and rename all 12 files consistently (department-year-filetype);
2. Designate it as the [working folder](/en/qoderwork/04-files);
3. Issue one structured instruction:

```text
Using 2023 Annual Summary.docx as the format template, consolidate the
department reports:
Extract each department's achievements and performance data, combine them
with financial and operating metrics, organize everything under four
sections—"Business Overview / Business Lines / Team Building / Plans &
Outlook"—follow the writing style of previous years' summaries, keep the
template layout, and output a Word file to the output/ directory.
```

What she got: **two days compressed into 6 minutes**, with 100% of the key performance data retained. After that, dropping new files into the same folder and saying "new data added, please update the report" is all an incremental update takes.

## Playbook Summary

| Scenario | Core prompt structure | Key constraint |
| --- | --- | --- |
| Duplicate cleanup | Scan → keep newest → generate list | Plan before executing |
| Sorting and archiving | Sorting rules + naming rules + report | Plan before moving |
| Photo management | EXIF → tiered folders → rename → manifest | Plan before touching files |
| Periodic consolidation | Template file + section structure + style reference | Data must be traceable |

Four safety baselines worth committing to memory:

1. Always "plan first, execute second"—review the list before green-lighting;
2. Back up before bulk operations (or confirm the trash mechanism works);
3. Keep authorization minimal—grant only the folders needed;
4. Spot-check after execution: the file count must balance (originals = moved + kept + pending).

## FAQ

**Will it delete something of mine by mistake while removing duplicates?**
It won't delete anything unprompted. It presents the plan and waits for your confirmation, and deletions only go to the system trash—you can get them back.

**Can I stop it from moving my photos before I've checked the plan?**
Add "show me the plan first; only touch the files after I confirm" to the instruction, and it won't move anything until you say yes.

**Will the annual summary drop any performance data?**
In the case study, 100% was retained—but open the output and check a few figures yourself, especially the financial ones.

**How do I avoid rewriting the whole instruction next time?**
Freeze the rules into a Skill. After that, one phrase triggers the whole thing instead of another long prompt.

---

Next: [Data Analysis and Research Reports →](/en/qoderwork/case-data-report)
