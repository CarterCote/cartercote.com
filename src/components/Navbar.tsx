"use client";

import NextImage from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

export const navLinks = [
  {
    text: "ABOUT",
    link: "/about",
  },
  // {
  //   text: "FAQs",
  //   link: "/faqs",
  // },
  {
    text: "PLAY",
    link: "/play",
  },
  // {
  //   text: "NOW",
  //   link: "/now",
  // },
];

const Navbar = ({ minimal }: { minimal?: boolean }) => {

  const navRef = useRef<HTMLDivElement>(null);
  const showNavBar = () => {
    navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
  };

  return (
    <>
      <div className="fixed-header-container">
      <header className="z-50 fixed top-0 w-full flex items-center justify-between text-gray-700">
          <Link href={"/"}>
            <p className="font-aeonik-bold tracking-tighter text-white absolute left-8 top-8 transition duration-200 ease-in-out hover:text-blue-600">CARTER COTE</p>
          </Link>
          <nav className="absolute right-8 top-8 flex flex-col items-end" ref={navRef}>
            {minimal ? null : (
              <>
                {navLinks.map((link) => (
                  <Link
                    className="text-center no-underline text-white text-base font-aeonik-thin tracking-normal"
                    href={link.link}
                    key={`${link.link} + ${link.text}`}
                  >
                    {link.text}
                  </Link>
                ))}

              </>
            )}
            <div onClick={showNavBar} className="hidden cursor-pointer">
              <IoMdClose />
            </div>
          </nav>
          <div className="">
            <div onClick={showNavBar} className="hidden cursor-pointer">
              <RxHamburgerMenu />
            </div>
          </div>
        </header>
        <div className="flex flex-col space-y-3.5 fixed right-8 bottom-8 items-end">
          <Link href="https://twitter.com/cartercote_" passHref target="_blank" rel="noopener noreferrer">
            <div className="text-white text-xl pb-2 transition duration-200 ease-in-out hover:text-blue-600">
              <FaXTwitter />
            </div>
          </Link>
          <Link href="https://github.com/CarterCote" passHref target="_blank" rel="noopener noreferrer">
            <div className="text-white text-xl pb-2 transition duration-200 ease-in-out hover:text-blue-600">
              <FaGithub/>
            </div>
          </Link>
          <Link href="//www.instagram.com/carter.cote" passHref target="_blank" rel="noopener noreferrer">
            <div className="text-white text-xl pb-2 transition duration-200 ease-in-out hover:text-blue-600">
              <FaInstagram/>
            </div>
          </Link>
          <Link href="//www.linkedin.com/in/carter-cote" passHref target="_blank" rel="noopener noreferrer">
            <div className="text-white text-xl transition duration-200 ease-in-out hover:text-blue-600">
              <FaLinkedin/>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
