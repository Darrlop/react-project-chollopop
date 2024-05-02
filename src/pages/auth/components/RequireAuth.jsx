import { useAuth } from "../context";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const { isLogged } = useAuth();
  const location = useLocation();

  return isLogged ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
}
