---
description: "You ask WorkBuddy to write an article, and every single time you have to repeat yourself in the chat box: \"don't make it sound like AI,\" \"mix short and long sentences,\" \"don't invent examples.\" You've said it a dozen times, and it still slips now and then."
---

# Chapter 5: Sick of Repeating "Don't Sound Like AI"? Turn That Advice Into a Skill

You ask WorkBuddy to write an article, and every single time you have to repeat yourself in the chat box: "don't make it sound like AI," "mix short and long sentences," "don't invent examples." You've said it a dozen times, and it still slips now and then. At some point you've probably thought: can I teach it these rules once and never say them again? Yes — and that's exactly the problem a Skill solves.

## What Is a Skill

WorkBuddy itself handles understanding the task and organizing execution; a Skill is a reusable bundle of instructions, scripts, reference materials, and resources that tells the Agent how a certain class of tasks should be done, which tools to call, and what format to deliver.

Install a writing-style Skill once, and from then on a single "write an article about WorkBuddy" carries your habits with it. You stop repeating yourself.

A standard Skill looks roughly like this — only `SKILL.md` is required, everything else is supporting material you add as needed:

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

The most important design behind a Skill isn't the few lines of instructions you can see — it's **Progressive Disclosure**. Suppose your Agent has 100 Skills installed. It doesn't stuff everything into context up front; instead it loads on demand across three levels:

1. **At startup**: it reads only the names and descriptions of all Skills (tens to a couple hundred tokens);
2. **When a task matches**: you say "help me write a WeChat Official Account article about WorkBuddy," the Agent sees from the description that `tech-article-writing` is relevant, and only then loads the full SKILL.md;
3. **During execution**: only when it needs to mimic the writing style does it read `references/style.md`; only when it needs to check for AI-sounding phrases does it run `scripts/check-ai-phrases.py`.

So Skills solve a problem that has long plagued Agents: how to give an Agent lots of knowledge and working methods without permanently stuffing it all into the Prompt.

## What's the Difference Between a Skill and a Prompt

The simplest way to put it: **Prompt = the task, Skill = the method.** Those instructions you keep repeating in conversations — "don't make it sound so AI, mix short and long sentences, don't invent examples" — are a natural fit for a `writing-style` Skill. From then on, you send one line, "write an article about WorkBuddy," and the writing conventions all come from the Skill.

| Dimension | Prompt | Skill |
| --- | --- | --- |
| Core role | Describes the current task | Defines how a class of tasks is done |
| Lifecycle | Usually for a single request | Reused long-term |
| Trigger | Entered by the user | Auto-selected by the Agent or explicitly invoked |
| Carrier | Mostly text | A folder |
| Contents | Instructions, context, examples | Instructions, scripts, references, templates, assets |
| Context usage | Usually goes straight into context | Loaded on demand |
| Reuse | Often copy-pasted | Natively reusable and shareable |

Skills also deliver two things Prompts can't: **locking in complex workflows** (codifying the seven-step industry research process instead of having the model rethink it every time), and **turning personal experience into an asset** — a Skill is a folder, so you can manage it with Git, roll back versions, and share it across a team.

## Finding the Right Skill in WorkBuddy

Open "Experts · Skills · Connectors" on the left. You can search the Skill marketplace, or describe your need using "Find a Skill."

![The Experts·Skills·Connectors entry and skill search](/workbuddy/05-skills/assets/001_image_TdcLblfvIo.png)

You can also find suitable Skills in the SkillHub marketplace:

![The SkillHub marketplace](/workbuddy/05-skills/assets/002_image_V3E5bsVZGo.png)

Besides installing straight from the recommended list, you can also import Skills you've downloaded yourself: when you find a great skill pack online, it downloads as a zip file — just click "Upload Skill" and load the zip.

![Importing a skill package via Upload Skill](/workbuddy/05-skills/assets/003_image_Oag3bNQHOo.png)

![Selecting a local zip file to upload](/workbuddy/05-skills/assets/004_image_GgOebNBh3o.png)

## Using a Skill to Solve a Task

Say you had the AI write an article and now need to remove the AI flavor. Find the "De-AI Article Tool" Skill, install it, and invoke it later by simply typing `/`.

![Typing / to summon an installed skill](/workbuddy/05-skills/assets/005_20260708200848_NN3hbPsKAo.gif)

You just reference the Skill and hand over the article:

![Referencing the skill and passing in the article](/workbuddy/05-skills/assets/006_image_Xom2btXVZo.png)

WorkBuddy loads the Skill's contents first:

![WorkBuddy loading the skill contents](/workbuddy/05-skills/assets/007_image_AmOVb1oGEo.png)

Then it follows the rules in the Skill — for example, removing "not X but Y" constructions and quotation marks:

![Applying the de-AI-flavor rules from the skill](/workbuddy/05-skills/assets/008_image_FbpQbmSswo.png)

After the edits you get the result — the AI flavor is indeed gone.

![The finished text after removing the AI flavor](/workbuddy/05-skills/assets/009_image_RhBKbRhgIo.png)

## Disabling and Uninstalling a Skill

From All Skills, click "My Installed":

![Switching the skill list to My Installed](/workbuddy/05-skills/assets/010_image_NGsdbBcjso.png)

Toggle the button off (this disables the Skill):

![Toggling a skill off with the switch](/workbuddy/05-skills/assets/011_image_DABBb41fGo.png)

Click "···" to delete or edit the Skill:

![The ··· menu: delete or edit a skill](/workbuddy/05-skills/assets/012_image_Uya3bNC9io.png)

## FAQ

**Should I learn Prompts or Skills first?**
Get comfortable writing Prompts first — learn how to state the materials, the result, and the boundaries. Once you catch yourself repeating the same instructions for the same kind of work, turn it into a Skill so you never have to say it again.

**Will an installed Skill eat my context window forever?**
No. It uses progressive disclosure: at startup only names and descriptions are read, the body loads only when a task matches, and reference files and scripts load only during execution. Install a hundred and they won't all be pulled in at once.

**Can I share a Skill I built myself?**
Yes. A Skill is just a folder — zip it up and you can upload and share it. You can also manage it with Git and roll back versions, which makes it a good fit for a team that wants one shared way of working.

**What if a Skill turns out to be a bad fit?**
Open "My Installed" and toggle it off first. To remove it completely, click "···" and choose delete — you can also edit it right there. Once it's off, it won't be called for that job anymore.

---

Next up: let an Expert carry the specialist work — [WorkBuddy's Experts and Expert Teams →](/en/workbuddy/06-experts/)

> Want to distill a book or a course into your own Skill? See the advanced chapter [Building Skills: Distilling Knowledge into Executable Capability](/en/workbuddy/adv-build-skill/).
