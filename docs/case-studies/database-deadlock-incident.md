# Database Deadlock Incident: Payment Processing System

**Type**: Production Incident Response
**Industry**: Fintech, Payments
**Resolution Time**: 30 minutes
**Severity**: Critical (Complete service unavailability for write operations)

---

## Executive Summary

A critical production incident caused complete service unavailability for POST requests while GET requests continued to work. The root cause was database advisory locks being held indefinitely during external HTTP calls to payment providers, causing cascading connection pool exhaustion.

---

## The Problem

### Symptoms Observed

1. **POST requests timing out** — All write operations (payments, transactions, orders) stopped working
2. **GET requests still functional** — Read operations continued to work normally
3. **PostgreSQL connections stuck** — Multiple connections showing `idle in transaction` state
4. **Advisory locks blocking** — One connection holding a lock, 8+ others waiting for the same lock
5. **No error messages** — Requests simply hung until timeout (no immediate feedback)

### Database State During Incident

```sql
-- Query showing blocked connections
SELECT pid, state, query_start, LEFT(query, 80) as query
FROM pg_stat_activity
WHERE state = 'idle in transaction';

-- Results showed:
-- PID 621: holding advisory lock, state = 'idle in transaction' for 45+ minutes
-- PIDs 622-630: waiting for the same advisory lock
```

---

## Root Cause Analysis

### The Architecture

The payment system used **PostgreSQL advisory locks** to prevent duplicate payment processing:

```typescript
// Webhook handler and manual verification both process payments
// Advisory lock prevents race conditions on the same payment reference
await queryRunner.query(`SELECT pg_advisory_xact_lock(hashtext($1))`, [reference]);
```

### The Fatal Flaw

**The advisory lock was acquired BEFORE making HTTP calls to external payment providers.**

```typescript
// PROBLEMATIC CODE FLOW:
async verifyKorapayPayment(reference: string, user: User) {
  await queryRunner.startTransaction();

  // Step 1: Acquire advisory lock (LOCKS THE REFERENCE)
  await queryRunner.query(`SELECT pg_advisory_xact_lock(hashtext($1))`, [reference]);

  // Step 2: Make HTTP call to payment provider (WHILE HOLDING LOCK)
  // If this hangs for 30 seconds, 1 minute, or indefinitely...
  // THE LOCK IS HELD THE ENTIRE TIME
  const result = await provider.verifyPaymentByReference(reference);

  // Step 3: Update database (never reached if HTTP hangs)
  await queryRunner.manager.save(payment);

  await queryRunner.commitTransaction();
}
```

### Why This Caused Total System Failure

1. **No HTTP timeout configured** — External API calls could hang indefinitely
2. **Advisory lock is transaction-scoped** — Lock held until transaction commits/rollbacks
3. **Connection pool exhaustion** — Each waiting request consumed a database connection
4. **Cascading failures** — Once pool exhausted, even unrelated queries failed

### The Chain of Events

```
1. Payment provider API becomes slow (network issue, overload, etc.)
2. User initiates payment verification
3. Transaction starts, advisory lock acquired
4. HTTP call to payment provider hangs
5. Lock held, transaction stays open
6. Webhook arrives for same payment
7. Webhook handler tries to acquire same advisory lock
8. Webhook blocks, waiting for lock
9. More requests come in, all block on the same lock
10. Database connection pool fills up
11. New requests can't get connections
12. System appears dead for all POST operations
```

---

## The Impact

### Business Impact

- **Complete payment processing failure** — No deposits could be processed
- **Customer trust erosion** — Users saw timeouts with no feedback
- **Potential duplicate payments** — Some users retried, creating duplicate attempts
- **Manual intervention required** — Required SSH access to kill stuck connections

### Technical Impact

- **Connection pool exhaustion** — All 10-20 connections consumed by stuck transactions
- **Cascading failures** — Unrelated features (orders, gift cards) also affected
- **No graceful degradation** — System failed completely rather than partially

