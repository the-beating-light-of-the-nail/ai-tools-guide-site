---
description: "A better starting point is a company fact map: products, customers, channels, costs, moats, and risks on one page, so every later question has somewhere to land. It works both for covering a company for the first time and for picking up research someone else left behind."
---

# Researching a Company for the First Time and Don't Know Where to Start? Build a Fact Map, Then Attach Eight Lines of Inquiry

You open a company's filings for the first time, and it usually goes like this: you've bookmarked a pile of material, skimmed the stock price, the news, the hot concepts—and when someone asks you to explain what it actually sells, why customers pay, and where the profit comes from, you stall. Covering a company for the first time isn't a contest over who has more information. It's about whether you can land scattered material on a stable base. This page gives you a company fact map plus eight key lines of inquiry you can apply straight away, whether you're looking at a company for the first time or inheriting research from someone else.

> Scenario: looking at a company for the first time, it's easiest to start with the stock price, hot concepts, or news—you collect a pile of material and still can't say what it sells, why customers pay, or where the profit comes from.

A better starting point is a **company fact map**: products, customers, channels, costs, competitive moats, and risks on one page, so every later question has somewhere to land. This method works both for first-time coverage and for taking over research material someone else left behind.

## Step 1: Take the Business Apart

Concepts can wait until the end. The first round answers six plain questions: **what it sells, to whom, why they buy, how it's delivered, where the costs sit, and who has bargaining power**. The tool is the "Stock Research" skill, with a fixed data cutoff:

```text
Based on Kweichow Moutai (600519)'s annual reports, periodic reports,
announcements, and investor-relations materials, break down how this
company makes money.

1. Explain what the company sells, to whom, through which channels it
collects money, how revenue is recognized, and where costs mainly go.
Compare revenue, gross margin, growth, and cash collection by product and
channel. Then analyze the role of the distribution system, direct-sales
channels, capacity, base-liquor inventory, brand pricing, and dividends in
the business model.

2. For every figure, state the period, unit, report page, or official
link. Keep company disclosures, management claims, and your own inferences
separate. If social inventory, wholesale prices, or channel profits come
from third-party surveys, state the sample and date separately.

3. Deliver a business map, the money-making logic, five key monitoring
metrics, and three easily overlooked dependencies. No direct investment
conclusions.
```

This prompt has one clear center: every piece of material must answer "how does this company turn products into revenue and cash". Brand lore, company history, and generic industry background off that main line stay out—both to control report length and to make it easy to check whether material actually changed the understanding of the business.

The most useful thing about the generated business map is that it reminds you **not to lift out one pretty metric in isolation**: a shift in direct-sales share can affect channel relationships and cash collection, product mix shapes gross margin, base-liquor output and inventory determine future sellable volume, and terminal wholesale prices must never be mixed with the company's ex-factory basis. When a new report lands, update along the same map instead of restarting from the company intro. On your first pass, use the business map as a reading order: where revenue comes from → margin and collection → capacity and inventory → and only then brand and valuation.

## Step 2: Plug the Eight Prompt Types into the Fact Base

With the fact base in place, prompts stop being eight repetitive searches—each type of question opens one research entry point:

| Entry point | Test case | Skill | Main deliverable |
| --- | --- | --- | --- |
| Company fact base | Kweichow Moutai | Stock Research | Business, products, channels, strategy changes |
| Industry cycle | Zijin Mining | Industry Analysis | Supply-demand, inventory, prices, leading indicators |
| Business breakdown | Midea Group | Stock Research | Business mix, profit sources, cash collection |
| Financial quality | CATL | Performance Analysis | Profit, cash flow, unit and formula review |
| Ownership & governance | Gree Electric | Announcement Analysis | Governance relationships, event timeline, tracking list |
| Bull-bear divide | Cambricon | Market Heat Analysis | Shared facts, conflicting hypotheses, verification milestones |
| Moat & valuation | China Shenhua | Stock Research | Moat evidence and implied valuation assumptions |
| Due-diligence-grade research | BYD | Stock Research | Business, industry, financials, governance, counter-evidence |

The eight prompts (all with fixed data cutoff dates):

**1 · Company fact base**: organize the core business, main products, revenue and profit sources, major customers and channels, position in the value chain, and key strategy changes over the past three years. Use only verifiable announcements, periodic reports, and authoritative sources; three to five bullets per section, every figure with period, unit, and original source.

**2 · Industry cycle**: study supply and demand, inventory, prices, capex, new capacity, industry concentration, and key policy variables; distinguish long-run structural factors from short-term swings. Output a current-cycle judgment, three leading indicators, three lagging indicators, and the data to watch over the next twelve months. Where reliable data is missing, list it as a gap; never present price forecasts as established fact.

