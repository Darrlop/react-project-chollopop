import { useHref } from "react-router-dom";
import Button from "../shared/Button";
import { useAuth } from "../../pages/auth/context";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const { isLogged } = useAuth();

  return (
    <div>
      {/* <nav className="header-nav">Aquí van los botones</nav> */}
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
          <Link to="/crear">
            <Button>Anunciar</Button>
          </Link>
        )}
        <Button>Salir</Button>
      </nav>
    </div>
  );
}
