import React, { FC } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { TracingBeam } from "../../components/ui/tracing-beam";
import InteractiveLink from './InteractiveLink';
import VideoBackground from '../../components/sections/VideoBackground';

const awards = [
    {
        name: "Mr. Georgia Tech Semifinalist",
        desc: "Finalist for GT’s prestigious award recognizing campus leadership and service.",
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
        desc: "1 of 6 scholars for $20,000 scholarship for first-gen Filipino-American engineering students.",
        year: "2020",
    },
    {
        name: "National Eagle Scout Association Lifetime Member",
        desc: "Recognized for my leadership and service to my local community.",
        year: "2018",
    },
];

const education = [
  {
    name: "Stanford University |  MS Human-Computer Interaction",
    desc: "Attending on a full-ride scholarship.",
    year: "2024-2025",
  },
  {
    name: "Georgia Tech |  MS Computer Science",
    desc: "Dropped out to attend Stanford.",
    year: "2024",
  },
  {
    name: "Georgia Tech |  BS Computer Science",
    desc: "Highest honors, minor in Industrial Design.",
    year: "2020-2023",
  },
]

const experiences = [
    {
        position: "CPO",
        year: "2025",
        companyName: "Phia",
        link: "https://join.phia.com/",
        imageName: "/work/phiaIcon.png",
        roleDescription: ""
    },
    {
        position: "COFOUNDER",
        year: "2024",
        companyName: "Sellraze (YC F25)",
        link: "https://sellraze.com/",
        imageName: "/work/sellrazeIcon.jpeg",
        roleDescription: ""
    },
    {
        position: "FOUNDER",
        year: "2023-NOW",
        companyName: "Startup Exchange",
        link: "https://startup.exchange/",
        imageName: "/work/sxLogo.jpeg",
        roleDescription: ""
    },
    {
        position: "FOUNDING TEAM",
        year: "2023-2024",
        companyName: "Crayo",
        link: "https://crayo.ai/",
        imageName: "/work/crayoLogo.png",
        roleDescription: ""
    },
    {
        position: "FOUNDING DESIGNER",
        year: "2023",
        companyName: "Musicfy",
        link: "https://musicfy.lol/",
        imageName: "/work/musicfyLogo.png",
        roleDescription: ""
    },
    {
        position: "GROWTH",
        year: "2023",
        companyName: "Overtime",
        link: "https://overtime.tv/",
        imageName: "/work/overtime.png",
        roleDescription: "Devised UX strategy to attract university students to Overtime events, driving digital engagement \& sales conversions to grow from <5% to 15% of overall event attendance. Launched ambassador program."
    },
    {
        position: "SOFTWARE ENGINEER",
        year: "2023",
        companyName: "JPMorgan",
        link: "https://www.jpmorgan.com/global",
        imageName: "/work/jpmorgan.png",
        roleDescription: "Automated compatibility testing by training and deploying multimodal classifiers, reducing manual testing by 90%. Developed a summarization tool and a high-volume ML inference API."
    },
    {
        position: "PRODUCT DESIGNER",
        year: "2022",
        companyName: "CreatorDAO",
        link: "https://www.creatordao.com/",
        imageName: "/work/creatorDAO.png",
        roleDescription: "Designed web components and assets for strategic projects. Backed by a16z, Audacious Ventures, Gary Tan."
    },
    {
        position: "SOFTWARE ENGINEER",
        year: "2022",
        companyName: "JPMorgan Chase & Co.",
        link: "https://www.jpmorganchase.com/",
        imageName: "/work/jpmc.png",
        roleDescription: "Developed an end-to-end API system for scalable resiliency tasks for large transactions, and built a client-facing UI for automated task management used by 5000+ developers."
    },
    // {
    //     number: "05",
    //     position: "GROWTH INTERN",
    //     year: "2023",
    //     companyName: "Overtime",
    //     imageName: "/work/overtime.png",
    //     roleDescription: "Various design projects, including a site to announce the anticipated release of their browser, Arc, on Windows."
    // },
    // {
    //     number: "06",
    //     position: "GROWTH INTERN",
    //     year: "2023",
    //     companyName: "Overtime",
    //     imageName: "/work/overtime.png",
    //     roleDescription: "Various design projects, including a site to announce the anticipated release of their browser, Arc, on Windows."
    // }
];

