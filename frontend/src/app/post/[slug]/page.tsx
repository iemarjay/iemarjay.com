import {getBlogPostBySlug} from "@/app/actions";
import {formatDate} from "@/helpers";
import {marked} from "marked";
import {Navigation} from "@/app/navigation";
import Script from "next/script";
import JsonLd from "@/app/components/JsonLd";
import Link from "next/link";

export default async function PostPage({params: {slug}}: {params: {slug: string}}) {
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  }

  const content = marked(post.content)

  return <>
    <div>
      <Navigation/>

      <div className="max-w-4xl mx-auto px-6 md:px-24 pt-10 md:pt-12">
        <header className="mb-6 mt-10">
          <h2 className="font-gilroy text-3xl font-bold text-[#180622] mb-2">{post.title}</h2>
          <p className="text-base text-gray-700">{formatDate(post.published_at)}</p>
        </header>

        <div className="markdown" dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    </div>

    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.cover_image_url,
      datePublished: post.published_at,
      dateModified: post.updated_at,
      author: {
        '@type': 'Person',
        name: post.author,
      },
    }} />
  </>
}

export async function generateMetadata({params: {slug}}: {params: {slug: string}}) {
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: 'Page not found',
      description: 'Could not find requested resource'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://iemarjay.com/post/${post.slug}`,
      article: {
        publishedTime: post.published_at,
        authors: ['Emmanuel Joseph (iemarjay)'],
        updatedTime: post.updated_at,
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.cover_image_url ?? '/media/hire-emmanuel-joseph-iemarjay.png'],
    },
  }
}
