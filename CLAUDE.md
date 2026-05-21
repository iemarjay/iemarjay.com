# CLAUDE.md

Personal brand and portfolio repo for **Emmanuel Joseph (@iemarjay)** — Lagos, Nigeria. Contains a Next.js portfolio site, content drafts, job applications, and strategy docs.

## Voice and content rules

- **Voice**: practical, friendly, tutor energy, admits mistakes openly.
- **X/Twitter**: has Premium — write long-form single posts, **not threads**. Drafts go in `content/twitter-threads/` (legacy folder name, do not rename).
- **Content strategy**: writing-first. No vlogs, shorts, or face-to-camera. Demo videos are screen recordings only.
- **Pouchfi private fact**: do NOT publish the "$60K failed launch / brought in for rebuild" detail externally. Use "designed and built the current platform from the ground up" framing.

## Where to look first

- `docs/PERSONAL_BRAND_STRATEGY.md` — brand positioning, content strategy, revenue plan.
- `docs/SECURITY_AUDIT_EXPERIENCE.md` — NDA-compliant audit methodology and case stats.
- `docs/JOB_APPLICATION_PLAYBOOK.md` — tactical resume/cover-letter rules and unique angles per role type.
- `docs/README.md` — full doc index.
- `docs/FEBRUARY_2026_CONTENT_PLAN.md` — current content calendar.

## Public open-source assets

- **Code Refinery** (`github.com/iemarjay/code-refinery`) — agentic PR review tool (Claude Code CLI in full agentic mode). Featured asset; reference freely in content, applications, and audit pitches.

## Website

```bash
cd website
npm run dev      # localhost:3000
npm run build    # runs prisma generate
npm run lint
```

Stack: Next.js 13 App Router, TypeScript, Tailwind, Prisma + PostgreSQL (Neon), `marked` for markdown. `@/*` → `./src/*`. Remote images allowed from Cloudinary in `next.config.js`.

Required env in `website/.env`: `DATABASE_URL`.

`Post` model: `published_at IS NULL` means draft.
