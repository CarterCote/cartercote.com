"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import posthog from 'posthog-js';

const prevProjects = [
  {
    name: "phia",
    role: "chief product officer",
    desc: "currently building the future of shopping your closet. 0 -> 300,000 users in <2 months",
    link: "https://join.phia.com/",
  },
  {
    name: "sellraze",
    role: "founding engineer",
    desc: "sell online in seconds. 0 -> 200,000 users",
    link: "https://www.sellraze.com/",
  },
  {
    name: "crayo",
    role: "founding engineer",
    desc: "generate short-form content in seconds. 0 -> 2 million users.",
    link: "https://www.crayo.ai/"
  },
  {
    name: "startup exchange",
    role: "founder",
    desc: "redefining community for college builders. 10k event attendees in 1.5 yrs.",
    link: "https://www.startup.exchange/"
  },
  {
    name: "musicfy",
    role: "ux and brand design",
    desc: "generate music samples in seconds. 5 million users, $1.5m arr.",
    link: "https://create.musicfy.lol/"
  },
  {
    name: "pathways.me",
    role: "founder",
    desc: "an attempt to democratize access to career exploration. invited to speak at ACTE CareerTech National Conference.",
    link: "https://www.pathways.me/"
  },
  {
    name: "six feet supplies",
    role: "founder",
    desc: "0 -> 20k vulnerable individuals that received delivery of $50k+ in urgent supplies across CA during COVID. featured on CNN, LA Times.",
    link: "https://www.latimes.com/california/story/2020-05-09/teen-volunteers-develop-ways-to-help-most-vulnerable-unable-to-help-themselves-during-virus-outbreak"
  }
];

const handleProjClick = (projectName: string, projectLink: string, eventType: string) => {
  if (typeof window !== "undefined") {
    posthog.capture(eventType, {
      name: projectName,
      url: projectLink
    });
  }
};

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full space-y-3 px-5">
      <h1 className="tracking-tight font-voyager-thin text-[21px] pb-8">projects i've built</h1>
      <div className="flex flex-col space-y-20">
        {prevProjects.map((project, index) => (
          <div key={index} className='flex flex-col space-y-6'>
            <div className='flex flex-col space-y-2'>
              <Link
                href={project.link || '#'}
                onClick={() => project.link && handleProjClick(project.name, project.link, 'prevProjectsClicked')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row space-x-1 group"
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <p className="font-aeonik-bold text-[18px] group-hover:text-blue-600 transition duration-200 ease-in-out">
                  {project.name}
                </p>
                <div className="relative w-2 h-2 mt-1">
                  <Image
                    priority
                    src="/home/iconArrowUprightWhite.png"
                    height={100}
                    width={100}
                    alt="White arrow icon"
                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                      hoveredProject === project.name ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <Image
                    priority
                    src="/home/iconArrowUprightBlue.png"
                    height={100}
                    width={100}
                    alt="Blue arrow icon"
                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                      hoveredProject === project.name ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </Link>
            </div>
            <p className="opacity-90 font-aeonik-regular text-[18px] leading-[140%]">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
