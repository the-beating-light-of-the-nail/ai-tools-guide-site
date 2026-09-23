---
description: "A colleague probably told you to just install a Skill and everything works. Then you open the skill marketplace and none of the categories make sense: finance, legal, new-media creation... you can't tell which one has anything to do with you."
---

# Not Sure Which Skills to Install? Pick the Right Ones and See What They Save You

A colleague probably told you to just install a Skill and everything works. Then you open the skill marketplace and none of the categories make sense: finance, legal, new-media creation... you can't tell which one has anything to do with you. Worse, it's called a "skill," so how is it different from the prompt you type into the chat box? This page settles two things: what a Skill is, and how to choose the ones worth using—along with why it saves you from repeating the same instructions over and over.

Doubao Work itself handles understanding your task and orchestrating the work; a **Skill is a reusable bundle of instructions, scripts, reference material, and resources** that tells the Agent how a certain class of tasks should be done, which tools to call, and what format to deliver. The idea comes from Anthropic: Agent Skills launched in October 2025 and were published as an open standard in December, and plenty of products have followed since.

## What a Standard Skill Looks Like

It's essentially a folder. Not every part is required, but one file is the whole point:

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

Only `SKILL.md` is required, and its core is just a description of "how this class of tasks gets done"—you can read it once and know what it governs:

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

## How Skills Work: They Only Open When Used

The clever part isn't the description itself, it's **progressive disclosure**. Think about it: if an Agent has 100 Skills installed and stuffs all 100 full documents into context, that burns your tokens and drags the model off course with irrelevant instructions. The standard approach works in three layers:

1. **At startup**, only each Skill's name and description are loaded—a few dozen to a hundred-odd tokens each;
2. **When a task matches**, the full `SKILL.md` is loaded—say you ask for a WeChat article about Doubao Work, the Agent reads the description, recognizes that `tech-article-writing` fits, and only then reads the whole file;
3. **Deep in the work**, it goes further and reads `references/style.md` or runs `scripts/check-ai-phrases.py`.

OpenAI's Codex works on a similar mechanism. So Skills solve an old problem: how to load an Agent up with knowledge and working methods without cramming all of it into every prompt forever.

## The Four Things They Do for You

**1 · Filling in knowledge only your company has.** Large models know plenty of general knowledge, but not necessarily your company's specifics: which table holds the `canonical user_id`, that the `subscriptions` table is append-only, that refund queries must exclude a certain status, or which Grafana dashboard ID to use. Hundreds of Anthropic's internal Skills cluster in nine areas: internal APIs and libraries, product validation, data analysis, business process automation, code scaffolding, code review, CI/CD, incident runbooks, and operations.

**2 · Locking down complex workflows.** With a plain prompt like "do detailed research on Doubao Work," the model has to reinvent the process every time: where to look, what to check first, how to verify, what to compare against, what structure to output. A Skill pins the flow down: official website → official WeChat account and launch events → product docs → hands-on product testing → competitor comparison → extracting core viewpoints → fact-checking. These are **Encoded Preference Skills** (organizing existing capabilities around the way you work); the other kind, **Capability Uplift Skills**, add abilities the model handles poorly or unstably, like complex documents, PDFs, and PPT processing.

**3 · Saving you from repeating yourself.** The things you always end up nagging about—"don't sound so AI, vary sentence length, don't over-bullet, keep technical content restrained, never invent examples"—are a natural fit for a `writing-style` Skill. After that, your prompt can be just "write an article about Doubao Work," and the writing habits, sourcing standards, and banned expressions all come from the Skill.

**4 · Turning experience into something you can manage.** Prompts used to be scattered across chat logs, documents, and your own head; a Skill is a file—you can put it in Git, roll back versions, share it with a team, A/B test it, auto-evaluate it, and keep updating it.

## Finding Skills in Doubao Work

Open "Skills · Connectors · Buddies" on the left and browse by category—**Finance, Legal, New Media Creation, Office Collaboration, Programming, Academia**—or search by name or need in the top search box. When you spot one, click "+" on the right to add it; some Skills support "try it in a conversation." Everything you've added is managed together under "My Skills."

You can also **create or upload your own**: click "New" at the top right and pick "Create a Skill by chatting with Doubao" or "Upload a Skill." Before uploading, check where the package came from, what the scripts do, and how far the permissions reach.

## Solving a Task with a Skill

Say your article needs its AI fingerprints reduced: search the marketplace for a "de-AI-flavor" Skill, add it, go back to your work task, type `/` in the input box or click "More Skills" to select it, then attach the article and your specific requirements. Doubao Work follows the skill's instructions to plan the steps itself, and lays out the process and results for you to see.

When it hands the work back, check three things: were the specified phrasings removed, were the facts and tone preserved, did it quietly rewrite any proper nouns?

## FAQ

**How is a Skill different from the prompt I type in the chat box?**
A prompt is a one-time briefing; a Skill stores "how this class of work gets done" in a file, so one line calls it up later, and a team can share and version it. Use a prompt for a one-off question; make it a Skill when you'll do the same job repeatedly.

**I installed a pile of Skills—will that blow up my context?**
No. They only open when used: startup records just the name and description, the full file loads only when a task matches, and reference material and scripts load only deep in the work. That's progressive disclosure, and your tokens go where they matter.

**Can't find a ready-made one. Can I make my own?**
Yes. Click "New" at the top right, generate one by talking with Doubao, or upload an existing skill package. Before uploading, check the source, the scripts, and the permission scope—don't take in packages from who knows where.

**I added a Skill. How do I know it actually followed the instructions?**
Call it up in a work task, attach your materials, and check item by item once it returns: were the specified phrasings removed, are the facts and tone intact, did proper nouns survive? Don't just read its own "done"—go through it yourself.

**Where do I see My Skills, and can things get messy?**
Everything you've added is managed under "My Skills," and you can disable or delete any of them at any time. Clicking "+" in the marketplace adds one; "New" at the top right is where you build your own. Don't mix the two up.

---

Next up: stay connected on the go—[Remote Control Your Computer from Your Phone →](/en/doubaowork/07-mobile-remote)
