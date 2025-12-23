"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from '../../components/Button';
import { IoMdClose } from "react-icons/io";
import { blurInVariants } from "../../lib/animations";

const projects = [
  {
    name: "Phia",
    role: "Chief Product Officer",
    year: "2025 - NOW",
    description: "Building the future of shopping your closet. Led design and product. 0 → 900K users in 8 months, raised $30M.",
    image: "/work/phia.png",
    link: "https://join.phia.com/",
    linkText: "VIEW PROJECT",
  },
  {
    name: "SellRaze",
    role: "Founding Engineer",
    year: "2024",
    description: "Using AI to build the fastest way to sell online. Led all design. Built React Native mobile app alongside founding team. Led SEO, growth, and GTM strategy, leading to over 10,000 impressions and 1,500 users in two months.",
    image: "/work/sellraze.png",
    link: "http://sellraze.com",
    linkText: "VIEW LANDING PAGE",
  },
  {
    name: "Crayo AI",
    role: "Founding Designer",
    year: "2024",
    description: "Enabling content creators with AI tools to go viral at 10x the speed, with stylized, captioned, and animated short-form content. 280,000+ users.",
    image: "/work/crayo1.png",
    link: "http://crayo.ai",
    linkText: "VIEW PROJECT",
  },
  {
    name: "Musicfy",
    role: "Founding Designer",
    year: "2023",
    description: "Emerging AI tools for 1M+ users to rapidly create new music, saving precious time for true creativity. Designed the UI and branding for v2 of the platform.",
    image: "/work/musicfy.png",
    link: "https://create.musicfy.lol/",
    linkText: "VIEW PROJECT",
  },
  {
    name: "FitSnap",
    role: "Founder",
    year: "2025",
    description: "An app concept I almost launched based on viral trends around color analysis and body shape.",
    image: "/work/fitsnap.png",
    link: "",
    linkText: "",
  },
  {
    name: "Startup Exchange",
    role: "Founder",
    year: "2022",
    description: "A nonprofit enabling college students to build the self-awareness, goals, and mindset needed to pursue the nontraditional path. Over 30K students at 40+ universities.",
    image: "/work/startupexchange.jpg",
    link: "https://www.startup.exchange/",
    linkText: "VIEW PROJECT",
  },
  // {
  //   name: "Bedrock Systems",
  //   role: "Winning Design Concept",
  //   year: "2023",
  //   description: "Refreshing the brand identity + redesigning the UX/UI and information architecture for Bedrock Systems, a Kleiner Perkins portfolio company focused on securing critical infrastructure. Awarded Kleiner Perkins Design Fellow Finalist.",
  //   image: "/work/bedrock.png",
  //   link: "https://www.loom.com/share/aae2b4ebbf9547c8b46bc2f7dcc4c785",
  //   linkText: "VIEW CASE STUDY",
  // },
  // {
  //   name: "Pathways.me",
  //   role: "Founder",
  //   year: "2022",
  //   description: "Using story-driven design to democratize access to career pathway possibilities for high schoolers everywhere. Solo founder. 10,000 users. Recognized at ACTE CareerTech National Conference.",
  //   image: "/work/pathway.png",
  //   link: "https://www.pathways.me/",
  //   linkText: "VIEW PROJECT",
  // },
  // {
  //   name: "Six Feet Supplies",
  //   role: "Founding Designer",
  //   year: "2020",
  //   description: "Zero-cost emergency supply delivery web app to assist the immunocompromised during peak of COVID-19. 20,000 users, 14 cities. Solo designer + dev. Featured on CNN, LA Times.",
  //   image: "/work/sixfeet.png",
  //   link: "https://www.latimes.com/california/story/2020-05-09/teen-volunteers-develop-ways-to-help-most-vulnerable-unable-to-help-themselves-during-virus-outbreak",
  //   linkText: "VIEW PROJECT",
  // },
];

const playItems = [
  {
    name: "Everything I'm Not",
    year: "2020",
    image: "/design/001.jpg",
  },
  {
    name: "Mixed Signals",
    year: "2020",
    image: "/design/002.jpg",
  },
  {
    name: "Graduation",
    year: "2021",
    image: "/design/graduation.jpg",
  },
  {
    name: "Atlanta Typography",
    year: "2020",
    image: "/design/003.jpg",
  },
  {
    name: "SX Georgia Tech Graphic T-Shirt",
    year: "2022",
    image: "/design/sxShirtMockup.png",
  },
];

interface Project {
  name: string;
  role: string;
  year: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
}

interface PlayItem {
  name: string;
  year: string;
  image: string;
}

const ProjectModal = ({
  project,
  onClose
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
        >
          <IoMdClose size={28} />
        </button>

        <div className="relative w-full aspect-video">
          <Image
            src={project.image}
            fill
            alt={project.name}
            className="object-cover rounded-t-2xl"
          />
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="font-voyager-thin text-[32px] md:text-[40px]">{project.name}</h2>
            <p className="font-aeonik-regular text-white/60 text-[16px]">{project.year}</p>
          </div>

          <p className="font-aeonik-regular text-white/70 text-[14px] mb-4">{project.role}</p>

          <p className="font-aeonik-regular text-[16px] leading-[150%] mb-8">
            {project.description}
          </p>

          {project.link && project.linkText && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white rounded-lg px-6 py-3 text-sm font-graebenbach-mono-regular hover:bg-blue-600 hover:border-blue-600 transition duration-300"
            >
              {project.linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const PlayModal = ({
  item,
  onClose
}: {
  item: PlayItem;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
        >
          <IoMdClose size={28} />
        </button>

        <div className="relative w-full aspect-[4/5]">
          <Image
            src={item.image}
            fill
            alt={item.name}
            className="object-cover rounded-t-2xl"
          />
        </div>

        <div className="p-8">
          <div className="flex flex-row items-center justify-between">
            <h2 className="font-voyager-thin text-[28px] md:text-[32px]">{item.name}</h2>
            <p className="font-aeonik-regular text-white/60 text-[16px]">{item.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPlayItem, setSelectedPlayItem] = useState<PlayItem | null>(null);

  return (
    <>
      <Navbar />
      <div className="flex w-full min-h-screen flex-col pt-24 pb-20 items-center justify-center gap-[4px]">
        {/* Projects Grid */}
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-3 gap-[4px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={blurInVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3 + index * 0.1,
              }}
              className="relative aspect-[4/2.88] cursor-pointer group overflow-hidden rounded-[4px]"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                fill
                alt={project.name}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="font-aeonik-bold text-white text-[16px] p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Play Section */}
        <motion.div
          className="w-[95%] mt-16"
          variants={blurInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        >
          <p className="font-aeonik-bold tracking-tight text-left leading-[100%] text-[16px] mb-2">PLAY</p>
          <p className="font-voyager-thin tracking-tight text-left leading-[110%] text-[28px] md:text-[38px] mb-6">A collection of impulsive makes, complex emotions, and creative expression.</p>
        </motion.div>
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-5 gap-[4px]">
          {playItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={blurInVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.2 + index * 0.1,
              }}
              className="relative aspect-[4/5] cursor-pointer group overflow-hidden rounded-[4px]"
              onClick={() => setSelectedPlayItem(item)}
            >
              <Image
                src={item.image}
                fill
                alt={item.name}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="font-aeonik-bold text-white text-[14px] p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {selectedPlayItem && (
        <PlayModal
          item={selectedPlayItem}
          onClose={() => setSelectedPlayItem(null)}
        />
      )}

      <Footer />
    </>
  );
};

export default Work;
