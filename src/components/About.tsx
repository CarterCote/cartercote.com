import React, { useEffect, useState } from "react"

// // About section
// const AboutSection = styled(Section)`
//   display: flex;
//   flex-direction: row;
//   margin-top: 55px;
//   div:nth-child(1) {
//     flex: 2;
//     width: calc(100% - 400px);
//   }
//   div:nth-child(2) {
//     flex: 1;
//     width: 325px;
//     padding-left: 75px;
//   }
//   @media screen and (max-width: 1024px) {
//     flex-direction: column;
//     div:nth-child(1) {
//       order: 2;
//       width: 100%;
//       margin-top: 15px;
//     }
//     div:nth-child(2) {
//       order: 1;
//       width: 100%;
//       padding-left: 0px;
//     }
//     div p {
//       font-size: 17px !important;
//     }
//   }
//   div p {
//     font-family: "GraebenbachMonoRegular", sans-serif;
//     font-size: 19px;
//     letter-spacing: -0.2px;
//     color: ${(props) => props.theme.header.main};
//     line-height: 32px;
//   }
//   div p a {
//     color: #fff;
//     text-decoration: none;
//     padding-bottom: 2px;
//     border-bottom: 2px solid ${(props) => props.theme.accent};
//     transition: 200ms ease-in-out;
//   }
//   div p a:hover {
//     padding-bottom: 0px;
//   }
// `;

// // About section rotating image
// const AboutImage = styled.div`
//   position: relative;
//   transform: translateY(-25px);
//   img:nth-of-type(1) {
//     max-width: 350px;
//     will-change: transform, rotate;
//   }
//   picture {
//     img {
//       border-radius: 50%;
//       width: 250px;
//       box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
//       position: absolute;
//       top: 50px;
//       left: 50px;
//     }
//   }
//   @media screen and (max-width: 1024px) {
//     transform: none;
//     img:nth-of-type(1) {
//       max-width: 200px;
//     }
//     picture {
//       img {
//         width: 145px;
//         top: 27.5px;
//         left: 27.5px;
//       }
//     }
//   }
// `;

const About = () => (
  <>
    <div>
      <div>
        <p>👋Hi, I'm Carter.</p>
        <p>
        I'm a first-year student at the Georgia Institute of Technology, 
        majoring in Computer Science and minoring in Industrial Design. 
        I love coding and design, and I'm always chipping away at a side project, 
        sketching an idea in my notebook, or{" "}
          <a
            href="https://devpost.com/348712712"
            target="_blank"
            rel="noopener noreferrer"
          >
            designing cool stuff
          </a>{" "}
          .
        </p>
      </div>
      <div>
        <div>
          <picture>
            <source srcSet="about/carter.png" type="image/png" />
            <img src="about/carter.png" alt="Carter Cote" />
          </picture>
        </div>
      </div>
    </div>
  </>
)

export default About
