"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const navLinks = [
  {
    text: "About",
    link: "/about",
  },
  // {
  //   text: "FAQs",
  //   link: "/faqs",
  // },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "Pricing",
    link: "/pricing",
  },
  // {
  //   text: "Careers",
  //   link: "/careers",
  // },
  {
    text: "Dashboard",
    link: "/login",
  },
];

export const ctaLinks = [
  {
    text: "Discord",
    link: "https://discord.gg/hKbvHAHvvU",
  },
];

const Navbar = ({ minimal }: { minimal?: boolean }) => {

  const navRef = useRef<HTMLDivElement>(null);
  const showNavBar = () => {
    navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
  };

  return (
    <>
      <span className="fixed-header-spacer"></span>
      <div className="fixed-header-container">
        <header className="[ launch-header ]">
          <NextLink href={"/"}>
            <picture>
              <source srcSet="/sellrazeBlack.svg" media="(min-width: 600px)" height="48" width="170" />
              <NextImage src="/sellraze_mark.svg" width="36" height="36" alt="Sellraze landing page" />
            </picture>
          </NextLink>
          <nav className="[ launch-nav transofrm ] absolute right-0" ref={navRef}>
            {minimal ? null : (
              <>
                <NextLink href="/" rel="noopener noreferrer" className="[ landing-link login-nav ]">
                  Home
                </NextLink>
                {navLinks.map((link) => (
                  <NextLink
                    className="[ landing-link ] font-sans"
                    href={link.link}
                    key={`${link.link} + ${link.text}`}
                  >
                    {link.text}
                  </NextLink>
                ))}
                {ctaLinks.map((link) => (
                  <NextLink
                    className="[ button ss-large roundedfull ] rounded-full px-4 py-2"
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
                  className="[ landing-link login-nav  ] font-sans"
                >
                  Discord
                </a>
              </>
            )}
            <div onClick={showNavBar} className="[ hamburger close-navbar ] cursor-pointer">
              <IoMdClose />
            </div>
          </nav>
          <div className="[ flow-row-large full-screen]">
            <div onClick={showNavBar} className="[ hamburger ] cursor-pointer">
              <RxHamburgerMenu />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Navbar;
