import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardMedia, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const images = [
    `${process.env.PUBLIC_URL}/imagens/1.jpg`,
    `${process.env.PUBLIC_URL}/imagens/2.png`,
    `${process.env.PUBLIC_URL}/imagens/3.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/4.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/5.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/6.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/7.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/8.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/9.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/10.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/11.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/12.jpg`,
    `${process.env.PUBLIC_URL}/imagens/13.png`,
    `${process.env.PUBLIC_URL}/imagens/15.jpg`,
    `${process.env.PUBLIC_URL}/imagens/16.png`,
    `${process.env.PUBLIC_URL}/imagens/17.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/18.jpg`,
    `${process.env.PUBLIC_URL}/imagens/19.jpeg`,
    `${process.env.PUBLIC_URL}/imagens/20.jpg`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box sx={{ textAlign: "center", mt: 2, color: "white" }}>
      <Typography
  variant="h2"
  component="h1"
  gutterBottom
  sx={{
    fontSize: { xs: "1.5rem", sm: "3rem", md: "4rem" }, 
    background: "linear-gradient(90deg, #c0c0c0, #ffffff, #c0c0c0)",
    backgroundSize: "200% auto",
    backgroundClip: "text",
    textFillColor: "transparent",
    animation: "shine 6s linear infinite",
    fontWeight: "bold",
  }}
>
  Estruturas que fazem a diferença!
</Typography>


      <Typography
        variant="h6"
        component="p"
        sx={{
          fontSize: { xs: "0.9rem", sm: "1.2rem" },
          textAlign: { xs: "left", sm: "justify" },
          mb: 4,
        }}
      >
        Na <strong>MWM Engenharia</strong>, somos especialistas em{" "}
        <strong>galpões lonados</strong> e <strong>tendas de alta qualidade</strong> para eventos, obras e
        armazenamento. Combinamos <strong>design funcional</strong>,{" "}
        <strong>durabilidade</strong> e <strong>excelência</strong> para atender todas as suas necessidades.{" "}
        <strong>Transforme seu espaço com quem entende do assunto!</strong>
      </Typography>

      <Grid container spacing={2}>
        {isSmallScreen ? (
          <Grid item xs={12}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={images[currentIndex]}
                alt={`Imagem ${currentIndex + 1}`}
              />
            </Card>
          </Grid>
        ) : (
          <>
            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="600"
                  image={images[currentIndex]}
                  alt={`Imagem ${currentIndex + 1}`}
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="600"
                  image={images[(currentIndex + 1) % images.length]}
                  alt={`Imagem ${(currentIndex + 2) % images.length}`}
                />
              </Card>
            </Grid>
          </>
        )}
      </Grid>

      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 0% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
