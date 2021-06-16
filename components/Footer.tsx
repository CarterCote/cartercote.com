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
    color: white;
    letter-spacing: -1.8px;
    font-family: "DrukWide", serif;
    font-size: 36px;
    margin-block-start: 80px;
    margin-block-end: 20px;
  }
  div:nth-child(1) {
    flex: 2;
    width: calc(100% - 400px);
  }
  div:nth-child(2) {
    flex: 1;
    width: 325px;
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
// const FooterSection = styled(Section)`
//   background-color: ${(props) => props.theme.blu};
//   h2 {
//     color: white;
//     letter-spacing: -1.8px;
//     font-family: "DrukWide", serif;
//     font-size: 36px;
//     margin-block-start: 80px;
//     margin-block-end: 20px;
//   }

//   p {
//     font-family: "GraebenbachMonoRegular", sans-serif;
//     font-size: 18px;
//     line-height: 25px;
//     color: #fff;
//     letter-spacing: -0.8px;
//     margin-block-end: 15px;
//   }

//   a {
//     color: ${(props) => props.theme.accent};
//     font-family: "DrukWide", sans-serif;
//     letter-spacing: -0.1px;
//     line-height: 24px;
//     text-decoration: none;
//     padding-bottom: 2px;
//     border-bottom: 1px solid ${(props) => props.theme.accent};
//     font-size: 18px;
//   }

//   div:nth-child(1) {
//     flex: 2;
//     width: calc(100% - 400px);
//   }

//   div:nth-child(2) {
//     flex: 1;
//     width: 325px;
//     padding-left: 75px;
//   }

//   div:nth-child(1) p {
//     max-width: 520px;
//     font-family: "GraebenbachMonoRegular", sans-serif;
//     letter-spacing: -0.2px;
//     line-height: 1.6em;
//   }

//   div:nth-child(1) p a {
//     text-decoration: none;
//     color: inherit;
//     padding-bottom: 1px;
//     border-bottom: 0.5px solid rgba(245, 249, 255, 0.8);
//   }

//   @media screen and (max-width: 605px) {
//     h2 {
//         font-size: 28px;
//         letter-spacing: -0.8px;
//         line-height: 36px;
//       }
  
//       p {
//         font-size: 16px;
//       }
  
//       a {
//         font-size: 16px;
//       }
//     }

//     div:nth-child(1),
//     div:nth-child(2),
//     div:nth-child(2) div {
//       width: 100%;
//     }

//     div:nth-child(2) {
//       padding-top: 20px;
//     }

//     div:nth-child(2) > div:nth-of-type(2) {
//       padding-top: 20px !important;
//     }
//   }

//   @media screen and (min-width: 606px) and (max-width: 970px) {
//     div:nth-child(1),
//     div:nth-child(2) {
//       width: 100%;
//     }

//     div:nth-child(2) {
//       padding-top: 30px;
//     }

//     div:nth-child(2) div {
//       width: 35%;
//     }
//   }
// `;

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
      <FooterSection>
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
      <div>

      </div>
          {/* <SocialIcons>
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
            </SocialIcons> */}
      </FooterSection>
      <FooterSection style={{marginTop: "0px"}}>
      <p style={{fontFamily: "GraebenbachMonoMedium"}}>
          {/* <img class="logo" src="head/favicon.png" alt="Carter Cote logo" />  */}
             © 2021 ALL RIGHTS RESERVED. — Designed and Coded by Carter Cote
          </p>
      </FooterSection>
    </>
  );
}