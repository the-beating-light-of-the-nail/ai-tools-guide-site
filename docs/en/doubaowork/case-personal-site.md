---
description: "People who want a personal website often stall at step one: photos not picked yet, project descriptions unfinished, even a one-line bio rewritten half a dozen times."
---

# Want a Personal Website but Always Waiting to "Be Ready"? A Design-Led Method That Ships a Site That Looks Like You

You're staring at the site builder, zoning out: the photos aren't picked, the project descriptions aren't written, and that one-line bio has been rewritten five times. That "I'll start once I'm ready" state is common, and it keeps you from ever beginning—the site stays stuck in your head. Try a different starting question instead: who do you want to see this site, what should they remember after reading it, and what would they be willing to do next? Answer those and both content and design have a direction. You don't have to wait until every asset is ready.

> Scenario: You want a personal website but keep stalling on "I'll do it once I'm ready"—photos not picked, bio not finished. Flip the starting point: first get clear on who you are and why the site exists.

People who want a personal website often get stuck at step one: photos not chosen, project descriptions unfinished, a one-line bio rewritten half a dozen times. Once those three questions have answers, both the content and the design have direction.

## What design-led-website-builder Solves

AI can easily generate a webpage that "opens"; the real trouble is that it can just as easily generate one that **could be handed to anyone after swapping out the name**—white background, default fonts, a few equal-width cards. The page looks complete but has almost nothing of you in it.

The `design-led-website-builder` Skill puts **design research before writing code**, with a fixed seven-step process in a fixed order:

1. Take in the material you've provided and determine whether it's an existing brand, scattered personal content, or a reference website;
2. Pin down the site's purpose (a publishing site centered on reading and archiving, or a visual site showcasing portfolio character)—if the requirement genuinely forks, it asks exactly one round of questions, then continues once you've chosen;
3. Study 3–5 **real websites** with similar purposes, with the research targets following the site's job—it won't use a flashy portfolio to guide a blog meant for long-form reading;
4. Find 3–8 usable assets (paper, wood grain, illustration, openly licensed photos, mood images); **real headshots, work samples, client stories, and credentials may only come from what you provide or confirm**;
5. Explain in a short paragraph the design direction, reference sites, assets found, what won't be copied, and what it plans to build next;
6. Start building: settle typography, color, spacing, image cropping, and interaction rules first, then apply them to the pages;
7. Final checks: the hero section should quickly convey whose site this is, what's here, and what to do next; mobile, keyboard operation, motion fallbacks, image sourcing, and page performance are all in scope.

Reference sites are used only to understand hierarchy, typography, image cropping, and interaction—distinctive layouts and assets must not be copied directly; generated images can handle mood and illustration, but must not pose as your photos, product UI, clients, or awards.

## Install It and Run It Once

Just tell Doubao Work to install the Skill:

```text
Please install this personal-website design skill:
https://github.com/liucongg/liucong-skills/tree/main/skills/design-led-website-builder
```

Then kick off with a single line (the prompt states who you are and the goal, so the Skill can jump straight to the research phase):

```text
$design-led-website-builder I want to build a personal website for a content creator.
My ID on every platform is Liu Cong NLP, and the main goal is to showcase the series of articles I have published.
```

If you only write "make me a personal website," it will first map out the possible product shapes, then use one round of questions to have you lock in a direction.

## Deploy to GitHub Pages

Once the site is built, deploy it with one line:

```text
Help me deploy this website to GitHub Pages via GitHub.
```

If you're not logged into GitHub, it will walk you through login first, then finish the deployment automatically—from design research to going live, without writing a single line of code.

---

That wraps up the personal-productivity scenarios. Next up: [Self-Media Scenario · Topic Selection →](/en/doubaowork/case-topic-selection)

## FAQ

**Will it really produce something that doesn't look like a template?**

Yes—provided you open by saying who's looking, what they should remember, and what they should do next. It studies real websites before designing, instead of dropping in a canned layout. And your headshot, work samples, and credentials can only come from material you've confirmed; it won't pass off a generated image as yours.

**Can I do this if I can't code at all?**

Yes. Installing the Skill, starting the job, and deploying to GitHub Pages are each a one-line instruction. You speak up at the start and review at the end—you never touch code.

**Will it just copy the reference sites?**

No. Reference sites are used only to understand hierarchy, typography, and interaction; distinctive layouts and assets can't be lifted. Generated images are limited to mood and illustration—they can't stand in for your photos or client work.

**Do I need to set up the GitHub repo myself?**

No. One line gets it deployed; if you're not logged in, it walks you through login first, then handles the rest. You end up with a link that works.

**Is one line of prompt really enough?**

It is to start. But the more specific you are—who you are, what you want to show, your handle across platforms—the faster it moves into the research phase with one less round of questions. "Make me a website" works too; it will just confirm the direction with you first.
