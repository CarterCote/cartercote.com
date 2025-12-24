"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { TracingBeam } from "../../components/ui/tracing-beam";
import InteractiveLink from './InteractiveLink';
import VideoBackground from '../../components/sections/VideoBackground';
import { photos, awards, education, experiences } from './data';

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-[150%]">{children}</p>
);

const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="font-voyager-thin text-left text-[24px] md:text-[32px] leading-[120%] tracking-tight pt-4">{children}</p>
);

const BioContent = () => (
  <div className="w-full font-aeonik-regular space-y-8 text-[18px]">
    <P>at 12, my first side hustle was designing Minecraft game assets + posting them on youtube. i ended up with 4+ million downloads of my work and <InteractiveLink href="https://youtube.com/cartercote" event="aboutYoutubeClicked">1.3 million Youtube views</InteractiveLink>.</P>
    <P>selling Minecraft designs to youtubers led to a hobby of designing typographic posters. i had no clue how this would shape my future. i just thought it was fun!</P>
    <Subtitle>one day in high school, a friend of mine told me to explore web. it changed everything.</Subtitle>
    <P>after some freelance gigs, I got frustrated with lacking full creative control on how websites looked and functioned. this led me to study CS at Georgia Tech.</P>
    <P>at the peak of covid, a group of friends and I wanted to take action to help our community. we built <InteractiveLink href="https://canyonsnews.com/local-student-leaders-are-expanding-a-successful-grocery-delivery-service/" event='aboutSixFeetClicked' underline={true} newTab={true}>six feet supplies</InteractiveLink>, which delivered over $50k worth of urgent supplies to over 20k people. this taught me the ability to impact people through software, and the effects of scale.</P>
    <P>building that project enabled me to explore and solidify my own career aspirations. to give back, I wanted to help other students in my community to explore their path, most of whom are the first in their family to pursue a 4-year degree. in response, I built <InteractiveLink href="http://pathways.me" event='aboutPathwaysClicked' underline={true} newTab={true}>pathways.me</InteractiveLink> for high school students, aiming to close information gaps associated with discovering and pursuing careers.</P>
    <P>pathways.me became my proudest creation up to that point. I even channeled that passion into teaching design, project ideation, and branding to high school students.</P>
    <Subtitle>i found true fulfillment in wanting to help the next generation, and to close systemic gaps for others to succeed.</Subtitle>
    <P>except, the road ahead to build in edtech seemed daunting and had endless variables out of my control...</P>
    <P>disheartened, I spent my underclassmen years at Georgia Tech exploring other interests, with the hope of eventually coming back to education. beyond CS, I studied Industrial Design and Cognitive Psychology.</P>
    <P>i joined a research lab on campus, interned at startups and big companies, and even explored other interests like growth & photography. i even had the chance to take photos for LeBron James Jr., NLE Choppa, Vic Blends, Georgia Tech's Football Team, and more.</P>
    <Subtitle>by junior year, I felt experienced but unfulfilled. I felt lost in my pursuit of the original goal to build software and help people.</Subtitle>
    <P>to join the dialog, I got involved on tech twitter, meeting ambitious people and learning about the problems they were solving.</P>
    <P>this led me to work on <InteractiveLink href="https://create.musicfy.lol" event='aboutMusicfyClicked' underline={true} newTab={true}>musicfy</InteractiveLink>, an ai music platform with over 5m users, <InteractiveLink href="http://crayo.ai" event='aboutCrayoClicked' underline={true} newTab={true}>crayo</InteractiveLink>, an ai short-form content generation platform (went from 0 → 2m users), with over 50k users in the first month; and <InteractiveLink href="http://sellraze.com" event='aboutSellrazeClicked' underline={true} newTab={true}>sellraze</InteractiveLink>, a mobile app that allows you to sell anything online with just a picture.</P>
    <P>i learned a lot. and did a lot. each role had its own responsibilities and learnings. each team hit 7-figures ARR. i was building the set of tools i needed to design, build, and scale anything.</P>
    <P>in parallel, I wanted to find like-minded peers, and to help them pursue their most ambitious, creative visions. this led me to start a nonprofit called <InteractiveLink href="http://startup.exchange" event='aboutStartupExchangeClicked' underline={true} newTab={true}>startup exchange</InteractiveLink>, which enables college students to develop the self-awareness, goals, & mindset needed to build startups and pursue the untraditional path.</P>
    <P>over 50k students at over 40 universities have attended a startup exchange event since fall 2022. we partnered with the city of Atlanta, Google, Nvidia, Meta, + more, flew out investors from SF, curated the first AI and XR hackathons in the city of Atlanta, and raised over $150,000.</P>
    <P>vik and I traveled across the US to host sx events. we wanted to build a movement, a culture of finding yourself and finding your people during the insanely long, intimidating journey of building something.</P>
    <P>building sx gave me so much fulfillment and joy. but despite everything, i still hadn't returned to my original passion — building for education.</P>
    <Subtitle>to start over, I decided to pursue a masters at Stanford.</Subtitle>
    <P>stanford granted me the chance to tap back into my deepest passion of building technology in education. I took classes from world-class professors, met exceptionally bright people, and lived on a campus that felt like heaven on earth.</P>
    <P>things changed pretty quickly for me when I had the unique opportunity to build Phia and to redefine the shopping category in consumer. the story continues to be written.</P>
    <Subtitle>today, i approach work as a swiss-army knife.</Subtitle>
    <P>i pry deep into an end-user's feelings and emotions, and take note of what is said and not said. i take my ideas and spread them around Figma like an open canvas, and converge concepts while taking light inspiration from proven concepts. i obsess over the details through frontend and Swift development. i analyze funnel data & event logging for gaps and opportunities.</P>
    <P>to be continued!</P>
  </div>
);

