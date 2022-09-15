import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "brainynotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rujvzbiuxmtjuzepftmt.supabase.co/",
  }),
  endpoints: (builder) => ({
    getNotes: builder.query({ query: () => `notes` }),
  }),
});

export const { useGetNotesQuery } = api;
