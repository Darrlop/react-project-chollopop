import { useEffect, useState } from "react";
import { getArticles, getTags } from "./service";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/shared/Button";
import styled from "styled-components";
import "./ArticlesPage.css";

function SearchPage({}) {
  const [articles, setArticles] = useState([]);
  const [nameOfSearch, setNameOfSearch] = useState("");
  const [tagsOfSearch, setTagsOfSearch] = useState([]);
  const navigate = useNavigate();

  const [listTags, setListTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const arrayTags = await getTags();
        setListTags(arrayTags);
        console.log(listTags);
      } catch (error) {
        alert("Error al obtener los tags: " + error.message);
        navigate("/articles", { replace: true });
      }
    };
    fetchTags();
  }, []);

  const handleNameSearch = (event) => {
    event.preventDefault();
    getArticles().then((articles) => {
      console.log(articles);
      const filteredArticles = articles.filter((article) =>
        //Si queremos que el nombre del artículo contenga las palabras de búsqueda:
        //article.name.includes(nameOfSearch)
        //Si el artículo empieza por las palabras de búsqueda:
        article.name.toLowerCase().startsWith(nameOfSearch.toLowerCase())
      );
      if (filteredArticles.length === 0) {
        navigate("/204");
      }
      setArticles(filteredArticles);
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getArticles().then((articles) => {
      const filteredTags = articles.filter(
        (article) =>
          //Si queremos que se muestren elementos que coincidan con algunos de los tags indicados:
          //article.tags.every((tag) => tagsOfSearch.includes(tag))
          //Filtro para coincidencia estricta de tags:
          JSON.stringify(article.tags) === JSON.stringify(tagsOfSearch)
      );
      const filteredArticles = filteredTags.filter((filteredTag) =>
        //Si queremos que el nombre del artículo contenga las palabras de búsqueda:
        //article.name.includes(nameOfSearch)
        //Si el artículo empieza por las palabras de búsqueda:
        filteredTag.name.toLowerCase().startsWith(nameOfSearch.toLowerCase())
      );
      if (filteredArticles.length === 0) {
        navigate("/204");
      }
      setArticles(filteredArticles);
    });
  };

  const handleNameChange = (event) => {
    setNameOfSearch(event.target.value);
  };
  const handleTagsChange = (event) => {
    setTagsOfSearch(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
    console.log(tagsOfSearch);
  };
  const resetSearch = () => {
    setNameOfSearch("");
    setTagsOfSearch([]);
  };

  //Refresco para borrado de resultadosen la página
  const handleRefresh = () => setArticles([]);

  return (
    <>
      <h3>Filtro de Búsqueda</h3>
      <div className="frame">
        <form id="tagsSearch" onSubmit={handleSearch}>
          <label htmlFor="nameOfSearch">Introduce palabra de búsqueda </label>
          <br></br>
          <input
            type="text"
            name="nameOfSearch"
            value={nameOfSearch}
            onChange={handleNameChange}
            required
          />
          <br></br>
          <label htmlFor="tagsOfSearch">Selecciona tag(s) a buscar </label>
          <br></br>
          <select multiple name="tags" onChange={handleTagsChange} required>
            {listTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
            {/* <option value="lifestyle">lifestyle</option>
            <option value="mobile">mobile</option>
            <option value="motor">motor</option>
            <option value="work">work</option> */}
          </select>
          <br></br>
          <button type="button" onClick={resetSearch}>
            Borrar
          </button>
          <button type="submit">Enviar</button>
        </form>
        <hr></hr>
        <Button onClick={handleRefresh}>Borrar Resultados</Button>

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
      </div>
    </>
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

export default SearchPage;
