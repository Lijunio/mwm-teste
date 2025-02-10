import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import App from "./App";

document.body.style.fontFamily = "var(--font-family)";
document.body.style.background = `
  url('${process.env.PUBLIC_URL}/imagens/background.svg') no-repeat center center fixed,
  linear-gradient(180deg, 
                  rgb(46, 72, 69) 0%,
                  rgb(171, 118, 33) 50%, 
                  rgb(46, 72, 69) 100%) 
`;


document.body.style.backgroundSize = "cover, cover";
document.body.style.color = "#000000";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
