# GiveDirectly Application Answers

**Position**: Senior Software Engineer
**URL**: https://job-boards.greenhouse.io/givedirectly/jobs/4558344005

---

## Location

Lagos, Nigeria (GMT+1, 2 hours behind Nairobi). Available for East Africa timezone meetings.

---

## Mission Alignment Statement (200 words max)

I've spent 8 years building financial systems—payment platforms, DeFi protocols, fintech backends. The common thread: moving money reliably for people who depend on it.

What draws me to GiveDirectly is the directness. No bureaucratic overhead deciding what recipients "should" want. Just cash, delivered efficiently, trusting people to know their own needs. This resonates with my Nigerian context—I've seen how direct financial access transforms lives in ways prescriptive aid cannot.

My security audit work taught me something relevant: when payment systems fail, real people suffer. A webhook vulnerability I once missed cost a client $10k. That failure drove me to build systematic approaches to payment security. Now I've audited systems processing millions, finding 160+ vulnerabilities before they could hurt users.

At GiveDirectly, I'd bring this same rigor—understanding that every bug in a payment delivery system isn't just a technical issue, it's potentially someone's lifeline delayed. Building scalable, reliable infrastructure for cash transfers aligns perfectly with what I care about: systems that work for people who need them most.

I want to write code that moves money to people who need it.

**(196 words)**

---

## Technical Tool Examples

**Daily Stack**: TypeScript/Node.js with NestJS for backend services, PostgreSQL for relational data, Redis for caching and queues. Bull for async job processing—critical for reliable payment webhook handling and retry logic.

**AWS Services**: EC2 for compute, RDS for managed PostgreSQL, S3 for file storage, Lambda for event-driven functions, SQS for message queuing. Infrastructure as code with Docker and CI/CD pipelines.

**Payment Systems**: Built and audited integrations with multiple African payment providers (Korapay, Paystack, Flutterwave). Deep understanding of webhook security, idempotency, reconciliation flows, and the edge cases that cause real-world payment failures.

**Python**: Used for scripting, data analysis, and automation tasks. Comfortable picking it up as primary language—my security audit work involves reading codebases in multiple languages.

**Monitoring & Observability**: Experience with structured logging, error tracking, and building systems that surface problems before users report them.

---

## Software Philosophy

I believe software should be boring in production. The best systems are the ones you don't have to think about—they just work, reliably, at 3am when nobody's watching.

This means: explicit over clever, tested over assumed, simple over comprehensive. I've seen too many "elegant" solutions that break under real-world conditions. A straightforward approach that handles edge cases beats an abstract solution that doesn't.

Ownership matters more than territory. If something's broken and I can fix it, I fix it—whether or not it's "my" code. In financial systems especially, problems don't wait for the right person to notice them.

I also believe in building for the next developer. Clear naming, documentation where it helps, and code that explains its own reasoning. The person debugging your code at 2am might be you in six months.

---

## Microservices Architecture (4 sentences max)

Instead of one big application, microservices means building many small apps that each do one job and talk to each other. The upside: if one part breaks, the rest keeps working, and different teams can update their piece without waiting on others. The downside: more moving parts means more things that can go wrong between them, and it's harder to track down problems. It's like having specialist contractors vs one general handyman—more expertise, but more coordination needed.
