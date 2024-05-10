"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const navLinks = [
  {
    text: "PROJECTS",
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
        <header className="backdrop-blur-lg z-50 w-full flex items-center justify-between h-20 px-12 text-gray-700">
          <NextLink href={"/"}>
            <picture>
              <source srcSet="/head/logo.png" media="(min-width: 600px)" height="48" width="48" />
              <NextImage src="/head/logo.png" width="36" height="36" alt="Carter Cote" />
            </picture>
          </NextLink>
          <nav className="absolute right-0" ref={navRef}>
            {minimal ? null : (
              <>
                {navLinks.map((link) => (
                  <NextLink
                    className="text-center no-underline text-base tracking-tighter font-sans"
                    href={link.link}
                    key={`${link.link} + ${link.text}`}
                  >
                    {link.text}
                  </NextLink>
                ))}

                <a
                  href="https://discord.gg/hKbvHAHvvU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center no-underline text-base tracking-tighter font-sans"
                  >
                  Discord
                </a>
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
