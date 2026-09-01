# After the Close: Turning Market Moves into Tomorrow's Research List

> Scenario: Post-market review and watchlist daily reports are often treated as two separate jobs, but they run on the same information chain—the review answers "what happened today," while the daily report carries unresolved questions into tomorrow. When the two documents don't connect, the next day you end up re-trawling quotes, announcements, and news from scratch.

For this walkthrough, we first ran a four-stock review (Kweichow Moutai, CATL, Foxconn Industrial Internet, Zijin Mining), then added Foxconn Industrial Internet, Zhongji Innolight, Eoptolink, and Cambricon to an AI compute watchlist. Both happen after the close, but **one-shot explanation and continuous tracking call for completely different writing approaches**.

## Part 1: Post-Market Review

Tool: Search for "**Stock Daily Report**" under "Skills · Connectors · Mates" to load the capability. Note: the capability name is not the source of conclusions—it organizes the workflow, and every number still has to pass a source-and-definition audit.

Pin down the date, tickers, and sources right at the start—the date shouldn't live only in the title; it should also constrain the date range for quotes, announcements, and news:

```text
Please review what happened on August 28, 2026 after the A-share close for Kweichow Moutai 600519, CATL 300750,
Foxconn Industrial Internet 601138, and Zijin Mining 601899.

First confirm the day was a trading day, then verify the four stocks' closing prices, price changes, turnover, turnover rates,
company announcements, and the day's public news. Attach the date, unit, and original source to every number.
For corporate events, go back to the exchanges, cninfo.com.cn, or company announcements first; when the original can't be opened, note the gap in the material—
don't pass search summaries off as confirmed facts.

Identify the main corporate events, industry variables, and market factors that drove the four stocks.
Separate confirmed facts, common market interpretations, and still-unverified speculation;
two things merely happening on the same day must not be written up as cause and effect.

Finally, output a one-page closing summary, a four-stock table, an event timeline, and five questions to keep verifying on the next trading day.
Don't give buy/sell points, and don't dress up one day's moves as long-term trends.
```

Four hard requirements: confirm it was a trading day first; attach dates and units to every number; trace corporate events back to official disclosures; separate facts from interpretations; end with questions worth tracking. These constrain how freely the answer can wander, yet give later checks a clear target.

### Attribution Is Not Storytelling—It's an Evidence Audit

The four-stock table and event timeline came together quickly; the trouble was "why it moved." Some of the trading-volume and fund-flow figures came from financial media or aggregator pages, and without opening the original pages it's hard to verify the methodology. The answer also placed announcements, market chatter, and price action in adjacent sentences—even without the word "caused," a reader could take it as confirmed causation. Don't let it keep generating more reasons. Instead, run **a dedicated attribution audit in the same conversation**:

```text
Please audit your previous answer. Go sentence by sentence and find every statement that attributes a price move or implies causation,
and reclassify it into three columns: "confirmed facts," "market interpretations," and "unverified assumptions."
For each item, give the evidence link and publication time. Downgrade sentences with insufficient evidence outright—don't write new justifications.
Finish with a summary under 500 words that can go into the post-market review.
```

In the second round it proactively flagged media attributions, tape-reading speculation, and secondhand platform sources, downgrading anything with weak evidence—the summary still kept the day's price action and corporate events, but stopped force-fitting a reason onto every move.

