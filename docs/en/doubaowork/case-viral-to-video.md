# Turning a Viral Official Account Article into a Short Video

> Scenario: To turn an Official Account article into a short video, most people paste the full text into AI and say "condense this into a 60-second voiceover." AI obligingly cuts half the content, adds a "can you believe it?", and tacks on "smash that like and save button"—fewer words, but the video may still be unusable, and the original's conditions, dates, and first-hand testing easily get distorted along the way.

In this field test, the Official Account article "I Outsourced My Computer to Doubao and My Productivity Soared! [With Tutorial]" was run through the full pipeline (local finished video only—nothing uploaded or published):

```text
official account article
→ short-video script and second-by-second storyboard
→ to-camera footage + product screen recordings + image asset pack
→ Remotion Skill
→ code checks, rendering, ffprobe and frame-sample acceptance
→ local MP4 finished video
```

Division of labor: **screenwriting and editing are two different jobs**. A bad script is an information-selection problem; missing footage means reshooting; a black-screen or wrong-audio-track finish is an editing-engineering problem. Split the two pipelines, and it's obvious at a glance which step broke.

| Stage | What's used | What it owns |
| --- | --- | --- |
| Source cleanup | Web main-content extraction | Preserve the original's facts, conditions, and case order |
| Script & storyboard | Short-Video Screenwriter (Mate) | Pick the angle, write the voiceover, break down second-by-second visuals, self-check facts |
| Asset management | Local computer capability + asset list | Verify that videos, screen recordings, images, and paths exist |
| Actual editing | Remotion Skill | Reuse the project, organize the timeline, render H.264 MP4 |
| Acceptance | ffprobe + evenly spaced frame sampling | Check duration, resolution, frame rate, audio track, black frames, truncation |

## Step 1: Get the Original, Find a Screenwriter Mate

Hand the article link straight to Doubao Work to extract the content. Then go to "Skills · Connectors · Mates," switch to "Mates · Squad," and search "video" to find the **Short-Video Screenwriter**—the difference from an ordinary writing Skill is that it doesn't just deliver a voiceover; it schedules actions, visuals, and subtitles by time segment. Upload the fact master draft and put the target duration, audience, footage conditions, and safety boundaries into the prompt all at once:

```text
I'm an official account author planning to turn my long article "Article Title" into a short video under 3 minutes
that can be shot and edited directly.

Input materials:
- Original article link: [link]
- Fact master draft cleaned and verified from the original: the uploaded article-fact-master-draft.md

Work as a "short-video screenwriter":
1. Read the fact master draft first and list the facts that must not be distorted and the numbers whose qualifiers must be kept.
2. Pick the 3 real tasks from the original best suited to short-video storytelling;
   don't read everything out just to fill the time.
3. Write a 150-180 second first-person voiceover script. Create contrast within the first 5 seconds.
4. Conversational, short sentences, with a sense of pacing, keeping my first-hand testing tone;
   don't write it like a product launch, and don't add features that never happened.
5. Break the voiceover into a shot-by-shot table containing: time segment, voiceover, visuals, material type,
   on-screen big text, transition, and risk notes.
6. Prioritize reusing existing to-camera videos, product operation screen recordings, and article illustrations;
   mark any shot lacking material clearly as "needs shooting"—don't pretend the footage exists.
7. Finish with a fact self-check: item by item, verify whether platform differences, frame rates, durations, counts, publication dates,
   and "efficiency gains" still carry the original's conditions.

Final deliverables: the voiceover script + a shot-by-shot editing table.
In chat, summarize only: recommended final duration, shot count, reused-asset count, and to-be-shot count.

Safety boundaries: generate local scripts and storyboards only—no uploading, no publishing, no modifying the original assets,
and don't turn personal hands-on testing into a universal promise.
```

The test delivered 3 scripts (an overview angle / phone orchestrating the computer executing / AI does the work but the satisfaction still belongs to the human), each broken down by timecode with platform, target audience, communication goal, and shooting conditions listed, plus a pre-publish check split into "passed" and "still needs a human."

## Step 2: Assemble the Footage Package

The script decides what to shoot; the footage package decides what's on screen: real-person to-camera segments up front (opening, problem, capability explanation), operation screen recordings with voiceover in the middle (real tasks on the computer), real-person to-camera at the end (conclusions and a call to action), the video cover—plus screenshots of work-task modes (explaining "it's not just chat") and screenshots of the Skill connector (explaining why existing tools should be used first). **Give every asset a name that says what it's for**, so Doubao Work knows which clip fits which moment during editing.

## Step 3: Upload the Remotion Skill for Editing

If searching "video editing" on the Skills page returns nothing, go through "Create New → Upload Skill" ([Remotion officially provides an AI Skill](https://www.remotion.dev/docs/ai/skills)). The upload package must contain `SKILL.md`—zip the locally verified Remotion Best Practices Skill and upload it, then flip the switch under "My Skills" after installation.

> A Skill is not a video template—it's closer to a **professional work instruction for the Agent**, telling it what rules to follow when creating compositions, handling footage, building timelines, rendering, and running acceptance checks; the actual footage and project still come from you.

When invoking it, state four things—which Skill, which footage and project to read, how acceptance works, and which actions are forbidden:

```text
Use the currently installed Remotion Skill to edit the asset pack into a playable video.

Inputs:
- To-camera videos, operation screen recordings, and illustrations: use the local paths listed in asset-list.md
- Voiceover script and shot-by-shot editing table: use the files accepted in the previous stage
- Existing Remotion project: [replace with the absolute path of your own local project]

Execution requirements:
1. Check the asset list and whether the files exist first; list anything missing—don't invent it.
2. Reuse the existing composition; don't rebuild the project or overwrite the original videos.
3. Keep the real-person to-camera through-line, inserting product operation recordings, UI images, and chapter cues at the matching sections;
   avoid covering the real interface with decorative animation.
4. Aspect ratio, resolution, and duration follow the existing composition;
   all numbers and feature descriptions must match the fact master draft.
5. Run code checks and type checks, then render an H.264 MP4.
6. After rendering, use ffprobe to verify duration, resolution, frame rate, video codec, and audio track;
   then sample frames evenly to check the opening, the three case sections, and the ending for black frames, typos, truncation, and private information.

Final deliverables: a local MP4 finished video + one contact sheet or several acceptance frame samples
         + a short acceptance record (file paths, media parameters, known limitations).

Safety boundaries: create new files in the local project only—don't delete or overwrite the original assets, upload anything, or publish anything.
```

After submission it read the Remotion Skill first, then probed the existing project and asset list—that's when the Skill is genuinely being used. The final delivery included, alongside the finished video, a rundown of the composition, visual and audio parameters, and timeline structure.

## The Human Part Is Still the Most Valuable

It always seemed like "making a video from an article" wouldn't be hard, but actually running it end to end reveals: the most valuable thing in an article is **facts and viewpoints**, while the most labor-intensive parts of a video are **the voiceover, footage, and editing**—raising output takes a full production line. AI can integrate that line, but the most valuable part still belongs to humans: hand the repetitive labor to the Agent, and spend the time you save on the choices only you can make.

---

That's it for the self-media scenarios. Next up: [Knowledge Management · From Quick Saves to Actually Findable Later →](/en/doubaowork/case-bookmarks)
