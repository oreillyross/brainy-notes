import {definitions} from "./supabase"

export type NOTE = definitions["notes"];
export type USER = definitions["profiles"]

export type EMAILANDPWD = {
  email: string;
  password: string
}


