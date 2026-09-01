# IM Channels: Command Your Computer from a Chat Window

Turn on IM channels and QoderWork plugs into the chat tools you already use. The official one-line principle: **"answers go back where the request came from"**—a message sent over IM gets its result in that same chat window; results of tasks created on the desktop stay on the desktop and are never pushed to IM.

> Official docs: [docs.qoder.com/zh/qoderwork/im-channels](https://docs.qoder.com/zh/qoderwork/im-channels)

## Connecting the Platforms

| Platform | How to connect |
| --- | --- |
| **DingTalk** | Scan a QR code to register and bind the app (refresh if the code expires) |
| **Feishu / Lark** | Scan a QR code—the app is created automatically with permissions and event callbacks configured |
| **WeChat** | Scan to authorize, "ready to use instantly" |
| **WeCom** | Quick binding (QR scan recommended) or manual setup (create a bot in the admin console, fill in Bot ID and Secret) |
| **Slack** | Enter a Bot Token (starts with xoxb-) + App-Level Token (starts with xapp-) → test the connection |
| **WhatsApp** | Scan a QR code from your phone to bind |

## Access Policy: Open or Paired

- **Open mode**: anyone and any group can talk to the bot directly;
- **Paired mode**: conversations work only after you approve them (per conversation: approve a DM and that user can chat; approve a group and all its members can chat).

For personal use, paired mode is the sensible default—it stops colleagues from casually burning through your Credits.

## The Desktop App Remains the Control Center

Every IM conversation is mirrored on the desktop as a **separate session window with fully isolated context**. From the desktop you can: check progress, take over operations, and adjust MCP/Skill/connector settings (which apply to all IM sessions).

## /bind: Routing Messages to a Specific Task

You can manage task bindings right from IM:

```text
/bind          list the tasks available for binding
/bind 2        bind the task numbered 2
/unbind        unbind
```

Once bound, IM messages are forwarded straight to that task, and replies sync back to IM in real time. Prerequisites: IM channels enabled + the task exists on the desktop. Message order is guaranteed: send several in a row and they're handled in order—nothing dropped, nothing shuffled.

## Supported Message Types

Text, images (OCR, background replacement), files (PDF/Excel/PPT/Word/CSV/TXT and more), voice (auto-transcribed), forwarded messages, and image+text combos—snap a photo of a contract or an expense receipt, toss it into the chat, and it gets processed.

## Five Typical Scenarios

| Scenario | Playbook |
| --- | --- |
| Lightweight chat on mobile | On your commute: "pull the key numbers from last quarter's East China price list" |
| Image and file handling | Photograph a contract/receipt and send: "extract the key clauses/amounts and summarize into a table" |
| Remote dispatch | Direct your home computer from your phone to run a long task and send back the deliverable |
| Scheduled result push | A scheduled task generates a daily report → auto-pushed to a DingTalk group every morning at 9 (pair with [Scheduled Tasks](/en/qoderwork/08-automation)) |
| Group collaboration | @the bot: "summarize today's discussion points and to-dos from this group" |

## Notes

- A DingTalk group's "owning organization" must match the organization where the bot was created;
- After switching from open mode back to paired mode, users not previously paired must pair again;
- "Remove configuration" wipes all information;
- Multiple channels can be enabled at once and run fully independently—no shared context.

---

Next: [Scheduled Tasks →](/en/qoderwork/08-automation)
