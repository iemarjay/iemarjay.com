// Read-only JSON API over the blog's D1 database, called by the Next.js site.
// It only ever returns published posts, which are public on the site anyway.
//
//   GET /posts?limit=20&offset=0  published posts, newest first (no content)
//   GET /posts/:slug              one published post, with content
//   GET /sitemap                  slug + updated_at for every published post

interface Env {
  DB: D1Database;
}

const SUMMARY_COLUMNS =
  'id, title, slug, excerpt, cover_image_url, cover_video_url, author, published_at, created_at, updated_at';

export default {
  async fetch(request, env): Promise<Response> {
    if (request.method !== 'GET') {
      return json({ error: 'Method not allowed' }, 405);
    }

    const url = new URL(request.url);
    const [resource, slug, ...rest] = url.pathname.split('/').filter(Boolean);

    try {
      if (resource === 'posts' && !slug) {
        const limit = intParam(url, 'limit', 20, 1, 50);
        const offset = intParam(url, 'offset', 0, 0, Number.MAX_SAFE_INTEGER);
        const { results } = await env.DB.prepare(
          `SELECT ${SUMMARY_COLUMNS} FROM posts
           WHERE published_at IS NOT NULL
           ORDER BY published_at DESC
           LIMIT ? OFFSET ?`,
        )
          .bind(limit, offset)
          .all();
        return json(results);
      }

      if (resource === 'posts' && slug && rest.length === 0) {
        const post = await env.DB.prepare(
          'SELECT * FROM posts WHERE slug = ? AND published_at IS NOT NULL',
        )
          .bind(decodeURIComponent(slug))
          .first();
        return post ? json(post) : json({ error: 'Not found' }, 404);
      }

      if (resource === 'sitemap' && !slug) {
        const { results } = await env.DB.prepare(
          'SELECT slug, updated_at FROM posts WHERE published_at IS NOT NULL',
        ).all();
        return json(results);
      }

      return json({ error: 'Not found' }, 404);
    } catch (error) {
      console.error(error);
      return json({ error: 'Internal error' }, 500);
    }
  },
} satisfies ExportedHandler<Env>;

function intParam(url: URL, name: string, fallback: number, min: number, max: number) {
  const value = Number.parseInt(url.searchParams.get(name) ?? '', 10);
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': status === 200 ? 'public, max-age=60' : 'no-store' },
  });
}
