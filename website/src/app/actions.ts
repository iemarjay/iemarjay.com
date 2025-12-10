'use server';

import getPrisma from "@/prisma";
import {Post} from "@prisma/client";


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

export async function getBlogPostBySlug(slug: string): Promise<Post| null> {
  return getPrisma().post.findFirst({
    where: {
      slug,
      published_at: {not: null}
    }
  })
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
