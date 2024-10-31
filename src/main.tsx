import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CertContextProvider } from "./components/certContext/certContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CertContextProvider>
        <App />
      </CertContextProvider>
    </BrowserRouter>
  </StrictMode>
);
