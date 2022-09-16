import {definitions} from "./supabase"

export type NOTE = definitions["notes"];
export type USER = definitions["profiles"]

export type EMAILANDPWD = {
  email: string;
  password: string
}

export type AUTHCONTEXT = {
  signup?: (data: EMAILANDPWD) => void
  signin?: (data: EMAILANDPWD) => void
  signout?: () => void
  user?: USER
}