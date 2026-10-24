// Client for the blog API Worker (blog-api/ in this repo), which serves posts from Cloudflare D1.
const BLOG_API_URL = process.env.BLOG_API_URL ?? "https://iemarjay-blog-api.emarjay921.workers.dev";

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image_url: string | null;
  cover_video_url: string | null;
  author: string;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
};

// Post lists from the API leave out the content
export type PostSummary = Omit<Post, "content">;

type DateFields = "published_at" | "created_at" | "updated_at";

// A post as the API returns it (Date -> ISO string)
export type Serialized<T extends PostSummary> = Omit<T, DateFields> & {
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export function parseDates<T extends PostSummary>(post: Serialized<T>): T {
  return {
    ...post,
    published_at: post.published_at ? new Date(post.published_at) : null,
    created_at: new Date(post.created_at),
    updated_at: new Date(post.updated_at),
  } as unknown as T;
}

// Cached for 60 seconds to match the pages' revalidate. Returns null on 404.
export async function fetchBlogApi<T>(path: string): Promise<T | null> {
  const response = await fetch(`${BLOG_API_URL}${path}`, {next: {revalidate: 60}});
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Blog API ${path} responded with ${response.status}`);
  }

  return response.json();
}
