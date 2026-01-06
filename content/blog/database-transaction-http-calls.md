# Why Your Database Transaction Should Never Make HTTP Calls

**Status**: Draft
**Target**: Senior developers, hiring managers, technical founders
**SEO Keywords**: PostgreSQL deadlock, advisory locks, database transactions, HTTP timeout, NestJS production

---

## The Hook

POST requests timing out. GET requests working fine.

No error messages. No stack traces. Just... silence.

This was the scariest kind of production bug I've encountered. The system wasn't crashing — it was frozen. And every minute it stayed frozen, real payments weren't processing.

Here's how I diagnosed it in 15 minutes and fixed it with 2 lines of code.

---

## The Symptoms

A payment platform I work on started showing strange behavior:

- **POST requests**: Timeout after 30 seconds, no response
- **GET requests**: Working perfectly
- **Database**: Connections stuck in "idle in transaction" state
- **Logs**: Nothing useful — requests just hung

The pattern was clear: something was blocking all write operations while reads continued to work. But what?

---

## The Investigation

First thing I checked: PostgreSQL connections.

```sql
SELECT pid, state, query_start, LEFT(query, 80) as query
FROM pg_stat_activity
WHERE state = 'idle in transaction';
```

Found it. One connection had been "idle in transaction" for **45 minutes**. Eight other connections were waiting for the same advisory lock.

Advisory locks. That's when I knew exactly where to look.

---

## The Root Cause

The payment system used PostgreSQL advisory locks to coordinate between webhook handlers and manual payment verification. Smart pattern — prevents the same payment from being processed twice.

Here's the problematic code:

```typescript
async verifyPayment(reference: string) {
  await queryRunner.startTransaction();

  // Acquire lock to prevent duplicate processing
  await queryRunner.query(
    `SELECT pg_advisory_xact_lock(hashtext($1))`,
    [reference]
  );

  // Verify with payment provider
  const result = await paymentProvider.verify(reference);

  // Update database
  await queryRunner.manager.save(payment);
  await queryRunner.commitTransaction();
}
```

See the problem?

The HTTP call to the payment provider happens **while holding the advisory lock**. If the payment provider is slow — or worse, hangs — the lock is held the entire time.

That day, the payment provider was responding in 45+ seconds instead of the usual 200ms. One slow response triggered a cascade:

1. First request acquires lock, makes HTTP call, hangs
2. Webhook arrives, tries to acquire same lock, blocks
3. More requests pile up, all waiting for the same lock
4. Connection pool fills with blocked connections
5. New requests can't get database connections
6. **Entire system appears dead**

The code had processed thousands of payments successfully. It worked perfectly — until the payment provider had a slow day.

---

## The Fix

Two changes, both critical:

### 1. Add HTTP Timeouts

```typescript
// Before
HttpModule

// After
HttpModule.register({
  timeout: 30000, // 30 seconds
})
```

This single configuration change prevents any external call from hanging indefinitely.

### 2. Move HTTP Calls Outside Transactions

```typescript
async verifyPayment(reference: string) {
  // HTTP call FIRST — no locks held
  const result = await paymentProvider.verify(reference);

  // NOW start transaction
  await queryRunner.startTransaction();
  await queryRunner.query(
    `SELECT pg_advisory_xact_lock(hashtext($1))`,
    [reference]
  );

  // Quick database operations only
  await queryRunner.manager.save(payment);
  await queryRunner.commitTransaction();
}
```

If the HTTP call fails or times out, no database resources are blocked. The transaction only contains fast, predictable database operations.

---

## The Principle

**Database transactions should only contain database operations.**

This seems obvious when stated directly, but it's easy to violate:

- Calling a payment provider inside a transaction
- Sending an email while holding a lock
- Making an API call to another service mid-transaction
- Reading from a message queue inside a transaction

Any of these can turn a slow external dependency into a complete system outage.

The rule: **External I/O happens before or after the transaction, never during.**

---

## Why Advisory Locks Are Dangerous

PostgreSQL advisory locks are powerful for coordination, but they have a critical property that makes them dangerous:

**They don't show up in deadlock detection.**

PostgreSQL's deadlock detector automatically handles row-level lock cycles. If transaction A waits for B and B waits for A, PostgreSQL detects this and kills one transaction.

Advisory locks? PostgreSQL doesn't track them in deadlock detection. If you hold an advisory lock and wait for something external, you'll wait forever. And everything waiting for your lock will wait forever too.

---

## The Prevention Checklist

For any system that combines database transactions with external calls:

**Must have:**
- [ ] HTTP timeouts on all external clients (30 seconds is usually reasonable)
- [ ] External calls happen outside transactions
- [ ] Connection pool monitoring with alerts

**Should have:**
- [ ] Alerts for connections in "idle in transaction" > 1 minute
- [ ] Circuit breakers for external services
- [ ] Documentation of all advisory lock usage

**Nice to have:**
- [ ] Chaos testing with slow/failing external APIs
- [ ] Runbook for connection pool exhaustion

---

## The Pattern

This incident connects to a pattern I keep seeing in fintech systems:

**The code that works perfectly until external conditions change.**

The replay attack that cost my client $10k? Worked fine until someone sent duplicate webhooks. This deadlock? Worked fine until the payment provider got slow.

The scariest bugs aren't the ones that fail immediately. They're the ones that work correctly 99.9% of the time, then catastrophically fail when conditions change.

Building production systems means thinking about these edge cases before they happen. What if the API is slow? What if the webhook comes twice? What if the database connection drops mid-transaction?

The difference between code that works and code that's production-ready is handling the cases that "shouldn't happen."

---

## Key Takeaways

1. **Never hold database locks during HTTP calls** — External latency becomes database unavailability

2. **Always configure HTTP timeouts** — "No timeout" means your uptime depends on every external service

3. **Advisory locks are invisible grenades** — They block forever without triggering deadlock detection

4. **Monitor "idle in transaction" connections** — This is often the first sign of trouble

5. **Test with slow dependencies** — Your system should degrade gracefully, not collapse

---

## Related Reading

- [How a $10k Bug Taught Me to Build AI Security Audits](/post/how-a-10k-bug-taught-me-to-build-ai-security-audits) — The webhook replay attack that started my security journey
- [PostgreSQL Advisory Locks Documentation](https://www.postgresql.org/docs/current/explicit-locking.html#ADVISORY-LOCKS)

---

*Have questions about database patterns or production incident response? [Get in touch](mailto:emarjay921@gmail.com).*
