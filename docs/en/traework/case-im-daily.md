# Case Study: Four Daily Routines with AI in a Chat Window

> Adapted from K Jie Yanjiushe's hands-on testing of the TraeWork office assistant (["TraeWork Launches the Office Assistant"](https://zhuanlan.zhihu.com/p/2071317142574724109), August 2026). For setup, see [Office Assistant](/en/traework/05-bot-assistant)—this chapter is all about how to use it every day once it's bound.

## The Core Idea

The most exhausting part of using AI isn't the generation—it's **moving your work materials into the AI**: finding files, tidying them up, uploading, explaining context. The Office Assistant flips that: the AI comes into your chat window. Reference a Feishu doc, forward an email, drop a link—and it gets to work on the spot.

## Routine 1: Speed-Reading a Document

You receive a document and have no idea what's in it (say, an intern's "Weekly Internship Work Summary"). Just forward it to the assistant:

```text
Tell me what this document is mainly about.
```

In testing, it returned four categories of takeaways—file and material organization, spreadsheet processing, day-to-day communication and errands, learning and review—so you can decide first whether it's worth a close read.

## Routine 2: A Follow-up Email (Chinese First, Then English)

```text
Draft an email to our supplier Mr. Zhao (koi@cakegrowth.com): ask about the shipping
status of the last batch of office equipment. It was due August 10, 2026, but we
haven't received any tracking information yet. Ask him to reply with estimated
shipping and delivery times before end of day. Polite and clear tone, not pushy.
```

Tip: **confirm the Chinese version is right first, then ask for the English version**—the two-step approach is far more reliable than generating a foreign-language draft in one shot.

## Routine 3: Team Collaboration in a Group

Add the Office Assistant to a project group. For now, **only the creator can @ it to do work in a group chat** (other members can view the message history), but the common patterns already work:

- Creator: `@TraeWork turn the decisions just made into a to-do list and write it to Base`;
- Members: check the AI's output and ask follow-ups on the original message (relayed through the creator).

## Routine 4: Mobile Command from the Road

After pairing with mobile (see [Install, Sign In, and Sync Across Clients](/en/traework/02-install)):

- Send instructions from Feishu on your phone during the commute; if your computer at home is offline, the task automatically switches to the cloud;
- Lightweight jobs like "summarize today's meeting minutes and remind me at 9 a.m. tomorrow to follow up on the to-dos" are all handled from your pocket.

## Efficiency Comparison

| Task | The old way | The chat-window way |
| --- | --- | --- |
| Read a 10-page document | 20 minutes of reading | Forward + one sentence → summary in 1 minute |
| Write a weekly report | Digging through notes, wrestling with wording | Reference work records + template → first draft in 1 minute |
| Follow-up email | Endless Chinese-English revisions | Confirm in Chinese → polished English draft |
| Pre-standup roundup | Manual copy-paste | Scheduled task + group push |

## Caveats (Worth Repeating)

- First-time binding must be initiated in the **desktop app**;
- A sleeping computer interrupts message delivery; enable "Keep computer awake";
- Keep the "Full access" switch off by default;
- Be careful sharing sensitive documents: by default, conversations may be used for product improvement; turn on [Privacy Mode](/en/traework/08-computer-browser) when needed.
