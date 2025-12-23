"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blurInVariants } from '../../lib/animations';

const IntroSection = () => {
  const paragraphs = [
    <>i'm a 23 y/o software engineer + designer, and stanford + georgia tech alum.</>,
    <>i'm also the cpo of <Link className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://join.phia.com/">phia</Link>, where I lead design + product. in 8 months, we went from 0 → 900K users + raised $30m.</>,
    <>previously, I built <Link className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://www.crayo.ai/">crayo</Link> (2m users in 10 months), and <Link className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://www.sellraze.com/">sellraze</Link> (300k users).</>,
    <>i also run <Link className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://www.startup.exchange/">startup exchange</Link>, a nonprofit enabling college students to build the self-awareness, goals, + mindset needed to pursue the nontraditional path.</>,
  ];

  return (
    <>
      {/* Mobile Layout */}
      <div className="flex flex-col w-full mt-24 md:hidden">
        <motion.div
          className="flex flex-row items-center justify-start pb-[48px] space-x-2"
          variants={blurInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <h1 className="tracking-tight font-voyager-thin text-[16px] animate-[blink_0.8s_step-end_infinite]">►</h1>
          <h1 className="tracking-tight font-voyager-thin text-[48px]">hi, i'm carter cote.</h1>
        </motion.div>
        <div className="flex flex-col w-full align-center justify-center space-y-6 items-start px-5">
          <div className="w-full font-aeonik-regular space-y-8 leading-[1.5] text-[21px]">
            {paragraphs.map((content, index) => (
              <motion.p
                key={index}
                variants={blurInVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 1.0 + index * 0.2,
                }}
              >
                {content}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col w-full justify-end min-h-[70vh]">
        <motion.div
          className="flex flex-row items-center justify-start mb-12 space-x-3"
          variants={blurInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <h1 className="tracking-tight font-voyager-thin text-[24px] lg:text-[28px] animate-[blink_0.8s_step-end_infinite]">►</h1>
          <h1 className="tracking-tight font-voyager-thin text-[72px] lg:text-[96px]">hi, i'm carter cote.</h1>
        </motion.div>

        <div className="flex flex-row w-full justify-between gap-16 pl-[32px] lg:pl-[38px]">
          {/* Left column */}
          <motion.div
            className="flex flex-col max-w-[50%] font-aeonik-regular leading-[1.5] text-[18px] space-y-6"
            variants={blurInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <p>i'm a 23 y/o software engineer + designer, and stanford + georgia tech alum.<br />
              i'm also the cpo of <Link className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://join.phia.com/">phia</Link>, where I lead design + product. in 8 months, we went from 0 → 900K users + raised $30m.</p>
            <p>previously, I built <Link className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://www.crayo.ai/">crayo</Link> (2m users in 10 months), and <Link className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://www.sellraze.com/">sellraze</Link> (300k users).</p>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="flex flex-col max-w-[40%] font-aeonik-regular leading-[1.5] text-[18px] space-y-6 text-left"
            variants={blurInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <p>i also run <Link className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://www.startup.exchange/">startup exchange</Link>, a nonprofit enabling college students to build the self-awareness, goals, + mindset needed to pursue the nontraditional path.</p>
            <p>if you want to learn more about me, read my thoughts <Link href="/stuff" className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500">here</Link>.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
