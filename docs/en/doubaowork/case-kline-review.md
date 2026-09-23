---
description: "You catch sight of a stock's candlestick chart and words pop into your head—\"uptrend,\" \"breakout on volume,\" \"pullback stabilizing.\" They're quick to write, but think for a second: they may already reach past what the image itself can prove."
---

# How Do You Turn One Candlestick Screenshot Into an Investment Review Where Every Claim Has Data Behind It?

You catch sight of a stock's candlestick chart and the words come instantly: "uptrend, breakout on volume, pullback stabilizing." They're quick to write—but stop for a second and you'll see they may already have gone past what the image itself can prove. This page turns one screenshot into an investment review where every sentence has data behind it, rather than a conclusion built on gut feel.

> Scenario: a candlestick chart invites instant judgment—"uptrend, breakout on volume, pullback stabilizing" come quickly to the pen, yet may already exceed what the image itself can prove. Turning one screenshot into an investment review **where every sentence is backed by data** is the job an agent should be doing.

> ⚠️ Everything in this chapter is for study and discussion only and constitutes no investment recommendation.

This case demonstrates a complete agent workflow: **VLM visual recognition → automatic invocation of specialized tools → multi-role deep discussion → structured report output**, with no manual tool-switching anywhere in the chain.

You might worry that you don't know finance. You don't need to understand quantitative models, and you don't need to write code. Take a screenshot, paste a prompt, and let it handle the rest.

## Step 1: Read the Chart—VLM Parses the Candlesticks

Screenshot a daily candlestick chart and MACD indicator chart of an A-share with a clear recent technical pattern and upload both:

```text
I've uploaded a daily candlestick chart and a technical indicator chart
(MACD) of an A-share stock. Acting as a professional technical analyst,
complete the following:
1. Identify the stock: which stock is it? Roughly what is the current
   price?
2. Candlestick pattern analysis: what pattern has formed recently? How did
   the last 5 trading days behave specifically?
3. Moving-average analysis: the alignment of MA5/MA10/MA20, and whether a
   golden cross or death cross appeared recently
4. MACD analysis: the relative positions of DIF and DEA, the histogram
   trend, and any divergence
Output a technical quick-read report combining tables and text.
```

Recognition was highly accurate in testing: the bullish MA alignment was correctly identified, the MACD signals judged correctly, even the long upper shadows were described—a complete technical quick-read extracted from one phone screenshot.

## Step 2: Call in Reinforcements—Bringing In the Financials

Then upload a screenshot of the stock's financial data:

```text
I've now uploaded a screenshot of this stock's latest financial data.
Please:
1. First recognize all the financial metrics in the screenshot
2. Then, combining the first round of technical analysis, produce a full
   A-share analysis:
   - Technical verdict (directional judgment combining candles, moving
     averages, MACD, KDJ)
   - Fundamental verdict (revenue growth, profitability, valuation level)
   - Liquidity observation (volume trend)
   - Overall rating: strong buy / buy / neutral / cautious / avoid
3. Give operational suggestions for the short term (1-2 weeks) and medium
   term (1-3 months)
4. Clearly mark the key support and resistance levels
Output in the format of a professional research report.
```

It also auto-invoked an A-share analysis Skill to expand the work—overall rating, support and resistance levels, short- and medium-term calls all in place, with clean layering of tables, bullets, and conclusions.

## Step 3: The Roundtable—An Investment Advisory Board of Four Counselors

The most crucial step of the whole flow takes just one follow-up:

```text
Very professional analysis! But I still can't make up my mind about this
stock. Now convene an advisory board for me: I want four counselors to
discuss whether this stock is worth investing in:
- Buffett: from a value-investing perspective (intrinsic value, moat,
  margin of safety)
- Musk: from the perspective of tech trends and disruptive innovation
- Bill Gates: from the perspective of business models and industry
  structure
- Jobs: from the perspective of product strength and user experience
Discussion requirements:
1. Each counselor first states an independent view
2. Then a cross-examination round where the counselors challenge each
   other's views
3. Finally, each gives a one-sentence final call: buy / hold / sell
4. As the moderator, synthesize the four opinions into a final action plan
Ground the discussion in the data from the previous two rounds—make the
counselors argue with numbers.
```

Note: **nobody manually specified "invoke the advisory-board Skill"**—the model judged for itself what tools and data the next step needed, then scheduled them. That is the core value of agentic capability: more than passively answering questions.

The four virtual counselors take the stage in turn, and crucially they **aren't chatting in a vacuum**: each cites real data from the earlier rounds. Buffett says "a good company, but not a good price"; Musk retorts "you can't drive looking through the rearview mirror"; Gates adds industry-structure data; Jobs offers a different take from product competitiveness—four people arguing back and forth, every sentence backed by data. This "arguing with data" choreography requires the model to hold together **multi-Skill chained invocation, cross-Skill context passing, and persona consistency**—one weak link and it falls apart.

Finally the model synthesizes the four views into a report automatically, and can also invoke a magazine-layout Skill to produce a "one-page summary (quick scan) + detailed analysis (for the file)", with risk warnings, an action plan, and position sizing all in place.

> The Skills used in this case (A-share analysis, advisory board, etc.) are open-sourced on GitHub: [isjiamu/jiamu-skills](https://github.com/isjiamu/jiamu-skills). The same approach extends to any stock-analysis platform, and Doubao Work supports it equally.

---

End of the finance scenarios. Back to the reference section: [Doubao Work Prompt Templates →](/en/doubaowork/ref-templates)

## FAQ

**Can I run this without a finance background?**

Yes. Take a screenshot, paste the prompt, and it handles the chart reading, the financials, and the board discussion. Your job is checking whether each conclusion in the final report has data under it.

**Why insist that every sentence be backed by data?**

Because a candlestick chart makes it easy to invent a story. Have it list evidence separately for technicals, fundamentals, and liquidity, and the conclusion stands up—instead of "it feels like it's going up."

**Do I install a Skill manually for the board step?**

No. Just ask it to "convene an advisory board," and the model decides which tool to call. That difference is exactly what separates an agent from a chatbot.

**Can the screenshot recognition be wrong?**

Yes. After you get the technical quick-read, check the stock name, price, and moving-average alignment yourself. However accurate the recognition is, key numbers deserve your own eyes.

**Can I use these conclusions as investment advice?**

No. The warning at the top of this page holds throughout: this chapter is for study and discussion only and is not investment advice. Practice with it by all means; real money is another matter.
