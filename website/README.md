# iemarjay.com Website

Next.js portfolio and blog site.

## Tech Stack

- Next.js 13.3.1 (App Router)
- TypeScript
- Tailwind CSS
- PostgreSQL (Neon) + Prisma

## Development

```bash
npm install
npm run dev      # localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Environment Variables

Create `.env` with:

```
DATABASE_URL=postgresql://...
```

## Structure

```
src/
├── app/
│   ├── page.tsx        # Homepage
│   ├── post/           # Blog routes
│   ├── about/          # About section
│   └── actions.ts      # Server actions
├── components/         # Shared components
└── prisma.ts           # Database client
```
