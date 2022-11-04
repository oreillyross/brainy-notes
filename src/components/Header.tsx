import { Link } from "react-router-dom";
import { useAuth } from "contexts/Auth";
export default function Header() {
  const { user, signout } = useAuth();

  const handlelogout = () => {
    if (signout) {
      signout();
    }
  };

  return (
    <div className="flex ">
      <Link className="bg-green-100 w-1/4" to="/">
        <img className="p-4 w-32 h-32" alt="Brainy logo" src="img/brainy_logo.svg" />
      </Link>
      <div className="text-4xl mt-5 pl-10 w-2/4 ">
        Brainy Notes
      </div>
      {user ? (
        <span className="pr-8 w-1/4">
          <button
            onClick={handlelogout}
            className="border p-1 m-2 rounded bg-green-800 text-white font-semibold"
          >
            Logout
          </button>
        </span>
      ) : null}
    </div>
  );
}
