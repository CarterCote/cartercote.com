"use client";

import React from 'react';
import Button from '../Button';
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import posthog from 'posthog-js';

const handleProjButtonClick = () => {
  if (typeof window !== "undefined") {
    posthog.capture('viewProjectsClicked', { property: 'value' });
  }
};

const CTASection = () => {
  return (
    <div className="flex flex-col space-y-4 px-5">
      <h1 className="tracking-tight font-voyager-thin text-[21px]">see more</h1>
      <div className="flex flex-col pb-20 md:pb-0 pt-6 md:pt-0 lg:pt-0 sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
        <HoverBorderGradient
          containerClassName="rounded-xl w-full text-center md:text-left sm:w-auto"
          link="/work"
          as="button"
          className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2"
          onClick={() => handleProjButtonClick()}
        >
          <p className="font-graebenbach-mono-regular">VIEW PROJECTS</p>
        </HoverBorderGradient>
        <Button
          text="ABOUT ME"
          link="/about"
          className="w-full text-center md:text-left sm:w-auto"
          event={`'aboutClicked', {property: 'value'}`}
        />
      </div>
    </div>
  );
};

export default CTASection;
