import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ isDefaultLogged, children }) {
  const [isLogged, setIsLogged] = useState(isDefaultLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  const authValue = {
    isLogged,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
