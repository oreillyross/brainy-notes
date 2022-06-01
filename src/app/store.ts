import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/dogs/dogs-api-slice";
import notesReducer from "features/notes/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
