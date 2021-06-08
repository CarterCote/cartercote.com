import styled from "styled-components";
import { Section } from "./Layout";

// Projects layout section
const ProjectLayout = styled.div`
  margin-top: 50px;
  text-align: left;
  display: block;
`;

// Projects interior section
const ProjectsSection = styled(Section)`
  h3 {
    font-size: 30px;
    font-family: "Bluu", serif;
    letter-spacing: -0.4px;
    line-height: 1.25em;
    margin-bottom: 15px;
  }

  p {
    font-size: 17px;
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.3px;
    line-height: 24px;
    margin: 0px;
    color: ${(props) => props.theme.text.light};
  }
`;

// Project showcase section
const ProjectShowcase = styled(Section)`
  margin-top: 20px;
`;

// Project item
const Project = styled.a`
  display: inline-block;
  width: calc(50% - 40px);
  border: 5px solid transparent;
  min-width: 400px;
  border-radius: 13px;
  margin: 15px 30px 15px 0px;
  transition: 100ms ease-in-out;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);

  div {
    width: 100%;
    display: inline-block;
    background-color: ${(props) => props.theme.header.decoration};
    color: #fff;

    :nth-child(1) {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;

      img {
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
      }
    }

    :nth-child(2) {
      width: calc(100% - 40px);
      padding: 0px 20px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      h3 {
        color: white;
        letter-spacing: -1px;
        font-family: "Bluu", serif;
        font-size: 25px;
        margin-block-start: 12.5px;
        margin-block-end: 7.5px;
      }

      p {
        font-family: "AmericaRegular", sans-serif;
        font-size: 15px;
        line-height: 20px;
        color: hsla(0, 0%, 100%, 0.84);
        letter-spacing: -0.2px;
        margin-block-start: 0px;
        margin-block-end: 20px;
      }
    }
  }

  :hover {
    transform: scale(1.05);
    border-color: ${(props) => props.theme.accent};
  }

  @media screen and (max-width: 500px) {
    min-width: 100%;
    width: 100%;
    margin-right: 0px;
  }
`;

export default function Projects() {
  return (
    <ProjectLayout>
      <ProjectsSection>
        <h3>Showcase Projects</h3>
        <p>Selected hacks that are my favorite:</p>
      </ProjectsSection>
      <ProjectShowcase>
        <Project
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <picture>
              <source srcSet="projects/cazares.png" type="image/png" />
              <img src="projects/cazares.png" alt="cazares" />
            </picture>
          </div>
          <div>
            <h3>Lorem ipsum </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Project>
        <Project
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <picture>
              <source srcSet="projects/cazares.png" type="image/jpeg" />
              <img src="projects/cazares.png" alt="cazares" />
            </picture>
          </div>
          <div>
            <h3>Lorem ipsum </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Project>
        <Project
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <picture>
              <source srcSet="projects/cazares.png" type="image/jpeg" />
              <img src="projects/cazares.png" alt="cazares" />
            </picture>
          </div>
          <div>
            <h3>Lorem ipsum </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Project>
        <Project
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <picture>
              <source srcSet="projects/cazares.png" type="image/jpeg" />
              <img src="projects/cazares.png" alt="cazares" />
            </picture>
          </div>
          <div>
            <h3>Lorem ipsum </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Project>
      </ProjectShowcase>
    </ProjectLayout>
  );
}