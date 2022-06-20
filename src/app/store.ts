import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "features/notes/notesSlice";
import usersReducer from "features/users/usersSlice";
import { api } from "api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    notes: notesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
