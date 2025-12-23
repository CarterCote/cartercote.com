"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { blurInVariants } from "../lib/animations";

const categories = ["THOUGHTS", "READS", "SONGS", "BELIEFS"] as const;
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
  const [activeCategory, setActiveCategory] = useState<Category>("THOUGHTS");

  return (
    <>
      <motion.div
        className="flex items-center font-mono-regular text-[14px] mb-12"
        variants={blurInVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
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
      </motion.div>

      {activeCategory === "THOUGHTS" && (
        <>
          {posts.length === 0 ? (
            <motion.p
              className="font-aeonik-regular text-[18px] text-white/60"
              variants={blurInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
              no posts yet. check back soon.
            </motion.p>
          ) : (
            <div className="flex flex-col space-y-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  variants={blurInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.7 + index * 0.1,
                  }}
                >
                  <Link
                    href={`/stuff/${post.slug}`}
                    className="group border-b border-white/20 pb-8 hover:border-white transition-colors block"
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
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {activeCategory === "READS" && (
        <p className="font-aeonik-regular text-[18px] text-white/60">
          coming soon.
        </p>
      )}

      {activeCategory === "SONGS" && (
        <p className="font-aeonik-regular text-[18px] text-white/60">
          coming soon.
        </p>
      )}

      {activeCategory === "BELIEFS" && (
        <div>
          <p className="font-aeonik-regular text-[24px] text-white/60 mb-8">
            MY "PERSONAL BELIEFS"
          </p>
          <div className="flex gap-3 text-[18px]">
            <span className="font-mono-regular text-white/60">1.</span>
            <div>
              <span className="font-aeonik-bold text-white">YOU HAVE TO BE OKAY WITH BEING TEMPORARILY MISUNDERSTOOD.</span>
            </div>
          </div>
          <div className="flex gap-3 text-[18px] mt-12">
            <span className="font-mono-regular text-white/60">2.</span>
            <div>
              <span className="font-aeonik-bold text-white">TASTE IS A MUSCLE AND A WAY OF THINKING FOR GENERATING IDEAS.</span>
              <p className="font-aeonik-regular text-white/60 text-[16px] mt-1">it is trained through self-reflection, discovery of new insights, and remaining chronically involved in the dialog</p>
            </div>
          </div>
          <div className="flex gap-3 text-[18px] mt-12">
            <span className="font-mono-regular text-white/60">3.</span>
            <div>
              <span className="font-aeonik-bold text-white">LUCK FAVORS ACTION WITH INTENTION.</span>
              <p className="font-aeonik-regular text-white/60 text-[16px] mt-1">work hard to build something cool → make your work visible to the right ppl → unlock new opportunities</p>
            </div>
          </div>
          <div className="flex gap-3 text-[18px] mt-12">
            <span className="font-mono-regular text-white/60">4.</span>
            <div>
              <span className="font-aeonik-bold text-white">SYSTEMS & GOALS ARE MEANINGLESS WITHOUT FOCUS.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StuffContent;
