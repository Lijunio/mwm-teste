import React from "react";
import { Box, Card, Typography, Button, Grid } from "@mui/material";

const AboutUs: React.FC = () => {
  const handleBudgetRequest = (title: string) => {
    const message = `Olá! Estive analisando o seu site e tenho uma dúvida em relação a ${title}.`;
    window.open(
      `https://wa.me/5531991502088?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Box sx={{ p: 4, fontFamily: "'Roboto', sans-serif" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              padding: 3,
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              background: "linear-gradient(to bottom, rgb(44, 50, 56), rgb(171, 118, 33))",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Galpão Lonado e Zinco
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Coberturas feitas com estrutura de aço carbono e alumínio, usando lonas resistentes ou telhas galvanizadas.
              Oferecem redução de custos, montagem personalizada e atendem várias necessidades, como obras, oficinas e armazenagem.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(44, 50, 56)",
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

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              padding: 3,
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              background: "linear-gradient(to bottom, rgb(44, 50, 56), rgb(171, 118, 33))",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Galpão c/ Portão e Janela
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Estrutura robusta com pé-direito de 3 a 6 metros. Venda ou locação mensal, com módulos ajustáveis. Usada em controle de acesso, armazenagem, refeitórios, vestuários e áreas de vivência. Consulte condições.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(44, 50, 56)",
                color: "#ffffff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#688198",
                  color: "#ffffff",
                },
              }}
              onClick={() => handleBudgetRequest("Galpão c/ Portão e Janela")}
            >
              Orçamento
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              padding: 3,
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              background: "linear-gradient(to bottom, rgb(44, 50, 56), rgb(171, 118, 33))",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Tenda Carpa
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Design moderno em alumínio e aço carbono, com segurança e flexibilidade. Ideal para escritórios, refeitórios, vestuários, armazenagem e outros. Solução personalizada para demandas em todo o Brasil.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(44, 50, 56)",
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

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              padding: 3,
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              background: "linear-gradient(to bottom, rgb(44, 50, 56), rgb(171, 118, 33))",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Lonas Sob Medida
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Produzimos lonas sob medida, com alta qualidade e garantia. Atendemos diversas necessidades e trabalhamos com as melhores marcas do mercado, sempre priorizando a durabilidade.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(44, 50, 56)",
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

export default AboutUs;
