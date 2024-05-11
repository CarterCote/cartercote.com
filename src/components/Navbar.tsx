"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

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
          <NextLink href={"/"}>
            <p className="font-aeonik-bold tracking-tighter text-white absolute left-8 top-8 transition duration-200 ease-in-out hover:text-blue-600">CARTER COTE</p>
          </NextLink>
          <nav className="absolute right-8 top-8 flex flex-col items-end" ref={navRef}>
            {minimal ? null : (
              <>
                {navLinks.map((link) => (
                  <NextLink
                    className="text-center no-underline text-white text-base font-aeonik-thin tracking-normal"
                    href={link.link}
                    key={`${link.link} + ${link.text}`}
                  >
                    {link.text}
                  </NextLink>
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
      </div>
    </>
  );
};
export default Navbar;
