import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

const Services: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textBlocks = [
    {
      title: "Flexibilidade:",
      description: "Adaptam-se às necessidades específicas do seu negócio.",
    },
    {
      title: "Custo-benefício:",
      description: "Menores custos de construção e manutenção.",
    },
    {
      title: "Agilidade:",
      description: "Montagem rápida, reduzindo o tempo de implantação.",
    },
    {
      title: "Escalabilidade:",
      description: "Fácil expansão ou redução de espaço.",
    },
    {
      title: "Sustentabilidade:",
      description: "Materiais recicláveis alinhados ao conceito de economia circular.",
    },
  ];

  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textBlocks.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isSmallScreen, textBlocks.length]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#d3d3d3",
          padding: "40px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#003366",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: { xs: "left", sm: "center" },
            fontSize: { xs: "1.8rem", sm: "2rem" },
          }}
        >
          Encontre a Solução Ideal para o Seu Negócio!
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            color: "#000",
            lineHeight: 1.8,
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: { xs: "left", sm: "justify" },
            marginBottom: "30px",
          }}
        >
          Você está em busca de um galpão para o seu negócio, mas não sabe qual a melhor solução? Conheça as vantagens
          dos galpões que fazem toda a diferença:
        </Typography>

        {isSmallScreen ? (
          <Card
            sx={{
              padding: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              margin: "0 auto",
              maxWidth: "auto",
              maxHeight:"auto",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#003366",
                  fontWeight: "bold",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                }}
              >
                {textBlocks[currentTextIndex].title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#000",
                  fontSize: { xs: "1.1rem", sm: "1.2rem" },
                }}
              >
                {textBlocks[currentTextIndex].description}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Card
            sx={{
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              margin: "0 auto",
            }}
          >
            <CardContent>
              <Grid container spacing={4}>
                {textBlocks.map((block, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#003366", fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      {block.title}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: "#000", fontSize: "1.2rem" }}>
                      {block.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        )}
      </Box>

   
    </>
  );
};

export default Services;
