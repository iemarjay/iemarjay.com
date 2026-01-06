# Video #4: The 2-Line Fix That Saved Our Payment System

**Status**: Draft
**Duration**: 45 seconds
**Series**: Bug of the Week
**Platforms**: X, TikTok, YouTube Shorts, Instagram Reels
**Target Audience**: Developers (quick win), hiring managers (practical problem-solving)

---

## Hook Options

- "Our payment system went down. The fix was 2 lines of code."
- "This 2-line change is the difference between a slow feature and a dead system."
- "Every HTTP client in your app needs this. Here's why."

---

## Script

```
[0-5s] HOOK
"Our entire payment system went down.
The fix was 2 lines of code."

[5-15s] THE PROBLEM
"Payment provider got slow one day.
Our code waited... and waited... and waited.
While holding a database lock the entire time.
Connection pool filled up. System dead."

[15-25s] THE MISSING PIECE
"The problem? No HTTP timeout.
Default behavior: wait forever.
Your system's uptime shouldn't depend on
every external API being fast."

[25-35s] THE FIX
"The fix:
HttpModule.register, timeout: 30000.
Two lines. 30 second timeout.
Now slow APIs fail fast instead of taking everything down."

[35-45s] THE LESSON
"Every HTTP client in your app needs an explicit timeout.
This isn't optional. This is production 101."
```

---

## Visual Notes

- Quick energy, punchy delivery
- Count "2 lines" on fingers
- Show the actual code change if possible (B-roll or overlay)
- End with direct, confident delivery

---

## B-Roll Ideas

- Code editor showing the 2-line change
- Before/after split screen
- Timeout value highlighted

---

## Why This Works for Target Audience

**Developers**: Immediately actionable, can apply to their own code today
**Hiring managers**: Shows pragmatic problem-solving, not over-engineering
**Founders**: Shows someone who finds simple solutions to complex problems

---

## Platform Adaptations

**X caption**:
"Our payment system went down. The fix was 2 lines.

HttpModule.register({ timeout: 30000 })

Every HTTP client needs an explicit timeout. This is production 101."

**TikTok caption**:
"2 lines of code saved our entire payment system #developer #coding #production #debugging"

**YouTube Shorts title**:
"2 Lines of Code That Saved Our Payment System"

**Instagram caption**:
"Payment system down. Fix: 2 lines.

The problem: No HTTP timeout. External API got slow. Our code waited forever while holding a database lock.

The fix: timeout: 30000

30 seconds. That's it. Slow APIs now fail fast instead of taking everything down with them.

Every HTTP client needs this. No exceptions."
