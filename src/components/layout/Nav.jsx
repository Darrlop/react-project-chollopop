import { useHref } from "react-router-dom";
import Button from "../shared/Button";
import LogoutButton from "../../pages/auth/components/LogoutButton";
import { useAuth } from "../../pages/auth/context";
import { Link, NavLink, Route, useLocation } from "react-router-dom";

export default function Nav() {
  const { isLogged } = useAuth();
  const location = useLocation();
  const rutaActual = location.pathname;

  return (
    <div>
      <nav
        style={{
          border: "1px solid green ",
          margin: "1rem",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        {!isLogged ? (
          <Link to="/login">
            <Button>Acceso</Button>
          </Link>
        ) : (
          <Link to="/articles/new">
            <Button>Publicar</Button>
          </Link>
        )}
        {isLogged ? (
          <Link to="/articles">
            <Button>Anuncios</Button>
          </Link>
        ) : (
          <Button disabled>Anuncios</Button>
        )}
        {isLogged ? (
          <Link Link to="/search">
            <Button>Busqueda</Button>
          </Link>
        ) : (
          <Button disabled>Busqueda</Button>
        )}
        <LogoutButton>Salir</LogoutButton>
      </nav>
    </div>
  );
}
