import { ThemeProvider } from "styled-components";
import { Container, theme } from "../components/Layout";
// import { getSortedPostsData } from "..lib/posts";

// Page components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }


// Export Home page
export default function Home() {

  return (
    // Provide global theme styling via HOC
    <ThemeProvider theme={theme}>
    <Navbar />
      <Container>
        <Hero />
        <Projects />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}