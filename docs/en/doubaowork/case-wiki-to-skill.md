# Don't Let a Veteran Colleague's Experience Sit Idle: Turn a Feishu Knowledge Base into a Reusable Skill

> Scenario: A knowledge base full of operating know-how that veteran colleagues accumulated—nobody browses it, nobody uses it. Turn those experience docs into a reusable Skill: less re-organizing, and the Agent can invoke the knowledge directly in real tasks.

> Prerequisite: the account logged into Doubao must match the Feishu account that owns the knowledge base you want to use.

## The Smoothest Way to Connect a Knowledge Base

In Doubao Work you can **@ mention** Feishu docs, and also @ contacts, Drive files, and conversations to load relevant content as context. Here's a bonus practical trick—after mentioning a contact and a pre-meeting doc, you can book a meeting in one sentence:

```text
Book a Feishu meeting for me with him @contact,
and send him the pre-meeting doc @Internal: Xiaohongshu Operations Knowledge & Experience.
```

Genuinely a just-say-it-and-it's-done kind of thing.

## Building an Experience Skill, Hands-On

**Step one: ask blind**, to confirm Doubao Work can read the target knowledge base:

> Can you check whether you can see the Xiaohongshu operations knowledge base?

Once confirmed, since there's no structural plan yet, ask it to propose one based on the knowledge base content:

```text
Organize this Xiaohongshu operations knowledge base into a "Xiaohongshu Operations" skill,
fusing the knowledge inside it into the skill—how would you write this skill?
```

Its positioning suggestion was the key: among existing Skills there's already `doubao-newmedia-writing` (handles **content creation** for Xiaohongshu posts/short videos), so the new Skill should avoid overlap and position itself as **methodology and SOPs for the full operations chain**—triggered when users ask "how do I run this account" questions about starting an account, positioning, topic selection, titles and covers, follower growth, monetization, traffic funneling, opening a shop, paid promotion, or violation appeals, and answering with structured methods distilled from the knowledge base.

## The Skill's Directory Structure

With the responsibility boundary settled, Doubao Work split the Skill into a `SKILL.md` main file (trigger detection + pipeline routing + workflow) and a `references` directory organized under six themes:

```text
xiaohongshu-operation/
├── SKILL.md                        # trigger detection + pipeline routing + workflow
└── references/
    ├── 01-account-positioning/     # niche selection, account positioning, benchmarks & personal brand, profile setup
    ├── 02-platform-mechanics/      # algorithm & traffic, indexing & search, throttling & rules
    ├── 03-content-creation/        # topic methods, title formulas, copywriting, cover design, shooting & retouching, video editing
    ├── 04-growth-operations/       # account warm-up, publishing & maintenance, data & reviews, follower-growth tactics
    ├── 05-monetization/            # monetization methods, shop setup & product selection, orders & partnerships, paid promotion
    └── 06-traffic-compliance/      # traffic-funnel SOPs, private-domain operations, compliance & qualifications
```

Every reference file is annotated with its source (which course or doc in the knowledge base it came from), keeping the knowledge traceable. Once the Skill was built, testing it with a real operations question showed it answering from the methodology embedded in the Skill—the veteran colleague's experience no longer sits idle; it becomes a "standard playbook" that every task can call on.

---

Next: [No More Digging Through the Company Knowledge Base—Find the Process with Sources in One Question →](/en/doubaowork/case-policy-search)
