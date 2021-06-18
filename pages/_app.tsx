// Initial setup
import React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
// import App from "next/app";
import type { AppProps } from "next/app";

// Styled components & context
import { createGlobalStyle } from "styled-components";
// import getProjects from "../getProjects";
import ProjectContext from '../Projects.Context';

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
// class Portfolio extends App {
//   static async getInitialProps({ req }: NextPageContext) {
//     const appProps = await App.getInitialProps({ req }: NextPageContext)
//     const projects = await getProjects()
//     return { ...appProps, projects }
//   }
   
//   render() {
//     const { Component, pageProps, projects } = this.props
export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      {/* SEO */}
      <Head>
        <title>CARTER COTE'S DIGITAL PLAYGROUND</title>
        <meta name="title" content="CARTER COTE'S DIGITAL PLAYGROUNDi" />
        <meta
          name="description"
          content="Hi, I'm Carter. I'm 19, and I study AI, human-computer interaction, + industrial design at Georgia Tech."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cartercote.com" />
        <meta property="og:title" content="CARTER COTE'S DIGITAL PLAYGROUND" />
        <meta
          property="og:description"
          content="Hi, I'm Carter. I'm 19, and I study AI, human-computer interaction, + industrial design at Georgia Tech."
        />
        <meta
          property="og:image"
          content="https://cartercote.com/about/carter.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Carter Cote" />
        <meta
          property="twitter:description"
          content="Hi, I'm Carter. I'm 19, and I study AI, human-computer interaction, + industrial design at Georgia Tech."
        />
        <meta
          property="twitter:image"
          content="https://cartercote.com/about/carter.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/head/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/head/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/head/favicon.png"
        />
        <link rel="manifest" href="/head/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/head/safari-pinned-tab.svg"
          color="#ffb41f"
        />
        <link rel="shortcut icon" href="/head/favicon.png" />
        <meta name="msapplication-TileColor" content="#f7faff" />
        <meta name="msapplication-config" content="/head/browserconfig.xml" />
        <meta name="theme-color" content="#f7faff" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-177315240-1');
            `,
          }}
        ></script>
      </Head>
{/* 
      <ProjectContext.Provider value={projects}>
        <> */}
          <Component {...pageProps} />
        {/* </>
      </ProjectContext.Provider> */}
      <GlobalStyle />
    </React.Fragment>
  );
}
// export default Portfolio