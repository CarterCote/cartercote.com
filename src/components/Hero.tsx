import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import Button from './Button';
import Marquee from "react-fast-marquee";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const nowProjects = [
  { name: "Using AI to build the fastest way to sell online", link: "https://www.sellraze.com/" },
  { name: "Scaling builder culture at colleges across the US", link: "https://www.startup.exchange/" },
  { name: "Building high-volume ML pipelines for JPMorgan", link: "https://www.jpmorgan.com/" },
  { name: "Training for a half-marathon", link: "#" }
];

const prevProjects = [
  { name: "Founding Engineer, SellRaze", link: "https://www.jpmorgan.com/" },
  { name: "AI/ML, JPMorgan", link: "https://www.jpmorgan.com/" },
  { name: "Design, CreatorDAO", link: "https://www.creatordao.com/" },
  { name: "Growth, Overtime", link: "https://www.overtime.tv/" },
  { name: "Founding Designer, Crayo AI", link: "https://www.crayo.ai/" }
];

const Hero = () => {
  const blur = 5;
  const videoSource = "home/static.mp4";
  return (
    <>
      <main className="flex h-screen w-full flex-col pt-32 items-center">
        <div className="z-[-1] w-full bg-black flex items-center justify-center absolute top-0">
          <video
            className='absolute top-0 left-0 w-full object-cover'
            style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
            autoPlay={true}
            loop={true}
            muted
            controls={false}
            id="video-id"
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col w-full items-center px-8 sm:px-8 md:px-16 lg:px-28 justify-center text-6xl font-bold gap-y-4 ">
          <div className="flex flex-row w-full space-x-1">
            <div className="mt-6 md:mt-14 lg:mt-16">
              <h1 className="tracking-tight font-voyager-thin text-[16px] sm:text-[12px] md:text-[18px] lg:text-[24px] mr-4">►</h1>
            </div>
            <div
              className="flex flex-col w-full align-center justify-center space-y-10 pr-14 items-start">
              <div className="flex flex-row w-full mb-3 items-center">
                <h1 className="tracking-tight font-voyager-thin text-[62px] sm:text-[62px] md:text-[124px] lg:text-[148px]">HI, I'M CARTER.</h1>
              </div>
              <div className="w-full font-aeonik-regular space-y-8 leading-[1.25] text-[28px] sm:text-[28px] md:text-[28px] lg:text-[32px]">
                <p>I'm a 22 y/o software engineer + designer based in Palo Alto, currently studying AI + HCI at Stanford University. </p>
                <p>I craft elegant, interactive interfaces from 0 → 1. My goal is to reduce information gaps and barriers in education and career development.</p>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row items-left md:items-center lg:items-center w-full space-y-3 md:space-y-0 md:space-x-3">
                <p className="font-aeonik-thin tracking-widest text-[18px]">NOW</p>
                <Marquee gradient gradientColor="#000" gradientWidth={25} className="h-[28px] w-full" speed={85} autoFill loop={0}>
                  {nowProjects.map((project, index) => (
                    <div key={index} className='flex flex-row items-end'>
                      <span className="text-[16px]">⪼</span>
                      <Link href={project.link}>
                        <p className="font-aeonik-bold italic text-[18px] underline transition duration-200 ease-in-out hover:text-blue-600 mr-10">{project.name}</p>
                      </Link>
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row items-left md:items-center lg:items-center w-full space-y-3 md:space-y-0 md:space-x-3">
                <p className="font-aeonik-thin tracking-widest text-[18px]">PREV</p>
                {prevProjects.map((project, index) => (
                  <div key={index} className='flex flex-row items-end'>
                    <span className="text-[16px]">⪼</span>
                    <Link href={project.link}>
                      <p className="font-aeonik-bold text-[18px] mr-2 border-b border-white">{project.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
                <HoverBorderGradient
                  containerClassName="rounded-xl w-full text-center md:text-left sm:w-auto"
                  link="/projects"
                  as="button"
                  className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2"
                >
                  <p className="font-graebenbach-mono-regular">VIEW PROJECTS</p>
                </HoverBorderGradient>
                {/* <Button text="VIEW PROJECTS" link="/projects" className="w-full text-center md:text-left sm:w-auto"></Button> */}
                <Button text="ABOUT ME" link="/about" className="w-full text-center md:text-left sm:w-auto"></Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Hero;