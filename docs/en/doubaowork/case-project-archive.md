---
description: "You take over a project, and the hard part isn't getting AI to write code—it's getting AI to actually understand your project."
---

# The Project Ended—How Do You Archive Files, Decisions, and Deliverables Into One Knowledge Base?

You take over a project, and the hard part isn't getting AI to write code—it's getting AI to actually understand your project. Before, you'd toss it a requirement and it would invent a plan out of thin air. This time you have it read the project knowledge base and the code together, and it lays out exactly what needs to change—plus flags a trap that had been buried for a long time. Here's a walkthrough of how to capture what a project taught you once it wraps.

You've probably collected this lesson before: inherit an old project, docs don't match the code, nobody can explain it. This time try a different order—have Doubao Work read the knowledge base and the code together first. You don't have to dig through the code yourself; it reverse-engineers the pieces that need touching. You don't have to fear it making things up either—if the knowledge base is empty, it tells you so outright. Once you've confirmed the plan, archive the research back into the knowledge base. Put an owner and a date on every document, and whoever inherits this after you has a much easier time.

> Scenario: Integrating the PI engine into WeSight (a desktop app). It used to feel like having AI write code was the easy part—the hard part was making AI truly "understand" your project. This time Doubao Work looked at the project knowledge base and the code side by side, and mapped out exactly what needed to change.

The request fits in one breath:

```text
In the WeSight project, we're about to add an engine. I want to use the PI Agent engine.
Combining the knowledge base content with the current state of the code, give me an execution plan for integrating the PI engine.
```

## Reading the Knowledge Base and the Code Together

Doubao Work went through two things first: **the project knowledge base in Feishu**, and the integration points in the code repo—engine routing, constant definitions, adapters, Provider registration—aligning the archived project history with the architecture as it actually runs before writing the plan.

One unexpected find: the very first thing it flagged was that **the knowledge base was empty**—nothing but titles and a reference pointing to a deleted subpage. Anyone citing that knowledge base assumed it held answers; it held nothing. More reassuring: rather than hallucinating because the base was empty, it stated plainly that "all PI information in this plan comes from first-hand research into the official docs at pi.dev and the badlogic/pi-mono source code," making its sources fully transparent.

> **Knowledge goes stale—without sources, owners, and update dates, old answers mislead people for a long time.** A hollow knowledge base is worse than none: everyone who cites it walks away believing "there's documented knowledge here."

From the current code it reverse-engineered the 5 layers a new engine must thread through: constants/types registration → Provider/environment/installer → runtime adapter → Router + Main wiring → Renderer UI, plus config sync and end-to-end testing at the end. It gave clear recommendations on the key decisions: the integration channel uses RPC mode (`pi --mode rpc`, a stdin/stdout JSONL protocol); build a standalone adapter `PiRuntimeAdapter` (instead of reusing the 131KB adapter custom-built for parsing CLI text output—PI is a clean JSONL stream); permissions pass straight through in v1, with a confirmation dialog added in phase two.

## The Deliverable: an Executable Plan

The plan was saved to `docs/pi-engine-integration-plan.md`, sequenced into 4 milestones with estimated effort:

1. **M1 Skeleton**: constants/types/Provider/installer—it compiles, and Pi shows up in the environment panel with detect/install support;
2. **M2 Core path working**: PiRuntimeAdapter + Router + Main wiring—one full conversation round-trip;
3. **M3 Full features**: UI + config sync + images/continuation/stop;
4. **M4 Permission polish**: permission dialog + tests and regression.

It also listed 6 risk points up front (the models.json schema, streaming semantics, session continuation strategy, Windows compatibility, and so on). No decisions were made on a whim: the three core decision points were laid out clearly with verified default options attached, and **final decision authority was handed back to you**—completing the full end-to-end reasoning first while preserving your decision space cuts communication friction dramatically.

## Archiving the Research and Deliverables Back into the Knowledge Base

When asked to archive the research docs into the project knowledge base, it detected that the current account had read-only access, automatically rerouted the import to a personal knowledge base, and ran a full content verification. This highlights an easily overlooked truth: **where documents live and who can maintain them is itself a project asset**—if no document carries an owner or a last-updated date, the knowledge base quickly becomes an unclaimed island of information nobody dares to touch.

When told "build only the surface skeleton—no real development—and sync it to the Feishu doc when done," it aligned precisely: constants, types, an empty adapter, and UI options were all added; everything compiles and PI appears in the UI, but no real RPC communication was implemented.

## What a Healthy Project Knowledge Base Looks Like

```text
Project knowledge base
├── Home
├── Product & architecture
├── Engineering standards
├── Meetings & decisions
│   ├── Meeting minutes
│   └── Decision records (ADR)
├── Releases & versions
│   ├── Release records
│   └── Release checklist
└── Team & responsibilities
```

**When a project ends, archive the files, decisions, and deliverables together—and write down the source, owner, and update date as you archive.** That way, neither AI nor future colleagues will travel a long road holding an outdated answer. As AI gets stronger, context matters more and more.

---

Next: [Turn a Feishu Knowledge Base into a Reusable Skill →](/en/doubaowork/case-wiki-to-skill)

## FAQ

**How does Doubao Work come to "understand" my project?**

Have it read the project knowledge base and the code repo together. It aligns the historical context with the actual architecture before producing a plan—far more reliable than handing it a requirement and letting it invent one.

**If the knowledge base is empty, will it make things up?**

In this case, no. Its first sentence told you the knowledge base was empty, and noted that the information came from first-hand research into the official docs and source code. Seeing it disclose that is actually reassuring.

**Who makes the decisions in the execution plan?**

It offers recommendations and verified defaults, then hands the final call back to you. On core architecture choices especially, don't delegate entirely—confirm them yourself.

**What should I watch for when archiving back into the knowledge base?**

Tag every document with a source, an owner, and an update date. Without those, the knowledge base quickly becomes an unclaimed island, and AI will walk you down a long road with a stale answer.

**Will read-only permissions block the archiving?**

It will flag it. Here it noticed the account was read-only, switched automatically to importing into a personal knowledge base, and ran verification. If you hit something similar, just watch how it handles it.
