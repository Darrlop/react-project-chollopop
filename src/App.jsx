import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import ArticlesPage from "./pages/articles/ArticlesPage";
import LoginPage from "./pages/auth/LoginPage";
import storage from "./utils/storage";
import Layout from "./components/layout/Layout";
import RequireAuth from "./pages/auth/components/RequireAuth";
import ArticlePage from "./pages/articles/ArticlePage";
import NewArticlePage from "./pages/articles/NewArticlePage";

function App() {
  console.log(storage.get("token"));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <h2>Bienvenido a Chollopop, la tienda online</h2>
              <p>Accede con tu usuario para entrar a la sección de anuncios</p>
            </>
          }
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
