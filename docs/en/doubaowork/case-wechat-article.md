# From Trending Topic to a Finished Official Account Article

> Scenario: The most time-consuming part of writing a trending-topic article isn't the writing—it's the workflow: verify the numbers first, decide what's safe to say, and after the draft is done, come up with a title and a cover image. Doing these separately invites contradictions: the body says "the vendor claims nearly on par," and an overexcited title turns into "total domination."

This piece ran a complete field test with GLM-5.3-Flash: not one-shot generation, but the article's whole workflow split into **four workflows**—fact pack → long article → title candidates with risk check → cover. More steps, but actually less hassle: every step builds on a previous deliverable, each step is the result of the last, and the whole flow forms a logical loop.

## The Skill Stack

| Task | Combination | Why |
| --- | --- | --- |
| Verify facts before writing | VOC & Sentiment Research + public web search | Reads multiple sources at once, finds conflicts, and preserves original links and evidence gaps |
| Turn material into a long article | Official Account Graphics & Operations Strategy + local fact pack + Lark Doc | Clear factual boundaries while writing; the draft can go to an editor for review |
| Generate titles without clickbait | Viral Titles & Topic Calendar + finished article | Doesn't just give titles—flags misleading risks and use cases for each one |
| Make the Official Account header image | Creative Design + image generation & checking | Settles concept and composition first, then generates and checks aspect ratio, cropping, and text risks |

## Task 1: Before Writing, Get the Facts, Numbers, and Sources in Order

Most people writing tech news follow this order: see a shocking headline → start writing immediately → hunt for sources halfway through to patch holes. Do the reverse: **don't write the body yet**—have Doubao Work deliver a fact pack stating "what can be written, and what can't be written as-is." The prompt names four public sources (the official blog, the Hugging Face model card, the official pricing page, a 36Kr article) and mandates a four-tier classification:

```text
I'm a tech / AI official account editor preparing an article about GLM-5.3-Flash for ordinary office workers and developers.
First build a "writing fact pack"—do not write the body yet.

Read and verify the following public sources in full, in priority order:
1. Z.ai official blog: https://z.ai/blog/glm-5.3-flash
2. Official Hugging Face model card: https://huggingface.co/zai-org/GLM-5.3-Flash
3. Z.ai official pricing page: https://docs.z.ai/guides/overview/pricing
4. Public 36Kr article: https://36kr.com/p/xxxxx

Working requirements:
- First list the 6-8 key questions the article must answer.
- Verify item by item: release date, parameter count, activated parameters, context window, native multimodality, open-source license,
  supported frameworks, pricing, benchmark scores, and deployment on domestic chips.
- Sort the content into four tiers: "official confirmed facts," "vendor self-reported evaluations or judgments," "media retellings,"
  and "still lacking independent evidence."
- Don't substitute search summaries for the original; mark anything that won't open or isn't explicitly stated in the original as "to be confirmed."
- When sources conflict, present them side by side—don't rule for either side.
- For every fact, give the original link, the page date or access date, the evidence strength, and a phrasing safe to use in the article.
- Separately check the high-contagion claims like "1/40 the price," "57 points, on par," and "100,000 domestic chips,"
  and state whether each can be used as-is.

Final deliverables: key questions, a fact table, usable examples, claims that can't be written as-is, questions still lacking evidence, and the source list.
Save as a Markdown deliverable file. Without confirmation, don't write the article, publish, send messages, or modify online documents.
```

A prompt habit worth adopting: **don't just tell AI what to check—also specify how it should express uncertainty**. Otherwise it easily mistakes "found in search" for "verified." The test hit two typical snags (Hugging Face unreachable due to security policy, and the pricing page not showing Flash on first access), and instead of silently skipping them, it logged the situation and kept cross-confirming through cached copies and multiple sources.

The final fact pack called out the three most treacherous claims: "priced at just 1/40" is a media rough-average of user-facing prices and must not be written as hardware cost; "57 points, on par" holds only on a specific version's composite index and can't be stretched to "equal in every capability"; the domestic chip count differs between the official English blog and Chinese media, so no conclusion should be drawn with the source stripped. **Green-light content can be written; yellow-light content needs sourcing and qualifiers; red-light content stays untouched.**

## Task 2: Turn the Fact Pack into an Article People Finish Reading

The fact pack handles truth and correctness, but it isn't yet an article people want to read to the end. Step two turns the source material into a natural narrative line **without crossing the factual boundaries**. Use the "Official Account Graphics & Operations Strategy" Skill, hand it the fact pack file, and make clear "use only material from the fact pack":

