import {MetadataRoute} from "next";
import {getAllBlogPostForSitemap} from "@/app/actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = 'https://iemarjay.com';
  const posts = (await getAllBlogPostForSitemap() ?? []).map((post) => ({
    url: `${BASE_URL}/post/${post.slug}`,
    priority: 0.8,
    changeFrequency: "weekly",
    lastModified: post.updated_at,
  }));

  return [
    {url: `${BASE_URL}/`, lastModified: new Date()},
    {url: `${BASE_URL}/about`},
    {url: `${BASE_URL}/post`, lastModified: new Date()},
    ...posts
  ];
}
