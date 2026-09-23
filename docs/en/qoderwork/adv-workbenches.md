---
description: "Posters, pitch decks, long articles—every time you start from a blank document and sit there stuck. The General workbench can do the work, but for these recurring outputs QoderWork built dedicated vertical workbenches."
---

# Staring at a Blank Page Again? Three Workbenches—Design, Slides, Writing—and How to Pick

You need a poster, a pitch deck, a long article—and every time you start from a blank document and sit there stuck. The General workbench can handle the work, but for these high-frequency outputs QoderWork built dedicated vertical workbenches: a design canvas, 16:9 slides, and long-form writing. The switch sits in the workbench selector at the bottom left of the input box; you just pick one by the type of output you need.

> Official docs: the design / slides / writing pages under docs.qoder.com/zh/qoderwork.

## Design Workbench: An AI-Native "Design-as-Code" Canvas

You describe what you want in natural language and get design deliverables on an infinite canvas that are **runnable, editable, and shippable**; what you produce is a code asset you can hand off to Qoder (the IDE) with one click to keep developing.

Once you've switched workbenches, eight steps: describe the need (you can paste screenshots and links straight in) → optional settings (style reference / working folder / fidelity / component library) → pick an execution mode ("Run Directly" skips clarification; "Enter Design Plan Mode" aligns first) → answer clarification questions (each has preset options, plus "let the AI decide") → confirm the design plan (review the "contract" panel: deliverable / platform / output / component library / fidelity / style) → watch generation (live reasoning in the "Deep Thinking" panel on the left) → preview (click CTAs, check hovers, walk the navigation flows).

When you pick style, fidelity, and component library, check this table:

| Setting | Options |
| --- | --- |
| Style reference | Auto-select (picked from 161 references) or specify Airbnb / Apple / Carbon / Ant Design, etc. |
| Fidelity | Wireframe / High fidelity (default) |
| Component library | Unspecified (HTML-first) / shadcn/ui / Spark Design / Ant Design |

Three iteration moves: append instructions; **Nudge fine-tuning** (colors, spacing, corner-radius parameters without re-describing); or edit the design source code behind the canvas directly. The three mechanisms (Questions, Design Plan, Nudge) tackle the age-old "AI guessed wrong" problem—when information is missing, it asks instead of guessing.

## Slides Workbench: Outline First, Deck Second

You're building a report, courseware, or pitch deck—use the Slides workbench. The right-side canvas is a 16:9, 1280×720 HTML slide workspace. **Hard requirement: you must confirm the outline first**—in the "Outline" tab, each section carries a one-line intro and a layout tag (cover / text outline / image-left-text-right / two-column / quote, etc.). "Accept outline" starts generation, and you can reject with feedback if it's off.

The flow: switch workbenches → describe the need → pick a template ("no template" is an option; 35 built in) → answer clarifications (audience, page count, language) → **confirm the outline** → watch the deck build (thumbnails land one by one) → post-processing options (all skippable) → view the result.

Export formats: **PPTX, PDF, and HTML**; frequently used templates can be "saved as template" for reuse.

Official advice worth keeping: a good brief names both the **audience** and **what you want them to remember**, not just the topic.

## Writing Workbench: Version Control for Long-Form Text

You're writing a long article, a report, or a post—use the Writing workbench. It targets articles, reports, posts, technical guides, and internal docs. The Document workspace = a Markdown file tree + editor; deliverables land in the local `outputs/` directory; **every iteration is preserved as a traceable version** (top right of the editor switches between "latest version" and "earlier versions", exportable to PDF).

Pick your tone: unspecified (the AI judges) / formal / casual / technical / creative.

Five common ways to use it, with official templates:

| Scenario | Input → Output |
| --- | --- |
| Scattered notes → technical guide | A folder of rough notes → a structured guide |
| Blameless internal postmortem | Chats/logs → a postmortem document |
| PR list → release notes | git history → grouped by Features/Improvements/Fixes |
| Technical blog | Topic + word-count structure → finished draft |
| API spec → integration guide | API docs → auth, cURL examples, error-code table, FAQ |

Note: after you edit manually, subsequent AI rounds build **on your edits**—your revisions are never overwritten by the AI.

## Which One to Pick

Pick by output type:

| Need | Workbench |
| --- | --- |
| Files, data, research, automation | General |
| Posters, landing pages, UI prototypes | Design |
| Presentations, courseware, pitch decks | Slides |
| Articles, reports, guides | Writing |

> For comparison: TraeWork covers design with a Design mode + HTML deliverables (see [Making a Stage-Ready Slide Deck](/en/traework/case-ppt)), while QoderWork's vertical workbenches are more "turnkey"—pick whichever route feels better in your hands.

## FAQ

**Do I have to confirm the outline before it builds my deck?**
Yes. Review the layout and one-line intro for each section in the "Outline" tab, then accept to start generation. If it's off, reject it with feedback—far easier than rewriting a finished deck.

**Can I keep editing the code behind a design output?**
Yes. The output is a code asset. Hand it off to Qoder with one click and keep developing in the IDE; you're not stuck inside the canvas.

**I edited my draft by hand mid-way. Will the AI overwrite it?**
No. Later AI rounds build on top of your edits—what you changed stays changed.

**How do I choose among the three workbenches?**
Go by output: files and data use General; posters and prototypes use Design; reports and pitches use Slides; articles and reports use Writing.

**Can I skip templates for slides?**
You can pick "no template", and any of the 35 built-in templates can be "saved as template" for reuse. Whatever fits how you work.

**Can I roll back to an earlier version of my writing?**
Yes. Switch between "latest version" and "earlier versions"—every iteration is kept, so if a round goes sideways you drop back to the previous one.
