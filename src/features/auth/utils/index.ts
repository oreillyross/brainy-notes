import { supabase } from "client";
import { createContext } from "react";



export const UserContext = createContext(null);

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
