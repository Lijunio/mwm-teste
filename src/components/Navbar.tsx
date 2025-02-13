import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  
  const [showLogo, setShowLogo] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Quando o usuário rolar para baixo
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpeza do event listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          display: "flex",
          justifyContent: "center", // Centraliza os botões
        }}
      >
        <Toolbar
          sx={{
            flexDirection: "row",
            justifyContent: isLargeScreen ? "space-between" : "flex-start", // Para telas pequenas alinha à esquerda
            alignItems: "center",
            width: "100%",
            padding: isLargeScreen ? "0 16px" : "0 8px", // Ajusta o padding em telas pequenas
          }}
        >
          {/* Logo visível apenas após rolar a página */}
          {showLogo && (
            <Box
              sx={{
                position: "absolute",
                left: 16,
                top: 10,
                zIndex: 1000,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imagens/logoMWM.png`} // Caminho correto para a imagem
                alt="Logo"
                style={{ height: isLargeScreen ? 60 : 30 }} // Altura da logo ajustada
              />
            </Box>
          )}

          {/* Navbar Links */}
          <Box
            sx={{
              display: "flex",
              gap: isLargeScreen ? 8 : 2,
              justifyContent: "center",
              width: "100%",
              position: "relative",
              zIndex: 1000,
              transition: "transform 0.3s ease",
              flexWrap: "wrap", // Permite quebra de linha em telas pequenas
              marginLeft: isLargeScreen ? "auto" : "60px", // Ajusta o espaçamento para telas pequenas
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
                  minWidth: "auto",
                  padding: isLargeScreen ? "10px 16px" : "6px 10px",
                  "&:hover": {
                    backgroundColor: "#688198",
                    color: "#ffffff",
                  },
                }}
                onClick={text === "Home" ? scrollToTop : undefined}
                href={text === "Serviços" ? "#services" : text === "Contato" ? "#contact" : undefined}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: "100px" }} />
    </>
  );
};

export default Navbar;
