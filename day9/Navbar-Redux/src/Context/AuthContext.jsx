import { createContext, useState } from "react";

// CPC
export const AuthContext = createContext();

// Provide - 1

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {};

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
