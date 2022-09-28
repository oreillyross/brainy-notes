import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex">
      <Link to="/">
        <img className="m-8" alt="Brainy logo" src="img/brainy_logo.svg" />
      </Link>
      <div className="m-auto justify-self-center text-6xl py-12 px-8 text-green-700 font-bold">
        Brainy Notes
      </div>
    </div>
  );
}
