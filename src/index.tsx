import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import App from "./App";

document.body.style.fontFamily = "var(--font-family)";

const applyBackground = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Tela pequena: fundo verde sólido
    document.body.style.background = "#254b3a"; // Apenas verde
  } else {
    // Tela grande: imagem + fundo degradê suave
    document.body.style.background = 
      `url('${process.env.PUBLIC_URL}/imagens/background.svg') no-repeat center center fixed, 
      linear-gradient(90deg, #254b3a 75%, #000000 100%)`;
  }
  document.body.style.backgroundSize = "cover";
};


// Aplica o fundo ao carregar a página
applyBackground();

// Adiciona um listener para mudar o fundo ao redimensionar a tela
window.addEventListener("resize", applyBackground);

document.body.style.backgroundSize = "cover, 100% auto, cover";
document.body.style.color = "#000000";



const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
