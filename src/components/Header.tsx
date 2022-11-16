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
    <div className="flex justify-around">
      <Link to="/">
        <img className="m-8 w-24 h-24" alt="Brainy logo" src="img/brainy_logo.svg" />
      </Link>
      <div className="text-6xl pt-10 text-green-900 font-semibold">
        Brainy Notes
      </div>
      {user ? (
        <span className="max-w-sm pr-8">
          <button
            onClick={handlelogout}
            className=""
          >
            Logout
          </button>
        </span>
      ) : <div className="max-w-sm pr-8"></div>}
    </div>
  );
}
