import { useState } from "react";
import { supabase } from "api/supabase";
import SearchBar from "components/SearchBar";
import { useAuth } from "contexts/Auth";
import { useNavigate } from "react-router-dom";
import NotesList from "./NotesList";
import { useParams } from "react-router-dom";
import Navigation from "components/NavigationBar";
export default function Dashboard() {
  const { user, signout } = useAuth(); const [filter, setFilter] = useState("");
  const {view}= useParams()
  const navigate = useNavigate();
  async function handleSignOut() {
    //    TODO change below line to call imported signout once typed correctly
    await supabase.auth.signOut();
    navigate("/");
  }

  const links = [
    { name: "View all notes", link: "/" },
    { name: "View my notes", link: `/notes/user/${user?.id}` },
    { name: "Add a note", link: "/notes/new" },
  ];
  return (
    <>
        <Navigation items={links} />
    <div className="mx-auto max-w-lg md:max-w-3xl container">
      <SearchBar onSearch={(text) => setFilter(text)} />
      {filter && <NotesList filter={filter} />}
      { !filter && <NotesList filter=""/> }
    </div>
    </>
  );
}
