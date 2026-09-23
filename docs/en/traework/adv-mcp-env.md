---
description: "When a plugin can't reach the external system you need, MCP is what you fall back on. When your laptop can't handle the workload, the cloud runtime is where you send it."
---

# How Do You Connect MCP and the Cloud Runtime? Private Systems and Heavy Jobs

When a plugin can't reach the external system you need, MCP is what you fall back on. When your laptop can't handle the workload, a cloud runtime environment is where you send it. This chapter covers wiring up both.

> Official docs: [work_mcp-overview](https://docs.trae.cn/work_mcp-overview) | [work_set-up-the-remote-environment](https://docs.trae.cn/work_set-up-the-remote-environment)

## MCP: The USB Port of the AI World

MCP (Model Context Protocol) is a protocol that lets large models access custom tools and services. In TraeWork, the agent acts as an **MCP client**, requesting tools from MCP Servers.

Your flow has three steps: 1) add an MCP Server yourself → 2) attach it to a custom agent → 3) the agent calls its tools.

**Three transport types**—pick by scenario:

| Type | Location | Notes |
| --- | --- | --- |
| stdio | Local | Started from a local command line |
| HTTP (SSE) | Local / remote | The traditional remote approach |
| Streamable HTTP | Local / remote | An upgraded SSE; recommended |

For the runtime, choose one: local (local tasks only, desktop only) or cloud (cloud tasks and projects pulled from GitHub).

**A responsibility boundary you must see clearly before connecting**: MCP Servers are built and maintained by third parties. TraeWork does not review or endorse them and is not responsible for their behavior, failed calls, or returned data. Before connecting, check carefully what permissions it asks for—same principle as [the MCP explanation in the WorkBuddy section](/en/workbuddy/11-ai-work-system/): **MCP solves "how to connect"; whether what you connect to is safe is your responsibility**.

> Advice for office users: prefer the ready-made connections in the official plugin marketplace (Feishu, Tencent Docs, etc.); set up your own MCP only when you truly have a private system to reach.

## Cloud Runtime Environments

A cloud-based environment for code analysis, execution, and debugging by cloud agents, with unified runtime and dependency management—no more "but it works on my machine." Suited to tasks that need isolated execution, project dependency management, or complex debugging collaboration with AI.

**Creating one**:

1. Avatar in the bottom-left > Settings → "Cloud Runtime Environments" in the left panel;
2. Click "Create" in the top-right, fill in the parameters, and confirm.

**Key settings**:

| Setting | Details |
| --- | --- |
| Preinstalled dependencies | Base image + language versions (Python 3.10–3.14, Node.js 18–24, Go, Rust, Java 11–25, Ruby, PHP, Swift) |
| Environment variables | Regular (plaintext, up to 100) / sensitive (stored encrypted via KMS, up to 50) |
| Run scripts | install (≤10KB, blocking), start (≤10KB, non-blocking), terminals (up to 10) |
| Network whitelist | Common sources such as npm, pypi, maven, github, docker |

Where to use it: web tasks always run in the cloud; in the desktop app, switch to "Cloud" at the bottom-left of the input box, then pick the environment.

**Limitations to note**: custom cloud runtime environments work **only in Code mode**; custom container images and network policies aren't supported yet. For most office scenarios, the default cloud environment is enough—no need to build your own.

## Local vs. Cloud Tasks: A Decision Table

| Situation | Choice | Why |
| --- | --- | --- |
| Need to work with local files | Local | The cloud can't touch your hard drive |
| Involves sensitive data | Local (+ Privacy Mode) | Data never leaves the machine |
| Long-running; don't want to tie up your computer | Cloud | Isolated execution in a cloud sandbox |
| Needs a specific dependency environment | Cloud (custom environment) | Unified runtime |
| Started from the web | Cloud only | The web has no local environment |
| Scheduled tasks | Cloud is more reliable | Doesn't depend on your computer being on |

## FAQ

**How do MCP and plugins relate?**
MCP is for the external systems plugins can't reach. MCP Servers are built by third parties and TraeWork doesn't review them, so read what permissions it wants before you connect.

**Is the cloud environment Code mode only?**
Yes. Custom cloud runtime environments work only in Code mode, and custom container images and network policies aren't supported yet. For ordinary office work the default cloud environment covers you—you don't need to build one.

**Local or cloud—how do I choose?**
Working with local files or sensitive data: local, plus Privacy Mode. Long-running jobs, specific dependencies, anything launched from the web, and scheduled tasks: cloud is steadier.

**What am I responsible for once I connect an MCP server?**
MCP solves "how to connect." Whether what you connected to is safe lands on you. Before pointing it at a private system, look hard at the permissions it requests.

**Can the web version run local tasks?**
No. The web version has no local environment, so anything you launch there runs in the cloud. To move files around on your own machine, you need the desktop app.
