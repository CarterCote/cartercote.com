import styled from "styled-components"
import { Section, Container } from "./Layout"
import Typewriter from 'typewriter-effect'
import BackgroundVid from "./BackgroundVid"

const VidContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  video {
    width: 100%;
    height: 75%;
    transform: translateY(-130px);
  }
`;
// Hero section
const HeroSection = styled(Section)`
  position: absolute;
  top: 0;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.1);
  width: 1000px;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px calc((100% - 1000px) / 2);

  
  margin-bottom: 250px;
  display: flex;
  flex-direction: row;
  div:nth-child(1) {
    padding-top: 100px;
    flex: 2;
    width: calc(100% - 400px);
  }
  div:nth-child(2) {
    flex: 1;
    width: 325px;
    padding-left: 5px;
  }

  @media screen and (max-width: 1100px) {
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
    }
    margin-top: 60px;
    margin-bottom: 120px;
  }
`;

// Highlight name section
// const HeroTopline = styled.h3`
//   text-transform: uppercase;
//   font-family: "GraebenbachMonoMedium", sans-serif;
//   color: ${(props) => props.theme.accent};
//   font-size: 20px;
//   letter-spacing: 2.2px;
//   line-height: 60px;
//   margin-block-end: 0px;

//   @media screen and (max-width: 540px) {
//     font-size: 16px;
//     line-height: 31px;
//     letter-spacing: 1.5px;
//   }
// `;

// Large header section
const HeroHeading = styled.h1`
  color: ${(props) => props.theme.header.main};
  font-size: 62px;
  text-decoration: none;
  letter-spacing: -1.8px;
  line-height: 20px;
  font-family: "DrukWide", serif;
  // margin-block-end: 0px;
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.header.decoration};
  margin: 50px 0px 0px 0px;
  padding-bottom: 20px;
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

const HeroButton = styled.button`
  background-color: transparent;
  color: #fff;
  margin-top: 20px;
  margin-right: 20px;
  padding: 10px 36px;
  border: 1px solid #fff;
  border-radius: 12px;
  font-family: "GraebenbachMonoMedium", sans-serif;
    font-style: bold;
    font-size: 1rem;
  transition: all 0.3s ease-out;
  cursor: pointer;
  :hover {
    background-color: #0d1f68;
    color: #fff;
    border: 1px solid #0d1f68;
  }
`;

// Small header section
// const HeroSubHeading = styled.h2`
//   color: ${(props) => props.theme.header.main};
//   font-size: 32px;
//   letter-spacing: -1.8px;
//   line-height: 40px;
//   font-family: "GraebenbachMonoMedium", serif;
//   text-decoration: underline;
//   text-decoration-color: ${(props) => props.theme.header.decoration};
//   margin: 0px;
//   max-width: 700px;

//   @media screen and (max-width: 540px) {
//     font-size: 28px;
//     letter-spacing: -0.8px;
//     line-height: 36px;
//     margin-bottom: 47px;
//   }

//   @media screen and (min-width: 541px) and (max-width: 840px) {
//     font-size: 48px;
//     letter-spacing: -1.4px;
//     line-height: 64px;
//     margin-bottom: 40px;
//   }
// `;

// Hero subsections with details
const HeroSub = styled.div`
  max-width: 700px;
  display: inline-block;
  padding: 15px 0px 15px 0px;
  transform: translateY(-130px);
  span {
    font-family: "GraebenbachMonoMedium", sans-serif;
    font-style: bold;
    font-size: 1.25rem;
    letter-spacing: 0px;
    line-height: 24px;
    margin-bottom: 6px;
    color: ${(props) => props.theme.header.main};
  }

  h2 {
    margin: 0px;
    font-size: 1.25rem;
    font-family: "GraebenbachMonoMedium", serif;
    letter-spacing: -0.2px;
    line-height: 24px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.header.main};
  }

  p {
    font-family: "GraebenbachMonoMedium", sans-serif;
    letter-spacing: -0.3px;
    line-height: 26px;
    font-size: 18px;
    margin: 0px;
    color: ${(props) => props.theme.text.light};
    padding-bottom: 20px;
  }
  a {
    color: #fff;
    transition: 200ms ease-in-out;

  }
  a:hover {
    font-size: 22px;
    color: #F5E022;
    // color: #023178;
  }

  @media screen and (max-width: 840px) {
    display: block;

    :nth-of-type(2) {
      margin-top: 37px;
    }
  }
`;

const HeroImage = styled.div`
  position: relative;
  transform: translateY(-400px);
  img:nth-of-type(1) {
    max-width: 550px;
    will-change: transform, rotate;
  }
  picture {
    img {
      width: 650px;
      position: absolute;
      top: 50px;
      left: 0px;
    }
  }
  @media screen and (max-width: 1024px) {
    transform: none;
    img:nth-of-type(1) {
      max-width: 200px;
    }
    picture {
      img {
        width: 145px;
        top: 27.5px;
        left: 27.5px;
      }
    }
  }
`;

function Hero() {
  // const videoSource = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  const videoSource = "home/static.mp4";
  const scrollToProjs = () => {
    const projEle = document.getElementById("proj-id");
    projEle.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToAbout = () => {
    const aboutEle = document.getElementById("about-id");
    aboutEle.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <VidContainer style={{ height: '', }} >
    <BackgroundVid
    blur={0}
    videoSource={videoSource} >
    <HeroSection>
      <HeroSub>
      {/* <HeroTopline>CARTER COTE'S DIGITAL PORTFOLIO</HeroTopline> */}
      <HeroHeading><h1 style={{fontSize: "25px", display: "inline-block", paddingRight: "15px"}}>➤  </h1>Hi, I'm Carter.</HeroHeading>
        {/* <HeroSubHeading>
                <Typewriter style={{padding: "0px"}} className="sign-up"
                    options={{
                    strings: ["Digital Creator", "Creative Developer", "Problem Solver", "Effectuator"],
                    autoStart: true,
                    loop: true,
                    delay: 50
                    }}
                />
            </HeroSubHeading> */}
        <p>
           I'm 19, and I study AI, human-computer interaction, 
           + industrial design at Georgia Tech. I utilize design 
           thinking + computing to create disruptive systems that 
           yield a more equitable future and expand opportunity.
         </p>
        <span>NOW DEVELOPING: ⪼
          <a
                href="https://www.aochelpinghand.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                career exploration programs
            </a>
            ,{" "}
            <a
                href="https://cartercote.com/designs"
                target="_blank"
                rel="noopener noreferrer"
            >
                graphics
            </a>
            ,{" "}
            <a
                href="https://hexlabs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                hack-a-thons
            </a>
            ,{" "}
            <a
                href="https://startup.exchange"
                target="_blank"
                rel="noopener noreferrer"
            >
                startup communities
            </a>
        </span>
        <br />
        <HeroButton onClick={scrollToProjs}>
          MY WORK
        </HeroButton>
        <HeroButton onClick={scrollToAbout}>
          ABOUT ME
        </HeroButton>
        </HeroSub>
      <div>
        <HeroImage>
           <picture>
             <source srcSet="head/MYMIND.png" type="image/png" />
             <img src="head/MYMIND.png" alt="Carter Cote" />
           </picture>
         </HeroImage>
      </div>
    </HeroSection>
      </BackgroundVid>
    </VidContainer>
  );
}
export default Hero