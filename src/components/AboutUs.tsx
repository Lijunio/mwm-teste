import React from "react";
import { Typography, Box, Grid, Card } from "@mui/material";

const AboutUs: React.FC = () => {
  return (
    <Card
      sx={{
        width: { xs: "90%", md: "100%" }, 
        backgroundColor: "rgba(255, 255, 255, 0.8)", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        margin: "20px auto",
      }}
    >
      <Box sx={{ color: "black", textAlign: "center", p: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: "#003366",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" }, 
          }}
        >
          Sobre Nós
        </Typography>
        <Typography
          variant="h6"
          textAlign="justify"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" }, 
          }}
        >
          A MWM Engenharia busca oferecer soluções completas com excelência,
          dedicando-se ao sucesso de cada projeto. Nosso compromisso com os
          clientes garante a entrega de qualidade e inovação em serviços de
          engenharia.
        </Typography>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center" 
          alignItems="center" 
          sx={{ mt: 4 }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: 100, sm: 150 }, // Altura responsiva
                width: { xs: "100%", sm: "90%", md: "100%" }, // Largura responsiva
                border: "2px solid white",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#003366",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.5rem" }, 
                  textAlign: "center", 
                }}
              >
                +2 anos no mercado
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: 100, sm: 150 }, // Altura responsiva
                width: { xs: "100%", sm: "90%", md: "100%" }, // Largura responsiva
                border: "2px solid white",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#003366",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.5rem" }, 
                  textAlign: "center", 
                }}
              >
                +5 empresas atendidas
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default AboutUs;
