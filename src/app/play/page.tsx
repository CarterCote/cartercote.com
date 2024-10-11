import React, { FC } from 'react';
import Image from "next/image";
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
              <div className="flex flex-col pt-10 justify-between md:space-x-10 md:flex-row">
                <div className="flex flex-col pb-20 md:pb-40">
                  <Image priority src="/design/001.jpg" height={400} width={320} alt="everything i'm not" className="w-full sm:w-auto sm:h-auto"/>
                  <div className="flex flex-row justify-between mt-3 w-full">
                    <p className="text-start font-aeonik-bold text-sm tracking-tight">EVERYTHING I'M NOT</p>
                    <p className="text-start font-aeonik-thin text-sm tracking-tight ml-2">2020</p>
                  </div>
                </div>
                <div className="flex flex-col pb-20 md:pb-0 mt-2 md:mt-40 md:pl-20">
                  <Image priority src="/design/002.jpg" height={438} width={350} alt="mixed signals" className="w-full sm:w-auto sm:h-auto"/>
                  <div className="flex flex-row justify-between mt-3 w-full">
                    <p className="text-start font-aeonik-bold text-sm tracking-tight">MIXED SIGNALS</p>
                    <p className="text-start font-aeonik-thin text-sm tracking-tight ml-2">2020</p>
                  </div>
                </div>
                <div className="flex flex-col pb-20 md:pb-0 md:mt-20 md:mb-[420px]">
                  <Image priority src="/design/graduation.jpg" height={160} width={160} alt="graduation" className="w-full sm:w-auto sm:h-auto"/>
                  <div className="flex flex-row justify-between mt-3 w-full">
                    <p className="text-start font-aeonik-bold text-sm tracking-tight">GRADUATION</p>
                    <p className="text-start font-aeonik-thin text-sm tracking-tight ml-2">2021</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-10 justify-between md:space-x-10 md:flex-row">
                <div className="flex flex-col pb-20 md:pb-0 mt-2 md:mt-10 md:pl-20">
                  <Image priority src="/design/003.jpg" height={438} width={350} alt="mixed signals" className="w-full sm:w-auto sm:h-auto"/>
                  <div className="flex flex-row justify-between mt-3 w-full">
                    <p className="text-start font-aeonik-bold text-sm tracking-tight">ATLANTA TYPOGRAPHY</p>
                    <p className="text-start font-aeonik-thin text-sm tracking-tight ml-2">2020</p>
                  </div>
                </div>
                <div className="flex flex-col pb-20 md:pb-0 md:mt-40 md:mb-[420px]">
                  <Image priority src="/design/sxShirtMockup.png" width={600} height={400} alt="sxShirt" className="w-full sm:w-auto sm:h-auto"/>
                  <div className="flex flex-row justify-between mt-3 w-full">
                    <p className="text-start font-aeonik-bold text-sm tracking-tight">SX GEORGIA TECH GRAPHIC T-SHIRT</p>
                    <p className="text-start font-aeonik-thin text-sm tracking-tight ml-2">2022</p>
                  </div>
                </div>
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