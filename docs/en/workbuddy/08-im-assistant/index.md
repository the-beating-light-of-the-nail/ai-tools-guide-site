# Chapter 8: Connecting the Mini Program and IM Assistant in WorkBuddy

Installing the client is just the first step. This chapter takes WorkBuddy from "only usable at your desk" to "assigning tasks from your phone anytime": the Mini Program lets you monitor and dispatch remotely, and the IM Assistant lets you hand out tasks right inside WeChat, Feishu, or DingTalk.

## The Mini Program's Two Modes

![Mini-program entry for local and cloud modes](/workbuddy/08-im-assistant/assets/001_image_Vv5bbtLVBo.png)

| Mode | Where tasks run | Depends on your computer being online | Best for |
| --- | --- | --- | --- |
| Local mode | Your connected computer | Yes | Local files, local Skills, existing workspaces |
| Cloud mode | An isolated cloud environment | No | Research, writing, ad-hoc analysis, parallel tasks |

**First use**: open the WorkBuddy Mini Program through the official entry point and sign in. Check whether you're in local or cloud mode; in local mode, confirm the target computer is online and connected correctly.

## How the IM Assistant Works

```mermaid
sequenceDiagram
    participant U as Mobile IM
    participant B as App Bot
    participant W as WorkBuddy Assistant
    participant P as Local Workspace
    U->>B: Send task
    B->>W: Pass message via callback or persistent connection
    W->>P: Execute in authorized directory
    P-->>W: Deliverables & status
    W-->>B: Return result
    B-->>U: View & confirm on phone
```

## Connecting the WeChat Assistant: Just Scan a QR Code

1. Open WorkBuddy, click the gear icon under "Assistant" on the left, and go to "Assistant Settings";

![Gear icon in the Assistant panel opens settings](/workbuddy/08-im-assistant/assets/002_微信助理-进入助理设置_NbI2b9v4fo.png)

2. Find "WeChat Assistant Integration" and click "Configure";

![Clicking Configure on WeChat Assistant integration](/workbuddy/08-im-assistant/assets/003_微信助理-选择集成_S9HlbaEmdo.png)

3. Wait for the binding QR code to appear, then scan it with WeChat on your phone;

![Binding by scanning the QR code in WeChat](/workbuddy/08-im-assistant/assets/004_微信助理-扫码绑定_TElmbNPG5o.png)

4. Once the card shows "Bound," start by sending a read-only test command;

![Card shows Bound; sending a read-only test command](/workbuddy/08-im-assistant/assets/005_微信助理-已绑定_ZQtrb6jCmo.png)

5. To switch WeChat accounts, unbind the current account first, then scan again.

> The QR code expires after a while. If it stays stuck on "Binding," the code has expired, or the scan fails, close the configuration window and re-enter it; if needed, restart WorkBuddy and generate a new QR code.

## Connecting Feishu

1. WorkBuddy → Settings → Assistant Settings → select Feishu;

![Selecting Feishu in assistant settings](/workbuddy/08-im-assistant/assets/006_image_SbcEbSaoio.png)

2. Create a custom enterprise app on the Feishu Open Platform;

![Creating a self-built app on the Feishu open platform](/workbuddy/08-im-assistant/assets/007_飞书-登录开放平台_EUPhblavHo.png)

3. Add bot capabilities to the app;

![Adding bot capability to the Feishu app](/workbuddy/08-im-assistant/assets/008_飞书-添加机器人能力_XFmTb5HGQo.png)

4. Grant the minimum permissions required by the current WorkBuddy page;

![Granting the minimal permissions requested](/workbuddy/08-im-assistant/assets/009_飞书-批量导入权限_MRdCbm3Dvo.png)

5. Under "Credentials & Basic Info," get the App ID and App Secret;

![Getting the App ID and Secret from Credentials & Basics](/workbuddy/08-im-assistant/assets/010_飞书-应用凭证_CnItbspOUo.png)

6. Enter the credentials in WorkBuddy, and generate or copy the callback information;

![Pasting credentials back into WorkBuddy to get callbacks](/workbuddy/08-im-assistant/assets/011_飞书-加密与校验配置_WiAYbwBDKo.png)

7. In Feishu, configure event subscriptions and callbacks, adding events such as receiving messages and card interactions;

![Feishu event subscription: adding the message event](/workbuddy/08-im-assistant/assets/012_飞书-添加接收消息事件_X4z6bNPsso.png)

![Configuring the card interaction callback in Feishu](/workbuddy/08-im-assistant/assets/013_飞书-卡片回调_AvOxbO7M9o.png)

8. Create a version and publish the app, then send the bot a read-only test task in Feishu.

![Creating a version and publishing the Feishu app](/workbuddy/08-im-assistant/assets/014_飞书-发布应用_TafwbySxco.png)

## Connecting DingTalk

![DingTalk setup: app development and bot entry](/workbuddy/08-im-assistant/assets/015_image_RRhMbPo5uo.png)

1. Sign in to the DingTalk Developer Console with an enterprise admin account, go to "App Development," and create an app;

![Creating an app in the DingTalk developer console](/workbuddy/08-im-assistant/assets/016_钉钉-创建应用_NuNTbdscZo.png)

2. Add bot capabilities to the app, fill in the bot's name, description, and avatar, and confirm publication;

![Adding bot capability in DingTalk and publishing](/workbuddy/08-im-assistant/assets/017_钉钉-添加机器人能力_ORRbbZrqgo.png)

3. Grant the required permissions;

![Granting the required DingTalk app permissions](/workbuddy/08-im-assistant/assets/018_钉钉-开通权限_QG1zbPhcxo.png)

4. Get the app credentials and paste them back into WorkBuddy. Preferably validate everything in a test organization or test group first.

![Getting the DingTalk credentials back into WorkBuddy](/workbuddy/08-im-assistant/assets/019_钉钉-获取应用凭证_OI8fbW0JNo.png)

---

> Once your IM Assistant is bound, pair it with [Automated Tasks](/en/workbuddy/10-automation/) to chain "scheduled runs + IM push" into a single pipeline.
