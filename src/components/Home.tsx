import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const Home = () => {
  const images = [
    "/imagens/1.jpg",
    "/imagens/2.png",
    "/imagens/3.jpeg",
    "/imagens/4.jpeg",
    "/imagens/5.jpeg",
    "/imagens/6.jpeg",
    "/imagens/7.jpeg",
    "/imagens/8.jpeg",
    "/imagens/9.jpeg",
    "/imagens/10.jpeg",
    "/imagens/11.jpeg",
    "/imagens/12.jpg",
    "/imagens/13.png",
    "/imagens/15.jpg",
    "/imagens/16.png",
    "/imagens/17.jpeg",
    "/imagens/18.jpg",
    "/imagens/19.jpeg",
    "/imagens/20.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
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

      {/* Texto adicional */}
      <Typography variant="h6" component="p" textAlign="justify" sx={{ mb: 4 }}>
        Na <strong>MWM Engenharia</strong>, somos especialistas em{" "}
        <strong>galpões lonados</strong> e <strong>tendas de alta qualidade</strong> para eventos, obras e
        armazenamento. Combinamos <strong>design funcional</strong>,{" "}
        <strong>durabilidade</strong> e <strong>excelência</strong> para atender todas as suas necessidades.{" "}
        <strong>Transforme seu espaço com quem entende do assunto!</strong>
      </Typography>

      {/* Imagens em Grid */}
      <Grid container spacing={2}>
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
      </Grid>

      {/* Estilo para a animação */}
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
