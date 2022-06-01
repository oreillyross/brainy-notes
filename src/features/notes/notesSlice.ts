import { createSlice } from "@reduxjs/toolkit";


type Note = {
    id: string,
    created_at: Date,
    title: string,
    description: string,
    url: string,
}

const initialState: Note[] = [
  {
    id: "123",
    created_at: new Date("2022-05-24 11:19:15.623043+00"),
    title: "Some cool stuff about things",
    description: "More information about cool things",
    url: "http://blah.blah.com",
  },
];



const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});

export default notesSlice.reducer;