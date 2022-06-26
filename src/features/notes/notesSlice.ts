import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { notes } from "api/fakeNotes";
import { notes } from "api/mocks/staticNotes";
import { supabase } from "client";
import {RootState} from "app/store"

type Note = {
  id: string;
  created_at?: Date;
  title: string;
  description?: string;
  url?: string;
};

type NotesState = {
  notes: Note[];
};

const initialState: NotesState = {
  notes: [{ id: "123", title: "My first note from Redux" }],
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await supabase.from("notes").select("*");
  console.log(response.data);
  const notes = response.data;
  return notes;
});

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});


export default notesSlice.reducer;


export const selectAllNotes = (state: NotesState) => state.notes