const About = () => {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 md:px-22 lg:px-20 items-start justify-center text-6xl font-bold gap-y-4 ">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full align-center justify-center space-y-4 items-start">
              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">ABOUT </p>
                <Image
                  priority
                  src="/about/aboutMe.jpg"
                  height={350}
                  width={231}
                  alt="Descriptive Text"
                  className="py-10"
                />
                <h1 className="font-voyager-thin text-left text-[44px] md:text-[54px] leading-[125%] tracking-tight mb-3 max-w-[800px]">i'm just a dude that loves making stuff for others.</h1>
                <div className="w-full font-aeonik-regular space-y-10 items-center align-center justify-center text-[21px] md:text-[18px] max-w-[800px]">
                  <p className="leading-[150%]">my first side hustle was designing Minecraft game assets + posting them on youtube, when i was 12.
                  i ended up accumulating over 4 million downloads of my work and <InteractiveLink href="https://youtube.com/cartercote" event="aboutYoutubeClicked">1.3 million views on my videos</InteractiveLink>.
                  </p>
                  <p className="leading-[150%]">selling minecraft texture packs to youtubers turned into a hobby of designing typographic posters, until a friend of mine told me to explore web.
                  </p>
                  <p className="leading-[150%]">after a couple of freelance gigs, I got frustrated with not having full creative control on how websites worked and looked. this led me to go on to study CS at Georgia Tech.
                  </p>
                  <p className="leading-[150%]">during the peak of covid-19, a group of friends of mine wanted to take action to help our community. we built <InteractiveLink href="https://canyonsnews.com/local-student-leaders-are-expanding-a-successful-grocery-delivery-service/" event='aboutSixFeetClicked' underline={true} newTab={true}>six feet supplies</InteractiveLink>, which delivered over $50k worth of urgent supplies to over 20k people.
                    this taught me the effects of scale, and the ability to impact people through software.
                  </p>
                  <p className="leading-[150%]">building that project enabled me to explore and solidify my own career aspirations. to give back, I wanted to help other students in my community to explore their path. in response, I built <InteractiveLink href="http://pathways.me" event='aboutPathwaysClicked' underline={true} newTab={true}>pathways.me</InteractiveLink> for high school students in an effort to close information gaps associated with discovering and pursuing careers.
                  </p>
                  <p className="leading-[150%]">at 21, i worked on <InteractiveLink href="https://create.musicfy.lol" event='aboutMusicfyClicked' underline={true} newTab={true}>musicfy</InteractiveLink>,
                  an ai-voice generation platform with over 5m users;
                  {' '}<InteractiveLink href="http://crayo.ai" event='aboutCrayoClicked' underline={true} newTab={true}>crayo</InteractiveLink>, an ai short-form content generation platform with over 2m users, with over 50k users in the first month;
                  and <InteractiveLink href="http://sellraze.com" event='aboutSellrazeClicked' underline={true} newTab={true}>sellraze</InteractiveLink>, a mobile app that uses ai to autofill listings for online selling.
                  </p>
                  <p className="leading-[150%]">i also started a nonprofit called <InteractiveLink href="http://startup.exchange" event='aboutStartupExchangeClicked' underline={true} newTab={true}>startup exchange</InteractiveLink>, which enables college students to learn how to build side projects and grow them into startups. over 30k students at over 40 universities have attended a startup exchange event since fall 2022.
                  </p>
                  <p className="leading-[150%]">today, i am a swiss-army knife that can understand end-users, and design, build, and scale end-solutions.
                      i can code-switch as the designer, the software engineer, or growth hacker.
                  </p>
                </div>
              </div>
            {/* <div className="w-1/4 items-center justify-center align-center">
              <Image
                priority
                src="/head/MYMIND.png"
                height={660}
                width={570}
                alt="Descriptive Text"
                className="opacity-50"
              />
            </div> */}
            </div>
          <div className="flex flex-col w-full py-20 max-w-[800px] mx-auto">
            <p className="font-aeonik-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">EXPERIENCE</p>
            {experiences.map((exp, index) => (
              <div key={index} className="w-full py-6 font-aeonik-regular border-b border-gray-800">
                <InteractiveLink
                  href={exp.link as string}
                  event={'aboutExperienceClicked'}
                >
                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-row items-center gap-6">
                      <Image
                        priority
                        src={exp.imageName}
                        height={80}
                        width={80}
                        alt="Descriptive Text"
                        className="rounded-[12px]"
                      />
                      <div className="flex flex-col items-start">
                        <p className="font-mono-regular text-sm pb-1 text-gray-500">{exp.position}</p>
                        <p className="font-voyager-thin tracking-tight text-[36px]">{exp.companyName}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm text-gray-500">{exp.year}</p>
                    </div>
                  </div>
                </InteractiveLink>
              </div>
            ))}
          </div>
          <div className="w-full py-20 max-w-[800px] mx-auto">
              <p className="font-mono-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">EDUCATION</p>
              {education.map((education) => (
                  <div className="flex flex-col md:flex-row justify-between md:items-start w-full border-b border-gray-800 py-6">
                      <div>
                          <p className="font-voyager-thin tracking-tight text-[24px] mb-1">{education.name}</p>
                          <p className="font-mono-regular text-sm text-gray-500">{education.desc}</p>
                      </div>
                      <p className="font-mono-regular text-sm text-gray-500">{education.year}</p>
                  </div>
              ))}
          </div>
          <div className="w-full py-20 max-w-[800px] mx-auto">
              <p className="font-mono-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">AWARDS</p>
              {awards.map((award) => (
                  <div className="flex flex-col md:flex-row justify-between md:items-start w-full border-b border-gray-800 py-6">
                      <div>
                          <p className="font-voyager-thin tracking-tight text-[24px] mb-1">{award.name}</p>
                          <p className="font-mono-regular text-sm text-gray-500">{award.desc}</p>
                      </div>
                      <p className="font-mono-regular text-sm text-gray-500">{award.year}</p>
                  </div>
              ))}
          </div>
        </TracingBeam>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default About;