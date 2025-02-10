import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgb(44, 50, 56)", 
          boxShadow: "none",
          width: "100%",
          top: 0,
          zIndex: 9999,
          padding: "10px 0",
        }}
      >
        <Toolbar
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              width: "100%",
              position: "relative",
              zIndex: 1000,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Button
              sx={{
                backgroundColor: "rgb(44, 50, 56)",
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#688198",
                  color: "#ffffff",
                },
              }}
              href="#services"
            >
              Serviços
            </Button>
            <Button
              sx={{
                backgroundColor: "rgb(44, 50, 56)",
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#688198",
                  color: "#ffffff",
                },
              }}
              href="#about-us"
            >
              Sobre Nós
            </Button>
            <Button
              sx={{
                backgroundColor: "rgb(44, 50, 56)",
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#688198",
                  color: "#ffffff",
                },
              }}
              href="#contact"
            >
              Contato
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: "100px", padding: "20px" }}>
      </Box>
    </>
  );
};

export default Navbar;
