import { Link } from "react-router-dom";
// import { useAuth } from "contexts/Auth";
export default function Header() {
  // const { user, signout } = useAuth();

  // const handlelogout = () => {
  //   if (signout) {
  //     signout();
  //   }
  // };

  return (
    <div className="flex ">
      <Link className="bg-green-100 w-1/4" to="/">
        <img
          className="p-4 w-32 h-32"
          alt="Brainy logo"
          src="img/brainy_logo.svg"
        />
      </Link>
      <div className="text-4xl mt-5 pl-10 w-2/4 ">Brainy Notes</div>
    </div>
  );
}
