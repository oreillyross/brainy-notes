import { supabase } from "client";
import { useState, useEffect } from "react";
import { createContext } from "react";

interface Props {
  children: JSX.Element;
}

type TUser = {
  id: string
}

export const AuthContext = createContext<TUser>({id: ""});

export const AuthProvider = ({ children }: Props) => {
  const [currentuser, setUser] = useState({id: ""});

  return <AuthContext.Provider value={currentuser}>{children}</AuthContext.Provider>;
};
