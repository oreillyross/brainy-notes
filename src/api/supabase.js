import { createClient } from "@supabase/supabase-js";
import  { Database }  from "types/supabasetypes"

const supabase = createClient<Database>(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export { supabase };
