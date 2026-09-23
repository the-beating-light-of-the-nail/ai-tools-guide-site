---
description: "You click the download button on the official site and the page hands you two things: a .dmg and an .exe."
---

# How Do You Install QoderWork? Ten Minutes to Set Up, With No Privacy Surprises After Sign-In

You click the download button on the official site and the page hands you two things: a .dmg and an .exe. You stare at them and wonder which one you're supposed to take—and whether this thing is going to rummage through your files once it's installed. This chapter walks you from "download" all the way to "what to look at first after signing in," one step at a time.

QoderWork is a desktop app that runs on your own machine, not a web page. Here's what your system needs:

- **macOS 14+** (universal package covering both Apple Silicon and Intel);
- **Windows 10+ 64-bit**;
- at least 500MB of free disk space;
- a stable network connection, since models, skills, and connectors are all pulled from the cloud.

> Official installation docs: [macOS](https://docs.qoder.com/zh/qoderwork/installation-macos) | [Windows](https://docs.qoder.com/zh/qoderwork/installation-windows)

## Where to Download

You have two entry points, depending on whether you're on the international or China edition:

- International edition: [qoderwork.com](https://qoderwork.com) (recommended by the official quick-start docs)
- China edition: [qoder.com.cn/qoderwork](https://qoder.com.cn/qoderwork) (Alibaba Cloud channel, sign in with a Qoder CN account)

## Installing on macOS

Download the .dmg, drag the app into Applications, and you're installed. If the system blocks the first launch, don't panic: open System Settings → Privacy & Security and click "Open Anyway" at the bottom—that prompt shows up only once.

Then sign in with your existing Qoder account; if you don't have one, register with an email or use a third-party login. Once you're in the workspace, you're done.

Updates are low-effort: it checks in the background by default, but only downloads and restarts after you confirm—it never replaces your current version without asking. To check manually, go to menu bar QoderWork → Check for Updates.

Uninstalling is just as simple—drag it to the Trash. To wipe configuration as well, sign out first, then run `rm -rf ~/.qoderwork` in a terminal. Heads up: that also deletes local task history that hasn't synced to the cloud.

## Installing on Windows: Pick the Right Package First

On Windows you'll see two installers. They are **feature-identical**; they differ only in install location and permissions:

| | System X64 | User X64 |
| --- | --- | --- |
| Install location | Program Files | %LOCALAPPDATA% |
| Who can use it | All accounts | Current account only |
| Admin rights | Required | **Not required** |

Straight from the official docs: "If in doubt, choose the **User** package: no admin rights needed, and installation is the least hassle." So if you're unsure, pick User and don't think about it.

If SmartScreen blocks it, click "More info" → "Run anyway" to continue. To uninstall: Settings → Apps → Installed apps → search Qoder → Uninstall; delete `%USERPROFILE%\.qoderwork` to clean up configuration.

## Three Things to Do After Signing In

You just signed in—don't start handing out work yet. Do these three small things first:

1. **Switch the language**: language settings sit at the bottom left (the default may be English; if you can't read it, change it first);
2. **Check your credits**: click the Credits button at the top right to see your balance. New users get a starter credit package; the China edition also runs a daily check-in event for bonus credits (watch for the event's expiry date);
3. **Understand the billing**: QoderWork bills in Credits, shared across the whole Qoder family. Models are tiered (standard / advanced / flagship) with different costs—for everyday tasks the standard tier is plenty. To dig into how to save, see [Memory, Costs, and Safety](/en/qoderwork/adv-memory-cost).

## Common Installation Issues

Hit an error? Check this table first:

| Problem | Fix |
| --- | --- |
| macOS says "cannot verify the developer" | System Settings → Privacy & Security → Open Anyway |
| Insufficient permissions on Windows | Use the User installer, or run as administrator |
| macOS below 14 | The app won't start; upgrade the OS first |
| Task fails with a permissions error | Check that you've authorized the relevant working folder |

## Privacy in Three Lines (Official Position)

The thing you probably worry about most—"is it going to dig through my files?"—has three official answers:

1. File operations happen locally and are not uploaded to the cloud; however, the relevant text content is sent to the LLM API provider for processing;
2. The app can only access working folders you explicitly authorize; if it truly needs an unauthorized location, it asks for your consent first;
3. File contents are never stored permanently in the cloud.

## FAQ

**Will it secretly upload files from my computer?**
No. File operations happen on your own machine. Only text content is sent to the LLM provider for processing; the files themselves are never uploaded or stored permanently in the cloud. Folders you haven't authorized are off limits, and if it needs one, it asks first.

**Which Windows installer should I download?**
When in doubt, pick User. It needs no admin rights and installs into your personal directory, so it's the least hassle. The System package requires admin rights and works for all accounts, which most people don't need.

**Do I have to pay right after installing?**
No. New users get a starter credit package, and the China edition offers daily check-in credits. Check your balance first, use the standard model tier for everyday tasks, and the credits drain slowly.

**The interface is in English after I sign in. Is that normal?**
Yes, English may be the default. Switch it via the language setting at the bottom left—that's the first thing to do after signing in.

**How do I fully uninstall it and wipe my records?**
Drag the app to the Trash to uninstall. To clear configuration, sign out first, then run `rm -rf ~/.qoderwork` in a terminal (on Windows, delete `%USERPROFILE%\.qoderwork`). Note that this wipes local task history that hasn't synced.

---

Next: [Your First Task →](/en/qoderwork/03-first-task)
