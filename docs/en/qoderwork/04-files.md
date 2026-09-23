---
description: "With chat AI you've had to drag each file into the dialog by hand, then download the result by hand. And that folder on your drive overflowing with reports? It can't reach it at all."
---

# How Do You Let the AI Read Files on Your Computer? Authorize One Folder and It Digs In Itself

With chat AI you've had to drag each file into the dialog by hand, then download the result by hand. And that folder on your drive overflowing with reports? It can't reach it at all. This is the biggest dividing line between QoderWork and "chat-style AI": you authorize a local directory and it **reads and writes files on your computer directly**, with none of that upload-and-download hassle. In the official words: "Organizing your folders sensibly and designating them as working folders is the key move to get the most out of QoderWork."

## How to Set It Up

Hand over a folder in these four steps:

1. Click + to create a task;
2. Below the input box, click "Work in Folder" (labeled "Select Working Directory" in some versions);
3. Pick the target folder in the system file picker;
4. Type your request—the AI reads the folder contents automatically.

**Hard limit: one task can be tied to exactly one working folder**; to work with different folders, create separate tasks.

## When to Use a Folder

Not sure whether a working folder is warranted? Check this table:

| Scenario | Recommendation |
| --- | --- |
| Working with a single file | Just drag and drop it into the conversation |
| Multiple related files | Working folder |
| Files keep arriving | Working folder (the AI notices new files immediately) |
| Deliverables must land in a specific place | Working folder |

## Three File Safety Rules

That thing you care about most—"is it going to delete my files?"—comes down to these three:

1. **Only folders you explicitly authorize are accessible**—if the AI truly needs another location, it asks for your consent first;
2. **Files are never permanently deleted**—deletions only move items to the system trash;
3. **File contents are not stored permanently**—they're sent to the AI model for processing but never kept in the cloud long-term.

Recommendation: authorize only your regular working folders; don't take the shortcut of designating your entire user directory as a working folder.

## Supported Formats

Whatever you have on hand, it can take it in and hand it back out:

| | Formats |
| --- | --- |
| Reading | PDF, Word (.docx), Markdown, plain text, RTF, Excel (.xlsx/.xls), CSV, TSV, PNG/JPG/SVG/GIF (with OCR), all code source files, PowerPoint (.pptx), JSON/YAML/XML/SQL |
| Writing | Word, PDF, Markdown, HTML, Excel, CSV, PPTX, PNG, SVG, interactive HTML reports, code in any language, JSON/XML |

That covers virtually every office scenario; the only common gap is the legacy binary .doc / .ppt formats—convert them to docx/pptx first when you run into them.

## Long-Term Use: Set Once, Reuse Forever

The real power of a working folder is cumulative use. The official metaphor: **"the folder is the raw-materials warehouse; the prompt is the blueprint."**

Once you've got the hang of it, the loop looks like this:

```text
Week 1: Drop 12 department annual reports into the "2024 Annual Summary" folder,
        designate it as the working folder, and ask the AI to draft the annual
        summary → finished product in 6 minutes
Week 2: Add 3 more reports, open QoderWork (the working folder is unchanged, no
        need to re-select), and say "I've added new data, please update the
        report" → updated within 5 minutes
```

Four tips for organizing folders—just follow them:

1. **Put dates or sequence numbers in filenames**: `2024-03-monthly-exam.xlsx` keeps the AI's sorting sane;
2. **One folder per matter**: don't mix your personal life with three projects in one directory;
3. **Keep formats consistent**: files sharing a template and column names can be aligned and merged automatically;
4. **Use subfolders**: reading is recursive, so layer things like `raw/outputs/references`.

## Seven Typical Roles

Find your role and use it the way the table says:

| Role | Folder use |
| --- | --- |
| Teacher | Exam results over time → a continuously updated learning-analysis report |
| Sales | Monthly reports → trend and anomaly alerts |
| Finance | Expense receipts → a consolidated ledger |
| Lawyer | Case materials (complaints / contracts / evidence) → case analysis reports |
| Operations | Per-channel data → weekly ROI reports |
| Foreign trade | Order Tech Packs → structured extraction tables |
| Researcher | Literature PDFs → literature reviews |

See [File Organization and Photo Management](/en/qoderwork/case-file-organize) for a hands-on example.

## FAQ

**Once I authorize a folder, will it snoop through my other files?**
No. It enters only the directory you explicitly authorized, and if it truly needs an unauthorized one, it asks first. And don't take the shortcut of making your whole user directory a working folder.

**Can one task be tied to two folders?**
No. A task can be tied to exactly one working folder—that's a hard limit. To work with different folders, create separate tasks.

**If it deletes a file, is the file gone?**
Nothing is deleted permanently. Deletions only move items to the system trash, so you can fish them back out. Still, back things up before any large batch operation.

**Old .doc and .ppt files won't open. What do I do?**
Working folders handle legacy binary formats poorly. Convert them to docx / pptx first, then drop them in.

**I added new files. Do I need to re-select the folder?**
No. If the working folder hasn't changed, just say "I've added new data, please update," and it picks up the new files right away.

---

Next: [Skills and Expert Kits →](/en/qoderwork/05-skills)
