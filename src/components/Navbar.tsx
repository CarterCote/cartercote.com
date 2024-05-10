"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const navLinks = [
  {
    text: "WORK",
    link: "/",
  },
  // {
  //   text: "FAQs",
  //   link: "/faqs",
  // },
  {
    text: "PLAY",
    link: "/play",
  },
  {
    text: "NOW",
    link: "/now",
  },
];

const Navbar = ({ minimal }: { minimal?: boolean }) => {

  const navRef = useRef<HTMLDivElement>(null);
  const showNavBar = () => {
    navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
  };

  return (
    <>
      <div className="fixed-header-container">
      <header className="z-50 fixed top-0 w-full flex items-center justify-between pt-7 px-12 text-gray-700">
          <NextLink href={"/"}>
            <picture>
              <source srcSet="/head/logoWhite.png" media="(min-width: 600px)" height="48" width="48" />
              <NextImage src="/head/logoWhite.png" width="36" height="36" alt="Carter Cote" />
            </picture>
          </NextLink>
          <nav className="absolute right-8 top-8 flex flex-col items-end" ref={navRef}>
            {minimal ? null : (
              <>
                {navLinks.map((link) => (
                  <NextLink
                    className="text-center no-underline text-white text-base tracking-tighter font-sans"
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
