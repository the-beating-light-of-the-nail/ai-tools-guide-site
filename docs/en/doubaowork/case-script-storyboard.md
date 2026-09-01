# From Long Article to a Filmable Voiceover Script and Storyboard

> Scenario: The article is done, and the boss casually says "turn it into a one-minute video—shoot it today." Reading the article aloud is the worst option—articles aim to explain thoroughly; short videos aim to keep people watching. And even with a smooth script, a shot list full of "add relevant visuals" and "insert B-roll here" still leaves the camera and edit teams with no idea what to shoot.

Take one verified long article and run two consecutive tasks in Doubao Work:

```text
verified long article
→ rewritten as a natural 60-75 second voiceover
→ facts and pacing confirmed by a human
→ broken into 9 continuous shots
→ filled in with actions, shot sizes, on-screen text, and material status
→ final check on copyright, privacy, and factual boundaries
```

The run produced a ~290-word voiceover script clocking 65–70 seconds at normal speaking pace, plus a 68-second, 9-shot storyboard execution sheet.

Tool choice: the **New Media Writing Skill** (explicitly covers short-video scripts, strong on spoken rhythm, openings, and listening comprehension) for the voiceover; the **Creative Video Skill** (closer to actual production—it can break down camera positions, actions, B-roll, sound, and editing requirements) for the storyboard. **Don't mix the two tasks into one prompt**—confirm the voiceover by hand first, then start a new task for the storyboard, so the storyboard only arranges visuals around the locked script and never rewrites facts while breaking down shots. (Add the optional Seedance 2.5 video generation if you want AI-generated footage.)

## Task 1: Turn the Long Article into a Voiceover You Can Actually Speak

If your prompt is only "turn this article into a one-minute voiceover," the easiest thing for AI to do is delete words. Spell out five things: **who's listening, how long, what to keep only, what must never change, and what format to deliver**:

```text
Use the "New Media Writing" capability to turn the following verified long article into a short-video voiceover script
that can be spoken straight to camera.

Goals:
- Platforms: works on both WeChat Channels / Douyin
- Length: 60-75 seconds
- Audience: ordinary office workers and content-operations beginners
- Cover only one core question: [state the core question here]
- Keep only one clear conclusion and one easy-to-follow example
- Get into the question within the first 5 seconds—no clickbait hooks like "shocking" or "you absolutely must"
- Short sentences, sounding like a real person talking, not an academic tone
- Must keep the original's key qualifiers—never turn a conditional claim into an absolute promise
- Mark suggested pauses [pause] and words to stress [stress]
- Do not generate storyboards, shots, or subtitle files
- Do not add numbers, cases, or conclusions that aren't in the original

Output in the following structure:
1. Core-information trade-offs: in 3 lines, what you kept, what you dropped, and why
2. Final voiceover script: ready to read aloud as-is, roughly 260-320 words
3. Caption supplements: 2-3 pieces of boundary information that don't fit the voiceover but belong in the video caption

Original long article:
[Paste your verified long article here in full; or, after uploading the file, write: read only "filename"]
```

Test result: the very first sentence throws out the question everyone cares about ("a lot of people do one-to-many publishing by copying the Official Account article straight to Xiaohongshu..."), the middle keeps exactly one contrasting example, and it proactively protected the riskiest line—the original said "efficiency gains apply when the information is complete and the facts are verified," which must not become "AI will definitely make you faster." The script ran ~290 words, an estimated 65–70 seconds, with pause and emphasis marks throughout.

> The crudest and most effective test of a voiceover script: **read it aloud yourself, start to finish**. Anywhere you have to glance back at the previous sentence to understand, rewrite it.

## Task 2: Once the Voiceover Is Confirmed, Break It into a Shootable Storyboard

A storyboard's worst failure mode is losing touch with reality: **if you only have one phone, don't let it design three-camera dolly shots; if all footage is self-shot, don't let it default to film clips and stock libraries**. For a first-time on-camera shoot, a phone + tripod + a quiet room is enough to start recording.

> One universal lesson: whatever form of self-media you're making, go extremely lightweight at first and pour most of your energy into topic and title selection (for short video, the opening). Only when each attempt costs little and you're doing the right things can you keep going—and that's how you enter a positive feedback loop.

