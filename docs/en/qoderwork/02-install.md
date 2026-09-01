# Install and Sign In

QoderWork is a desktop app that runs locally. System requirements: **macOS 14+** (universal package for Apple Silicon / Intel), **Windows 10+ 64-bit**, 500MB+ of disk space, and a stable network connection (models, skills, and connectors are pulled from the cloud).

> Official installation docs: [macOS](https://docs.qoder.com/zh/qoderwork/installation-macos) | [Windows](https://docs.qoder.com/zh/qoderwork/installation-windows)

## Where to Download

- International edition: [qoderwork.com](https://qoderwork.com) (recommended by the official quick-start docs)
- China edition: [qoder.com.cn/qoderwork](https://qoder.com.cn/qoderwork) (Alibaba Cloud channel, sign in with a Qoder CN account)

## Installing on macOS

1. Download the .dmg and drag the app into Applications;
2. If Gatekeeper blocks the first launch: System Settings → Privacy & Security → click "Open Anyway" at the bottom (this prompt only appears once);
3. Sign in: use your existing Qoder account, or register with an email or a third-party login;
4. You're in the workspace.

Updates: QoderWork checks in the background by default, but only downloads and restarts after you confirm—it never replaces your current version without asking. To check manually: menu bar QoderWork → Check for Updates.

Uninstall: drag the app to the Trash. To wipe all configuration, sign out first, then run `rm -rf ~/.qoderwork` in a terminal (this deletes local task history that hasn't synced to the cloud).

## Installing on Windows: Pick the Right Package First

The two installers are **feature-identical**; they differ only in install location and permissions:

| | System X64 | User X64 |
| --- | --- | --- |
| Install location | Program Files | %LOCALAPPDATA% |
| Who can use it | All accounts | Current account only |
| Admin rights | Required | **Not required** |

Straight from the official docs: "If in doubt, choose the **User** package: no admin rights needed, and installation is the least hassle."

If SmartScreen blocks it: click "More info" → "Run anyway". To uninstall: Settings → Apps → Installed apps → search Qoder → Uninstall; delete `%USERPROFILE%\.qoderwork` to clean up configuration.

## Three Things to Do After Signing In

1. **Switch the language** if needed: language settings at the bottom left (the default may not be your preference);
2. **Check your credits**: click the Credits button at the top right to see your balance. New users get a starter credit package; the China edition also runs a daily check-in event for bonus credits (watch for the event's expiry date);
3. **Understand the billing**: QoderWork bills in Credits, shared across the whole Qoder family. Models are tiered (standard / advanced / flagship) with different costs—for everyday tasks the standard tier is plenty. See [Memory, Costs, and Safety](/en/qoderwork/adv-memory-cost) for details.

## Common Installation Issues

| Problem | Fix |
| --- | --- |
| macOS says "cannot verify the developer" | System Settings → Privacy & Security → Open Anyway |
| Insufficient permissions on Windows | Use the User installer, or run as administrator |
| macOS below 14 | The app won't start; upgrade the OS first |
| Task fails with a permissions error | Check that you've authorized the relevant working folder |

## Privacy in Three Lines (Official Position)

1. File operations happen locally and are not uploaded to the cloud; however, the relevant text content is sent to the LLM API provider for processing;
2. The app can only access working folders you explicitly authorize; if it truly needs an unauthorized location, it asks for your consent first;
3. File contents are never stored permanently in the cloud.

---

Next: [Your First Task →](/en/qoderwork/03-first-task)
