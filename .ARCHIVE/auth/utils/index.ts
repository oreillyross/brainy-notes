import { supabase } from "supabase";
import { createContext } from "react";

type TUser = {
  id: string
}

export const UserContext = createContext<TUser | null>({id: ""});

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("ERROR LOGGING USER OUT", error);
  }
}

export async function signin(email: string, password: string) {

    const {  error } = await supabase.auth.signIn({ email, password });
    if (error) {
      console.error("ERROR LOGGING USER IN", error.message);
    }
}
