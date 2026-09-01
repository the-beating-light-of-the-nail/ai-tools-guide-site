# Hand Life's Odds and Ends to Doubao Work for a First Pass

> Scenario: travel planning, what's for dinner, choosing among a few products. The AI gathers material, lists candidates, produces checklists; the important decisions—booking, paying, diagnosing—still get a final human sign-off.

How to arrange a trip, what to cook for dinner, which of a few products to buy—these little life questions sound like one-sentence tasks, but they tangle with budget, preferences, live information, and personal privacy. Doubao Work shines at **gathering material, laying out candidates, and generating checklists first**.

## First, Decide What Kind of Task It Is

| Type | Doubao Work can help | The human owns |
| --- | --- | --- |
| Information gathering | Collect preferences, compare candidates, generate checklists | Verify facts and make the final pick |
| Live information | Query and organize weather, routes, prices, rules | Confirm the latest status on official pages |
| Health & privacy | Organize records, prepare questions for professionals | Diagnosis, treatment, medication, emergencies |
| Entertainment | Generate cultural or fun content | Don't feed results into high-stakes decisions |

When you need a specific capability, search "Skills · Connectors · Mates" for travel, weather, maps, lifestyle, health, and similar keywords. Marketplace content shifts—check a skill's source, permissions, and data handling before use; if nothing fits, do the information gathering with a plain work task first.

## Health Consultation: Reading a Checkup Report

With a medical-report-reading skill, it can go through your checkup report first (in testing the reading was quite accurate, and it even generated a detailed Feishu doc with dietary suggestions):

```text
Please interpret the checkup report I uploaded. First confirm the report
date, testing facility, item names, values, units, and reference ranges.

Sort the results into four categories: normal, outside the reference
range, information missing, and needs-other-tests-to-judge.
Keep every value exactly as written—no rewriting, filling in, or deriving.

Explain in plain language what each indicator usually reflects and which
common factors may affect the result.
Do not present correlation as causation, and do not issue a definite
diagnosis or disease probability from a single indicator.

Finish by preparing questions I can ask the doctor at a follow-up visit,
and list the additional materials still needed.
Do not provide prescription, dosage, or medication-change advice.
```

## Consumer Comparison: Choosing Among Three Hair Dryers

```text
I'm comparing three hair dryers: Dreame, Dyson, and Laifen.
Main use is long hair, no hair damage, budget under 1,000 RMB.

Use only manufacturer websites, product manuals, authoritative test
reports, and the quotes I provide.
Note the source and query date for every item. Present advertising claims,
media impressions, and verifiable specs separately; mark anything
unverifiable as "to be confirmed".

First unify the comparison basis, then tabulate core specs, real-world
limitations, consumable prices, maintenance costs, warranty terms, privacy
risks, total price, and long-run cost.
Finally, state who each product suits and in which situations it doesn't.
Do not recommend based on sales volume, ratings, or brand fame.
```

## Travel Planning: Ask First, Then Arrange

```text
I'm planning a 7-day trip to Yunnan.

Don't arrange the itinerary yet. Use no more than 8 questions to confirm
departure city, dates, travel companions, total budget, transport
preferences, lodging requirements, dietary restrictions, physical limits,
must-see places, and definite no-gos.
Don't re-ask anything already provided.

After my answers, first give two route directions, each explaining the
pace, the main differences, pros and cons, and estimated cost.
Once I pick a direction, generate the day-by-day plan.

Lay out each day by morning, afternoon, and evening, with stop order,
transport mode, estimated duration, dining suggestions, booking
requirements, and rainy-day alternatives. Note the query date and source
for weather, ticket prices, opening hours, booking rules, and transit
schedules.
Mark anything unconfirmable as "to be confirmed"—do not invent.
```

In testing it first offered two options (with pace, pros and cons, and estimated cost), then generated the day-by-day plan by morning/afternoon/evening after a direction was chosen.

---

On to the personal-productivity scenarios: [Inbox Overflowing: Find What Actually Needs Handling Today →](/en/doubaowork/case-inbox)
