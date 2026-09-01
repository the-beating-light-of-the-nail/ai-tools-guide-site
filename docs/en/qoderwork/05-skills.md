# Skills and Expert Kits

A Skill is "a work guide written down in advance"; an Expert Kit packages a whole role's professional knowledge, workflows, and quality standards together. They are the two steps in the QoderWork ecosystem that take you "from casual user to professional".

> Official docs: [skills](https://docs.qoder.com/zh/qoderwork/skills) | [expert-kits](https://docs.qoder.com/zh/qoderwork/expert-kits)

## Skills: The AI's "Professional Capability Manual"

Each Skill is simply a folder containing a SKILL.md file, stored in `~/.qoderwork/skills/`. SKILL.md is written in natural language—no code needed—and spells out "the steps, output format, and details to follow when facing a certain type of task".

Four payoffs: no more repeated explanations, consistent output, personal know-how turned into a reusable asset, and an AI that goes from "generalist" to "specialist".

**Four ways to get them**:

1. **Search and install from the conversation**: just say "find me a skill that does X"—the built-in find-skills recommends options, one click to install;
2. **Browse the Skill marketplace**: Extensions → Skills, pick from the market;
3. **Get them from the open-source community**: paste a GitHub repo link and it's cloned, placed, and loaded automatically;
4. **Upload manually**: on the Skills page click "Install Skill" and upload a SKILL.md file.

**Four ways to use them**: automatic triggering (matched automatically when you describe the task), quick invocation with `/`, adding context with `@` (note: @ supplements context, it doesn't invoke), and naming it in the conversation ("use the xxx skill to generate the image set").

**Nine built-in skills**: docx / pdf / pptx / xlsx (auto-triggered when the matching file type is mentioned), find-skills, create-skill, plugin-creator, install-skill-dependency, vm-error-recovery.

**Sharing**: on the Skills page, click the share icon next to a personal skill → copy the link → the recipient installs in one click. Note: **share links expire in about 24 hours**, and you can only share skills you created yourself.

## Expert Kits: Packaging "Knowing the Trade" for the Team

Official positioning: "turn the AI into a professional who truly knows the trade." A kit = Skills + data connections + workflows + output standards in one bundle. The problem it solves isn't "how does the AI do a thing" but "**how does a whole team adopt the same AI working solution**"—configured once, reused by everyone.

**Twelve built-in kits**: product management, product design, corporate legal, corporate tax & accounting, contract management, consulting delivery, marketing, investment research, investment banking, equity investment, wealth management, and a tech-services assistant.

**How to use**:

1. Extensions → Expert Kits, click + on the right of a card to install (skills load automatically);
2. Create a task, type `/` and pick the kit name (e.g. `/review-contract`), then describe the task.

**Installing third-party kits**: top-right "+ Add" → "Upload Kit", and upload a .zip package (it must contain `.qoder-plugin/plugin.json`, and plugin.json must include a name field).

## A Real Case: A Lawyer Turns 20 Years of Experience into an Asset

The official field-notes page records how a law-firm partner used this (defending a copyright infringement case):

- Created Skills while working the case: evidence organization (classification rules + numbering scheme), similar-case search (narrowing the cause-of-action scope after a weak first pass), defense-framework construction (restructuring the argument layers in the third draft), answer drafting;
- Result: **a full set of defense documents completed independently in four days**—the answer brief, cross-examination opinions, evidence list, attorney's statement, and a 356-page evidence volume;
- After closing the case, the ten Skills were consolidated into a legal expert kit and distributed to the team: juniors generate in one click, partners review.

Four steps to build a kit: ① get one workflow running with a Skill (starting point: pick work you've repeated at least twice in the past week) → ② add Skills until the full process is covered → ③ consolidate into an expert kit → ④ share with the team.

Three common misconceptions: kit output is a high-quality **first draft**, not a final draft; you can't package once and use forever (kits need iteration); bigger isn't better (focus on "contract review", not "all legal work").

## Making Your Own Skill: /create-skill

Type `/create-skill` in the conversation, describe the "trigger phrase + steps + output format", and QoderWork generates the SKILL.md for you. For the full playbook see [Creating Skills Through Conversation](/en/qoderwork/adv-skill-create).

> Want to distill a whole book into a skill set? See the WorkBuddy section's [Building Skills: Knowledge Distillation](/en/workbuddy/adv-build-skill/)—the SKILL.md spec is the same on both sides.

---

Next: [Connectors and MCP →](/en/qoderwork/06-connectors)
