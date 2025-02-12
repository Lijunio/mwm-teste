import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Services: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Função para abrir o WhatsApp com uma mensagem pré-definida
  const handleBudgetRequest = (title: string) => {
    const message = `Olá! Estive analisando o seu site e tenho uma dúvida em relação a ${title}.`;
    window.open(
      `https://wa.me/5531991502088?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Dados para os cards de informações sobre galpões de lona
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
              <li>Baixo custo de manutenção e operação, aumentando a economia a longo prazo.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Mobilidade:</strong>
            <ul>
              <li>Podem ser realocados facilmente conforme a necessidade.</li>
              <li>Permite mudanças rápidas de espaço para empresas dinâmicas.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Adaptabilidade:</strong>
            <ul>
              <li>Uso flexível em centros urbanos ou no campo.</li>
              <li>Variedade de tamanhos e modelos para atender diferentes demandas.</li>
            </ul>
          </Typography>
        </>
      ),
    },
  ];

  // Alternar entre os cards a cada 15 segundos (somente em telas pequenas)
  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [isSmallScreen, cards.length]);

  return (
    <Box sx={{ p: 4, fontFamily: "'Roboto', sans-serif" }}>
      {/* Cards de Serviços */}
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1: Galpão Lonado */}
        <Grid item xs={12} sm={6} md={3}>
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
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Galpão Lonado
            </Typography>
            <Typography sx={{ mb: 3 }}>
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
        <Grid item xs={12} sm={6} md={3}>
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
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Tenda Carpa
            </Typography>
            <Typography sx={{ mb: 3 }}>
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
        <Grid item xs={12} sm={6} md={3}>
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
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Lonas Sob Medida
            </Typography>
            <Typography sx={{ mb: 3 }}>
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

      {/* Accordion com informações sobre galpões de lona */}
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
              backgroundImage: "linear-gradient(270deg, #000000, #254b3a, #000000)",
              backgroundSize: "200% 100%",
              backgroundPosition: "0% 0%",
              animation: "gradientShift 10s linear infinite",
              color: "#000000",
              fontSize: "0.9rem",
              minHeight: "40px",
              "& .MuiAccordionSummary-content": {
                margin: "0px",
                flexDirection: "column",
              },
              "@keyframes gradientShift": {
                "0%": {
                  backgroundPosition: "0% 0%",
                },
                "50%": {
                  backgroundPosition: "100% 0%",
                },
                "100%": {
                  backgroundPosition: "0% 0%",
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
    </Box>
  );
};

export default Services;