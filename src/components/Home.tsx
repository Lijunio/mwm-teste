import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid, useMediaQuery, Button } from "@mui/material"; 
import { useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [visibleText, setVisibleText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const text = "ESTRUTURAS E MONTAGENS";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    `${process.env.PUBLIC_URL}/imagens/home/pag1.png`,
    `${process.env.PUBLIC_URL}/imagens/home/pag2.png`,
    `${process.env.PUBLIC_URL}/imagens/home/pag3.png`,
    `${process.env.PUBLIC_URL}/imagens/home/pag4.png`,
  ];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (textIndex < text.length) {
      timeout = setTimeout(() => {
        setVisibleText((prev) => prev + text[textIndex]);
        setTextIndex(textIndex + 1);
      }, 200);
    } else {
      timeout = setTimeout(() => {
        setVisibleText("");
        setTextIndex(0);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [textIndex, visibleText]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <Box sx={{ textAlign: "center", mt: 2, color: "white" }}>
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/imagens/logo.png`}
          alt="Logo"
          style={{
            width: isSmallScreen ? "250px" : "300px",
            height: "auto",
          }}
        />
        <Typography
          variant="h6"
          component="p"
          sx={{
            mt: 1,
            fontSize: isSmallScreen ? "1.5rem" : "2rem",
            fontWeight: "bold",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {visibleText}
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          mt: 4,
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Grid item xs={12} md={6} order={isSmallScreen ? 1 : 2} sx={{ height: isMediumScreen ? "auto" : "100%" }}>
          <Card
            sx={{
              bgcolor: "transparent",
              color: "white",
              textAlign: "center",
              padding: "16px",
              height: isSmallScreen ? "auto" : "550px", 
              width: isSmallScreen ? "100%" : "auto",  
              border: "none",
            }}
          >
            <CardContent>
            <Typography
  variant="h4"
  sx={{
    fontWeight: "bold",
    fontSize: isSmallScreen ? "1.5rem" : "2rem", 
    textAlign: "left",
    color: "white",
    marginTop: isSmallScreen ? "0" : "20px",
  }}
>
  Há mais de 2 anos no mercado. Na MWM Engenharia, <br />
  somos especialistas em
</Typography>

            </CardContent>

            <Typography
              variant="h6"
              component="p"
              sx={{
                mt: isSmallScreen ? 2 : 4,
                fontSize: "1.6rem",
                textAlign: "left",
                color: "white",
              }}
            >
              Fabricação, venda e locação mensal de:
            </Typography>

            <Box sx={{ mt: 3, textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ fontSize: "1.4rem", marginBottom: "10px", color: "white" }}>
                  <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: "10px" }} />
                  Galpão Lonado e com Telhas de Zinco
                </li>
                <li style={{ fontSize: "1.4rem", marginBottom: "10px", color: "white" }}>
                  <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: "10px" }} />
                  Galpão Pré-Moldado, Pré-Fabricado e Industrial
                </li>
                <li style={{ fontSize: "1.4rem", marginBottom: "10px", color: "white" }}>
                  <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: "10px" }} />
                  Tenda para Obras
                </li>
                <li style={{ fontSize: "1.4rem", marginBottom: "10px", color: "white" }}>
                  <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: "10px" }} />
                  Tenda Carpa
                </li>
              </ul>
            </Box>

            <Button
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: "#688198",
                color: "white",
                width: "100%",
                fontSize: isSmallScreen ? "1rem" : "1.3rem",
                padding: isSmallScreen ? "8px" : "12px",
                background: "linear-gradient(to right, rgb(44, 50, 56), rgb(48, 54, 59))",
              }}
              onClick={() => {
                window.open(
                  "https://wa.me/5531991502088?text=" +
                    encodeURIComponent("Olá! Estive olhando seu site e gostaria de solicitar um orçamento."),
                  "_blank"
                );
              }}
            >
              ORÇAMENTO
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} order={isSmallScreen ? 2 : 1}>
          <img
            src={images[currentImageIndex]}
            alt="Imagem de destaque"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
