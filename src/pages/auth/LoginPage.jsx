import Button from "../../components/shared/Button";
import { useState } from "react";
import "./LoginPage.css";
import { login } from "./service";
import { useAuth } from "./context";
import { useNavigate, useLocation } from "react-router-dom";
import { useModal } from "../../components/modals/useModal";
import Modal from "../../components/modals/Modal";

export default function LoginPage({}) {
  // const [userMail, setUserMail] = useState("");
  // const [password, setPassword] = useState("");
  // const [checked, setChecked] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const { isOpen, openModal, closeModal } = useModal(true);

  const [formValues, setFormValues] = useState({
    userMail: "",
    password: "",
    check: false,
  });
  const { userMail, password, check } = formValues;

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    console.log("Hemos logeado");
    try {
      await login(formValues);
      onLogin();
      navigate("/articles", { replace: true });
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <div>
      <h2>Accede a Chollopop</h2>
      <form className="frame" onSubmit={handleSubmit}>
        <label htmlFor="userMail">Usuario </label>
        <input
          type="mail"
          name="userMail"
          value={userMail}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br></br>
        <label>¿Guardar sesión?</label>
        <input
          type="checkbox"
          name="check"
          checked={check}
          onChange={handleChange}
        />
        <br></br>
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
}
