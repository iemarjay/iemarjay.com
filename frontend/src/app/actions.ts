'use server';

function prependBaseUrl(path: string) {
  return process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, '').trim() + path;
}

export async function getBlogPostsForHome(): Promise<Post[]> {
  const response = await fetch(prependBaseUrl('/blog-posts?_limit=10&_sort=published_at:DESC'));
  return await response.json();
}

export async function getPaginatedBlogPosts(page = 1, take = 20): Promise<Post[]> {
  const start = ((page || 1) - 1) * take;

  const response = await fetch(prependBaseUrl(`/blog-posts?_start=${start}&_limit=${take}&_sort=published_at:DESC`));
  return await response.json();
}

export async function getBlogPostBySlug(slug: string): Promise<Post> {
  const response = await fetch(prependBaseUrl(`/blog-posts?slug=${slug}`));
  return (await response.json())?.[0];
}
