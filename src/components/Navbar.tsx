import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent", 
        boxShadow: "none", 
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            color: "#ffffff", 
            fontWeight: "bold",
          }}
        >
          MWM Engenharia
        </Typography>
        <Button
  sx={{
    color: "#ffffff",
    fontSize: "18px", // Tamanho do texto aumentado
    fontWeight: "bold", // Opcional: Deixa o texto em negrito
    padding: "10px 20px", // Adiciona mais espaçamento interno para um botão maior
  }}
  href="#services"
>
  Serviços
</Button>
<Button
  sx={{
    color: "#ffffff",
    fontSize: "18px", // Tamanho do texto aumentado
    fontWeight: "bold", // Opcional: Deixa o texto em negrito
    padding: "10px 20px", // Adiciona mais espaçamento interno para um botão maior
  }}
  href="#about-us"
>
  Sobre Nós
</Button>
<Button
  sx={{
    color: "#ffffff",
    fontSize: "18px", // Tamanho do texto aumentado
    fontWeight: "bold", // Opcional: Deixa o texto em negrito
    padding: "10px 20px", // Adiciona mais espaçamento interno para um botão maior
  }}
  href="#contact"
>
  Contato
</Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
