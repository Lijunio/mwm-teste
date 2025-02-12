import React from "react";
import { AppBar, Toolbar, Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // Verifica se a tela é grande

  // Função para rolar até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave
    });
  };

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
            {["Home", "Serviços", "Contato"].map((text, index) => (
              <Button
                key={index}
                sx={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  fontSize: isLargeScreen ? "18px" : "14px",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                  minWidth: "auto", // Para evitar botões muito largos
                  padding: isLargeScreen ? "10px 16px" : "6px 10px",
                  "&:hover": {
                    backgroundColor: "#688198",
                    color: "#ffffff",
                  },
                }}
                onClick={text === "Home" ? scrollToTop : undefined} // Chama scrollToTop para "Home"
                href={text === "Serviços" ? "#services" : text === "Contato" ? "#contact" : undefined} // Mantém o comportamento normal nos outros botões
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
