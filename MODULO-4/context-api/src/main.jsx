import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ContadorProvider from "./contexts/ContadorContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";
import GlobalProvider from "./contexts/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <ContadorProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
        {/* PASO 1 (router): BROWSER ROUTER ENVUELVE TODA NUESTRA APP PORQUE FUNCIONA COMO EL ENRUTADOR GENERAL */}
      </ContadorProvider>
    </GlobalProvider>
  </StrictMode>,
);
