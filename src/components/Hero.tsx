"use client";

import React, { useEffect, FC, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Button from './Button';
import Marquee from "react-fast-marquee";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import posthog from 'posthog-js';

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, { api_host: 'https://us.i.posthog.com' });
}

const handleProjClick = (projectName: string, projectLink: string, eventType: string) => {
  if (typeof window !== "undefined") {
    posthog.capture(eventType, {
      name: projectName,
      url: projectLink
    });
  }
};

const handleProjButtomClick = () => {
  if (typeof window !== "undefined") {
    posthog.capture('viewProjectsClicked', {property: 'value'});
  }
};

const nowProjects = [
  { name: "Using AI to build the fastest way to sell online", link: "https://www.sellraze.com/" },
  { name: "Scaling builder culture at colleges across the US", link: "https://www.startup.exchange/" },
  { name: "Building high-volume ML pipelines for JPMorgan", link: "https://www.jpmorgan.com/" },
  { name: "Training for a half-marathon", link: "" }
];

const prevProjects = [
  { 
    name: "sellraze", 
    role: "founding engineer",
    desc: "sell online in seconds. $560k pre-seed, $500k mv, 5k users.", 
    link: "https://www.sellraze.com/",
  },
  { 
    name: "crayo", 
    role: "founding engineer",
    desc: "generate short-form content in seconds. 1.3m users, $6m arr.", 
    link: "https://www.crayo.ai/" 
  },
  { name: "jpmorgan", 
    role: "applied ai and swe",
    desc: "high-volume ml pipelines, anomaly detection for 40m daily alerts", 
    link: "https://www.jpmorgan.com/"
  },
  { name: "startup exchange", 
    role: "founder",
    desc: "largest community of college builders. 7k event attendees in 1.5 yrs.", 
    link: "https://www.jpmorgan.com/"
  },
  { name: "musicfy", 
    role: "ux and brand design",
    desc: "generate music samples in seconds. 3m users, $1.2m arr.",
    link: "https://create.musicfy.lol/" 
  },
  { 
    name: "creatordao", 
    role: "graphic design",
    desc: "enabling creators to become founders. raised $20m from a16z.", 
    link: "https://www.creatordao.com/" 
  }

];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const videoElement = videoRef.current;

    const handleCanPlay = () => {
      if (videoElement) {
        videoElement.play().catch((error) => {
          console.warn('Video autoplay was prevented:', error);
        });
      }
    };

    if (videoElement) {
      videoElement.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  const blur = 5;
  const videoSource = "home/static.mp4";
  
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-8 md:py-12 lg:py-16">
        <div className="z-[-1] w-full h-full bg-black flex items-center justify-center absolute top-0">
            {isMounted && (
              <video
                className="absolute top-0 left-0 w-full object-cover"
                style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
                autoPlay
                loop
                muted
                playsInline
                id="video-id"
                ref={videoRef}
              >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            )}
        </div>
        <div className="flex flex-col w-full max-w-[600px] mx-auto mt-14 md:mt-0 lg:pt-0 p-4 md:p-0 lg:p-0 justify-center text-6xl font-bold gap-y-32">
          <div className="flex flex-row w-full space-x-1 mt-24">
            <div className="self-start mt-3">
              <h1 className="tracking-tight font-voyager-thin text-[16px] md:text-[14px] lg:text-[14px] mr-1">►</h1>
            </div>
            <div className="flex flex-col w-full align-center justify-center space-y-6 md:space-y-6 items-start">
              <div className="flex flex-row w-full mb-3 items-center">
                <h1 className="tracking-tight font-voyager-thin text-[38px] md:text-[32px] lg:text-[32px]">hi, i'm carter.</h1>
              </div>
              <div className="w-full font-aeonik-regular space-y-6 leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px]">
                <p>i'm a 22 y/o software engineer + designer studying AI + HCI at Stanford University. i'm currently learning how human feedback enables AI + end-users to learn from one another.</p>
                <p>i craft elegant, interactive interfaces from 0 → 1. my goal is to reduce information gaps and barriers in education and career development.</p>
                <p>you can reach me via <Link className="italic border-b" href="https://twitter.com/cartercote_">twitter</Link> or email at <span className="border-b italic">chcote@stanford.edu</span>.</p>
              </div>
              {/* <div className="flex flex-col md:flex-row lg:flex-row items-left md:items-center lg:items-center w-full space-y-3 md:space-y-0 md:space-x-3">
                <p className="font-aeonik-thin tracking-widest text-[18px]">NOW</p>
                <Marquee gradient gradientColor="#000" gradientWidth={25} className="h-[28px] w-full" speed={85} autoFill loop={0}>
                  {nowProjects.map((project, index) => (
                    <div key={index} className='flex flex-row items-end'>
                      <span className="text-[16px]">⪼</span>
                      <Link key={index} href={project.link} onClick={() => handleProjClick(project.name, project.link, 'nowClicked')}>
                        <p className="font-aeonik-bold italic text-[18px] underline transition duration-200 ease-in-out hover:text-blue-600 mr-10">{project.name}</p>
                      </Link>
                    </div>
                  ))}
                </Marquee>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col w-full space-y-3 px-5">
            {/* <p className="font-aeonik-regular text-[21px] md:text-[18px] lg:text-[18px]">previously, I've design + build products:</p> */}
            <div className="flex flex-col space-y-20">
              {prevProjects.map((project, index) => (
                <div key={index} className='flex flex-col space-y-6'>
                  <div key={index} className='flex flex-col space-y-2'>
                    <Link 
                      key={index} 
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
                    <p className="opacity-70 font-aeonik-thin text-[18px]">{project.role}</p>
                  </div>
                  <p className="opacity-90 font-aeonik-regular text-[18px]">{project.desc}</p>
                </div>
                // <div key={index} className='flex flex-row items-end space-x-1 md:space-x-2 lg:space-x-2'>
                //   <Link 
                //     key={index} 
                //     href={project.link || '#'} 
                //     onClick={() => project.link && handleProjClick(project.name, project.link, 'prevProjectsClicked')}
                //     target="_blank"
                //     rel="noopener noreferrer"
                //   >
                //     <p className="font-aeonik-bold text-[16px] md:text-[18px] lg:text-[18px] hover:text-blue-600 transition duration-200 ease-in-out">{project.name}</p>
                //   </Link>
                //   <span className="text-[16px]">⪼</span>
                //   <p className="font-aeonik-thin text-[14px] md:text-[18px] lg:text-[18px]">{project.desc}</p>
                // </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4 px-5">
            <h1 className="tracking-tight font-voyager-thin text-[21px]">see more</h1>
            <div className="flex flex-col pb-20 md:pb-0 pt-6 md:pt-0 lg:pt-0 sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
              <HoverBorderGradient
                containerClassName="rounded-xl w-full text-center md:text-left sm:w-auto"
                link="/projects"
                as="button"
                className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2"
                onClick={() => handleProjButtomClick()}
              >
                <p className="font-graebenbach-mono-regular">VIEW PROJECTS</p>
              </HoverBorderGradient>
              {/* <Button text="VIEW PROJECTS" link="/projects" className="w-full text-center md:text-left sm:w-auto"></Button> */}
              <Button 
                text="ABOUT ME"
                link="/about"
                className="w-full text-center md:text-left sm:w-auto"
                event={`'aboutClicked', {property: 'value'}`}
              ></Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Hero;
