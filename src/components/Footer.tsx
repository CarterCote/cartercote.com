import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => (
  <>
    <footer className="flex flex-col px-8 lg:px-24 pb-5 lg:pb-10 items-start">
      <div className="flex flex-col gap-y-[0] w-full">
        <h1 className="tracking-tight font-aeonik-bold text-[29px] md:text-[108px] leading-[110%]">LET'S BUILD.</h1>
        <div className="flex justify-between px-4 md:px-10 w-full">
          <h1 className="tracking-tight font-aeonik-bold text-[29px] md:text-[108px] leading-[70%]">CONNECT</h1>
          <h1 className="tracking-tight font-aeonik-bold text-[29px] md:text-[108px] leading-[70%]">WITH ME</h1>
        </div>
        <div className="flex flex-row justify-between pt-4 md:pt-8">
          <div className="flex flex-row gap-4 md:gap-8">
            <Link href="https://twitter.com/cartercote_" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <FaXTwitter className="text-[40px] md:text-[80px]" />
            </Link>
            <Link href="https://github.com/cartercote" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <FaGithub className="text-[40px] md:text-[80px]" />
            </Link>
          </div>
          <div className="flex flex-row gap-4 md:gap-8">
            <Link href="https://linkedin.com/in/carter-cote" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <FaLinkedin className="text-[40px] md:text-[80px]" />
            </Link>
            <Link href="https://instagram.com/carter.cote" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <FaInstagram className="text-[40px] md:text-[80px]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </>
)
export default Footer