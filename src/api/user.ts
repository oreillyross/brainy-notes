// import { supabase } from "./supabase";
import { USER } from "types";

export async function getUserId() {
  // const data = await supabase.auth.getUser();
  // return data.data.user?.id;
}

const id = getUserId();

export async function getUser() {
  // const data = await supabase.from("profiles").select().eq("id", id);
  // if (data && data.data) {
  //   const { id, username, fullname, avatar_url, website } = data.data[0];
  //   return { id, username, fullname, avatar_url, website };
  // }
}

export async function setUser(user: Omit<USER, "id">) {
  // if (id) {
  //   const { error } = await supabase.from("profiles").update(user).eq("id", id);
  //   return error === null;
  // }
  return false;
}
