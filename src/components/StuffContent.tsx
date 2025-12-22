"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["MY THOUGHTS", "GOOD READS", "SONGS", "QUOTES"] as const;
type Category = (typeof categories)[number];

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

interface StuffContentProps {
  posts: Post[];
}

const StuffContent = ({ posts }: StuffContentProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>("MY THOUGHTS");

  return (
    <>
      <div className="flex items-center font-mono-regular text-[14px] mb-12">
        {categories.map((category, index) => (
          <span key={category} className="flex items-center">
            <button
              onClick={() => setActiveCategory(category)}
              className={`transition-colors ${
                activeCategory === category
                  ? "text-white"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              {category}
            </button>
            {index < categories.length - 1 && (
              <span className="text-white/50 px-4">•</span>
            )}
          </span>
        ))}
      </div>

      {activeCategory === "MY THOUGHTS" && (
        <>
          {posts.length === 0 ? (
            <p className="font-aeonik-regular text-[18px] text-white/60">
              no posts yet. check back soon.
            </p>
          ) : (
            <div className="flex flex-col space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/stuff/${post.slug}`}
                  className="group border-b border-white/20 pb-8 hover:border-white transition-colors"
                >
                  <p className="font-mono-regular text-[14px] text-white/40 mb-2">
                    {post.date}
                  </p>
                  <h2 className="font-aeonik-bold text-[24px] md:text-[28px] group-hover:text-white/70 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="font-aeonik-regular text-[16px] md:text-[18px] text-white/70">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </>
      )}

      {activeCategory === "GOOD READS" && (
        <p className="font-aeonik-regular text-[18px] text-white/60">
          coming soon.
        </p>
      )}

      {activeCategory === "SONGS" && (
        <p className="font-aeonik-regular text-[18px] text-white/60">
          coming soon.
        </p>
      )}

      {activeCategory === "QUOTES" && (
        <p className="font-aeonik-regular text-[18px] text-white/60">
          coming soon.
        </p>
      )}
    </>
  );
};

export default StuffContent;
