import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, theme } from "../components/Layout";

// Page components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/ProjectsList/Projects";
import Footer from "../components/Footer";

// Export Home page
export default function Home() {

  return (
    // Provide global theme styling via HOC
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Hero />
        <Projects />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}