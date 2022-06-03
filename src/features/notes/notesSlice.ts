import { createSlice } from "@reduxjs/toolkit";
import { notes } from "api/fakeNotes";


type Note = {
    id: string,
    created_at: Date,
    title: string,
    description: string,
    url: string,
}

const initialState: Note[] = notes;



const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});

export default notesSlice.reducer;