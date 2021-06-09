  
import styled from "styled-components";
import { Section } from "./Layout";
import Static from "../public/video/static2.mp4";
// import Typewriter from 'typewriter-effect/dist/core';

// Intro section
const IntroSection = styled(Section)`
  margin-top: 120px;

  @media screen and (max-width: 1100px) {
    margin-top: 60px;
  }
`;

// Highlight name section
const IntroName = styled.h3`
  text-transform: uppercase;
  font-family: "AmericaMono", sans-serif;
  color: ${(props) => props.theme.accent};
  font-size: 20px;
  letter-spacing: 2.2px;
  line-height: 40px;
  margin-block-end: 0px;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 1.5px;
  }
`;

// Large header section
const IntroHeading = styled.h1`
  color: ${(props) => props.theme.header.main};
  font-size: 61px;
  letter-spacing: -1.8px;
  line-height: 80px;
  font-family: "Bluu", serif;
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.header.decoration};
  margin: 0px 0px 55px 0px;
  max-width: 700px;

  @media screen and (max-width: 540px) {
    font-size: 28px;
    letter-spacing: -0.8px;
    line-height: 36px;
    margin-bottom: 47px;
  }

  @media screen and (min-width: 541px) and (max-width: 840px) {
    font-size: 48px;
    letter-spacing: -1.4px;
    line-height: 64px;
    margin-bottom: 40px;
  }
`;

// Intro subsections with details
const IntroSub = styled.div`
  max-width: 700px;
  display: inline-block;

  span {
    font-family: "AmericaMono", sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    line-height: 24px;
    margin-bottom: 6px;
    color: ${(props) => props.theme.header.main};
  }

  h2 {
    margin: 0px;
    font-size: 1.25rem;
    font-family: "Bluu", serif;
    letter-spacing: -0.2px;
    line-height: 24px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.header.main};
  }

  p {
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.3px;
    line-height: 24px;
    margin: 0px;
    color: ${(props) => props.theme.text.light};
  }

  @media screen and (max-width: 840px) {
    display: block;

    :nth-of-type(2) {
      margin-top: 37px;
    }
  }
`;

export default function Intro() {
  return (
    <IntroSection>
        {/* <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFix: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1"
            }}
        >
            <source src={Static} type="video/mp4" />
        </video> */}
      <IntroName>CARTER COTE'S DIGITAL PORTFOLIO</IntroName>
      <IntroHeading>👋Hi, I'm Carter.</IntroHeading>
      <h2 style={{textAlign: "left"}}>
            {/* <Typewriter className="sign-up"
                options={{
                strings: ["Digital Creator", "Creative Developer", "Problem Solver", "Effectuator"],
                autoStart: true,
                loop: true,
                delay: 50
                }}
            /> */}
      </h2>
      <IntroSub>
        <span>NOW DEVELOPING: ⪼
            <a
                href="https://devpost.com/348712712"
                target="_blank"
                rel="noopener noreferrer"
            >
                career exploration programs
            </a>{" "}
            ,{" "}
            <a
                href="https://devpost.com/348712712"
                target="_blank"
                rel="noopener noreferrer"
            >
                graphics
            </a>{" "}
            ,{" "}
            <a
                href="https://devpost.com/348712712"
                target="_blank"
                rel="noopener noreferrer"
            >
                hack-a-thons
            </a>{" "}
            ,{" "}
            <a
                href="https://devpost.com/348712712"
                target="_blank"
                rel="noopener noreferrer"
            >
                startup communities
            </a>{" "}
            ,{" "}
        </span>
      </IntroSub>
    </IntroSection>
  );
}