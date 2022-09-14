import {definitions} from "./supabase"

export type NOTE = definitions["notes"];
export type USER = definitions["profiles"]

export type Note = {
  id: string;
  title: string;
  created_at?: Date;
  description?: string;
  url?: string;
};


export type TStatus = "idle" | "loading" | "succeeded" | "failed"  

