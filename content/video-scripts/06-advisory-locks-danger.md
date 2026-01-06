# Video #6: Advisory Locks Are Invisible Grenades

**Status**: Draft
**Duration**: 60 seconds
**Series**: Security Storytime / Technical Deep Dive
**Platforms**: X, TikTok, YouTube Shorts, Instagram Reels
**Target Audience**: Senior developers, hiring managers (shows database expertise)

---

## Hook Options

- "PostgreSQL has a lock type that doesn't show up in deadlock detection"
- "This PostgreSQL feature will block forever and you won't know why"
- "Advisory locks: powerful, dangerous, and invisible"

---

## Script

```
[0-5s] HOOK
"PostgreSQL has a lock that doesn't show up in deadlock detection.
It will block forever, and PostgreSQL won't save you."

[5-15s] WHAT THEY ARE
"Advisory locks. They're for application-level coordination.
'Only one process should handle this payment.'
'Only one worker should process this job.'
Great for preventing duplicates."

[15-30s] WHY THEY'RE DANGEROUS
"Normal row-level locks? PostgreSQL tracks them.
If A waits for B and B waits for A — deadlock detected, one gets killed.
Problem solved.

Advisory locks? PostgreSQL doesn't track them.
If you hold one and wait for something external...
you wait forever. And everything waiting for your lock waits forever too."

[30-45s] THE TRAP
"The trap: transaction-scoped advisory locks.
pg_advisory_xact_lock holds until commit.
If you make an HTTP call mid-transaction...
slow API means the lock is held for as long as that API takes.
Could be 30 seconds. Could be forever."

[45-55s] THE RULE
"The rule: Never hold advisory locks during external I/O.
Get your data from external sources first.
Then acquire the lock. Then do your database work. Then release."

[55-60s] CLOSE
"Advisory locks are powerful. But they're invisible grenades.
Handle with care."
```

---

## Visual Notes

- Technical but accessible tone
- Use hand gestures to show "A waits for B, B waits for A"
- Serious energy for "invisible grenades"
- Confident expertise throughout

---

## B-Roll Ideas

- Diagram showing deadlock detection working
- Diagram showing advisory lock NOT being detected
- Code snippet with the danger zone highlighted
- Terminal showing `pg_stat_activity` with stuck connections

---

## Why This Works for Target Audience

**Senior developers**: Deep technical content they can apply
**Hiring managers**: Shows database internals knowledge, senior-level thinking
**Database enthusiasts**: Shareable deep dive on a specific PostgreSQL feature

---

## Platform Adaptations

**X caption**:
"PostgreSQL advisory locks don't show up in deadlock detection.

Normal locks: PostgreSQL detects cycles and kills one transaction.
Advisory locks: Block forever. No automatic resolution.

If you hold an advisory lock during an HTTP call, you're one slow API away from a frozen system.

Rule: Never hold advisory locks during external I/O."

**TikTok caption**:
"postgres feature that will freeze your entire system and you won't know why #developer #database #postgres #backend"

**YouTube Shorts title**:
"PostgreSQL Advisory Locks: The Silent System Killer"

**Instagram caption**:
"Advisory locks are invisible grenades.

Normal PostgreSQL locks: Deadlock detected automatically. One transaction killed. Problem solved.

Advisory locks: No detection. Block forever. Take your whole system down.

The trap: Holding an advisory lock while making an HTTP call. Slow API = lock held forever = everything waiting = system dead.

The rule: External I/O before or after. Never while holding advisory locks.

Powerful feature. Handle with extreme care."
