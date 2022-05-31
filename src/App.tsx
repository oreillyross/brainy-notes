import { Link } from "react-router-dom";
import Navigation from "features/navigation/navigation";

export default function App() {
  return (
    <>
      <div className="container relative px-5 flex">
        <Link to="/">
          <img className="p-6" alt="Brainy logo" src="img/brainy_logo.svg" />
        </Link>
        <div className="app__login">{/* <UserBar /> */}</div>

        <h1 className="m-auto text-6xl font-bold text-amber-900">
          Brainy Notes
        </h1>
      </div>
      <Navigation />
      <div>The home page...</div>
    </>
  );
}
