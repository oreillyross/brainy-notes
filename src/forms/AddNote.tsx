import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "api/supabase";
import { useContext } from "react";
import { NOTE, USER } from "types";
import { useAuth } from "contexts/Auth";

const formSchema = z.object({
  id: z.number(),
  title: z.string({ invalid_type_error: "Please provide at least a title" }),
  description: z.string().optional(),
  links: z.array(z.string()).optional(),
  created_by: z.string(),
});

type TFormData = z.infer<typeof formSchema>;

const initialValues: NOTE = {
  id: 0,
  title: "",
  description: "",
  links: [],
  created_by: "",
};

async function addNote(values: NOTE) {
  const { id, ...note } = values;
  console.log(note);
  return await supabase.from<NOTE>("notes").insert(note);
}

function AddNoteForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormData>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    console.log(data);
  };

  const { user } = useAuth();
  return (
    <div className="max-w-md mx-auto border ">
      <h2 className="text-center bg-slate-100 text-slate-800 font-bold py-2 rounded border">
        {" "}
        Add a note
      </h2>
      <Form className="container flex flex-col">
        <label className="px-2 font-bold text-slate-700 pt-2" htmlFor="title">
          Title
        </label>
        <input
          autoFocus
          className=" border placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
          id="title"
          type="text"
          placeholder="type a title"
          {...register("title")}
        />
        <label
          className="px-2 font-bold text-slate-700 pt-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="border placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
          id="description"
          rows={8}
          name="description"
          placeholder="give a meaningful description"
        />

        <label className="px-2 font-bold text-slate-700 pt-2" htmlFor="url">
          Url
        </label>
        <input
          className="border placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
          id="url"
          type="text"
          name="url"
          placeholder="optional"
        />
        <div className="text-center ">
          <button
            className=" focus:text-black mt-4 rounded-md bg-orange-800 text-white p-2 w-48"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddNoteForm;
