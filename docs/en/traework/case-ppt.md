# Case Study: Build a Presentation-Ready PPT with TraeWork

> Adapted from a detailed hands-on write-up by K Shu, a core TRAE user: ["Making PPTs with TRAE Work: The Key Isn't 'Generation'"](https://zhuanlan.zhihu.com/p/2056077700767428956) (July 2026). His task: turn his takeaways from two OpenAI engineering articles into an 11-slide PPT for a community talk.

## Why "Make Me a PPT" Always Fails

Ask with one sentence—"make a presentation PPT from this article"—and what you get usually **looks like a webpage screenshot, a backend page, or a design demo—anything but a deck you can present on stage**. The problem isn't the model; it's that you never defined "what done well means."

The two most common traps:

- **Visual instructions steer it wrong**: "Make it premium / techy" pulls the AI toward blue-purple gradients, glassmorphism cards, isometric components, and dashboard layouts. What works is **defining by negation**—"no isometric cards, no button-style labels, no dashboard-looking pages"—and aiming for a "paper notes, annotations, live walkthrough" feel.
- **Titles that don't sound human**: ✗ "Cognitive progression / paradigm shift" → ✓ "AI buzzwords don't come out of nowhere / the pain point keeps moving down the chain". The test: read the title alone; if it's something you'd never say out loud on stage, don't put it at the top of a slide.

## The Five-Step Pipeline: Define "Good" First, Then Let the AI Push Forward

K Shu's full workflow has five steps, each producing an "anchor document," and **you can stop and revise at any step**—the earlier you stop, the cheaper the changes.

### Step 1: Deep-dive the Material, Produce a Memo

```
Do not generate any slides yet.
First analyze each of the two articles separately: extract the core themes, core claims,
argument structure, new insights, and boundary conditions. Then, based on that analysis,
write a takeaway memo.
Do not summarize paragraph by paragraph; focus on how the two articles build on each other.
Stop after output and wait for my confirmation.
```

The key: **steer direction at the memo stage**. Once the PPT is generated, problems pile on top of each other (narrative, titles, visuals, text boxes), and fixing them then costs the most.

### Step 2: Slide Plan—One Claim per Slide

From the confirmed memo, draft a slide plan of about 10 slides, in this format:

```text
Slide 03 / Claim: The pain point of AI coding keeps moving down the chain
Proof object: Harness → sessions → supervision overload → Symphony
Layout: process sequence
```

Order the 11 slides by "the order insights arrived," not by the article's table of contents: cover → hook → progression → method one → live demo → new bottleneck → method two → paradigm shift → boundaries → advice for small teams → wrap-up.

### Step 3: Design Brief—Define the Style by Negation

```
Based on the confirmed slide plan, write a design brief that clearly specifies:
- What this deck must NOT look like
- The visual direction and references
- Background safe zones (regular content centered, nothing hugging the bottom edge,
  page numbers clear of texture edges)
- Which text must remain editable
- Which elements may be generated with image-gen
- Which statements are just my reading and must not be presented as official definitions
```

### Step 4: Generate an Editable PPTX

```
Based on the confirmed memo, slide plan, and design brief, generate an editable PPTX.
Do not re-guess the article's logic, and do not present personal interpretations
as official definitions.
Keep all text in the PPT text layer. Images are for backgrounds, textures, and decoration only.
Export a PNG preview of every slide, generate a contact sheet (overview image),
and record verification results.
```

**The division of labor with image-gen: images carry the mood; text carries the facts.** Titles, page numbers, quote sources, key terms, and captions must never be baked into images—Chinese text in generated images can contain typos, the copy will change later, and others will need to move things around.

### Step 5: Fix Annotated Issues One by One

```
Fix the issues I've annotated one by one. After each round, re-export the PPTX,
preview images, and contact sheet.
Check for leftover old copy, awkward line breaks, safe-zone violations,
and that the PPTX still opens.
```

Revision instructions must be specific: "polish it a bit more" tells the AI nothing. Break it into actionable items like "text box width / mask size / whether padding is balanced."

## Four Kinds of Acceptance Checks

| Check | What to look for |
| --- | --- |
| Per-slide PNG preview | Occlusion, misalignment, leftover old copy |
| Contact sheet overview | Any slide too dense, style drift, weak cover or ending |
| PPTX package validation | File corruption, slide count, re-importability, media intact |
| Text layout | Missing placeholders, unexpected line breaks, safe-zone violations |

## Ethical Red Lines

- Don't use official logos to pass content off as official;
- Don't fake product screenshots—**the visuals can be polished, but the factual layer must be clean**.

## Takeaways

- Run the full pipeline only for formal external presentations; for internal drafts, the memo and slide plan are enough;
- For quick jobs, try the [template library](/en/traework/03-first-task) and PPT-related plugins/skills first;
- K Shu's closing line is worth writing down: **"The human work didn't disappear—it just moved. From standing inside every detail to standing above the process."**
