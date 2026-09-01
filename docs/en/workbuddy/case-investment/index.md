# Chapter 18: Making Investment Analysis Part of Your Daily Routine

Investing is information-dense, highly structured, and utterly dependent on judgment: endless financial reports, tangled industries, relentless bull-vs-bear arguments. Organizing fragmented information, breaking down complex materials, and laying the reasoning out in the open happen to be exactly what AI is good at. This chapter walks through a complete stock research cycle and shows which low-grade repetitive labor AI can take off your plate, giving your attention back to judgment itself.

> **Risk disclaimer: all prompts, Skills, and examples in this chapter are for research assistance only and do not constitute investment advice. Markets carry risk; invest with caution.**

## First, Be Clear: What Should AI Do in Investing

Most people imagine "AI stock trading" as predicting ups and downs. But looking at real, high-frequency usage, the valuable applications cluster into four kinds:

- Financial reports I can't finish — summarize them for me;
- The industry is too complicated — walk me through the logic;
- The market is too noisy — put the bull and bear cases in one table;
- I'm afraid of talking myself into it — find me the counter-evidence.

None of these is "predict the price." They're all about **cutting time spent on low-quality thinking**. The most sensible role for AI in investing is a tireless, emotionless, on-call research assistant — it builds the factual foundation, and leaves the judgment to you.

Before starting, calibrate with five questions, just like in [the Office Trio](/en/workbuddy/case-office/):

| Question | What to pin down | Example |
| --- | --- | --- |
| Goal | What decision will this research support | Whether to add to the watchlist, or whether to adjust positions right now |
| Target | Which company, which industry | T&S Communications (300394), optical communications / CPO sector |
| Materials | Which are fact sources, which are mere references | Annual report, Q3 report, and broker research are fact sources; stock forum opinions are sentiment references only |
| Depth | Facts only, or all the way to valuation and bull/bear scenarios | Build the factual base first, then bring in due-diligence-grade DeepResearch |
| Acceptance | How to judge the result as usable | Every judgment traceable to a data source; facts and opinions labeled separately |

## The Finance Skill Set

| Skill | Best for | How this chapter uses it |
| --- | --- | --- |
| `stock-advisor` | End-to-end analysis of a single stock | Upload screenshots or give the ticker; it runs technicals, fundamentals, cross-validation, the advisory board, and formatting automatically |
| `a-share-analyst` | A-share daily market moves and stock screening | Real-time quotes, technical indicators, quant screening, daily reports |
| `financial-expert` | Financial data queries and screening | Stock screening, financial metrics, macro/industry time series, research report retrieval (depends on a data-source MCP) |
| `peers-advisory-group` | Multi-perspective decision discussion | Four "advisors" cross-examine one another around a single question |

How to combine them: **for daily market watching and batch screening, use `a-share-analyst` and `financial-expert`; to go deep on one stock and produce a full report, use `stock-advisor`; when you need to break out of a single perspective and force yourself to see the other side, bring in `peers-advisory-group`.**

## A Reusable Research Prompt Chain

Ordered from simplest to most involved, covering the full chain from "gathering facts" to "making the call." Build the factual base with the first three; go further when you need to dig. Usage: replace the placeholders in `【】` with your target and paste.

### Prompt 1 | Build a "Factual Base" for the Company

Many wrong calls start at step one — misidentifying the business. You think it makes money from A, but profit mainly comes from B. This step compresses the time cost of "getting the facts straight."

```markdown
Please systematically organize the fundamentals of [Company XXX] and output a structured summary, including:
1) Core business and main product lines
2) Revenue and profit composition
3) Major customers and application scenarios
4) The company's position in the industry chain
5) The most important strategic changes in recent years

## Requirements:
- Use only verifiable information
- Cover each part in 3–5 bullet points
- No investment advice — facts only
```

### Prompt 2 | Industry Lens: Is This a "Good Industry"

What you're often picking isn't a company but an industry. AI is well suited to a "first-principles" industry overview — but don't expect it to call industry inflection points or price bottoms.

```markdown
From an industry research perspective, analyze the [XXX industry] where [Company XXX] operates:
1) The industry's cycle stage (recovery / expansion / downturn / depression)
2) Supply-demand dynamics and key drivers (capacity, operating rates, inventory, order/delivery lead times)
3) Price formation and historical volatility (price indices/spreads/cost pass-through, Capex trends and new capacity)
4) Industry concentration and competitive landscape
5) Key external variables (policy, technology, macro)
Clearly indicate: which factors are long-term structural, and which are short-term fluctuations.
Output: a cycle-stage judgment + a list of key evidentiary charts + 3 leading indicators and 3 lagging indicators.
```

