# Which Knowledge Has Expired: Automatically Find the Owner to Confirm

> Scenario: a knowledge base solves storage, but can't guarantee the material stays valid. A years-old travel guide may have outdated ticket prices, opening hours, transit routes, and booking rules—**used without verification, the more detailed the material, the more convincingly it spreads stale conclusions**.

Take travel planning: the knowledge base holds a 2013-2014 "Shanghai Travel Guide PDF" claiming "Oriental Pearl Tower tickets 100 RMB, only 11 metro lines"; in reality, by 2026 the two-sphere combo ticket is 199 RMB and there are over 20 metro lines. Meanwhile "Shanghai Travel Pitfall Guide (2026 Edition)", shared by the contact Xiang Ming, says the old guide's recommended snack plaza at City God Temple is "expensive and bad". Verifying all of it by hand would take at least two or three hours.

## The Prompt: Write the Verification Requirements In

Short version (stating travel dates, destination, and output format):

```text
I'm traveling to Shanghai next Friday. Please plan a 3-day, 2-night
itinerary.
Draw on the relevant information in my Feishu (knowledge base, chat
history) to tailor the itinerary, and output it as HTML. Cite your
sources and thoroughly check whether any information has expired.
```

The full version completes the material scope, verification requirements, conflict handling, and delivery standards:

```text
I'm traveling to Shanghai next Friday. Please plan a 3-day, 2-night
itinerary.
Use the travel guides in my Feishu knowledge base (Wiki link: [link]) as
well as "Shanghai Travel Pitfall Guide (2026 Edition).xlsx" shared by my
contact Xiang Ming.

Requirements:
1. Read the knowledge base and the contact's file first; identify which
   information has expired (ticket prices, opening hours, metro lines)
   and which is still valid.
2. For expired or conflicting information, flag it separately and check
   with the material's provider or owner—do not silently replace it.
3. Verify and update against live 2026 information (weather, high-speed
   rail schedules, attraction booking requirements, current exhibitions).
4. Output an HTML itinerary with a detailed daily plan, transport,
   lodging, food, budget, and rainy-day alternatives.
5. Mark every key item with its source (knowledge base / Xiang Ming /
   live web) and verification time.
6. Remind me 48 hours before departure to re-check the weather and any
   temporary attraction notices.
```

## How It Proceeds

1. **Confirms data sources first**: reads the knowledge base's historical guides, the contact's pitfall guide, and relevant chat history—establishing "what material is on hand" so the plan doesn't lean on a single guide;
2. **Verifies volatile information with focus**: ticket prices, opening hours, metro lines, rail schedules, booking rules, and current exhibitions; where the old guide and new guide disagree, it **keeps both accounts with their sources** rather than silently replacing; live information like weather, train times, and attraction notices is verified online;
3. **Combines before composing the itinerary**: the old guide's still-valuable route experience + the 2026 pitfall guide's practical advice + the weather and transport data queried for this trip, all merged into one plan.

## What the Result Looks Like

The **key-info summary** sets the frame first: September 4-6, 3 days 2 nights; outbound G256 (431 RMB), return G3092 (390 RMB); stay near People's Square or East Nanjing Road (Lines 1/2/8, walkable to the Bund); roughly 2,500-3,200 RMB per person. **The three-day spine**: D1 arrive → Nanjing Road → Bund night view; D2 Shanghai Museum → Yu Garden → 2-RMB ferry across the river → Lujiazui; D3 Wukang Road → Anfu Road → local Shanghainese fare → Xintiandi → departure.

The result also explains how each piece of material was used, so every recommendation is traceable: the 2013 PDF's **prices and tickets are expired**, but its **route logic and food-culture notes still carry reference value**; of Xiang Ming's 48 tips, the ones fitting this trip were woven into the daily plan (the 2-RMB ferry, the North Bund viewpoint, avoiding the influencer-crowded restaurants). Live queries showed light rain all three days, so the plan built in rainy-day alternatives like the Pudong Art Museum and the Shanghai Museum East wing, with a reminder to re-check weather and temporary notices 48 hours before departure.

The full **HTML itinerary** puts each day's time blocks, transit routes, attraction bookings, dining suggestions, budget, and rainy-day backups on one page—pitfall tips attached to the relevant attractions, transport, and meals, with sources kept: the reader knows what each tip rests on, and can go back to the original material when things change.

## Takeaway

This example showcases **a governance method for expiring knowledge**: keep the still-valuable experience in old material, re-verify volatile information, and keep evidence and a confirmation path for conflicting content (ask the provider/owner instead of silently replacing). Only when managed this way can a knowledge base keep supplying usable information for today's tasks. For a real trip, add hotel budget, dietary restrictions, walking stamina, and must-see stops to narrow the options further.

---

That wraps the knowledge-management scenarios. Next up: [E-commerce: from One Product Photo to a Full Set of Listing Images →](/en/doubaowork/case-product-images)
