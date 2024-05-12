import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { drukWide } from "../../app/fonts";
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Marquee from "react-fast-marquee";
import { TracingBeam } from "../../components/ui/tracing-beam";

const Play = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4 ">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
              <Link href="/" className="w-full font-aeonik-thin tracking-regular text-sm mb-4">
                  <p>← BACK TO HOME </p>
              </Link>
              <div
                className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                  <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">PLAY </p>
                  <p className="w-full md:w-2/3 font-voyager-thin tracking-tight text-center leading-[100%] text-[44px] md:text-[54px] mb-3">A collection of impulsive makes, complex emotions, and creative expression. </p>
              </div>
              <div className="flex flex-col md:flex-row">
                <NextImage
                      priority
                      src="/projects/gpa.jpg"
                      height={700}
                      width={600}
                      alt="Descriptive Text"
                />
              </div>
              <div className="w-full flex flex-row py-20">
                  <Marquee gradient gradientColor="#000" gradientWidth={25} className="h-[54px] w-full" speed={85} autoFill loop={0}>
                      <p className="w-full font-voyager-thin tracking-tight leading-[100%] text-[54px] mr-8">More</p>
                      <p className="w-full font-voyager-thin tracking-tight leading-[100%] text-[54px] mr-8">Works</p>
                      <p className="w-full font-voyager-thin tracking-tight leading-[100%] text-[54px] mr-8">&</p>
                  </Marquee>
              </div>
            </div>
          </TracingBeam>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Play;