### Prompt 3 | Business Breakdown: How Is the Money Actually Made

The key step from "looking at a company" to "looking at a business." Mixed-type companies (main business A, profits from B) especially benefit from having AI lay this bare.

```markdown
From a [value investing / fundamental research] perspective, break down the business of [Company XXX].
Core question: what does this company truly, durably make money from?

## Requirements
- Based only on verifiable information (annual reports, prospectuses, periodic filings, authoritative industry reports)
- Clearly separate [facts] from [judgments]; every judgment must come with evidence or a chain of logic

## Required structure
I. A one-sentence conclusion on how the company "makes money" (50 words max)
II. Full breakdown of the business structure (quantified): each line's revenue share, gross margin, growth trend;
    which businesses contribute most profit; whether "main business ≠ profit core"
III. The money-making mechanism: how it charges (one-off/subscription/repeat purchase); where costs go; what determines gross margin;
    whether there are economies of scale
IV. Customers, channels, and pricing power: core-customer concentration; pricing power; customer switching costs
V. Non-core profits: what comes from investment gains/subsidies/asset disposals, and the impact on long-term valuation
VI. Stability and fragility: which assumptions, if broken, collapse the profit logic;
    summarize with 3–5 "key monitoring metrics" for continuously verifying the business
```

### Prompts 4–7 | Financial quality, governance, market disagreement, valuation moat

The middle four steps each tackle one specific question, with similar prompt skeletons (explicit requirements + cross-validation + no conclusions):

```markdown
Analyze the financial quality of [Company XXX] over recent years:
1) How well revenue, profit, and operating cash flow match
2) Changes in receivables, inventory, and contract assets
3) The impact of non-recurring items on profit
4) Financial risk points worth close attention
## Research principles: do not predict the stock price; judge financial "quality" only;
enforce a "profit vs. cash flow" cross-check; for every anomaly, offer an explanatory hypothesis and a way to verify it.
```

```markdown
Summarize the market's main disagreements about [Company XXX]:
1) The bull side's core logic  2) The bear side's core logic  3) Each side's most important evidence
4) Which disagreements can be settled by future data  5) What the key verification milestones are
## Analysis requirements: no taking sides; no investment advice; every judgment must be verifiable by future data or events.
```

```markdown
Analyze the moat of [Company XXX] from a value investing perspective, citing company disclosures/authoritative sources:
provide evidence one by one across five dimensions — pricing power, switching costs, network/scale effects,
intangible assets, and competitive response.
Output: a moat strength score (0–5) + an evidence table + the most likely points of erosion and monitoring metrics.
```

### Prompt 8 | The Full Package: A Due-Diligence-Grade DeepResearch

This compresses the logic of the first seven steps into a single "investor due diligence report" framework, mandating separation of facts from judgments, cross-validation, and forced bear-case and black-swan reasoning — built to counter the **confirmation bias** humans fall into most easily. It works well in any AI's DeepResearch mode. Skeleton:

```markdown
I need an investor due diligence report on [XXX], style [value investing], horizon [1–3 years, medium-to-long term].

## Research principles
1. Financial data covering the past 3–5 years of trends (CAGR); valuation percentiles looking back 5–10 years
2. Separate [facts] from [judgments]; judgments must rest on verifiable data (annual reports, prospectuses, exchange inquiry letters)
3. Dual verification: "profit vs. cash flow" cross-check + "company vs. peers" comparison
4. Counter-intuitive thinking: must include bear-case logic and black-swan risk scenarios

## Analysis phases
Phase 1 Business model and moat breakdown (does the main business draw the crowd while a side business earns the profit?)
Phase 2 Industry cycle and supply-demand landscape (inventory, operating rates, Capex as evidence)
Phase 3 Financial health sweep (ROE DuPont breakdown, cash quality, profit excluding non-recurring items)
Phase 4 Governance structure and capital allocation (pledges, insider sales, capital allocation ability)
Phase 5 Valuation logic and risk anti-fragility (historical percentiles, reverse DCF, bear-case view)

## Output
A traffic-light rating (buy/hold/sell) + key financial data tables + the five-phase body +
a valuation dashboard + a forward monitoring list (event A strengthens the thesis / data B deteriorating falsifies it and triggers exit)
```

