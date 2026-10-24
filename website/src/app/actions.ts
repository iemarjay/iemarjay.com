'use server';

import {fetchBlogApi, parseDates, Post, PostSummary, Serialized} from "@/blog-api";

// Serializable Post types for client components (Date -> string)
export type SerializedPost = Serialized<Post>;
export type SerializedPostSummary = Serialized<PostSummary>;

export async function getBlogPostsForHome(): Promise<PostSummary[]> {
  return getPaginatedBlogPosts(1, 10);
}

export async function getPaginatedBlogPosts(page = 1, take = 20): Promise<PostSummary[]> {
  const posts = await getPaginatedBlogPostsSerialized(page, take);
  return posts.map((post) => parseDates<PostSummary>(post));
}

// For client components - returns serialized posts with string dates
export async function getPaginatedBlogPostsSerialized(page = 1, take = 20): Promise<SerializedPostSummary[]> {
  const start = ((page || 1) - 1) * take;

  return await fetchBlogApi<SerializedPostSummary[]>(`/posts?limit=${take}&offset=${start}`) ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<Post | null> {
  const post = await getBlogPostMetadata(slug);
  return post ? parseDates<Post>(post) : null;
}

// For generateMetadata - returns plain serializable object
export async function getBlogPostMetadata(slug: string): Promise<SerializedPost | null> {
  return fetchBlogApi<SerializedPost>(`/posts/${encodeURIComponent(slug)}`);
}

export async function getAllBlogPostForSitemap(): Promise<{slug: string, updated_at: Date}[]> {
  const posts = await fetchBlogApi<{slug: string, updated_at: string}[]>("/sitemap") ?? [];
  return posts.map((post) => ({slug: post.slug, updated_at: new Date(post.updated_at)}));
}
