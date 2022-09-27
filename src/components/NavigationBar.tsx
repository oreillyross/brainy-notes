import { Link, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useContext } from "react";

interface Props {
  items: { name: string; link: string }[];
}
function Navigation({ items }: Props) {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-full max-w-md px-2 py-16 sm:px-0">
      {items.map((item) => (
        <span key={item.name} className="border p-4 m-2 rounded-lg bg-green-500/20">
          <Link to={item.link}>{item.name}
</Link>        </span>
      ))}
    </div>
  );
}

export default Navigation;
