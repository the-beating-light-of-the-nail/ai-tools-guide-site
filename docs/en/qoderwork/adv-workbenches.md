# Advanced: The Three Workbenches—Design, Slides, Writing

Beyond the General workbench, QoderWork ships vertical workbenches for three high-frequency outputs: a design canvas, 16:9 slides, and long-form writing. Switch between them via the workbench selector at the bottom left of the input box.

> Official docs: the design / slides / writing pages under docs.qoder.com/zh/qoderwork.

## Design Workbench: An AI-Native "Design-as-Code" Canvas

Describe what you want in natural language and get design deliverables on an infinite canvas that are **runnable, editable, and shippable**; outputs are treated as code assets and can be handed off to Qoder (the IDE) for further development with one click.

**The eight-step flow**: switch to the workbench → describe the need (screenshots and links can be pasted directly) → optional settings (style reference / working folder / fidelity / component library) → pick an execution mode ("Run Directly" skips clarification; "Enter Design Plan Mode" aligns first) → answer clarification questions (each has preset options, plus "let the AI decide") → confirm the design plan (review the "contract" panel: deliverable / platform / output / component library / fidelity / style) → watch generation (live reasoning in the "Deep Thinking" panel on the left) → preview (click CTAs, check hovers, walk the navigation flows).

**Key settings**:

| Setting | Options |
| --- | --- |
| Style reference | Auto-select (picked from 161 references) or specify Airbnb / Apple / Carbon / Ant Design, etc. |
| Fidelity | Wireframe / High fidelity (default) |
| Component library | Unspecified (HTML-first) / shadcn/ui / Spark Design / Ant Design |

**The three iteration moves**: append instructions; **Nudge fine-tuning** (colors, spacing, corner-radius parameters without re-describing); or edit the design source code behind the canvas directly. The three mechanisms (Questions, Design Plan, Nudge) tackle the age-old "AI guessed wrong" problem—when information is missing, it asks instead of guessing.

## Slides Workbench: Outline First, Deck Second

The right-side canvas is a 16:9, 1280×720 HTML slide workspace. **Hard requirement: the outline must be confirmed first**—in the "Outline" tab, each section carries a one-line intro and a layout tag (cover / text outline / image-left-text-right / two-column / quote, etc.). "Accept outline" starts generation, and you can reject with feedback if it's off.

Flow: switch to the workbench → describe the need → pick a template (or "no template"; 35 built in) → answer clarifications (audience, page count, language) → **confirm the outline** → watch the deck build (thumbnails land one by one) → post-processing options (all skippable) → view the result.

Export formats: **PPTX, PDF, and HTML**; frequently used templates can be "saved as template" for reuse.

Official advice: "A good brief names both the **audience** and **what you want them to remember**, not just the topic."

## Writing Workbench: Version Control for Long-Form Text

For articles, reports, posts, technical guides, and internal docs. The Document workspace = a Markdown file tree + editor; deliverables land in the local `outputs/` directory; **every iteration is preserved as a traceable version** (top right of the editor switches between "latest version" and "earlier versions", exportable to PDF).

Five tone options: unspecified (AI judges) / formal / casual / technical / creative.

Five official scenarios:

| Scenario | Input → Output |
| --- | --- |
| Scattered notes → technical guide | A folder of rough notes → a structured guide |
| Blameless internal postmortem | Chats/logs → a postmortem document |
| PR list → release notes | git history → grouped by Features/Improvements/Fixes |
| Technical blog | Topic + word-count structure → finished draft |
| API spec → integration guide | API docs → auth, cURL examples, error-code table, FAQ |

Note: after you edit manually, subsequent AI rounds build **on your edits**—human revisions are never overwritten by the AI.

## Which One to Pick

| Need | Workbench |
| --- | --- |
| Files, data, research, automation | General |
| Posters, landing pages, UI prototypes | Design |
| Presentations, courseware, pitch decks | Slides |
| Articles, reports, guides | Writing |

> For comparison: TraeWork covers design with a Design mode + HTML deliverables (see [Making a Stage-Ready Slide Deck](/en/traework/case-ppt)), while QoderWork's vertical workbenches are more "turnkey"—pick whichever route feels better in your hands.
