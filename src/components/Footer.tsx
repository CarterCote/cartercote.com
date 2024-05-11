import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => (
  <>
    <div className="p-8">
        <p className="font-mono mb-0.5">
            LET'S BUILD TOGETHER?
        </p>
        <Link href="mailto:chcote@stanford.edu" passHref>
        <p className="font-aeonik-regular mb-5 transition duration-200 hover:text-blue-600">
            chcote@stanford.edu
        </p>
        </Link>
    </div>
    <footer className="fixed right-8 bottom-8 flex flex-col items-end">
      <nav className="ml-auto mt-1.5">
        <div className="flex flex-col space-y-3.5">
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
      </nav>
    </footer>
  </>
)
export default Footer