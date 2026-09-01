# Advanced: MCP and Cloud Runtime Environments

Use MCP for external systems the plugins don't cover, and run tasks in a cloud runtime when your local machine can't handle them.

> Official docs: [work_mcp-overview](https://docs.trae.cn/work_mcp-overview) | [work_set-up-the-remote-environment](https://docs.trae.cn/work_set-up-the-remote-environment)

## MCP: The USB Port of the AI World

MCP (Model Context Protocol) is a protocol that lets large models access custom tools and services. In TraeWork, the agent acts as an **MCP client**, requesting tools from MCP Servers.

Workflow: 1) add an MCP Server yourself → 2) attach it to a custom agent → 3) the agent calls its tools.

**Three transport types**:

| Type | Location | Notes |
| --- | --- | --- |
| stdio | Local | Started from a local command line |
| HTTP (SSE) | Local / remote | The traditional remote approach |
| Streamable HTTP | Local / remote | An upgraded SSE; recommended |

Pick one runtime: local (local tasks only, desktop only) or cloud (cloud tasks and projects pulled from GitHub).

**A responsibility boundary you must know**: MCP Servers are built and maintained by third parties. TraeWork does not review or endorse them and is not responsible for their behavior, failed calls, or returned data. Before connecting, check carefully what permissions it asks for—same principle as [the MCP explanation in the WorkBuddy section](/en/workbuddy/11-ai-work-system/): **MCP solves "how to connect"; whether what you connect to is safe is your responsibility**.

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

**Limitations**: custom cloud runtime environments work **only in Code mode**; custom container images and network policies aren't supported yet. For most office scenarios, the default cloud environment is enough—no need to build your own.

## Local vs. Cloud Tasks: A Decision Table

| Situation | Choice | Why |
| --- | --- | --- |
| Need to work with local files | Local | The cloud can't touch your hard drive |
| Involves sensitive data | Local (+ Privacy Mode) | Data never leaves the machine |
| Long-running; don't want to tie up your computer | Cloud | Isolated execution in a cloud sandbox |
| Needs a specific dependency environment | Cloud (custom environment) | Unified runtime |
| Started from the web | Cloud only | The web has no local environment |
| Scheduled tasks | Cloud is more reliable | Doesn't depend on your computer being on |
