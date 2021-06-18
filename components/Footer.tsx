import styled from "styled-components";
import { Section } from "./Layout";
import {
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
// import dribbbleLogo from 'head/logo.png';
// import githubLogo from 'head/logo.png';
// import twitterLogo from 'head/logo.png';

const FooterSocials = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  padding-right: 30px;
  a {
    color: #fff;
    font-size: 24px;
    padding-bottom: 10px;
    transition: 200ms ease-in-out;
  }
  a:hover {
    color: #F5E022;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const NavSocials = styled.nav`
  margin-left: auto;
  margin-top: 6px;
  li {
  list-style: none;
  }

  li a + a {
    margin-left: 14px;
  }

  li a {
    margin-left: 14px;
    display: flex;
  }

  li a img {
    width: 20px;
    opacity: 0.4;
    transition: opacity ease-in 0.2s;
  }

  li a:hover img,
  li a:active img {
    opacity: 0.8;
  }
`;

const FooterInfoSection = styled(Section)`
  background-color: ${(props) => props.theme.blu};
  display: flex;
  flex-direction: row;
  margin-top: 55px;
  .logo {
    height: 20px;
    vertical-align: middle;
    padding-right: 10px;
    transform: translateY(-2px);
  }
  h2 {
    color: #fff;
    letter-spacing: -1px;
    font-family: "DrukWide", serif;
    font-size: 36px;
    margin-block-start: 80px;
    margin-block-end: 20px;
  }
  p {
    color: #fff;
  }
  div:nth-child(1) {
    flex: 2;
    width: calc(100% - 400px);
  }
  div:nth-child(2) {
    flex: 1;
    width: 225px;
    padding-left: 75px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    div:nth-child(1) {
      order: 2;
      width: 100%;
      margin-top: 15px;
    }
    div:nth-child(2) {
      order: 1;
      width: 100%;
      padding-left: 0px;
      padding-bottom: 370px;
    }
    div p {
      font-size: 17px !important;
    }
  }
  div p {
    font-family: "GraebenbachMonoRegular", sans-serif;
    font-size: 19px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.header.main};
    line-height: 32px;
  }
  div p a {
    color: #fff;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 2px solid ${(props) => props.theme.accent};
    transition: 200ms ease-in-out;
  }
  div p a:hover {
    padding-bottom: 0px;
  }
`;
const FooterImage = styled.div`
  position: relative;
  transform: translateY(75px);
  img:nth-of-type(1) {
    max-width: 450px;
    will-change: transform, rotate;
  }
  picture {
    img {
      border-radius: 5px;
      width: 550px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50px;
      left: 0px;
    }
  }
  @media screen and (max-width: 1024px) {
    transform: none;
    img:nth-of-type(1) {
      max-width: 400px;
    }
    picture {
      img {
        width: 345px;
        top: 27.5px;
        left: 0px;
      }
    }
  }
`;

export default function Footer() {
  return (
    <>
      <FooterInfoSection>
        <div>
          <h2>Currently, I'm a CS and Industrial Design student at Georgia Tech.  
          </h2>
          <p>
          Hi, I'm Carter. I started my design journey by developing video game textures and making videos about them on the internet. 
          That led to over 2 million downloads of my work, in addition to over 1.5 million views of my YouTube videos.
          </p>
          <p>
          Now, I’m a creative developer and designer who enjoys pro bono work. I never leave things half-done, and I obsess over the details.
          I like problem-solving in a creative, value-oriented way. I don’t try to change THE world, but I constantly strive to change A world.
          </p>
          <p>
          I believe in spreading opportunity for all, and accounting for those that are forgotten or silenced. 
          I hope to develop innovative products in an altruistic, ethical way that allows me to utilize my creativity and to help others.
          </p>
        </div>

          <div>
        <FooterImage>
          <picture>
            <source srcSet="about/profile.jpg" type="image/jpg" />
            <img src="about/profile.jpg" alt="Carter Cote" />
          </picture>
        </FooterImage>
      </div>
      </FooterInfoSection>
      <FooterInfoSection style={{marginTop: "0px"}}>
      <p style={{fontFamily: "GraebenbachMonoMedium"}}>
          {/* <img class="logo" src="head/favicon.png" alt="Carter Cote logo" />  */}
             © 2021 ALL RIGHTS RESERVED. — Designed and Coded by Carter Cote
          </p>
      </FooterInfoSection>
      <FooterSocials>
        <NavSocials>
          <ul>
            <li >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//www.linkedin.com/in/carter-cote"
              >
                <FaLinkedin/>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//www.instagram.com/carter.cote"
              >
                <FaInstagram/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/wunnle">
                <FaGithub/>
              </a>
            </li>
          </ul>
        </NavSocials>
      </FooterSocials>
    </>
  );
}