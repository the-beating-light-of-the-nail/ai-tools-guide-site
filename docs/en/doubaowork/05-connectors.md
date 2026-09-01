# Connectors: Start with a Small, Verifiable Task

What connectors do is straightforward: **they let Doubao Work read or call external tools**. You don't need to memorize MCP, JSON-RPC, and a pile of jargon first—start by seeing whether it can bring back real data.

## First, Understand MCP: The USB-C of the AI World

**MCP** (Model Context Protocol) is an open standard introduced and open-sourced by Anthropic at the end of 2024, and it has become one of the hottest pieces of AI infrastructure. Put simply, **MCP is the "USB-C port" of the AI world**.

Why is it needed? In the past, to connect an AI assistant to external tools (GitHub, local files, databases, Slack...), developers had to write dedicated integration code for every "AI app × tool" combination—10 apps paired with 10 tools meant 100 integrations. With MCP, a tool vendor builds one MCP Server (a USB-C device) to the standard, and an AI app ships a built-in MCP Client (a USB-C port). Plug and play—complexity drops from N × M to N + M.

## Security Boundaries

A connector's data path and security boundaries depend on its implementation, authentication method, and service provider:

- Before use, check the **connector's source, authorized account, accessible scope, and write permissions**;
- For sensitive data, follow your organization's data security requirements, and **don't assume every connector processes data locally only**.

## Loading and Creating Connectors

Doubao Work currently offers many connector types, including **WeCom, DingTalk, Tencent Meeting, Tencent Docs, Notion, Baidu Netdisk, Maps, and financial data**.

**Load a ready-made one**: on the "Skills · Connectors · Buddies" page, search (e.g., "Tencent Meeting"), click "+" on the right to add it, and complete authorization as prompted.

**Create a custom one**: on the same page, click "New" at the top-right → "New Custom Connector," then follow the guide to configure the service address and authentication method. Before authorizing, confirm the service's origin, access scope, write capability, and how credentials are stored.

## Search, Authorize, Test

Once you find a connector, first check its source, permission scope, and supported actions. Three rules of discipline: **prefer read-only over write access at first; test with dummy data before touching production data; never paste credentials into prompts.**

A minimal acceptance test—use a connected QR-code tool for one "generate + self-check" round:

```text
Using the connected QR code tool, generate a QR code for the public URL I provide.
After generating, decode it yourself once to verify the decoded result exactly matches the original URL, then deliver the image together with the verification result.
Do not shorten, rewrite, or redirect the URL.
```

If you're connecting an internal company system, start with a **test-environment version** of a custom connector: grant the minimum permissions, and keep human confirmation on any write or delete actions.

---

Next up: give it the "standard way of doing things"—[How to Choose and Use Skills →](/en/doubaowork/06-skills)
