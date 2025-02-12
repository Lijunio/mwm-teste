import React from "react";
import { AppBar, Toolbar, Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // Verifica se a tela é grande

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(34, 43, 50, 0.4)", 
          boxShadow: "none",
          width: "100%",
          top: 0,
          zIndex: 9999,
          padding: "10px 0",
          backdropFilter: "blur(5px)", 
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
              gap: isLargeScreen ? 8 : 2, // Reduz espaço entre os botões em telas pequenas
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
            {["Serviços", "Sobre Nós", "Contato"].map((text, index) => (
              <Button
                key={index}
                sx={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  fontSize: isLargeScreen ? "18px" : "14px", // Reduz tamanho da fonte em telas pequenas
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                  minWidth: "auto", // Para evitar botões muito largos
                  padding: isLargeScreen ? "10px 16px" : "6px 10px", // Ajusta o padding para telas menores
                  "&:hover": {
                    backgroundColor: "#688198",
                    color: "#ffffff",
                  },
                }}
                href={index === 0 ? "#services" : index === 1 ? "#about-us" : "#contact"}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: "100px", padding: "20px" }} />
    </>
  );
};

export default Navbar;
