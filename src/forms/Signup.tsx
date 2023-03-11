// import { supabase } from "api/supabase";
import { useAuth } from "contexts/Auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

function SignupForm() {
  const { signup } = useAuth();

  const schema = z.object({
    email: z.string().email("Provide a valid email address").min(2),
    password: z.string().min(6,"Password must be longer than 6 characters long"),
  });
 type SignupTypes = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const navigate = useNavigate();

  const formSubmit = async (data: SignupTypes) => {
    console.log(data);
    
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="p-4 max-w-2xl container mx-auto border-slate-400 border-2 m-2"
    >
      <div className="text-2xl mb-8">Sign up</div>

      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Email
      </label>
      <input
        className="bg-gray-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("email")}
        aria-invalid={errors.email ? true : false}
        type="email"
        name="email"
        placeholder="type your email here..."
      />
      {errors.email && <p className="p-2 text-rose-900 font-semibold" role="alert">{errors.email.message}</p>}

      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Password
      </label>
      <input
        className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("password", { required: true })}
        type="password"
        name="password"
        placeholder="type your password here..."
      />
      {errors.password && <p className="p-2 text-rose-900 font-semibold" role="alert">{errors.password.message}</p>}
      <button
        className="rounded text-2xl w-48 block p-4 text-slate-50 bg-green-600"
        type="submit"
      >
        Sign up
      </button>
      <div className="pt-4">
        Already have an account?{" "}
        <Link className="px-2 text-green-700 font-semibold" to="/login">
          {" "}
          Log in
        </Link>
      </div>
    </form>
  );
}

export { SignupForm };
