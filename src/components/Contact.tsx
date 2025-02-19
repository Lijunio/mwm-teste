import React from "react";
import { Typography, Box, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact: React.FC = () => {
  const whatsappLink = `https://wa.me/5531991502088?text=${encodeURIComponent(
    "Olá! Estava visitando seu site e gostaria de saber mais sobre os serviços oferecidos pela MWM Engenharia para avaliar como podemos trabalhar juntos. Poderia me ajudar com mais informações?"
  )}`;

  return (
    <Box sx={{ color: "white", textAlign: "center", p: 4 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontSize: { xs: "1.6rem", sm: "2rem", md: "3rem" },
        }}
      >
        Contato
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 4 }}>
        <Button
          startIcon={<PhoneIcon />}
          href="tel:+5531991502088"
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: 2,
            padding: "10px 20px",
            fontSize: { xs: "0.5rem", sm: "1rem" },
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          (31) 99150-2088
        </Button>

        <Button
          startIcon={<WhatsAppIcon />}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: 2,
            padding: "10px 20px",
            fontSize: { xs: "0.5rem", sm: "1rem" },
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          Entre em contato pelo WhatsApp
        </Button>
      </Box>

      {/* Copyright */}
<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
  <Typography variant="body1" sx={{ color: "white", mr: 2, fontSize: { xs: "0.8rem", sm: "1rem" } }}>
    &copy; 2025 MWM ESTRUTURAS E MONTAGENS. Todos os direitos reservados.
  </Typography>
</Box>

{/* Imagem e Texto */}
<Box 
  sx={{
    display: "flex", 
    alignItems: "center", 
    justifyContent: { xs: "center", sm: "flex-start" }, 
    pl: { xs: 0, sm: 4 }, 
    mt: { xs: 2, sm: 0 }, 
    mb: { xs: 2, sm: 0 }, 
  }}
>
  <img
    className="logo"  // Adicionei uma classe CSS para a imagem
    src={`${process.env.PUBLIC_URL}/imagens/elias.png`} 
    alt="Logo Elias"
    style={{
      height: "auto",
      marginRight: "10px",
      maxWidth: "100%" 
    }}
  />
  <Typography variant="body1" sx={{ color: "white", fontSize: { xs: "0.8rem", sm: "1rem" } }}>
    Desenvolvido por Elias Ribeiro
  </Typography>
</Box>



    </Box>
  );
};

export default Contact;
