import Button from "../../../components/shared/Button";
import { logout } from "../service";
import { useAuth } from "../context";
import { Link } from "react-router-dom";

export default function logoutButton() {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutCLick = async (event) => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    //2 opciones de botón y link
    // <Button onClick={handleLogoutCLick}>
    //   <Link to="/">Salir</Link>
    // </Button>
    <Button onClick={handleLogoutCLick} as={Link} to="/">
      Salir
    </Button>
  ) : (
    <Button disabled>Salir</Button>
  );
}
