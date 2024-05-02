import { useEffect, useState } from "react";
import { getArticles } from "./service";
import { useNavigate, useParams } from "react-router-dom";

import { setAuthorizationHeader } from "../../api/client";

function ArticlesPage({}) {
  // setAuthorizationHeader(isLogged);

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articles) => setArticles(articles));
    console.log("Acceso a API. Info conseguida");
  }, []);

  console.log(articles);

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {articles.map(({ id, name, price, sale, tags, photo }) => (
          <li key={id}>
            <hr></hr>
            <p>Artículo: {name}</p>
            <p>Precio: {price}</p>
            <p>Estado: {price ? "En venta" : "Se compra"}</p>
            <p>Tags: {tags}</p>
          </li>
        ))}
      </ul>
      <hr></hr>
    </>
  );
}

export default ArticlesPage;
