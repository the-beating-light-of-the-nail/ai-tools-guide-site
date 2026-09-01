# Chapter 19: Summoning an AI Video Team with One Sentence

In WorkBuddy, split short-video work into two AI expert teams: one produces videos automatically, the other breaks down viral videos.

| Team | What it owns | What tasks suit it |
| --- | --- | --- |
| **Video generation team** | Starting from a topic: hot-topic collection, topic selection, scripting, storyboarding, voiceover, rendering, subtitles, and publishing | AI weekly reports, product updates, knowledge explainers, industry analysis, product reviews |
| **Viral video breakdown team** | Starting from a video link: download the video, extract audio, transcribe the script, analyze the camera language, and produce a breakdown report with reshoot suggestions | Learning viral structures, reviewing competitor videos, building a shooting handbook |

The two teams don't replace each other: the generation team solves "how do I make one today," while the breakdown team solves "why did theirs go viral, and what can I learn." One produces, one learns — only together do they enable continuous iteration.

![](/workbuddy/case-video-team/assets/002_two-ai-video-teams_SXcUb9mpMo.png)

## How to Summon: Start with One Sentence, but Don't Stop There

```text
Summon the video generation team and make a 46-second AI weekly report short video.
```

## Team One: The Video Generation Team

Four core roles: the producer **Ling Dao**, information scout **Ling Yue**, content planner **Ling Shu**, and video producer **Ling Ying**. They aren't four renamed chat windows — they're a video production line with clear upstream and downstream handoffs.

![](/workbuddy/case-video-team/assets/004_video-team-roles_ZOJ8b7aQ7o.png)

| Role | Position | Deliverables |
| --- | --- | --- |
| Ling Dao | Producer / team lead | Task breakdown, parallel/serial scheduling, output consolidation, checkpoint handling |
| Ling Yue | Information scout | Hot-topic pool, source lists, deduplicated structured summaries, topic candidates |
| Ling Shu | Content planner | Topic judgment, script, storyboard, narration, transitions, asset lists, BGM, and subtitle rhythm |
| Ling Ying | Video producer | HTML video engineering, voiceover, subtitle sync, transition animations, asset assembly, rendered final cut |

This is the key to multi-agent: **it's not the more roles the better — it's that every role has clear inputs and outputs.** The scout doesn't write the final script, the planner doesn't invent hot topics, the producer doesn't rewrite facts, and the team lead keeps the pipeline from breaking.

### The Production Engine: HyperFrames

The pipeline is built on HyperFrames (an open-source video rendering framework): videos render from HTML, which naturally suits Agents generating structured projects that rendering tools output as MP4 — with a bundled CLI toolchain, TTS, subtitles, background removal, and video component templates.

### Step 1: The Scout Gives Hot Topics Their Sources

The most time-consuming part of making videos usually isn't editing — it's "what do we even shoot today." Ling Yue pulls RSS feeds, searches news, scans social media, aggregates and deduplicates AI hot topics. This stage's output includes at minimum: title, source, publish time, event time, original link, heat signals, and why it deserves attention. **Heat helps ranking; it never replaces fact-checking.**

![](/workbuddy/case-video-team/assets/007_collection-report_KPn1bXgYQo.png)

### Step 2: The Planner Turns the Topic into Shots

Once topics are in hand, the real brain work is "how do we tell it." Ling Shu handles topic evaluation, script, storyboard, narration, shot pacing, BGM rhythm, and emotional beats.

![](/workbuddy/case-video-team/assets/008_planner-full_YPM3boyNTo.png)

We recommend setting the **first human check** here: does the opening 3 seconds have a hook, does 46 seconds cram in too much, is the narration accurate, do the visuals actually support the point? If the script doesn't pass, don't move on to voiceover and rendering.

### Step 3: The Producer Turns the Storyboard into a Finished Video

Ling Ying converts the confirmed script into HTML, then calls HyperFrames to render the MP4, automatically handling Azure TTS voiceover, Whisper subtitle alignment, animation and transition generation, asset assembly, and video rendering.

![](/workbuddy/case-video-team/assets/009_video-producer_PohnbE1jKo.png)

When accepting the final cut, don't just check "does it play": check narration-subtitle consistency, shot durations, whether text blocks the subject, whether the BGM is usable, copyright risk in the assets, and whether the visuals fit the target platform's safe area.

### Step 4: Publishing Can Be Automated, but Human Confirmation by Default

The publishing Agent auto-generates titles, tags, uploads the cover, and publishes to Douyin, WeChat Channels, and Bilibili via a cloud phone. Powerful — but **do not auto-publish by default**, unless the account, assets, titles, and compliance boundaries have all been human-confirmed.

![](/workbuddy/case-video-team/assets/011_publish-demo_DdTYbbBxLo.png)

## Team Two: The Viral Video Breakdown Team

Generation alone isn't enough. What content creators really need is understanding "why theirs went viral": extract the video, transcribe the script, analyze shot types and camera moves, editing rhythm, and color style, then get reshoot suggestions.

![](/workbuddy/case-video-team/assets/013_anatomy-team_OI1Ubltu1o.png)

| Role | Responsibility | Tools / tech |
| --- | --- | --- |
| A Bao | Team lead / breakdown controller | Task scheduling, pipeline orchestration, result consolidation |
| Xiao Kai | Audio processing & transcription | ffmpeg, ASR — turn the video's audio into the full voiceover script |
| Xiao Miao | Video understanding & shot cutting | Video understanding API, ffmpeg — analyze camera language and cut segments |

### Breakdown Step 1: Video Downloads Need a Fallback Strategy

Getting the video is the trickiest step; the design uses three fallback layers: official API → Playwright → yt-dlp. As soon as one layer succeeds, the pipeline continues.

![](/workbuddy/case-video-team/assets/015_anatomy-flow_CuFcbaM9Ao.png)

> Boundary: video downloads and analysis must respect platform terms, copyright licenses, and fair use. The purpose of breakdown is to learn structure and method, not to re-upload the original video.

### Breakdown Step 2: Audio Extraction and Script Transcription

Xiao Kai uses ffmpeg to convert video.mp4 to audio.mp3, then calls a speech recognition API to transcribe the full voiceover script automatically. Work that used to mean listening and typing line by line can now be reliably automated.

### Breakdown Step 3: Video Understanding and Camera-Language Analysis

The most fascinating step: Xiao Miao analyzes the whole video's shot types, camera moves, transitions, editing rhythm, color grading, and shot durations. Many viral videos that "just feel right" actually rest on stable patterns of cinematography.

![](/workbuddy/case-video-team/assets/018_video-understand_VwxLb62b1o.png)

## How the Two Teams Close the Loop

```mermaid
flowchart LR
    A[Viral video link] --> B[Breakdown team: transcription, shots, rhythm, reshoot advice]
    B --> C[Build a shooting handbook & content patterns]
    C --> D[Generation team: hot topics, script, storyboard, rendering]
    D --> E[Human review & publishing]
    E --> F[Data review]
    F --> B
```

First use the breakdown team to learn camera language and rhythm, then let the generation team produce new videos, keep analyzing data after publishing, and feed it back to optimize the next round. That's what makes expert teams more meaningful than a single tool: it doesn't just help you make one video — it turns "learn, produce, publish, review" into a system that runs on repeat.

---

> For a general method of dividing labor in multi-agent design, see the advanced chapter [Multi-Agent System Design](/en/workbuddy/adv-multi-agent/).
