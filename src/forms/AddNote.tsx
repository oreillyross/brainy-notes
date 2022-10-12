import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "contexts/Auth";
import { supabase } from "api/supabase";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  // id: z.number(), this will be autogen field on backend
  title: z.string({ invalid_type_error: "Please provide at least a title" }),
  description: z.string().optional(),
  // created_by: z.string(), get this from currently logged in user
});

type TFormData = z.infer<typeof formSchema>;

function AddNoteForm() {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormData>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    const { error, data: inserted } = await supabase
      .from("notes")
      .insert({ ...data, created_by: user!.id });
    if (error) {
      // TODO Replace this with the custom error modal
      alert(`Failed to add note: ERROR: ${error.message}`);
    }
    navigate("/");
  };

  const { user } = useAuth();

  return (
    <form
      className="max-w-xl mx-auto inset-0 rounded "
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="p-2 text-xl" htmlFor="title">Title</label>
      <input className="p-2 w-full border text-slate-800" {...register("title")} />


      <label className="p-2 text-xl"htmlFor="description">Description</label>
      <textarea
        rows={6}
        className=" p-2 w-full border text-slate-800"
        {...register("description")}
      />
      <div className="flex pt-2 align-middle justify-center"><button className="hover:bg-green-700 border w-2/4 rounded-lg text-xl bg-green-800 text-slate-300 mx-auto p-2 text-center" type="submit">Submit</button></div>
    </form>
  );
}

export default AddNoteForm;
