'use client';

import {useState} from "react";
import {getPaginatedBlogPosts} from "@/app/actions";
import Link from "next/link";
import {formatDate} from "@/helpers";

export function PostsLoadMore({page, take}: { page: number, take?: number}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  function loadMore() {
    setLoading(true)
    return getPaginatedBlogPosts(page + 1, take).then(newPosts => {
      setPosts([...posts, ...newPosts])
    }).finally(() => setLoading(false))
  }

  return <>
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

    <div className="">
      <button disabled={loading} className="bg-[#4b1d64] text-white font-gilroy text-sm px-4 py-2 rounded-md disabled:bg-opacity-50"
              onClick={loadMore}>
        {!loading ? 'Load More' : 'Loading...'}
      </button>
    </div>
  </>
}
