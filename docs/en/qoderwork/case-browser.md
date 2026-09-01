# Case: Browser Automation—230 WeChat Official Account Articles Organized in 20 Minutes

Browser automation is QoderWork's widely acknowledged strength. The main case in this chapter comes from a network engineer's complete field test—no code, doing work that used to require a Python scraper.

> Adapted from Zhu Jiasheng's field test (WeChat Official Account "Network Engineer Craft"): [First Look at Alibaba QoderWork Browser Automation: 230+ Official Account Article Links in 20 Minutes](https://zhuanlan.zhihu.com/p/2057217208250528785) (2026-07).

## Background

The blogger wanted to organize 200+ historical articles from his WeChat Official Account into a table of three columns—[publish date] [title] [link]—then import it into Tencent ima's knowledge base to create a conversational "personal knowledge assistant".

- Manual approach: 800+ copy-pastes;
- Scraper approach: deterred by the account backend's login state and encrypted APIs;
- QoderWork approach: take over the already-logged-in browser page, zero code.

## The Full Workflow (11 Steps)

1. Download and install (on Windows, pick the X64 User package), sign in with an Alibaba Cloud account;
2. Create a dedicated working folder: `D:\QoderWork\official-account-articles`;
3. Bottom toolbar "Manage Connectors" → find "Browser" → enable;
4. Install the browser extension (Chrome via the Web Store; Edge manually: `edge://extensions` → developer mode → drag in the chrome-extension folder from the install directory);
5. **The key step**: log in to mp.weixin.qq.com yourself in the browser and open "Content Management → Publish History"—the Official Account backend requires a personal QR scan the AI can't do, so have it **take over the logged-in page**;
6. Click the QoderWork extension icon in the browser toolbar; when the panel shows "current tab connected", the takeover succeeded;
7. Prepare a template Excel (four columns: number, publish date, title, link) in the working folder;
8. Dispatch the job (full prompt):

```text
Please look at the [Template] article-links.xlsx file.
The data comes from the page connected in the Edge browser, via "Content
Management" → "Publish History", and it is paginated.
Following the template file, go through the publish records on all 24 pages
and organize them into an Excel file by [publish date] [title] [link].
```

9. The task monitoring panel auto-decomposed it into four steps: extract records from 24 pages → read the template structure → generate the Excel per the template → verify the file;
10. Two or three rounds of iteration: round one missed some articles, round two filled the gaps, round three polished the format—"haste makes waste; the AI does the work, the human calibrates";
11. Import into the ima knowledge base (10 links at a time, so 200+ articles took ~20 rounds), turning the personal article archive into an AI-queryable knowledge base.

**Result**: 238 records (every article from 2021-11 to 2026-06), with titles/dates/links all present, links auto-formatted as clickable hyperlinks, sorted newest-first. The whole thing took **under 20 minutes** (versus half a day by hand).

## Technical Highlight: The AI Found the API by Itself

QoderWork didn't ploddingly click "next page" over and over—it **discovered that the publish-history page embeds a structured data variable `publish_page` and pulled all records at once through the page's own API**. The author likened it to "a seasoned script kiddie inspecting elements to find the API before bulk-fetching". This is the essential difference between an agent and "screen-recording RPA": it sees the page structure and picks the most efficient path.

## Same Playbook: E-commerce Five-Store Daily Report (Official User Case)

A cross-border e-commerce operator used to log into 5 backends one by one every morning, spending an hour on the "morning ritual" and still missing stores:

```text
Log in to the US / EU / JP site backends one by one, go to the business
report page, export yesterday's data, and merge it into one Excel: per-site
sales / order volume / return rate, Top 10 best-selling SKUs, with any
declining month-over-month change flagged in red, plus an operations summary
under 200 words at the end.
```

Once it ran cleanly, **package it as a Skill**—from then on, one phrase a day: "run today's store report". Result: **1 hour → 10 minutes**; after data accumulated, a 30-day trend analysis was layered on.

## Transferable Scenarios

Bulk-downloading web resources, auto-filing forms, scheduled market-data pulls, batch screenshot archiving, cross-site price comparison—anything you find yourself repeating in a browser is worth delegating to it, all with zero code.

## Three Safety Reminders

1. The scraping process reads your browser login credentials—**never do this on a public machine**;
2. De-identify account information in exported data;
3. **Always spot-check AI-scraped data by hand** (sample a few titles, dates, and links).
