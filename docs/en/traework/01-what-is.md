# What Is TraeWork

**TraeWork** is an AI-native workbench from ByteDance (official tagline: "Let TRAE work for you"), officially released in June 2026. You describe your goal in one plain-language sentence; it then breaks down the steps on its own, invokes skills and tools to execute, and delivers real outputs such as documents, data reports, slide decks, and web pages—instead of just "answering questions."

> Official product page: [trae.cn/work](https://www.trae.cn/work) | Official docs: [docs.trae.cn](https://docs.trae.cn/work_what-is-trae-work)

## How It Relates to TraeCode (Trae IDE)

The TRAE family has several product lines, and these two are the easiest to mix up:

| | TraeCode | TraeWork |
| --- | --- | --- |
| Positioning | AI-native IDE (programming) | AI-native workbench (office work) |
| Built for | Software engineers | Non-developers such as product managers, operations, and data analysts |
| Typical tasks | Writing code, debugging, managing codebases | Documents, data, slide decks, research, automation |

Key point: TraeWork grew out of the SOLO mode in TraeCode, but it is a **standalone desktop app that does not require TraeCode to run**. Both belong to the same TRAE account system; see [Models and Credits: Pitfalls to Avoid](/en/traework/adv-models-credits) for how credits carry over.

A note on this site's sections: we focus on office workers, which is why we cover TraeWork; the TraeCode IDE for programmers is out of scope.

## Three Modes

In the top-left corner of TraeWork, you can switch among three modes:

| Mode | Best for | What it does |
| --- | --- | --- |
| **Work** | Non-developers (product, operations, data analysts) | Documents, data processing, slide decks—the main thread of this tutorial |
| **Code** | Software engineers | Coding, debugging, codebase management, Git workflows |
| **Design** | Users with design needs | AI handles design, revisions, and final delivery end to end |

## Three Clients

- **Web**: [work.trae.cn](https://work.trae.cn/)—no installation, a ready-to-go cloud environment that uses no local resources. Great for one-off needs, working on the go, and quick validation.
- **Desktop**: Get it from the download center at [trae.cn](https://www.trae.cn/) (macOS / Windows). It supports both local and cloud runtimes and suits long-term use and complex projects.
- **Mobile**: Search "TRAE" in your phone's app store. Its role is a "cross-device task dispatch center"—assign tasks, check progress, and receive results on your commute. Note: the mobile app supports only the Work and Code modes (no Design).

All three clients **share one account system and one set of task data**, with task information synced in real time. The typical split: assign a task from mobile → it runs in a cloud sandbox or on a paired computer → the result is pushed back to you.

## Core Capabilities at a Glance

- **Autonomous task execution**: You state the goal; the AI breaks down the steps, invokes skills and tools, and you review the result
- **Office Assistant**: Connect Feishu / WeChat and assign work right from a chat window (see [Office Assistant](/en/traework/05-bot-assistant))
- **External app authorization**: Once authorized, directly operate Feishu Docs / Base / Calendar, GitHub, and more
- **Plugin marketplace**: Popular plugins such as Feishu, Tencent Docs, Tonghuashun iFinD, TDX, and Remotion video
- **Automated tasks**: Run news digests, weekly reports, competitor monitoring, and more on a schedule
- **Skills**: Give the AI "professional capability manuals" that load on demand (see [Skills](/en/traework/04-skills))
- **Computer control / browser control**: Once authorized, let the AI operate interfaces, fill in forms, and pull data
- **Voice discussions**: Talk through requirements over multiple voice rounds; after the session, everything is automatically transcribed and cleaned into structured minutes

## How It Relates to the Other Tools on This Site

- **WorkBuddy** (Tencent): an office AI agent workbench, TraeWork's most direct competitor
- **TraeWork** (ByteDance): an AI-native workbench, distinguished by three-client sync and its plugin ecosystem
- **QoderWork** (Alibaba): a desktop intelligent work assistant, strong at browser automation and IM channels

All three take a similar approach (task delegation + skills + scheduling + IM) with different trade-offs in the details. For office work, feel free to install all of them and pick what feels right—many feature chapters can be read side by side.

---

Next: [Install, Sign In, and Sync Across Clients →](/en/traework/02-install)
