import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { supabase } from "client";

export type Note = { id: string; title: string; description: string };
interface NoteState {
  fetchStatus: "idle" | "succeeded" | "failed";
  notes: Note[];
  error: string | null;
}

const initialState: NoteState = {
  fetchStatus: "idle",
  notes: [
    {
      id: "1",
      title: "My First note",
      description: "Some more to say about my first note",
    },
  ],
  error: null,
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await supabase
    .from("notes")
    .select("id, title, description");
  return response.data;
});

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    receivedNotes(state, action: PayloadAction<Note[]>) {
      state.notes = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase("notes/fetchNotes/fulfilled", (state, action) => {});
  },
});

export const { receivedNotes } = notesSlice.actions;

export const selectAllNotes = (state: RootState) => state.notes.notes;

export default notesSlice.reducer;
