---
description: "The worst thing about a long task is watching it drift. Halfway through you realize it went the wrong way, and fixing it costs more than starting over."
---

# How Do You Choose Between Plan, Spec, and Goal? Keeping Long Tasks on Track

The worst thing about a long task is watching it drift. Halfway through you realize it went the wrong way, and fixing it costs more than starting over. TraeWork ships with three workflows (Plan / Spec / Goal) plus custom commands to hold long tasks on the rails.

> Official docs: [work_spec-and-plan](https://docs.trae.cn/work_spec-and-plan) | [work_commands](https://docs.trae.cn/work_commands)

## Choosing Among the Three Workflows

| Workflow | Best for | Output | Modes |
| --- | --- | --- | --- |
| **Plan** | Well-scoped tasks where steps need confirmation before execution (small-to-medium features, module-level refactors, bug fixes) | plan.md under `.trae/documents/` | Work / Code / Design |
| **Spec** | Larger, complex tasks that need alignment on approach and acceptance criteria first (system-level tasks, large refactors, multi-person collaboration) | An outline + tasks.md + acceptance checklist under `.trae/specs/` | Code only |
| **Goal** | Long tasks with a clear goal that need the agent to keep pushing (continuous test fixes, bulk migrations, ongoing troubleshooting) | Goal-driven multi-round runs | Work / Code |

Same entry point for all: type `/` in the chat box and pick from the list, or type `/Plan`, `/Spec`, or `/goal` directly and hit Enter.

## Plan: Get the Plan Before the Work Starts

The AI analyzes the requirements and plans → generates a plan document under `.trae/documents/` → executes item by item **only after you confirm**. If the plan isn't what you expected, edit the document yourself or have the AI adjust it in natural language.

How you might use it for office work: tidying up a batch of reports or migrating a document structure—first see how many steps the AI plans and which files it will touch, then give the green light.

## Spec: Put Acceptance Criteria in Writing

The AI generates a three-part document set (outline, task list, acceptance checklist) stored under `.trae/specs/`, grouped by task. **On first creation the AI pauses for your confirmation**; afterward, the task list and acceptance checklist update automatically as work progresses. While waiting, you can edit the documents directly or have the AI change them; the documents can go under version control as project knowledge assets.

This "align on acceptance criteria before executing" approach matches the Spec-driven development idea in the QoderWork section ([/en/qoderwork/03-first-task](/en/qoderwork/03-first-task))—different tools, shared methodology.

## Goal: Multi-Round Runs Toward a Defined Finish Line

You define the **completion condition** in natural language; after each round the agent automatically evaluates whether the goal is met: keep going if not, stop automatically if yes. A dedicated "Goal panel" lets you view, edit, pause, or delete goals at any time.

It suits batch jobs with a clear endpoint—"convert all 50 of these files to a unified format and pass a spot check."

## Custom Commands: Wrap Frequent Instructions as `/xxx`

Commands are a mechanism for wrapping frequently used prompts as shortcuts—handy for reusing high-frequency instructions (summarize changes, tidy meeting notes), standardizing output formats (commit message and PR description templates), and codifying routine procedures (code review, security checks).

**Creating a command** (desktop app):

1. Avatar in the bottom-left > Settings > "Commands" in the left panel (or the command icon at the bottom-left of the chat box → "Manage Skills and Commands" at the bottom of the menu);
2. In the "Commands" panel, click "Create";
3. Fill in the fields:
   - **Command name**: a unique identifier like `summarize-pr-info`; lowercase letters, digits, and hyphens only;
   - **Description**: when to use it;
   - **Instructions**: what the AI should do when triggered—spell out the steps, where context comes from, and what to output;
4. Click "Confirm". Optionally choose the runtime: local (desktop only) or cloud.

**Built-in commands**: `/plan`, `/spec`, `/browser_use` (operates the built-in browser to gather context and assist with accessibility checks).

Usage: type `/` in the chat box or click the command icon to choose one, then add the specifics for this run.

## How Commands, Skills, and Rules Divide the Work

| | What it wraps | Trigger | Best for |
| --- | --- | --- | --- |
| Command | A fixed instruction template | Manual `/` invocation | High-frequency short instructions |
| [Skill](/en/traework/04-skills) | A full method (with scripts/resources) | Manual or AI-automatic | Complete ways of working |
| Rule | Mandatory standards | Fully resident | Coding style, language conventions |

## FAQ

**Plan or Spec—which should I use?**
Plan when the task boundaries are clear and you want to confirm the steps first. Spec when the scope is big and you need to align on acceptance criteria first (system-level work, multi-person collaboration). Note that Spec exists only in Code mode.

**What kind of job suits Goal?**
Batch work where the target is clear and you want the AI to run to the end on its own—"convert 50 files to the new format and spot check them," say. It tests itself after each round and stops once it passes, so you don't have to sit with it.

**How is a custom command different from a skill?**
A command is a fixed instruction template you invoke manually with `/`, suited to short, frequent instructions. A skill is a whole method (scripts and resources included) that the AI can trigger automatically. For high-frequency repetition, start with a command.

**Any restrictions on command names?**
Lowercase letters, digits, and hyphens only—`summarize-pr-info`, for instance. No spaces or capitals, or it won't build.

**Can I keep Spec documents around as assets?**
Yes. You can edit them during the waiting stage, their status updates automatically once confirmed, and you can put them under version control as project knowledge assets.
