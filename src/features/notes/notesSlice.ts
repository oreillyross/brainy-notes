import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notes } from "api/staticNotes";


type Note = {
  id: string;
  created_at: Date;
  title: string;
  description: string;
  url: string;
};

export interface NoteState {
  notes: Note[];
}


const initialState: NoteState = [];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
      receivedNotes(state, action: PayloadAction<Note[]>) {
        const notes = action.payload;
        state.notes.push(notes)

      }
  },
  extraReducers: (builder) => {},
});

export const {receivedNotes} = notesSlice.actions;

export default notesSlice.reducer;
