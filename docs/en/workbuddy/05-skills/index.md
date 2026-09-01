# Chapter 5: Loading a Skill You'll Actually Use in WorkBuddy

## What Is a Skill

WorkBuddy itself handles understanding the task and organizing execution; a Skill is a reusable bundle of instructions, scripts, reference materials, and resources that tells the Agent how a certain class of tasks should be done, which tools to call, and what format to deliver.

A standard Skill looks roughly like this:

```text
my-skill/
├── SKILL.md
├── scripts/
│   └── check.py
├── references/
│   └── guide.md
└── assets/
    └── template.pptx
```

Only `SKILL.md` is required. Its first two lines state the name and purpose:

```markdown
---
name: tech-article-writing
description: For writing articles about AI products, model reviews, and the tech industry
---

When you receive a writing task:

1. First confirm the article's core angle
2. Find primary sources
3. Cross-check the core facts
4. Draft according to the user's writing style
5. Check for banned phrasing and AI-sounding expressions
```

## How Skills Work

The most important design behind a Skill isn't SKILL.md — it's **Progressive Disclosure**. Suppose your Agent has 100 Skills installed. It doesn't stuff everything into context up front; instead it loads on demand across three levels:

1. **At startup**: it reads only the names and descriptions of all Skills (tens to a couple hundred tokens);
2. **When a task matches**: you say "help me write a WeChat Official Account article about WorkBuddy," the Agent sees from the description that `tech-article-writing` is relevant, and only then loads the full SKILL.md;
3. **During execution**: only when it needs to mimic the writing style does it read `references/style.md`; only when it needs to check for AI-sounding phrases does it run `scripts/check-ai-phrases.py`.

So Skills solve a problem that has long plagued Agents: **how to give an Agent lots of knowledge and working methods without permanently stuffing it all into the Prompt.**

## What's the Difference Between a Skill and a Prompt

| Dimension | Prompt | Skill |
| --- | --- | --- |
| Core role | Describes the current task | Defines how a class of tasks is done |
| Lifecycle | Usually for a single request | Reused long-term |
| Trigger | Entered by the user | Auto-selected by the Agent or explicitly invoked |
| Carrier | Mostly text | A folder |
| Contents | Instructions, context, examples | Instructions, scripts, references, templates, assets |
| Context usage | Usually goes straight into context | Loaded on demand |
| Reuse | Often copy-pasted | Natively reusable and shareable |

The simplest way to put it: **Prompt = the task, Skill = the method.** Those instructions you keep repeating in conversations — "don't make it sound so AI, mix short and long sentences, don't invent examples" — are a natural fit for a `writing-style` Skill. From then on, the Prompt only needs one line, "write an article about WorkBuddy," and the writing conventions all come from the Skill.

Skills also deliver two things Prompts can't: **locking in complex workflows** (codifying the seven-step industry research process instead of having the model rethink it every time), and **turning personal experience into an asset** — a Skill is a folder that can be managed with Git, rolled back, and shared across a team.

## Finding the Right Skill in WorkBuddy

Open "Experts · Skills · Connectors" on the left. You can search the Skill marketplace, or describe your need using "Find a Skill."

![](/workbuddy/05-skills/assets/001_image_TdcLblfvIo.png)

You can also find suitable Skills in the SkillHub marketplace:

![](/workbuddy/05-skills/assets/002_image_V3E5bsVZGo.png)

Besides installing straight from the recommended list, you can also **import Skills you've downloaded yourself**: when you find a great skill pack online, it downloads as a zip file — just click "Upload Skill" and load the zip.

![](/workbuddy/05-skills/assets/003_image_Oag3bNQHOo.png)

![](/workbuddy/05-skills/assets/004_image_GgOebNBh3o.png)

## Using a Skill to Solve a Task

Say you had the AI write an article and now need to remove the AI flavor. Find the "De-AI Article Tool" Skill, install it, and invoke it later by simply typing `/`.

![](/workbuddy/05-skills/assets/005_20260708200848_NN3hbPsKAo.gif)

You just reference the Skill and hand over the article:

![](/workbuddy/05-skills/assets/006_image_Xom2btXVZo.png)

WorkBuddy loads the Skill's contents first:

![](/workbuddy/05-skills/assets/007_image_AmOVb1oGEo.png)

Then it follows the rules in the Skill — for example, removing "not X but Y" constructions, quotation marks, and the like:

![](/workbuddy/05-skills/assets/008_image_FbpQbmSswo.png)

After the edits you get the result — the AI flavor is indeed gone.

![](/workbuddy/05-skills/assets/009_image_RhBKbRhgIo.png)

## Disabling and Uninstalling a Skill

From All Skills, click "My Installed":

![](/workbuddy/05-skills/assets/010_image_NGsdbBcjso.png)

Toggle the button off (this disables the Skill):

![](/workbuddy/05-skills/assets/011_image_DABBb41fGo.png)

Click "···" to delete or edit the Skill:

![](/workbuddy/05-skills/assets/012_image_Uya3bNC9io.png)

---

> Want to distill a book or a course into your own Skill? See the advanced chapter [Building Skills: Distilling Knowledge into Executable Capability](/en/workbuddy/adv-build-skill/).
