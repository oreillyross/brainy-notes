import { createSlice } from "@reduxjs/toolkit";
// import { notes } from "api/fakeNotes";
import { notes } from "api/staticNotes";


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
  reducers: {
    noteAdded(state, action) {
      state.push(action.payload)
    },
    noteUpdated(state, action) {
      const {id, title, description} = action.payload
      const existingNote = state.find(note => note.id === id)
      if (existingNote) {
        existingNote.title = title;
        existingNote.description = description
      }
    }
  },
});


export const {noteAdded, noteUpdated} = notesSlice.actions

export default notesSlice.reducer;