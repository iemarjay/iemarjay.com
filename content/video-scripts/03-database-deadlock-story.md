# Video #3: The Bug That Killed Our Payment System

**Status**: Draft
**Duration**: 60 seconds
**Series**: Security Storytime / Bug of the Week
**Platforms**: X, TikTok, YouTube Shorts, Instagram Reels
**Target Audience**: Hiring managers (shows debugging skills), developers (educational)

---

## Hook Options

- "POST requests timing out. GET requests working. What would you check first?"
- "Our entire payment system froze. Here's how I found the bug in 15 minutes."
- "This code worked perfectly for months. Then one slow API response killed everything."

---

## Script

```
[0-5s] HOOK
"POST requests timing out. GET requests working fine.
What would you check first?"

[5-15s] THE MYSTERY
"No errors. No stack traces. The system wasn't crashing —
it was just... frozen. Every minute it stayed frozen,
real payments weren't processing."

[15-25s] THE INVESTIGATION
"First thing I checked: database connections.
Found one connection 'idle in transaction' for 45 minutes.
Eight others waiting for the same advisory lock."

[25-40s] THE ROOT CAUSE
"The payment verification code acquired a database lock,
then made an HTTP call to the payment provider.
That day, the provider was slow. 45 seconds instead of 200 milliseconds.
Lock held the entire time. Every other request piled up behind it."

[40-50s] THE FIX
"Two changes: Added HTTP timeouts.
Moved the HTTP call outside the transaction.
System back up in 30 minutes."

[50-60s] THE LESSON
"Your database transaction should only contain database operations.
Never hold locks while waiting for external APIs."
```

---

## Visual Notes

- Serious, focused energy for hook
- Show curiosity during investigation ("let me check...")
- Moment of realization when revealing root cause
- Confident energy for the fix
- Direct eye contact for the lesson

---

## B-Roll Ideas (Optional)

- Terminal showing `pg_stat_activity` query
- Code snippet with the problematic pattern highlighted
- Simple diagram: Lock -> HTTP -> Timeout -> Cascade
- Before/after code comparison

---

## Why This Works for Target Audience

**Hiring managers**: Shows systematic debugging approach, production experience, fast resolution
**Developers**: Teaches a real pattern to avoid, actionable advice
**Founders/CTOs**: Shows someone who can handle production emergencies calmly

---

## Platform Adaptations

**X caption**:
"POST requests timing out. GET requests working. No errors.

This is how a slow payment API took down our entire system — and the 2-line fix that saved it."

**TikTok caption**:
"the scariest kind of bug is the one with no error message #developer #debugging #postgres #tech #production"

**YouTube Shorts title**:
"The Bug That Killed Our Payment System (No Error Messages)"

**Instagram caption**:
"POST requests frozen. GET requests fine. No errors anywhere.

This is the scariest kind of production bug — the system isn't crashing, it's just... stuck.

The culprit? A database lock held while waiting for a slow external API.

Two changes fixed it:
1. HTTP timeouts (30 seconds)
2. Move HTTP calls outside the transaction

Your database transaction should only contain database operations."
