# QoderWork Scenario Cheat Sheet

A dictionary-style index organized by "what do I want to do".

## Capabilities at a Glance

| I want to... | Use | Details |
| --- | --- | --- |
| Try the capabilities quickly for free | New task + starter tasks like desktop cleanup | [Your First Task](/en/qoderwork/03-first-task) |
| Let the AI read/write local files directly | Working folder | [Working Folders](/en/qoderwork/04-files) |
| Give the AI a "standard way of working" | Skill | [Skills and Expert Kits](/en/qoderwork/05-skills) |
| Wrap a repeated flow into one phrase | /create-skill | [Creating Skills Through Conversation](/en/qoderwork/adv-skill-create) |
| Have the AI drive web pages (with login state) | Browser connector | [Connectors and MCP](/en/qoderwork/06-connectors) |
| Connect DingTalk/Feishu/WeChat for remote command | IM channels | [IM Channels](/en/qoderwork/07-im-channels) |
| Run tasks automatically on a schedule | Scheduled tasks | [Scheduled Tasks](/en/qoderwork/08-automation) |
| Have the AI operate desktop software | Computer use | [Computer Use and Voice Input](/en/qoderwork/adv-computer-use) |
| Give tasks by speaking | Hold-Fn voice input | [Computer Use and Voice Input](/en/qoderwork/adv-computer-use) |
| Make posters/landing pages/UI prototypes | Design workbench | [The Three Workbenches](/en/qoderwork/adv-workbenches) |
| Make a deck | Slides workbench (outline confirmed first) | [The Three Workbenches](/en/qoderwork/adv-workbenches) |
| Write long-form pieces/reports | Writing workbench (traceable versions) | [The Three Workbenches](/en/qoderwork/adv-workbenches) |
| Have the AI remember my preferences | Awareness mode | [Awareness, Costs, and the Secure Working Environment](/en/qoderwork/adv-memory-cost) |
| Connect to private systems | MCP (JSON import) | [Connectors and MCP](/en/qoderwork/06-connectors) |
| Run sensitive tasks in isolation | Secure working environment | [Awareness, Costs, and the Secure Working Environment](/en/qoderwork/adv-memory-cost) |

## By Role

| Who you are | Starting point | Next level |
| --- | --- | --- |
| Complete beginner | [Your First Task](/en/qoderwork/03-first-task) | [Working Folders](/en/qoderwork/04-files) |
| Admin/secretary | [File organization case](/en/qoderwork/case-file-organize) | [Scheduled Tasks](/en/qoderwork/08-automation) |
| Finance | Receipt-archiving template ([Bulk Document Processing](/en/qoderwork/case-office-docs)) | Automate the expense summary on a schedule |
| Operations/e-commerce | [Browser automation case](/en/qoderwork/case-browser) | Scheduled daily report + IM push |
| Data analysis | [Data analysis case](/en/qoderwork/case-data-report) | Tiered models to control cost |
| HR | Résumé screening template ([Bulk Document Processing](/en/qoderwork/case-office-docs)) | Turn fit-scoring rules into a Skill |
| Legal/tax | Built-in expert kits (corporate legal / tax & accounting) | [Creating Skills Through Conversation](/en/qoderwork/adv-skill-create) |
| Content creator | [The Three Workbenches](/en/qoderwork/adv-workbenches) | [Skill ecosystem](/en/qoderwork/05-skills) |
| Heavy DingTalk user | [DingTalk MCP](/en/qoderwork/06-connectors) + [IM Channels](/en/qoderwork/07-im-channels) | — |

## Five Prompting Pitfalls (Official Docs)

| ❌ Pitfall | ✅ Fix |
| --- | --- |
| Cramming every need into one sentence | Be specific: goal + format + constraints |
| Moving on without checking results | Errors compound downstream; spot-check every step |
| Mixing multiple topics in one task | One task, one topic; start fresh for anything unrelated |
| Never using attachments | "@file + one sentence" beats a long paragraph |
| Not stating the purpose | Say "who it's for and what it's for"—the output lands better |

## Hard-Limits Memorandum

- One task can be tied to exactly **one** working folder;
- Toggling a connector requires a **new conversation** to take effect;
- Scheduled tasks are dispatched by the **local client**: a sleeping/powered-off computer misses runs, and missed runs aren't replayed (use "Run Now" manually);
- CAPTCHAs, SMS codes, and face recognition always need a human;
- The browser connector only supports Chromium engines;
- Task history lives on the local device and doesn't sync across devices;
- Skill share links expire in about 24 hours.

## Choosing Among the Three Tools

| Need | Recommendation | Why |
| --- | --- | --- |
| Browser automation (with login state) | QoderWork | The connector reuses your real browser |
| DingTalk ecosystem | QoderWork | IM channels + the DingTalk MCP marketplace |
| Desktop app automation | QoderWork | Computer Use supports both platforms |
| Deep Feishu/Tencent Docs integration | TraeWork | External-app authorization covers 13 Feishu modules |
| Three-device sync, mobile dispatch | TraeWork | Web/desktop/mobile tasks sync in real time |
| Deep work on the classic office trio | WorkBuddy | Mature document/spreadsheet/PPT skill ecosystem |
| Want it all | Install all three | Independent accounts, no conflicts |
