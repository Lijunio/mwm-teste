import React, { useState } from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean[]>([false, false]);

  const handleToggle = (index: number) => {
    setExpanded(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Box sx={{ p: 4, fontFamily: "'Roboto', sans-serif" }}>
      {/* Título da seção */}
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "left", color: "white", mb: 4 }}>
        Perguntas Frequentes
      </Typography>

      {/* Pergunta 1 */}
      <Card
        sx={{
          padding: 3,
          boxShadow: 3,
          textAlign: "left", // Alinha o texto à esquerda
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Alinha os itens à esquerda
          height: "100%",
          borderRadius: 4,
          backgroundColor: "#222b32", // Cor de fundo
          color: "white",
          mb: 4, // Espaço entre os cards
          position: "relative", // Necessário para a posição absoluta da seta
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          1. Quais são as vantagens de usar lonas anti abrasivas com filtro UV em minhas estruturas?
        </Typography>

        {/* Setinha para expandir */}
        <IconButton 
          onClick={() => handleToggle(0)} 
          sx={{
            color: "white", 
            position: "absolute", 
            right: 16, 
            top: "50%", 
            transform: "translateY(-50%)", 
            fontSize: 30, // Aumentando o tamanho da seta
          }}
        >
          <ExpandMoreIcon />
        </IconButton>

        {/* Resposta */}
        {expanded[0] && (
          <Typography sx={{ mt: 2 }}>
            As lonas anti abrasivas com filtro UV oferecem diversas vantagens para suas estruturas, incluindo:
            <br /><br />
            <strong>Durabilidade:</strong> A alta resistência à abrasão garante maior vida útil à lona, reduzindo a necessidade de substituições frequentes.
            <br /><br />
            <strong>Proteção:</strong> O filtro UV protege contra os raios solares, prevenindo o desgaste da lona e dos materiais armazenados sob ela.
            <br /><br />
            <strong>Segurança:</strong> A resistência à abrasão e ao rasgo garante maior segurança para pessoas e bens.
            <br /><br />
            <strong>Economia:</strong> A durabilidade e a proteção UV reduzem custos de manutenção e substituição.
          </Typography>
        )}
      </Card>

      {/* Pergunta 2 */}
      <Card
        sx={{
          padding: 3,
          boxShadow: 3,
          textAlign: "left", // Alinha o texto à esquerda
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Alinha os itens à esquerda
          height: "100%",
          borderRadius: 4,
          backgroundColor: "#222b32", // Cor de fundo
          color: "white",
          mb: 4, // Espaço entre os cards
          position: "relative", // Necessário para a posição absoluta da seta
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          2. Qual a vida útil esperada para uma lona anti abrasiva com filtro UV?
        </Typography>

        {/* Setinha para expandir */}
        <IconButton 
          onClick={() => handleToggle(1)} 
          sx={{
            color: "white", 
            position: "absolute", 
            right: 16, 
            top: "50%", 
            transform: "translateY(-50%)", 
            fontSize: 30, // Aumentando o tamanho da seta
          }}
        >
          <ExpandMoreIcon />
        </IconButton>

        {/* Resposta */}
        {expanded[1] && (
          <Typography sx={{ mt: 2 }}>
            A vida útil de uma lona anti abrasiva com filtro UV pode variar de 5 a 10 anos, dependendo das condições de uso e manutenção. A proteção UV e a resistência à abrasão prolongam sua durabilidade, mas fatores como exposição intensa ao sol, vento e poluição podem afetar o tempo de vida útil.
          </Typography>
        )}
      </Card>

    </Box>
  );
};

export default Faq;
