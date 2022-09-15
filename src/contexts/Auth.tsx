import { supabase } from "supabase";
import { useState, useEffect } from "react";
import { createContext } from "react";
import {USER} from "types"
import {useQuery} from "react-query"

interface Props {
  children: JSX.Element;
}

async function login(email: string, password: string) {
  await supabase.auth.signIn(email, password)
}

export const AuthContext = createContext<USER>({id: ""});

export const AuthProvider = ({ children }: Props) => {
  const [currentuser, setUser] = useState({id: ""});
  const {data, error } = useQuery("user", login)
  return <AuthContext.Provider value={currentuser}>{children}</AuthContext.Provider>;
};
