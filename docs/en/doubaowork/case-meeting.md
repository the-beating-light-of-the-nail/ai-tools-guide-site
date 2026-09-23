---
description: "The meeting ends, a few 'let's follow up on that' lines sit in the group chat, and when you later ask who owns it and when it's due, everyone has to dig back through the notes."
---

# The Meeting Ended—So Why Isn't Anything Moving? Turn Notes into an Owner, a Deadline, and Something You Can Check

You just wrapped a meeting. A few "let's follow up on that" lines are sitting in the group chat. Ask afterward who owns it and when it's due, and everyone has to dig back through the record. Which remarks actually became decisions, which are still just ideas, and which tasks need to go to a specific person right now? Leave those unsorted and the minutes stop at "we noted it," while the work just hangs there. This page walks you through two prompts that turn one meeting from a raw transcript into an action list people can actually run.

> Scenario: The meeting ends, but the follow-through doesn't always happen. Use AI to turn "it's been noted" into "someone owns it, there's a deadline, and it's checkable."

## One Meeting, Three Stages

A meeting breaks into three stages: **before**, get everyone into the discussion with the same background; **during**, preserve the raw record; **after**, hand decisions and action items to specific people. Minutes are just the middle step—they also need to connect last week's tasks and the next check-in.

Throughout this workflow, the model is good at **organizing, comparing, and extracting**; owners, deadlines, reasons for delay, and final decisions still rest on the source material. Where the material is ambiguous, leaving a "to confirm" flag is safer than filling in a complete answer.

## Turn the Transcript into Standard Meeting Minutes

Transcripts are full of filler words, repeated discussion, and tangents—compress them carelessly and the conclusions get compressed away too. Start by identifying the agenda items, then separately extract the discussion basis, firm decisions, action items, and items still in dispute:

```text
Please read the attached product-weekly-meeting-transcript.docx and turn it into formal meeting minutes.
Remove filler words, repetitions, and content unrelated to the meeting, but do not change what any speaker meant to say.
The minutes must include the meeting topic, date, attendees, background, agenda discussion, clear conclusions,
confirmed decisions, action items, and items pending confirmation.
Only fill in owners and deadlines that are explicitly stated in the original text.
Mark anything the original text doesn't specify as "to be confirmed"—don't guess.
```

When it runs, the system strips filler and repetition, then organizes everything into meeting background, agenda items, conclusions, decisions, action items, and open questions. If what you have is **raw audio**, you can transcribe it first and then organize it with the same structure—this saves manual transcription, but the transcript should still be checked against the meeting context.

> A reminder: names, product names, numbers, and negations easily skew conclusions. Before formal distribution, listen back to the relevant clips to confirm the system didn't turn "a discussed opinion" into "a final decision."

## Track Last Meeting's Tasks

A single set of minutes answers "what happened this time"; only two weeks of material side by side can answer "did things actually move forward." When cross-checking, reuse last week's action item names item by item, then look through this week's transcript for **evidence of completion, delay explanations, or cancellation decisions**—a task that's never mentioned can't be marked done by default:

```text
Please read both last-weeks-meeting-minutes.docx and this-weeks-meeting-transcript.docx.
Go through last week's action items one by one and classify each one's status based on this week's meeting:
completed, in progress, delayed, cancelled, or not mentioned.
For delayed tasks, extract the reason for the delay, the new deadline, and the owner;
list newly added tasks from this week separately.
Finally, produce two sections: "last week's task tracker" and "this week's new action items."
```

The system checks each of last week's action items against this week's content, then lists this week's new tasks separately—keeping the two groups apart so old tasks don't blend into new ones. When reviewing the output, check: does every old task have a status; do delayed tasks include a reason, a new deadline, and an owner; and do the new action items genuinely come from this week's meeting?

---

Related scenario: [One Word Document, from Proofreading to Print-Ready Delivery →](/en/doubaowork/case-word)

## FAQ

**Can Doubao Work read a meeting recording directly?**

Give it the raw audio and it will transcribe first, then organize the transcript into the minutes structure. Transcription saves you the typing, but you still need to listen back against the meeting context—especially for names and negated statements.

**Why do owner and deadline so often come back as "to be confirmed"?**

Because only what the source explicitly states can be filled in. Where your material is unclear, marking it "to be confirmed" is safer than a guess. Go back and ask the person involved; don't let the minutes decide for you.

**How do I cross-check two weeks of minutes without missing anything?**

Hand it last week's minutes and this week's transcript together and have it judge each item's status. A task this week never mentions can't be counted as done automatically—watch that one closely.

**Will it write a discussed opinion up as a final decision?**

It can. Before you distribute the minutes, listen back to the relevant clip and confirm it didn't turn "someone mentioned it" into "it's settled." Names, numbers, and negations are where this happens most.

**What else should I check before sending the minutes out?**

Confirm that every action item has an owner and every delayed item has a new deadline. The value of minutes isn't covering everything—it's that afterward someone actually picks it up, delivers, and gets checked.
