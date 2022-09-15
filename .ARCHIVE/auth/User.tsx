import { supabase } from "supabase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUserDetails() {
      const { data, error } = await supabase
        .from("auth.users")
        .select("user_id, name");
      if (data) {
	console.log(data);
	
      }
    }
    getUserDetails();
  }, []);

  return (
    <section>
      <h1>User management</h1>
    </section>
  );
}
