import { supabase } from "./supabase";

// export const getNotes = async (filter: string) => {
//   const { error, data } = await supabase
//     .from("notes")
//     .select("*")
//     .ilike("title", `%${filter}%`);
//   if (error) {
//     throw error;
//   }
//   return data;
// };
