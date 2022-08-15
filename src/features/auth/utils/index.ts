import { supabase } from "client";

export async function logout() {
  const {error} = await supabase.auth.signOut()
}