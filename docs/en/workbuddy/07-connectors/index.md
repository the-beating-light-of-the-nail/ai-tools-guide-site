---
description: "You finish a meeting summary in WorkBuddy and want to drop it straight into Tencent Docs, or have it set up a meeting for you tomorrow. But by default it can't touch any of those services — it sits in its own world, unable to see your mailbox or your calendar."
---

# Chapter 7: WorkBuddy Can't Reach Your Calendar? Connect It to the Tencent Tools You Already Use

You finish a meeting summary in WorkBuddy and want to drop it straight into Tencent Docs, or have it set up a meeting for you tomorrow. But by default it can't touch any of those services — it sits in its own world, unable to see your mailbox or your calendar. A Connector is the door: you authorize accounts like WeChat, Tencent Docs, and Tencent Meeting, and suddenly it can actually send messages, book meetings, and read documents instead of just talking about them.

To understand Connectors, you first need the standard behind them: **MCP**, the **Model Context Protocol** — an open standard introduced and open-sourced by Anthropic in late 2024. It has since become one of the hottest pieces of infrastructure in the AI world. Think of it as the "USB-C port" of the AI world and you've got it.

## Why Do We Need MCP?

In the past, if you wanted an AI assistant (Agent) to connect to external tools (GitHub, the local file system, a PostgreSQL database, Slack, etc.), developers had to write dedicated integration code for *every AI app* and *every tool*. With 10 AI apps and 10 tools, that's 100 integrations — the classic N × M integration nightmare.

With MCP, a tool developer just builds one "MCP Server" following the MCP standard (like a USB-C device), and any MCP-capable AI app (Cursor, various Agent frameworks, etc.) only needs a built-in "MCP Client" (like a USB-C port) to use it — **plug and play**. That reduces N × M complexity down to N + M, so nobody has to write code for each pairing. As a user, you never have to care how those hundred underlying interfaces were written.

## Core Features of MCP

- A unified standardized protocol (no more reinventing the wheel)

MCP provides one common specification (based on JSON-RPC). Whether it's reading local files, querying a database, or calling a third-party SaaS API, the AI understands and invokes everything through the same protocol logic. This dramatically lowers the barrier to tool integration in Agent development, so you can spend your energy on the core logic instead of tedious plumbing code.

- Three core capabilities

MCP lets AI not only "do things" but also "see data" and "follow the playbook." It standardizes three core primitives:

- **Tools**: let the AI take actions — run a piece of code, create a Jira ticket, write data to a database.
- **Resources (context)**: let the AI read external data — fetch a Git repo's file list or retrieve specific chunks from a vector database to use as context for answering.
- **Prompts (prompt templates)**: predefined interaction templates that let you or the AI trigger specific complex workflows in a standardized way.

- C/S architecture with strong decoupling

MCP uses a client-server architecture:

  - **MCP Host**: the AI host app you use (an IDE, an Agent platform).
  - **MCP Client**: the component inside the Host that maintains a 1:1 connection with a Server.
  - **MCP Server**: a lightweight standalone program dedicated to exposing specific tools or data.

Each of these three layers minds its own business without locking the others down. That means you can swap the underlying model or add new data sources at any time without rebuilding the entire Agent system.

- Local-first and secure (privacy-friendly)

MCP supports communication over local standard I/O (stdio) or local HTTP. That means your MCP Server can run entirely on your own computer, and your data stays on your machine. Sensitive data (local code, private database contents, e-commerce backend data) never needs to be uploaded to a third-party cloud server — the AI model only pulls the context it needs at inference time, so you don't have to worry about data quietly leaving your hands.

## Loading a Connector

Connectors currently supported include QQ Mail, Tencent Docs, Tencent Lexiang, Tencent Meeting, TAPD, and more. To hook up an existing connector, follow these steps:

![Connector list: QQ Mail, Tencent Docs, Tencent Meeting and more](/workbuddy/07-connectors/assets/001_image_IZzfbK38Ao.png)

For example, to load the Tencent Meeting connector, follow the prompts:

![Loading the Tencent Meeting connector step by step](/workbuddy/07-connectors/assets/002_image_WF3ab0WSbo.png)

![Authorizing the Tencent Meeting connector](/workbuddy/07-connectors/assets/003_image_ZssEbuMsdo.png)

## Creating a Task

Now try an instruction: have it "create a meeting for me tomorrow at 3 PM," titled "Project Discussion," lasting 1 hour.

![Asking it to create a meeting for 3 pm tomorrow](/workbuddy/07-connectors/assets/004_image_KVIJbpUZdo.png)

![The connector reading the command and creating the meeting](/workbuddy/07-connectors/assets/005_image_FPy1bGJJZo.png)

Created successfully:

![Confirmation that the meeting was created](/workbuddy/07-connectors/assets/006_image_WQ6Zb1Rero.png)

## Creating a New Connector

Want to wire up your own business system too? Click "Custom Connector" in the top-right corner of the connector management page and follow the wizard to configure MCP (including the server address and authentication method). Keep in mind that the access scope of a custom connector is yours to configure.

![Custom connector: MCP endpoint and authentication](/workbuddy/07-connectors/assets/007_image_M2itbQUceo.png)

## FAQ

**Connector, MCP, API — I keep mixing them up. Which should I learn first?**
Start with MCP: it's the "USB-C port" standard that lets AI reach tools. A Connector is a ready-made service WorkBuddy has already packaged to that standard (WeChat, Tencent Docs, and so on). An API is a lower-level interface each vendor defines for itself; MCP puts one more unified door on top of it.

**Which connectors are supported right now?**
QQ Mail, Tencent Docs, Tencent Lexiang, Tencent Meeting, TAPD, and more. You can also click "Custom Connector" on the management page and configure MCP to reach additional services.

**Will a connector mess with my account on its own?**
It only acts inside the scope you authorized, and that scope is yours to configure. Tell it to create a meeting and it creates a meeting; anything unauthorized is out of reach. The first time, test it on something small and confirm it did only what you asked.

**Can I connect my own business system?**
Yes. Use "Custom Connector" and fill in the server address and authentication method. You decide the scope yourself — don't hand over every permission at once.

---

Next up: assign tasks straight from WeChat or Feishu — [WorkBuddy Mini Programs and the IM Assistant →](/en/workbuddy/08-im-assistant/)
