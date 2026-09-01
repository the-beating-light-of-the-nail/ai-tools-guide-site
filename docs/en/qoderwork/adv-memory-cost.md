# Advanced: Awareness, Costs, and the Secure Working Environment

Three mechanisms that make it smoother the more you use it: letting the AI remember you (Awareness), making your Credits count (cost), and running tasks in an isolated zone (secure working environment).

> Official docs: [memory](https://docs.qoder.com/zh/qoderwork/memory) | [settings](https://docs.qoder.com/zh/qoderwork/settings)

## Awareness: Cross-Session Memory and Personalization

Awareness (launched in v0.6.0) is QoderWork's memory and personalization system: it continuously records your preferences and work habits so new conversations start with full context. Three layers: memory, reflection, and skill self-evolution.

Entry point: the "Awareness" icon in the left navigation. Two main switches:

- **Awareness mode**: the master switch;
- **Auto memory**: automatically maintains your user profile and long/short-term memory, with periodic memory reflection.

The evolution dashboard: memory trend charts (by day/week/month), today's stats (review count, new memories, skill updates, reflections), and recent activity.

**Awareness file reference** (for deep customization):

| Item | File/location |
| --- | --- |
| Storage location | `~/qoderwork/awareness/main` |
| Collaboration style | SOUL.md (choose a preset or customize) |
| Work manual | AGENTS.md (directly editable) |
| User profile | USER.md (auto-maintained; manual edits not recommended) |
| Long-term memory | MEMORY.md (auto-maintained) |
| Short-term memory | memory/ directory (per-day conversation summaries) |
| Backup and restore | The awareness directory can be exported/imported (multi-device sync is manual) |

Three dangerous operations that **cannot be undone**: resetting collaboration style, resetting the work manual, and clearing memory—think twice before pulling any of them.

Practical advice: when the AI makes the same mistake twice, write it into the rules/work manual immediately instead of correcting by mouth each time; more memory isn't better—prune stale entries regularly. Authority comes from "every entry counting".

## Controlling Credit Costs

QoderWork bills in Credits, shared across the Qoder family (international: Pro $20/month = 2000 Credits, Pro+ $60, Ultra $200; credit packs $20/1500; the China edition has check-in and student/teacher bonuses). Model tiers vary a lot in cost (standard / advanced / flagship, rising step by step). Money-saving plays:

1. **Stagger your models**: standard tier to get it running → flagship tier for the key conclusions → standard tier to format (switching takes effect instantly without losing context);
2. **Run it once, then automate**: execute a workflow in full once to learn its cost before setting up a scheduled task;
3. **One topic per task**: start a new task for unrelated content instead of replaying old context;
4. **Specify length/format in outputs**: fewer rework rounds (community testing: stating "300 words" costs half of an open-ended output);
5. **Reuse skills**: a mature Skill, configured once, beats re-describing the job every time in Tokens.

## Secure Working Environment (Local VM Sandbox)

Settings → Advanced → Secure Working Environment: carves out an **isolated space** on your computer where tasks run and file data never leaves the device. Cleaning the working environment only frees disk space—conversations and deliverables stay. Good for: handling sensitive material, testing skills from unknown sources, and running bulk file operations.

Use it alongside three baseline rules:

1. Authorize only the [working folders](/en/qoderwork/04-files) you truly need;
2. Test third-party skills in an isolated folder first (look carefully at what permissions it asks for);
3. Keep the data-sharing toggle off by default (Settings offers a privacy mode for "data not used for product improvement"; on enterprise accounts only admins can change this).

## Settings Cheat Sheet

- **General**: language, theme, interface style, font and size, launch at startup, **keep system awake** (prevents interrupted tasks—recommended always on), desktop/sound notifications, network proxy;
- **Seven system permissions**: full disk access, screen and audio recording, accessibility, microphone, automation, notifications, location services—enable only what you use;
- **Shortcuts and QuickPick**: see [Computer Use and Voice Input](/en/qoderwork/adv-computer-use);
- **Experimental features**: generative UI, pop-out standalone windows, conversation-list filtering—turn on if you like living on the edge.

---

End of the advanced chapters. Back to the [Scenario Cheat Sheet](/en/qoderwork/ref-scenarios) to continue by scenario.
