# Computer Control, Browser Control, and Safety Boundaries

Letting the AI operate your interface directly—filling forms, clicking buttons, browsing pages—is task-oriented AI's most powerful capability, and the one that most needs guardrails. This chapter covers how to enable it, how to use it, and how to keep the safety boundaries intact.

## Computer Use

Lets the AI understand and operate your computer's interface with your authorization. Good for: research and information gathering, form filling, data entry, item-by-item processing against templates, and automated acceptance testing after development.

**Enabling it**:

1. Settings > Computer Use → click "Install" in the "Enable Computer Use" section (installs and enables the plugin automatically);
2. **macOS only**: Click "Authorize" next to "Accessibility" and "Screen Recording" and grant access in System Settings (Accessibility = simulating keyboard/mouse + reading interface elements; Screen Recording = taking screenshots to understand the interface);
3. Restart TraeWork for it to take effect. Windows needs no separate authorization.

**Settings**: an "Always allow these apps" list; and an "Always allow operating apps" switch (with it on, the AI no longer asks for confirmation for each new app it operates).

**Four official instruction templates** (ready to copy):

```text
1. Form filling: Fill out the XX form for me. When done, stay on the submission page
   and wait for my confirmation—do not click Submit.

2. Fill from a template: Copy the template.docx template, replace [field list] with
   this month's data, and save it as output/monthly-report.docx. Do not send or publish it.

3. Flow verification: Verify that the flow "a user can register an account and publish
   an article" works. If it fails, stop and describe the failed step, the error message,
   and how to reproduce it. Do not delete any data.

4. Build and verify: Build the XX feature, then verify it once with Computer Use.
   If verification fails, you may attempt one fix and re-verify; if it still fails,
   stop and explain why.
```

Note: on macOS, a "TraeWork is controlling your computer" overlay appears while the AI operates; try not to grab the mouse from it mid-operation.

## Browser Control

The AI performs web tasks automatically through a browser. Two modes:

| | Built-in browser | External browser |
| --- | --- | --- |
| How to enable | Settings > Browser > turn on "Allow AI to control the built-in browser" | Install the Chrome extension Trae Work Browser Extension |
| Characteristics | Works out of the box, entirely inside TraeWork | Reuses your signed-in Chrome (login state preserved) |
| Best for | Searching and verification in a clean environment | Operations that need a login (pulling data from backends, etc.) |

- Default browser switch: Settings > General > Default browser for AI tasks;
- **Cloud tasks always use the built-in browser**; browser control settings apply only to local tasks;
- Auto-screenshot toggle (Settings > General): screenshots are shown only in the chat stream and consume no tokens.

## The Safety Baseline: Sandbox and Permission Modes

Before giving the AI operational access, understand TraeWork's three layers of protection. Settings > Permissions & Approvals (also switchable at the bottom-left of the chat input box) offers three preset modes:

| Mode | Sandbox | Security checks | Approvals |
| --- | --- | --- | --- |
| **Manual approval** (default) | On | Enabled | You confirm every action |
| **Auto approval** | On | Enabled | The built-in LLM Guardian decides automatically |
| **Full access** | **Off** | **All disabled** | Commands run directly on the host machine ⚠️ |

The **sandbox** gives the agent's commands a restricted execution environment that prevents unauthorized file access: macOS uses sandbox-exec, Windows uses an in-house sandbox SDK, and web tasks all run in isolated sandbox containers. Local tasks get read-only access to critical system directories (`.git`, `.vscode`, etc.) and write access to the project directory, temp directory, and cache directories; high-risk commands (like `rm -rf`) are intercepted with a prompt where you can skip, whitelist, or run in the sandbox just this once.

**Advice for office users**:

1. Keep "Manual approval" for day-to-day work; consider auto approval only for low-risk tasks you've run many times;
2. Use "Full access" only in isolated environments (VMs / test machines)—the same goes for the Office Assistant's "Full access" switch;
3. Irreversible actions (sending email, deleting files, submitting orders) should always pass through human confirmation;
4. The AI can't handle CAPTCHAs, SMS codes, or face recognition—take over manually when you hit one.

## Privacy Mode

By default, your conversations may be used for data analysis, product improvement, and model training. Turn on Privacy Mode (Settings > Account > Privacy Mode) and your conversation content (including code snippets and AI output) will no longer be used for those purposes.

Two official commitments worth remembering:

- **Whether or not Privacy Mode is on, codebase files are never used for data analysis, product improvement, or model training**;
- For local runs in the desktop app, embedding vectors computed for code indexing are uploaded temporarily, and the plaintext is permanently deleted afterward.

---

Next, the case studies: [Build a Presentation-Ready PPT with TraeWork →](/en/traework/case-ppt)
