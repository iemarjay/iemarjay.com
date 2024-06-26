import {getBlogPostBySlug} from "@/app/actions";
import {formatDate} from "@/helpers";
import {marked} from "marked";
import {Navigation} from "@/app/navigation";

export default async function PostPage({params: {slug}}: {params: {slug: string}}) {
  const post = await getBlogPostBySlug(slug);
  const content = marked(post.content)

  return <div>
    <Navigation/>

    <div className="max-w-4xl mx-auto px-6 md:px-24 pt-10 md:pt-12">
      <header className="mb-6 mt-10">
        <h2 className="font-gilroy text-3xl font-bold text-[#180622] mb-2">{post.title}</h2>
        <p className="text-base text-gray-700">{formatDate(post.published_at)}</p>
      </header>

      <div className="markdown" dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  </div>
}
