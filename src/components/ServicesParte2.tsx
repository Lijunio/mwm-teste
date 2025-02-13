import React from "react";
import { Box, Card, Typography, Button, Grid } from "@mui/material";

const Services: React.FC = () => {
  // Função para simular a requisição de orçamento
  const handleBudgetRequest = (serviceName: string) => {
    console.log(`Orçamento solicitado para: ${serviceName}`);
  };

  return (
    <Box sx={{ p: 4, fontFamily: "'Roboto', sans-serif" }}>
      {/* Cards de Serviços */}
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1: Galpão Lonado */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 4, // Aumentado o padding para aumentar o tamanho do card
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Galpão Lonado
            </Typography>
            <Typography sx={{ mb: 3, lineHeight: 1.5 }}>
              Coberturas de aço carbono e alumínio, com lonas resistentes ou telhas galvanizadas. Ideais para obras, oficinas e armazenagem, oferecendo montagem personalizada e redução de custos.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#222b32",
                opacity: 0.97,
                color: "#ffffff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#688198",
                  color: "#ffffff",
                },
              }}
              onClick={() => handleBudgetRequest("Galpão Lonado e Zinco")}
            >
              Orçamento
            </Button>
          </Card>
        </Grid>

        {/* Card 3: Tenda Carpa */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 4, // Aumentado o padding para aumentar o tamanho do card
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Tenda Carpa
            </Typography>
            <Typography sx={{ mb: 3, lineHeight: 1.5 }}>
              Estrutura de alumínio e aço carbono, com segurança e flexibilidade. Ideal para escritórios, refeitórios e vestuários, atendendo a diferentes demandas com soluções personalizadas.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#222b32",
                opacity: 0.97,
                color: "#ffffff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#688198",
                  color: "#ffffff",
                },
              }}
              onClick={() => handleBudgetRequest("Tenda Carpa")}
            >
              Orçamento
            </Button>
          </Card>
        </Grid>

        {/* Card 4: Lonas Sob Medida */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 4, // Aumentado o padding para aumentar o tamanho do card
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Lonas Sob Medida
            </Typography>
            <Typography sx={{ mb: 3, lineHeight: 1.5 }}>
              Lonas personalizadas com alta qualidade e garantia, atendendo diversas necessidades e trabalhando com as melhores marcas do mercado, garantindo durabilidade e eficiência.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#222b32",
                opacity: 0.97,
                color: "#ffffff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#688198",
                  color: "#ffffff",
                },
              }}
              onClick={() => handleBudgetRequest("Lonas Sob Medida")}
            >
              Orçamento
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
