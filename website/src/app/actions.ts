'use server';

import getPrisma from "@/prisma";
import {Post} from "@prisma/client";

// Serializable Post type for client components (Date -> string)
export type SerializedPost = Omit<Post, 'published_at' | 'created_at' | 'updated_at'> & {
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

function serializePost(post: Post): SerializedPost {
  return {
    ...post,
    published_at: post.published_at?.toISOString() ?? null,
    created_at: post.created_at.toISOString(),
    updated_at: post.updated_at.toISOString(),
  };
}

export async function getBlogPostsForHome(): Promise<Post[]> {
  return getPrisma().post.findMany({
    where: {
      published_at: {not: null}
    },
    orderBy: {
      published_at: 'desc'
    },
    take: 10
  })
}

export async function getPaginatedBlogPosts(page = 1, take = 20): Promise<Post[]> {
  const start = ((page || 1) - 1) * take;

  return getPrisma().post.findMany({
    where: {
      published_at: {not: null}
    },
    orderBy: {
      published_at: 'desc'
    },
    take,
    skip: start
  })
}

// For client components - returns serialized posts with string dates
export async function getPaginatedBlogPostsSerialized(page = 1, take = 20): Promise<SerializedPost[]> {
  const posts = await getPaginatedBlogPosts(page, take);
  return posts.map(serializePost);
}

export async function getBlogPostBySlug(slug: string): Promise<Post| null> {
  return getPrisma().post.findFirst({
    where: {
      slug,
      published_at: {not: null}
    }
  })
}

// For generateMetadata - returns plain serializable object
export async function getBlogPostMetadata(slug: string): Promise<SerializedPost | null> {
  const post = await getBlogPostBySlug(slug);
  return post ? serializePost(post) : null;
}

export async function getAllBlogPostForSitemap(): Promise<{slug: string, updated_at: Date}[]> {
  return getPrisma().post.findMany({
    select: {
      slug: true,
      updated_at: true
    },
    where: {
      published_at: {not: null}
    }
  });
}
