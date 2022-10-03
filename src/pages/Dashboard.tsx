import { useState } from "react";
import { supabase } from "api/supabase";
import SearchBar from "components/SearchBar";
import { useAuth } from "contexts/Auth";
import { useNavigate } from "react-router-dom";
import NotesList from "./NotesList";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { user, signout } = useAuth();
  const [filter, setFilter] = useState("");
  const {view}= useParams()
  const navigate = useNavigate();
  async function handleSignOut() {
    //    TODO change below line to call imported signout once typed correctly
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div>
      <h1>Welcome, {user?.id}, {view} </h1>
      <button onClick={handleSignOut}>Sign out</button>
      <SearchBar onSearch={(text) => setFilter(text)} />
      {filter && <NotesList filter={filter} />}
      <NotesList filter=""/>
    </div>
  );
}
