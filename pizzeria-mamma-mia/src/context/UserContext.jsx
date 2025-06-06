import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("error de inicio de sesion");

    const data = await res.json();
    setToken(data.token);
    setEmail(data.email);
  };

  const register = async (email, password) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Registro fallido🙁");

    const data = await res.json();
    setToken(data.token);
    setEmail(data.email);
  };

  const getProfile = async () => {
    const res = await fetch("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("No se pudo obtener el perfil🙁");

    const data = await res.json();
    setEmail(data.email);
  };

 
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, getProfile, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