**3 · Business breakdown**: quantify each segment's revenue, profit, gross margin, and three-year trend; check for businesses with "big revenue but thin profit contribution", and check subsidiaries, associates, and non-recurring items. Output a one-sentence money-making logic, a business-structure table, and five continuously monitored metrics.

**4 · Financial quality**: cross-validate profit against operating cash flow; check receivables, inventory, contract liabilities, capex, depreciation and amortization, non-recurring items, and accounting-basis changes. Give **two explanations** and a verification path for every anomaly.

**5 · Ownership & governance**: verify control relationships, major shareholders, the board and executives, equity incentives, buybacks, stake reductions, related-party transactions, and capital allocation; build a twelve-month tracking table for unlock dates, buybacks, and incentives. Identities, tenure dates, and event dates must trace back to statutory disclosures.

**6 · Bull-bear divide**: list the **shared facts** first, then separately write the bull and bear core logic, the strongest rebuttals, the conditions future data could verify, and the key verification milestones; keep unconfirmed rumors in a separate list—no picking sides.

**7 · Moat & valuation**: use company disclosures to check resource endowment, cost advantages, long-term contract pricing, integrated operations, and dividends; then **back out the coal price, output, margin, and dividend assumptions implied by the current valuation**. Do not extrapolate a cyclical peak into a permanent norm.

**8 · Due-diligence-grade research**:

```text
Produce an investor due-diligence report on BYD (002594). Research the
business model and moat, auto and battery industry supply-demand, financial
quality over the past three to five years, governance and capital
allocation, implied valuation assumptions, bear logic, and black-swan
risks. Every conclusion must be labeled fact, interpretation, inference,
or judgment. Financial data must cross-validate profit against cash flow;
company data must compare against major peers over the same reporting
periods. Note the period, unit, and original source for every key figure.
Output a fact summary, key financial tables, business and industry
analysis, valuation assumptions, the strongest counter-evidence, a forward
monitoring list, and questions still awaiting verification. No buy/sell,
position, or stop-loss recommendations.
```

## Long Tasks Should Disclose Their Data Gaps

In field tests: Zijin Mining proactively listed 21 data gaps; Gree produced a governance tracking table; Cambricon separated shared facts, bull and bear arguments, rumors, and source-quality tiers. The BYD report slipped past the cutoff (it used the semi-annual report disclosed only on August 29), which an audit prompt pulled back:

```text
Audit the due-diligence report above. Keep all data fixed on or before the
cutoff date; withdraw the semi-annual report disclosed afterward and every
conclusion derived from it. Confirm the report covers financial quality,
governance and capital allocation, implied valuation assumptions, the
strongest counter-evidence, and black-swan risks. Fill gaps only with
material formally disclosed within the cutoff; whatever can't be filled
stays as an open question. Finally list what was withdrawn, what was
filled in, and what remains incomplete.
```

The second round rolled the latest reporting period back to Q1, withdrawing all semi-annual figures and valuation calls; PE TTM and PS were retained, while PB and EV/EBITDA were marked "pending verification" for lack of same-basis data—**peers' latest periods and some third-party data were not force-filled**. Another common issue: long tasks stalling halfway (e.g. an empty directory with no file generated)—resume with "continue from the original requirements already submitted; generate the files directly and give me their paths", restating the cutoff, sources, and delivery format.

## Good Prompts Make the Questions Sharper Over Time

Eight prompt types don't mean running all eight for every company. On first coverage, build the skeleton with the business model; if the revenue structure confuses you, pivot to the financial statements; if the market is loudly divided, move into the bull-bear audit; if there are many peers, run an apples-to-apples comparison. The real value of prompting is **narrowing the research step by step**—questions get more specific, evidence gaps shrink, and only then has this questioning system started to work.

---

Next: [From Screening to Valuation: Compare and Price Only After Unifying the Basis →](/en/doubaowork/case-screening-valuation)

## FAQ

**Is it fine to start from the stock price on first look?**

Better not. Stock price, hot concepts, and news are the easy entry, but no matter how much material you pile up, you still can't explain what it sells or why customers pay. Build the fact map first and your later questions have something to land on.

**Do I run all eight prompts for every company?**

No. On first coverage, build the skeleton with the business model, then go where it hurts: unclear revenue structure, read the filings; heavy market dispute, run the bull-bear audit; many peers, do a horizontal comparison on a unified basis.

**What if figures run past my data cutoff?**

Pull them back with an audit prompt: roll the latest reporting period back one, mark data without a same-basis comparison as pending verification, and never force-fill third-party numbers.

**A long task stalled halfway—how do I resume it?**

Just say "continue from the original requirements already submitted; generate the files and give me their paths," and restate the cutoff, sources, and delivery format. It picks up from there.

**How do you keep inference separate from disclosure?**

Give every figure its period, unit, and original source, and write company disclosures, management claims, and your own inferences in separate places. For inventory or wholesale prices from third-party surveys, note the sample and date separately.
