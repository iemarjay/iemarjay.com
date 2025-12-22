# CLAUDE.md - Project Context for Claude Code

## Project Overview

Personal brand and portfolio project for **Emmanuel Joseph (@iemarjay)** — full-stack developer (web2 + web3) with 8 years experience, based in Lagos, Nigeria.

This repo contains:
- **Website**: Portfolio and blog at iemarjay.com
- **Content**: Blog posts and copy drafts
- **Docs**: Brand strategy, mentorship frameworks, career planning

## Who Emmanuel Is

- Full-stack developer specializing in web2 + web3
- Currently at Pouchfi + freelance client work
- Building Shuttershow (photographer tool MVP)
- ADPList mentor for developers
- Security audits: Proven methodology (125+ issues found across backend + web3)

**Positioning**: Developer who builds production systems, takes security seriously, ships products, and has depth. NOT "just a security auditor."

**Voice**: Practical, friendly, tutor energy, admits mistakes openly.

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
├── content/                      # Blog posts and copy
│   └── blog/                     # Blog post drafts
└── docs/                         # Strategy & planning docs
    ├── PERSONAL_BRAND_STRATEGY.md
    ├── ADPLIST_MENTORSHIP.md
    ├── CLAUDE_CODE_HANDOFF_CONTEXT.md
    ├── SECURITY_AUDIT_EXPERIENCE.md
    └── templates/                # Proposal templates
        └── SECURITY_ENGAGEMENT_PROPOSAL.md
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
- `docs/ADPLIST_MENTORSHIP.md` - Mentorship tracking & frameworks
- `docs/SECURITY_AUDIT_EXPERIENCE.md` - Audit methodology & experience (NDA-compliant)
- `docs/templates/SECURITY_ENGAGEMENT_PROPOSAL.md` - Proposal template for security engagements

## Content Status

| Content | Status |
|---------|--------|
| $10k bug story blog post | Published |
| Backend security audit page | Done (/services/security) |
| Smart contract audit page | Done (/services/smart-contracts-security) |
| Twitter profile optimization | Not started |
| LinkedIn optimization | Not started |

## The Origin Story

Emmanuel learned about replay attacks the hard way — a webhook vulnerability cost a client $10k. That failure drove him to build systematic security checks. This connects to his security audit work.

## Security Audit Experience

Emmanuel has executed comprehensive security audits with **prompts tailored per project** (not fixed templates):

**Backend Audits** — fully custom per project:
- Prompts written based on tech stack, domain, and risk areas
- Found 115 issues (35 critical, 39 high) in a fintech backend

**Smart Contract Audits** — more standardized (Solidity patterns consistent):
- Adapted for protocol type (DeFi, NFT, governance)
- Found critical cross-chain replay vulnerability, storage gaps, rate limit issues

**The $10k Connection**: The webhook replay vulnerability from Panelsuite directly connected to the cross-chain signature replay found in smart contracts — same class of bug, different layer.

Details in `docs/SECURITY_AUDIT_EXPERIENCE.md` (methodology without client names due to NDA).

## Known Issues

- None currently
