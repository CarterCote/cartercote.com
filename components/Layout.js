import PropTypes from 'prop-types'
import React from 'react'

import styled from "styled-components"

export const Container = styled.div`
      text-align: center;
`;

export const Section = styled.div`
    width: 1000px;
    padding: 0px calc((100% - 1000px) / 2);
    display: inline-block;
    text-align: left;

    /* Responsiveness */
    @media screen and (max-width: 1100px) {
        /* 50px left-right padding*/
        width: calc(100% - 60px);
        padding: 0px 30px;
    }
`;

// Theme provider
export const theme = {
    background: "#060606",
    semidark: "rgba(6,8,10,.96)",
    dark: "#06080a",
    blu: "#0d1f68",
    accent: "#ffb41f",
    header: {
      main: "#fff",
      decoration: "#111111",
    },
    text: {
      light: "#fff",
    },
}
const Layout = ({ children }) => {

  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout