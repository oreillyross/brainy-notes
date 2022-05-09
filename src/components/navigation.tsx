import { Link } from "react-router-dom";

const NavigationText = ({
  name,
  to,
  ...props
}: {
  name: string;
  to: string;
}) => {
  return (
    <Link className="text-slate-100 font-medium px-5 py-2 " to={to}>
      {name}
    </Link>
  );
};

function Navigation() {
  return (
    <nav className="rounded-full my-5 bg-orange-900 flex justify-center ">
      <NavigationText name="Home" to="/" />
      <NavigationText name="Notes" to="/notes" />
    </nav>
  );
}

export { Navigation };