const ExperienceSection = ({ mobile = false }: { mobile?: boolean }) => (
  <div className="flex flex-col w-full py-20">
    <p className="font-aeonik-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">EXPERIENCE</p>
    {experiences.map((exp, index) => (
      <div key={index} className="w-full py-6 font-aeonik-regular border-b border-gray-800">
        <InteractiveLink href={exp.link} event="aboutExperienceClicked" newTab={true}>
          <div className="flex flex-row items-center gap-6">
            <Image
              priority
              src={exp.imageName}
              height={80}
              width={80}
              alt={exp.companyName}
              className={`rounded-[12px] ${mobile ? 'w-14 h-14' : 'w-14 h-14 md:w-20 md:h-20'}`}
            />
            <div className="flex flex-col flex-1">
              <div className="flex flex-row justify-between items-start mb-1">
                <p className="font-mono-regular text-sm text-gray-500">{exp.position}</p>
                <p className="font-mono-regular text-sm text-gray-500">{exp.year}</p>
              </div>
              <p className={`font-voyager-thin tracking-tight ${mobile ? 'text-[24px]' : 'text-[24px] md:text-[36px]'}`}>{exp.companyName}</p>
            </div>
          </div>
        </InteractiveLink>
      </div>
    ))}
  </div>
);

const EducationSection = ({ mobile = false }: { mobile?: boolean }) => (
  <div className="w-full py-20">
    <p className="font-mono-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">EDUCATION</p>
    {education.map((edu, index) => (
      <div key={index} className={`flex flex-col ${mobile ? '' : 'md:flex-row'} justify-between ${mobile ? 'items-start' : 'md:items-start'} w-full border-b border-gray-800 py-6`}>
        <div>
          <p className="font-voyager-thin tracking-tight text-[24px] mb-1">{edu.name}</p>
          <p className="font-mono-regular text-sm text-gray-500">{edu.desc}</p>
        </div>
        <p className="font-mono-regular text-sm text-gray-500">{edu.year}</p>
      </div>
    ))}
  </div>
);

