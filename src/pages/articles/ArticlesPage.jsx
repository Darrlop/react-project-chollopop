import { useEffect, useState } from "react";
import { getArticles } from "./service";
import { NavLink, useNavigate, useParams, redirect } from "react-router-dom";

import styled from "styled-components";
import "./ArticlesPage.css";

function ArticlesPage({}) {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        if (articles.length === 0) {
          navigate("/204");
        }
      })
      .catch((error) => {
        alert("Error obteniendo lista de artículos: " + error.message);
        return navigate("/");
      });
  }, []);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {articles.map(({ id, name, price, sale, tags, photo }) => (
        <NavLink className="navlink" to={`/articles/${id}`} key={id}>
          <ItemList key={id}>
            <p>
              <strong>Artículo: {name}</strong>
            </p>
            <p>Precio: {price} €</p>
            <p>Estado: {sale ? "En venta" : "Se compra"}</p>
            <p>Tags: {tags.length > 1 ? tags.join(", ") : tags}</p>
          </ItemList>
        </NavLink>
      ))}
    </ul>
  );
}

//convierto el elemento <li> en un styled-component
const ItemList = styled.li`
  list-style: none;
  padding-left: 30%;
  margin-top: 15px;
  text-align: left;
  border: 1px solid green;
  border-radius: 10px;
`;

export default ArticlesPage;
