import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import ServicesParte2 from "./components/ServicesParte2";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box id="home">
          <Home />
        </Box>
        <Box id="services" mt={4}>
          <Services />
        </Box>
        <Box id="ServicesParte2" mt={4}>
          <ServicesParte2 />
        </Box>
        <Box id="about-us" mt={4}>
          <AboutUs />
        </Box>
        <Box id="contact" mt={4}>
          <Contact />
        </Box>
      </Container>
    </>
  );
};

export default App;
