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
    alignItems: isSmallScreen ? "center" : "flex-start",
    justifyContent: "flex-start",
    background: `url(${process.env.PUBLIC_URL}/imagens/fundo.png) no-repeat right center`,
    backgroundSize: "contain",
    padding: isSmallScreen ? "16px" : "32px",
    position: "relative",
    overflow: "hidden", 
  }}
>
  {/* Elemento 2: Logo + Texto */}
  <Box
    id="home"
    sx={{ 
      textAlign: isSmallScreen ? "center" : "left",
      zIndex: 2, 
      width: "100%", 
      maxWidth: "600px", 
      marginTop: isSmallScreen ? "-20px" : "20px", //  telas pequenas
      marginLeft: isSmallScreen ? "0px" : "250px",
    }}
  >
    <img
  src={`${process.env.PUBLIC_URL}/imagens/logo.png`}
  alt="Logo"
  style={{
    width: isSmallScreen ? "200px" : "300px",
    height: "auto",
    marginBottom: "20px",
    display: "block",
    marginLeft: isSmallScreen ? "auto" : "100px", 
    marginRight: isSmallScreen ? "auto" : "0",
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
        textAlign: isSmallScreen ? "center" : "left",
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
      textAlign: isSmallScreen ? "center" : "left",
      width: "100%",
      maxWidth: "600px",
      border: "none",
      marginTop: isSmallScreen ? "30px" : "40px", //  telas pequenas
      marginLeft: isSmallScreen ? "0px" : "200px",
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
          textAlign: isSmallScreen ? "center" : "left",
          color: "white", 
          marginBottom: "20px",  
        }}
      >
        Na MWM Engenharia, somos especialistas em fabricação, venda e locação de:
      </Typography>
      <ul style={{ 
        listStyleType: "disc",  
        paddingLeft: isSmallScreen ? "0px" : "20px",
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

  {/* Elemento 4: Botão */}
  <Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: isSmallScreen ? "center" : "flex-start",
    marginTop: isSmallScreen ? "30px" : "40px",
    marginLeft: isSmallScreen ? "0px" : "650px",
  }}
>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "rgba(90, 90, 90, 0.8)", // Cinza com transparência
      color: "white",
      padding: "10px 20px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "rgba(128, 128, 128, 1)", // Fica 100% opaco ao passar o mouse
      },
    }}
  >
    Solicite seu orçamento
  </Button>
</Box>

</Box>
  );
};

export default Home;
