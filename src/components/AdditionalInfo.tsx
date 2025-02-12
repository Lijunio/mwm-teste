import React from "react";
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import Slider from "react-slick"; // Importando o Slider

// Importando o CSS do slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdditionalInfo: React.FC = () => {
  // Configurações do Carrossel
  const settings = {
    dots: false, // Desativa os indicadores de navegação
    arrows: false, // Desativa as setas de navegação
    infinite: true, // Habilita rotação infinita
    speed: 500, // Tempo de transição entre as imagens
    slidesToShow: 1, // Exibe uma imagem por vez
    autoplay: true, // Ativa a troca automática
    autoplaySpeed: 3000, // Define o intervalo de troca das imagens em milissegundos
  };

  return (
    <Box sx={{ padding: "40px", backgroundColor: "transparent", color: "#fff" }}>
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        {/* Coluna 1 - 60% de largura */}
        <Grid item xs={12} md={7}>
          {/* Card com o carrossel de imagens */}
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              backgroundColor: "transparent",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                O que é um galpão de lona?
              </Typography>
              <Typography variant="body1" paragraph>
                Um galpão de lona é uma estrutura versátil e econômica, ideal para armazenamento, proteção de equipamentos ou até mesmo como espaço de trabalho temporário. Ele é composto por uma estrutura metálica coberta por lonas de alta resistência, que oferecem durabilidade e proteção contra intempéries.
              </Typography>
            </CardContent>
          </Card>

          {/* Carrossel com as duas imagens */}
          <Slider {...settings}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", md: "400px" },
                overflow: "hidden",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imagens/22.jpg`}
                alt="Imagem 22"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", md: "400px" },
                overflow: "hidden",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imagens/23.png`}
                alt="Imagem 23"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Slider>
        </Grid>

        {/* Coluna 2 - 40% de largura */}
        <Grid
  item
  xs={12}
  md={5}
  sx={{
    marginTop: { xs: 0, md: "100px" }, // Adiciona margin-top somente em telas grandes
  }}
>
  <Typography
    variant="h5" 
    gutterBottom
    sx={{
      fontWeight: "bold",
      color: "#fff",
      fontSize: { xs: "1.5rem", md: "2rem" }, 
    }}
  >
    Quais as vantagens?
  </Typography>

  <Box
  sx={{
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  {[
    "Lonas anti abrasivas de alta resistência com filtro UV",
    "Assistência técnica preventiva e corretiva",
    "Flexibilidade: Adaptam-se às necessidades específicas do seu negócio.",
    "Custo-benefício: Menores custos de construção e manutenção.",
    "Agilidade: Montagem rápida, reduzindo o tempo de implantação.",
    "Escalabilidade: Fácil expansão ou redução de espaço.",
    "Sustentabilidade: Materiais recicláveis alinhados ao conceito de economia circular.",
  ].map((advantage, index) => (
    <Typography
      key={index}
      variant="body2"
      paragraph
      sx={{
        fontSize: { xs: "1rem", md: "1.2rem" },
      }}
    >
      . {advantage} 
    </Typography>
  ))}
</Box>


 {/* Botão de ação */}
<Box
  sx={{
    display: { xs: "none", md: "flex" }, 
    justifyContent: "flex-end",
    width: "100%",
    marginTop: { xs: "20px", md: "0" }, 
  }}
>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#254B3A",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "1.1rem",
      "&:hover": {
        backgroundColor: "#ffffff",
        color: "#688198",
      },
    }}
  >
    Solicite seu orçamento
  </Button>
</Box>


</Grid>


      </Grid>
    </Box>
  );
};

export default AdditionalInfo;
