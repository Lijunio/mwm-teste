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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Services: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      title: "Usos dos Galpões de Lona",
      content: (
        <>
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
        </>
      ),
    },
    {
      title: "Funções de um Galpão de Lona",
      content: (
        <>
          <Typography
            variant="body1"
            paragraph
            sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "1.1rem" }}
          >
            Oferece proteção prática, econômica e flexível em relação a alternativas tradicionais, como construções
            de alvenaria. As vantagens incluem:
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
        </>
      ),
    },
  ];

  // Alternar entre os cards a cada 15 segundos
  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [isSmallScreen, cards.length]);

  return (
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
    backgroundImage: "linear-gradient(270deg, rgb(44, 50, 56), rgba(171, 118, 33), rgb(44, 50, 56))",
    backgroundSize: "200% 100%",
    backgroundPosition: "0% 0%",
    animation: "gradientShift 10s linear infinite",  // A animação agora dura 10 segundos
    color: "#000000",  // Cor do texto mantida como padrão (preta)
    fontSize: "0.9rem",
    minHeight: "40px",
    "& .MuiAccordionSummary-content": {
      margin: "0px",
      flexDirection: "column",
    },
    "@keyframes gradientShift": {
      "0%": {
        backgroundPosition: "0% 0%",  // Início com a cor rgb(44, 50, 56)
      },
      "50%": {
        backgroundPosition: "100% 0%",  // Meio da animação com fundo em rgba(171, 118, 33)
      },
      "100%": {
        backgroundPosition: "0% 0%",  // Final da animação com o fundo totalmente em rgba(171, 118, 33)
      },
    },
  }}
  
  
  
  
>
  <Typography
    variant="h2"
    sx={{
      fontSize: { xs: "1.5rem", sm: "2rem" },
      fontWeight: "bold",
      marginBottom: { sm: "20px" }, 
      color: "white",
    }}
  >
    O que é um Galpão de Lona e quais são seus usos e principais funções?
  </Typography>
  {!isSmallScreen && (
    <Typography
      paragraph
      sx={{
        fontSize: "1.5rem",
        marginTop: { sm: "20px" }, 
        color: "white",
      }}
    >
      Um galpão de lona é uma estrutura temporária ou permanente composta por uma base de armação metálica coberta com
      lona de alta resistência. Essa lona é geralmente fabricada com materiais duráveis, como PVC ou polietileno, que
      garantem proteção contra intempéries, como chuva, sol intenso e ventos fortes.
    </Typography>
  )}
</AccordionSummary>

        <AccordionDetails>
        {isSmallScreen ? (
  <Card
    sx={{
      padding: "20px", 
      maxWidth: "auto", 
      margin: "0 auto",
      backgroundColor: "rgba(255, 255, 255, 0.9)", 
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
    }}
  >
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
        {cards[currentCardIndex].title}
      </Typography>
      {cards[currentCardIndex].content}
    </CardContent>
  </Card>
) : (
  <Grid container spacing={2}>
    {cards.map((card, index) => (
      <Grid item xs={12} md={6} key={index}>
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
              {card.title}
            </Typography>
            {card.content}
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
)}

        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Services;
