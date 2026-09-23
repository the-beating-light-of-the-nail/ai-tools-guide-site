---
description: "What if the AI could open Fliggy on its own, compare airfares, save the itinerary as a PDF, and drop it into your Mac Calendar? Beyond browser automation, QoderWork can drive your screen, listen to you, and capture whatever app is in front of you."
---

# Can QoderWork Drive Your Computer for You? Mouse, Voice, and Screenshot—Three Ways In

Picture this: the AI opens Fliggy on its own, compares airfares, saves the itinerary as a PDF, and drops it into your Mac Calendar. Beyond browser automation, QoderWork can drive your computer's interface directly, listen to you speak, and capture the app in front of you—the complete form of its "AI specialist" persona.

> Official docs: [computer-use](https://docs.qoder.com/zh/qoderwork/computer-use) | [voice-input](https://docs.qoder.com/zh/qoderwork/voice-input)

## Computer Use

You hand QoderWork the tasks that have to be done in a graphical interface. Four core capabilities:

- **Screen awareness**: takes continuous screenshots while working, confirming each step succeeded before deciding the next;
- **Mouse and keyboard control**: clicks, double-clicks, drags, typing, shortcuts—with pixel-level precision;
- **Autonomous background execution**: doesn't steal your window focus, so you can keep working;
- **Cross-app flows**: adapts dynamically to live feedback instead of replaying a fixed script.

**Enabling it**: Extensions → Connectors → turn on the "Computer Control" card → confirm the popup → grant two system permissions on first use: **Accessibility** (to read the UI element tree) and **Screen Recording**. macOS 14+; Windows supported since v0.5.7.

**Transparent execution**: every action goes through four stages—"screenshot → action description → actual action → result confirmation (verified with another screenshot)"—all visible in task monitoring.

**Three execution policies** (important):

| Policy | Behavior | Best for |
| --- | --- | --- |
| Ask every time (default) | Confirms before each action | Irreversible operations (sending email, submitting an order) |
| Auto-execute | Runs continuously without asking | Familiar, repeated flows |
| Disabled | Turns control off | When you only want other capabilities |

Here's a tested prompt you can model yours on (Alibaba engineer Xu Jingfeng):

```text
I'm traveling from Hangzhou to Sanya. Search and compare flights on Fliggy and
Ctrip for me, then put together a travel guide, generate a PDF, and add the
itinerary to my Mac's built-in Calendar.
```

Output: a Sanya travel guide PDF plus calendar events with a detailed schedule.

**Limits and cautions**:

- CAPTCHAs, SMS verification codes, and face recognition can't be completed—you have to step in;
- Slower than pure conversation (every step involves a screenshot analysis); precision drops on cluttered interfaces;
- Granting access permission = granting control permission—the AI can drive other apps "as you";
- Close windows containing passwords before running; don't manually grab the controlled app mid-operation;
- Official advice: **for web tasks, prefer browser automation—it's faster and more precise than computer use**.

## Voice Input: Hold Fn and Speak

By default, **holding the Fn key starts recording**—no need to click an icon (fallback entry: the mic icon on the right of the input box). Five steps: you hold → speak your request (no strict time limit) → the transcript appears in the input box → edit as needed → send.

- Relies on the OS built-in speech recognition engine; the language depends on installed language packs; microphone permission required;
- Working strategy: "**draft by voice, correct by keyboard**";
- v0.6.2 added live transcription; v0.6.6 auto-send via voice hotkey; v0.7.1 voiceprint isolation (keeps only your voice in noisy settings);
- Combo plays: voice + attachment (attach a PDF and say "summarize the key points and list the to-dos"); follow up by voice after delivery ("make the title bigger").

## App Snapshot (Beta)

From "spotting a problem" to "asking about it" in one step: press both Option keys together (the global shortcut is customizable) to capture a **screenshot plus readable text of the frontmost app** as conversation context. See an error on screen and want to ask the AI? One shortcut does it. Requires macOS Accessibility + Screen Recording permissions (granted once).

## Shortcut Cheat Sheet (macOS / Windows)

| Function | macOS | Windows |
| --- | --- | --- |
| Open settings | ⌘, | Ctrl+, |
| Create new task | ⌘N | Ctrl+N |
| Search all tasks | ⌘G | Ctrl+G |
| Search within current task | ⌘F | Ctrl+F |
| Send message | ↵ or ⌘↵ | Enter |
| Insert line break | ⇧↵ | Shift+Enter |
| Quick-switch tasks | ⌃Tab | Ctrl+Tab |

There's also **QuickPick**: a global quick-task window (triggered by e.g. ⌥Space or a double-tap of a modifier key) that lets you submit a task anytime without switching to the main window.

## FAQ

**Will computer use click around my machine at random?**
By default it asks before every action, so anything irreversible—sending email, submitting an order—stops for your confirmation. Switch to "auto-execute" once you trust the flow.

**Can it get past CAPTCHAs or face recognition?**
No. Those need you personally. Where it got to and where it got stuck is visible in task monitoring.

**Does voice input need a plugin?**
No. Hold Fn, speak, release—the text lands in the input box, you fix whatever needs fixing, and you send.

**For web tasks, computer use or browser automation?**
Official guidance: browser automation first. It's faster and more precise. Save computer use for desktop software with no web entry point.
