import Button from "../../components/shared/Button";
import { useState } from "react";
import "./NewArticlePage.css";
import { useAuth } from "../auth/context";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { postArticle } from "./service";

export default function NewArticlePage({}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { onLogin } = useAuth();

  const [formValues, setFormValues] = useState({
    name: "",
    sale: "venta",
    price: 0.0,
    tags: ["lifestyle"],
    photo: null,
  });
  let { name, sale, price, tags, photo } = formValues;

  // Se diferencia elemento file, select o input según el tipo o el name, según venga mejor
  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.name === "tags"
          ? Array.from(event.target.selectedOptions, (option) => option.value)
          : event.target.value,
    }));
  };

  const resetAll = () => {
    setFormValues({
      name: "",
      sale: "venta",
      price: 0.0,
      tags: [],
      photo: null,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    await postArticle(formValues);
    //navigate("/articles", { replace: true });
  };

  return (
    <div>
      <h2>Nuevo Anuncio</h2>
      <form className="frame" onSubmit={handleSubmit}>
        <p>
          (*)<i> Campos obligatorios</i>
        </p>
        <label htmlFor="name">Artículo </label>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        *<br></br>
        <label>Venta/compra </label>
        <select name="sale" onChange={handleChange} value={sale} required>
          <option value="venta" selected>
            Venta
          </option>
          <option value="compra">Compra</option>
        </select>
        *<br></br>
        <label htmlFor="price">Precio </label>
        <input
          required
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
        *<br></br>
        <label>Tags (min. 1) </label>
        <select
          multiple
          name="tags"
          onChange={handleChange}
          //value={tags}
          required
        >
          <option value="lifestyle">lifestyle</option>
          <option value="mobile">mobile</option>
          <option value="motor">motor</option>
          <option value="work">work</option>
        </select>
        *<br></br>
        <hr></hr>
        <label htmlFor="image">Selecciona una foto:</label>
        <br></br>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />
        <br></br>
        <hr></hr>
        <Button onClick={resetAll}>Borrar</Button>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}
