import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "App";
import { logout } from "./utils";

interface Props {
  isSignedIn: boolean;
}

export default function SignButton({ isSignedIn }: Props) {
  const user = useContext(UserContext);
  console.log('USER IS', user);
  const navigate = useNavigate();
  return (
    <>
      {!user ? (
        <>
          <button className="px-4 py-2 rounded text-xl text-amber-800 border-2 mx-4 ">
            <Link to="/login">Sign In</Link>
          </button>
          <button className="px-4 py-2 rounded text-xl text-amber-800 border-2 mx-4 ">
            Sign up
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="px-4 py-2 rounded text-xl text-amber-800 border-2 mx-4 "
        >
          Sign out
        </button>
      )}
    </>
  );
}
