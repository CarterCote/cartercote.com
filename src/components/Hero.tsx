"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import VideoBackground from './sections/VideoBackground';
import IntroSection from './sections/IntroSection';

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, { api_host: 'https://us.i.posthog.com' });
}

const projects = [
  {
    name: "SellRaze",
    description: "Co-Founder. Led design engineering & growth.",
    image: "/work/sellraze.png",
    link: "http://sellraze.com",
  },
  {
    name: "Crayo AI",
    description: "Founding designer. 0 -> 2m users.",
    image: "/work/crayo1.png",
    link: "http://crayo.ai",
  },
];

const IntroSectionContent = () => {
  const firstFourProjects = projects.slice(0, 4);

  return (
    <div className="grid grid-cols-2 gap-4 mt-12">
      {firstFourProjects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-3 font-aeonik-bold text-[16px] group-hover:text-blue-500 transition-colors">
            {project.name}
          </h3>
          <p className="font-aeonik-regular text-[14px] opacity-70">
            {project.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

const SecondarySection = () => {
  return (
    <div className="flex flex-row w-full space-x-1 mt-32">
      <div className="self-start mt-3">
        <h1 className="tracking-tight font-voyager-thin text-[16px] md:text-[14px] lg:text-[14px] mr-1">►</h1>
      </div>
      <div className="flex flex-col w-full align-center justify-center items-start">
        <h1 className="tracking-tight font-voyager-thin text-[38px] md:text-[32px] lg:text-[32px]">
          I push the craft of interaction and motion with design engineering.
        </h1>
      </div>
    </div>
  );
};

const SecondarySectionContent = () => {
  const remainingProjects = projects.slice(4);

  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {remainingProjects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-3 font-aeonik-bold text-[16px] group-hover:text-blue-500 transition-colors">
            {project.name}
          </h3>
          <p className="font-aeonik-regular text-[14px] opacity-70">
            {project.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

const BeliefsSection = () => {
  return (
    <div className="mt-32">
      <p className="font-aeonik-regular text-[21px] md:text-[18px] leading-[1.5]">
        if you want to learn more about me, read my thoughts <Link href="/stuff" className="border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500">here</Link>.
      </p>
    </div>
  );
};

const LinksSection = () => {
  return (
    <div className="mt-16">
      <h2 className="font-aeonik-bold text-[16px] mb-4">links</h2>
      <div className="flex flex-row space-x-6 items-center">
        <Link
          href="https://twitter.com/cartercote_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 text-2xl hover:text-blue-500 transition-colors"
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://github.com/cartercote"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 text-2xl hover:text-blue-500 transition-colors"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/carter-cote"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 text-2xl hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://instagram.com/carter.cote"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 text-2xl hover:text-blue-500 transition-colors"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-8 md:py-12 lg:py-16">
        <VideoBackground />
        <div className="flex flex-col w-full max-w-[800px] mx-auto mt-14 md:mt-0 lg:pt-0 px-6 md:px-12 lg:px-16 justify-center text-6xl font-bold">
          <IntroSection />
          {/* <IntroSectionContent />
          <SecondarySection />
          <SecondarySectionContent /> */}
          <BeliefsSection />
          <LinksSection />
        </div>
      </main>
    </>
  );
};

export default Hero;
