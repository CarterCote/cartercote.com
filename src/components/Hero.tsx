import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { drukWide } from "../app/fonts";
import Button from './Button';
import Marquee from "react-fast-marquee";

const Hero = () => {
  const blur = 5;
  const videoSource = "home/static.mp4";
  return (
    <>
      <main className="flex h-screen w-full flex-col pt-48 items-center">
        <div className="z-[-1] w-full bg-black flex items-center justify-center absolute top-0">
          <video
            className='absolute top-0 left-0 w-full object-cover'
            style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
            autoPlay={true}
            loop={true}
            muted
            id="video-id"
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col w-full h-3/4 items-center p-20 justify-center text-6xl font-bold gap-y-4 ">
          <div className="flex flex-row w-full px-8 space-x-1">
            <div className="mt-16">
              <h1 className="tracking-tight font-voyager-thin text-[24px] mr-4">►</h1>
            </div>
            <div
              className="flex flex-col w-full align-center justify-center space-y-10 pr-14 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl items-start">
              <div className="flex flex-row w-full mb-3 items-center">
                <h1 className="tracking-tight font-voyager-thin text-[148px]">HI, I'M CARTER.</h1>
              </div>
              <div className="w-full font-aeonik-regular space-y-8 leading-[1.25] text-[32px]">
                <p>I'm a 22 y/o software engineer + designer based in Palo Alto, currently studying AI + HCI at Stanford University. </p>
                <p>I craft elegant, interactive interfaces from 0 → 1. My goal is to reduce information gaps and barriers in education and career development.</p>
              </div>
              <div className="flex flex-row w-full align-center items-center space-x-3">
                <p className="font-aeonik-thin tracking-widest text-[18px]">NOW</p>
                <Marquee gradient gradientColor="#000" gradientWidth={25} className="h-[28px] w-full" speed={85} autoFill loop={0}>
                  <div className='flex flex-row items-end'>
                    <span className="text-[20px]">⪼</span>
                    <Link href="https://www.sellraze.com/">
                      <p className="font-aeonik-bold italic text-[24px] underline transition duration-200 ease-in-out hover:text-blue-600 mr-10">Using AI to build the fastest way to sell online</p>
                    </Link>
                  </div>
                  <div className='flex flex-row items-end'>
                    <span className="text-[20px]">⪼</span>
                    <Link href="https://www.startup.exchange/">
                      <p className="font-aeonik-bold italic text-[24px] underline transition duration-200 ease-in-out hover:text-blue-600 mr-10">Scaling builder culture at colleges across the US</p>
                    </Link>
                  </div>
                  <div className='flex flex-row items-end'>
                    <span className="text-[20px]">⪼</span>
                    <Link href="https://www.jpmorgan.com/">
                      <p className="font-aeonik-bold italic text-[24px] underline transition duration-200 ease-in-out hover:text-blue-600 mr-10">Building high-volume ML pipelines for JPMorgan</p>
                    </Link>
                  </div>
                  <div className='flex flex-row items-end'>
                    <span className="text-[20px]">⪼</span>
                    <p className="font-aeonik-bold italic text-[24px] mr-10">Training for a half-marathon</p>
                  </div>
                </Marquee>
              </div>
              <div className="flex flex-row w-full align-center items-center space-x-3">
                <p className="font-aeonik-thin tracking-widest text-[18px]">PREV</p>
                <div className='flex flex-row items-start'>
                  <span className="text-[20px]">⪼</span>
                  <Link href="https://www.jpmorgan.com/">
                    <p className="font-aeonik-bold text-[24px] mr-2 border-b border-white" >JPMorgan</p>
                  </Link>
                </div>
                <div className='flex flex-row items-end'>
                  <span className="text-[20px]">⪼</span>
                  <Link href="https://www.creatordao.com/">
                    <p className="font-aeonik-bold text-[24px] mr-2 border-b border-white">CreatorDAO</p>
                  </Link>
                </div>
                <div className='flex flex-row items-end'>
                  <span className="text-[20px]">⪼</span>
                  <Link href="https://www.overtime.tv/">
                    <p className="font-aeonik-bold text-[24px] mr-2 border-b border-white">Overtime</p>
                  </Link>
                </div>
                <div className='flex flex-row items-end'>
                  <span className="text-[20px]">⪼</span>
                  <Link href="https://www.crayo.ai/">
                    <p className="font-aeonik-bold text-[24px] mr-2 border-b border-white">Crayo AI</p>
                  </Link>
                </div>
                <div className='flex flex-row items-end'>
                  <span className="text-[20px]">⪼</span>
                  <Link href="https://www.musicfy.lol/">
                    <p className="font-aeonik-bold text-[24px] mr-2 border-b border-white">Musicfy</p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <Button text="VIEW PROJECTS" link="/projects"></Button>
                <Button text="ABOUT ME" link="/about"></Button>
              </div>
            </div>
            {/* <div className="w-1/2 items-center justify-center align-center">
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
        </div>
      </main>
    </>
  );
};
export default Hero;