const AwardsSection = ({ mobile = false }: { mobile?: boolean }) => (
  <div className="w-full py-20">
    <p className="font-mono-regular tracking-widest text-[18px] border-b border-gray-400 pb-3">AWARDS</p>
    {awards.map((award, index) => (
      <div key={index} className={`flex flex-col ${mobile ? '' : 'md:flex-row'} justify-between ${mobile ? 'items-start' : 'md:items-start'} w-full border-b border-gray-800 py-6`}>
        <div>
          <p className="font-voyager-thin tracking-tight text-[24px] mb-1">{award.name}</p>
          <p className="font-mono-regular text-sm text-gray-500">{award.desc}</p>
        </div>
        <p className="font-mono-regular text-sm text-gray-500">{award.year}</p>
      </div>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex flex-row gap-6 pt-6">
    <Link href="https://twitter.com/cartercote_" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
      <FaXTwitter className="text-[32px]" />
    </Link>
    <Link href="https://github.com/cartercote" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
      <FaGithub className="text-[32px]" />
    </Link>
    <Link href="https://linkedin.com/in/carter-cote" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
      <FaLinkedin className="text-[32px]" />
    </Link>
    <Link href="https://instagram.com/carter.cote" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
      <FaInstagram className="text-[32px]" />
    </Link>
  </div>
);

const AboutHeader = ({ mobile = false }: { mobile?: boolean }) => (
  <>
    <p className={`font-mono-regular tracking-widest text-[18px] text-gray-500 ${mobile ? 'mb-4' : 'mb-8'}`}>ABOUT</p>
    <h1 className={`font-voyager-thin text-left leading-[125%] tracking-tight mb-8 ${mobile ? 'text-[36px]' : 'text-[44px]'}`}>i'm just a dude that loves making stuff for others :)</h1>
  </>
);

const DesktopFooter = () => (
  <div className="w-full mt-20 overflow-hidden">
    <footer className="flex flex-col pb-10 items-start">
      <div className="flex flex-col gap-y-[0] w-full">
        <h1 className="tracking-tight font-aeonik-bold text-[36px] leading-[110%]">LET'S BUILD.</h1>
        <h1 className="tracking-tight font-aeonik-bold text-[36px] leading-[70%]">CONNECT WITH ME</h1>
        <SocialLinks />
      </div>
    </footer>
  </div>
);

interface PhotoGalleryProps {
  currentPhoto: number;
  setCurrentPhoto: (index: number) => void;
  isPlaying?: boolean;
  setIsPlaying?: (playing: boolean) => void;
  nextPhoto: () => void;
  prevPhoto: () => void;
}

const PhotoGalleryDesktop = ({ currentPhoto, setCurrentPhoto, isPlaying, setIsPlaying, nextPhoto, prevPhoto }: PhotoGalleryProps) => (
  <div className="w-1/2 h-screen fixed top-0 left-0 flex flex-col items-left justify-center px-8">
    <div className="flex flex-col items-left w-[90%] h-[90vh] pt-8">
      <div className="relative flex items-center justify-center w-full h-full">
        <button onClick={prevPhoto} className="absolute left-0 z-10 p-2 text-gray-400 hover:text-white transition-colors" aria-label="Previous photo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="relative w-full h-full rounded-[8px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={currentPhoto} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
              <Image priority src={photos[currentPhoto]} fill alt={`About photo ${currentPhoto + 1}`} className="object-cover" />
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setIsPlaying?.(!isPlaying)}
            className="absolute bottom-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white/70 hover:text-white transition-colors"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>
        </div>

        <button onClick={nextPhoto} className="absolute right-0 z-10 p-2 text-gray-400 hover:text-white transition-colors" aria-label="Next photo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`relative w-12 h-16 overflow-hidden rounded-[4px] transition-opacity duration-300 ease-in-out ${index === currentPhoto ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
          >
            <Image src={photo} fill alt={`Thumbnail ${index + 1}`} className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  </div>
);

const PhotoGalleryMobile = ({ currentPhoto, setCurrentPhoto, nextPhoto, prevPhoto }: PhotoGalleryProps) => (
  <div className="relative w-full h-[75vh] mb-6">
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

    <button onClick={prevPhoto} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-white transition-colors" aria-label="Previous photo">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <AnimatePresence mode="wait">
      <motion.div key={currentPhoto} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
        <Image priority src={photos[currentPhoto]} fill alt={`About photo ${currentPhoto + 1}`} className="object-cover" />
      </motion.div>
    </AnimatePresence>

    <button onClick={nextPhoto} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-white transition-colors" aria-label="Next photo">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {photos.map((photo, index) => (
        <button
          key={index}
          onClick={() => setCurrentPhoto(index)}
          className={`relative w-8 h-12 overflow-hidden rounded-[4px] transition-opacity duration-300 ease-in-out ${index === currentPhoto ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
        >
          <Image src={photo} fill alt={`Thumbnail ${index + 1}`} className="object-cover" />
        </button>
      ))}
    </div>
  </div>
);

const About = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, currentPhoto]);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <VideoBackground />
      <Navbar />
      <div className="relative z-[10] flex w-full pt-0 lg:pt-32 overflow-x-hidden">
        {/* Desktop: Two-column layout */}
        <div className="hidden lg:flex w-full min-h-screen">
          <PhotoGalleryDesktop
            currentPhoto={currentPhoto}
            setCurrentPhoto={setCurrentPhoto}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            nextPhoto={nextPhoto}
            prevPhoto={prevPhoto}
          />

          {/* Right side - Scrollable content with TracingBeam */}
          <div className="w-1/2 min-h-screen ml-[50%]">
            <TracingBeam className="pl-12 pr-8" side="left">
              <div className="flex flex-col items-start max-w-[600px] pb-32">
                <AboutHeader />
                <BioContent />
                <ExperienceSection />
                <EducationSection />
                <AwardsSection />
                <DesktopFooter />
              </div>
            </TracingBeam>
          </div>
        </div>

        {/* Mobile: Single column layout */}
        <div className="lg:hidden flex flex-col w-full">
          <PhotoGalleryMobile
            currentPhoto={currentPhoto}
            setCurrentPhoto={setCurrentPhoto}
            nextPhoto={nextPhoto}
            prevPhoto={prevPhoto}
          />

          <div className="px-8 pt-8">
            <AboutHeader mobile />
            <BioContent />
            <ExperienceSection mobile />
            <EducationSection mobile />
            <AwardsSection mobile />
          </div>
        </div>
      </div>
      {/* Footer for mobile only */}
      <div className="relative z-[10] lg:hidden">
        <Footer/>
      </div>
    </>
  );
};
export default About;
