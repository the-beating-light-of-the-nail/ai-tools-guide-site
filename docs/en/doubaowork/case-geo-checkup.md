# Running a GEO Checkup on Your Personal Brand

> Scenario: judging whether an IP is visible used to mean searching the name and checking follower counts; now there's a new entry point—**more and more people just ask an AI**. Can the AI match your Chinese name with your English account? Will it pin a same-named project on you? Does it cite your own homepage, or an aggregator page that's been reposted three times?

You can't test these with a casual "do you know so-and-so"—the question isn't fixed, the timing isn't fixed, and neither is the judging standard. This field test ran a full checkup with a fixed process: **prepare a public-fact baseline card and 5 fixed questions → search publicly question by question, verify sources, score → generate a monitoring table and fix recommendations**. This round scored 29/30: no question went completely unrecognized or flat-out wrong, but it surfaced 1 identity-confusion risk and 1 source-quality issue.

## Set the Boundary First: This Is Retrieval

This process does exactly three things: read facts you've confirmed as public, check public web pages, and generate a local report. It won't edit your homepage automatically, won't publish statements for you, and can't guarantee every AI changes its tune the moment you fix your bio—search results shift, model versions change. So the result represents "one field test, on one day, with one assistant, in Simplified Chinese". Also: **numbers that move—follower counts, star counts, ranking positions—work as a snapshot of the day, but must not be treated as stable identity facts**.

The toolset is minimal: the "VOC & Public Opinion Research" Skill (multi-source public search, information classification, source tracing) + built-in public search. No extra search connector needed, and no cross-comparing multiple AI assistants (too many variables).

## Prepare Two Inputs

**The public-fact baseline card**—only stable facts you can confirm and are willing to make public: your public name and usual English account; your outward identity and long-term sharing topics; your public homepage; verifiable representative projects; and—importantly—**what's explicitly excluded from the baseline** (real name, contact details, live follower counts, unconfirmed titles).

**Fixed monitoring questions** (5 in this run, testing respectively: can the entity be recognized, are accounts attributed correctly, can representative content be found, do the Chinese and English names match, and will same-named projects lead it astray):

1. Who is so-and-so? What do they mainly share publicly?
2. Which public accounts and representative projects can be confirmed as belonging to so-and-so?
3. If I want to learn [your topic], what public material from so-and-so is worth consulting?
4. Are "Chinese name" and "English account" the same creator? Give verifiable public sources.
5. Has so-and-so publicly shared [specific sub-topic]? If so, what projects?

## The Field-Test Prompt

Basis, scoring, source priority, and safety boundaries all stated in one pass:

```text
I maintain the public information for the personal brand "[your public
name / English account]".
Use the "VOC & Public Opinion Research" capability to run a reproducible
AI-answer visibility check.

Inputs:
1. Public-fact baseline card: [path to ip-baseline.md]
2. Fixed monitoring questions: [path to audit-questions.md]

Check basis:
- Assistant: the current Doubao Work conversation
- Date: [fill in the test date]
- Language: Simplified Chinese
- Check public web pages only; do not read private account data; do not
  search for or infer contact details, home address, income, or other
  private information.

Execute these steps:
1. Read both input files first; confirm the baseline facts and the fixed
   questions are complete.
2. For each question, run an independent public search and answer as if
   encountering the name for the first time—do not just copy the baseline
   card.
3. For each question, record: the original question, an answer summary,
   whether the public name was correctly identified, whether it matched
   the English account, factual errors or omissions, cited URLs, source
   type, access status, and search time.
4. Bucket question-level results into four categories: not surfaced,
   misdescribed, identity confusion, poor source quality; if a category
   has none, explicitly write "none found".
5. Judge source priority as: the person's own public homepage or projects
   > explicitly bylined public coverage > aggregator or repost pages. A
   third-party page alone cannot prove account ownership.
6. Score each question 0-2 on three axes: did the entity appear, is the
   identity accurate, is the source reliable; keep written reasoning, not
   just totals.
7. Summarize which public information is already consistently visible and
   which lacks a consistent, citable public page. Fix recommendations must
   land on specific pages and fields—for example, how to align the bio,
   project READMEs, and author pages; do not promise that changes will
   definitely affect model answers or rankings.
8. Run a self-check: does every conclusion trace back to a URL; was a
   single test extrapolated to all AI assistants; was third-party
   information written as facts confirmed by the person.

Deliver two files:
- "personal-brand-ai-visibility-monitor.md": the basis, per-question
  results, scores, sources, and limitations.
- "public-material-fix-recommendations.md": ordered P0 / P1 / P2, stating
  the public page to change, the current problem, the recommended action,
  and the retest method.

In chat, only summarize: total score, how many times each of the four
problem categories occurred, and the 3 public information points most in
need of fixing.

Safety boundaries: read-only checks and local file generation only; do not
modify any public homepage or project; do not publish content; do not send
messages; do not promise to manipulate model answers.
```

