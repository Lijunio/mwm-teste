import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Services: React.FC = () => {
  return (
    <>
      {/* Primeiro Conteúdo */}
      <Box
        sx={{
          backgroundColor: "#d3d3d3", // Fundo cinza claro
          padding: "40px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#003366", // Azul-marinho
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Encontre a Solução Ideal para o Seu Negócio!
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            color: "#000", // Preto
            lineHeight: 1.8,
            fontSize: "1.2rem",
            marginBottom: "30px",
          }}
        >
          Você está em busca de um galpão para o seu negócio, mas não sabe qual a melhor solução?
          Conheça as vantagens dos galpões que fazem toda a diferença:
        </Typography>

        <Card
          sx={{
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Fundo levemente translúcido
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            margin: "0 auto", // Centraliza horizontalmente o card
          }}
        >
          <CardContent>
            <Grid container spacing={4}>
              {/* Coluna Esquerda */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#003366", fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Flexibilidade:
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#000", fontSize: "1.2rem" }}>
                  Adaptam-se às necessidades específicas do seu negócio.
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#003366", fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Custo-benefício:
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#000", fontSize: "1.2rem" }}>
                  Menores custos de construção e manutenção.
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#003366", fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Agilidade:
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#000", fontSize: "1.2rem" }}>
                  Montagem rápida, reduzindo o tempo de implantação.
                </Typography>
              </Grid>

              {/* Coluna Direita */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#003366", fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Escalabilidade:
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#000", fontSize: "1.2rem" }}>
                  Fácil expansão ou redução de espaço.
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#003366", fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  Sustentabilidade:
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#000", fontSize: "1.2rem" }}>
                  Materiais recicláveis alinhados ao conceito de economia circular.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Segundo Conteúdo (Accordion) */}
      <Box
  sx={{
    backgroundColor: "transparent", 
    padding: "20px",
    marginTop: "30px",
    borderRadius: "50px",
  }}
>
<Accordion
  sx={{
    backgroundColor: "transparent", 
    overflow: "hidden", 
  }}
>
  <AccordionSummary
    expandIcon={
        <ExpandMoreIcon
            sx={{
            color: "#ffffff", 
            fontSize: "2rem", 
            transform: "scale(1.5)", 
            }}
      />
    }
    sx={{
        backgroundImage: "linear-gradient(270deg, rgb(161, 161, 175), rgba(0, 0, 51, 0.5), rgba(0, 0, 51, 0))", // Gradiente com transparência
        backgroundSize: "200% 100%", 
        backgroundPosition: "0% 0%", 
        animation: "gradientShift 6s linear infinite", 
        color: "#ffffff", 
        fontSize: "0.9rem", 
        minHeight: "40px", 
        "& .MuiAccordionSummary-content": {
          margin: "0px", 
        },
    }}
  >
      <Typography variant="h2" sx={{ fontSize: "2rem", fontWeight: "bold" }}>
        O que é um Galpão de Lona e quais são seus usos e principais funções?
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography
        paragraph
        sx={{ fontSize: "1.5rem", marginBottom: "20px", marginTop: "20px", color: "white" }}
      >
        Um galpão de lona é uma estrutura temporária ou permanente composta por
        uma base de armação metálica coberta com lona de alta resistência. Essa
        lona é geralmente fabricada com materiais duráveis, como PVC ou
        polietileno, que garantem proteção contra intempéries, como chuva, sol
        intenso e ventos fortes.
      </Typography>

      <Grid container spacing={2}>
        {/* Esquerdo */}
        <Grid item xs={12} md={6}>
  <Card sx={{ padding: "10px" }}>
    <CardContent>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#003366", // Azul-marinho para o título
          textAlign: "center",
        }}
      >
        Usos dos Galpões de Lona
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "1.1rem" }}
      >
        Os galpões de lona são versáteis e podem ser utilizados em diversas
        situações e setores, como:
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Indústria e Armazenagem:</strong>
        <ul>
          <li>Armazenamento de matérias-primas, produtos acabados ou máquinas.</li>
          <li>Abrigos temporários para equipamentos em manutenção.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Agricultura:</strong>
        <ul>
          <li>Proteção de insumos agrícolas, como sementes e fertilizantes.</li>
          <li>Abrigos para animais e estufas.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Eventos:</strong>
        <ul>
          <li>Estruturas para shows, feiras, casamentos e outros eventos sociais.</li>
          <li>Tendas para áreas VIP ou de alimentação.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Construção Civil:</strong>
        <ul>
          <li>Abrigos temporários para materiais de construção, como cimento e areia.</li>
          <li>Espaços cobertos para trabalhadores.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Logística e Transporte:</strong>
        <ul>
          <li>Galpões de transbordo para cargas em zonas portuárias ou rodoviárias.</li>
          <li>Armazéns temporários para mercadorias em trânsito.</li>
        </ul>
      </Typography>
    </CardContent>
  </Card>
</Grid>


        {/* Direito */}
<Grid item xs={12} md={6}>
  <Card sx={{ padding: "10px" }}>
    <CardContent>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#003366", 
          textAlign: "center",
        }}
      >
        Funções de um Galpão de Lona
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "1.1rem" }}
      >
        Oferece proteção prática, econômica e flexível em relação a alternativas tradicionais, como construções de alvenaria. As vantagens incluem:
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Proteção contra intempéries:</strong>
        <ul>
          <li>Mantém os bens e pessoas protegidos contra variações climáticas.</li>
          <li>Mantém ferramentas e materiais secos durante períodos de chuva.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Facilidade de montagem e desmontagem:</strong>
        <ul>
          <li>Ideal para necessidades temporárias ou em locais de difícil acesso.</li>
          <li>Perfeito para feiras, obras temporárias e emergências.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Custo-benefício:</strong>
        <ul>
          <li>Estruturas mais econômicas do que galpões de metal ou concreto.</li>
          
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Mobilidade:</strong>
        <ul>     
          <li>Podem ser realocados facilmente conforme a necessidade.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Adaptabilidade:</strong>
        <ul>
        <li>Pode ser usado em centros logísticos de cidades ou no campo para abrigar colheitas.</li>
        <li>Variedade de tamanhos e modelos para atender diferentes demandas.</li>
        </ul>
      </Typography>
    </CardContent>
  </Card>
</Grid>


      </Grid>
    </AccordionDetails>
  </Accordion>
</Box>

    </>
  );
};

export default Services;
