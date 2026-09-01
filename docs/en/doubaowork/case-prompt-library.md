# Over-Categorized Is Harder to Find: Re-Grouping 541 GPT Prompt Examples

> Scenario: While collecting GPT-Image2 prompt examples, more always felt better—until the pile reached 541 and the problems arrived. Cases scattered across a GitHub repo, READMEs, and local folders; categories kept subdividing; to find one "Chinese-ink-style poster" you had to bounce between several categories.

> Prerequisite: Doubao and Feishu share the same account; project material has been uploaded to Feishu Drive or a knowledge base (you can @ mention docs, Drive files, contacts, and past conversations).

The old way of managing it: every case dumped into the README and gallery docs, manually sorted into 13 categories; 19 style tags and 10 scenario tags, three dimensions cross-cutting each other; local files and the GitHub version constantly out of sync. **That taxonomy was built chronologically and never designed from the searcher's point of view—the dimensions piled up until they became the biggest obstacle to finding anything.**

## Step 1: One Sentence to Get Doubao Started

Once the material is gathered into Feishu, you never need a complicated prompt:

```text
Analyze this project's case taxonomy for me: @awesome-gpt-image-2 project materials.
First identify what's wrong with the current categories, then redesign them based on real search queries.
```

It automatically reads the case data, tallies category distribution, and finds synonyms and overlaps.

## Step 2: Quantifying Five Hard Flaws in the Old Categories

1. **Synonymous tags everywhere**: among the 19 style tags, `Character` is used 113 times and `Characters` twice—same thing; `Product`/`Products`, `Infographic`/`Charts`, `Realistic`/`Photography` are all duplicates. The 19 tags really need only 12;
2. **The same concept lives in three dimensions**: "poster" appears in both category and styles, "history" appears at all three levels—users can't tell which entry point to use;
3. **A junk-drawer category**: `Other Use Cases` swallowed 28 cases of everything, which amounts to no categorization;
4. **Thin categories can't anchor top-level directories**: 4 top-level categories together account for only 11% of cases;
5. **Internal jargon users can't read**: terms like `R&D` and `Prompt as Code` are things ordinary users would never type in a search.

The more crucial step: it extracted high-frequency search terms from the actual titles of all 541 cases, **reverse-engineering users' real search habits**—"poster/cover/promo" searched 82 times, "infographic/technical diagram" 48 times, "UI/screenshot/App" 38 times, "portrait/headshot/avatar" 28 times, "illustration/Chinese style/ink painting" 25 times. Users open a prompt library with a concrete output in mind: "I need to make an X image." **Build the taxonomy around the output, with category names matching the end goal the user wants to accomplish**—that's the central pivot of the whole restructuring.

## Step 3: Redesign Starting from Real Search Terms

The new taxonomy: **13 categories → 8, all named after outputs**, covering exactly 541 cases with no junk drawer. The merge logic:

- **Interfaces & Infographics**: UI, dashboards, infographics, and technical diagrams are all "structured information" in the user's mind—together they form the biggest category at 140 cases;
- **Illustration & Art**: Chinese style/antique/ink/history themes are essentially illustration styles; after merging, "Chinese style" hits directly via an alias;
- **Scenes · Space · Narrative**: architecture, cities, storyboards, and world settings are all "big space/worldbuilding" outputs;
- **Characters & People**: specifically virtual characters/cards/3D characters—real portraits go to "Photography & Realism";
- **Other Use Cases dissolved**: its 28 cases were assigned one by one to the proper categories.

Fewer categories, but searchability must not be lost: every category gets an **alias table**—searching "Chinese style/antique/ink" → Illustration & Art, "portrait/headshot/avatar" → Photography & Realism, "Logo/VI/brand mark" → Branding & Logos, "detail page/packaging/hero image" → Product & E-commerce Visuals.

## Step 4: Bulk Migration into the Feishu Knowledge Base

Create top-level directories for the 8 new categories in the knowledge base, then:

```text
Following the new category mapping table, re-tag all 541 cases in cases.json with new category labels.
Then batch-create Feishu documents for the 8 categories and place them in the matching knowledge base directories.
Keep the old category anchors as redirects—do not delete them.
```

It rewrites the category fields in bulk, calls the Feishu API to create documents into the right directories, keeps old URL anchors redirecting (bookmarked links don't break), and leaves case IDs and image paths untouched (GitHub links stay live). **Don't change everything in one pass**: go in stages—retag first (low risk) → re-categorize next (medium risk) → update frontend display and docs last, with a rollback point after each step.

## Step 5: Test with Real Queries

| Real query | Old structure | New structure |
| --- | --- | --- |
| Chinese-ink poster | Hesitating between History and Illustration | Straight into Illustration & Art, one-step hit |
| Realistic portrait | Hesitating between Photography and Characters | Photography & Realism, alias "portrait" lands directly |
| App UI screenshot | Poster content polluting the UI category | Straight into Interfaces & Infographics |
| Character card | 3D cards scattered inside Illustration | Characters & People, tighter hits |
| City architecture map | Bouncing between Architecture and Scenes | Scenes · Space · Narrative |

Of 10 test queries, 5 completely eliminated the back-and-forth hesitation across categories, 4 got shorter paths to a hit, and 1 showed a clear gain in semantic match precision. Later iterations plugged in real GA4 search logs to recalibrate the alias table once more against actual user behavior—only alias rules needed fine-tuning, not the validated category architecture.

## Staged Migration Checklist

| Stage | What happens | Risk |
| --- | --- | --- |
| 0 | Export real search terms, calibrate the alias table | Read-only |
| 1 | Merge synonymous tags (Characters → Character, etc.) | Low |
| 2 | Bulk-rewrite category fields per the mapping table | Medium |
| 3 | Update frontend display, search aliases, old URL redirects | Medium |
| 4 | Update category headings and anchors in the docs | Low |
| 5 | Regression-run real queries; check whether zero-result queries dropped | Verification |

My biggest takeaway: **knowledge base management used to be grunt work; now it's a matter of just asking**—Doubao reads the data, runs the statistics, finds the problems, designs the scheme, and does the bulk migration, while the human only judges and confirms at key checkpoints. The experience sitting in old projects doesn't have to gather dust—revive it with AI plus a Feishu knowledge base, and the rollout goes far more smoothly than you'd expect.

---

Next: [Find Which Knowledge Has Expired and Auto-Confirm with the Owner →](/en/doubaowork/case-knowledge-expiry)
