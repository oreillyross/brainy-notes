import { base_url } from "data/constants";

export async function getNotes() {
  try {
    const notes = await fetch(base_url + "/notes");
    return notes;
  } catch (error) {
    console.error(error);
  }
}

// import { supabase } from "./supabase";

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

// export const getFilteredNotes = async (filter: string) => {
//   const filteredNotes = await supabase
//     .from("notes")
//     .select("id, title, description, created")
//     .contains("title", filter);
//   //  TODO add another call to query on description
//   // Merge the to returned lists
//   return filteredNotes;
// };

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

export {};
