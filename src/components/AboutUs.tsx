import React from "react";
import { Typography, Box, Grid, Card } from "@mui/material";

const AboutUs: React.FC = () => {
  return (
    <Card
      sx={{
        width: "100%", // Card ocupa toda a largura da página
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Fundo translúcido
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Sombra
        margin: "20px auto", // Margem ao redor do card
      }}
    >
      <Box sx={{ color: "black", textAlign: "center", p: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ color: "#003366" }}>
  Sobre Nós
</Typography>
        <Typography variant="h6" textAlign="justify" gutterBottom>
          A MWM Engenharia busca oferecer soluções completas com excelência,
          dedicando-se ao sucesso de cada projeto. Nosso compromisso com os
          clientes garante a entrega de qualidade e inovação em serviços de
          engenharia.
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 150,
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
              <Typography variant="h4" fontWeight="bold">
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
                height: 150,
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
              <Typography variant="h4" fontWeight="bold">
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
