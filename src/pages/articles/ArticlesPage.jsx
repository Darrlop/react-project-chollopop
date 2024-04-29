import { useEffect, useState } from "react";
import { getArticles } from "./service";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articles) => setArticles(articles));
    console.log("Acceso a API. Info conseguida");
    console.log(articles);
  }, []);

  return (
    <>
      <ul>
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
