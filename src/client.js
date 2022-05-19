import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_CLIENT_SUPABASE_URL,
  process.env.REACT_CLIENT_SUPABASE_ANON_KEY
);
