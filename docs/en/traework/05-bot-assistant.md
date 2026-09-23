---
description: "The most tedious part of your day is probably hauling material out of your chat tool, feeding it to an AI, waiting for an answer, then hauling it back. The Office Assistant flips that around."
---

# How Do You Use the Office Assistant? Assign Work Right Inside Feishu and WeChat

The most tedious part of your day is probably hauling material out of your chat tool, feeding it to an AI, waiting for an answer, then hauling it back. The Office Assistant flips that around: the AI moves into Feishu and WeChat, and one `@TraeWork` in a group chat is enough to get the job started.

> Official docs: [docs.trae.cn/work_bot-assistant](https://docs.trae.cn/work_bot-assistant)

## Binding Feishu

1. Click "Office Assistant" in the left navigation;
2. In the management panel, click "Bind" next to Feishu; a QR code appears;
3. Scan it with Feishu on your phone to open the "Create Feishu Agent App" page, then tap "Create Now";
4. Follow the prompts to create the app (you can customize the avatar and name; the default name is TraeWork). Once created, it's auto-approved and published;
5. Tap "Open App"—it now appears in your Feishu message list, and you can also find it in Feishu's "Apps" center.

## Binding WeChat

1. In the same "Office Assistant" management panel, bring up the QR code;
2. Scan it with WeChat on your phone to open the "Connect OpenClaw to WeChat" page;
3. Tap "Connect"—the "WeChat ClawBot" plugin is enabled automatically and joins your chat list (find it in WeChat's "Features" center).

WeChat Work and DingTalk are officially listed as "coming soon."

## How to Use It

One-on-one chat is the simplest: message the app directly, something like "Tell me what this document is mainly about."

In a group chat, `@TraeWork` plus your message gets it working right there in front of everyone. Once you have a result, keep asking follow-ups until you're satisfied.

Four high-frequency scenarios (prompts you can copy as-is):

```text
[Document summary] Tell me what this document is mainly about.

[Weekly report] Polish my work summary into a weekly report structured as this week's
conclusion, key progress, and next week's plan. State the conclusion in one sentence:
the single most report-worthy result of the week. List 3-5 key progress items, covering
what was done and what outcome it produced. Write 2-3 next-week plan items, clearly
stating what to push forward and what support is needed.

[Email drafting] Draft an email to Mr. Zhao, our supplier: ask about the shipping status
of the last batch of office equipment. It was due August 10 but there's no tracking
information yet; ask him to reply with an estimated date before end of day. Keep the
tone polite and clear, not pushy.

[Write to Feishu] Save the weekly report you just produced into a Feishu document and
send it to the reporting group.
```

> Scenario material adapted from hands-on testing of the TraeWork office assistant ([K Jie Yanjiushe](https://zhuanlan.zhihu.com/p/2071317142574724109)); in testing, the weekly report took about a minute to generate.

## Limitations You Must Know

1. **Desktop app only**; the first connection must be initiated in the desktop app (mobile works after connecting);
2. **In group chats, only the creator can use the Office Assistant**; other members can only view the message history;
3. Messages sent in the desktop app's chat panel **are not synced** to the messaging tool;
4. Conversations across multiple messaging tools **don't merge context automatically**—for a given task, continue in the original conversation (the icon next to the username shows where a message came from);
5. By default it cannot directly operate Feishu Docs / Calendar / Base; you need to set up [external app authorization](/en/traework/06-plugins-integrations) first;
6. A sleeping computer may interrupt message delivery, so keep an eye on it.

## Two Security Switches

In the "Manage Connections > Channel Connections" panel, watch these two switches:

- **Keep computer awake**: With this on, the computer stays awake from the moment a message arrives until the reply is generated—recommended;
- **Full access**: ⚠️ This mode **turns off sandbox protection and all approval checks**, letting TraeWork perform arbitrary operations directly on the host machine. Do not enable it unless you fully understand the consequences.

## FAQ

**Does the first binding have to happen in the desktop app?**
Yes. You have to open it in the desktop app for the initial connection; mobile only works afterward. The web version can't do this step.

**Can other people in the group @ it too?**
No. Only the creator can assign work through the Office Assistant in a group chat; everyone else sees the message history. If a colleague wants something added, they'll have to route it through you.

**Why can't it touch my Feishu Docs?**
The permission is off by default. To read or write Feishu Docs, Calendar, and Base, set up [external app authorization](/en/traework/06-plugins-integrations) first—it won't work until you do.

**Should I ever turn on "Full access"?**
Leave it off. It disables sandbox protection and every approval check, letting TraeWork run anything on your machine. Keep the default unless you know exactly what is happening at every moment.

**What happens if my computer falls asleep?**
Message delivery can get interrupted. Turn on "Keep computer awake," especially if you expect it to answer at any hour.

---

Next: [Plugins and External App Authorization →](/en/traework/06-plugins-integrations)
