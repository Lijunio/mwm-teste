import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, useMediaQuery } from "@mui/material"; 
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [visibleText, setVisibleText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const text = "ESTRUTURAS E MONTAGENS";
  const [isTextCompleted, setIsTextCompleted] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
  
    if (!isTextCompleted && textIndex < text.length) {
      timeout = setTimeout(() => {
        setVisibleText((prev) => prev + text[textIndex]);
        setTextIndex(textIndex + 1);
      }, 200);
    } else if (textIndex === text.length) {
      setIsTextCompleted(true);
    }
  
    return () => clearTimeout(timeout);
  }, [textIndex, isTextCompleted]);

  return (
    <Box 
      sx={{
        height: "80vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Alinhar conteúdo à esquerda
        justifyContent: "flex-start", // Alinhar conteúdo no topo
        background: `url(${process.env.PUBLIC_URL}/imagens/fundo.png) no-repeat right center`, // Imagem no lado direito
        backgroundSize: "contain", // Ajustar a imagem para caber no espaço
        padding: isSmallScreen ? "16px" : "32px",
        position: "relative",
        overflow: "hidden", 
      }}
    >
      {/* Elemento 2: Logo + Texto */}
      <Box 
        sx={{ 
          textAlign: "left", // Alinhar texto à esquerda
          zIndex: 2, 
          width: "100%", 
          maxWidth: "600px", 
          marginTop: isSmallScreen ? "20px" : "",
          marginLeft: isSmallScreen ? "120px" : "250px", // Afastar da borda esquerda
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/imagens/logo.png`}
          alt="Logo"
          style={{
            width: isSmallScreen ? "200px" : "300px",
            height: "auto",
            marginBottom: "20px", 
          }}
        />
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontSize: isSmallScreen ? "1.2rem" : "2rem",
            fontWeight: "bold",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textAlign: "left", // Alinhar texto à esquerda
            color: "white"
          }}
        >
          {visibleText}
        </Typography>
      </Box>

      {/* Elemento 3: Card com texto */}
      <Card
        sx={{
          bgcolor: "transparent",
          color: "white",
          textAlign: "left", // Alinhar texto à esquerda
          width: "100%",
          maxWidth: "600px",
          border: "none",
          marginTop: isSmallScreen ? "80px" : "40px",
          marginLeft: isSmallScreen ? "20px" : "200px", // Afastar da borda esquerda
        }}
      >
        <CardContent 
          sx={{ 
            backgroundColor: "rgba(37, 75, 58, 0.7)", 
            borderRadius: "16px", 
            border: "2px solid rgba(37, 75, 58, 0.5)",
            padding: isSmallScreen ? "16px" : "32px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: isSmallScreen ? "1.2rem" : "2rem",
              textAlign: "left",
              color: "white", 
              marginBottom: "20px",  
            }}
          >
            Na MWM Engenharia, somos especialistas em fabricação, venda e locação de:
          </Typography>
          <ul style={{ 
            listStyleType: "disc",  
            paddingLeft: "20px",
            textAlign: "left", 
          }}>
            <li style={{ fontSize: "1.2rem", marginBottom: "10px", color: "white" }}>
              Galpão Lonado e com Telhas de Zinco
            </li>
            <li style={{ fontSize: "1.2rem", marginBottom: "10px", color: "white" }}>
              Galpão Pré-Moldado, Pré-Fabricado e Industrial
            </li>
            <li style={{ fontSize: "1.2rem", marginBottom: "10px", color: "white" }}>
              Tenda para Obras
            </li>
            <li style={{ fontSize: "1.2rem", marginBottom: "10px", color: "white" }}>
              Tenda Carpa
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Elemento 4: Botão centralizado abaixo dos elementos 2 e 3 */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center", // Centralizar o botão horizontalmente
          marginTop: isSmallScreen ? "20px" : "40px", // Espaçamento acima do botão
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#254B3A",
            color: "white",
            padding: "10px 20px",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Solicite seu orçamento
        </Button>
      </Box>
    </Box>
  );
};

export default Home;