import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext<AuthContexttypes>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

interface AuthContexttypes {
  isAuthenticated: Boolean;
  login: () => void;
  logout: () => void;
}
function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    // setIsAuthenticated(true);
    console.log(localStorage.getItem("idToken"));
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
