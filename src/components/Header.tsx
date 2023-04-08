import { Link } from "react-router-dom";
import { useAuth } from "contexts/Auth";

export default function Header() {
  const { user, signout } = useAuth();

  // const handlelogout = () => {
  //   if (signout) {
  //     signout();
  //   }
  // };

  return (
    <div className="flex justify-around">
      <Link to="/">
        <img
          className="m-8 w-24 h-24"
          alt="Brainy logo"
          src="img/brainy_logo.svg"
        />
      </Link>
      <div className="text-8xl mt-5 pl-10 w-2/4 ">
        Brainy Notes
      </div>
      {user ? (
        <span className="pr-8 w-1/4">
          <button
            className="border p-1 m-2 rounded bg-green-800 text-white font-semibold"
          >
            Logout
          </button>
        </span>
      ) : null}
    </div>
  );
}
