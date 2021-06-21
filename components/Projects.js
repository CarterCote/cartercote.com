// Lol failed attempt at dynamically mapping data. Fml
import React, { useContext } from 'react';

import ProjectContext from '../Projects.Context';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 880px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const ProjectTitle = styled.h1`
  font-family: DrukWide;
  margin-bottom: 30px;
  margin-top: 0;
  color: #fff;
`;

const ProjectListContainer = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 880px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Projects = () => {
  const projects = useContext(ProjectContext).sort(
    (a, b) => new Date(b.document.data.date).getTime() - new Date(a.document.data.date).getTime()
  )

  return (
    <>
      <ProjectContainer>
        <ProjectTitle>Recent works</ProjectTitle>
        <ProjectListContainer>
          {projects && projects.map((p, i) => <ProjectCard key={p.slug} index={i} {...p} />)}
        </ProjectListContainer>
      </ProjectContainer>
    </>
  );
}
export default Projects

// import styled from "styled-components";
// import { Section } from "../Layout";

// // Projects layout section
// const ProjectLayout = styled.div`
//   margin-top: 80px;
//   text-align: left;
//   display: block;
// `;

// // Projects interior section
// const ProjectsSection = styled(Section)`
//   h3 {
//     font-size: 30px;
//     font-family: "DrukWide", serif;
//     letter-spacing: -0.4px;
//     line-height: 1.25em;
//     margin-bottom: 15px;
//   }

//   p {
//     font-size: 17px;
//     font-family: "GraebenbachMonoMedium", sans-serif;
//     letter-spacing: -0.3px;
//     line-height: 24px;
//     margin: 0px;
//     color: ${(props) => props.theme.text.light};
//   }
// `;

// // Project showcase section
// const ProjectShowcase = styled(Section)`
//   p {
//     font-size: 17px;
//     font-family: "GraebenbachMonoMedium", sans-serif;
//     letter-spacing: -0.3px;
//     line-height: 24px;
//     margin: 0px;
//     color: ${(props) => props.theme.text.light};
//   }
//   margin-top: 90px;
// `;

// // Project item
// const Project = styled.a`
//   display: inline-block;
//   width: calc(50% - 40px);
//   border: 5px solid transparent;
//   min-width: 400px;
//   border-radius: 13px;
//   margin: 15px 30px 15px 0px;
//   transition: 100ms ease-in-out;
//   -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
//   -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
//   box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);

//   div {
//     width: 100%;
//     display: inline-block;
//     background-color: ${(props) => props.theme.header.decoration};
//     color: #fff;

//     :nth-child(1) {
//       border-top-left-radius: 12px;
//       border-top-right-radius: 12px;

//       img {
//         width: 100%;
//         border-top-left-radius: 7px;
//         border-top-right-radius: 7px;
//       }
//     }

//     :nth-child(2) {
//       width: calc(100% - 40px);
//       padding: 0px 20px;
//       border-bottom-left-radius: 10px;
//       border-bottom-right-radius: 10px;

//       h3 {
//         color: white;
//         letter-spacing: -1px;
//         font-family: "DrukWide", serif;
//         font-size: 25px;
//         margin-block-start: 12.5px;
//         margin-block-end: 7.5px;
//       }

//       p {
//         font-family: "GraebenbachMonoMedium", sans-serif;
//         font-size: 15px;
//         font-style: bold;
//         line-height: 20px;
//         color: hsla(0, 0%, 100%, 0.84);
//         letter-spacing: -0.2px;
//         margin-block-start: 0px;
//         margin-block-end: 20px;
//       }
//       span {
//         font-family: "GraebenbachMonoMedium", sans-serif;
//         font-size: 1rem;
//         font-color: #0c0c0c;
//         letter-spacing: -0.8px;
//         line-height: 32px;
//         margin-bottom: 6px;
//         color: ${(props) => props.theme.header.main};
//       }
//     }
//   }

//   :hover {
//     transform: scale(1.05);
//     border-color: ${(props) => props.theme.accent};
//   }

//   @media screen and (max-width: 500px) {
//     min-width: 100%;
//     width: 100%;
//     margin-right: 0px;
//   }
// `;

// export default function Projects() {
//   return (
//     <ProjectLayout>
//       <ProjectsSection>
//       </ProjectsSection>
//       <ProjectShowcase>
//         <p>WELCOME TO MY PLAYGROUND</p>
//         <Project
//           href="https://google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <div>
//             <picture>
//               <source srcSet="projects/cazares.png" type="image/png" />
//               <img src="projects/cazares.png" alt="cazares" />
//             </picture>
//           </div>
//           <div>
//             <h3>AOC's Helping Hand</h3>
//             <span>UX & VISUAL DESIGN • STUDENT PROGRAM • 2019-20</span>
//             <p>
//             College readiness elective class & web platform that offers career exploration tools & alumni networking. Curated curriculum with alma matter HS for class. Created user journey within 9 different pathways for students to explore alumni career journeys known as "roadmaps."...more


//             </p>
//           </div>
//         </Project>
//         <Project
//           href="https://google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <div>
//             <picture>
//               <source srcSet="projects/cazares.png" type="image/jpeg" />
//               <img src="projects/cazares.png" alt="cazares" />
//             </picture>
//           </div>
//           <div>
//             <h3>Six Feet Supplies</h3>
//             <span>UX DESIGN SPRINT • NONPROFIT • 2020</span>
//             <p>
//             Designing a web app for a student non-profit that delivers groceries to at-risk individuals, all at zero-cost. Over 17,000+ visitors and 500 deliveries for over $50K worth of groceries. As a member of the director board, I also contributed to the expansion and operation of the nonprofit.


//             </p>
//           </div>
//         </Project>
//         <Project
//           href="https://google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <div>
//             <picture>
//               <source srcSet="projects/cazares.png" type="image/jpeg" />
//               <img src="projects/cazares.png" alt="cazares" />
//             </picture>
//           </div>
//           <div>
//             <h3>Startup Exchange</h3>
//             <span>UX & VISUAL DESIGN • STUDENT ORG • 2021</span>
//             <p>
//             Rebranded organization's brand identity, including typography, colors, and organization's mission. 
//             Created new user flows and modified site's information architecture. 
//             Designed new website UI via Figma and new marketable assets via Photoshop.
//             </p>
//           </div>
//         </Project>
//         <Project
//           href="https://google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <div>
//             <picture>
//               <source srcSet="projects/cazares.png" type="image/jpeg" />
//               <img src="projects/cazares.png" alt="cazares" />
//             </picture>
//           </div>
//           <div>
//             <h3>Global Prep Academy</h3>
//             <span>UX DESIGN & INSTRUCTION • FREELANCE • 2020</span>
//             <p>
//             ​Redesigning the user journey, UX/UI, rebuilt information architecture of web app to improve transparency of after school program that educates students to properly navigate our rapidly-changing economy. Net 30% online customer engagement.
//             </p>
//           </div>
//         </Project>
//       </ProjectShowcase>
//     </ProjectLayout>
//   );
// }