---
description: "You open settings from the profile menu and two entries land in front of you at once: one called API Services, the other called Connectors. Both names have the word connect in them, and you start to wonder."
---

# API Service or Connector? One Difference and You'll Pick Right Every Time

You open settings from the profile menu and two entries land in front of you at once: one called API Services, the other called Connectors. Both names have the word *connect* in them, and you start to wonder—are these the same thing? Pick wrong and you could burn a whole day for nothing.

Here's the reassurance first: you don't need to memorize a feature list. One phrase is enough, and that phrase is **opposite directions**. Get those two words straight and every choice after that is obvious.

## Getting the Direction Straight

What separates these two features, at bottom, is who goes looking for whom. One table lays it out:

| | API Services | Connectors |
| --- | --- | --- |
| Direction | From your own website or app, **calling the Doubao large model** | Doubao Work **reading Feishu, web pages, or other business systems** |
| Who it's for | Developers | Everyday office users |
| Typical use | Adding Doubao model conversation and generation capabilities to your own product | Letting Doubao Work directly read Feishu docs, Tencent Meeting records, Notion databases |

Read the left column: API Services is your own website or app calling the Doubao model in to do work. Now the right column: connectors are the reverse, Doubao Work going out to dig through outside material. One pulls it in, the other reaches out—that's what opposite directions means.

## API Services: For Developers

If you're adding Doubao's capabilities to a product, website, or mini-program you built yourself, this is your road.

Open "API Services" from the profile menu and it takes you to the Volcano Engine developer page, where you'll find how to call the models. One thing to note down: model names, pricing, and integration methods can change—go by the official console and documentation at the time, and don't treat this page as the final rule.

## Connectors: For Everyone

If you're not building an app and just want Doubao Work to "reach" your external data and tools, adding a connector is all you need.

Say your material is scattered across Feishu docs, Tencent Meeting records, and Notion databases. Install the connectors and Doubao Work reads them directly, with no downloading and re-uploading file by file. For how to get your first one running, see [Connectors: Start with a Small, Verifiable Task](/en/doubaowork/05-connectors).

## How to Decide, in One Line

When you're unsure, ask yourself one question: am I writing code to build a product? If yes, go with API Services. If no—you just want Doubao Work to touch your external material—add a connector. For the vast majority of office work, connectors are enough.

## FAQ

**I'm a regular employee. Do I need API Services?**
Almost certainly not. API Services is for developers wiring a model into their own product. When you want Doubao Work to read Feishu or meeting notes, that's a connector. If you're not a developer, leave that one alone.

**Do connectors require writing code?**
Not a line. They were built for everyday office users: install, authorize, and Doubao Work reads your external material. You only pick which system to connect and grant it permission.

**Can I use both?**
You can, but they're aimed at different people. You need API Services only if you're building a product; for day-to-day office work, connectors are enough. Most people touch just one of them, so don't let the word *connect* in both names scare you.

**Does API Services pricing change?**
It does. Model names, pricing, and integration methods can all be updated, so defer to the official Volcano Engine console and documentation at the time. What you see there follows the official line; this page only helps you keep the concepts apart.

**Which external systems can connectors read?**
Whatever you've connected. Feishu docs, Tencent Meeting records, and Notion databases are all commonly supported. For a specific one, check the connectors page on how to get your first one running.

---

Next up: make it work on a schedule—[How to Build Scheduled Tasks That Deliver Consistently →](/en/doubaowork/09-automation)
