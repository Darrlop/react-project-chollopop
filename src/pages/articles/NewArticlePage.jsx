import Button from "../../components/shared/Button";
import { useState } from "react";
import "./NewArticlePage.css";
import { useAuth } from "../auth/context";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NewArticlePage({}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { onLogin } = useAuth();

  const [formValues, setFormValues] = useState({
    name: "",
    sale: "",
    price: 0.0,
    tags: [],
  });
  let { name, sale, price, tags } = formValues;

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const resetAll = (event) => {
    setFormValues({
      name: "",
      sale: "",
      price: 0.0,
      tags: [],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    //await login(formValues);
    //onLogin();
    ////navigate(location.state?.from || "/articles", { replace: true });
    //navigate("/articles", { replace: true });
  };

  return (
    <div>
      <h2>Nuevo Anuncio</h2>
      <form className="frame" onSubmit={handleSubmit}>
        <label htmlFor="name">Artículo </label>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <br></br>
        <label>Venta/compra </label>
        <select onChange={handleChange} required>
          <option value="true">Venta</option>
          <option value="false">Compra</option>
        </select>
        <br></br>
        <label htmlFor="price">Precio </label>
        <input
          required
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <br></br>
        <label>Tags (min. 1) </label>
        <select multiple onChange={handleChange} required>
          <option value="lifestyle">lifestyle</option>
          <option value="mobile">mobile</option>
          <option value="motor">motor</option>
          <option value="work">work</option>
        </select>
        <br></br>
        <Button onClick={resetAll}>Borrar</Button>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}
