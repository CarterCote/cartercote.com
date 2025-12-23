"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';
import GlassSurface from "./ui/GlassSurface";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, { api_host: 'https://us.i.posthog.com' });
}

const handleNavClick = (linkText: string) => {
  if (typeof window !== "undefined") {
    posthog.capture('navClicked', {
      page: linkText,
    });
  }
};


export const navLinks = [
  {
    text: "HOME",
    link: "/",
  },
  {
    text: "WORK",
    link: "/work",
  },
  {
    text: "STUFF",
    link: "/stuff",
  },
  {
    text: "ABOUT",
    link: "/about",
  },
];

const Navbar = ({ minimal }: { minimal?: boolean }) => {
  const pathname = usePathname();

  const getActiveIndex = () => {
    if (!pathname) return -1;
    const index = navLinks.findIndex((link) => {
      if (link.link.startsWith('http')) return false;
      if (link.link === '/') return pathname === '/';
      return pathname === link.link || pathname.startsWith(link.link + '/');
    });
    return index >= 0 ? index : -1;
  };

  const activeIndex = getActiveIndex();

  return (
    <header className="z-50 fixed top-0 left-0 right-0 flex items-center justify-center pt-6">
      <GlassSurface
        width={320}
        height={40}
        borderRadius={20}
        backgroundOpacity={0.4}
        brightness={10}
        className=""
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <div className="relative flex h-full w-full items-center">
          {/* Sliding selector */}
          {activeIndex >= 0 && (
            <div
              className="absolute inset-0 rounded-[16px] bg-white/20 transition-all duration-300 ease-in-out"
              style={{
                width: `${100 / navLinks.length}%`,
                left: `${activeIndex * (100 / navLinks.length)}%`,
              }}
            />
          )}
          {/* Nav links */}
          {navLinks.map((link, index) => (
            <Link
              className={`relative z-10 flex-1 text-center py-2 text-sm font-graebenbach-mono-regular transition-colors no-underline ${
                activeIndex === index
                  ? "text-white"
                  : "text-[#ffffff80] hover:text-white"
              }`}
              href={link.link}
              key={`${link.link} + ${link.text}`}
              onClick={() => handleNavClick(link.text)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </GlassSurface>
    </header>
  );
};
export default Navbar;
