import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Menu fixo com borda e fundo */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgb(44, 50, 56)", // Cor de fundo do menu
          boxShadow: "none",
          width: "100%",
          top: 0,
          zIndex: 9999,
          padding: "10px 0",
          borderBottom: "4px solid #688198", // Borda com a cor desejada
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
          {/* Menu com animação */}
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
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#688198",
                },
              }}
              href="#services"
            >
              Serviços
            </Button>
            <Button
              sx={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#688198",
                },
              }}
              href="#about-us"
            >
              Sobre Nós
            </Button>
            <Button
              sx={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#688198",
                },
              }}
              href="#contact"
            >
              Contato
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Conteúdo da página abaixo do menu */}
      <Box sx={{ marginTop: "100px", padding: "20px" }}>
        {/* Coloque aqui o restante do conteúdo da página */}
      </Box>
    </>
  );
};

export default Navbar;
