'use server';
console.log(process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, ''), 'first' )


export async function getBlogPostsForHome(): Promise<Post[]> {
  console.log(process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, '') )
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, '') + '/blog-posts?_limit=10&_sort=published_at:DESC');
  return await response.json();
}

export async function getPaginatedBlogPosts(page = 1, take = 20): Promise<Post[]> {
  console.log(process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, '') )
  const start = ((page || 1) - 1) * take;

  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, '') + `/blog-posts?_start=${start}&_limit=${take}&_sort=published_at:DESC`);
  return await response.json();
}

export async function getBlogPostBySlug(slug: string): Promise<Post> {
  console.log(process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, '') )
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, '') + `/blog-posts?slug=${slug}`);
  return (await response.json())?.[0];
}
