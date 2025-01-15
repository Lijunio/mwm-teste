import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          flexDirection: "row",
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", sm: "block" },
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          MWM Engenharia
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            href="#services"
          >
            Serviços
          </Button>
          <Button
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            href="#about-us"
          >
            Sobre Nós
          </Button>
          <Button
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            href="#contact"
          >
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
