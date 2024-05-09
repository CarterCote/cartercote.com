import Typewriter from 'typewriter-effect'
import React, { FC } from 'react';

const Hero = () => {
  // const videoSource = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  const videoSource = "home/static.mp4";
  return (
    <div className="relative h-full overflow-hidden">
      <div className='relative overflow-hidden'>
        <video
          className='absolute top-0 left-0 min-w-full min-h-full object-cover'
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video-id" >
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 text-white bg-black bg-opacity-10 w-1000 h-full justify-center items-center px-[calc((100%-1000px)/2)] mb-250 flex flex-row">
          <div className="max-w-700 inline-block py-15 transform -translate-y-130">
            <h1 className="text-white text-62 underline leading-20 font-serif mb-50 pb-20 max-w-700">
              <span className="pr-15 text-25 inline-block">➤  </span>Hi, I'm Carter.
            </h1>
            <p className="font-sans-serif tracking-tight leading-26 text-18 m-0 text-white pb-20">
              I'm 19, and I study AI, human-computer interaction, 
              + industrial design at Georgia Tech. I utilize design 
              thinking + computing to create disruptive systems that 
              yield a more equitable future and expand opportunity.
            </p>
            <span className="font-sans-serif font-bold text-1.25rem tracking-normal leading-24 mb-6 text-white">NOW DEVELOPING: ⪼
              <a href="https://www.aochelpinghand.org" target="_blank" rel="noopener noreferrer" className="text-white transition-200ms">
                career exploration programs
              </a>
              ,{" "}
              <a href="https://cartercote.com/designs" target="_blank" rel="noopener noreferrer" className="text-white transition-200ms">
                graphics
              </a>
              ,{" "}
              <a href="https://hexlabs.org" target="_blank" rel="noopener noreferrer" className="text-white transition-200ms">
                hack-a-thons
              </a>
              ,{" "}
              <a href="https://startup.exchange" target="_blank" rel="noopener noreferrer" className="text-white transition-200ms">
                startup communities
              </a>
            </span>
            <br />
            <button onClick={scrollToProjs} className="bg-transparent text-white mt-20 mr-20 px-36 py-10 border border-white rounded-12 font-sans-serif font-bold text-1rem transition-all duration-300 cursor-pointer">
              MY WORK
            </button>
            <button onClick={scrollToAbout} className="bg-transparent text-white mt-20 mr-20 px-36 py-10 border border-white rounded-12 font-sans-serif font-bold text-1rem transition-all duration-300 cursor-pointer">
              ABOUT ME
            </button>
          </div>
          <div className="relative transform -translate-y-400">
            <picture>
              <source srcSet="head/MYMIND.png" type="image/png" />
              <img src="head/MYMIND.png" alt="Carter Cote" className="w-650 absolute top-50 left-0" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;