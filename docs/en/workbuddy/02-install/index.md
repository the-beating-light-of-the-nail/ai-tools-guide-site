---
description: "You want to try WorkBuddy, and the first step is the one that most often puts people off: you don't know where to download it, you don't know where to install it once you have, and once it's installed you don't know whether to scan a WeChat QR code or type your phone number."
---

# How Do You Install WorkBuddy? Download, Install, and Sign In, Step by Step

You want to try WorkBuddy, and the first step is the one that most often puts people off: you don't know where to download it, you don't know where to install it once you have, and once it's installed you don't know whether to scan a WeChat QR code or type your phone number.

This page walks you through all four steps — download, install, sign in, update — with a screenshot for each. Just follow the clicks.

## Downloading WorkBuddy

Open the official site at [codebuddy.cn/work](https://www.codebuddy.cn/work/), select WorkBuddy, and click "Download WorkBuddy."

![Official site download page](/workbuddy/02-install/assets/001_image_GGeabJkE2o.png)

The site automatically detects your device and determines which build you need — Mac ARM64, Mac x64, or Windows x64.

![Auto-detected platform version](/workbuddy/02-install/assets/002_image_HaXcbwaJXo.png)

Remember: always download from the official site. Don't get installers from cloud drives or unknown mirrors.

## Installing on Windows

1. Once the download finishes, double-click the installer.

![Double-click the installer](/workbuddy/02-install/assets/003_image_Ehpebt4Eso.png)

2. If your system shows a security warning, first verify the publisher and download source before deciding whether to continue.

![Verify the publisher and continue](/workbuddy/02-install/assets/004_image_LG3MbcWpvo.png)

3. Follow the installation wizard to finish installing and launch WorkBuddy.

![Installation wizard](/workbuddy/02-install/assets/005_image_CMvYbYWFOo.png)

![Installation wizard](/workbuddy/02-install/assets/006_image_Wujkbd9eTo.png)

![Installation wizard](/workbuddy/02-install/assets/007_image_V9L2bhWF2o.png)

![Installation complete](/workbuddy/02-install/assets/008_image_DjcGbKYJSo.png)

4. The first launch prepares the runtime environment. Let it finish.

![Preparing the runtime](/workbuddy/02-install/assets/009_image_Q0l3bAkUPo.png)

## Installing on macOS

1. Open the installer file and drag WorkBuddy into "Applications."

![Drag into Applications](/workbuddy/02-install/assets/010_image_TmYPbu7Ibo.png)

![Drag into Applications](/workbuddy/02-install/assets/011_image_UlJcbVqX7o.png)

2. Launch it from "Applications." Don't double-click it inside the DMG window — that's a read-only temporary disk, and updates and settings tend to break there.

![Launch from the Applications folder](/workbuddy/02-install/assets/012_image_LtqPbQ2z6o.png)

## Signing In

1. Click the sign-in button.

![Click the sign-in button](/workbuddy/02-install/assets/013_image_MMIXbZJafo.png)

2. Your browser opens automatically for sign-in.

![Redirect to web sign-in](/workbuddy/02-install/assets/014_image_MdmYbB2Avo.png)

3. Scan the QR code with WeChat to sign in, or use your phone number instead. Pick one and stick with it — switching back and forth is how you lose track of your own task history.

![Sign in with WeChat QR code or phone number](/workbuddy/02-install/assets/015_image_WZrBbbWono.png)

4. Once you're signed in, you can start putting WorkBuddy to work.

![Signed in](/workbuddy/02-install/assets/016_image_Pmh8b7xc8o.png)

> If software installation is blocked on your work computer, don't try to bypass endpoint security policies — contact your IT administrator about whitelisting or enterprise deployment options.

## Updating

Click your profile in the lower-left corner and select "Check for Updates." If a new version is available, follow the prompts to update — no uninstall and reinstall needed.

![Check for updates](/workbuddy/02-install/assets/017_image_Qt1gbb7J3o.png)

## FAQ

**The installer won't open, or reports it's corrupted?**
Delete the installer and re-download it from the official site, and double-check your OS and chip version. If it still fails, note your system version, the installer filename, and a screenshot of the error, then report it through the official feedback channel. Don't go turning off system security features.

**Nothing happens after signing in?**
Check three things: whether your default browser is blocking the login redirect, whether a network proxy is interfering with authentication, and whether your system clock is accurate. Quit the app and try again, and keep the logs and screenshots.

**Files can't be read or written?**
Start by confirming the working directory the task is using is correct, that the system has granted permissions for that directory, and that the file isn't locked by another program. Test with a blank text file first — don't trial-and-error on important files.

**Should I back up before updating?**
App updates generally don't touch your work files. But for long-running projects you should still keep inputs, deliverables, configs, and custom Skills under version control, or back them up regularly.
