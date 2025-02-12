import React from "react";
import { CssBaseline, Box } from "@mui/material";
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
      {/* Ajustando o Box para ocupar 100% da tela */}
      <Box
        sx={{
          height: "100vh", 
          width: "100%", 
          display: "flex",
          flexDirection: "column", 
        }}
      >
        <Box id="home" sx={{ flex: 1 }}>
          <Home />
        </Box>
        <Box id="services" mt={4} sx={{ flex: 1 }}>
          <Services />
        </Box>
        <Box id="ServicesParte2" mt={4} sx={{ flex: 1 }}>
          <ServicesParte2 />
        </Box>
        {/* 
        <Box id="about-us" mt={4} sx={{ flex: 1 }}>
          <AboutUs />
        </Box>
        */}
        <Box id="contact" mt={4} sx={{ flex: 1 }}>
          <Contact />
        </Box>
      </Box>
    </>
  );
};

export default App;
