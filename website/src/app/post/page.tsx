import {Navigation} from "@/app/navigation";
import {getPaginatedBlogPosts} from "@/app/actions";
import Link from "next/link";
import {formatDate} from "@/helpers";
import {PostsLoadMore} from "@/app/post/PostsLoadMore";

export const metadata = {
  title: "Blog | Emmanuel Joseph",
  description: "Thoughts on building production systems, web3 development, security, and lessons learned from 8 years in the field.",
};

export const revalidate = 60;

export default async function PostsPage() {
  const posts = await getPaginatedBlogPosts();

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 md:px-24 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="font-gilroy text-4xl sm:text-5xl font-bold text-[#180622] mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Thoughts on building production systems, security lessons learned the hard way, and the craft of shipping software that works.
          </p>
        </div>

        {/* Posts */}
        {posts.length > 0 ? (
          <div className="space-y-10">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group"
              >
                <Link href={`/post/${post.slug}`} className="block">
                  <div className="mb-2">
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(post.published_at)}
                    </p>
                    <h2 className="font-gilroy text-2xl font-bold text-[#180622] mb-2 group-hover:text-[#9106dd] transition-colors">
                      {post.title}
                    </h2>
                  </div>
                  <p className="text-[#1b002a] leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-[#9106dd] font-medium group-hover:underline">
                    Read article →
                  </span>
                </Link>
              </article>
            ))}
            <PostsLoadMore page={1} take={20} />
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              No posts yet. Check back soon.
            </p>
            <Link
              href="/"
              className="text-[#9106dd] font-medium hover:underline"
            >
              ← Back to home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
