import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => (
  <>
    {/* <div className="p-8">
        <p className="font-mono mb-0.5">
            LET'S BUILD TOGETHER?
        </p>
        <Link href="mailto:chcote@stanford.edu" passHref>
        <p className="font-aeonik-regular mb-5 transition duration-200 hover:text-blue-600">
            chcote@stanford.edu
        </p>
        </Link>
    </div> */}
    <footer className="flex flex-col px-24 pb-10 items-start">
    <div className="flex flex-col gap-y-[0] w-full">
        <h1 className="tracking-tight font-aeonik-bold text-[108px] leading-[110%]">LET'S BUILD.</h1>
        <div className="flex justify-between px-10 w-full">
          <h1 className="tracking-tight font-aeonik-bold text-[108px] leading-[70%]">SEND ME</h1>
          <h1 className="tracking-tight font-aeonik-bold text-[108px] leading-[70%]">AN EMAIL</h1>
        </div>
        <h1 className="tracking-tight font-aeonik-bold text-[108px] text-end leading-none">CHCOTE@STANFORD.EDU</h1>
      </div>
    </footer>
  </>
)
export default Footer