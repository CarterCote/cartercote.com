import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';
import NextImage from "next/image";
import Link from 'next/link';
import { drukWide } from "../../app/fonts";
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Play = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen min-w-screen flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-20 items-start justify-center gap-y-4 ">
          <div className="flex flex-col px-8 space-x-4">
            <div
              className="flex flex-col w-full align-center justify-center space-y-4 items-start">
              <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
                <p>← BACK TO HOME </p>
              </Link>
              <p>PLAY </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Play;