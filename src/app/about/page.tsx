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
        year: "2023",
    },
    {
        name: "Startup Atlanta Community Builder Nominee",
        year: "2023",
    },
    {
        name: "Kleiner Perkins Design Fellow Finalist",
        year: "2023",
    },
    {
        name: "Banatao Family First-Generation Engineering Scholar",
        year: "2020",
    },
    {
        name: "National Eagle Scout Association Lifetime Member",
        year: "2018",
    },
];

const experiences = [
    {
        number: "01",
        position: "GROWTH INTERN",
        year: "2023",
        companyName: "Overtime",
        imageName: "/projects/overtime.png",
        roleDescription: "Various design projects, including a site to announce the anticipated release of their browser, Arc, on Windows."
    },
    {
        number: "02",
        position: "DESIGN INTERN",
        year: "2023",
        companyName: "CreatorDAO",
        imageName: "/projects/creatorDAO.png",
        roleDescription: "Test123 CreatorDAO Arc, on Windows."
    },
    {
        number: "03",
        position: "SOFTWARE ENGINEER INTERN",
        year: "2023",
        companyName: "JPMorgan",
        imageName: "/projects/jpmorgan.png",
        roleDescription: "Test123 JPMorgan Arc, on Windows."
    },
    {
        number: "04",
        position: "GROWTH INTERN",
        year: "2023",
        companyName: "Overtime",
        imageName: "/projects/overtime.png",
        roleDescription: "Various design projects, including a site to announce the anticipated release of their browser, Arc, on Windows."
    },
    {
        number: "05",
        position: "GROWTH INTERN",
        year: "2023",
        companyName: "Overtime",
        imageName: "/projects/overtime.png",
        roleDescription: "Various design projects, including a site to announce the anticipated release of their browser, Arc, on Windows."
    },
    {
        number: "06",
        position: "GROWTH INTERN",
        year: "2023",
        companyName: "Overtime",
        imageName: "/projects/overtime.png",
        roleDescription: "Various design projects, including a site to announce the anticipated release of their browser, Arc, on Windows."
    }
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
          <div className="flex flex-row space-x-4">
            <div
              className="flex flex-col w-3/4 align-center justify-center space-y-4 items-start">
              <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
                <p>← BACK TO HOME </p>
              </Link>
              <div className="w-full font-voyager-thin tracking-tight leading-[125%] text-[48px]">
                <h1>👋🏼 I'm Carter Cote, a Fil-American software engineer + designer. Currently studying HCI @ Stanford.</h1>
              </div>
              <div className="w-full font-aeonik-regular space-y-6 xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">
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
            <div className="w-1/4 items-center justify-center align-center">
              <NextImage
                priority
                src="/head/MYMIND.png"
                height={660}
                width={570}
                alt="Descriptive Text"
                className="opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-col w-full py-20">
            <h1 className="w-full font-aeonik-bold text-[32px]">EXPERIENCE</h1>
            {groupedExperiences.map((group, index) => (
            <div key={index} className="flex flex-row w-full justify-between space-x-10 border-b pb-10 border-gray-800">
              {group.map((exp, idx) => (
                <div key={idx} className="w-full py-10 font-aeonik-regular">
                  <Link href="https://overtime.tv/" className="flex flex-row items-start align-start">
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
                    <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{award.name}</p>
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