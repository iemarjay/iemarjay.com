# CLAUDE.md - Project Context for Claude Code

## Project Overview

Personal brand and portfolio project for **Emmanuel Joseph (@iemarjay)** — full-stack developer (web2 + web3) with 8 years experience, based in Lagos, Nigeria.

This repo contains:
- **Website**: Portfolio and blog at iemarjay.com
- **Content**: Blog posts, X posts, and proposal templates
- **Docs**: Brand strategy, mentorship frameworks, case studies, career planning

## Who Emmanuel Is

- Full-stack developer specializing in web2 + web3
- Currently at Pouchfi + freelance client work
- Building Shuttershow (photographer tool MVP)
- ADPList mentor for developers
- Security audits: Proven methodology (160+ issues found across backend + web3, including forensic incident analysis)
- Politically conscious: Cares about Nigeria, Africa, and global politics/economies

**Positioning**: Developer who builds production systems, takes security seriously, ships products, and has depth. NOT "just a security auditor."

**Voice**: Practical, friendly, tutor energy, admits mistakes openly.

**X/Twitter**: Has X Premium — write long-form single posts, NOT threads. Store drafts in `content/twitter-threads/` (legacy folder name).

## Goals

- Land $5k+/mo remote role with flexibility (3-6 months)
- Build personal brand that attracts opportunities ("digital gravity")
- $10k+/mo combined revenue (12 months)
- Be known as thought leader to the right people (not fame)

Available time: **10-15 hours/week** for brand building.

## Project Structure

```
iemarjay.com/
├── website/                      # Next.js portfolio site
│   ├── src/
│   │   ├── app/                  # App Router
│   │   │   ├── page.tsx          # Homepage (hero + recent posts)
│   │   │   ├── layout.tsx        # Root layout with metadata
│   │   │   ├── actions.ts        # Server actions (data fetching)
│   │   │   ├── post/             # Blog routes
│   │   │   │   ├── page.tsx      # Blog listing
│   │   │   │   └── [slug]/       # Dynamic post pages
│   │   │   ├── about/            # About section
│   │   │   │   └── case-study/   # Case studies
│   │   │   ├── services/         # Services section
│   │   │   │   ├── page.tsx      # Services listing
│   │   │   │   ├── security/     # Backend security audits
│   │   │   │   ├── smart-contracts-security/  # Web3 audits
│   │   │   │   └── consulting/   # Technical consulting
│   │   │   ├── components/       # Page-level components (GTM, JsonLd)
│   │   │   ├── sitemap.ts        # Dynamic sitemap
│   │   │   └── robots.ts         # Robots.txt
│   │   ├── components/           # Shared components
│   │   └── prisma.ts             # Prisma client singleton
│   ├── prisma/
│   │   └── schema.prisma         # Database schema (posts table)
│   ├── public/media/             # Static images
│   └── .env                      # Environment variables
├── content/                      # Content drafts and templates
│   ├── blog/                     # Blog post drafts
│   ├── linkedin/                 # LinkedIn post drafts
│   ├── twitter-threads/          # X post drafts (legacy folder name)
│   └── templates/                # Proposal templates
│       └── SECURITY_ENGAGEMENT_PROPOSAL.md
└── docs/                         # Strategy & planning docs
    ├── PERSONAL_BRAND_STRATEGY.md
    ├── 2026_YEARLY_PLAN.md
    ├── AUDIT_CONTEST_STUDY_PLAN.md
    ├── ADPLIST_MENTORSHIP.md
    ├── CLAUDE_CODE_HANDOFF_CONTEXT.md
    ├── SECURITY_AUDIT_EXPERIENCE.md
    └── case-studies/             # Anonymized case studies
        └── fintech-incident-response-case-study.md
```

## Website

### Commands

```bash
cd website
npm run dev      # Dev server at localhost:3000
npm run build    # Production build (runs prisma generate)
npm run lint     # ESLint
```

### Tech Stack

- **Framework**: Next.js 13.3.1 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.3 (custom gradient utilities)
- **Database**: PostgreSQL (Neon) with Prisma ORM
- **Content**: Markdown rendered via `marked`
- **Analytics**: Google Tag Manager (GTM-PZQZ5LX6)

