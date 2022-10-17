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
    <div className="flex">
      <Link to="/">
        <img className="m-8" alt="Brainy logo" src="img/brainy_logo.svg" />
      </Link>
      <div className="">
        Brainy Notes
      </div>
      {user ? (
        <span className="max-w-sm pr-8">
          <button
            onClick={handlelogout}
            className="border p-6 m-6 rounded bg-green-800 text-white min-w-full text-xl font-semibold"
          >
            Logout
          </button>
        </span>
      ) : null}
    </div>
  );
}
