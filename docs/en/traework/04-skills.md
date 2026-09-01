# Skills: Give the AI "Professional Capability Manuals"

Skills are one of the most important concepts in the TraeWork ecosystem: each skill packages instructions, scripts, and related resources to give the agent **reusable, scenario-specific professional capabilities**. The very same one-line task can produce wildly different output quality depending on whether the right skill is installed.

> Official docs: [docs.trae.cn/work_skills](https://docs.trae.cn/work_skills)

## What a Skill Is

Each skill is simply a folder containing a `SKILL.md` file:

```text
skill-name/
├── SKILL.md        # Required: YAML frontmatter (name, description) + description/use cases/instructions/examples
├── examples/       # Optional: examples
├── templates/      # Optional: templates
└── resources/      # Optional: resources
```

The key design is **loading on demand**: at startup the agent only scans each skill's brief description, and loads the full instructions only when they're highly relevant to the task—effectively reducing token consumption in context.

Don't confuse three neighboring concepts:

| | Role | Loading |
| --- | --- | --- |
| Skill | Describes "how to get the task done" | Loaded on demand |
| Rule | Standards such as code style and language frameworks | Fully loaded, continuously occupying context |
| MCP Server | Provides "tools that can be called" | Called per connection |

## Installing Skills: Two Sources

**From the marketplace** (most common):

1. Click "Plugin Marketplace" at the top of the left navigation;
2. Go to the "Skills" tab and search for the skill you want;
3. Click **+** on the right of a card to install; click the card for details.

**Upload a local skill package**: If you find a good skill package online (a zip or .skill file), click "Upload Skill" in the top-right of the "Skills" tab to load it. Prerequisite: the archive's **root level must contain SKILL.md**, and the SKILL.md must include a name and description in YAML format.

## Using Skills: Three Ways

1. **`/` shortcut**: Type `/` in the chat box and pick from the list;
2. **Name it in your prompt**: e.g., "Use the codemap skill to summarize the changes in this branch";
3. **Automatic invocation by the AI**: Triggered automatically when your task matches the skill's described use cases—so the more precisely SKILL.md's description is written, the more reliable auto-triggering becomes.

Managing skills: toggle the switch on a skill card to enable/disable; "Uninstall" is in the bottom-left of the details dialog.

## Skill Scope and Runtime

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

The test is simple: **if you've written the same task instructions for the third time, it's time to make a skill.** If you want to distill a book or a methodology into a skill, see "Building a Skill: Knowledge Distillation" in the WorkBuddy section ([/workbuddy/adv-build-skill/](/en/workbuddy/adv-build-skill/))—the SKILL.md conventions are the same on both sides.

## Where to Find Skills

- The TraeWork plugin marketplace (official, includes a "must-install skills" recommendation list)
- Community skill collections: [awesome-agent-skills](https://github.com/libukai/awesome-agent-skills), [awesome-skills-cn](https://github.com/lingxuling/awesome-skills-cn) (a Chinese edition with 7,000+ Skills)
- User-shared posts on the official TraeWork forum, [forum.trae.cn](https://forum.trae.cn)

---

Next: put the AI inside your chat window—[Office Assistant: Feishu and WeChat →](/en/traework/05-bot-assistant)
