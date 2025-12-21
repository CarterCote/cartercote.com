import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAllPosts } from "../../lib/blog";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <div className="flex w-full min-h-screen flex-col pt-32 pb-20 px-8 md:px-20">
        <div className="max-w-[800px] mx-auto w-full">
          <h1 className="font-voyager-thin text-[44px] md:text-[54px] mb-12">thoughts</h1>

          {posts.length === 0 ? (
            <p className="font-aeonik-regular text-[18px] text-white/60">
              no posts yet. check back soon.
            </p>
          ) : (
            <div className="flex flex-col space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border-b border-white/20 pb-8 hover:border-blue-500 transition-colors"
                >
                  <p className="font-mono-regular text-[14px] text-white/40 mb-2">
                    {post.date}
                  </p>
                  <h2 className="font-aeonik-bold text-[24px] md:text-[28px] group-hover:text-blue-500 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="font-aeonik-regular text-[16px] md:text-[18px] text-white/70">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
