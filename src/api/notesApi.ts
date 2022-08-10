import { supabase } from "client";
import { TNote } from "types/note";

export const fetchNotes = async function () {
  const response = await supabase.from("notes").select("*");
  return response.data;
};

export const deleteANote = async function (id: string) {
  const { data, error } = await supabase.from("notes").delete().match({ id });
  if (error) {
    return error;
  }
  return data as TNote[];
};
