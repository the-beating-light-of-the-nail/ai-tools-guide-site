# Long Audio/Video Transcription, Subtitles, and Highlight Clips

> Scenario: a colleague sends you a meeting recording, a livestream replay, or an interview video and asks you to tidy it up—and cut a few shareable clips while you're at it. The most tedious part is scrubbing the timeline back and forth: rewinding to catch an uncertain name, hunting down the start and end of a great quote, and then worrying about overlapping subtitle timelines and quotes taken out of context.

I ran the entire pipeline on a real 4-minute-47-second Chinese voiceover recording:

```text
raw audio
→ timestamped verbatim transcript
→ clean transcript
→ 111 SRT subtitles
→ 10 spots flagged for human review
→ 5 highlight candidates
→ Top 3 ranking
→ decide whether to edit only after human confirmation
```

The same workflow applies to longer material, but you must **spot-check in segments, keep the original timestamps, and listen through once before batch export**. Tool choices: for transcription, use Doubao Work's local file understanding + the `asr-subtitles` Skill + file-generation self-check (no external account authorization needed); for highlight screening, use a new work task + built-in text analysis (it only reads the clean transcript and the review list, and won't re-guess the audio while screening); for actual editing and export, connect video tools only after human confirmation.

## Task 1: First Get Text You Can Proofread, Not a Pretty Summary

After uploading the audio, spell out the verbatim transcript, clean transcript, SRT, human review list, and self-check in one go:

```text
I'm a content operations person with a Chinese voiceover audio file that I need turned into written material I can directly proofread and edit.

Input: the [audio file name] already uploaded in this conversation. There is only one main speaker;
if you detect multiple speakers, label them as "Speaker A / B".
For terminology, prioritize the following spellings: [fill in product names, people's names, English abbreviations].

Please read the audio directly and process it in this order:
1. First check that the file can be read, and record the total audio duration.
2. Generate a faithful verbatim transcript with mm:ss timestamps; keep verbal repetitions and filler pauses.
3. Separately produce a clean transcript that only removes obvious verbal repetitions and meaningless pauses,
   without changing opinions, numbers, product names, or tone.
4. Generate standard SRT subtitles: sequential numbering, no overlapping timelines; ideally 1–2 lines per cue,
   each line no more than 18 Chinese characters; don't split a sentence into something incomprehensible.
5. Mark words you can't confirm as [unclear mm:ss] or [term to confirm mm:ss]; never guess.
6. Run a self-check: spot-check the beginning, middle, and end; verify timestamp continuity, SRT overlaps,
   term spelling, and that the verbatim and clean transcripts haven't been mixed up.

Final deliverables:
A. Timestamped verbatim transcript  B. Clean transcript  C. Complete SRT subtitles  D. Human review list  E. Self-check results

Save as 4 files: transcript.md (verbatim transcript), clean-transcript.md (clean transcript), subtitles.srt (subtitles), human-review-list.md (human review list),
and report in chat the total duration, subtitle cue count, number of items needing review, and file paths.

Safety boundaries: do not publish, upload to other platforms, or modify any online content; keep markers on any unconfirmed information.
```

Once the task started, it first confirmed the file was readable (286.96 seconds), determined that generic audio capability wasn't responsible for transcription, and called `asr-subtitles` instead—**if the process only shows "understanding content, summarizing points," you'll usually end up with a summary, not timestamps you can check against the original audio**.

Actual results: 111 SRT cues, 0 overlapping timelines, no line over 18 characters. It didn't force-guess unclear parts into fluent speech; instead it left 10 spots for human confirmation (a guest's name, tool names, a GPU model, a file name, and numbers), plus 11 homophone misrecognitions that could be confirmed from context were logged separately as "corrected."

> The verbatim transcript is responsible for **fidelity**; the clean transcript for **readability**. The most dangerous move is merging the two into one "smooth-looking" document—pleasant to read, but you can't tell which words the AI guessed.

## Task 2: Open a New Task That Reads Only Verified Text

Put the timestamped clean transcript and human review list into a **new task**—it can only judge based on existing timestamps and won't invent names and numbers while screening (in testing, `.md`/`.txt` files sometimes can't be "opened" from the file picker; the most reliable method is to paste both texts directly into the prompt):

