"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import posthog from 'posthog-js';

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"

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

const handleSocialClick = (socialName: string, mobile: boolean = false) => {
  if (typeof window !== "undefined") {
    posthog.capture(mobile ? 'mobileSocialClicked' : 'socialClicked', {
      social: socialName,
    });
  }
};


export const navLinks = [
  {
    text: "ABOUT",
    link: "/about",
  },
  {
    text: "WORK",
    link: "/projects",
  },
  {
    text: "RESUME",
    link: "https://drive.google.com/file/d/1c638lNFs7AV_DTpqG5BoiMFrh5O7S0oI/view?usp=sharing",
  },
  {
    text: "PLAY",
    link: "/play",
  },
];

const Navbar = ({ minimal }: { minimal?: boolean }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
  
    if (typeof window !== 'undefined') {
      if (isOpen) {
        window.addEventListener('click', handleClickOutside);
      }
  
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpen]);
  
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed-header-container">
        <header className="z-50 fixed top-0 w-full flex items-center justify-between">
            <Link href={"/"}>
              <p className="font-aeonik-bold text-[21px] md:text-[18px] tracking-tighter text-white absolute left-8 top-8 transition duration-200 ease-in-out hover:text-white">CARTER COTE</p>
            </Link>
            {isMobile ? (
              <>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <div ref={hamburgerRef}>
                      <RxHamburgerMenu
                        className="absolute right-9 top-9 text-white text-[21px] cursor-pointer"
                        onClick={toggleNavBar}
                      />
                    </div>
                  </SheetTrigger>
                  <SheetContent
                  side="top"
                  ref={navRef}
                  className="bg-[#111111] border-none"
                  >
                    <div className="grid gap-4 p-6">
                      {navLinks.map((link) => (
                        <Link
                          className="text-start no-underline text-white text-[32px] font-graebenbach-mono-regular transition duration-200 ease-in-out hover:text-white tracking-normal"
                          href={link.link}
                          key={`${link.link} + ${link.text}`}
                          onClick={() => {
                            setIsOpen(false);
                            posthog.capture('mobileNavClicked', {
                              page: link.text,
                            });
                          }}
                        >
                          {link.text}
                        </Link>
                      ))}
                      <div className="flex flex-row space-x-4 pt-4 items-start">
                        <Link href="https://twitter.com/cartercote_" passHref target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Twitter', true)}>
                          <div className="text-white text-2xl pb-2 transition duration-200 ease-in-out hover:text-white">
                            <FaXTwitter />
                          </div>
                        </Link>
                        <Link href="https://github.com/CarterCote" passHref target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('GitHub', true)}>
                          <div className="text-white text-2xl pb-2 transition duration-200 ease-in-out hover:text-white">
                            <FaGithub/>
                          </div>
                        </Link>
                        <Link href="//www.instagram.com/carter.cote" passHref target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Instagram', true)}>
                          <div className="text-white text-2xl pb-2 transition duration-200 ease-in-out hover:text-white">
                            <FaInstagram/>
                          </div>
                        </Link>
                        <Link href="//www.linkedin.com/in/carter-cote" passHref target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('LinkedIn', true)}>
                          <div className="text-white text-2xl transition duration-200 ease-in-out hover:text-white">
                            <FaLinkedin/>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            ) : (
              <nav className="absolute right-8 top-8 flex flex-col items-end" ref={navRef}>
                {navLinks.map((link) => (
                  <Link
                    className="text-center no-underline text-[#ffffff80] text-base font-graebenbach-mono-regular transition duration-200 ease-in-out hover:text-white tracking-normal"
                    href={link.link}
                    key={`${link.link} + ${link.text}`}
                    onClick={() => handleNavClick(link.text)}
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            )}
          </header>
        {isMobile ? null : (
          <div className="flex flex-col space-y-3.5 fixed right-8 bottom-8 items-end">
            <Link href="https://twitter.com/cartercote_" passHref target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Twitter', false)}>
              <div className="text-[#ffffff80] text-xl pb-2 transition duration-200 ease-in-out hover:text-white">
                <FaXTwitter />
              </div>
            </Link>
            <Link href="https://github.com/CarterCote" passHref target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('GitHub', false)}>
              <div className="text-[#ffffff80] text-xl pb-2 transition duration-200 ease-in-out hover:text-white">
                <FaGithub/>
              </div>
            </Link>
            <Link href="//www.instagram.com/carter.cote" passHref target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('Instagram', false)}>
              <div className="text-[#ffffff80] text-xl pb-2 transition duration-200 ease-in-out hover:text-white">
                <FaInstagram/>
              </div>
            </Link>
            <Link href="//www.linkedin.com/in/carter-cote" passHref target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('LinkedIn', false)}>
              <div className="text-[#ffffff80] text-xl transition duration-200 ease-in-out hover:text-white">
                <FaLinkedin/>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
