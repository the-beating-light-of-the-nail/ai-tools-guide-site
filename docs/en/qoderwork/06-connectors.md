# Connectors and MCP

Connectors are the bridge between QoderWork and external systems—once enabled, the AI can operate the browser just like you, read and write your system calendar and email, and hook into Microsoft 365 and DingTalk. MCP, in turn, is the open protocol for plugging in even more external tools.

> Official docs: [connectors](https://docs.qoder.com/zh/qoderwork/connectors) | [DingTalk MCP walkthrough](https://docs.qoder.com/zh/qoderwork/mcp-walkthrough)

## Connector Overview

One entry point: left navigation → Extensions → Connectors (with "Marketplace" / "Installed" tabs). **Everything is off by default**—QoderWork gains access only after you explicitly complete authorization and configuration.

| Category | Connectors |
| --- | --- |
| Built-in | **Browser** (web navigation, data extraction, form filling), **macOS apps** (Reminders, Calendar, Notes, Mail, Contacts), **Microsoft 365** (Outlook / Calendar / Contacts / To Do / OneNote / OneDrive) |
| Marketplace | DingTalk, Feishu, Notion, Linear, Todoist, Canva, Supabase, Vercel, Neon, Slack, Figma, Google Calendar, Google Maps, LINE, Qichacha, and more |

## Setup Steps (Three High-Frequency Examples)

**Browser connector** (QoderWork's signature capability): on the Connectors page find "Browser" and click + → "Install in Chrome Web Store" for the extension → status shows "Extension connected". It reuses your real browser login state—pulling data or filling forms in the background never asks you to sign in again.

**Microsoft 365**: click "Connect Microsoft Account" → sign in via the browser popup → confirm authorization.

**DingTalk**: "Marketplace" tab → DingTalk card → "Sign in to DingTalk Account" to authorize.

⚠️ Key limitation: **after toggling a connector you must start a new conversation task for it to take effect**—don't keep asking in the old conversation why nothing happens.

## MCP: The USB Port of the AI World

MCP (Model Context Protocol) is an open protocol that standardizes how AI applications connect to external tools. To add one: "+ Add" at the top right of the Connectors page, with two options:

1. **Paste a JSON config** to import (recommended);
2. Fill in fields manually.

Two server types: **Streamable HTTP / SSE** (remote-hosted, accessed by URL—the former recommended); **STDIO** (launched from a local command line, requires Node.js/Python). Example JSON structure:

```json
{
  "mcpServers": {
    "DingTalk Docs": {
      "type": "streamable-http",
      "url": "https://mcp-gw.dingtalk.com/mserver/...key=..."
    }
  }
}
```

## Walkthrough: Adding a DingTalk MCP (Four Steps)

DingTalk runs its own MCP marketplace—a good fit for teams already collaborating on DingTalk:

1. Open [mcp.dingtalk.com](https://mcp.dingtalk.com) and sign in, then search by keyword (entries tagged "Platform Picks" are officially recommended);
2. On the MCP detail page, copy the JSON Config from the "Use MCP" area on the right;
3. In QoderWork, Connectors page → "+ Add" → paste the JSON → "Import via JSON" (DingTalk MCPs generally need no extra headers—leave that blank);
4. Verify: **a green dot to the left of the server name means it's connected**. Then just try it in a conversation:

```text
Find the document titled "2026 Q3 Marketing Plan"
Check the weather in Beijing (Amap MCP)
Create a calendar event for tomorrow at 10 a.m. (DingTalk Calendar MCP)
```

Frequently used DingTalk MCPs: DingTalk Docs, DingTalk Calendar, DingTalk Contacts, DingTalk To-dos, DingTalk Group Chat, Amap, DingTalk AI Sheets.

## Cautions and Troubleshooting

- The browser connector only supports **Chromium-based browsers** (Safari / Firefox not yet supported); avoid manually touching the managed tabs while a task is running;
- Enabling macOS apps for the first time triggers a system permission prompt—if you dismiss it by mistake, re-allow it under System Settings → Privacy & Security;
- CAPTCHAs, SMS verification, and QR-code logins need a human to take over;
- If an MCP won't connect, check in order: JSON/URL integrity → network → extra authorization requirements → remove and re-add.

**Best practices**: put URLs directly in the prompt; combine connectors with local file access; for complex flows, run it manually first, then solidify it into a Skill or a scheduled task.

> For the general principles and security boundaries of MCP (how it relates to APIs, "how to connect" versus "is connecting safe"), see the WorkBuddy section's [Understanding AI Work Systems](/en/workbuddy/11-ai-work-system/).

---

Next: [IM Channels: Command Your Computer from a Chat Window →](/en/qoderwork/07-im-channels)