## From Prompts to a Skill: How `stock-advisor` Grew

Each of the eight prompts works well alone, but researching a stock fully means wiring them manually, redoing everything for a new ticker, eyeballing the data, arguing yourself into decisions, and assembling deliverables by hand. `stock-advisor` turns that chain **from "a pile of prompts" into "a pipeline that runs end-to-end with one click"**:

![](/workbuddy/case-investment/assets/001_stock-advisor-overview_Lxy0b4axOo.png)

| Module | What it does | Key design |
| --- | --- | --- |
| ① Technical analysis | Recognizes patterns, moving averages, and MACD from candlestick charts, cross-checked against market data | Dual-track image recognition + data; on conflict, data wins and the discrepancy is flagged |
| ② Fundamental analysis | Recognizes key metrics from financial reports, adds valuation and peer comparison | Technicals/fundamentals/money-flow each scored separately, then combined into a rating |
| ③ Multi-source cross-validation | Searches research reports, industry news, news, and policy online | Contradictory signals must be flagged as explicit disagreements |
| ④ Advisory board discussion | Invokes `peers-advisory-group`; four advisors cross-examine each other | Reuses an existing Skill, institutionalizing "find the counter-evidence" |
| ⑤ Formatted output | Structured report, convertible to magazine-style HTML / PDF, uploadable to Feishu | Reuses layout and document Skills |

Here lies the most valuable lesson for Skill building: **reuse rather than rewrite**. The technical indicator scripts reuse `a-share-analyst`, the decision discussion reuses `peers-advisory-group`, the layout reuses `magazine-layout` — only a few blocks were newly written. To build a complex Skill, treat existing capabilities as building blocks: fill whichever block is missing, then orchestrate them along one main line.

It also has two "product-grade" touches: a profile on first use (asking your risk preference, horizon, industries of interest, and position cap, saved into memory); and two entry points feeding the same pipeline (uploading screenshots goes through image recognition + data verification, while giving the ticker goes purely data-driven).

In one sentence: **it compresses "a serious stock research session" from half a day of manual work into a single conversation.** The human shifts from "hauling and stitching" to "deciding and challenging."

## In Practice: Running T&S Communications (300394) Through `stock-advisor`

The target is T&S Communications (300394), optical communications / CPO sector. The whole run proceeds in three steps: first the chart, then the financials, and finally an advisory board session.

### Step 1: Upload the Candlestick Chart and Ask for a Technical Quick-Read

```text
I've uploaded a daily candlestick chart and a technical indicator chart (MACD) of an A-share stock. Acting as a professional technical analyst:
1. Identify the stock: which stock is this, and roughly what's the current price?
2. Candlestick pattern analysis: what pattern has formed recently? How have the last 5 candles behaved?
3. Moving average analysis: the arrangement of MA5/MA10/MA20 — any golden or death cross recently?
4. MACD analysis: the DIF-DEA relationship, histogram trend, any divergence?
Output a technical quick-read report combining tables and text.
```

![](/workbuddy/case-investment/assets/003_image_CrgibiDW3o.png)

WorkBuddy first recognized from the chart that this was T&S Communications, currently around CNY 368.70, then delivered a structured quick-read: MA5 > MA10 > MA20 in a standard bullish alignment, still in a main uptrend; but that day printed a long upper shadow (spiked to 376.10 before falling back to 368.70), the MACD histogram was starting to shrink, and the bias was stretched; support at MA5 (347) / MA10 (319), resistance at the day's high of 376. Note it didn't guess the direction — it structured "what can actually be read from the chart."

![](/workbuddy/case-investment/assets/004_image_WX6WbFC9Oo.png)

### Step 2: Add Financial Report Screenshots for a Full Analysis

```text
I've now also uploaded this stock's Q3 2025 results and full-year pre-announcement data. Please:
1. First recognize all the financial metrics in the screenshots
2. Combined with the earlier technical analysis, do a complete A-share analysis:
   overall technical rating, overall fundamental rating (revenue growth, profitability, valuation),
   money-flow observations, and a composite rating (strong buy / buy / neutral / cautious / avoid)
3. Give operational suggestions for the short term (1–2 weeks) and medium term (1–3 months)
4. Clearly mark key support and resistance levels, formatted like a professional research report.
```

