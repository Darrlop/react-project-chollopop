import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./pages/auth/context.jsx";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/client.jsx";
import { ModalContextProvider } from "./components/modals/contextModal.jsx";

//Accedo a token de autenticación. Si existe, lo paso a Axio para su uso en cabeceras
const accessToken = storage.get("token");
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider isDefaultLogged={!!accessToken}>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
