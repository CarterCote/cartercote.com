import styled from "styled-components";

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
    accent: "#ffb41f",
    header: {
      main: "#06090e",
      decoration: "rgba(6,9,14,.84)",
    },
    text: {
      light: "rgba(6,9,14,.64)",
    },
  };