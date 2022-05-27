import { createClient } from "@supabase/supabase-js";

const url = process.env.REACT_APP_SUPABASE_URL;
const anon_key = process.env.REACT_APP_SUPABASE_ANON_KEY;
let supabase = {};
if (url && anon_key) {
  const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_ANON_KEY
  );
}

export { supabase };
