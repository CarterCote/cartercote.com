"use client";

import React from 'react';
import Image from "next/image";
import { CardSpotlight } from "@/src/components/ui/card-spotlight";

const teams = [
  {
    name: "jpmorgan",
    href: "https://www.jpmorgan.com/",
    desc: "high-volume ml pipelines, anomaly detection for 40m daily alerts"
  },
  {
    name: "overtime",
    href: "https://www.overtime.tv/",
    desc: "building the future of sport entertainment. backed by morgan stanley, blackstone, and jeff bezos."
  },
  {
    name: "creatordao",
    href: "https://www.creatordao.com/",
    desc: "enabling creators to become founders. raised $20m from a16z."
  }
];

const TeamsSection = () => {
  return (
    <div className="flex flex-col space-y-4 px-5">
      <h1 className="tracking-tight font-voyager-thin text-[21px]">teams i've been on</h1>
      <div className="flex flex-col pb-20 md:pb-0 pt-6 md:pt-0 lg:pt-0 sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full">
          {teams.map((team, index) => (
            <CardSpotlight
              key={index}
              href={team.href}
              className="flex-1 opacity-80 hover:opacity-100 transition-all duration-400 rounded-xl border border-[#ffffff33] p-4 space-y-2 bg-black h-26 md:h-40"
            >
              <div className="flex flex-row w-full justify-between items-center">
                <p className="font-aeonik-medium text-[18px]">{team.name}</p>
                <Image
                  priority
                  src="/home/iconArrowUprightWhite.png"
                  height={100}
                  width={100}
                  alt="White arrow icon"
                  className="w-3 h-3 transition-opacity duration-200 opacity-100"
                />
              </div>
              <p className="opacity-70 font-aeonik-regular text-[14px] leading-[130%]">
                {team.desc}
              </p>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
