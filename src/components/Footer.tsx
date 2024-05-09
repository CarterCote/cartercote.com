import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

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
            © 2021 ALL RIGHTS RESERVED. — Designed and Coded by Carter Cote
        </p>
    </div>
    <footer className="fixed right-0 bottom-0 pr-7">
      <nav className="ml-auto mt-1.5">
        <ul>
          <li className="flex space-x-3.5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//www.linkedin.com/in/carter-cote"
              className="text-white text-6xl pb-2.5 transition duration-200 ease-in-out hover:text-yellow-300"
            >
              <FaLinkedin/>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//www.instagram.com/carter.cote"
              className="text-white text-6xl pb-2.5 transition duration-200 ease-in-out hover:text-yellow-300"
            >
              <FaInstagram/>
            </a>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/CarterCote"
              className="text-white text-6xl pb-2.5 transition duration-200 ease-in-out hover:text-yellow-300"
            >
              <FaGithub/>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </>
)
export default Footer