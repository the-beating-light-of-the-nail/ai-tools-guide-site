# Chapter 7: Using Connectors in WorkBuddy



**MCP** stands for the **Model Context Protocol**, an open standard introduced and open-sourced by Anthropic in late 2024. It has since become one of the hottest pieces of infrastructure in the AI world.

Here's an everyday analogy: **MCP is the "USB-C port" of the AI world.**



## Why Do We Need MCP?

In the past, if you wanted an AI assistant (Agent) to connect to external tools (GitHub, the local file system, a PostgreSQL database, Slack, etc.), developers had to write dedicated integration code for *every AI app* and *every tool*. With 10 AI apps and 10 tools, that's 100 integrations — the classic N × M integration nightmare.



With MCP, a tool developer just builds one "MCP Server" following the MCP standard (like a USB-C device), and any MCP-capable AI app (Cursor, various Agent frameworks, etc.) only needs a built-in "MCP Client" (like a USB-C port) to use it — **plug and play**. That reduces N × M complexity down to N + M.



## Core Features of MCP

- A unified standardized protocol (no more reinventing the wheel)

MCP provides one common specification (based on JSON-RPC). Whether it's reading local files, querying a database, or calling a third-party SaaS API, the AI understands and invokes everything through the same protocol logic. This dramatically lowers the barrier to tool integration in Agent development, letting developers focus on the Agent's core logic instead of writing tedious API plumbing.

- Three core capabilities

MCP lets AI not only "do things" but also "see data" and "follow the playbook." It standardizes three core primitives:

- **Tools**: let the AI take actions — run a piece of code, create a Jira ticket, write data to a database.
- **Resources (context)**: let the AI read external data — fetch a Git repo's file list or retrieve specific chunks from a vector database to use as context for answering.
- **Prompts (prompt templates)**: predefined interaction templates that let users or the AI trigger specific complex workflows in a standardized way.

- C/S architecture with strong decoupling. MCP uses a client-server architecture:

  - **MCP Host**: the AI host app you use (an IDE, an Agent platform).
  - **MCP Client**: the component inside the Host that maintains a 1:1 connection with a Server.
  - **MCP Server**: a lightweight standalone program dedicated to exposing specific tools or data.

This decoupling means you can swap the underlying model or add new data sources at any time without rebuilding the entire Agent system.

- Local-first and secure (privacy-friendly)

MCP supports communication over local standard I/O (stdio) or local HTTP. That means your MCP Server can run entirely on your own computer. Sensitive data (local code, private database contents, e-commerce backend data) never needs to be uploaded to a third-party cloud server — the AI model only receives the context it needs at inference time, which greatly improves data security for enterprise use.



## Loading a Connector

**Connectors currently supported include QQ Mail, Tencent Docs, Tencent Lexiang, Tencent Meeting, TAPD, and more.**

![](/workbuddy/07-connectors/assets/001_image_IZzfbK38Ao.png)

For example, load the Tencent Meeting connector,

![](/workbuddy/07-connectors/assets/002_image_WF3ab0WSbo.png)

![](/workbuddy/07-connectors/assets/003_image_ZssEbuMsdo.png)



## Creating a Task

"Create a meeting for me tomorrow at 3 PM,"

![](/workbuddy/07-connectors/assets/004_image_KVIJbpUZdo.png)

titled "Project Discussion," lasting 1 hour

![](/workbuddy/07-connectors/assets/005_image_FPy1bGJJZo.png)

Created successfully

![](/workbuddy/07-connectors/assets/006_image_WQ6Zb1Rero.png)



## Creating a New Connector

In the top-right corner of the connector management page, click "Custom Connector" and follow the wizard to configure MCP (including the server address and authentication method). Note that the access scope of a custom connector is up to you to configure.

![](/workbuddy/07-connectors/assets/007_image_M2itbQUceo.png)