```text
This is a new, independent task. Please process only the two materials I provide below:
- Material 1: the proofread, timestamped clean transcript
- Material 2: segments needing human relisten / terms to confirm

Do not access the internet again, and do not add content that isn't in the audio.

Audience: [fill in your audience]
Target platforms: WeChat Channels / Douyin, vertical video, 20–45 seconds per clip.

Screening requirements:
1. Candidate clips must contain a complete question, key point, or specific story, and stay accurate out of context.
2. Prioritize segments with high information density, concrete numbers, clear contrast, or real operational results.
3. Don't take quotes out of context to manufacture conflict; necessary conditions and factual boundaries must be preserved.
4. Mark segments overlapping the human review list as "relisten first"; they cannot be treated as ready-to-cut.
5. Start and end times must come from existing timestamps in the clean transcript; candidates must not overlap heavily.
6. Give 5 candidates first, each including: number, start/end time, estimated duration, core value,
   why it can stand alone, suggested title, context to add, risks / items to confirm, suggested priority.
7. Then pick the Top 3 and explain the ranking rationale.
8. Finally, provide a checklist of "export only after human confirmation."
9. Output only the clip list; do not generate, edit, or publish any actual video.

Save the result as highlight-clip-candidates.md (highlight clip candidates), and report in chat the total candidate count, Top 3 time ranges, and the number of candidates requiring a relisten first.

Safety boundaries: without my confirmation, do not call editing tools to export video, do not publish, and do not modify the original files.

--- Material 1: timestamped clean transcript ---
[paste the clean transcript, or state the uploaded file name]
--- Material 2: human relisten / terms to confirm ---
[paste the human review list, or state the uploaded file name]
```

It first mapped out the timestamp anchors, screened 5 candidates by "complete question or story, information density, 20–45 seconds, factual boundaries," then checked each against the human review list—as soon as a time range touched an unconfirmed name, product, or number, it flagged it "relisten first." Actual Top 3:

| Rank | Time range | Content | Why it ranked high |
| --- | --- | --- | --- |
| 1 | 00:48—01:48 | AI takes over the PC to tune game graphics | Strong contrast, with quantified results of 3,405 MB → 2,704 MB, but needs tight editing and number verification |
| 2 | 01:48—02:37 | A 5-hour conversation distilled into 8 Skills | High information density, 46,000 characters → 8 Skills, but the guest's name and a structure name need confirmation |
| 3 | 02:37—03:20 | Movie research across 5 platforms | Closest to content creators, stands alone in 43 seconds, but the research subject's name must be relistened first |

All 5 candidates touched at least one unconfirmed item, so Doubao Work generated the candidate list but **still did not** call editing tools, export video, or alter the original audio. One more detail: the output file got the generation date wrong the first time, and when correcting it you should again confirm "only fix the date—no cutting, no exporting, no publishing"—the final result must be read through; seeing a file card doesn't mean it's done.

> **"AI picked this segment" does not mean "this segment is ready to post."** As long as candidates still contain [unclear], [term to confirm], or unverified numbers, the next step is a relisten, not an export.

## Remember This Two-Stage Workflow

**Stage 1** (audio → traceable text): specify the file, speakers, and glossary; ask for the verbatim and clean transcripts separately; check the SRT for numbering, overlaps, and line length; leave timestamps instead of guessing unclear words; spot-check the beginning, middle, and end.

**Stage 2** (text → candidates worth a relisten): read only the clean transcript and review list; start/end times must come from existing timestamps; explain why each candidate stands alone; flag risks on unconfirmed items; no cutting, exporting, or publishing before human confirmation.

What actually saves time isn't having the AI publish the video in one go—it's having it finish the most tedious mechanical work first: timestamps aligned, subtitles cut, risk points flagged, candidate segments found. You only need to spend attention where it counts most: listening to those 10 uncertain spots and judging whether those 5 candidates are really postable.

---

Next: [Mining the Comments Section for Your Next Piece, and Running a Real Retrospective →](/en/doubaowork/case-comments)
