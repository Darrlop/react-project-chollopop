import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticle } from "./service";
import { NavLink } from "react-router-dom";
import "./ArticlePage.css";

export default function ArticlePage() {
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const item = await getArticle(params.articleId);
      setArticle(item);
    };
    fetchArticle();
  }, []);

  return (
    <div className="frame__article">
      <h2>{article.name}</h2>
      <p>
        <b>Precio:</b> {article.price} €
      </p>
      <p>
        <b>Estado:</b> {article.sale ? "En venta" : "Se compra"}
      </p>
      <p>
        <b>tags:</b> {article.tags}
      </p>
      <div>
        <img
          src={article.photo}
          className="photo-detail"
          alt="Imagen del artículo"
        />
      </div>
      <NavLink className="navlink" to={`/articles`}>
        <span className="links">-[ Atrás ]-</span>
      </NavLink>
    </div>
  );
}
