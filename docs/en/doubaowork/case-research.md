---
description: "You're busy with something else when your boss drops a line: 'look into this direction, I need it for Friday.' You start searching, end up with dozens of tabs open and numbers from different years, and by the time you present, you're holding a pile of material but can't state a conclusion."
---

# A Research Topic Lands on You Last-Minute—How Do You Ship a Report That's Ready for the Meeting?

You're busy with something else when your boss drops a line: "look into this direction, I need it for Friday." You start searching and end up with dozens of tabs open, numbers from different years, and by the time you actually present, you're holding a pile of material but can't state a conclusion. This page gives you one reusable prompt that turns messy ad-hoc research into a formal report with sources attached, ready to put on the screen.

> Scenario: A research task lands on you out of nowhere—tight deadline, huge topic. Browser tabs multiply, numbers come from different years, and by presentation time you're holding a pile of material but still can't state a conclusion.

## Before You Start, Settle Three Things

Don't send Doubao Work off to search right away. Settle three things first: **whose decision this research supports, which sources are allowed, and whether the final deliverable is a document or a PPT deck**—lock those in before letting Doubao Work search, read closely, and organize, so the later pages don't get torn up and redone repeatedly.

A presentation-ready piece of research has to handle four things at once: the research question serves a concrete decision, the material is traceable, the conclusions carry evidence, and the pages let readers grasp things quickly. The safe order is: **fix the scope and acceptance criteria → collect and verify material → build conclusions with an evidence mapping table → produce the PPT**. Leaving visual polish until after the content is confirmed cuts down rework.

## A General Template

Use this when an unfamiliar topic lands on you. Before filling in the brackets, confirm what decision the research supports, who will read it, and where the time and geographic boundaries lie—the more specific the question, the easier it is to rein in the search scope. Under time pressure you can cut the number of questions and pages, but **the sources of key data must stay**.

```text
Conduct in-depth research on "[research topic]" and produce a PPT report for [target readers].
This research supports [specific decision]; the scope covers [geographic scope] with a focus on [core questions],
and the information window runs from [start date] to [cutoff date].

Read all attachments first, then supplement with public sources.
Prioritize government departments, company websites, financial reports, regulatory filings, academic papers, and authoritative research institutes.
For important facts—market size, growth rates, company operating data, product prices, policy provisions, and timelines—
sources and publication dates are mandatory. Cross-validate every key conclusion with two independent sources where possible.

Clearly distinguish between:
- facts stated directly in the sources;
- analytical judgments built from multiple facts;
- hypotheses lacking sufficient evidence.

Do not fabricate market data, company data, customer cases, or sources.
When sources conflict, show the discrepancy and explain possible reasons.

Keep the PPT to [15-20] slides, suggested sections: executive summary, research scope, market overview, key data,
competitive landscape, user needs, trend outlook, risks, strategic recommendations, action plan, and a source appendix.
One main point per slide, with conclusion-style titles.
Prefer charts, comparison matrices, timelines, and flow diagrams over walls of text.
Every chart must note its data source, statistical definition, and time period.
End with a complete source list including document titles, institutions, publication dates, and links.

Also output:
- the full PPT;
- a one-page executive summary;
- a table mapping key conclusions to their evidence;
- a list of questions the research still couldn't confirm.
```

## Example: Work Agent Industry Research

This example puts **market entry, customer selection, product positioning, and the roadmap** into one task, so the research questions revolve around a management decision; China is the focus with overseas material used for comparison, and the time frame is spelled out:

```text
Conduct in-depth research on "Work Agent industry research" and produce a professional PPT report.

1. Research brief
Target readers: company management, strategy leads, and product leads
Decisions this must support:
1. Whether the Work Agent market is worth entering
2. Which customers and use cases to serve first
3. Product positioning and differentiation
4. A product roadmap for the next 12 to 24 months
Geographic scope: China first, with overseas markets as reference.
Time frame: cover 2023 through 2026 and analyze trends for the next 3 years.

2. Key research questions
1. What is a Work Agent? How does it differ from AI assistants, Copilots, and RPA?
2. What stage of development is the market in?
3. How much room is there in the China and global markets?
4. Which representative companies and products exist at home and abroad?
5. How do the various products differ in positioning, features, and target customers?
6. Which work scenarios suit Work Agents best?
7. Which product capabilities do enterprise customers care about most?
8. What technology, security, and business risks does the industry face today?
9. What trends are likely for Work Agents over the next 3 years?
10. What product and market strategy should a new entrant choose?

3. External research requirements
Prioritize: company websites and official product materials, government/industry associations and research institutes,
listed-company financial reports and public filings, academic papers and authoritative market reports, and credible tech and industry media.
Key data must cite its source, publication date, and link.
Distinguish facts from analytical judgments and industry forecasts. Mark anything unverifiable as "to be verified"—don't fabricate data or cases.

4. PPT requirements
Generate a 15-to-18-slide PPT in Chinese:
1. One core point per slide;
2. Titles should state conclusions directly;
3. Avoid stacking large blocks of text;
4. Prefer charts, comparison tables, matrices, and timelines;
5. Charts must cite data sources and dates.
```

How it ran: the system read the attachments and task scope first, then supplemented with public material, verified key numbers and dates, sorted facts, analytical judgments, and unverified information separately, and built the report pages from that. Once the result lands, first check **whether each key conclusion maps item by item to evidence**, then check publication dates on market data, company information, and product capabilities.

## Leave PPT Polish to a Skill

After content review, use a PPT beautification Skill (such as guizang-ppt) on the **already-stable version**, letting the tool focus on layout, colors, charts, and page rhythm:

```text
Use the Guizang PPT skill to polish the PPT styling
```

You can also just describe the style out loud, like "convert this into a neo-brutalist PPT." Swap in different PPT Skills depending on the audience and format of the presentation.

---

Related scenario: [Auto-Summarize Your Work Day and Get Daily Task Reminders →](/en/doubaowork/case-daily-report)

## FAQ

**What's the actual first step in ad-hoc research?**

Settle three things: whose decision it supports, which sources are allowed, and whether you're delivering a doc or a deck. Get those straight before you let Doubao Work search, or the pages will keep getting rebuilt.

**Will Doubao Work invent data on its own?**

Pin it down in your prompt with "do not fabricate." The template already requires it to mark unverifiable information "to be verified" and to prefer authoritative sources like government, financial reports, and academic work. When you get the report, check that key numbers carry a citation.

**Why can't key data citations be dropped?**

Because someone at the meeting will ask "where does that growth come from," and not having an answer is awkward. Keeping the citation means you can absorb the challenge—and check back against the original yourself.

**Can I have it make the PPT pretty from the start?**

Not yet. Visual polish goes after the content is confirmed. Pretty up an unconfirmed draft and every change to a conclusion drags the layout with it—more work, not less.

**How do I cut scope when time is tight?**

Reduce the number of questions and slides, but keep the sources for key data. Fewer slides is fine; a conclusion with no basis behind it isn't.
