import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { getPostBySlug, getAllSlugs } from "../../../lib/blog";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: { slug: string };
}

const BlogPost = ({ params }: PageProps) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="flex w-full min-h-screen flex-col pt-32 pb-20 px-8 md:px-20">
        <div className="max-w-[800px] mx-auto w-full">
          <Link
            href="/blog"
            className="font-mono-regular text-[14px] text-white/40 hover:text-blue-500 transition-colors mb-8 inline-block"
          >
            &larr; back to blog
          </Link>

          <p className="font-mono-regular text-[14px] text-white/40 mb-4">
            {post.date}
          </p>

          <h1 className="font-voyager-thin text-[36px] md:text-[48px] mb-4">
            {post.title}
          </h1>

          <p className="font-aeonik-regular text-[18px] md:text-[21px] text-white/70 mb-12">
            {post.description}
          </p>

          <article className="prose prose-invert prose-lg max-w-none font-aeonik-regular">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="font-voyager-thin text-[32px] md:text-[40px] mt-12 mb-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-aeonik-bold text-[24px] md:text-[28px] mt-10 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-aeonik-bold text-[20px] md:text-[22px] mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="font-aeonik-regular text-[16px] md:text-[18px] leading-[1.8] mb-6 text-white/90">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-6 space-y-2 text-white/90">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-6 space-y-2 text-white/90">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="font-aeonik-regular text-[16px] md:text-[18px]">
                    {children}
                  </li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-white underline hover:text-white/70 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-white/30 pl-6 my-6 italic text-white/70">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-white/10 px-2 py-1 rounded text-[14px]">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-white/5 p-4 rounded-lg overflow-x-auto mb-6">
                    {children}
                  </pre>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
