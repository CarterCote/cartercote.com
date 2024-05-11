import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { drukWide } from "../../app/fonts";
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const About = () => {
  const blur = 5;
  const videoSource = "home/static.mp4";
  return (
    <>
      <Navbar />
      <div className="flex h-screen min-w-screen flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-20 items-start justify-center text-6xl font-bold gap-y-4 ">
          <div className="flex flex-row px-8 space-x-4">
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
          <div className="flex flex-row w-full px-8 space-x-4">
            <div
              className="flex flex-col w-1/2 align-center justify-center space-y-4 items-start">
              <div className="w-full font-aeonik-bold text-[32px]">
                <h1>EXPERIENCE</h1>
              </div>
              <div className="w-full font-aeonik-regular">
                <Link href="https://overtime.tv/" className="">
                    <div className="relative inline-block text-lg font-medium text-white transition duration-300 ease-in-out border-b border-white hover:text-blue-800 hover:border-blue-800 overflow-hidden group">
                        <span className="underline-text text-sm">Overtime</span>
                    </div>
                </Link>
                <p className="text-sm text-opacity-70 text-white">Growth</p>
                <p className="text-xs mt-4">2023-2023</p>
              </div>
            </div>
            <div
              className="flex flex-col w-1/2 align-center justify-center space-y-4 items-start">
              <div className="w-full font-aeonik-bold text-[32px]">
                <h1>CONTACT</h1>
              </div>
              <div className="w-full font-aeonik-regular space-y-3 xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">
                <p>Test </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default About;