# How to Choose and Use Skills

Doubao Work itself handles understanding the task and orchestrating execution; a **Skill is a reusable bundle of instructions, scripts, reference material, and resources** that tells the Agent how a certain class of tasks should be done, which tools to call, and what format to deliver. (Anthropic launched Agent Skills in October 2025 and published them as an open standard in December.)

## What a Standard Skill Looks Like

```text
my-skill/
├── SKILL.md          # the only required file
├── scripts/
│   └── check.py
├── references/
│   └── guide.md
└── assets/
    └── template.pptx
```

Only `SKILL.md` is required, and its core is just a description of "how this class of tasks gets done":

```markdown
---
name: tech-article-writing
description: For writing articles about AI products, model reviews, and the tech industry
---

When you receive a writing task:

1. First confirm the article's core angle
2. Find primary sources
3. Cross-verify the core facts
4. Draft according to the user's writing style
5. Check for banned phrasing and AI-sounding expressions
```

## How Skills Work: Progressive Disclosure

The key design behind Skills isn't SKILL.md itself but **progressive disclosure**. Suppose an Agent has 100 Skills installed—it won't stuff all 100 full documents into context. That would waste tokens and drown the model in irrelevant instructions. The standard approach works in three layers:

1. **At startup**, only the names and descriptions of all Skills are loaded (a few dozen to a hundred tokens each);
2. **When a task matches**, the full `SKILL.md` is loaded—for example, when you say "help me write a WeChat Official Article about Doubao Work," the Agent judges from the description that `tech-article-writing` is relevant and only then reads the whole file;
3. **During execution**, it reads deeper material only as needed—pulling `references/style.md` or running `scripts/check-ai-phrases.py`.

OpenAI Codex uses a similar mechanism. So Skills solve a long-standing Agent problem: **how to give an Agent lots of knowledge and working methods without permanently stuffing everything into the prompt.**

## The Four Purposes of Skills

**1 · Supplying procedural knowledge.** Large models know plenty of general knowledge, but not necessarily your company's specifics: which table holds the `canonical user_id`, that the `subscriptions` table is append-only, that refund queries must exclude a certain status, or which Grafana dashboard ID to use. Hundreds of Anthropic's internal Skills cluster in nine scenarios: internal APIs and libraries, product validation, data analysis, business process automation, code scaffolding, code review, CI/CD, incident runbooks, and operations.

**2 · Locking in complex workflows.** With a plain prompt like "do detailed research on Doubao Work," the model has to reinvent the process every time: where to find sources, what to check first, how to verify, what to compare against, what structure to output. A Skill fixes the flow: official website → official WeChat account and launch events → product docs → hands-on product testing → competitor comparison → extracting core viewpoints → fact-checking. These are called **Encoded Preference Skills** (organizing existing capabilities around the way you work); the other kind, **Capability Uplift Skills**, add abilities the model handles poorly or unstably, like complex documents, PDFs, and PPT processing.

**3 · Cutting repetitive prompting.** The instructions you keep repeating—"don't sound so AI, vary sentence length, don't over-bullet, keep technical content restrained, never invent examples"—are a natural fit for a `writing-style` Skill. From then on the prompt can be just "write an article about Doubao Work," and the writing habits, sourcing standards, and banned expressions all come from the Skill.

**4 · Turning experience into an asset.** Traditional prompts are scattered across chat logs, documents, and people's heads; a Skill is a file—you can manage it in Git, roll back versions, share it with a team, A/B test it, auto-evaluate it, and keep updating it.

## Finding Skills in Doubao Work

Open "Skills · Connectors · Buddies" on the left: browse by category (**Finance, Legal, New Media Creation, Office Collaboration, Programming, Academia**, and more), or search by name or need in the top search box. Once you find one, click "+" on the right to add it; some Skills support "try it in a conversation." Added Skills are managed together under "My Skills."

You can also **create or upload your own Skills**: click "New" at the top-right of the page and choose "Create a Skill by chatting with Doubao" or "Upload a Skill." Before uploading, check the skill package's source, scripts, and permission scope.

## Solving a Task with a Skill

Example: an article needs its AI fingerprints reduced—search the skill marketplace for a "de-AI-flavor" Skill, add it, return to your work task, type `/` in the input box or click "More Skills" to select it, then attach the article and your specific requirements. Doubao Work will follow the skill's instructions to decide the processing steps, showing its process and results along the way.

Afterward, focus on verifying the skill's requirements were actually met: were the specified phrasings removed, were facts and tone preserved, were proper nouns left untouched?

---

Next up: stay connected on the go—[Remote Control Your Computer from Your Phone →](/en/doubaowork/07-mobile-remote)
