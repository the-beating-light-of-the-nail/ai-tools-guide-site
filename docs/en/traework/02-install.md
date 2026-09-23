---
description: "A colleague tells you TraeWork can run jobs for you, and you want to install it right away. Then it throws three clients at you—web, desktop, and mobile—and you freeze: do I have to install all three? Will my accounts get tangled? If I dispatch a job from my phone, how does the computer pick it up?"
---

# How Do You Install TraeWork? Connect All Three Clients So Your Phone and Computer Never Fall Out of Sync

A colleague tells you TraeWork can run jobs for you, and you want to install it right away. Then it throws three clients at you—web, desktop, and mobile—and you freeze: do I have to install all three? Will my accounts get tangled? If I dispatch a job from my phone, how does the computer pick it up?

Don't panic. The three clients share one account and one set of task data. A job you dispatch from your phone is still there to watch and collect when you sit down at your desk. This chapter sets up all three and connects them—just follow along.

## Web: No Installation, Try It First

The web version is the least hassle—nothing to install. Open [work.trae.cn](https://work.trae.cn/) and sign in with your TRAE account, and you can start working. Its tasks all run in the cloud and use none of your local resources. Walk through the core flow once, and decide afterward whether the desktop app is worth installing.

> The web version only supports cloud tasks; to work with local files, you need the desktop app.

## Desktop: Your Main Workbench

For real work, the desktop app is where the fighting happens. Installing it takes three steps:

1. Open the download center at [trae.cn](https://www.trae.cn/) (or the "Download TraeWork" button on the product page);
2. Choose the macOS or Windows installer, download it, and install;
3. Sign in with your phone number (the same account as the web version).

The desktop app adds several key capabilities over the web version. One table makes the difference clear:

| Capability | Web | Desktop |
| --- | --- | --- |
| Runtime | Cloud only | Local + cloud |
| Work with local files | ✗ | ✓ |
| Office Assistant (IM binding) | ✗ | ✓ (first-time binding must be initiated in the desktop app) |
| Add custom models | ✗ | ✓ |
| Computer control / external browser | ✗ | ✓ |

## Mobile: The Task Center in Your Pocket

On the commute, in a queue, or lying in bed—you can dispatch work from your phone. To install it:

1. Search "TRAE" in your phone's app store to download it (iOS requires a non-US Apple ID; it's not yet on the US App Store);
2. Sign in with the same phone number as the desktop app;
3. On the home screen, tap "Task Runtime" in the bottom-left → "Connect My Computer", and follow the prompts to pair.

Connecting your phone and computer, start to finish:

1. Sign in to the TRAE mobile app, then tap "Task Runtime" in the bottom-left of the home screen;
2. Tap "Connect My Computer";
3. Open the TraeWork desktop app on your computer and sign in with the same phone number;
4. In the desktop app, go to **Settings > TRAE Mobile** and enable "Allow TRAE Mobile to control this device";
5. Tap "Confirm" on the "Only essential content will be stored in the cloud" popup;
6. Authorize the mobile app to access the computer's `/documents` folder.

Once paired, keep a few things in mind:

- Pairing is valid for **180 days**; you'll need to re-pair after it expires;
- You can enable "Keep computer awake" so the machine doesn't fall asleep halfway through a task;
- If the device goes offline, the system automatically switches the task to the cloud so it keeps running;
- A sleeping computer may interrupt message delivery (the same applies to the Office Assistant).

## A Typical Day Across Three Clients

Connected—now how do the three fit together? Here's what a real day looks like:

```text
08:30  On your commute, dispatch a "compile this week's industry news" task from mobile to the cloud
09:00  At your desk, open the desktop app—the task is done, review the output
10:00  Kick off a complex task in the desktop app that needs local files
12:30  Over lunch, check progress on mobile and add one more requirement
18:00  Before leaving, start a long task on desktop; collect the result from mobile at home
```

## New-User Credit Package

New users get a one-time gift of **2,000 general credits + 2,000 Work-exclusive credits** (valid for 31 days). On top of that, daily check-ins award Work-exclusive credits, and logging in each month adds 500 general credits. For how credits are used and the order they're consumed, see [Models and Credits: Pitfalls to Avoid](/en/traework/adv-models-credits).

## FAQ

**Do I need to install all three clients?**
No. Start by signing into the web version to try it; install the desktop app once it feels right and you have real work to do. The mobile app depends on whether you want to dispatch jobs from anywhere—your call. All three share one account, so the same phone number works everywhere.

**What's the difference between desktop and web?**
The web version runs in the cloud only: it can't touch files on your machine, can't bind the Office Assistant, can't add custom models, and can't control your computer. Those jobs need the desktop app. The comparison table above lays it out at a glance.

**How do I connect my phone and computer?**
Sign in on your phone, go to "Task Runtime" and tap "Connect My Computer". Then open the desktop app on your computer, sign in with the same phone number, go to Settings > TRAE Mobile, and turn on "allow control". Confirm the popup and authorize the folder. Pairing lasts 180 days, then you reconnect once.

**I can't find TRAE on iOS. What now?**
It hasn't launched on the US App Store yet. Switch to a non-US Apple ID and search "TRAE" in the App Store. On Android and in other regions, a plain search usually finds it.

**Do credits expire?**
Yes. The new-user package of 2,000 general + 2,000 Work-exclusive credits is valid for 31 days, so use it while it lasts. Daily check-ins and monthly logins top up Work-exclusive and general credits respectively—the credit-pitfalls chapter has the rules.

---

Next: [Your First Task: From One Sentence to a Deliverable →](/en/traework/03-first-task)
