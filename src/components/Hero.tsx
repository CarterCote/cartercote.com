import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { drukWide } from "../app/fonts";
import Button from './Button';

const Hero = () => {
  const blur = 5;
  const videoSource = "home/static.mp4";
  return (
    <>
      <main className="flex h-screen min-w-screen flex-col pt-32 items-center">
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
        <div className="flex flex-col w-full h-3/4 pl-24 items-start justify-center text-6xl font-bold gap-y-4 ">
          <div className="flex flex-row px-8 space-x-4">
            <div
              className="flex flex-col w-1/2 align-center justify-center space-y-4 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl items-start">
              <div className="w-full font-aeonik-bold text-[66px]">
                <h1>HI, I'M CARTER.</h1>
              </div>
              <div className="w-full font-aeonik-regular space-y-3 xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">
                <p>I'm a software engineer & designer at Stanford University, currently studying AI & Human-Computer Interaction. </p>
                <p>I craft elegant, interactive interfaces from 0 → 1. My goal is to reduce information gaps and barriers in education and career development.</p>
              </div>
              <div className="flex flex-row space-x-4">
                <Button text="PROJECTS"></Button>
                <Button text="ABOUT ME"></Button>
              </div>
            </div>
            <div className="w-1/2 items-center justify-center align-center">
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
        </div>
      </main>
    </>
    // <div className="relative h-full overflow-hidden">
    //   <div className='relative overflow-hidden'>

    //     <div className="flex flex-row justify-center w-full items-center">
    //       <div className="">
    //         <h1 className="text-white text-62 underline leading-20 font-serif mb-50 pb-20 max-w-700">
    //           <span className="pr-15 text-25 inline-block">➤  </span>Hi, I'm Carter.
    //         </h1>
    //         <p className="font-sans-serif tracking-tight leading-26 text-18 m-0 text-white pb-20">
    //           I'm 19, and I study AI, human-computer interaction, 
    //           + industrial design at Georgia Tech. I utilize design 
    //           thinking + computing to create disruptive systems that 
    //           yield a more equitable future and expand opportunity.
    //         </p>
    //         <span className="font-sans-serif font-bold text-1.25rem tracking-normal leading-24 mb-6 text-white">NOW DEVELOPING: ⪼
    //           <a href="https://www.aochelpinghand.org" target="_blank" rel="noopener noreferrer" className="text-white transition-200ms">
    //             career exploration programs
    //           </a>
    //           ,{" "}
    //           <a href="https://cartercote.com/designs" target="_blank" rel="noopener noreferrer" className="text-white transition-200ms">
    //             graphics
    //           </a>
    //           ,{" "}
    //           <a href="https://hexlabs.org" target="_blank" rel="noopener noreferrer" className="text-white transition-200ms">
    //             hack-a-thons
    //           </a>
    //           ,{" "}
    //           <a href="https://startup.exchange" target="_blank" rel="noopener noreferrer" className="text-white transition-200ms">
    //             startup communities
    //           </a>
    //         </span>
    //         <br />
    //         {/* <button onClick={() => {}} className="bg-transparent text-white mt-20 mr-20 px-36 py-10 border border-white rounded-12 font-sans-serif font-bold text-1rem transition-all duration-300 cursor-pointer">
    //           MY WORK
    //         </button>
    //         <button onClick={() => {}} className="bg-transparent text-white mt-20 mr-20 px-36 py-10 border border-white rounded-12 font-sans-serif font-bold text-1rem transition-all duration-300 cursor-pointer">
    //           ABOUT ME
    //         </button> */}
    //       </div>
    //       <div className="">
    //           <NextImage
    //         priority
    //         src="/head/MYMIND.png"
    //         height={500}
    //         width={500}
    //         alt="Descriptive Text"
    //         className="inline-block w-[230px]"
    //       />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Hero;