```text
Use the "Official Account Graphics & Operations Strategy" skill to read this fact pack:
[Material] Upload your fact pack directly, or replace the path with your own actual file path.

Based on it, write a long-form WeChat Official Account article for ordinary office workers and developers.

Writing goal: explain why GLM-5.3-Flash is worth paying attention to and how an ordinary person should judge it—
not a rehash of the launch event or media articles.

Requirements:
- First pin down the questions readers care about most, then design a structure that flows naturally.
- Use only material already recorded in the fact pack; vendor self-reported benchmarks must be clearly attributed,
  and anything still to be confirmed must not be written as settled fact.
- Don't fabricate personal experiences like "I tested it myself" or "I interviewed them," and don't imitate the original's phrasing.
- Keep the necessary counterpoints and caveats: real model performance depends on the inference framework, tools, parameters, and task.
- Conversational style with high information density, like a friend who did the homework explaining the full story;
  no empty slogans or template one-liners.
- Body of roughly 1,800-2,500 characters, including a title placeholder, abstract, section headings,
  a closing verdict, and the source list.

Save the result as a Markdown deliverable file, create a new Feishu doc, and return the link.
Hand it to a human editor first—no auto-publishing, no sending messages, no modifying other online documents.
```

It read the fact pack first, confirmed the readers' top questions, and positioned the article as "expert interpretation + a way to judge" instead of launching into the body from sentence one. The draft preserved the fact pack's limits: it never wrote "capability equal to Opus," only scoped to a specific composite index; it didn't treat "1/40" as a precise conclusion; and the domestic chip count discrepancy stayed explicitly in the body.

## Task 3: Want a Viral Title—Without Pure Clickbait

However rigorous the body, a title can undo all of it at the last minute. Use the "Viral Titles & Topic Calendar" Skill: have it read the finished draft first, extract the new information and core tension, then generate titles—under three hard boundaries:

```text
Use the "Viral Titles & Topic Calendar" skill to read this article:
[Material] Upload your finished official-account draft directly, or replace the path with your own actual file path.

First summarize the article's genuinely new information, strongest evidence, core tension, and target readers;
then generate 20 titles: 5 fact-based, 5 question-based, 5 contrast-based, and 5 outcome-based.

Hard boundaries:
- Don't add numbers, conclusions, named endorsements, or first-hand testing experiences that aren't in the body.
- No half-sentences engineered to mislead, and don't dress up vendor self-reported benchmarks as independent tests.
- For every title, state what it captures and flag its misleading risk, marketing intensity, and best-fit scenario.

Finally, recommend 3 titles, noting for each whether it fits the official account headline, group-chat sharing, or search traffic;
then pick one to use for the cover. Save the result as title-candidates-and-risks.md.
Without confirmation, don't publish, send messages, or modify online documents.
```

It annotated every title with "what it captures, misleading risk, marketing intensity, best-fit scenario"—having risks sit in the same table as titles beats deleting by gut feel after the fact. Test recommendations: for the headline slot, "People are spreading a 1/40 price; the article says 1/30 to 1/100" (contrast type); for group-chat sharing, "The vendor said 'close to Opus' and the retellings turned into 'on par with Opus'"; for search traffic, the full-spec phrasing.

> Honest note: every AI-generated title was mediocre. A better approach is to **collect viral titles into a title library** over time so AI knows what a viral title looks like before running this workflow; with a big enough library, you can even use the Cangjie Skill to distill your own title-writing Skill.

## Task 4: Make the Official Account Cover

Two classic cover mistakes: chasing a "tech feel" with robots and circuit boards filling the frame, or drawing the image before the title is set so the visual has nothing to do with the article. Use the **Creative Design** capability and **hand it the article and the title risk table together**:

```text
Use the "Creative Design" capability plus image generation and checking to read:
[Material] Upload your finished draft and the title risk table directly, or replace the paths with the actual file paths.
- official-account-final-draft.md
- title-candidates-and-risks.md

Create the WeChat Official Account header image for the finally recommended title.

First give 3 clearly different cover concepts, each stating the subject, composition, colors, mood, text strategy,
and why it fits the article. Then pick the version with the clearest information that reads best as a phone thumbnail, and generate the final image.
```

The visual theme was constrained to "a rational trade-off between high capability and low cost," with a palette of deep blue, cool white, and a touch of bright green; no real people, brand logos, robots, or dense circuit boards, and no Chinese text crammed into the generated image (it garbles easily). In testing, a black background with a white title stood out most; if you need a brand element (like the Zhipu logo), just supply a logo image and have it blended in. Doubao Work has ByteDance's seedream image model built in—more than enough for covers.

## Remember This Production Line

Compressed to one sentence: **tighten the facts first, then loosen the expression; check the title first, then amplify the reach.**

```text
public sources → fact pack → official account body → title risk table → cover → human review
```

AI shouldn't make every number sound louder for you. What actually saves time is that it chains the sources, boundaries, and intermediate deliverables together, so each downstream step always knows what the previous step confirmed—and what it didn't. An article built this way may sound less exciting than "one prompt, instant viral hit," but it looks a lot more like work you can actually hand to an editor, a colleague, or your boss.

---

Next: [Same Content, Reworked into a Native Version for Each Platform →](/en/doubaowork/case-multi-platform)