Three things to watch during execution: did it **actually open public pages** instead of answering from model memory; is account attribution backed by **the person's own homepage or projects**; and was third-party reposting mislabeled as "facts confirmed by the person". "A third-party page says this account belongs to X" isn't enough evidence—the sturdier chain is the person's GitHub project linking to X, and the X homepage linking back to GitHub, the two public pages verifying each other.

## Field Result: 29/30—Not Perfect, and More Useful for It

| Question | Entity appears | Identity accurate | Source reliable | Subtotal |
| --- | --- | --- | --- | --- |
| Q1 who / what they share | 2 | 2 | 2 | 6/6 |
| Q2 public accounts & projects | 2 | 2 | 1 | 5/6 |
| Q3 learning material | 2 | 2 | 2 | 6/6 |
| Q4 Chinese/English same person | 2 | 2 | 2 | 6/6 |
| Q5 sub-topic projects | 2 | 2 | 2 | 6/6 |
| **Total** | **10/10** | **10/10** | **9/10** | **29/30** |

Category distribution: not surfaced 0, misdescribed 0, identity confusion 1, poor source quality 1. What's genuinely worth acting on is 3 P0 fixes:

1. **GitHub profile bio is empty**—the account can be found, but the profile doesn't state the Chinese name or identity, so the AI has to detour through repo READMEs to make the connection;
2. **The X account lacks an independently verifiable link back to GitHub**—only a one-way claim from GitHub to X was found, with no verified reverse link;
3. **A near-identical same-named project exists**—another author's repo differs by one letter, and the AI could cite the wrong repository.

The monitoring table detected the X account, the GitHub account, and the representative open-source projects, with the personal positioning almost spot-on; the fix recommendations did point at what was missing—reading it prompted an immediate fix.

> The score isn't the point. What's valuable is: **every lost point traces back to a public page, every recommendation lands on a specific field, and in a week or two you can retest with the same questions.**

## Running This on Your Own IP: Check Against This List

1. Write the public-fact baseline card first; don't mix in privacy or moving numbers;
2. Fix the assistant, date, language, and 5-10 questions;
3. Search independently per question; don't let the AI just copy the baseline;
4. Score entity-appearance, identity-accuracy, and source-reliability separately;
5. Prioritize the person's own homepage or projects; treat third-party reposts as supporting evidence only;
6. Keep "not surfaced / misdescribed / wrong person / weak source" in separate buckets;
7. Make recommendations land on pages, fields, and a retest method;
8. No auto-editing homepages, no auto-publishing, no promises to sway model answers;
9. Keep the results—only retesting with the same basis next time shows movement.

Personal-brand work used to fixate on fame; now there's one more question: **when someone asks an AI about me, is what comes out accurate enough?** Fix the questions, complete the evidence chain, strip out the unstable numbers, and one vague "search and see" becomes a repeatable, executable audit of your public footprint.

---

Next: [Turning a Viral WeChat Article into a Short Video →](/en/doubaowork/case-viral-to-video)
