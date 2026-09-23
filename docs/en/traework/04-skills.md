---
description: "Open TraeWork and you'll notice something: you dispatch the same one-line request, and sometimes the work comes back impressively professional, other times sloppy. The difference usually isn't the model—it's whether you installed the matching skill."
---

# How Do You Install Skills? Give the AI a Professional Capability Manual

Open TraeWork and you'll notice something: you dispatch the same one-line request, and sometimes the work comes back impressively professional, other times sloppy. The difference usually isn't the model—it's whether you installed the matching skill.

A skill is a packaged set of professional practices for the AI—instructions, scripts, and related resources bundled together, so that in a specific scenario it can consistently produce work at an insider's level. Hand it the same one-line task with and without the right skill, and the quality can be night and day. Official docs: [docs.trae.cn/work_skills](https://docs.trae.cn/work_skills).

## What a Skill Is

Seeing skills for the first time? Start with the shape. Every skill is, plainly speaking, just a folder with a `SKILL.md` file in it:

```text
skill-name/
├── SKILL.md        # Required: YAML frontmatter (name, description) + description/use cases/instructions/examples
├── examples/       # Optional: examples
├── templates/      # Optional: templates
└── resources/      # Optional: resources
```

Its most important design is **loading on demand**: at startup the agent only scans each skill's brief description, and loads the full instructions only when the task is genuinely relevant. You don't have to stuff the whole manual into context every time, so it runs light.

Three concepts that are easy to mix up—sort them out once:

| | Role | Loading |
| --- | --- | --- |
| Skill | Describes "how to get the task done" | Loaded on demand |
| Rule | Standards such as code style and language frameworks | Fully loaded, continuously occupying context |
| MCP Server | Provides "tools that can be called" | Called per connection |

## Installing Skills: Two Sources

Installing from the marketplace is the most common path. Click "Plugin Marketplace" at the top of the left navigation, go to the "Skills" tab, search for the skill you want, and click **+** on the right of a card to install; click the card itself to see details.

You can also upload a skill package you found online (a zip or .skill file). Click "Upload Skill" in the top-right of the "Skills" tab to load it. One hard prerequisite: the archive's **root level must contain `SKILL.md`**, and that file needs a name and description in YAML format, or the upload won't go through. For your first skill, pick something handy from the marketplace and try it.

## Using Skills: Three Ways

The first is the `/` shortcut: type `/` in the chat box and pick from the list.

The second is naming it in your prompt—for example, "use the codemap skill to summarize the changes on this branch."

The third is the least effort—the AI invokes it automatically. When your task description hits a skill's described use case, it triggers on its own. So the more precisely you write the description in `SKILL.md`, the more reliable auto-triggering becomes. Once you've installed a lot and want to manage them, each skill card has a toggle to enable or disable, and "Uninstall" sits in the bottom-left of the details dialog.

## Skill Scope and Runtime

Skills you create fall into project-level and global-level, and the runtime splits into local and cloud:

| Dimension | Details |
| --- | --- |
| Project skills | Created within a project, available to that project only, stored in the project's `.trae/skills/` |
| Global skills | Created in the settings center, available to all projects (macOS/Linux `~/.trae-cn/skills`, Windows `%userprofile%\.trae-cn\skills`) |
| Local runtime | Local tasks only (desktop app only) |
| Cloud runtime | Cloud tasks and projects pulled from GitHub (web + desktop) |

## When It's Worth Building Your Own Skill

Per the official positioning, skills solve three kinds of problems:

- **Consistent output**: Design standards, brand consistency, formatting conventions—ten tasks following the same proven path;
- **Fixed, repetitive workflows**: weekly report procedures, data-cleaning SOPs, content checklists;
- **Accumulated know-how, made shareable**: Package personal experience into files that can be reused across projects and teams.

If you keep repeating the same block of instructions, it's time to consider making one. The test is simple: **the third time you type the same task instructions, it should become a skill.** If you want to distill a book or a methodology into a skill, the approach in the WorkBuddy section's "Building a Skill: Knowledge Distillation" ([/en/workbuddy/adv-build-skill/](/en/workbuddy/adv-build-skill/)) carries over—the `SKILL.md` conventions are shared between the two.

## Where to Find Skills

Browsing the marketplace? Look at the official "must-install skills" list first. More sources:

- The TraeWork plugin marketplace (official, includes a "must-install skills" recommendation list)
- Community skill collections: [awesome-agent-skills](https://github.com/libukai/awesome-agent-skills), [awesome-skills-cn](https://github.com/lingxuling/awesome-skills-cn) (a Chinese edition with 7,000+ Skills)
- User-shared posts on the official TraeWork forum, [forum.trae.cn](https://forum.trae.cn)

## FAQ

**What's the difference between a skill, a rule, and an MCP server?**
A skill says "how to get the task done" and loads on demand. A rule is a coding convention that occupies context the whole time. An MCP server is "tools you can call," invoked per connection. Three different things—don't mix them up.

**Why does uploading my local skill package fail?**
Most likely the archive doesn't have `SKILL.md` at the root level, or the file is missing the YAML-formatted name and description. Miss either condition and the upload won't go through.

**Why doesn't the AI use my skill automatically?**
Auto-triggering depends on your task description matching the skill's described use case. The more precisely you write the description in `SKILL.md`, the easier it is to match. Write it too vaguely and it won't bother triggering.

**Project skill or global skill?**
For something used in one project only, make it a project skill, stored in the project's `.trae/skills/`. For something you want to reuse across projects, create a global skill in the settings center (macOS/Linux at `~/.trae-cn/skills`, Windows at `%userprofile%\.trae-cn\skills`).

**Is the "third time" rule for building your own skill really the threshold?**
It's just a convenient line to draw. By the third time you're typing the same task instructions by hand, it's clearly time to freeze them into a skill—the time you save far outweighs the one-time cost of writing it.

---

Next: put the AI inside your chat window—[Office Assistant: Feishu and WeChat →](/en/traework/05-bot-assistant)
