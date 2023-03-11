import { useParams, Link } from "react-router-dom";
// import { supabase } from "api/supabase";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EditNoteForm from "../forms/EditNote";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const NoteDisplay = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [editing, setEditing] = useState(false);

  return null;
};
export { NoteDisplay };
