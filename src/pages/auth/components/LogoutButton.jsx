import Button from "../../../components/shared/Button";
import { logout } from "../service";
import { useAuth } from "../context";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function logoutButton() {
  const { isLogged, onLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutCLick = async (event) => {
    await logout();
    onLogout();
    return <useNavigate to="/" />;
  };

  return isLogged ? (
    //2 opciones de botón y link
    // <Button onClick={handleLogoutCLick}>
    //   <Link to="/">Salir</Link>
    // </Button>
    //<Button onClick={handleLogoutCLick} as={Link} to="/">
    <Button onClick={handleLogoutCLick}>Salir</Button>
  ) : (
    <Button disabled>Salir</Button>
  );
}
