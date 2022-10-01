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
  links: z.array(z.string()).optional(),
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
      .insert({ ...data, created_by: user?.id });
    if (error) {
      // TODO Replace this with the custom error modal
      alert(`Failed to add note: ERROR: ${error.message}`);
    }
    navigate("/notes");
  };

  const { user } = useAuth();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <div>{errors && JSON.stringify(errors)}</div>
      <input type="submit" />
    </form>
  );
}

export default AddNoteForm;
