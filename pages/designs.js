import React from 'react'
import { ThemeProvider } from "styled-components"
import { Container, theme } from "../components/Layout";

import Navbar from "../components/Navbar"
import DesignCards from '../components/DesignCards'
import Footer from "../components/Footer"

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <DesignCards />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
