import styled from "styled-components";
import { Section } from "./Layout";
import {
    FaTelegram,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-bottom: 16px;
`;

const FooterSection = styled(Section)`
  background-color: ${(props) => props.theme.blu};
  img {
    height: 20px;
    vertical-align: middle;
    padding-right: 10px;
    transform: translateY(-2px);
  }
  h2 {
    color: white;
    letter-spacing: -1.8px;
    font-family: "Bluu", serif;
    text-decoration: underline;
    font-size: 50px;
    margin-block-start: 80px;
    margin-block-end: 20px;
  }

  p {
    font-family: "AmericaRegular", sans-serif;
    font-size: 20px;
    line-height: 25px;
    color: hsla(0, 0%, 100%, 0.84);
    letter-spacing: -0.2px;
    margin-block-end: 15px;
  }

  a {
    color: ${(props) => props.theme.accent};
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.1px;
    line-height: 24px;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid ${(props) => props.theme.accent};
    font-size: 18px;
  }

  div:nth-child(1),
  div:nth-child(2) {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    padding-top: 40px;
  }

  div:nth-child(1) p {
    max-width: 420px;
    color: rgba(245, 249, 255, 0.84);
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.2px;
    line-height: 1.6em;
  }

  div:nth-child(1) p a {
    text-decoration: none;
    color: inherit;
    padding-bottom: 1px;
    border-bottom: 0.5px solid rgba(245, 249, 255, 0.8);
  }

  div div {
    padding-top: 0px !important;
  }

  div div:nth-child(2) ul li:nth-child(2) a {
    padding-bottom: 1px;
    border-bottom: 0.5px solid rgba(245, 249, 255, 0.8);
  }

  div:nth-child(3) {
    padding-bottom: 40px;
    margin-top: 60px;
  }

  div:nth-child(3) p {
    color: rgba(245, 249, 255, 0.84);
    font-family: "AmericaRegular", sans-serif;
    font-size: 13px;

    img {
      height: 30px;
      vertical-align: middle;
      padding-right: 10px;
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 605px) {
    h2 {
        font-size: 28px;
        letter-spacing: -0.8px;
        line-height: 36px;
      }
  
      p {
        font-size: 16px;
      }
  
      a {
        font-size: 16px;
      }
    }

    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(2) div {
      width: 100%;
    }

    div:nth-child(2) {
      padding-top: 20px;
    }

    div:nth-child(2) > div:nth-of-type(2) {
      padding-top: 20px !important;
    }
  }

  @media screen and (min-width: 606px) and (max-width: 970px) {
    div:nth-child(1),
    div:nth-child(2) {
      width: 100%;
    }

    div:nth-child(2) {
      padding-top: 30px;
    }

    div:nth-child(2) div {
      width: 35%;
    }
  }
`;

export default function Footer() {
  return (
    <>
      <FooterSection>
        <h2>👋 I’m available for freelance work, please contact me 
            <a style={{fontSize: "42px"}} href="mailto:cartercote06@gmail.com"> here</a>.
        </h2>
        <p>
        If you have a website or mobile app idea in mind, or if you're interested in my work, feel free to contact me. 
        Please be patient with inquiries! I am currently in the middle of my academic semester.
        </p>
        <a href="mailto:cartercote06@gmail.com">
            cartercote06@gmail.com
        </a>
        <div>
          <p>
          <img src="head/favicon.png" alt="Carter Cote logo" /> 
             © 2020 ALL RIGHTS RESERVED. — 
            <a href="/">Designed and Coded by Carter Cote</a>
          </p>
          <SocialIcons>
              <a href='//www.linkedin.com/in/carter-cote-960a55179/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </a>
              <a href='//www.instagram.com/carter.cote' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </a>
              <a
                href={
                  '//www.youtube.com/channel/UCo-DJjksl3U0kizae-nDERw'
                }
                rel='noopener noreferrer'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </a>
              <a href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </a>
              <a href='//t.me/cartercote' target='_blank' aria-label='LinkedIn'>
                <FaTelegram />
              </a>
            </SocialIcons>
        </div>
      </FooterSection>
    </>
  );
}