The test pinned the conditions: 9:16 vertical, one office worker at a desk, phone on a tripod, and the only available footage being your own to-camera speech, hands operating a laptop, an article screen recording, and homemade keyword cards:

```text
Use the [Creative Video] capability to break the following confirmed voiceover script into a storyboard execution sheet you can shoot from directly.
Produce shooting and editing plans only—do not generate an actual video, and do not generate subtitle files.

Final-film conditions:
- Aspect ratio: 9:16 vertical; total length: 65-70 seconds
- Setting: one office worker speaking to camera at a desk
- Available equipment: phone, tripod, laptop
- Available footage: your own to-camera speech, hands operating the laptop, a screen recording of the article page, homemade keyword cards
- No unauthorized stock libraries, film clips, or screenshots of other people's accounts
- Pacing: clear, restrained, like a practical tutorial—no flashy rapid cuts

Execution requirements:
1. Split it into 8-10 shots over continuous time segments like 0-5 s and 5-12 s;
   the times must total 65-70 seconds with no overlaps and no gaps.
2. For every shot, give: the matching voiceover line, the person's action, shot size, camera position / framing, on-screen text,
   B-roll or screenshot, transition, and sound requirements.
3. On-screen text keeps keywords only—no more than 12 characters per screen—and never paste a whole chunk of the voiceover back in.
4. No empty lines like "add relevant visuals"—state exactly what to shoot, what to screen-record, and where the text goes.
5. Mark each item's material status: [have it] [needs shooting] [needs creating] [needs copyright confirmation].
6. Don't rewrite any facts or boundaries from the voiceover—especially keep the original script's qualifiers.
7. End with a shooting checklist ordered by shooting sequence, and an editing checklist ordered by timeline.

Output in the following structure:
A. Shooting setup (camera, lighting, audio, background)
B. Second-by-second storyboard execution sheet
C. Shooting checklist
D. Editing checklist
E. Copyright and privacy check

Confirmed voiceover script:
[Paste the complete voiceover script here, after human confirmation in the previous round]
```

It first estimates each segment's duration from word count and pauses, then breaks out the shots—**estimating time before splitting shots** matters: writing 9 shots first and then forcing the timing is exactly how you end up with a script that can't be finished or a five-second hole in the middle. The tested timeline (9 segments summing to exactly 68 seconds, no gaps, no overlaps):

| Time | On-screen task |
| --- | --- |
| 0–7s | Medium close-up delivering "copy-paste one-to-many publishing," right hand tapping the desk three times |
| 7–13s | Close-up emphasizing "saving time isn't the same as getting results" |
| 13–21s | Cut to hands scrolling the article, explaining that platforms are read differently |
| 21–30s | Article screen recording comparing "Official Account = read along, Channels = listen to you" |
| 30–37s | Picking up the "structure" card, stressing that what changes is the expression structure |
| 37–49s | Screen recording showing "background/test/conclusion" vs. "problem/conclusion/example" |
| 49–58s | Using the "conditional/absolute" card to hold the factual boundary |
| 58–63s | Close-up emphasizing "a conditional claim must not become an absolute promise" |
| 63–68s | Pull back for the ending, freeze on a full desk shot |

The result ends with three fallback checklists: what to shoot first in shooting order, how to cut in chronological order, and how to check copyright and privacy.

> A more detailed storyboard doesn't mean a more professional one. **A genuinely useful storyboard is one where whoever shoots it today can immediately list what's on hand, what needs reshooting, what needs creating, and what needs copyright confirmation.**

## Remember This Two-Stage Formula

For **article → voiceover**, state: who listens and on which platform, for how long; which single question and which single conclusion to keep; which conditions must not be cut; what moves to the video description; and require pauses, emphasis marks, and a word-count check in the output.

For **voiceover → storyboard**, state: equipment, setting, aspect ratio, and available footage; continuous time segments summing to the total duration; every shot with action, framing, camera position, on-screen text, footage, and sound; a status tag on every asset; and a final pass over copyright, privacy, and factual boundaries.

The article, the voiceover, and the storyboard are three different things: the article explains completely, the voiceover is understood in one listen, and the storyboard makes the shoot actually possible on the day. Splitting it into two tasks doesn't just yield better results—it also makes it easier to see, at each step, whether the problem is the content, the expression, or the production.

---

Next: [Long Audio/Video: Transcription, Subtitles, and Highlight Clips →](/en/doubaowork/case-av-transcription)
