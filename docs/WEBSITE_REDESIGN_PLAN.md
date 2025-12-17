# Website Redesign Plan

**Goal**: Present the full picture of Emmanuel — 8 years, web2+web3, product builder, security-conscious
**Core Theme (Stable)**: "Full-stack engineer who builds production systems"
**Current Emphasis**: Security audits (90-day experiment)

---

## Target Audiences

1. **Hiring managers** at Web3/fintech companies ($5k+/mo roles)
2. **Potential clients** for web2/web3 projects
3. **Security audit clients** (secondary)

---

## Phase 1: Landing Page

### Status: COMPLETE

### Implemented Copy

**Headline:**
```
Emmanuel Joseph
Full-stack Engineer (web2 and web3), serial builder, Ex Wikipedia
```

**Paragraph 1:**
```
8 years building production systems — from DeFi protocols handling user funds to enterprise platforms serving thousands. I work across the full stack: React, Node, Solidity, Go. Currently building Shuttershow, a tool for photographers.
```

**Paragraph 2:**
```
If you've searched on Wikipedia recently, you've probably used features I worked on. I helped Fitted.ng secure a $50k grant by rebuilding their technical foundation. I take security seriously — a bug I missed once cost a client $10k, and that failure changed how I build.
```

**CTAs:**
- Primary: "Get in touch" (mailto) — larger, more prominent
- Secondary: "See my work →" (link to /about)

### Tasks
- [x] Draft headline copy
- [x] Draft paragraph 1 copy
- [x] Draft paragraph 2 copy
- [x] Implement headline changes
- [x] Implement description changes
- [x] Add Shuttershow mention (in para 1)
- [x] Improve CTA styling (larger button)
- [x] Add secondary CTA ("See my work →")

### Design Tasks
- [x] Larger profile photo (80px → 120px) + rounded
- [x] More hero padding (pt-24/pb-16 mobile, pt-32/pb-20 desktop)
- [x] Add "Worked with" section (Wikimedia, Fitted.ng, PouchFi, Coronation Bank)
- [x] Hide blog section if no posts
- [x] Added "Latest Posts" heading when posts exist

---

## Phase 2: About Page

### Status: COMPLETE

### Implemented Changes

**Sidebar:**
- Tagline: "Full-stack Engineer (web2 and web3), serial builder, Ex Wikipedia"
- Description: "8 years building production systems — DeFi protocols, enterprise platforms, and my own products."
- CTA: "Get in touch" (larger button)

**About Section Intro:**
- Paragraph 1: Real money, real users, 8 years across fintech/blockchain/e-commerce
- Paragraph 2: Security story ($10k lesson, AI-augmented methodology)
- Paragraph 3: Building Shuttershow, best engineers ship their own products

**Projects Added:**
- Shuttershow (Building) — photographer tool
- Green Africa (Hedera) — smart reverse vending machine

### Tasks
- [x] Rewrite intro section (personality, breadth)
- [x] Add Shuttershow to Projects section
- [x] Add Green Africa/Hedera project
- [ ] Break experience descriptions into bullet points (deferred — dense text is readable)

---

## Phase 3: Services (Multi-Page)

### Status: COMPLETE

### Structure
```
/services           → Overview of all offerings
/services/audits    → Security audit service (AI-augmented methodology)
/services/consulting → Packaged consulting sessions
```

### Pages Created

**1. /services (Overview)**
- Links to audits, consulting, and development
- Development listed but not linked (contact for pricing)
- "Not sure what you need?" CTA

**2. /services/audits**
- Full conversion of security-audit-page-copy.md
- $10k origin story
- AI-augmented methodology explanation
- 3 tiers: Quick Scan ($500-1,500), Standard ($2,000-5,000), Comprehensive ($5,000-10,000)
- Sample finding (cross-chain signature replay)
- FAQ section
- Process steps

**3. /services/consulting**
- Architecture review, code review, web3 guidance, team mentorship
- 4 packages: Single Session ($150/hr), Architecture Deep Dive ($500), Code Audit Session ($400), Monthly Retainer ($1,000-2,500/mo)
- Background/credibility section

### Tasks
- [x] Create /services overview page
- [x] Create /services/audits page
- [x] Create /services/consulting page

---

## Phase 4: Blog & Polish

### Status: COMPLETE

### Navigation Updates
- Added Services link to nav
- Added mobile hamburger menu with toggle
- "EJ" logo on mobile
- Hover effects on links

### Blog Status
- Infrastructure works (fetches from DB where published_at is set)
- Landing page already hides blog section when empty (done in Phase 1)
- Blog post draft exists at `content/blog/how-a-10k-bug-taught-me-to-build-ai-security-audits.md`
- To publish: Add post to database with `published_at` set

### Tasks
- [x] Add Services to navigation
- [x] Add mobile navigation menu (hamburger)
- [x] Handle empty blog state on landing page (done in Phase 1)
- [ ] Publish first post to database (user action needed)

---

## Design Recommendations

### Landing Page
- Make hero CTA button larger with more contrast
- Add secondary CTA (See my work)
- No visual hook currently — consider subtle accent

### About Page
- Break dense experience paragraphs into bullets
- Add company logos if available
- Consider expandable sections

### General
- Mobile navigation needed (currently hidden on mobile)
- Empty blog state shows nothing — needs handling

---

## Key Messages (From Strategy)

1. "I build production systems — web2 and web3"
2. "8 years of real-world experience"
3. "I ship products, not just client work" (Shuttershow)
4. "I take security seriously (learned the hard way)"
5. "Ex Wikipedia" (employed as Software Engineer at Wikimedia Foundation)

---

## What NOT to Do

- Don't rebuild website every 90 days as experiments change
- Don't make security the central identity (it's one element)
- Don't use marketing fluff ("conquer challenges", "empower individuals")
- Don't hide the breadth — show full 8 years

---

*Last updated: December 2024*
