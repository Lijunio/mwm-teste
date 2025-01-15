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
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 4 }}>
        <Button
          startIcon={<PhoneIcon />}
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: 2,
            padding: "10px 20px",
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
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          Entre em contato pelo WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
