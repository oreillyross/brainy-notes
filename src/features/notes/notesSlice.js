import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { notes } from "api/fakeNotes";
import { notes } from "api/mocks/staticNotes";
import { supabase } from "client";

console.log("Hello from notesSlice");

// type Note = {
//   id: string;
//   created_at: Date;
//   title: string;
//   description: string;
//   url: string;
// };

const initialState = {
  notes: [],
  status: "idle",
  error: null,
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await supabase.from("notes").select("*")
  console.log(response.data);
  
  const notes = response.data
  return notes
  

})



const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    noteAdded(state, action) {
      state.notes.push(action.payload);
    },
    noteUpdated(state, action) {
      const { id, title, description } = action.payload;
      const existingNote = state.notes.find((note) => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.description = description;
      }
    },
  },
});

export const { noteAdded, noteUpdated } = notesSlice.actions;

export default notesSlice.reducer;

export const selectAllNotes = (state ) => state.notes;

export const selectNoteByID = (state) =>
  state.notes.find((note) => note.id === noteId);
