import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { drukWide } from "../../app/fonts";
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"

const About = () => {
  const blur = 5;
  const videoSource = "home/static.mp4";
  return (
    <>
          <Navbar />
      <div className="flex h-screen min-w-screen flex-col pt-32 items-center">
        <div className="flex flex-col w-full px-20 items-start justify-center text-6xl font-bold gap-y-4 ">
          <div className="flex flex-row px-8 space-x-4">
            <div
              className="flex flex-col w-3/4 align-center justify-center space-y-4 items-start">
              <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
                <p>← BACK TO HOME </p>
              </Link>
              <div className="w-full font-voyager-thin tracking-tight text-[48px]">
                <h1>👋🏼 I'm Carter Cote, a Fil-American software engineer + designer. Currently studying HCI @ Stanford.</h1>
              </div>
              {/* <div className="w-full font-aeonik-regular space-y-3 xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">
                <p>Test </p>
              </div> */}
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
    </>
  );
};
export default About;