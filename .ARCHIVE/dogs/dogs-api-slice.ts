import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API = <string>process.env.REACT_APP_DOGS_API;

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1", 
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API);
      return headers;
    },
  }),
  endpoints(builder) {
     return {
	      fetchBreeds: builder.query<Breed[], number|void>({
		      query(limit = 40) {
                         return `/breeds/?limit=${limit}`;
		      }
	      })
     }
  } 
});

export const {useFetchBreedsQuery} = apiSlice