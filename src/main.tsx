import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Global Styles
import "./styles/Landing.css";
import "./styles/EmbeddedSignup.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);