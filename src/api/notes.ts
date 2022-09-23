import { supabase } from "./supabase";


export const getFilteredNotes = async (filter: string) => {
 const filteredNotes = await supabase.from("notes").select("id, title, description, created").contains("title", filter) 
//  TODO add another call to query on description
// Merge the to returned lists
return filteredNotes
}