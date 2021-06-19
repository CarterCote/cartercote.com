// Initial setup
import React from "react"
import App from "next/app"

// Styled components & context
import { createGlobalStyle } from "styled-components"
import getProjects from "../getProjects";
import ProjectContext from '../Projects.Context'

// Global styling
const GlobalStyle = createGlobalStyle`
  /* Custom fonts */
  @font-face {
    font-family: 'DrukWide';
    src: url('/fonts/DrukWideBold.ttf');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "GraebenbachMonoMedium";
    src: url('/fonts/GraebenbachMonoMedium.ttf');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "GraebenbachMonoRegular";
    src: url('/fonts/GraebenbachMonoRegular.ttf');
    font-style: normal;
    font-display: swap;
  }
  /* Global body styling */
  body {
    background-color: #060606;
    margin: 0px;
  }
`;

class Portfolio extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)
    const projects = await getProjects()

    return { ...appProps, projects }
  }

  render() {
    const { Component, pageProps, projects } = this.props

    return (
      <>
        <ProjectContext.Provider value={projects}>
          <>
            <Component {...pageProps} />
          </>
        </ProjectContext.Provider>
        <GlobalStyle />
      </>
    )
  }
}
export default Portfolio