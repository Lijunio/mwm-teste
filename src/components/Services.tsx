import React from "react";
import { Box, Card, CardContent, Typography, IconButton, CardMedia } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const Services: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px",
         background: "linear-gradient(to right,rgb(171, 118, 33),rgb(128, 95, 41))"
      }}
    >
      {/* Coluna da esquerda com dois cards */}
      <Box
        sx={{ 
          display: "flex",
          flexDirection: "column",
          maxWidth: { xs: "500px", md: "600px" },
          gap: "20px",
          marginRight: "20px",
        }}
      >
        {/* Primeiro Card - Locação Simples */}
        <Card
          sx={{
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            background: "transparent",
            color: "#fff",
            width: { xs: "100%", md: "600px" },
            height: { md: "500px" },
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem" } }}>
              Locação Simples
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Sua equipe já está mobilizada em campo? Reduza custos e tempo de montagem com a Locação Simples!
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              A solução ideal para quando o cliente já possui equipe no local. Com a Locação Simples, combinamos economia e agilidade para otimizar sua operação.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
  {["Eficiência", "Economia", "Agilidade"].map((item) => (
    <Box key={item} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <FontAwesomeIcon icon={faPlus} size="lg" color="#fff" /> {/* Ícone branco */}
      <Typography variant="body1" sx={{ fontSize: "1.6rem", fontWeight: "bold"}}> {/* Texto com nova cor */}
        {item}
      </Typography>
    </Box>
  ))}
</Box>
          </CardContent>
        </Card>

        {/* Segundo Card - Imagem */}
        <Card
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            backgroundColor: "transparent",
            width: { xs: "100%", md: "600px" },
            height: { md: "500px" }, 
          }}
        >
          <CardMedia
            component="img"
            image={`${process.env.PUBLIC_URL}/imagens/21.jpg`}
            alt="Imagem ilustrativa"
            sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
          />
        </Card>
      </Box>

      {/* Terceiro Card - Estruturas de Lona */}
      <Card
        sx={{
          flex: 1,
          maxWidth: "500px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          backgroundColor: "transparent",
          color: "#fff",
          padding: "20px",
          
          
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            As estruturas de lona são ideais para garantir:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
            {["Redução de custos em relação a alvenaria", "Menor impacto ambiental", "Instalação rápida", "Isenção de IPTU", "Possibilidade de Expansão rápida", "Flexibilidade de transporte p/ outra planta ou local rapidamente", "Sem burocracias", "Lonas anti abrasivas de alta resistência com filtro UV", "Assistência técnica preventiva e corretiva", "Flexibilidade: Adaptam-se às necessidades específicas do seu negócio.", "Custo-benefício: Menores custos de construção e manutenção.", "Agilidade: Montagem rápida, reduzindo o tempo de implantação.", "Escalabilidade: Fácil expansão ou redução de espaço.", "Sustentabilidade: Materiais recicláveis alinhados ao conceito de economia circular."].map((item) => (
              <Box key={item} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FontAwesomeIcon icon={faCheck} size="lg" color="#0f0" />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Services;
