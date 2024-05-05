import { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { getArticle } from "./service";
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
    //getArticle(params.articleId).then((article) => setArticle(article));
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
        <b>tags:</b>{" "}
        {/* ternario doble Para evitar problemas con length join, etc y los null*/}
        {article.tags !== undefined
          ? article.tags.length > 1
            ? article.tags.join(", ")
            : article.tags
          : ""}
      </p>
      <div>
        <img
          src={
            article.photo === null
              ? "https://res.cloudinary.com/dyyhithd8/image/upload/v1710875978/no-photo_nt2ttr.jpg"
              : article.photo
          }
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
