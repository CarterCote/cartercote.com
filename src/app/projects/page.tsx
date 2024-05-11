import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { drukWide } from "../fonts";
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen min-w-screen flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-20 items-start justify-center text-6xl font-bold gap-y-4 ">
          <div
            className="flex flex-col w-full align-center justify-center space-y-4 items-start grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
              <p>← BACK TO HOME </p>
            </Link>
          </div>
          <div
            className="flex flex-col w-full align-center justify-center space-y-4 items-start">
              <div className="w-full border-b border-gray-400 mb-10">
                <p className="font-aeonik-thin tracking-widest text-[18px] mb-3">PROJECTS</p>
              </div>
            <Link href="/" className="w-full flex flex-row space-x-5 font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
              <div className="flex flex-row" style={{ width: '50%', height: 'auto' }}>
                <NextImage
                  priority
                  src="/projects/gpa.jpg"
                  height={660}
                  width={570}
                  alt="Descriptive Text"
                />
              </div>
              <div className="w-1/2">
                  <h1 className="font-aeonik-bold italic">SellRaze</h1><span className="font-aeonik-thin"> | </span>
                  <h1>Founding Designer</h1>
                  <p>Using AI to detect the value of your inventory, and sell it at record speeds.</p>
                </div>
            </Link>
            <div className="w-full border-b border-gray-400 pt-10">
              <p className="font-aeonik-thin tracking-widest text-[18px] mb-3">ARCHIVES</p>
            </div>
            <div className="w-full border-b border-gray-400 pt-10">
              <p className="font-voyager-thin tracking-tight text-[36px] mb-3">Mr. Georgia Tech Semifinalist</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Projects;

// Sellraze
// Crayo
// Musicfy
// Pathways
// Six Feet Supplies
// Startup Exchange

// Honorable Mentions
// flightCooked
// bedtimeStories