---

## The Fix

### 1. Added HTTP Timeouts (30 seconds)

```typescript
// Before: No timeout - requests could hang forever
HttpModule

// After: 30 second timeout prevents indefinite hangs
HttpModule.register({
  timeout: 30000,
})
```

### 2. Restructured Code: HTTP Calls OUTSIDE Transactions

```typescript
// FIXED CODE FLOW:
async verifyKorapayPayment(reference: string, user: User) {
  // Step 1: Make HTTP call FIRST (no locks held)
  // If this times out after 30s, no database resources are blocked
  const result = await provider.verifyPaymentByReference(reference);

  // Step 2: NOW start transaction and acquire locks
  await queryRunner.startTransaction();
  await queryRunner.query(`SELECT pg_advisory_xact_lock(hashtext($1))`, [reference]);

  // Step 3: Quick database operations only
  await queryRunner.manager.save(payment);

  await queryRunner.commitTransaction();
}
```

### 3. Applied Same Pattern to All Payment Methods

- `verifyPayment()` — Generic payment verification
- `verifyKorapayPayment()` — KoraPay-specific verification
- All 3 webhook handlers (Kora, Paystack, 0xProcessing)

---

## Timeline

| Time | Event |
|------|-------|
| T+0 | Payment provider API becomes slow (45+ second responses) |
| T+5m | All POST requests start timing out |
| T+10m | Incident detected via user complaints |
| T+15m | Root cause identified (idle in transaction + advisory locks) |
| T+20m | Stuck connections killed manually |
| T+25m | Code fix developed |
| T+30m | System restored to normal operation |

---

## Lessons Learned

### 1. Never Hold Database Locks During External I/O

> **Rule**: Database transactions should only contain database operations. External calls (HTTP, file I/O, message queues) must happen OUTSIDE transactions.

**Why**: External systems have unpredictable latency. A 100ms database operation should not depend on a 30-second (or infinite) HTTP call.

### 2. Always Configure HTTP Timeouts

> **Rule**: Every HTTP client MUST have explicit timeouts configured.

**Why**: Default "no timeout" means your system's availability depends on external services. A slow third-party API shouldn't take down your entire application.

### 3. Advisory Locks Need Special Care

> **Rule**: Advisory locks are powerful but dangerous. They don't show up in standard deadlock detection.

**Why**: PostgreSQL's deadlock detector handles row-level locks automatically. Advisory locks are invisible to it — they just block forever.

### 4. Monitor for "Idle in Transaction" Connections

> **Rule**: Set up alerts for connections in `idle in transaction` state for more than 1 minute.

```sql
SELECT count(*) FROM pg_stat_activity
WHERE state = 'idle in transaction'
AND query_start < NOW() - INTERVAL '1 minute';
```

---

## Prevention Checklist

For any system that combines database transactions with external API calls:

- [ ] HTTP timeouts configured on all external HTTP clients
- [ ] External calls outside transactions — verify no locks held during I/O
- [ ] Connection pool monitoring — alerts for pool exhaustion
- [ ] Idle transaction monitoring — alerts for long-running idle transactions
- [ ] Advisory lock audit — document all advisory lock usage and verify safety
- [ ] Circuit breakers — fail fast when external services are slow

---

## Key Quotes (For Content)

> "A 30-second HTTP timeout is not a nice-to-have. It's the difference between a slow feature and a dead system."

> "Your database transaction should be fast and focused. If you're holding a lock while waiting for an external API, you're one slow response away from a complete outage."

> "Advisory locks are invisible grenades. They don't show up in deadlock detection, and they'll block forever if you let them."

> "The scariest bugs are the ones that work perfectly until they don't. This code processed thousands of payments successfully — until the payment provider had a slow day."

---

## Related

- Connection to replay attacks: Both involve timing/coordination issues in payment processing
- Same client as fintech security audit (separate engagement)

---

*Document created: January 2026*
