---
description: "Fresh out of the box, TraeWork is a capable shell with nothing plugged into it. Plugins and external app authorization are what make it actually grow into your workflow."
---

# How Do You Connect Plugins and External Authorization? Let the AI Reach Your Feishu and GitHub

Fresh out of the box, TraeWork is a capable shell with nothing plugged into it. What makes it actually grow into your workflow are two things: plugins, which bring external tools, services, and data sources in; and external app authorization, which lets the AI touch your data in Feishu and GitHub directly. Wire up both and it starts living inside your day.

> Official docs: [work_plugins](https://docs.trae.cn/work_plugins) | [Seven Popular Plugins](https://docs.trae.cn/work_seven-popular-plugins-in-traework)

## Installing a Plugin: Three Steps

1. Click "Plugin Marketplace" at the top of the left navigation (the "Plugins" tab is the default);
2. Find the plugin you want and click the "Install Plugin" icon on the right of its card (or open the details page and click "Add Plugin" in the top-right);
3. For plugins that connect to external services, complete the authorization as prompted.

One timing detail to watch: before you start typing, pick the plugins you want at the bottom-left of the chat input box (you can select more than one). Plugins must be selected *before* the conversation starts—once a plugin is disabled mid-chat, you can't use it there.

## The Seven Popular Plugins at a Glance

Scan this table first and pick whichever sits closest to your day. Installing the wrong plugin is wasted effort, so match them up before you commit.

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

Thirteen modules can be authorized (by capability granularity): Base (about 38 operations, the most), Docs (25), instant messaging (18), knowledge base (14), Calendar/Tasks/Meetings/Mail (10 each), Drive (8), Slides, Approvals, Contacts, Sheets, and getting user identity tokens. After authorization, TraeWork automatically installs the local CLI and related skills, so from then on you can just tell it in chat to read a Feishu doc.

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

⚠️ The GitHub app is **supported in Code mode only**; on desktop, you must open a project pulled from GitHub and switch to "Cloud". If you do code reviews often, this one earns its keep.

## Permission Boundaries

The agent only calls a service **within the scope you authorized**.

Integration entry points are spread across two places: Settings > External App Authorization (account level) and Plugin Marketplace > Manage > App Authorization (plugin level). When in doubt, look in both, so you don't miss one.

## FAQ

**Do I have to pick plugins before starting the conversation?**
Yes. You choose them at the bottom-left of the chat input box, and it has to happen before the conversation starts. Once you're in the chat, adding one back in is not possible—it'll sit there disabled.

**Which Feishu modules should I authorize?**
There are 13 modules, listed by granularity. Base has the most with about 38 operations, then Docs at 25, instant messaging 18, knowledge base 14, Calendar/Tasks/Meetings/Mail at 10 each, plus Drive and Slides. Authorize the ones you actually use rather than handing everything over at once.

**Can I treat the finance plugins as investment advice?**
No. The official line is explicit: those plugins demonstrate capability, nothing more, and they don't constitute investment advice. If you do want to pull data, iFinD needs an API key, and bond real-time quotes don't cover the interbank market either. Don't buy or sell on the strength of it.

**Why doesn't GitHub authorization work in the web version?**
The GitHub app is supported in Code mode only, and on desktop you also have to open a project pulled from GitHub and switch to "Cloud". There's no route through the web version.

**How do the authorization and plugin entry points divide up?**
Account-level authorization sits under Settings > External App Authorization; plugin-level sits under Plugin Marketplace > Manage > App Authorization. Checking both beats checking one when you're unsure.

---

Next: [Automated Scheduled Tasks →](/en/traework/07-automated-tasks)
