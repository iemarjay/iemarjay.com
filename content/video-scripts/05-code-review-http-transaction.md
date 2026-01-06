# Video #5: Code Review Red Flag — HTTP Inside Transaction

**Status**: Draft
**Duration**: 30 seconds
**Series**: Code Review Red Flags
**Platforms**: X, TikTok, YouTube Shorts, Instagram Reels
**Target Audience**: Developers (educational), hiring managers (shows code review skills)

---

## Hook Options

- "Spot the bug that took down a payment system"
- "If you see this pattern in a code review, reject it"
- "This code worked perfectly. Until it didn't."

---

## Script

```
[0-3s] HOOK
"Spot the bug."

[3-12s] SHOW THE CODE
"Start transaction.
Acquire database lock.
Make HTTP call to external API.
Save to database.
Commit."

[12-20s] THE PROBLEM
"See it?
The HTTP call happens while holding the lock.
If that API is slow — even once —
your entire system stops."

[20-28s] THE FIX
"Fix: HTTP call first. Then transaction.
External I/O should never happen inside a database transaction."

[28-30s] CLOSE
"Now you know."
```

---

## Visual Notes

- Show code on screen (or whiteboard)
- Point to the problematic line
- Quick, confident energy
- Almost like a quiz format

---

## B-Roll Ideas

- Code snippet with red highlight on the HTTP call
- Arrow showing "LOCK HELD HERE" spanning the HTTP call
- Green checkmark on the fixed version

---

## Why This Works for Target Audience

**Developers**: Quick pattern recognition, immediately applicable
**Hiring managers**: Shows code review instincts, systematic thinking
**Tech leads**: Shareable with their teams as a quick lesson

---

## Platform Adaptations

**X caption**:
"Code review red flag:

startTransaction()
acquireLock()
await httpCall() // BUG
save()
commit()

HTTP calls inside transactions = disaster waiting to happen.

External I/O before or after. Never during."

**TikTok caption**:
"spot the bug challenge #developer #codereview #debugging #tech"

**YouTube Shorts title**:
"Spot the Bug That Killed a Payment System (30 sec)"

**Instagram caption**:
"Spot the bug.

Transaction start. Lock acquired. HTTP call. Save. Commit.

See it?

The HTTP call holds the lock. If that external API is slow, your entire system freezes.

Rule: External I/O happens before or after the transaction. Never during.

Save this for your next code review."