![](/workbuddy/case-investment/assets/007_image_CScebfl1io.png)

It first recognized the metrics in the screenshots line by line (revenue CNY 3.918B, +63.63% YoY; ROE 31.30%; PE 146.70...), then synthesized a composite rating table:

| Dimension | Score | Weight | Weighted score |
| --- | --- | --- | --- |
| Technicals | 4.0 / 5.0 | 25% | 1.00 |
| Fundamentals | 4.5 / 5.0 | 30% | 1.35 |
| Valuation | 2.0 / 5.0 | 25% | 0.50 |
| Money flow | 4.0 / 5.0 | 20% | 0.80 |
| **Composite** | — | — | **3.65 / 5.0** |

The final rating was "buy," with a notably restrained core conclusion: **the medium-term trend is favorable (CPO boom + high growth), but short-term the valuation is stretched and the run-up too large — don't chase; wait for a pullback.** An expensive valuation gets docked from the total score — it won't turn blindly bullish just because growth is good.

![](/workbuddy/case-investment/assets/008_image_I6uBbecypo.png)

### Step 3: Still Undecided? Convene the Advisory Board

```text
But I'm still on the fence about this stock. Please convene an advisory board with four advisors to discuss whether it's worth investing in:
- Warren Buffett: value investing perspective (intrinsic value, moat, margin of safety)
- Elon Musk: technology trends and disruptive innovation perspective
- Bill Gates: business model and industry landscape perspective
- Steve Jobs: product strength and user experience perspective
Discussion format: each gives an independent view first; then cross-examination; finally each gives a one-line
final recommendation of buy/hold/sell; you, as moderator, synthesize the views into an action plan.
Base the discussion on the data from the previous two rounds so the advisors "talk with data in hand."
```

![](/workbuddy/case-investment/assets/011_image_LuArbEta0o.png)

In the advisory board stage, the system first refreshed its data online (full-year 2025 revenue, the Q1 2026 sequential decline, comparisons against Zhongji Innolight and Eoptolink) — the cross-validation module pushed the discussion beyond the screenshots to the latest facts from across the web. The four advisors split 2:2: Buffett says avoid ("PE 142, zero margin of safety"), Gates says wait ("wait for PE below 60, or switch to a better-value name"), Musk says all in ("CPO is the iPhone moment for optical communications"), Jobs says hold conditionally ("provided the CPO FAU delivers on schedule in H2 2026").

The moderator then synthesized an **action plan segmented by investor type**, anchoring decisions to future verification milestones:

| Investor type | Recommendation | Execution points |
| --- | --- | --- |
| Value investor | Firmly avoid | Wait for PE < 40 |
| Growth investor | May hold, with a stop-loss | Trim below MA5 (347), clear out below MA10 (319) |
| Trend investor | Participate cautiously | Enter on a pullback to MA10 / MA20 |
| Aggressive investor | Small trial position | 30% max; clear out below CNY 300 |

![](/workbuddy/case-investment/assets/015_image_Y0yvbzLRto.png)

![](/workbuddy/case-investment/assets/016_image_DOOhbmIIeo.png)

After the conversation, you can have it turn the whole analysis into a magazine-style report (save locally as PDF or upload to Feishu). Looking back: `stock-advisor` turned eight loose prompts into a complete research run finished in three conversational rounds — **read the chart → read the financials → convene the board → produce the report** — and at no point did it make that most critical "buy or sell" decision for you.

## Common Mistakes and Boundaries of Use

| Common mistake | Why it's wrong | The right approach |
| --- | --- | --- |
| Asking AI for "entry/exit points" | It has no real-time complete information and isn't responsible for your money | Use it for fact-gathering and bull/bear reasoning; make the trade yourself |
| Fully trusting numbers read from screenshots | Image recognition misreads, and reporting conventions change | Cross-verify key numbers |
| Expecting it to call industry inflection points or price bottoms | That takes forward-looking information and experience AI doesn't have | Have it organize "which leading indicators to watch," and watch them yourself |
| Only reading the bull case until you're swept up | Confirmation bias — AI will amplify your tone | Use the disagreement prompt and the advisory board to force out counter-evidence |
| Treating the AI report as an investment basis | The report is research assistance, not investment advice | Conclusions are for reference; decisions and risks are yours |
