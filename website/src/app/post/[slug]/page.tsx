import {getBlogPostBySlug, getBlogPostMetadata} from "@/app/actions";
import {formatDate} from "@/helpers";
import {marked} from "marked";
import {Navigation} from "@/app/navigation";
import JsonLd from "@/app/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{slug: string}>;
};
export default async function PostPage({params}: PageProps) {
  const post = await getBlogPostBySlug((await params).slug);
  if (!post) {
    notFound()
  }

  const content = marked(post.content);

  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.cover_image_url,
        datePublished: post.published_at?.toISOString(),
        dateModified: post.updated_at.toISOString(),
        author: {
          '@type': 'Person',
          name: post.author,
        },
      }} />

      <div className="min-h-screen">
        <Navigation />

        <article className="max-w-4xl mx-auto px-6 md:px-24 pt-24 pb-16 md:pt-32 md:pb-20">
          {/* Back link */}
          <Link
            href="/post"
            className="text-[#9106dd] text-sm hover:underline mb-8 inline-block"
          >
            ← Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <h1 className="font-gilroy text-3xl sm:text-4xl font-bold text-[#180622] mb-4">
              {post.title}
            </h1>

            {/* Author & Date */}
            <div className="flex items-center gap-3">
              <Image
                src="/media/emar.png"
                alt={post.author || "Emmanuel Joseph"}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-[#180622] font-medium text-sm">
                  {post.author || "Emmanuel Joseph"}
                </p>
                <p className="text-gray-500 text-sm">
                  {formatDate(post.published_at)}
                </p>
              </div>
            </div>
          </header>

          {/* Cover image */}
          {post.cover_image_url && (
            <div className="mb-10 rounded-lg overflow-hidden">
              <Image
                src={post.cover_image_url}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="markdown prose prose-lg max-w-none prose-headings:font-gilroy prose-headings:text-[#180622] prose-a:text-[#9106dd] prose-a:no-underline hover:prose-a:underline prose-pre:bg-[#1e1e2e] prose-pre:text-[#cdd6f4] prose-code:text-[#9106dd] prose-code:bg-gray-100 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none prose-table:border prose-table:border-gray-200 prose-th:bg-gray-50 prose-td:border prose-td:border-gray-200 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{__html: content}}
          />

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link
                href="/post"
                className="text-[#9106dd] font-medium hover:underline"
              >
                ← More articles
              </Link>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.iemarjay.com/post/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#1DA1F2] transition-colors"
                >
                  Share on Twitter
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}

export async function generateMetadata({params}: PageProps) {
  const post = await getBlogPostMetadata((await params).slug);
  if (!post) {
    return {
      title: 'Post not found | Emmanuel Joseph',
      description: 'Could not find requested resource'
    }
  }

  const imageUrl = post.cover_image_url ?? '/media/meet-emmanuel-joseph-iemarjay.png';

  return {
    title: `${post.title} | Emmanuel Joseph`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://iemarjay.com/post/${post.slug}`,
      siteName: 'Emmanuel Joseph (iemarjay)',
      article: {
        publishedTime: post.published_at ?? undefined,
        authors: ['Emmanuel Joseph (iemarjay)'],
        modifiedTime: post.updated_at,
      },
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
}
