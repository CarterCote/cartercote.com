import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link';

const Footer = () => (
  <>
    <div className="bg-blue-500 flex flex-row mt-14">
        <div className="flex-2 w-[calc(100%-400px)]">
            <div className="relative transform translate-y-18">
                <picture>
                    <source srcSet="about/profile.jpg" type="image/jpg" />
                    <img className="max-w-[450px] rounded-lg shadow-md absolute top-12 left-0" src="about/profile.jpg" alt="Carter Cote" />
                </picture>
            </div>
        </div>
    </div>
    <div className="mt-0">
        <p className="font-mono mb-5">
            {/* <img class="logo" src="head/favicon.png" alt="Carter Cote logo" />  */}
            ©Designed and built by Carter Cote
        </p>
    </div>
    <footer className="absolute right-8 bottom-8 flex flex-col items-end">
      <nav className="ml-auto mt-1.5">
        <div className="flex flex-col space-y-3.5">
        <Link href="https://twitter.com/cartercote_" passHref>
            <div className="text-white text-3xl pb-2.5 transition duration-200 ease-in-out hover:text-yellow-300">
              <FaTwitter/>
            </div>
          </Link>
          <Link href="https://github.com/CarterCote" passHref>
            <div className="text-white text-3xl pb-2.5 transition duration-200 ease-in-out hover:text-yellow-300">
              <FaGithub/>
            </div>
          </Link>
          <Link href="//www.instagram.com/carter.cote" passHref>
            <div className="text-white text-3xl pb-2.5 transition duration-200 ease-in-out hover:text-yellow-300">
              <FaInstagram/>
            </div>
          </Link>
          <Link href="//www.linkedin.com/in/carter-cote" passHref>
            <div className="text-white text-3xl pb-2.5 transition duration-200 ease-in-out hover:text-yellow-300">
              <FaLinkedin/>
            </div>
          </Link>
        </div>
      </nav>
    </footer>
  </>
)
export default Footer