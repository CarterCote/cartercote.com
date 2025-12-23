"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
    <>
      {/* Mobile Navbar - centered glass pill */}
      <motion.header
        className="z-50 fixed top-0 left-0 right-0 flex md:hidden items-center justify-center pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GlassSurface
          width={320}
          height={40}
          borderRadius={20}
          backgroundOpacity={0.15}
          brightness={15}
          blur={16}
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
      </motion.header>

      {/* Desktop Navbar - left social icons, right nav links */}
      <motion.header
        className="z-50 fixed top-0 left-0 right-0 hidden md:flex items-center justify-between px-6 lg:px-8 pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left side - Social icons */}
        <div className="flex items-center space-x-6">
          <Link
            href="https://twitter.com/cartercote_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-xl hover:text-white transition-colors"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://github.com/cartercote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-xl hover:text-white transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/carter-cote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-xl hover:text-white transition-colors"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://instagram.com/carter.cote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-xl hover:text-white transition-colors"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* Right side - Nav links */}
        <nav className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              className={`text-sm font-graebenbach-mono-regular transition-colors no-underline ${
                pathname === link.link || (link.link !== '/' && pathname?.startsWith(link.link))
                  ? "text-white"
                  : "text-[#ffffff80] hover:text-white"
              }`}
              href={link.link}
              key={`desktop-${link.link}`}
              onClick={() => handleNavClick(link.text)}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </motion.header>
    </>
  );
};
export default Navbar;
