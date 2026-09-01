# Case: File Organization and Photo Management

File organization is QoderWork's "first lesson" and the most direct way to feel that "the AI actually finished the job". This chapter combines official scenarios, user cases, and community field tests.

> Community material: Chenmo Wang'er's hands-on review ([javabetter.cn](https://javabetter.cn/sidebar/itwanger/ai/qoderwork-review.html)) and the official user-case library. Prompts have been edited by this site.

## Scenario 1: The Downloads Deep Clean

**Duplicate cleanup** (official example prompt):

```text
Scan my Downloads folder, find all duplicate files, and keep the newest
version of each.
```

Field-tested numbers (Chenmo Wang'er, during the beta): moving 2,444 résumé files took **under 6 seconds**; cleaning an oversized Downloads of 10,000+ files took about 300 seconds and produced a report marking each file "duplicate / delete / keep". The AI identifies duplicates via MD5 and groups by time—two orders of magnitude faster than doing it by hand.

Safety design: the tool **never deletes files on its own**—it presents a plan and acts only after you authorize it; deletions go only to the system trash (see the three safety rules in [Working Folders](/en/qoderwork/04-files)).

**Sorting and archiving** (official scenario):

```text
Organize [the folder]: move images to assets/images/, documents (.md/.txt/
.pdf) to docs/, config files (.json/.yaml/.toml) to config/, and code into
src/ subfolders by language.
Present the plan before moving anything, execute only after I confirm;
finish with an organization report (counts + directory tree).
```

An advanced version with renaming rules:

```text
Organize the Downloads folder: sort by file type (documents / images /
videos / archives), rename files to "type_date_original-name" format, and
generate a sorting log.
```

## Scenario 2: From Photo Wall to Photo Archive

Official scenario (photo management):

```text
Organize the ~/Pictures/2024 directory:
1. Read each photo's EXIF capture time
2. Build a year-month folder hierarchy (2024-01/, 2024-02/, ...)
3. Move and rename files by capture time to "date_sequence.jpg"
4. Generate a CSV manifest (original filename, new path, capture time)
Show me the plan first; only touch the files after I confirm.
```

## Scenario 3: The Admin Director's Annual Summary (Official User Case)

Li Jie, admin director at a 300-person tech company, consolidates 8 departments' year-end reports every year—50+ Word/PDF files on her desktop, "at least two days every year". Her approach:

1. Create a folder "2024 Annual Summary Materials" and rename all 12 files consistently (department-year-filetype);
2. Designate it as the [working folder](/en/qoderwork/04-files);
3. One structured instruction:

```text
Using 2023 Annual Summary.docx as the format template, consolidate the
department reports:
Extract each department's achievements and performance data, combine them
with financial and operating metrics, organize everything under four
sections—"Business Overview / Business Lines / Team Building / Plans &
Outlook"—follow the writing style of previous years' summaries, keep the
template layout, and output a Word file to the output/ directory.
```

Result: **two days → 6 minutes**, with 100% of the key performance data retained. Later, dropping new files into the same folder and saying "new data added, please update the report" is all an incremental update takes.

## Playbook Summary

| Scenario | Core prompt structure | Key constraint |
| --- | --- | --- |
| Duplicate cleanup | Scan → keep newest → generate list | Plan before executing |
| Sorting and archiving | Sorting rules + naming rules + report | Plan before moving |
| Photo management | EXIF → tiered folders → rename → manifest | Plan before touching files |
| Periodic consolidation | Template file + section structure + style reference | Data must be traceable |

Four safety baselines:

1. Always "plan first, execute second"—review the list before green-lighting;
2. Back up before bulk operations (or confirm the trash mechanism works);
3. Keep authorization minimal—grant only the folders needed;
4. Spot-check after execution: the file count must balance (originals = moved + kept + pending).

---

Next: [Data Analysis and Research Reports →](/en/qoderwork/case-data-report)
