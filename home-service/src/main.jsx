import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
<<<<<<< HEAD

createRoot(document.getElementById("root")).render(
  <StrictMode>
=======
import { GlobalStyle } from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
>>>>>>> 741a7c42fb6ccccf7fd343e9437a9b73b6f3f0b2
    <App />
  </StrictMode>
);
