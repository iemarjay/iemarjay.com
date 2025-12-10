import {Navigation} from "@/app/navigation";
import {getPaginatedBlogPosts} from "@/app/actions";
import Link from "next/link";
import {formatDate} from "@/helpers";
import {PostsLoadMore} from "@/app/post/PostsLoadMore";

export default async function PostsPage() {
  const posts = await getPaginatedBlogPosts();

  return <div>
    <Navigation/>

    <div className="max-w-4xl mx-auto px-6 md:px-24 pt-10 md:pt-12">
        <div className="mt-10">
          {posts.map(post => (
            <div className="md:max-w-xl mb-8" key={post.id}>
              <div className="mb-2 lg:mb-4">
                <h2 className="font-gilroy text-2xl font-bold text-[#180622] mb-1">
                  <Link href={`/post/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-gray-700">{formatDate(post.published_at)}</p>
              </div>
              <p className="text-[#1b002a] leading-normal mb-4 lg:mb-6">{post.excerpt}</p>
              <span className="text-[#4b1d64] underline decoration-2 underline-offset-2">
                <Link href={`/post/${post.slug}`}>Read More</Link>
            </span>
            </div>
          ))}
          <PostsLoadMore page={1} take={20} />
        </div>
      </div>

  </div>
}
