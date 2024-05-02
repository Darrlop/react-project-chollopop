import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import ArticlesPage from "./pages/articles/ArticlesPage";
import LoginPage from "./pages/auth/LoginPage";
import storage from "./utils/storage";
import Layout from "./components/layout/Layout";

function App() {
  function testLogged() {
    return storage.get("token");
  }
  const [isLogged, setIsLogged] = useState(testLogged());
  const handleLogin = () => setIsLogged(true);
  console.log(storage.get("token"));

  return (
    <Routes>
      {/* <Route
        index
        element={
          <>
            <h2>Bienvenido a Chollopop, la tienda online</h2>
            <p>Accede con tu usuario para entrar a la sección de anuncios</p>
          </>
        }
      /> */}
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route
          path="/articles/:articleId"
          element={<div>Detalle de Artículo</div>}
        />
        <Route path="/articles/new" element={<div>Nuevo artículo</div>} />
        <Route path="/404" element={"<div>Http 404 | not found...</div>"} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>

    // <div>
    //   <Header />
    //   <Nav />
    //   {isLogged ? (
    //     <ArticlesPage isLogged={isLogged} />
    //   ) : (
    //     <LoginPage onLogin={handleLogin} />
    //   )}
    //   <Footer />
    // </div>
  );
}

export default App;
