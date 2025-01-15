import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import App from "./App";

// Aplica o estilo diretamente ao body
document.body.style.fontFamily = "var(--font-family)";
document.body.style.background = `
url('/imagens/background.svg') no-repeat center center fixed,
  linear-gradient(180deg, 
                  rgb(45, 51, 136) 0%, /* Azul-marinho escuro */
                  rgb(16, 21, 94) 50%, /* Preto */
                  rgb(0, 0, 51) 100%) /* Azul-marinho (0, 0, 51)*/ 
`;

document.body.style.backgroundSize = "cover, cover";
document.body.style.color = "#000000";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
