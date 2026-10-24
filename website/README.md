# iemarjay.com Website

Next.js portfolio and blog site.

## Tech Stack

- Next.js 13.3.1 (App Router)
- TypeScript
- Tailwind CSS
- Blog posts from Cloudflare D1, served by the Worker in `../blog-api`

## Development

```bash
npm install
npm run dev      # localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Environment Variables

None required. Posts come from `https://iemarjay-blog-api.emarjay921.workers.dev` by default; set `BLOG_API_URL` to use another instance (for example `http://localhost:8787` while running `npm run dev` in `../blog-api`).

## Structure

```
src/
├── app/
│   ├── page.tsx        # Homepage
│   ├── post/           # Blog routes
│   ├── about/          # About section
│   └── actions.ts      # Server actions
├── components/         # Shared components
└── blog-api.ts         # Blog API client
```
