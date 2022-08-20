import { supabase } from "client";
import { useState, useEffect } from "react";
import { createContext } from "react";

interface Props {
  children: JSX.Element;
}

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: Props) => {
  const [currentuser, setUser] = useState(null);

  return <AuthContext.Provider value={currentuser}>{children}</AuthContext.Provider>;
};
