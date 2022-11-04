import { useEffect } from "react";
import Header from "components/Header";
import { getUser, setUser as updateUser } from "api/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { USER } from "types";
import { format } from "date-fns";

export default function UserPage() {
  const [user, setUser] = useState<USER>();

  const { register, handleSubmit, reset } = useForm<USER>({
    defaultValues: user,
  });

  useEffect(() => {
    (async function () {
      const user = await getUser();
      reset(user);
    })();
  }, []);

  const onSubmit = (data: USER) => {
    const { id, ...updated } = data;
    updateUser({ ...updated, updated_at: format(new Date(), "DD MMM YYYY") });
  };

  //   const testUser = {
  //     id: "0d7047d1-6f70-4946-9aa9-6714cc51432a",
  //     username: null,
  //     fullname: "Roo",
  //     avatar_url: null,
  //     website: null,
  //   };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input {...register("username")} type="text" />
        <label>Fullname</label>
        <input {...register("fullname")} type="text" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
