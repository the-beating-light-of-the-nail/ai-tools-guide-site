# Plugins and External App Authorization

Plugins bring external tools, services, and data sources into TraeWork; external app authorization lets the AI operate directly on your data in Feishu and GitHub. Together, they make TraeWork truly grow into your workflow.

> Official docs: [work_plugins](https://docs.trae.cn/work_plugins) | [Seven Popular Plugins](https://docs.trae.cn/work_seven-popular-plugins-in-traework)

## Installing a Plugin: Three Steps

1. Click "Plugin Marketplace" at the top of the left navigation (the "Plugins" tab is the default);
2. Find the plugin you want and click the "Install Plugin" icon on the right of its card (or open the details page and click "Add Plugin" in the top-right);
3. For plugins that connect to external services, complete the authorization as prompted.

When using plugins: **before starting the chat**, select the available plugins at the bottom-left of the chat input box (multiple selections allowed). Note that plugins must be selected before the conversation starts; a disabled plugin cannot be used mid-conversation.

## The Seven Popular Plugins at a Glance

| Plugin | What it can do | Highlights |
| --- | --- | --- |
| **Feishu** | Messages, Docs, Drive, Base, Calendar, Tasks, Approvals, Meetings, Minutes, OKR | The top pick for office work; sample command: "Schedule it for next Monday at 10 a.m." |
| **Tencent Docs** | Create/read/edit Word, Excel, slides, smart docs, smart sheets, mind maps, flowcharts | All your online collaborative documents in one place |
| **WeChat Work** | Contact and message lookup; manage meetings, schedules, to-dos, docs, and online sheets | Example: "Add a to-do due tomorrow at 6 p.m." |
| **Remotion** | Make videos by writing React code (layout, animation, subtitles, audio) | Video-as-code, great for programmatic shorts |
| **HyperFrames** | Make videos with HTML + CSS + GSAP | Ink-wash textures; brand color example: #11C566 |
| **Tonghuashun iFinD** | Financial data queries and investment research (requires an API key; data comes in free and subscription tiers) | Note: bond real-time quotes exclude the interbank market |
| **TDX (Tongdaxin)** | A-share/fund/index/Hong Kong stock quotes; condition-based stock screening (limit-up, low PE, MACD golden cross, etc.) | No support for futures, options, or bonds |

> Official disclaimer: content from finance plugins is for capability demonstration only and does not constitute investment advice.

## External App Authorization: Feishu

Once authorized, you can read and write Feishu Docs, Base, Calendar, messages, email, meetings, and more—no manual MCP Server setup needed:

1. "Plugin Marketplace" at the top of the left panel → "Manage" in the top-right → the "App Authorization" tab;
2. Click "Link" next to the Feishu app; you'll be taken to Feishu's authorization page;
3. Check the permissions → "Confirm Authorization" → verify the account and permissions on the confirmation page → click "Authorize".

Thirteen modules can be authorized (by capability granularity): Base (about 38 operations, the most), Docs (25), instant messaging (18), knowledge base (14), Calendar/Tasks/Meetings/Mail (10 each), Drive (8), Slides, Approvals, Contacts, Sheets, and getting user identity tokens. After authorization, TraeWork automatically installs the local CLI and related skills.

Three official scenario pipelines:

```text
1. Requirement-doc driven: send a cloud doc → read its content → work from the doc → write progress back to the doc
2. Base-driven: search records → read task details → execute → add/update record status
3. Collaboration sync: create a calendar event → read meeting minutes → edit the related cloud docs
```

## External App Authorization: GitHub

Entry point: avatar in the bottom-left → Settings → "External App Authorization" → click "Connect" next to GitHub → sign in and authorize TRAE-AI CN access. Afterward you can:

- **AI-created PRs**: The AI reviews the diff between two branches and generates a summary → create a PR in one click → open GitHub to confirm the merge;
- **Manually created PRs / AI PR reviews**: Have the AI look at the relevant file changes first, then run a git diff review.

⚠️ The GitHub app is **supported in Code mode only**; on desktop, you must open a project pulled from GitHub and switch to "Cloud".

## Permission Boundaries

- The agent only calls a service **within the scope you authorized**;
- Integration settings live in two places: Settings > External App Authorization (account level) and Plugin Marketplace > Manage > App Authorization (plugin level). If you're unsure, check both.

---

Next: [Automated Scheduled Tasks →](/en/traework/07-automated-tasks)
