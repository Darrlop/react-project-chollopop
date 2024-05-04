import { useHref } from "react-router-dom";
import Button from "../shared/Button";
import LogoutButton from "../../pages/auth/components/LogoutButton";
import { useAuth } from "../../pages/auth/context";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const { isLogged } = useAuth();

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
        <Button>Busqueda</Button>
        {/* Usar directamente un componente button para logout */}
        <LogoutButton>Salir</LogoutButton>
      </nav>
    </div>
  );
}
