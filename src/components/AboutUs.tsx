import React from "react";
import { Typography, Box } from "@mui/material";

const AboutUs: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Sobre Nós
      </Typography>
      <Typography>
        A MWM Engenharia, desde 2023, busca oferecer soluções completas com excelência, dedicando-se ao sucesso de cada projeto.
        Nosso compromisso com os clientes garante a entrega de qualidade e inovação em serviços de engenharia.
      </Typography>
    </Box>
  );
};

export default AboutUs;
