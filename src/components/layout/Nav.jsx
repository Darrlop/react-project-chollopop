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
            <Button>Anunciar</Button>
          </Link>
        )}
        {rutaActual === "/search" ? (
          <Link to="/articles">
            <Button>Fin Busqueda</Button>
          </Link>
        ) : (
          <Link Link to="/search">
            <Button>Busqueda</Button>
          </Link>
        )}
        <LogoutButton>Salir</LogoutButton>
      </nav>
    </div>
  );
}
