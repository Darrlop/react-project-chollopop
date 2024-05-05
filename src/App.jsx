import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Navigate, Link, NavLink } from "react-router-dom";
import storage from "./utils/storage";
import ArticlesPage from "./pages/articles/ArticlesPage";
import LoginPage from "./pages/auth/LoginPage";
import Layout from "./components/layout/Layout";
import RequireAuth from "./pages/auth/components/RequireAuth";
import ArticlePage from "./pages/articles/ArticlePage";
import NewArticlePage from "./pages/articles/NewArticlePage";
import SearchPage from "./pages/articles/SearchPage";
import { useAuth } from "./pages/auth/context";

function App() {
  console.log(storage.get("token"));
  const { isLogged, onLogout } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            isLogged || storage.get("token") ? (
              <>
                <h2>Bienvenido a Chollopop, la tienda online</h2>
                <NavLink to="/articles">
                  Accede al listado general de artículos
                </NavLink>
              </>
            ) : (
              <>
                <h2>Bienvenido a Chollopop, la tienda online</h2>
                <p>
                  Accede con tu usuario para entrar a la sección de anuncios
                </p>
              </>
            )
          }

          //   storage.get("token") ? (
          //     <Navigate to="/articles" />
          //   ) : (
          //     <>
          //       <h2>Bienvenido a Chollopop, la tienda online</h2>
          //       <p>
          //         Accede con tu usuario para entrar a la sección de anuncios
          //       </p>
          //     </>
          //   )
          // }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/articles"
          element={
            <RequireAuth>
              <ArticlesPage />
            </RequireAuth>
          }
        />
        <Route
          path="/articles/:articleId"
          element={
            <RequireAuth>
              <ArticlePage />
            </RequireAuth>
          }
        />
        <Route
          path="/articles/new"
          element={
            <RequireAuth>
              <NewArticlePage />
            </RequireAuth>
          }
        />
        <Route
          path="/search"
          element={
            <RequireAuth>
              <SearchPage />
            </RequireAuth>
          }
        />
        <Route path="/refreshSearch" element={<Navigate to="/backSearch" />} />
        <Route path="/backSearch" element={<Navigate to="/search" />} />
        <Route
          path="/204"
          element={
            <div>
              No hay ningún contenido para mostrar<br></br>
              <Link to="/">Volver </Link>//
              <Link to="/articles/new"> Publicar</Link>
            </div>
          }
        />
        <Route
          path="/404"
          element={
            <div>
              Http 404 | not found...<br></br>
              <Link to="/articles">Volver</Link>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
}

export default App;
