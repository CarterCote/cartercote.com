"use client";

import React, { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const videoElement = videoRef.current;

    const handleCanPlay = () => {
      if (videoElement) {
        videoElement.play().catch((error) => {
          console.warn('Video autoplay was prevented:', error);
        });
      }
    };

    if (videoElement) {
      videoElement.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  const blur = 5;
  const videoSource = "home/static.mp4";

  return (
    <div className="z-[-1] w-full h-full bg-black flex items-center justify-center fixed inset-0">
      {isMounted && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay
          loop
          muted
          playsInline
          id="video-id"
          ref={videoRef}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoBackground;
