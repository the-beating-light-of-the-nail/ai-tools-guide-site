---
description: "You've probably hit this wall before: you ask a chat AI to tidy up the meeting notes in Feishu, it agrees happily, and then comes back with I can't read your documents."
---

# Can't Get Doubao Work to Read Your Files? Start with One Connector Task You Can Check Yourself

You've probably hit this wall before: you ask a chat AI to tidy up the meeting notes in Feishu, it agrees happily, and then comes back with *I can't read your documents*. That's where you stall—your data lives in other tools, and the AI can't reach it. Connectors exist to close that gap.

What a connector does is straightforward: it lets Doubao Work read or call external tools. You don't need to memorize MCP, JSON-RPC, and a pile of jargon first—start by seeing whether it can bring real data back. One goal for this task: hook up a connector, run it once, and check the result with your own eyes.

## First, Understand MCP: The USB-C of the AI World

**MCP** (Model Context Protocol) is an open standard introduced and open-sourced by Anthropic at the end of 2024, and it has become one of the hottest pieces of AI infrastructure. Put simply, **MCP is the "USB-C port" of the AI world**.

Think back to the years before USB-C: the mouse had one kind of port, the printer another, and switching computers meant nothing fit. Connecting AI to external tools used to look exactly like that—GitHub, local files, databases, Slack... developers had to write dedicated integration code for every "AI app × tool" pair. Ten apps with ten tools meant 100 integrations, and the thought alone is exhausting.

With MCP, most of that pain disappears. The tool vendor builds one MCP Server to the standard (the USB-C device), the AI app ships a built-in MCP Client (the USB-C port), and the two plug together. Complexity drops from N × M to N + M, so you stop worrying about every pair.

## Security Boundaries

A connector isn't safe just because you clicked it. Its data path and security boundaries depend on how it's implemented, what authentication it uses, and who provides the service. Check these before you start:

- **Connector source, authorized account, accessible scope, write permissions**—go through all four, one at a time;
- For sensitive data, follow your organization's security requirements, and **don't assume every connector processes data locally only**.

## Loading and Creating Connectors

Doubao Work ships with a good set of ready-made connectors: **WeCom, DingTalk, Tencent Meeting, Tencent Docs, Notion, Baidu Netdisk, Maps, and financial data**. Enough for everyday work.

### Load a ready-made one

Open the "Skills · Connectors · Buddies" page and type the tool name into the search box—say, "Tencent Meeting." Click "+" on the right to add it, then follow the prompts to finish authorization.

### Create a custom one

If the list doesn't have what you need, click "New" at the top right of the same page → "New Custom Connector," and follow the guide to fill in the service address and authentication method. Before authorizing, confirm once more: is the service source trustworthy, how wide is the access scope, can it write, and how are the credentials stored?

## Search, Authorize, Test

Once you find a connector, don't connect it right away. Check who provides it, how far its permissions reach, and which actions it supports. Three rules of discipline: **prefer read-only over write access at first; test with dummy data before touching production data; never paste credentials into prompts.**

The fastest way to prove it really works is to hand it one small job—a "generate + self-check" round with a connected QR-code tool:

```text
Using the connected QR code tool, generate a QR code for the public URL I provide.
After generating, decode it yourself once to verify the decoded result exactly matches the original URL, then deliver the image together with the verification result.
Do not shorten, rewrite, or redirect the URL.
```

If you're connecting an internal company system, build a **test-environment version** of a custom connector first: grant the minimum permissions, and keep human confirmation on any write or delete actions. Don't let it decide things on its own.

## FAQ

**Will a connector secretly touch the data in my account?**
Not freely—but don't get careless either. Before connecting, read the write permissions and access scope, and stay read-only until you actually need write. Handle sensitive data per your company's security rules, and don't assume it all stays local.

**MCP sounds deep. Do I need to understand it?**
No. Remembering "USB-C for AI" is enough: the tool side makes one port, the AI side makes one port, and they plug together. Forgetting the term won't stop you from connecting a thing.

**The tool I need isn't in the list. Now what?**
First check "Skills · Connectors · Buddies" for a ready-made one. If there's none, go to "New Custom Connector" and fill in the service address and authentication method. For internal company systems, start with a test-environment version and grant the smallest scope you can.

**How do I know the connector is really connected?**
Don't just take its word for "connected." Hand it a small job like the one above, make it bring real data back and self-check, and confirm the result matches yourself.

**Will the credentials I enter during authorization leak?**
Check how credentials are stored before you authorize, and never paste your account or password straight into a prompt. Once a credential sits in a prompt, it's sitting in the conversation—that's a hard line.

---

Next up: give it the "standard way of doing things"—[How to Choose and Use Skills →](/en/doubaowork/06-skills)
