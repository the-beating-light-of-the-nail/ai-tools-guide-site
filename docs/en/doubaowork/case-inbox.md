---
description: "You open your mailbox and the unread has already filled a screen: work notices, project updates, collaboration requests, and every kind of CC mixed together. Reading them one by one takes forever, and you still miss the few genuinely urgent ones. Which need a reply today, which can wait, which are just FYI—you can't really tell anymore."
---

# Inbox Overloaded? Let the AI Pick Out What You Must Handle Today

You open your mailbox each morning and the unread has already piled up a full screen: work notices, project updates, collaboration requests, and every conceivable CC mixed together. Going through them one by one eats your time, and you still miss the two or three that genuinely matter. Which ones need an answer today, which can slide, which are only FYI—honestly, you can't sort that out yourself anymore. This page hands the inbox to the AI for prioritization first, so your attention goes to what actually needs action.

> Scenario: unread email piling up. Let the AI rank priorities and draw processing windows first, saving your attention for what truly needs action.

## Step 1: Authorize the Mailbox via a Connector

Only after connecting the mailbox can Doubao Work read real email and run searches or cleanups.

1. Click "Skills · Connectors · Mates", find **NetEase Mail**, and click "+";
2. Complete the mailbox authorization (for how to get an authorization code, see the [NetEase Mail client authorization code guide](https://help.mail.163.com/faqDetail.do?code=d7a5dc8471cd0c0e8b4b8f4f8e49998b374173cfe9171305fa1ce630d7f67ac2a5feb28b66796d3b));
3. Once authorized, expand the capability list and confirm that **read, search, and send** operations are available;
4. Before the real cleanup, read a small batch of email to confirm the account, folders, and time range are right—with the test passing, move on to sorting and the daily digest.

## Step 2: Turn the Inbox into a Daily Digest

The digest's value is turning a whole page of email into **a few actionable judgments**:

```text
Read the email received in the last 7 days.
Sort it into five buckets: must handle today, handle this week, waiting on
others, FYI only, and suspected risk.
```

After submission, the system reads the past seven days of email and splits it into five buckets by action time and status. At this stage it **only sorts—nothing is sent, nothing is modified**. Even if the account has little recent mail, an empty result still verifies that the connector reads correctly and that the time range and sorting rules work.

## Send with Restraint

The connector can send email too, but work email involves wording, recipients, attachments, and promised timelines—**generate a draft first, confirm, then send**. Don't let it fire messages off on your behalf; that's how the wrong person or the wrong wording goes out.

---

Related: [One Meeting, from Prep to Action Items →](/en/doubaowork/case-meeting)

## FAQ

**Will the AI mess with the email in my mailbox?**

No. It works through connector authorization, and the read-only stage only sorts. Even when something needs sending, a draft comes to you for confirmation first—nothing goes out on its own.

**Is authorization a hassle? What do I need to fill in?**

Click "+" on NetEase Mail under "Skills · Connectors · Mates" and follow the prompts to authorize (the link in this page explains how to get an authorization code). After authorizing, expand the capability list and check that read, search, and send are all enabled.

**Does this still help when I have very little mail?**

Yes. Even an empty result tells you whether the connector is reading correctly and whether the time range and sorting rules take effect. It's a dry run before real use.

**Do I still need to read the five buckets myself?**

Yes. It sorts the mail, and you work through "must handle today" one by one, pushing the rest down the queue. The final call stays with you.

**What counts as "suspected risk" in the digest?**

Mail it thinks you should look at: bounce notices, unusual-login alerts, unfamiliar senders with attachments. Give that bucket one deliberate scan so you don't miss a security problem.