### Database Schema (Post)

```
id, title, slug (unique), content, excerpt,
cover_image_url, cover_video_url, author,
published_at (null = draft), created_at, updated_at
```

### Key Files

- `src/app/actions.ts` - Server actions for data fetching
- `src/prisma.ts` - Prisma client singleton
- `prisma/schema.prisma` - Database schema
- `post/PostsLoadMore.tsx` - Infinite scroll pagination

### Config Notes

- `next.config.js` - Remote images allowed from Cloudinary

### Path Alias

`@/*` maps to `./src/*`

### Environment Variables

Required in `website/.env`:
- `DATABASE_URL` - PostgreSQL connection string

## Key Docs

- `docs/CLAUDE_CODE_HANDOFF_CONTEXT.md` - Session handoff context, resume instructions
- `docs/PERSONAL_BRAND_STRATEGY.md` - Full brand strategy
- `docs/2026_YEARLY_PLAN.md` - Month-by-month focus for projects, content, career, travel
- `docs/AUDIT_CONTEST_STUDY_PLAN.md` - 12-week study plan for audit contests
- `docs/ADPLIST_MENTORSHIP.md` - Mentorship tracking & frameworks
- `docs/SECURITY_AUDIT_EXPERIENCE.md` - Audit methodology & experience (NDA-compliant)
- `docs/case-studies/` - Anonymized case studies for proposals/portfolio
  - `fintech-incident-response-case-study.md` - Backend audit + forensics
  - `solana-prediction-market-audit-case-study.md` - Solana/Rust audit
- `content/templates/SECURITY_ENGAGEMENT_PROPOSAL.md` - Proposal template for security engagements

## Content Status

| Content | Status |
|---------|--------|
| $10k bug story blog post | Published |
| $10k redemption blog post | Draft (content/blog/) |
| Fintech incident response case study | Done (docs/case-studies/) |
| Solana prediction market case study | Done (docs/case-studies/) |
| $10k redemption X post | Draft (content/twitter-threads/) |
| Solana audit X post | Draft (content/twitter-threads/) |
| Solana audit blog post | Draft (content/blog/) |
| Solana audit LinkedIn post | Draft (content/linkedin/) |
| Backend security audit page | Done (/services/security) |
| Smart contract audit page | Done (/services/smart-contracts-security) |
| Twitter profile optimization | Not started |
| LinkedIn optimization | Not started |

## The Origin Story

Emmanuel learned about replay attacks the hard way — a webhook vulnerability cost a client $10k. That failure drove him to build systematic security audit capabilities.

**The redemption**: He returned to audit the same system, found the exact vulnerability that was exploited plus 23 more, and performed forensic analysis quantifying $7,149 in fraud over 42 days with $5,110 recoverable. From costly mistake to complete incident response.

## Security Audit Experience

Emmanuel has executed comprehensive security audits with **prompts tailored per project** (not fixed templates):

**Backend Audit #1 — The $10k Redemption**:
- Returned to audit the same system where webhook vulnerability cost client $10k
- Found 24 issues (5 critical, 7 high) including the exact vulnerability exploited
- **Forensic analysis**: Given production DB access, quantified attack ($7,149 fraudulent over 42 days)
- Identified attackers and $5,110 recoverable funds still in wallets

**Backend Audit #2**:
- Found 115 issues (35 critical, 39 high) in a fintech backend
- Fake deposits, race conditions, auth weaknesses, encryption flaws

**Smart Contract Audit #1 (Solidity)**:
- Found critical cross-chain replay vulnerability, storage gaps, rate limit issues

**Smart Contract Audit #2 (Solana/Rust)**:
- Prediction market protocol with LMSR AMM, ~2,800 lines
- Found 17 issues (2 high, 5 medium) including vault insolvency risk
- Reviewed 703-line fixed-point math engine

**The $10k Connection**: Same replay vulnerability class across layers — web2 (webhook replay) and web3 (cross-chain signature replay).

Details in `docs/SECURITY_AUDIT_EXPERIENCE.md` (methodology without client names due to NDA).

## Known Issues

- None currently