Sources come in three tiers, and **a lower tier can never override a higher one**: exchanges and company announcements confirm corporate facts → stable quote sources own prices and volumes → media and market commentary only supply interpretations pending verification. When a media claim conflicts with an announcement, keep the announcement in the main text and write the conflict into the next trading day's question list. Different sources may define turnover, trading volume, and fund flow differently—just because numbers have decimals doesn't mean they belong in the same table. Announcement timing also needs to be judged against trading sessions (pre-market disclosure, mid-session leak, or post-close release mean different things for that day's review).

### A Draft You Can Keep Using the Next Day

The final round hunts for no new explanations—it only tightens sources, cutoff times, and causal grading:

```text
Based on the attribution audit you just completed, produce the final deliverable version of this chapter.
The review date stays fixed at August 28, 2026, and the subject list stays the same four stocks.

Re-verify, item by item, the dates, units, original links, and actual publication times of closing prices, price changes,
turnover, turnover rates, company announcements, and the day's news. Delete any fund-flow figures without a stable original source—
don't substitute aggregated values with unclear methodology. Keep sorting every price-move reason into "confirmed facts," "common market interpretations,"
and "unverified assumptions"; only evidence that predates the price change and can support a causal link
may be written up as a contributing factor.

Output four-stock-post-market-review_2026-08-28.md, containing the four-stock table, event timeline, source-verification table,
a closing summary under 500 words, five verification questions for the next trading day, and an item-by-item checklist.
Save as a new file and keep the previous version for comparison. At the end, list explicitly which numbers and attributions were deleted or downgraded.
Do not give buy/sell advice.
```

When you open the file the next day, check the task date and the four-stock table first (to confirm "which day and which stocks am I looking at"), then follow the event timeline to check number definitions and event ordering—**if the news came out after the price move, it cannot be used to explain that move**.

## Part 2: Turning a One-Off Review into Continuous Tracking

A watchlist is about continuity: yesterday's open questions must have a status today—confirmed, refuted, or still waiting. Switch to the "**Market Hotspot Analysis**" capability:

```text
Please generate a daily AI computing-power watchlist report for the close of August 28, 2026,
covering Foxconn Industrial Internet 601138, Zhongji Innolight 300308, Eoptolink 300502, and Cambricon 688256.

Verify the day's quotes, turnover, fund-flow data, company announcements, public news, and sector moves.
Keep company facts, industry events, market interpretations, and unconfirmed chatter separate; attach the date, unit, and original source to every number.
When two things happen on the same day, don't write one as the cause of the other's price move.

Output a four-stock table, the day's three most important events, explanations for unusual moves, signals to verify on the next trading day, and data gaps.
When a data point is unavailable, state the gap explicitly—don't fill it in yourself.
This time generate a one-off report only: don't create a scheduled task, and don't give buy/sell points or position advice.
```

One detail worth knowing: when Doubao Work outputs real-time stock data, it calls `seed_finance_search` (a database from Hithink/10jqka), so the data source's accuracy is backed by a proper feed.

### Run the Source Audit and the Time Audit Separately

Don't mash both questions into a single "please check":

```text
Please audit the quotes, fund flow, announcements, and news in the report you just produced. List the actual data sources and timestamps for each,
and delete anything that can't be traced. Rewrite every unusual-move explanation into three columns: evidence, common interpretations, and questions to verify.
Finally, output a condensed report ready to paste straight into the watchlist record.

Check the fixed data cutoff once more. Delete any US-stock, news, or market information that occurred or was disclosed only after
August 29, 2026 Beijing time, keeping only material already available as of 23:59 Beijing time on August 28, 2026.
List, one by one, the conclusions that need rewriting because of these deletions,
then output the revised watchlist report.
```

The first round surfaced 4 announcement-date errors, several dead media links, and conflicting sources for trading volume and Cambricon's fund flow—corrected to total market turnover of RMB 2,117.7 billion across the three exchanges (down RMB 23.2 billion from the prior day), and for Cambricon only the Hithink-figures net inflow of RMB 696 million was kept while the conflicting set was deleted. The second round removed Nvidia, Marvell, and Philadelphia Semiconductor Index moves that occurred after the US close on August 28 Eastern Time, plus a tracking report disclosed on August 29, and withdrew every overseas-market signal, next-day cue, and company interpretation that had been inferred from them.

**A daily report's historical value comes from its versions**: keep the first draft, the source-audit version, and the cutoff-revised version. Only then can you see, looking back the next day, which numbers were changed and which conclusions disappeared because material was withdrawn. The watchlist should also maintain question status: when generating a new daily report, read the previous version's question list first, then update statuses—that's what makes it continuous research. If nothing significant changed that day, write "no new key facts found"—you don't need to manufacture a stretch of market commentary just to have content every day.

### Produce the Final File

```text
After the two rounds of time and source audits, produce the final deliverable version of the AI computing-power watchlist daily report.

The cutoff stays fixed at 23:59 Beijing time on August 28, 2026. Re-verify the actual data sources and timestamps of quotes, turnover, fund flow,
company announcements, news, and industry events. Delete fund-flow data with unstable sources or unclear methodology outright;
information that occurred or was disclosed only on August 29 Beijing time may only appear in the retraction log;
financial-media paraphrases that can't be traced back to the company, the exchange, or original event materials become leads, not confirmed facts.

Output ai-compute-watchlist-daily_2026-08-28.md, containing the four-stock table, the day's three events,
the evidence / common-interpretations / questions-to-verify columns, next-trading-day verification signals, data gaps, the retraction log,
the source-verification table, and an item-by-item checklist. Save as a new file, keeping the previous report and both audit records.
Finally, answer explicitly whether any information past the cutoff still remains in the formal conclusions. Do not give buy/sell points or position advice.
```

## Turn It into a Scheduled Task

The whole workflow can be saved as a **scheduled task**: use your own stock pool as the sample, and get a daily report pushed automatically at a fixed time. When adapting it to your own research, replace at least six variable groups: [tickers or sample scope], [fixed cutoff time], [reporting period], [fields and formulas], [source priority], and [final filename]. Freeze the date and sample before searching; the first prompt covers the questions, the second checks only sources, units, formulas, and the cutoff; land the results in files and question lists rather than stopping at a chat summary; open the final file and read it back once to confirm key numbers are traceable.

> What this chapter produces is a post-market record, an event timeline, and a next-trading-day question list—**it's a research draft, not buy/sell advice, position sizing, price targets, or any return guarantee**.

After the close, first generate the day's factual record, then write only the items that genuinely change your view into the watchlist; the next day, continue only along the unfinished items. A daily report doesn't need to manufacture opinions every day—it only needs to tell you: **what more do I know today, and what is still unclear?**

---

Next: [After Earnings: Check Growth First, Then Growth Quality →](/en/doubaowork/case-earnings-quality)
