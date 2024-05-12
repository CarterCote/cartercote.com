import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const projects =[
  {
    name: "SellRaze",
    role: "Founding Engineer",
    year: "2024",
    description: "Using AI to build the fastest way to sell online. Led all design. Built React Native mobile app alongside 2 friends. Led growth strategy, leading to over 10,000 impressions and 1,500 users in two months.",
    image: "/projects/sellraze.png",
    link: "http://sellraze.com",
    linkText: "VIEW LANDING PAGE",
    secondLink: true,
    link2: "https://apps.apple.com/us/app/sellraze-list-sell-earn/id6455042085",
    linkText2: "VIEW MOBILE APP"
  },
  {
    name: "Crayo AI",
    role: "Founding Designer",
    year: "2024",
    description: "Enabling content creators with AI tools to go viral at 10x the speed, with stylized, captioned, and animated short-form content. 50,000+ users.",
    image: "/projects/crayo.png",
    link: "/projects",
    linkText: "VIEW PROJECT",
    secondLink: false,
  },
  {
    name: "Musicfy",
    role: "Founding Designer",
    year: "2023",
    description: "Emerging AI tools for 1M+ users to rapidly create new music, saving precious time for true creativity. Designed the UI and branding for v2 of the platform.",
    image: "/projects/musicfy.png",
    link: "https://musicfy.lol/",
    linkText: "VIEW PROJECT",
    secondLink: false,
  },
  {
    name: "Bedrock Systems",
    role: "Winning Design Concept",
    year: "2023",
    description: "Refreshing the brand identity + redesigning the UX/UI and information architecture for Bedrock Systems, a Kleiner Perkins portfolio company focused on securing critical infrastructure. Awarded Kleiner Perkins Design Fellow Finalist.",
    image: "/projects/bedrock.png",
    link: "https://www.loom.com/share/aae2b4ebbf9547c8b46bc2f7dcc4c785",
    linkText: "VIEW CASE STUDY",
    secondLink: false,
  },
  {
    name: "Pathways.me",
    role: "Founder",
    year: "2022",
    description: "Using story-driven design to encourage career exploration. Solo founder. 10,000 users. Recognized at ACTE CareerTech National Conference.",
    image: "/projects/pathway.png",
    link: "https://www.pathways.me/",
    linkText: "VIEW PROJECT",
    secondLink: false,
  },
  {
    name: "Six Feet Supplies",
    role: "Founding Designer",
    year: "2020",
    description: "Zero-cost emergency supply delivery web app during peak of COVID-19. 20,000 users, 14 cities. Solo designer + dev. Featured on CNN, LA Times.",
    image: "/projects/sixfeet.png",
    link: "",
    linkText: "VIEW PROJECT",
    secondLink: false,
  },
];

const freelance = [
  {
    name: "Wise Smith for District Attorney",
    link: "https://wisesmithforda.com/",
    image: "/projects/cazares.png"
  },
  {
    name: "Startup Exchange",
    link: "https://startup.exchange/",
    image: "/projects/cazares.png"
  },
  {
    name: "Cazares for COC",
    link: "",
    image: "/projects/cazares.png"
  },
  {
    name: "Global Prep Academy",
    link: "",
    image: "/projects/gpa.jpg"
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-20 items-start justify-center text-6xl font-bold gap-y-4 ">
          <div
            className="flex flex-col w-full align-center justify-center space-y-4 items-start grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
              <p>← BACK TO HOME </p>
            </Link>
          </div>
          <div
            className="flex flex-col w-full align-center justify-center space-y-4 items-start">
              <div className="w-full border-b border-gray-400 mb-5">
                <p className="font-aeonik-thin tracking-widest text-[18px] mb-3">PROJECTS</p>
              </div>
              {projects.map((project) => (
              <div key={project.name} className="w-full flex flex-row space-x-5 py-10 items-start font-aeonik-thin tracking-regular space-y-3 text-sm">
                <div className="flex flex-row" style={{ width: '50%', height: 'auto' }}>
                  <NextImage
                    priority
                    src={project.image}
                    height={700}
                    width={600}
                    alt={project.name}
                  />
                </div>
                <div className="w-1/2">
                  <div className="flex flex-row space-x-3 text-[32px]">
                    <h1 className="font-voyager-thin italic">{project.name}</h1>
                    <h1 className="font-voyager-thin italic"> || </h1>
                    <h1 className="font-voyager-thin">{project.role}</h1>
                  </div>
                  <p className="pt-3">{project.year}</p>
                  <div className="flex flex-row my-10 tracking-normal font-aeonik-regular text-[18px] leading-[125%]">
                    <p>{project.description}</p>
                  </div>
                  <div className="flex flex-row space-x-3">
                    <Button text={project.linkText} link={project.link}></Button>
                    {project.secondLink && <Button text={project.linkText2} link={project.link2}></Button>}
                  </div>
                </div>
              </div>
            ))}
            <div className='flex flex-col justify-end w-full pt-5 pb-20'>
              <p className="font-aeonik-thin border-b border-gray-400 pb-3 tracking-widest text-[18px]">FREELANCE WORK</p>
              <div className="flex flex-row items-start w-full">
                <div className="w-2/3 pt-10 pr-20 items-start">
                  {freelance.map((item, index) => (
                    <div key={index} className="hidden group-hover:block">
                      <NextImage
                        priority
                        src={item.image}
                        height={700}
                        width={600}
                        alt="hi"
                      />
                    </div>
                  ))}
                </div>
                <div className='w-full'>
                  {freelance.map((item, index) => (
                    <Link href={item.link as string} key={index}>
                      <div className="w-full border-b border-gray-400 pt-10 group">
                        <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Projects;

// Sellraze
// Crayo
// Musicfy
// Bedrock
// Pathways
// Six Feet Supplies
// Startup Exchange

// Honorable Mentions
// flightCooked
// bedtimeStories
