import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => (
  <>
    <footer className="flex flex-col px-8 lg:px-24 pb-5 lg:pb-10 items-start">
      <div className="flex flex-col gap-y-[0] w-full">
        <h1 className="tracking-tight font-aeonik-bold text-[33px] md:text-[108px] leading-[110%]">LET'S BUILD.</h1>
        <div className="flex justify-between px-4 md:px-10 w-full">
          <h1 className="tracking-tight font-aeonik-bold text-[33px] md:text-[108px] leading-[70%]">SEND ME</h1>
          <h1 className="tracking-tight font-aeonik-bold text-[33px] md:text-[108px] leading-[70%]">AN EMAIL</h1>
        </div>
        <h1 className="tracking-tight font-aeonik-bold text-[33px] md:text-[108px] text-end leading-none">CHCOTE@STANFORD.EDU</h1>
      </div>
    </footer>
  </>
)
export default Footer