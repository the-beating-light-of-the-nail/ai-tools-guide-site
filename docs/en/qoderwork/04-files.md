# Working Folders: Let the AI Read and Write Your Files Directly

Working folders are the biggest dividing line between QoderWork and "chat-style AI": authorize a local directory, and the AI **reads and writes files on your computer directly**—no manual uploading or downloading. In the official words: "Organizing your folders sensibly and designating them as working folders is the key move to get the most out of QoderWork."

## How to Set It Up

1. Click + to create a task;
2. Below the input box, click "Work in Folder" (labeled "Select Working Directory" in some versions);
3. Pick the target folder in the system file picker;
4. Type your request—the AI reads the folder contents automatically.

**Hard limit: one task can be tied to exactly one working folder**; to work with different folders, create separate tasks.

## When to Use a Folder

| Scenario | Recommendation |
| --- | --- |
| Working with a single file | Just drag and drop it into the conversation |
| Multiple related files | Working folder |
| Files keep arriving | Working folder (the AI notices new files immediately) |
| Deliverables must land in a specific place | Working folder |

## Three File Safety Rules

1. **Only folders you explicitly authorize are accessible**—if the AI truly needs another location, it asks for your consent first;
2. **Files are never permanently deleted**—deletions only move items to the system trash;
3. **File contents are not stored permanently**—they're sent to the AI model for processing but never kept in the cloud long-term.

Recommendation: authorize only your regular working folders; avoid designating your entire user directory as a working folder.

## Supported Formats

| | Formats |
| --- | --- |
| Reading | PDF, Word (.docx), Markdown, plain text, RTF, Excel (.xlsx/.xls), CSV, TSV, PNG/JPG/SVG/GIF (with OCR), all code source files, PowerPoint (.pptx), JSON/YAML/XML/SQL |
| Writing | Word, PDF, Markdown, HTML, Excel, CSV, PPTX, PNG, SVG, interactive HTML reports, code in any language, JSON/XML |

That covers virtually every office scenario; the only common gap is the legacy binary .doc / .ppt formats—convert them to docx/pptx first when you run into them.

## Long-Term Use: Set Once, Reuse Forever

The real power of a working folder is cumulative use. The official metaphor: **"the folder is the raw-materials warehouse; the prompt is the blueprint."**

A typical cycle:

```text
Week 1: Drop 12 department annual reports into the "2024 Annual Summary" folder,
        designate it as the working folder, and ask the AI to draft the annual
        summary → finished product in 6 minutes
Week 2: Add 3 more reports, open QoderWork (the working folder is unchanged, no
        need to re-select), and say "I've added new data, please update the
        report" → updated within 5 minutes
```

Four tips for organizing folders:

1. **Put dates or sequence numbers in filenames**: `2024-03-monthly-exam.xlsx` keeps the AI's sorting sane;
2. **One folder per matter**: don't mix your personal life with three projects in one directory;
3. **Keep formats consistent**: files sharing a template and column names can be aligned and merged automatically;
4. **Use subfolders**: reading is recursive, so layer things like `raw/outputs/references`.

## Seven Typical Roles

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

---

Next: [Skills and Expert Kits →](/en/qoderwork/05-skills)
