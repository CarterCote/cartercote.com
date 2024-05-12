import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { drukWide } from "../../app/fonts";
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const awards = [
    {
        name: "Mr. Georgia Tech Semifinalist",
        desc: "Finalist for GT’s prestigious award recognizing campus leadership & service.",
        year: "2023",
    },
    {
        name: "Buildspace Graduate",
        desc: "Accelerator backed by a16z and Y Combinator.",
        year: "2023",
    },
    {
        name: "Startup Atlanta Community Builder Nominee",
        desc: "Finalist for an award recognizing my contributions to the Atlanta entrepreneurship ecosystem.",
        year: "2023",
    },
    {
        name: "Kleiner Perkins Design Fellow Finalist",
        desc: "Finalist for fellowship offering mentorship in VC and entrepreneurship.",
        year: "2023",
    },
    {
        name: "Hypepotamus Spotlight",
        desc: "Recognized for launching Georgia Tech’s first XR Hackathon.",
        year: "2023",
    },
    {
        name: "Banatao Family First-Generation Engineering Scholar",
        desc: "1 of 6 scholars for $20,000 scholarship for first-gen engineering students.",
        year: "2020",
    },
    {
        name: "National Eagle Scout Association Lifetime Member",
        desc: "Recognized for my leadership and service to my local community.",
        year: "2018",
    },
];

const experiences = [
    {
        number: "01",
        position: "GROWTH INTERN",
        year: "2023",
        companyName: "Overtime",
        link: "https://overtime.tv/",
        imageName: "/projects/overtime.png",
        roleDescription: "Devised UX strategy to attract university students to Overtime events, driving digital engagement \& sales conversions to grow from <5% to 15% of overall event attendance. Launched ambassador program."
    },
    {
        number: "02",
        position: "AI ENGINEER INTERN",
        year: "2023",
        companyName: "JPMorgan",
        link: "https://www.jpmorgan.com/global",
        imageName: "/projects/jpmorgan.png",
        roleDescription: "Automated compatibility testing by training and deploying multimodal classifiers, reducing manual testing by 90%. Developed a summarization tool and a high-volume ML inference API."
    },
    {
        number: "03",
        position: "PRODUCT DESIGNER",
        year: "2022",
        companyName: "CreatorDAO",
        link: "https://www.creatordao.com/",
        imageName: "/projects/creatorDAO.png",
        roleDescription: "Designed web components and assets for strategic projects. Backed by a16z, Audacious Ventures, Gary Tan."
    },
    {
        number: "04",
        position: "SOFTWARE ENGINEER INTERN",
        year: "2022",
        companyName: "JPMorgan Chase & Co.",
        link: "https://www.jpmorganchase.com/",
        imageName: "/projects/jpmc.png",
        roleDescription: "Developed an end-to-end API system for scalable resiliency tasks for large transactions, and built a client-facing UI for automated task management used by 5000+ developers."
    },
    // {
    //     number: "05",
    //     position: "GROWTH INTERN",
    //     year: "2023",
    //     companyName: "Overtime",
    //     imageName: "/projects/overtime.png",
    //     roleDescription: "Various design projects, including a site to announce the anticipated release of their browser, Arc, on Windows."
    // },
    // {
    //     number: "06",
    //     position: "GROWTH INTERN",
    //     year: "2023",
    //     companyName: "Overtime",
    //     imageName: "/projects/overtime.png",
    //     roleDescription: "Various design projects, including a site to announce the anticipated release of their browser, Arc, on Windows."
    // }
];

const About = () => {
    const groupedExperiences = [];
    for (let i = 0; i < experiences.length; i += 2) {
      groupedExperiences.push(experiences.slice(i, i + 2));
    }
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-28 items-start justify-center text-6xl font-bold gap-y-4 ">
            <div
              className="flex flex-col w-full align-center justify-center space-y-4 items-start">
              <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
                <p>← BACK TO HOME </p>
              </Link>
              <div
              className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p className="w-2/3 font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">ABOUT </p>
                <h1 className="font-voyager-thin text-[54px] leading-[125%] text-center tracking-tight">👋🏼 I'm Carter Cote, a Fil-American software engineer + designer. Currently studying HCI @ Stanford.</h1>
              <div className="w-2/3 font-aeonik-regular pt-6 space-y-6 items-center align-center justify-center xs:text-sm sm:text-sm md:text-sm lg:text-xl xl:text-xl 2xl:text-xl">
                <p className="leading-[150%]">My journey in software started at age 12 with designing video game assets + making videos about it on the internet. 
                    That led to over 4 million downloads of my work, and 1.5 million views of my YouTube videos. 
                </p>
                <p className="leading-[150%]">This hobby kindled a deeper passion for using design to impact others through web apps. 
                    Naturally, I gained curiousity in how to build the software behind websites, not just design it.
                </p>
                <p className="leading-[150%]">Today, I am a swiss-army knife that can understand end-users, and design, build, and scale end-solutions.
                    I can code-switch as the designer, the software engineer, or growth hacker.
                </p>
              </div>
            </div>
            {/* <div className="w-1/4 items-center justify-center align-center">
              <NextImage
                priority
                src="/head/MYMIND.png"
                height={660}
                width={570}
                alt="Descriptive Text"
                className="opacity-50"
              />
            </div> */}
          </div>
          <div className="flex flex-col w-full py-20">
            <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">EXPERIENCE</p>
            {groupedExperiences.map((group, index) => (
            <div key={index} className="flex flex-row w-full justify-between space-x-10 border-b pb-10 border-gray-800">
              {group.map((exp, idx) => (
                <div key={idx} className="w-full py-10 font-aeonik-regular">
                  <Link href={exp.link as string} className="flex flex-row items-start align-start">
                    <div className="flex flex-col w-1/6">
                      <p className="text-sm pb-5 text-gray-500">{exp.number}</p>
                      <NextImage
                        priority
                        src={exp.imageName}
                        height={118}
                        width={118}
                        alt="Descriptive Text"
                      />
                    </div>
                    <div className="ml-10 w-9/12 items-start">
                      <p className="text-sm pb-5 text-gray-500">{exp.position}</p>
                      <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{exp.companyName}</p>
                      <p className="text-[18px] mt-4 leading-[150%] text-gray-400">{exp.roleDescription}</p>
                    </div>
                    <div className="flex flex-col w-1/12 items-end">
                      <p className="text-sm pb-5 text-gray-500">{exp.year}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
            </div>
        <div className="w-full py-20">
            <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">AWARDS</p>
            {awards.map((award) => (
                <div className="flex flex-row justify-between items-end w-full border-b border-gray-800 pt-10">
                    <div>
                        <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{award.name}</p>
                        <p className="font-aeonik-thin text-gray-400 tracking-tight text-[21px] mb-3">{award.desc}</p>
                    </div>
                    <p className="font-aeonik-thin tracking-tight text-[21px] mb-3">{award.year}</p>
                </div>
            ))}
        </div>

        </div>
      </div>
      <Footer/>
    </>
  );
};
export default About;